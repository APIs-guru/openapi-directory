# openapi_client.ToolsApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tools_share_file**](ToolsApi.md#tools_share_file) | **POST** /v1/tools/sharefile | Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS


# **tools_share_file**
> ShareFileResponse tools_share_file(body)

Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.share_file_response import ShareFileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ToolsApi(api_client)
    body = None # bytearray | 

    try:
        # Share file - use to host a file and generate a short link to be used directly in a message or as a link to media for a MMS
        api_response = api_instance.tools_share_file(body)
        print("The response of ToolsApi->tools_share_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ToolsApi->tools_share_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **bytearray**|  | 

### Return type

[**ShareFileResponse**](ShareFileResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: application/octet-stream, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**4XX** | invalid request |  -  |
**5XX** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

