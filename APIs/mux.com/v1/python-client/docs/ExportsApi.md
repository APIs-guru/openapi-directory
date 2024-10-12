# openapi_client.ExportsApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_exports**](ExportsApi.md#list_exports) | **GET** /data/v1/exports | List property video view export links
[**list_exports_views**](ExportsApi.md#list_exports_views) | **GET** /data/v1/exports/views | List available property view exports


# **list_exports**
> ListExportsResponse list_exports()

List property video view export links

The API has been replaced by the list-exports-views API call.  Lists the available video view exports along with URLs to retrieve them. 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_exports_response import ListExportsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportsApi(api_client)

    try:
        # List property video view export links
        api_response = api_instance.list_exports()
        print("The response of ExportsApi->list_exports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportsApi->list_exports: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListExportsResponse**](ListExportsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_exports_views**
> ListVideoViewExportsResponse list_exports_views()

List available property view exports

Lists the available video view exports along with URLs to retrieve them.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_video_view_exports_response import ListVideoViewExportsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExportsApi(api_client)

    try:
        # List available property view exports
        api_response = api_instance.list_exports_views()
        print("The response of ExportsApi->list_exports_views:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExportsApi->list_exports_views: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListVideoViewExportsResponse**](ListVideoViewExportsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

