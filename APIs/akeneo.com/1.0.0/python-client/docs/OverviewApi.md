# openapi_client.OverviewApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_endpoints**](OverviewApi.md#get_endpoints) | **GET** /api/rest/v1 | Get list of all endpoints


# **get_endpoints**
> GetEndpoints200Response get_endpoints()

Get list of all endpoints

This endpoint allows you to get the list of all the available endpoints. No need to be authenticated to use this endpoint.

### Example


```python
import openapi_client
from openapi_client.models.get_endpoints200_response import GetEndpoints200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OverviewApi(api_client)

    try:
        # Get list of all endpoints
        api_response = api_instance.get_endpoints()
        print("The response of OverviewApi->get_endpoints:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OverviewApi->get_endpoints: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetEndpoints200Response**](GetEndpoints200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, authentication, host, routes, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the list of all available endpoints |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

