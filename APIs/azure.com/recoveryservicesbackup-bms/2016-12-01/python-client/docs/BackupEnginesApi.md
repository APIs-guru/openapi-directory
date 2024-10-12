# openapi_client.BackupEnginesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_engines_get**](BackupEnginesApi.md#backup_engines_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEngines/{backupEngineName} | 
[**backup_engines_list**](BackupEnginesApi.md#backup_engines_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupEngines | 


# **backup_engines_get**
> BackupEngineBaseResource backup_engines_get(api_version, vault_name, resource_group_name, subscription_id, backup_engine_name, filter=filter, skip_token=skip_token)



Returns backup management server registered to Recovery Services Vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_engine_base_resource import BackupEngineBaseResource
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
    api_instance = openapi_client.BackupEnginesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    backup_engine_name = 'backup_engine_name_example' # str | Name of the backup management server.
    filter = 'filter_example' # str | OData filter options. (optional)
    skip_token = 'skip_token_example' # str | skipToken Filter. (optional)

    try:
        api_response = api_instance.backup_engines_get(api_version, vault_name, resource_group_name, subscription_id, backup_engine_name, filter=filter, skip_token=skip_token)
        print("The response of BackupEnginesApi->backup_engines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupEnginesApi->backup_engines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **backup_engine_name** | **str**| Name of the backup management server. | 
 **filter** | **str**| OData filter options. | [optional] 
 **skip_token** | **str**| skipToken Filter. | [optional] 

### Return type

[**BackupEngineBaseResource**](BackupEngineBaseResource.md)

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

# **backup_engines_list**
> BackupEngineBaseResourceList backup_engines_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)



Backup management servers registered to Recovery Services Vault. Returns a pageable list of servers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_engine_base_resource_list import BackupEngineBaseResourceList
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
    api_instance = openapi_client.BackupEnginesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    filter = 'filter_example' # str | OData filter options. (optional)
    skip_token = 'skip_token_example' # str | skipToken Filter. (optional)

    try:
        api_response = api_instance.backup_engines_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)
        print("The response of BackupEnginesApi->backup_engines_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupEnginesApi->backup_engines_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **filter** | **str**| OData filter options. | [optional] 
 **skip_token** | **str**| skipToken Filter. | [optional] 

### Return type

[**BackupEngineBaseResourceList**](BackupEngineBaseResourceList.md)

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

