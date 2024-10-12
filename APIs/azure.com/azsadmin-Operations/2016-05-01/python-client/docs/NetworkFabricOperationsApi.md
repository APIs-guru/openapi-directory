# openapi_client.NetworkFabricOperationsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_fabric_operations_get**](NetworkFabricOperationsApi.md#network_fabric_operations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/System.{location}/providers/{provider}/fabricLocations/{location}/networkOperationResults/{networkOperationResult} | 


# **network_fabric_operations_get**
> OperationStatus network_fabric_operations_get(subscription_id, location, provider, network_operation_result, api_version)



Get the status of a network fabric operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NetworkFabricOperationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Location of the resource.
    provider = 'provider_example' # str | Name of the provider.
    network_operation_result = 'network_operation_result_example' # str | Id of a network fabric operation.
    api_version = '2016-05-01' # str | Client Api Version. (default to '2016-05-01')

    try:
        api_response = api_instance.network_fabric_operations_get(subscription_id, location, provider, network_operation_result, api_version)
        print("The response of NetworkFabricOperationsApi->network_fabric_operations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkFabricOperationsApi->network_fabric_operations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Location of the resource. | 
 **provider** | **str**| Name of the provider. | 
 **network_operation_result** | **str**| Id of a network fabric operation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**OperationStatus**](OperationStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

