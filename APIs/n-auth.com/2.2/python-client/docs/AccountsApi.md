# openapi_client.AccountsApi

All URIs are relative to *https://api.nextauth.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_account**](AccountsApi.md#delete_account) | **DELETE** /servers/{serverid}/accounts/{accountid}/ | Delete specific account
[**delete_user_accounts_0**](AccountsApi.md#delete_user_accounts_0) | **DELETE** /servers/{serverid}/users/{userid}/accounts | Delete all accounts of a specific user
[**get_account**](AccountsApi.md#get_account) | **GET** /servers/{serverid}/accounts/{accountid}/ | Get specific account
[**get_all_accounts**](AccountsApi.md#get_all_accounts) | **GET** /servers/{serverid}/accounts/ | Get all accounts
[**get_user_0**](AccountsApi.md#get_user_0) | **GET** /servers/{serverid}/users/{userid}/accounts | Get all accounts of a specific user
[**update_account**](AccountsApi.md#update_account) | **PUT** /servers/{serverid}/accounts/{accountid}/ | Update specific account
[**update_account_user**](AccountsApi.md#update_account_user) | **PUT** /servers/{serverid}/accounts/{accountid}/user | Update user of the given account.


# **delete_account**
> delete_account(serverid, accountid)

Delete specific account

Delete an account. Required permission: 'accounts'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    accountid = 56 # int | Account id

    try:
        # Delete specific account
        api_instance.delete_account(serverid, accountid)
    except Exception as e:
        print("Exception when calling AccountsApi->delete_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **accountid** | **int**| Account id | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful delete |  -  |
**404** | Account not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_user_accounts_0**
> delete_user_accounts_0(serverid, userid)

Delete all accounts of a specific user

Delete all accounts corresponding to this user. The user itself is not deleted. Required permission: 'accounts' or 'users'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    userid = 'userid_example' # str | User name

    try:
        # Delete all accounts of a specific user
        api_instance.delete_user_accounts_0(serverid, userid)
    except Exception as e:
        print("Exception when calling AccountsApi->delete_user_accounts_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **userid** | **str**| User name | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On successful delete |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_account**
> Account get_account(serverid, accountid)

Get specific account

Returns the account. Required permission: 'sessions' or 'accounts'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    accountid = 56 # int | Account id

    try:
        # Get specific account
        api_response = api_instance.get_account(serverid, accountid)
        print("The response of AccountsApi->get_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **accountid** | **int**| Account id | 

### Return type

[**Account**](Account.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account |  -  |
**404** | Account not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_accounts**
> Accounts get_all_accounts(serverid, filter=filter, limit=limit, marker=marker, sort=sort)

Get all accounts

Returns all account. Required permission 'accounts'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.accounts import Accounts
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    filter = 'filter_example' # str | Filter users based on an attribute. Takes the format *attributename=attributevalue*. You can filter for multiple values at once, e.g. *group=in:group1,group2* (optional)
    limit = 56 # int | Limit the number of results (optional)
    marker = 56 # int | Offset in the result list (optional)
    sort = 'sort_example' # str | Sort the results by column. You can also specify ascending (default if not specified) or descending, e.g., *column:asc* . You can also sort by multiple columns, e.g., *column1:desc,column2:asc* (optional)

    try:
        # Get all accounts
        api_response = api_instance.get_all_accounts(serverid, filter=filter, limit=limit, marker=marker, sort=sort)
        print("The response of AccountsApi->get_all_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_all_accounts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **filter** | **str**| Filter users based on an attribute. Takes the format *attributename&#x3D;attributevalue*. You can filter for multiple values at once, e.g. *group&#x3D;in:group1,group2* | [optional] 
 **limit** | **int**| Limit the number of results | [optional] 
 **marker** | **int**| Offset in the result list | [optional] 
 **sort** | **str**| Sort the results by column. You can also specify ascending (default if not specified) or descending, e.g., *column:asc* . You can also sort by multiple columns, e.g., *column1:desc,column2:asc* | [optional] 

### Return type

[**Accounts**](Accounts.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of accounts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_0**
> Accounts get_user_0(serverid, userid, limit=limit, marker=marker, sort=sort)

Get all accounts of a specific user

Returns an array containing all accounts corresponding to this user. Required permission: 'sessions' or 'users'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.accounts import Accounts
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    userid = 'userid_example' # str | User name
    limit = 56 # int | Limit the number of results (optional)
    marker = 56 # int | Offset in the result list (optional)
    sort = 'sort_example' # str | Sort the results by column. You can also specify ascending (default if not specified) or descending, e.g., *column:asc* . You can also sort by multiple columns, e.g., *column1:desc,column2:asc* (optional)

    try:
        # Get all accounts of a specific user
        api_response = api_instance.get_user_0(serverid, userid, limit=limit, marker=marker, sort=sort)
        print("The response of AccountsApi->get_user_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->get_user_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **userid** | **str**| User name | 
 **limit** | **int**| Limit the number of results | [optional] 
 **marker** | **int**| Offset in the result list | [optional] 
 **sort** | **str**| Sort the results by column. You can also specify ascending (default if not specified) or descending, e.g., *column:asc* . You can also sort by multiple columns, e.g., *column1:desc,column2:asc* | [optional] 

### Return type

[**Accounts**](Accounts.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of accounts |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_account**
> Account update_account(serverid, accountid, blocked)

Update specific account

Update an account. The only available change is (un)blocking the account. Required permission: 'accounts'. 

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    accountid = 56 # int | Account id
    blocked = True # bool | True if the account is blocked

    try:
        # Update specific account
        api_response = api_instance.update_account(serverid, accountid, blocked)
        print("The response of AccountsApi->update_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->update_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **accountid** | **int**| Account id | 
 **blocked** | **bool**| True if the account is blocked | 

### Return type

[**Account**](Account.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account after update |  -  |
**404** | Account not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_account_user**
> Account update_account_user(serverid, accountid, userid)

Update user of the given account.

Update the user of the given account. Required permission: 'accounts'.

### Example

* Api Key Authentication (api_key):
* Api Key Authentication (role_id):

```python
import openapi_client
from openapi_client.models.account import Account
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nextauth.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nextauth.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: role_id
configuration.api_key['role_id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['role_id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AccountsApi(api_client)
    serverid = 'serverid_example' # str | Base64 encoded server id
    accountid = 56 # int | Account id
    userid = 'userid_example' # str | User name

    try:
        # Update user of the given account.
        api_response = api_instance.update_account_user(serverid, accountid, userid)
        print("The response of AccountsApi->update_account_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountsApi->update_account_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverid** | **str**| Base64 encoded server id | 
 **accountid** | **int**| Account id | 
 **userid** | **str**| User name | 

### Return type

[**Account**](Account.md)

### Authorization

[api_key](../README.md#api_key), [role_id](../README.md#role_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account after update |  -  |
**403** | Invalid user name |  -  |
**404** | Account not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

