# openapi_client.CrrOperationResultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crr_operation_results_get**](CrrOperationResultsApi.md#crr_operation_results_get) | **GET** /Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupCrrOperationResults/{operationId} | 


# **crr_operation_results_get**
> crr_operation_results_get(api_version, azure_region, subscription_id, operation_id)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.CrrOperationResultsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    azure_region = 'azure_region_example' # str | Azure region to hit Api
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    operation_id = 'operation_id_example' # str | 

    try:
        api_instance.crr_operation_results_get(api_version, azure_region, subscription_id, operation_id)
    except Exception as e:
        print("Exception when calling CrrOperationResultsApi->crr_operation_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **azure_region** | **str**| Azure region to hit Api | 
 **subscription_id** | **str**| The subscription Id. | 
 **operation_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

