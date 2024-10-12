# openapi_client.BackupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backups_trigger**](BackupsApi.md#backups_trigger) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/backup | 


# **backups_trigger**
> backups_trigger(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, parameters)



Triggers backup for specified backed up item. This is an asynchronous operation. To know the status of the  operation, call GetProtectedItemOperationResult API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_request_resource import BackupRequestResource
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
    api_instance = openapi_client.BackupsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the backup item.
    container_name = 'container_name_example' # str | Container name associated with the backup item.
    protected_item_name = 'protected_item_name_example' # str | Backup item for which backup needs to be triggered.
    parameters = openapi_client.BackupRequestResource() # BackupRequestResource | resource backup request

    try:
        api_instance.backups_trigger(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, parameters)
    except Exception as e:
        print("Exception when calling BackupsApi->backups_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the backup item. | 
 **container_name** | **str**| Container name associated with the backup item. | 
 **protected_item_name** | **str**| Backup item for which backup needs to be triggered. | 
 **parameters** | [**BackupRequestResource**](BackupRequestResource.md)| resource backup request | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

