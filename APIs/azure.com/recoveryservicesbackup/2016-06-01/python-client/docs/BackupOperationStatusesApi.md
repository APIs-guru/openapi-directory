# openapi_client.BackupOperationStatusesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_operation_statuses_get**](BackupOperationStatusesApi.md#backup_operation_statuses_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupOperations/{operationId} | 


# **backup_operation_statuses_get**
> OperationStatus backup_operation_statuses_get(api_version, vault_name, resource_group_name, subscription_id, operation_id)



Gets the status of an operation such as triggering a backup or restore. The status can be In progress, Completed or Failed. You can refer to the OperationStatus enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs when the operation is complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
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
    api_instance = openapi_client.BackupOperationStatusesApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    operation_id = 'operation_id_example' # str | The ID of the operation.

    try:
        api_response = api_instance.backup_operation_statuses_get(api_version, vault_name, resource_group_name, subscription_id, operation_id)
        print("The response of BackupOperationStatusesApi->backup_operation_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupOperationStatusesApi->backup_operation_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **operation_id** | **str**| The ID of the operation. | 

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
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

