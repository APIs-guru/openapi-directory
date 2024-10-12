# openapi_client.ContainersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containers_create_or_update**](ContainersApi.md#containers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName} | Creates a new container or updates an existing container on the device.
[**containers_delete**](ContainersApi.md#containers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName} | 
[**containers_get**](ContainersApi.md#containers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName} | Gets a container by name.
[**containers_list_by_storage_account**](ContainersApi.md#containers_list_by_storage_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers | Lists all the containers of a storage Account in a Data Box Edge/Data Box Gateway device.
[**containers_refresh**](ContainersApi.md#containers_refresh) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccounts/{storageAccountName}/containers/{containerName}/refresh | Refreshes the container metadata with the data from the cloud.


# **containers_create_or_update**
> Container containers_create_or_update(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version, container)

Creates a new container or updates an existing container on the device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container import Container
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
    api_instance = openapi_client.ContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    storage_account_name = 'storage_account_name_example' # str | The Storage Account Name
    container_name = 'container_name_example' # str | The container name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.
    container = openapi_client.Container() # Container | The container properties.

    try:
        # Creates a new container or updates an existing container on the device.
        api_response = api_instance.containers_create_or_update(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version, container)
        print("The response of ContainersApi->containers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **storage_account_name** | **str**| The Storage Account Name | 
 **container_name** | **str**| The container name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 
 **container** | [**Container**](Container.md)| The container properties. | 

### Return type

[**Container**](Container.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the container. |  -  |
**202** | Accepted the request to create or update the container. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_delete**
> containers_delete(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version)



Deletes the container on the Data Box Edge/Data Box Gateway device.

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
    api_instance = openapi_client.ContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    storage_account_name = 'storage_account_name_example' # str | The Storage Account Name
    container_name = 'container_name_example' # str | The container name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.containers_delete(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **storage_account_name** | **str**| The Storage Account Name | 
 **container_name** | **str**| The container name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to delete the container. |  -  |
**204** | The container is already deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_get**
> Container containers_get(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version)

Gets a container by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container import Container
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
    api_instance = openapi_client.ContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    storage_account_name = 'storage_account_name_example' # str | The Storage Account Name
    container_name = 'container_name_example' # str | The container Name
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Gets a container by name.
        api_response = api_instance.containers_get(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version)
        print("The response of ContainersApi->containers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **storage_account_name** | **str**| The Storage Account Name | 
 **container_name** | **str**| The container Name | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**Container**](Container.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The container details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_list_by_storage_account**
> ContainerList containers_list_by_storage_account(device_name, storage_account_name, subscription_id, resource_group_name, api_version)

Lists all the containers of a storage Account in a Data Box Edge/Data Box Gateway device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.container_list import ContainerList
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
    api_instance = openapi_client.ContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    storage_account_name = 'storage_account_name_example' # str | The storage Account name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Lists all the containers of a storage Account in a Data Box Edge/Data Box Gateway device.
        api_response = api_instance.containers_list_by_storage_account(device_name, storage_account_name, subscription_id, resource_group_name, api_version)
        print("The response of ContainersApi->containers_list_by_storage_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_list_by_storage_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **storage_account_name** | **str**| The storage Account name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**ContainerList**](ContainerList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of all the containers on the device. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **containers_refresh**
> containers_refresh(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version)

Refreshes the container metadata with the data from the cloud.

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
    api_instance = openapi_client.ContainersApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    storage_account_name = 'storage_account_name_example' # str | The Storage Account Name
    container_name = 'container_name_example' # str | The container name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Refreshes the container metadata with the data from the cloud.
        api_instance.containers_refresh(device_name, storage_account_name, container_name, subscription_id, resource_group_name, api_version)
    except Exception as e:
        print("Exception when calling ContainersApi->containers_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **storage_account_name** | **str**| The Storage Account Name | 
 **container_name** | **str**| The container name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully refreshed the container on the device. |  -  |
**202** | Accepted the request to refresh the container on the device. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

