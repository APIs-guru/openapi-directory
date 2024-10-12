# openapi_client.ResourceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**remote_rendering_accounts_create**](ResourceApi.md#remote_rendering_accounts_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts/{accountName} | 
[**remote_rendering_accounts_delete**](ResourceApi.md#remote_rendering_accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts/{accountName} | 
[**remote_rendering_accounts_get**](ResourceApi.md#remote_rendering_accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts/{accountName} | 
[**remote_rendering_accounts_list_by_resource_group**](ResourceApi.md#remote_rendering_accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts | 
[**remote_rendering_accounts_list_by_subscription**](ResourceApi.md#remote_rendering_accounts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.MixedReality/remoteRenderingAccounts | 
[**remote_rendering_accounts_update**](ResourceApi.md#remote_rendering_accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MixedReality/remoteRenderingAccounts/{accountName} | 


# **remote_rendering_accounts_create**
> RemoteRenderingAccount remote_rendering_accounts_create(subscription_id, resource_group_name, account_name, api_version, remote_rendering_account)



Creating or Updating a Remote Rendering Account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_account import RemoteRenderingAccount
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Name of an Mixed Reality Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    remote_rendering_account = openapi_client.RemoteRenderingAccount() # RemoteRenderingAccount | Remote Rendering Account parameter.

    try:
        api_response = api_instance.remote_rendering_accounts_create(subscription_id, resource_group_name, account_name, api_version, remote_rendering_account)
        print("The response of ResourceApi->remote_rendering_accounts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->remote_rendering_accounts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Name of an Mixed Reality Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **remote_rendering_account** | [**RemoteRenderingAccount**](RemoteRenderingAccount.md)| Remote Rendering Account parameter. | 

### Return type

[**RemoteRenderingAccount**](RemoteRenderingAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_rendering_accounts_delete**
> remote_rendering_accounts_delete(subscription_id, resource_group_name, account_name, api_version)



Delete a Remote Rendering Account.

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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Name of an Mixed Reality Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.remote_rendering_accounts_delete(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling ResourceApi->remote_rendering_accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Name of an Mixed Reality Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

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
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_rendering_accounts_get**
> RemoteRenderingAccount remote_rendering_accounts_get(subscription_id, resource_group_name, account_name, api_version)



Retrieve a Remote Rendering Account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_account import RemoteRenderingAccount
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Name of an Mixed Reality Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.remote_rendering_accounts_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of ResourceApi->remote_rendering_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->remote_rendering_accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Name of an Mixed Reality Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**RemoteRenderingAccount**](RemoteRenderingAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_rendering_accounts_list_by_resource_group**
> RemoteRenderingAccountPage remote_rendering_accounts_list_by_resource_group(subscription_id, resource_group_name, api_version)



List Resources by Resource Group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_account_page import RemoteRenderingAccountPage
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.remote_rendering_accounts_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of ResourceApi->remote_rendering_accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->remote_rendering_accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**RemoteRenderingAccountPage**](RemoteRenderingAccountPage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_rendering_accounts_list_by_subscription**
> RemoteRenderingAccountPage remote_rendering_accounts_list_by_subscription(subscription_id, api_version)



List Remote Rendering Accounts by Subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_account_page import RemoteRenderingAccountPage
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.remote_rendering_accounts_list_by_subscription(subscription_id, api_version)
        print("The response of ResourceApi->remote_rendering_accounts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->remote_rendering_accounts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**RemoteRenderingAccountPage**](RemoteRenderingAccountPage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remote_rendering_accounts_update**
> RemoteRenderingAccount remote_rendering_accounts_update(subscription_id, resource_group_name, account_name, api_version, remote_rendering_account)



Updating a Remote Rendering Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.remote_rendering_account import RemoteRenderingAccount
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
    api_instance = openapi_client.ResourceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Name of an Azure resource group.
    account_name = 'account_name_example' # str | Name of an Mixed Reality Account.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    remote_rendering_account = openapi_client.RemoteRenderingAccount() # RemoteRenderingAccount | Remote Rendering Account parameter.

    try:
        api_response = api_instance.remote_rendering_accounts_update(subscription_id, resource_group_name, account_name, api_version, remote_rendering_account)
        print("The response of ResourceApi->remote_rendering_accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceApi->remote_rendering_accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Name of an Azure resource group. | 
 **account_name** | **str**| Name of an Mixed Reality Account. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **remote_rendering_account** | [**RemoteRenderingAccount**](RemoteRenderingAccount.md)| Remote Rendering Account parameter. | 

### Return type

[**RemoteRenderingAccount**](RemoteRenderingAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

