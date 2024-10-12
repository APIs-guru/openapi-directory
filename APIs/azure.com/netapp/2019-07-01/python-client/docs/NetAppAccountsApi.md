# openapi_client.NetAppAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_create_or_update**](NetAppAccountsApi.md#accounts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName} | Create or update a NetApp account
[**accounts_delete**](NetAppAccountsApi.md#accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName} | Delete a NetApp account
[**accounts_get**](NetAppAccountsApi.md#accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName} | Describe a NetApp Account
[**accounts_list**](NetAppAccountsApi.md#accounts_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts | Describe all NetApp Accounts in a resource group
[**accounts_update**](NetAppAccountsApi.md#accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName} | Update a NetApp account


# **accounts_create_or_update**
> NetAppAccount accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, body)

Create or update a NetApp account

Create or update the specified NetApp account within the resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.net_app_account import NetAppAccount
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
    api_instance = openapi_client.NetAppAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    api_version = '2019-07-01' # str | Version of the API to be used with the client request. (default to '2019-07-01')
    body = openapi_client.NetAppAccount() # NetAppAccount | NetApp Account object supplied in the body of the operation.

    try:
        # Create or update a NetApp account
        api_response = api_instance.accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, body)
        print("The response of NetAppAccountsApi->accounts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetAppAccountsApi->accounts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-07-01&#39;]
 **body** | [**NetAppAccount**](NetAppAccount.md)| NetApp Account object supplied in the body of the operation. | 

### Return type

[**NetAppAccount**](NetAppAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - account updated |  -  |
**201** | Account created |  -  |
**202** | Accepted -- Create, update or delete request accepted; operation will complete asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_delete**
> accounts_delete(subscription_id, resource_group_name, account_name, api_version)

Delete a NetApp account

Delete the specified NetApp account

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
    api_instance = openapi_client.NetAppAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    api_version = '2019-07-01' # str | Version of the API to be used with the client request. (default to '2019-07-01')

    try:
        # Delete a NetApp account
        api_instance.accounts_delete(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling NetAppAccountsApi->accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-07-01&#39;]

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
**202** | Accepted -- Create, update or delete request accepted; operation will complete asynchronously |  -  |
**204** | NoContent -- Resource does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_get**
> NetAppAccount accounts_get(subscription_id, resource_group_name, account_name, api_version)

Describe a NetApp Account

Get the NetApp account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.net_app_account import NetAppAccount
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
    api_instance = openapi_client.NetAppAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    api_version = '2019-07-01' # str | Version of the API to be used with the client request. (default to '2019-07-01')

    try:
        # Describe a NetApp Account
        api_response = api_instance.accounts_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of NetAppAccountsApi->accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetAppAccountsApi->accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-07-01&#39;]

### Return type

[**NetAppAccount**](NetAppAccount.md)

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

# **accounts_list**
> NetAppAccountList accounts_list(subscription_id, resource_group_name, api_version)

Describe all NetApp Accounts in a resource group

List and describe all NetApp accounts in the resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.net_app_account_list import NetAppAccountList
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
    api_instance = openapi_client.NetAppAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = '2019-07-01' # str | Version of the API to be used with the client request. (default to '2019-07-01')

    try:
        # Describe all NetApp Accounts in a resource group
        api_response = api_instance.accounts_list(subscription_id, resource_group_name, api_version)
        print("The response of NetAppAccountsApi->accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetAppAccountsApi->accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-07-01&#39;]

### Return type

[**NetAppAccountList**](NetAppAccountList.md)

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

# **accounts_update**
> NetAppAccount accounts_update(subscription_id, resource_group_name, account_name, api_version, body)

Update a NetApp account

Patch the specified NetApp account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.net_app_account import NetAppAccount
from openapi_client.models.net_app_account_patch import NetAppAccountPatch
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
    api_instance = openapi_client.NetAppAccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    account_name = 'account_name_example' # str | The name of the NetApp account
    api_version = '2019-07-01' # str | Version of the API to be used with the client request. (default to '2019-07-01')
    body = openapi_client.NetAppAccountPatch() # NetAppAccountPatch | NetApp Account object supplied in the body of the operation.

    try:
        # Update a NetApp account
        api_response = api_instance.accounts_update(subscription_id, resource_group_name, account_name, api_version, body)
        print("The response of NetAppAccountsApi->accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetAppAccountsApi->accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **account_name** | **str**| The name of the NetApp account | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-07-01&#39;]
 **body** | [**NetAppAccountPatch**](NetAppAccountPatch.md)| NetApp Account object supplied in the body of the operation. | 

### Return type

[**NetAppAccount**](NetAppAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - account updated |  -  |
**202** | Accepted -- Create, update or delete request accepted; operation will complete asynchronously |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

