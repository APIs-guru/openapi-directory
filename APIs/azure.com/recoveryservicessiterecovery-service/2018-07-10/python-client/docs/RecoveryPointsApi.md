# openapi_client.RecoveryPointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recovery_points_get**](RecoveryPointsApi.md#recovery_points_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/recoveryPoints/{recoveryPointName} | Get a recovery point.
[**recovery_points_list_by_replication_protected_items**](RecoveryPointsApi.md#recovery_points_list_by_replication_protected_items) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectedItems/{replicatedProtectedItemName}/recoveryPoints | Get recovery points for a replication protected item.


# **recovery_points_get**
> RecoveryPoint recovery_points_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, recovery_point_name)

Get a recovery point.

Get the details of specified recovery point.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_point import RecoveryPoint
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
    api_instance = openapi_client.RecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The fabric name.
    protection_container_name = 'protection_container_name_example' # str | The protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | The replication protected item's name.
    recovery_point_name = 'recovery_point_name_example' # str | The recovery point name.

    try:
        # Get a recovery point.
        api_response = api_instance.recovery_points_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name, recovery_point_name)
        print("The response of RecoveryPointsApi->recovery_points_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecoveryPointsApi->recovery_points_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The fabric name. | 
 **protection_container_name** | **str**| The protection container name. | 
 **replicated_protected_item_name** | **str**| The replication protected item&#39;s name. | 
 **recovery_point_name** | **str**| The recovery point name. | 

### Return type

[**RecoveryPoint**](RecoveryPoint.md)

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

# **recovery_points_list_by_replication_protected_items**
> RecoveryPointCollection recovery_points_list_by_replication_protected_items(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)

Get recovery points for a replication protected item.

Lists the available recovery points for a replication protected item.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_point_collection import RecoveryPointCollection
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
    api_instance = openapi_client.RecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The fabric name.
    protection_container_name = 'protection_container_name_example' # str | The protection container name.
    replicated_protected_item_name = 'replicated_protected_item_name_example' # str | The replication protected item's name.

    try:
        # Get recovery points for a replication protected item.
        api_response = api_instance.recovery_points_list_by_replication_protected_items(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, replicated_protected_item_name)
        print("The response of RecoveryPointsApi->recovery_points_list_by_replication_protected_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecoveryPointsApi->recovery_points_list_by_replication_protected_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The fabric name. | 
 **protection_container_name** | **str**| The protection container name. | 
 **replicated_protected_item_name** | **str**| The replication protected item&#39;s name. | 

### Return type

[**RecoveryPointCollection**](RecoveryPointCollection.md)

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

