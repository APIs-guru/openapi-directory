# openapi_client.UsersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_create_or_update**](UsersApi.md#users_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/users/{userName} | 
[**users_delete**](UsersApi.md#users_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/users/{userName} | 
[**users_get**](UsersApi.md#users_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/users/{userName} | 
[**users_list**](UsersApi.md#users_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/users | 
[**users_update**](UsersApi.md#users_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/users/{userName} | 


# **users_create_or_update**
> User users_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version, user)



Create or replace an existing User.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.UsersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    user = openapi_client.User() # User | The User registered to a lab

    try:
        api_response = api_instance.users_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version, user)
        print("The response of UsersApi->users_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **user** | [**User**](User.md)| The User registered to a lab | 

### Return type

[**User**](User.md)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_delete**
> users_delete(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version)



Delete user. This operation can take a while to complete

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
    api_instance = openapi_client.UsersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.users_delete(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version)
    except Exception as e:
        print("Exception when calling UsersApi->users_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_get**
> User users_get(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version, expand=expand)



Get user

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
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
    api_instance = openapi_client.UsersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=email)' (optional)

    try:
        api_response = api_instance.users_get(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version, expand=expand)
        print("The response of UsersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;email)&#39; | [optional] 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_list**
> ResponseWithContinuationUser users_list(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List users in a given lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_user import ResponseWithContinuationUser
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
    api_instance = openapi_client.UsersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=email)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.users_list(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of UsersApi->users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;email)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationUser**](ResponseWithContinuationUser.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_update**
> User users_update(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version, user)



Modify properties of users.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.user_fragment import UserFragment
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
    api_instance = openapi_client.UsersApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    user = openapi_client.UserFragment() # UserFragment | The User registered to a lab

    try:
        api_response = api_instance.users_update(subscription_id, resource_group_name, lab_account_name, lab_name, user_name, api_version, user)
        print("The response of UsersApi->users_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **user** | [**UserFragment**](UserFragment.md)| The User registered to a lab | 

### Return type

[**User**](User.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

