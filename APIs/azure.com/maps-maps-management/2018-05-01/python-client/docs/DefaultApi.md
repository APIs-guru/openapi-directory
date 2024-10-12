# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accounts_create_or_update**](DefaultApi.md#accounts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName} | 
[**accounts_delete**](DefaultApi.md#accounts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName} | 
[**accounts_get**](DefaultApi.md#accounts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName} | 
[**accounts_list_by_resource_group**](DefaultApi.md#accounts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts | 
[**accounts_list_by_subscription**](DefaultApi.md#accounts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Maps/accounts | 
[**accounts_list_keys**](DefaultApi.md#accounts_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/listKeys | 
[**accounts_list_operations**](DefaultApi.md#accounts_list_operations) | **GET** /providers/Microsoft.Maps/operations | 
[**accounts_move**](DefaultApi.md#accounts_move) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources | 
[**accounts_regenerate_keys**](DefaultApi.md#accounts_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName}/regenerateKey | 
[**accounts_update**](DefaultApi.md#accounts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Maps/accounts/{accountName} | 


# **accounts_create_or_update**
> MapsAccount accounts_create_or_update(api_version, subscription_id, resource_group_name, account_name, maps_account_create_parameters)



Create or update a Maps Account. A Maps Account holds the keys which allow access to the Maps REST APIs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_account import MapsAccount
from openapi_client.models.maps_account_create_parameters import MapsAccountCreateParameters
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    maps_account_create_parameters = openapi_client.MapsAccountCreateParameters() # MapsAccountCreateParameters | The new or updated parameters for the Maps Account.

    try:
        api_response = api_instance.accounts_create_or_update(api_version, subscription_id, resource_group_name, account_name, maps_account_create_parameters)
        print("The response of DefaultApi->accounts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **maps_account_create_parameters** | [**MapsAccountCreateParameters**](MapsAccountCreateParameters.md)| The new or updated parameters for the Maps Account. | 

### Return type

[**MapsAccount**](MapsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Account was successfully updated. |  -  |
**201** | The Account was successfully created. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_delete**
> accounts_delete(api_version, subscription_id, resource_group_name, account_name)



Delete a Maps Account.

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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.
    account_name = 'account_name_example' # str | The name of the Maps Account.

    try:
        api_instance.accounts_delete(api_version, subscription_id, resource_group_name, account_name)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 
 **account_name** | **str**| The name of the Maps Account. | 

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
**200** | The Account was deleted successfully. |  -  |
**204** | The specified Account was not found. Nothing was deleted. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_get**
> MapsAccount accounts_get(api_version, subscription_id, resource_group_name, account_name)



Get a Maps Account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_account import MapsAccount
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.
    account_name = 'account_name_example' # str | The name of the Maps Account.

    try:
        api_response = api_instance.accounts_get(api_version, subscription_id, resource_group_name, account_name)
        print("The response of DefaultApi->accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 
 **account_name** | **str**| The name of the Maps Account. | 

### Return type

[**MapsAccount**](MapsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**404** | The specified Account does not exist. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_resource_group**
> MapsAccounts accounts_list_by_resource_group(api_version, subscription_id, resource_group_name)



Get all Maps Accounts in a Resource Group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_accounts import MapsAccounts
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.

    try:
        api_response = api_instance.accounts_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of DefaultApi->accounts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 

### Return type

[**MapsAccounts**](MapsAccounts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_by_subscription**
> MapsAccounts accounts_list_by_subscription(api_version, subscription_id)



Get all Maps Accounts in a Subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_accounts import MapsAccounts
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.accounts_list_by_subscription(api_version, subscription_id)
        print("The response of DefaultApi->accounts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**MapsAccounts**](MapsAccounts.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_keys**
> MapsAccountKeys accounts_list_keys(api_version, subscription_id, resource_group_name, account_name)



Get the keys to use with the Maps APIs. A key is used to authenticate and authorize access to the Maps REST APIs. Only one key is needed at a time; two are given to provide seamless key regeneration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_account_keys import MapsAccountKeys
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.
    account_name = 'account_name_example' # str | The name of the Maps Account.

    try:
        api_response = api_instance.accounts_list_keys(api_version, subscription_id, resource_group_name, account_name)
        print("The response of DefaultApi->accounts_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 
 **account_name** | **str**| The name of the Maps Account. | 

### Return type

[**MapsAccountKeys**](MapsAccountKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**404** | The specified Account does not exist. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_list_operations**
> MapsOperations accounts_list_operations(api_version)



List operations available for the Maps Resource Provider

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_operations import MapsOperations
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.accounts_list_operations(api_version)
        print("The response of DefaultApi->accounts_list_operations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_list_operations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MapsOperations**](MapsOperations.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_move**
> accounts_move(api_version, subscription_id, resource_group_name, move_request)



Moves Maps Accounts from one ResourceGroup (or Subscription) to another

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_accounts_move_request import MapsAccountsMoveRequest
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains Maps Account to move.
    move_request = openapi_client.MapsAccountsMoveRequest() # MapsAccountsMoveRequest | The details of the Maps Account move.

    try:
        api_instance.accounts_move(api_version, subscription_id, resource_group_name, move_request)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_move: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains Maps Account to move. | 
 **move_request** | [**MapsAccountsMoveRequest**](MapsAccountsMoveRequest.md)| The details of the Maps Account move. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Accounts were successfully moved. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_regenerate_keys**
> MapsAccountKeys accounts_regenerate_keys(api_version, subscription_id, resource_group_name, account_name, key_specification)



Regenerate either the primary or secondary key for use with the Maps APIs. The old key will stop working immediately.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_account_keys import MapsAccountKeys
from openapi_client.models.maps_key_specification import MapsKeySpecification
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    key_specification = openapi_client.MapsKeySpecification() # MapsKeySpecification | Which key to regenerate:  primary or secondary.

    try:
        api_response = api_instance.accounts_regenerate_keys(api_version, subscription_id, resource_group_name, account_name, key_specification)
        print("The response of DefaultApi->accounts_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **key_specification** | [**MapsKeySpecification**](MapsKeySpecification.md)| Which key to regenerate:  primary or secondary. | 

### Return type

[**MapsAccountKeys**](MapsAccountKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful. |  -  |
**404** | The specified Account does not exist. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accounts_update**
> MapsAccount accounts_update(api_version, subscription_id, resource_group_name, account_name, maps_account_update_parameters)



Updates a Maps Account. Only a subset of the parameters may be updated after creation, such as Sku and Tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.maps_account import MapsAccount
from openapi_client.models.maps_account_update_parameters import MapsAccountUpdateParameters
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource Group.
    account_name = 'account_name_example' # str | The name of the Maps Account.
    maps_account_update_parameters = openapi_client.MapsAccountUpdateParameters() # MapsAccountUpdateParameters | The updated parameters for the Maps Account.

    try:
        api_response = api_instance.accounts_update(api_version, subscription_id, resource_group_name, account_name, maps_account_update_parameters)
        print("The response of DefaultApi->accounts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->accounts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure Resource Group. | 
 **account_name** | **str**| The name of the Maps Account. | 
 **maps_account_update_parameters** | [**MapsAccountUpdateParameters**](MapsAccountUpdateParameters.md)| The updated parameters for the Maps Account. | 

### Return type

[**MapsAccount**](MapsAccount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Account was successfully updated. |  -  |
**404** | The specified Account was not found. Nothing was updated. |  -  |
**0** | An unexpected error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

