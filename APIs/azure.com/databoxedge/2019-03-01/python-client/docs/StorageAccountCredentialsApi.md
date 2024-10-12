# openapi_client.StorageAccountCredentialsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_account_credentials_create_or_update**](StorageAccountCredentialsApi.md#storage_account_credentials_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name} | 
[**storage_account_credentials_delete**](StorageAccountCredentialsApi.md#storage_account_credentials_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name} | 
[**storage_account_credentials_get**](StorageAccountCredentialsApi.md#storage_account_credentials_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name} | 
[**storage_account_credentials_list_by_data_box_edge_device**](StorageAccountCredentialsApi.md#storage_account_credentials_list_by_data_box_edge_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials | Gets all the storage account credentials in a data box edge/gateway device.


# **storage_account_credentials_create_or_update**
> StorageAccountCredential storage_account_credentials_create_or_update(device_name, name, subscription_id, resource_group_name, api_version, storage_account_credential)



Creates or updates the storage account credential.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_credential import StorageAccountCredential
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
    api_instance = openapi_client.StorageAccountCredentialsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The storage account credential name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.
    storage_account_credential = openapi_client.StorageAccountCredential() # StorageAccountCredential | The storage account credential.

    try:
        api_response = api_instance.storage_account_credentials_create_or_update(device_name, name, subscription_id, resource_group_name, api_version, storage_account_credential)
        print("The response of StorageAccountCredentialsApi->storage_account_credentials_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The storage account credential name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 
 **storage_account_credential** | [**StorageAccountCredential**](StorageAccountCredential.md)| The storage account credential. | 

### Return type

[**StorageAccountCredential**](StorageAccountCredential.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the storage account credential. |  -  |
**202** | Accepted the request to create or update the storage account credential. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_account_credentials_delete**
> storage_account_credentials_delete(device_name, name, subscription_id, resource_group_name, api_version)



Deletes the storage account credential.

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
    api_instance = openapi_client.StorageAccountCredentialsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The storage account credential name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.storage_account_credentials_delete(device_name, name, subscription_id, resource_group_name, api_version)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The storage account credential name. | 
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
**200** | Successfully deleted the storage account credential. |  -  |
**202** | Accepted the request to delete the storage account credential. |  -  |
**204** | The storage account credential is already deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_account_credentials_get**
> StorageAccountCredential storage_account_credentials_get(device_name, name, subscription_id, resource_group_name, api_version)



Gets the properties of the specified storage account credential.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_credential import StorageAccountCredential
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
    api_instance = openapi_client.StorageAccountCredentialsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    name = 'name_example' # str | The storage account credential name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.storage_account_credentials_get(device_name, name, subscription_id, resource_group_name, api_version)
        print("The response of StorageAccountCredentialsApi->storage_account_credentials_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **name** | **str**| The storage account credential name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**StorageAccountCredential**](StorageAccountCredential.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The storage account credential properties. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_account_credentials_list_by_data_box_edge_device**
> StorageAccountCredentialList storage_account_credentials_list_by_data_box_edge_device(device_name, subscription_id, resource_group_name, api_version)

Gets all the storage account credentials in a data box edge/gateway device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_credential_list import StorageAccountCredentialList
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
    api_instance = openapi_client.StorageAccountCredentialsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The API version.

    try:
        # Gets all the storage account credentials in a data box edge/gateway device.
        api_response = api_instance.storage_account_credentials_list_by_data_box_edge_device(device_name, subscription_id, resource_group_name, api_version)
        print("The response of StorageAccountCredentialsApi->storage_account_credentials_list_by_data_box_edge_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_list_by_data_box_edge_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**StorageAccountCredentialList**](StorageAccountCredentialList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of storage account credentials. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

