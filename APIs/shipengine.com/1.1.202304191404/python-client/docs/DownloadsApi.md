# openapi_client.DownloadsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_file**](DownloadsApi.md#download_file) | **GET** /v1/downloads/{dir}/{subdir}/{filename} | Download File


# **download_file**
> bytearray download_file(subdir, filename, dir, download=download, rotation=rotation)

Download File

Get File

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DownloadsApi(api_client)
    subdir = 'subdir_example' # str | 
    filename = 'filename_example' # str | 
    dir = 'dir_example' # str | 
    download = 'download_example' # str |  (optional)
    rotation = 56 # int |  (optional)

    try:
        # Download File
        api_response = api_instance.download_file(subdir, filename, dir, download=download, rotation=rotation)
        print("The response of DownloadsApi->download_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadsApi->download_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subdir** | **str**|  | 
 **filename** | **str**|  | 
 **dir** | **str**|  | 
 **download** | **str**|  | [optional] 
 **rotation** | **int**|  | [optional] 

### Return type

**bytearray**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/zpl, image/png, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

