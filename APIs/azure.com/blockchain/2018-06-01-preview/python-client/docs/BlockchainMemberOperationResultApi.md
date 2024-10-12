# openapi_client.BlockchainMemberOperationResultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blockchain_member_operation_results_get**](BlockchainMemberOperationResultApi.md#blockchain_member_operation_results_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/locations/{locationName}/blockchainMemberOperationResults/{operationId} | 


# **blockchain_member_operation_results_get**
> OperationResult blockchain_member_operation_results_get(location_name, operation_id, api_version, subscription_id)



Get Async operation result.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_result import OperationResult
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
    api_instance = openapi_client.BlockchainMemberOperationResultApi(api_client)
    location_name = 'location_name_example' # str | Location name.
    operation_id = 'operation_id_example' # str | Operation Id.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

    try:
        api_response = api_instance.blockchain_member_operation_results_get(location_name, operation_id, api_version, subscription_id)
        print("The response of BlockchainMemberOperationResultApi->blockchain_member_operation_results_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlockchainMemberOperationResultApi->blockchain_member_operation_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| Location name. | 
 **operation_id** | **str**| Operation Id. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

