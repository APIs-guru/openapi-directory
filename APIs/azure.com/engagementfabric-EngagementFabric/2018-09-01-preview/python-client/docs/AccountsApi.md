# openapi_client.AccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_create_or_update**](AccountsApi.md#accounts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName} | Create or Update the EngagementFabric account
[**accounts_delete**](AccountsApi.md#accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName} | Delete the EngagementFabric account
[**accounts_get**](AccountsApi.md#accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName} | Get the EngagementFabric account
[**accounts_list**](AccountsApi.md#accounts_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EngagementFabric/Accounts | List the EngagementFabric accounts in given subscription
[**accounts_list_by_resource_group**](AccountsApi.md#accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts | List EngagementFabric accounts in given resource group
[**accounts_list_channel_types**](AccountsApi.md#accounts_list_channel_types) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/listChannelTypes | List available EngagementFabric channel types and functions
[**accounts_list_keys**](AccountsApi.md#accounts_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/listKeys | List keys of the EngagementFabric account
[**accounts_regenerate_key**](AccountsApi.md#accounts_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/regenerateKey | Regenerate key of the EngagementFabric account
[**accounts_update**](AccountsApi.md#accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName} | Update EngagementFabric account


# **accounts_create_or_update**
> Account accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, account)

Create or Update the EngagementFabric account

### Example


```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version
    account = openapi_client.Account() # Account | The EngagementFabric account description

    try:
        # Create or Update the EngagementFabric account
        api_response = api_instance.accounts_create_or_update(subscription_id, resource_group_name, account_name, api_version, account)
        print("The response of AccountsApi->accounts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 
 **account** | [**Account**](Account.md)| The EngagementFabric account description | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_delete**
> accounts_delete(subscription_id, resource_group_name, account_name, api_version)

Delete the EngagementFabric account

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version

    try:
        # Delete the EngagementFabric account
        api_instance.accounts_delete(subscription_id, resource_group_name, account_name, api_version)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_get**
> Account accounts_get(subscription_id, resource_group_name, account_name, api_version)

Get the EngagementFabric account

### Example


```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version

    try:
        # Get the EngagementFabric account
        api_response = api_instance.accounts_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of AccountsApi->accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list**
> AccountList accounts_list(subscription_id, api_version)

List the EngagementFabric accounts in given subscription

### Example


```python
import openapi_client
from openapi_client.models.account_list import AccountList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    api_version = 'api_version_example' # str | API version

    try:
        # List the EngagementFabric accounts in given subscription
        api_response = api_instance.accounts_list(subscription_id, api_version)
        print("The response of AccountsApi->accounts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **api_version** | **str**| API version | 

### Return type

[**AccountList**](AccountList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_resource_group**
> AccountList accounts_list_by_resource_group(subscription_id, resource_group_name, api_version)

List EngagementFabric accounts in given resource group

### Example


```python
import openapi_client
from openapi_client.models.account_list import AccountList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    api_version = 'api_version_example' # str | API version

    try:
        # List EngagementFabric accounts in given resource group
        api_response = api_instance.accounts_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of AccountsApi->accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **api_version** | **str**| API version | 

### Return type

[**AccountList**](AccountList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_channel_types**
> ChannelTypeDescriptionList accounts_list_channel_types(subscription_id, resource_group_name, account_name, api_version)

List available EngagementFabric channel types and functions

### Example


```python
import openapi_client
from openapi_client.models.channel_type_description_list import ChannelTypeDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version

    try:
        # List available EngagementFabric channel types and functions
        api_response = api_instance.accounts_list_channel_types(subscription_id, resource_group_name, account_name, api_version)
        print("The response of AccountsApi->accounts_list_channel_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list_channel_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 

### Return type

[**ChannelTypeDescriptionList**](ChannelTypeDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_keys**
> KeyDescriptionList accounts_list_keys(subscription_id, resource_group_name, account_name, api_version)

List keys of the EngagementFabric account

### Example


```python
import openapi_client
from openapi_client.models.key_description_list import KeyDescriptionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version

    try:
        # List keys of the EngagementFabric account
        api_response = api_instance.accounts_list_keys(subscription_id, resource_group_name, account_name, api_version)
        print("The response of AccountsApi->accounts_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 

### Return type

[**KeyDescriptionList**](KeyDescriptionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_regenerate_key**
> KeyDescription accounts_regenerate_key(subscription_id, resource_group_name, account_name, api_version, parameter)

Regenerate key of the EngagementFabric account

### Example


```python
import openapi_client
from openapi_client.models.key_description import KeyDescription
from openapi_client.models.regenerate_key_parameter import RegenerateKeyParameter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version
    parameter = openapi_client.RegenerateKeyParameter() # RegenerateKeyParameter | Parameters specifying the key to be regenerated

    try:
        # Regenerate key of the EngagementFabric account
        api_response = api_instance.accounts_regenerate_key(subscription_id, resource_group_name, account_name, api_version, parameter)
        print("The response of AccountsApi->accounts_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 
 **parameter** | [**RegenerateKeyParameter**](RegenerateKeyParameter.md)| Parameters specifying the key to be regenerated | 

### Return type

[**KeyDescription**](KeyDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update**
> Account accounts_update(subscription_id, resource_group_name, account_name, api_version, account_patch)

Update EngagementFabric account

### Example


```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.models.account_patch import AccountPatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version
    account_patch = openapi_client.AccountPatch() # AccountPatch | The account patch

    try:
        # Update EngagementFabric account
        api_response = api_instance.accounts_update(subscription_id, resource_group_name, account_name, api_version, account_patch)
        print("The response of AccountsApi->accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 
 **account_patch** | [**AccountPatch**](AccountPatch.md)| The account patch | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

