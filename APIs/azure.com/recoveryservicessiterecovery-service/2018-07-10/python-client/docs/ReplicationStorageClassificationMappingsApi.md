# openapi_client.ReplicationStorageClassificationMappingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_storage_classification_mappings_create**](ReplicationStorageClassificationMappingsApi.md#replication_storage_classification_mappings_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName} | Create storage classification mapping.
[**replication_storage_classification_mappings_delete**](ReplicationStorageClassificationMappingsApi.md#replication_storage_classification_mappings_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName} | Delete a storage classification mapping.
[**replication_storage_classification_mappings_get**](ReplicationStorageClassificationMappingsApi.md#replication_storage_classification_mappings_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings/{storageClassificationMappingName} | Gets the details of a storage classification mapping.
[**replication_storage_classification_mappings_list**](ReplicationStorageClassificationMappingsApi.md#replication_storage_classification_mappings_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassificationMappings | Gets the list of storage classification mappings objects under a vault.
[**replication_storage_classification_mappings_list_by_replication_storage_classifications**](ReplicationStorageClassificationMappingsApi.md#replication_storage_classification_mappings_list_by_replication_storage_classifications) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName}/replicationStorageClassificationMappings | Gets the list of storage classification mappings objects under a storage.


# **replication_storage_classification_mappings_create**
> StorageClassificationMapping replication_storage_classification_mappings_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name, storage_classification_mapping_name, pairing_input)

Create storage classification mapping.

The operation to create a storage classification mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification_mapping import StorageClassificationMapping
from openapi_client.models.storage_classification_mapping_input import StorageClassificationMappingInput
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
    api_instance = openapi_client.ReplicationStorageClassificationMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    storage_classification_name = 'storage_classification_name_example' # str | Storage classification name.
    storage_classification_mapping_name = 'storage_classification_mapping_name_example' # str | Storage classification mapping name.
    pairing_input = openapi_client.StorageClassificationMappingInput() # StorageClassificationMappingInput | Pairing input.

    try:
        # Create storage classification mapping.
        api_response = api_instance.replication_storage_classification_mappings_create(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name, storage_classification_mapping_name, pairing_input)
        print("The response of ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **storage_classification_name** | **str**| Storage classification name. | 
 **storage_classification_mapping_name** | **str**| Storage classification mapping name. | 
 **pairing_input** | [**StorageClassificationMappingInput**](StorageClassificationMappingInput.md)| Pairing input. | 

### Return type

[**StorageClassificationMapping**](StorageClassificationMapping.md)

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

# **replication_storage_classification_mappings_delete**
> replication_storage_classification_mappings_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name, storage_classification_mapping_name)

Delete a storage classification mapping.

The operation to delete a storage classification mapping.

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
    api_instance = openapi_client.ReplicationStorageClassificationMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    storage_classification_name = 'storage_classification_name_example' # str | Storage classification name.
    storage_classification_mapping_name = 'storage_classification_mapping_name_example' # str | Storage classification mapping name.

    try:
        # Delete a storage classification mapping.
        api_instance.replication_storage_classification_mappings_delete(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name, storage_classification_mapping_name)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **storage_classification_name** | **str**| Storage classification name. | 
 **storage_classification_mapping_name** | **str**| Storage classification mapping name. | 

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

# **replication_storage_classification_mappings_get**
> StorageClassificationMapping replication_storage_classification_mappings_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name, storage_classification_mapping_name)

Gets the details of a storage classification mapping.

Gets the details of the specified storage classification mapping.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification_mapping import StorageClassificationMapping
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
    api_instance = openapi_client.ReplicationStorageClassificationMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    storage_classification_name = 'storage_classification_name_example' # str | Storage classification name.
    storage_classification_mapping_name = 'storage_classification_mapping_name_example' # str | Storage classification mapping name.

    try:
        # Gets the details of a storage classification mapping.
        api_response = api_instance.replication_storage_classification_mappings_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name, storage_classification_mapping_name)
        print("The response of ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **storage_classification_name** | **str**| Storage classification name. | 
 **storage_classification_mapping_name** | **str**| Storage classification mapping name. | 

### Return type

[**StorageClassificationMapping**](StorageClassificationMapping.md)

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

# **replication_storage_classification_mappings_list**
> StorageClassificationMappingCollection replication_storage_classification_mappings_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of storage classification mappings objects under a vault.

Lists the storage classification mappings in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification_mapping_collection import StorageClassificationMappingCollection
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
    api_instance = openapi_client.ReplicationStorageClassificationMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of storage classification mappings objects under a vault.
        api_response = api_instance.replication_storage_classification_mappings_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**StorageClassificationMappingCollection**](StorageClassificationMappingCollection.md)

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

# **replication_storage_classification_mappings_list_by_replication_storage_classifications**
> StorageClassificationMappingCollection replication_storage_classification_mappings_list_by_replication_storage_classifications(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name)

Gets the list of storage classification mappings objects under a storage.

Lists the storage classification mappings for the fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification_mapping_collection import StorageClassificationMappingCollection
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
    api_instance = openapi_client.ReplicationStorageClassificationMappingsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    storage_classification_name = 'storage_classification_name_example' # str | Storage classification name.

    try:
        # Gets the list of storage classification mappings objects under a storage.
        api_response = api_instance.replication_storage_classification_mappings_list_by_replication_storage_classifications(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name)
        print("The response of ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_list_by_replication_storage_classifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationMappingsApi->replication_storage_classification_mappings_list_by_replication_storage_classifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name. | 
 **storage_classification_name** | **str**| Storage classification name. | 

### Return type

[**StorageClassificationMappingCollection**](StorageClassificationMappingCollection.md)

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

