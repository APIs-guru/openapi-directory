# openapi_client.ReplicationStorageClassificationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_storage_classifications_get**](ReplicationStorageClassificationsApi.md#replication_storage_classifications_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications/{storageClassificationName} | Gets the details of a storage classification.
[**replication_storage_classifications_list**](ReplicationStorageClassificationsApi.md#replication_storage_classifications_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationStorageClassifications | Gets the list of storage classification objects under a vault.
[**replication_storage_classifications_list_by_replication_fabrics**](ReplicationStorageClassificationsApi.md#replication_storage_classifications_list_by_replication_fabrics) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationStorageClassifications | Gets the list of storage classification objects under a fabric.


# **replication_storage_classifications_get**
> StorageClassification replication_storage_classifications_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name)

Gets the details of a storage classification.

Gets the details of the specified storage classification.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification import StorageClassification
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
    api_instance = openapi_client.ReplicationStorageClassificationsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name.
    storage_classification_name = 'storage_classification_name_example' # str | Storage classification name.

    try:
        # Gets the details of a storage classification.
        api_response = api_instance.replication_storage_classifications_get(api_version, resource_name, resource_group_name, subscription_id, fabric_name, storage_classification_name)
        print("The response of ReplicationStorageClassificationsApi->replication_storage_classifications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationsApi->replication_storage_classifications_get: %s\n" % e)
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

[**StorageClassification**](StorageClassification.md)

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

# **replication_storage_classifications_list**
> StorageClassificationCollection replication_storage_classifications_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of storage classification objects under a vault.

Lists the storage classifications in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification_collection import StorageClassificationCollection
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
    api_instance = openapi_client.ReplicationStorageClassificationsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of storage classification objects under a vault.
        api_response = api_instance.replication_storage_classifications_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationStorageClassificationsApi->replication_storage_classifications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationsApi->replication_storage_classifications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**StorageClassificationCollection**](StorageClassificationCollection.md)

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

# **replication_storage_classifications_list_by_replication_fabrics**
> StorageClassificationCollection replication_storage_classifications_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)

Gets the list of storage classification objects under a fabric.

Lists the storage classifications available in the specified fabric.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_classification_collection import StorageClassificationCollection
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
    api_instance = openapi_client.ReplicationStorageClassificationsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Site name of interest.

    try:
        # Gets the list of storage classification objects under a fabric.
        api_response = api_instance.replication_storage_classifications_list_by_replication_fabrics(api_version, resource_name, resource_group_name, subscription_id, fabric_name)
        print("The response of ReplicationStorageClassificationsApi->replication_storage_classifications_list_by_replication_fabrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationStorageClassificationsApi->replication_storage_classifications_list_by_replication_fabrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Site name of interest. | 

### Return type

[**StorageClassificationCollection**](StorageClassificationCollection.md)

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

