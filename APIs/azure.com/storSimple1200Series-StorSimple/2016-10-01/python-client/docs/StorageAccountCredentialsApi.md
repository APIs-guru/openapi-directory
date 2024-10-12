# openapi_client.StorageAccountCredentialsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_account_credentials_create_or_update**](StorageAccountCredentialsApi.md#storage_account_credentials_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials/{credentialName} | 
[**storage_account_credentials_delete**](StorageAccountCredentialsApi.md#storage_account_credentials_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials/{credentialName} | 
[**storage_account_credentials_get**](StorageAccountCredentialsApi.md#storage_account_credentials_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials/{credentialName} | 
[**storage_account_credentials_list_by_manager**](StorageAccountCredentialsApi.md#storage_account_credentials_list_by_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageAccountCredentials | 


# **storage_account_credentials_create_or_update**
> StorageAccountCredential storage_account_credentials_create_or_update(credential_name, subscription_id, resource_group_name, manager_name, api_version, storage_account)



Creates or updates the storage account credential

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
    credential_name = 'credential_name_example' # str | The credential name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    storage_account = openapi_client.StorageAccountCredential() # StorageAccountCredential | The storage account credential to be added or updated.

    try:
        api_response = api_instance.storage_account_credentials_create_or_update(credential_name, subscription_id, resource_group_name, manager_name, api_version, storage_account)
        print("The response of StorageAccountCredentialsApi->storage_account_credentials_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_name** | **str**| The credential name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **storage_account** | [**StorageAccountCredential**](StorageAccountCredential.md)| The storage account credential to be added or updated. | 

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
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_account_credentials_delete**
> storage_account_credentials_delete(credential_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the storage account credential

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
    credential_name = 'credential_name_example' # str | The name of the storage account credential.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.storage_account_credentials_delete(credential_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_name** | **str**| The name of the storage account credential. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

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
**202** | Accepted the request to delete the storage account credential. |  -  |
**204** | Successfully deleted the storage account credential. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_account_credentials_get**
> StorageAccountCredential storage_account_credentials_get(credential_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified storage account credential name.

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
    credential_name = 'credential_name_example' # str | The name of storage account credential to be fetched.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.storage_account_credentials_get(credential_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of StorageAccountCredentialsApi->storage_account_credentials_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credential_name** | **str**| The name of storage account credential to be fetched. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

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
**200** | The storage account credential. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_account_credentials_list_by_manager**
> StorageAccountCredentialList storage_account_credentials_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the storage account credentials in a manager.

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
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.storage_account_credentials_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)
        print("The response of StorageAccountCredentialsApi->storage_account_credentials_list_by_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountCredentialsApi->storage_account_credentials_list_by_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

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
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

