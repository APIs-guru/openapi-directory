# openapi_client.AccountApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_create**](AccountApi.md#accounts_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName} | Create an account in the given resource group
[**accounts_delete**](AccountApi.md#accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName} | Delete an account
[**accounts_get**](AccountApi.md#accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName} | Get an account under a resource group
[**accounts_list_by_resource_group**](AccountApi.md#accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts | List Accounts in a resource group
[**accounts_list_by_subscription**](AccountApi.md#accounts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataShare/accounts | List Accounts in a subscription
[**accounts_update**](AccountApi.md#accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName} | Patch a given account


# **accounts_create**
> Account accounts_create(subscription_id, resource_group_name, account_name, api_version, account)

Create an account in the given resource group

Create an account

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    api_version = 'api_version_example' # str | The api version to use.
    account = openapi_client.Account() # Account | The account payload.

    try:
        # Create an account in the given resource group
        api_response = api_instance.accounts_create(subscription_id, resource_group_name, account_name, api_version, account)
        print("The response of AccountApi->accounts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->accounts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **api_version** | **str**| The api version to use. | 
 **account** | [**Account**](Account.md)| The account payload. | 

### Return type

[**Account**](Account.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_delete**
> OperationResponse accounts_delete(subscription_id, resource_group_name, account_name, api_version)

Delete an account

DeleteAccount

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_response import OperationResponse
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
    api_instance = openapi_client.AccountApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete an account
        api_response = api_instance.accounts_delete(subscription_id, resource_group_name, account_name, api_version)
        print("The response of AccountApi->accounts_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**OperationResponse**](OperationResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | Accepted |  -  |
**204** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_get**
> Account accounts_get(subscription_id, resource_group_name, account_name, api_version)

Get an account under a resource group

Get an account

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get an account under a resource group
        api_response = api_instance.accounts_get(subscription_id, resource_group_name, account_name, api_version)
        print("The response of AccountApi->accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**Account**](Account.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_resource_group**
> AccountList accounts_list_by_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)

List Accounts in a resource group

List Accounts in ResourceGroup

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List Accounts in a resource group
        api_response = api_instance.accounts_list_by_resource_group(subscription_id, resource_group_name, api_version, skip_token=skip_token)
        print("The response of AccountApi->accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**AccountList**](AccountList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_subscription**
> AccountList accounts_list_by_subscription(subscription_id, api_version, skip_token=skip_token)

List Accounts in a subscription

List Accounts in Subscription

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List Accounts in a subscription
        api_response = api_instance.accounts_list_by_subscription(subscription_id, api_version, skip_token=skip_token)
        print("The response of AccountApi->accounts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->accounts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**AccountList**](AccountList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update**
> Account accounts_update(subscription_id, resource_group_name, account_name, api_version, account_update_parameters)

Patch a given account

Patch an account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.models.account_update_parameters import AccountUpdateParameters
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
    api_instance = openapi_client.AccountApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    api_version = 'api_version_example' # str | The api version to use.
    account_update_parameters = openapi_client.AccountUpdateParameters() # AccountUpdateParameters | The account update parameters.

    try:
        # Patch a given account
        api_response = api_instance.accounts_update(subscription_id, resource_group_name, account_name, api_version, account_update_parameters)
        print("The response of AccountApi->accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **api_version** | **str**| The api version to use. | 
 **account_update_parameters** | [**AccountUpdateParameters**](AccountUpdateParameters.md)| The account update parameters. | 

### Return type

[**Account**](Account.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

