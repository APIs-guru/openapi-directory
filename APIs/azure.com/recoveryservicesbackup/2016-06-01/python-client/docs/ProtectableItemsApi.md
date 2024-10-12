# openapi_client.ProtectableItemsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protectable_items_list**](ProtectableItemsApi.md#protectable_items_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupProtectableItems | 


# **protectable_items_list**
> WorkloadProtectableItemResourceList protectable_items_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)



Based on the query filter and the pagination parameters, this operation provides a pageable list of objects within the subscription that can be protected.

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
    api_instance = openapi_client.ProtectableItemsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    vault_name = 'vault_name_example' # str | The name of the Recovery Services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group associated with the Recovery Services vault.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    filter = 'filter_example' # str | Using the following query filters, you can sort a specific backup item based on: type of backup item, status, name of the item, and more.  providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and status eq { NotProtected , Protecting , Protected } and friendlyName {name} and skipToken eq {string which provides the next set of list} and topToken eq {int} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }. (optional)
    skip_token = 'skip_token_example' # str | The Skip Token filter. (optional)

    try:
        api_response = api_instance.protectable_items_list(api_version, vault_name, resource_group_name, subscription_id, filter=filter, skip_token=skip_token)
        print("The response of ProtectableItemsApi->protectable_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectableItemsApi->protectable_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **vault_name** | **str**| The name of the Recovery Services vault. | 
 **resource_group_name** | **str**| The name of the resource group associated with the Recovery Services vault. | 
 **subscription_id** | **str**| The subscription ID. | 
 **filter** | **str**| Using the following query filters, you can sort a specific backup item based on: type of backup item, status, name of the item, and more.  providerType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql } and status eq { NotProtected , Protecting , Protected } and friendlyName {name} and skipToken eq {string which provides the next set of list} and topToken eq {int} and backupManagementType eq { AzureIaasVM, MAB, DPM, AzureBackupServer, AzureSql }. | [optional] 
 **skip_token** | **str**| The Skip Token filter. | [optional] 

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

