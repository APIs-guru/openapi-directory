# openapi_client.ReplicationProtectionContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_protection_containers_create**](ReplicationProtectionContainersApi.md#replication_protection_containers_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName} | Create a protection container.
[**replication_protection_containers_delete**](ReplicationProtectionContainersApi.md#replication_protection_containers_delete) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/remove | Removes a protection container.
[**replication_protection_containers_discover_protectable_item**](ReplicationProtectionContainersApi.md#replication_protection_containers_discover_protectable_item) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/discoverProtectableItem | Adds a protectable item to the replication protection container.
[**replication_protection_containers_get**](ReplicationProtectionContainersApi.md#replication_protection_containers_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName} | Gets the protection container details.
[**replication_protection_containers_list**](ReplicationProtectionContainersApi.md#replication_protection_containers_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainers | Gets the list of all protection containers in a vault.
[**replication_protection_containers_list_by_replication_fabrics**](ReplicationProtectionContainersApi.md#replication_protection_containers_list_by_replication_fabrics) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers | Gets the list of protection container for a fabric.
[**replication_protection_containers_switch_protection**](ReplicationProtectionContainersApi.md#replication_protection_containers_switch_protection) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/switchprotection | Switches protection from one container to another or one replication provider to another.


# **replication_protection_containers_create**
> ProtectionContainer replication_protection_containers_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, creation_input)

Create a protection container.

Operation to create a protection container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_protection_container_input import CreateProtectionContainerInput
from openapi_client.models.protection_container import ProtectionContainer
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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric ARM name.
    protection_container_name = 'protection_container_name_example' # str | Unique protection container ARM name.
    creation_input = openapi_client.CreateProtectionContainerInput() # CreateProtectionContainerInput | Creation input.

    try:
        # Create a protection container.
        api_response = api_instance.replication_protection_containers_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, creation_input)
        print("The response of ReplicationProtectionContainersApi->replication_protection_containers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric ARM name. | 
 **protection_container_name** | **str**| Unique protection container ARM name. | 
 **creation_input** | [**CreateProtectionContainerInput**](CreateProtectionContainerInput.md)| Creation input. | 

### Return type

[**ProtectionContainer**](ProtectionContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protection_containers_delete**
> replication_protection_containers_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)

Removes a protection container.

Operation to remove a protection container.

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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric ARM name.
    protection_container_name = 'protection_container_name_example' # str | Unique protection container ARM name.

    try:
        # Removes a protection container.
        api_instance.replication_protection_containers_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric ARM name. | 
 **protection_container_name** | **str**| Unique protection container ARM name. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protection_containers_discover_protectable_item**
> ProtectionContainer replication_protection_containers_discover_protectable_item(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, discover_protectable_item_request)

Adds a protectable item to the replication protection container.

The operation to a add a protectable item to a protection container(Add physical server.)

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.discover_protectable_item_request import DiscoverProtectableItemRequest
from openapi_client.models.protection_container import ProtectionContainer
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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | The name of the fabric.
    protection_container_name = 'protection_container_name_example' # str | The name of the protection container.
    discover_protectable_item_request = openapi_client.DiscoverProtectableItemRequest() # DiscoverProtectableItemRequest | The request object to add a protectable item.

    try:
        # Adds a protectable item to the replication protection container.
        api_response = api_instance.replication_protection_containers_discover_protectable_item(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, discover_protectable_item_request)
        print("The response of ReplicationProtectionContainersApi->replication_protection_containers_discover_protectable_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_discover_protectable_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| The name of the fabric. | 
 **protection_container_name** | **str**| The name of the protection container. | 
 **discover_protectable_item_request** | [**DiscoverProtectableItemRequest**](DiscoverProtectableItemRequest.md)| The request object to add a protectable item. | 

### Return type

[**ProtectionContainer**](ProtectionContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_protection_containers_get**
> ProtectionContainer replication_protection_containers_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)

Gets the protection container details.

Gets the details of a protection container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container import ProtectionContainer
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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.

    try:
        # Gets the protection container details.
        api_response = api_instance.replication_protection_containers_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name)
        print("The response of ReplicationProtectionContainersApi->replication_protection_containers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 

### Return type

[**ProtectionContainer**](ProtectionContainer.md)

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

# **replication_protection_containers_list**
> ProtectionContainerCollection replication_protection_containers_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of all protection containers in a vault.

Lists the protection containers in a vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_collection import ProtectionContainerCollection
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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of all protection containers in a vault.
        api_response = api_instance.replication_protection_containers_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationProtectionContainersApi->replication_protection_containers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**ProtectionContainerCollection**](ProtectionContainerCollection.md)

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

# **replication_protection_containers_list_by_replication_fabrics**
> ProtectionContainerCollection replication_protection_containers_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Gets the list of protection container for a fabric.

Lists the protection containers in the specified fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container_collection import ProtectionContainerCollection
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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.

    try:
        # Gets the list of protection container for a fabric.
        api_response = api_instance.replication_protection_containers_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
        print("The response of ReplicationProtectionContainersApi->replication_protection_containers_list_by_replication_fabrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_list_by_replication_fabrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 

### Return type

[**ProtectionContainerCollection**](ProtectionContainerCollection.md)

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

# **replication_protection_containers_switch_protection**
> ProtectionContainer replication_protection_containers_switch_protection(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, switch_input)

Switches protection from one container to another or one replication provider to another.

Operation to switch protection from one container to another or one replication provider to another.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.protection_container import ProtectionContainer
from openapi_client.models.switch_protection_input import SwitchProtectionInput
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
    api_instance = openapi_client.ReplicationProtectionContainersApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Unique fabric name.
    protection_container_name = 'protection_container_name_example' # str | Protection container name.
    switch_input = openapi_client.SwitchProtectionInput() # SwitchProtectionInput | Switch protection input.

    try:
        # Switches protection from one container to another or one replication provider to another.
        api_response = api_instance.replication_protection_containers_switch_protection(api_version, resource_name, resource_group_name, subscription_id, fabric_name, protection_container_name, switch_input)
        print("The response of ReplicationProtectionContainersApi->replication_protection_containers_switch_protection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationProtectionContainersApi->replication_protection_containers_switch_protection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Unique fabric name. | 
 **protection_container_name** | **str**| Protection container name. | 
 **switch_input** | [**SwitchProtectionInput**](SwitchProtectionInput.md)| Switch protection input. | 

### Return type

[**ProtectionContainer**](ProtectionContainer.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

