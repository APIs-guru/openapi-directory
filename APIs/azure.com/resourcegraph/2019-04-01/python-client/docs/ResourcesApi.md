# openapi_client.ResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resources**](ResourcesApi.md#resources) | **POST** /providers/Microsoft.ResourceGraph/resources | 


# **resources**
> QueryResponse resources(api_version, query)



Queries the resources managed by Azure Resource Manager for all subscriptions specified in the request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_request import QueryRequest
from openapi_client.models.query_response import QueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ResourcesApi(api_client)
    api_version = 'api_version_example' # str | API version.
    query = openapi_client.QueryRequest() # QueryRequest | Request specifying query and its options.

    try:
        api_response = api_instance.resources(api_version, query)
        print("The response of ResourcesApi->resources:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resources: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version. | 
 **query** | [**QueryRequest**](QueryRequest.md)| Request specifying query and its options. | 

### Return type

[**QueryResponse**](QueryResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Result of the query operation |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

