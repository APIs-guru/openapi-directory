# openapi_client.TargetComputeSizesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**target_compute_sizes_list_by_replication_protected_items**](TargetComputeSizesApi.md#target_compute_sizes_list_by_replication_protected_items) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/targetComputeSizes | Gets the list of target compute sizes for the replication protected item.


# **target_compute_sizes_list_by_replication_protected_items**
> TargetComputeSizeCollection target_compute_sizes_list_by_replication_protected_items(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)

Gets the list of target compute sizes for the replication protected item.

Lists the available target compute sizes for a replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.target_compute_size_collection import TargetComputeSizeCollection
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
    api_instance = openapi_client.TargetComputeSizesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | Replication protected item name.

    try:
        # Gets the list of target compute sizes for the replication protected item.
        api_response = api_instance.target_compute_sizes_list_by_replication_protected_items(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)
        print("The response of TargetComputeSizesApi->target_compute_sizes_list_by_replication_protected_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TargetComputeSizesApi->target_compute_sizes_list_by_replication_protected_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| protection container name. | 
 **replicated_protected_item_name** | **str**| Replication protected item name. | 

### Return type

[**TargetComputeSizeCollection**](TargetComputeSizeCollection.md)

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

