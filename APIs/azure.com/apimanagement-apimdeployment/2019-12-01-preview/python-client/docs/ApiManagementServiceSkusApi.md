# openapi_client.ApiManagementServiceSkusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_management_service_skus_list_available_service_skus**](ApiManagementServiceSkusApi.md#api_management_service_skus_list_available_service_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/skus | Gets available SKUs for API Management service


# **api_management_service_skus_list_available_service_skus**
> ResourceSkuResults api_management_service_skus_list_available_service_skus(resource_group_name, service_name, api_version, subscription_id)

Gets available SKUs for API Management service

Gets all available SKU for a given API Management service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_sku_results import ResourceSkuResults
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
    api_instance = openapi_client.ApiManagementServiceSkusApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets available SKUs for API Management service
        api_response = api_instance.api_management_service_skus_list_available_service_skus(resource_group_name, service_name, api_version, subscription_id)
        print("The response of ApiManagementServiceSkusApi->api_management_service_skus_list_available_service_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiManagementServiceSkusApi->api_management_service_skus_list_available_service_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ResourceSkuResults**](ResourceSkuResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of SKUs. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

