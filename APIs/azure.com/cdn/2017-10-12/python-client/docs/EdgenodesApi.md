# openapi_client.EdgenodesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edge_nodes_list**](EdgenodesApi.md#edge_nodes_list) | **GET** /providers/Microsoft.Cdn/edgenodes | 


# **edge_nodes_list**
> EdgenodeResult edge_nodes_list(api_version)



Edgenodes are the global Point of Presence (POP) locations used to deliver CDN content to end users.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.edgenode_result import EdgenodeResult
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
    api_instance = openapi_client.EdgenodesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.

    try:
        api_response = api_instance.edge_nodes_list(api_version)
        print("The response of EdgenodesApi->edge_nodes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EdgenodesApi->edge_nodes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 

### Return type

[**EdgenodeResult**](EdgenodeResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

