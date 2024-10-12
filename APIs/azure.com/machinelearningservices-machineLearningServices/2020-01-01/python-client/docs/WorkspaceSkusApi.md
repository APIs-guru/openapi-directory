# openapi_client.WorkspaceSkusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_skus**](WorkspaceSkusApi.md#list_skus) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MachineLearningServices/workspaces/skus | 


# **list_skus**
> SkuListResult list_skus(api_version, subscription_id)



Lists all skus with associated features

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_list_result import SkuListResult
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
    api_instance = openapi_client.WorkspaceSkusApi(api_client)
    api_version = 'api_version_example' # str | Version of Azure Machine Learning resource provider API.
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.

    try:
        api_response = api_instance.list_skus(api_version, subscription_id)
        print("The response of WorkspaceSkusApi->list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceSkusApi->list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of Azure Machine Learning resource provider API. | 
 **subscription_id** | **str**| Azure subscription identifier. | 

### Return type

[**SkuListResult**](SkuListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the request was well-formed and received properly. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

