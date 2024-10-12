# openapi_client.ReplicationLogicalNetworksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_logical_networks_get**](ReplicationLogicalNetworksApi.md#replication_logical_networks_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks/{logicalNetworkName} | Gets a logical network with specified server id and logical network name.
[**replication_logical_networks_list_by_replication_fabrics**](ReplicationLogicalNetworksApi.md#replication_logical_networks_list_by_replication_fabrics) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks | Gets the list of logical networks under a fabric.


# **replication_logical_networks_get**
> LogicalNetwork replication_logical_networks_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, logical_network_name)

Gets a logical network with specified server id and logical network name.

Gets the details of a logical network.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.logical_network import LogicalNetwork
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
    api_instance = openapi_client.ReplicationLogicalNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Server Id.
    logical_network_name = 'logical_network_name_example' # str | Logical network name.

    try:
        # Gets a logical network with specified server id and logical network name.
        api_response = api_instance.replication_logical_networks_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, logical_network_name)
        print("The response of ReplicationLogicalNetworksApi->replication_logical_networks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationLogicalNetworksApi->replication_logical_networks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Server Id. | 
 **logical_network_name** | **str**| Logical network name. | 

### Return type

[**LogicalNetwork**](LogicalNetwork.md)

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

# **replication_logical_networks_list_by_replication_fabrics**
> LogicalNetworkCollection replication_logical_networks_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Gets the list of logical networks under a fabric.

Lists all the logical networks of the Azure Site Recovery fabric

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.logical_network_collection import LogicalNetworkCollection
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
    api_instance = openapi_client.ReplicationLogicalNetworksApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Server Id.

    try:
        # Gets the list of logical networks under a fabric.
        api_response = api_instance.replication_logical_networks_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
        print("The response of ReplicationLogicalNetworksApi->replication_logical_networks_list_by_replication_fabrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationLogicalNetworksApi->replication_logical_networks_list_by_replication_fabrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Server Id. | 

### Return type

[**LogicalNetworkCollection**](LogicalNetworkCollection.md)

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

