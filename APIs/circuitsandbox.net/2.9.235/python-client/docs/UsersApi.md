# openapi_client.UsersApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_label**](UsersApi.md#get_label) | **GET** /users/labels | Returns all user labels
[**get_presence**](UsersApi.md#get_presence) | **GET** /users/presence | Gets the presence status
[**get_profile**](UsersApi.md#get_profile) | **GET** /users/profile | Gets the authenticated user&#39;s profile information
[**get_support_info**](UsersApi.md#get_support_info) | **GET** /users/supportinfo | Gets the support information
[**get_user_by_email_address**](UsersApi.md#get_user_by_email_address) | **GET** /users/{emailAddress}/getUserByEmail | Get user by email
[**get_user_by_id**](UsersApi.md#get_user_by_id) | **GET** /users/{id} | Gets the user&#39;s profile information
[**get_user_presence**](UsersApi.md#get_user_presence) | **GET** /users/{id}/presence | Gets the presence status
[**search_user**](UsersApi.md#search_user) | **GET** /users | Search for users
[**search_users_list**](UsersApi.md#search_users_list) | **GET** /users/list | Search multiple users.
[**set_user_presence**](UsersApi.md#set_user_presence) | **PUT** /users/presence | Updates the presence status


# **get_label**
> List[Label] get_label()

Returns all user labels

Returns all labels of the user that were defined either explicit or implicit via assignment to conversations. OauthScopes: READ_USER_PROFILE, ORGANIZE_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.label import Label
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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

    try:
        # Returns all user labels
        api_response = api_instance.get_label()
        print("The response of UsersApi->get_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_label: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Label]**](Label.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of labels |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_presence**
> List[Presence] get_presence(user_ids)

Gets the presence status

Gets the presence status of the users whose IDs or email addresses are given. OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.presence import Presence
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    user_ids = ['user_ids_example'] # List[str] | A list of unique user IDs or email addresses of the users you want to query the presence state for

    try:
        # Gets the presence status
        api_response = api_instance.get_presence(user_ids)
        print("The response of UsersApi->get_presence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_presence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_ids** | [**List[str]**](str.md)| A list of unique user IDs or email addresses of the users you want to query the presence state for | 

### Return type

[**List[Presence]**](Presence.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The presence states |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the userIds passed as parameter are not provided in the correct format&lt;/li&gt;&lt;li&gt; or a valid email address&lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | One or more of the users do not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_profile**
> User get_profile()

Gets the authenticated user's profile information

Gets the authenticated user's profile information. OauthScopes: READ_USER_PROFILE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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

    try:
        # Gets the authenticated user's profile information
        api_response = api_instance.get_profile()
        print("The response of UsersApi->get_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_profile: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the authenticated user&#39;s profile information |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_support_info**
> SupportInfo get_support_info()

Gets the support information

Gets the support information for the tenant of the requesting user OauthScopes: READ_USER_PROFILE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.support_info import SupportInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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

    try:
        # Gets the support information
        api_response = api_instance.get_support_info()
        print("The response of UsersApi->get_support_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_support_info: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SupportInfo**](SupportInfo.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful, the support information returned |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_email_address**
> User get_user_by_email_address(email_address, secondary_lookup=secondary_lookup)

Get user by email

Get user by first or secondary email address OauthScopes: READ_USER_PROFILE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    email_address = 'email_address_example' # str | The main or secondary email address of a user.
    secondary_lookup = True # bool | secondaryLookup enabled (default = false) (optional)

    try:
        # Get user by email
        api_response = api_instance.get_user_by_email_address(email_address, secondary_lookup=secondary_lookup)
        print("The response of UsersApi->get_user_by_email_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_by_email_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email_address** | **str**| The main or secondary email address of a user. | 
 **secondary_lookup** | **bool**| secondaryLookup enabled (default &#x3D; false) | [optional] 

### Return type

[**User**](User.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**404** | User not found or not a session guest.  |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_id**
> User get_user_by_id(id)

Gets the user's profile information

Gets the profile information of the user with the given ID. OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    id = 'id_example' # str | The unique ID or the email address of the user to fetch

    try:
        # Gets the user's profile information
        api_response = api_instance.get_user_by_id(id)
        print("The response of UsersApi->get_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID or the email address of the user to fetch | 

### Return type

[**User**](User.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful, the user profile is returned |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the data format of the passed user does not match either a UUID (user primary key)&lt;/li&gt;&lt;li&gt; or an valid email address&lt;/li&gt;&lt;li&gt;or a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | The user does not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_presence**
> Presence get_user_presence(id)

Gets the presence status

Gets the presence status of the users whose ID or email address is given. OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.presence import Presence
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    id = 'id_example' # str | The unique ID or the email address of the user to fetch.

    try:
        # Gets the presence status
        api_response = api_instance.get_user_presence(id)
        print("The response of UsersApi->get_user_presence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_presence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID or the email address of the user to fetch. | 

### Return type

[**Presence**](Presence.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The presence state |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the data format of the passed user does not match either a UUID (user primary key)&lt;/li&gt;&lt;li&gt; or a valid email address&lt;/li&gt;&lt;li&gt;or a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | The user does not exist |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_user**
> List[User] search_user(name)

Search for users

Search for users based on an email address or username OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    name = 'name_example' # str | Search for a user by name

    try:
        # Search for users
        api_response = api_instance.search_user(name)
        print("The response of UsersApi->search_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->search_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Search for a user by name | 

### Return type

[**List[User]**](User.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The users which match the search criteria |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**404** | The search term did not much any results |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_users_list**
> List[User] search_users_list(name, return_full_user_info=return_full_user_info, secondary_lookup=secondary_lookup)

Search multiple users.

Search multiple users given by id or email address. OauthScopes: READ_USER

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    name = ['name_example'] # List[str] | Multiple email addresses or UUIDs.
    return_full_user_info = False # bool | Boolean, return full user info? (optional) (default to False)
    secondary_lookup = False # bool | Boolean, lookup secondary email? (optional) (default to False)

    try:
        # Search multiple users.
        api_response = api_instance.search_users_list(name, return_full_user_info=return_full_user_info, secondary_lookup=secondary_lookup)
        print("The response of UsersApi->search_users_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->search_users_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**List[str]**](str.md)| Multiple email addresses or UUIDs. | 
 **return_full_user_info** | **bool**| Boolean, return full user info? | [optional] [default to False]
 **secondary_lookup** | **bool**| Boolean, lookup secondary email? | [optional] [default to False]

### Return type

[**List[User]**](User.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | At least one user was found and returned in a list |  -  |
**400** | Bad Request |  -  |
**401** | The authentication was not successful |  -  |
**404** | No user was found |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_user_presence**
> Presence set_user_presence(state, clear_dnd=clear_dnd, dnd_until=dnd_until, status_message=status_message)

Updates the presence status

Updates the presence status of the authenticated user. OauthScopes: WRITE_USER_PROFILE, MANAGE_PRESENCE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.presence import Presence
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
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
    state = 'state_example' # str | The user's presence.
    clear_dnd = False # bool | Clear the DND of the user. (optional) (default to False)
    dnd_until = '2013-10-20T19:20:30+01:00' # datetime | Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND. (optional)
    status_message = 'status_message_example' # str | An optional status message that is displayed instead of the location (optional)

    try:
        # Updates the presence status
        api_response = api_instance.set_user_presence(state, clear_dnd=clear_dnd, dnd_until=dnd_until, status_message=status_message)
        print("The response of UsersApi->set_user_presence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->set_user_presence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**| The user&#39;s presence. | 
 **clear_dnd** | **bool**| Clear the DND of the user. | [optional] [default to False]
 **dnd_until** | **datetime**| Timestamp until the DND state of the user is active. This field is mandatory when the state is set to DND. | [optional] 
 **status_message** | **str**| An optional status message that is displayed instead of the location | [optional] 

### Return type

[**Presence**](Presence.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The presence states |  -  |
**400** | The request cannot be fulfilled due to bad syntax: &lt;ul&gt;&lt;li&gt;the presence state is DND and the data format of the passed dndUntil is missing &lt;/li&gt;&lt;li&gt;a field constraint is violated&lt;/li&gt;&lt;/ul&gt; |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

