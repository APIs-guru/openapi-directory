# openapi_client.BackupProtectableItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_protectable_items_list**](BackupProtectableItemsApi.md#backup_protectable_items_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectableItems | 


# **backup_protectable_items_list**
> WorkloadProtectableItemResourceList backup_protectable_items_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)



Provides a pageable list of protectable objects within your subscription according to the query filter and the pagination parameters.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workload_protectable_item_resource_list import WorkloadProtectableItemResourceList
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
    api_instance = openapi_client.BackupProtectableItemsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    filter = 'filter_example' # str | OData filter options. (optional)
    skip_token = 'skip_token_example' # str | skipToken Filter. (optional)

    try:
        api_response = api_instance.backup_protectable_items_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)
        print("The response of BackupProtectableItemsApi->backup_protectable_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupProtectableItemsApi->backup_protectable_items_list: %s\n" % e)
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

[**WorkloadProtectableItemResourceList**](WorkloadProtectableItemResourceList.md)

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

