# openapi_client.StorageAccountsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_accounts_get**](StorageAccountsApi.md#storage_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/storageaccounts/{accountId} | 
[**storage_accounts_list**](StorageAccountsApi.md#storage_accounts_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/storageaccounts | 
[**storage_accounts_undelete**](StorageAccountsApi.md#storage_accounts_undelete) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/storageaccounts/{accountId} | 


# **storage_accounts_get**
> StorageAccount storage_accounts_get(subscription_id, resource_group_name, farm_id, account_id, api_version)



Returns the requested storage account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account import StorageAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    account_id = 'account_id_example' # str | Internal storage account ID, which is not visible to tenant.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.storage_accounts_get(subscription_id, resource_group_name, farm_id, account_id, api_version)
        print("The response of StorageAccountsApi->storage_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **account_id** | **str**| Internal storage account ID, which is not visible to tenant. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**StorageAccount**](StorageAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The storage account has been returned. |  -  |
**404** | NOT FOUND -- The storage account or farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_list**
> StorageAccountList storage_accounts_list(subscription_id, resource_group_name, farm_id, api_version, summary)



Returns a list of storage accounts.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_account_list import StorageAccountList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.
    summary = True # bool | Switch for whether summary or detailed information is returned.

    try:
        api_response = api_instance.storage_accounts_list(subscription_id, resource_group_name, farm_id, api_version, summary)
        print("The response of StorageAccountsApi->storage_accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 
 **summary** | **bool**| Switch for whether summary or detailed information is returned. | 

### Return type

[**StorageAccountList**](StorageAccountList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of storage accounts has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_accounts_undelete**
> storage_accounts_undelete(subscription_id, resource_group_name, farm_id, account_id, api_version)



Undelete a deleted storage account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StorageAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    account_id = 'account_id_example' # str | Internal storage account ID, which is not visible to tenant.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_instance.storage_accounts_undelete(subscription_id, resource_group_name, farm_id, account_id, api_version)
    except Exception as e:
        print("Exception when calling StorageAccountsApi->storage_accounts_undelete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **account_id** | **str**| Internal storage account ID, which is not visible to tenant. | 
 **api_version** | **str**| REST Api Version. | 

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
**200** | OK -- Undelete either has been performed or account was not deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

