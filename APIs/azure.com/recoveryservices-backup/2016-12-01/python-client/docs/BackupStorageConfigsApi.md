# openapi_client.BackupStorageConfigsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_storage_configs_get**](BackupStorageConfigsApi.md#backup_storage_configs_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig | 
[**backup_storage_configs_update**](BackupStorageConfigsApi.md#backup_storage_configs_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupstorageconfig/vaultstorageconfig | 


# **backup_storage_configs_get**
> BackupStorageConfig backup_storage_configs_get(subscription_id, api_version, resource_group_name, vault_name)



Fetches resource storage config.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_storage_config import BackupStorageConfig
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
    api_instance = openapi_client.BackupStorageConfigsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.

    try:
        api_response = api_instance.backup_storage_configs_get(subscription_id, api_version, resource_group_name, vault_name)
        print("The response of BackupStorageConfigsApi->backup_storage_configs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupStorageConfigsApi->backup_storage_configs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 

### Return type

[**BackupStorageConfig**](BackupStorageConfig.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_storage_configs_update**
> backup_storage_configs_update(subscription_id, api_version, resource_group_name, vault_name, backup_storage_config)



Updates vault storage model type.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_storage_config import BackupStorageConfig
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
    api_instance = openapi_client.BackupStorageConfigsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    backup_storage_config = openapi_client.BackupStorageConfig() # BackupStorageConfig | Backup storage config.

    try:
        api_instance.backup_storage_configs_update(subscription_id, api_version, resource_group_name, vault_name, backup_storage_config)
    except Exception as e:
        print("Exception when calling BackupStorageConfigsApi->backup_storage_configs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **api_version** | **str**| Client Api Version. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **backup_storage_config** | [**BackupStorageConfig**](BackupStorageConfig.md)| Backup storage config. | 

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
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

