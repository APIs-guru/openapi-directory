# openapi_client.ResourceProviderOperationDetailsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_provider_operation_details_list**](ResourceProviderOperationDetailsApi.md#resource_provider_operation_details_list) | **GET** /providers/{resourceProviderNamespace}/operations | 


# **resource_provider_operation_details_list**
> ResourceProviderOperationDetailListResult resource_provider_operation_details_list(resource_provider_namespace, api_version)



Gets a list of resource providers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_provider_operation_detail_list_result import ResourceProviderOperationDetailListResult
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
    api_instance = openapi_client.ResourceProviderOperationDetailsApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | Resource identity.
    api_version = 'api_version_example' # str | 

    try:
        api_response = api_instance.resource_provider_operation_details_list(resource_provider_namespace, api_version)
        print("The response of ResourceProviderOperationDetailsApi->resource_provider_operation_details_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceProviderOperationDetailsApi->resource_provider_operation_details_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| Resource identity. | 
 **api_version** | **str**|  | 

### Return type

[**ResourceProviderOperationDetailListResult**](ResourceProviderOperationDetailListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

