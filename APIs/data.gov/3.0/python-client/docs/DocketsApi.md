# openapi_client.DocketsApi

All URIs are relative to *https://api.data.gov/regulations/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docket**](DocketsApi.md#docket) | **GET** /docket.{response_format} | Returns Docket information


# **docket**
> docket(response_format, docket_id)

Returns Docket information

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.data.gov/regulations/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.data.gov/regulations/v3"
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
    api_instance = openapi_client.DocketsApi(api_client)
    response_format = json # str | Format (default to json)
    docket_id = 'EPA-HQ-OAR-2011-0028' # str | Docket ID (default to 'EPA-HQ-OAR-2011-0028')

    try:
        # Returns Docket information
        api_instance.docket(response_format, docket_id)
    except Exception as e:
        print("Exception when calling DocketsApi->docket: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **response_format** | **str**| Format | [default to json]
 **docket_id** | **str**| Docket ID | [default to &#39;EPA-HQ-OAR-2011-0028&#39;]

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**400** | Bad request. The content is either empty or has been withdrawn. |  -  |
**404** | File not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

