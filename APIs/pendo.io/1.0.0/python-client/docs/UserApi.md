# openapi_client.UserApi

All URIs are relative to *https://api.feedback.eu.pendo.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_get**](UserApi.md#users_get) | **GET** /users | fetch User records
[**users_id_delete**](UserApi.md#users_id_delete) | **DELETE** /users/{id} | Delete a User
[**users_id_get**](UserApi.md#users_id_get) | **GET** /users/{id} | Get a User record
[**users_id_put**](UserApi.md#users_id_put) | **PUT** /users/{id} | Update a User
[**users_id_tags_delete**](UserApi.md#users_id_tags_delete) | **DELETE** /users/{id}/tags | Delete custom User tags
[**users_id_tags_get**](UserApi.md#users_id_tags_get) | **GET** /users/{id}/tags | Get custom User tags
[**users_id_tags_post**](UserApi.md#users_id_tags_post) | **POST** /users/{id}/tags | Overwrite current custom User tags with the given tags
[**users_invite_end_user_post**](UserApi.md#users_invite_end_user_post) | **POST** /users/invite_end_user | Invite an EndUser (customer)
[**users_invite_vendor_user_post**](UserApi.md#users_invite_vendor_user_post) | **POST** /users/invite_vendor_user | Invite a VendorUser (Team member)
[**users_post**](UserApi.md#users_post) | **POST** /users | Ping to create or update an EndUser and Account in one call
[**users_search_get**](UserApi.md#users_search_get) | **GET** /users/search | Find a User with a query
[**vendor_users_post**](UserApi.md#vendor_users_post) | **POST** /vendor_users | Create or update a team member by their external_id


# **users_get**
> List[User] users_get(role, account=account, start=start, limit=limit, order_by=order_by, order_dir=order_dir)

fetch User records

get a list of User records

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    role = 'role_example' # str | role
    account = 56 # int | Filter by Account ID, if supplied. Only useful if role param is endUser (optional)
    start = 0 # int | Offset to start at (optional) (default to 0)
    limit = 300 # int | Limit the number of records returned. Max value can be 300. If limit is set to more than 300 the api will return an error (optional) (default to 300)
    order_by = 'order_by_example' # str | The field to use for sort (optional)
    order_dir = 'order_dir_example' # str | The sort direction (optional)

    try:
        # fetch User records
        api_response = api_instance.users_get(role, account=account, start=start, limit=limit, order_by=order_by, order_dir=order_dir)
        print("The response of UserApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role** | **str**| role | 
 **account** | **int**| Filter by Account ID, if supplied. Only useful if role param is endUser | [optional] 
 **start** | **int**| Offset to start at | [optional] [default to 0]
 **limit** | **int**| Limit the number of records returned. Max value can be 300. If limit is set to more than 300 the api will return an error | [optional] [default to 300]
 **order_by** | **str**| The field to use for sort | [optional] 
 **order_dir** | **str**| The sort direction | [optional] 

### Return type

[**List[User]**](User.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User records |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_delete**
> User users_id_delete(id)

Delete a User

This removes most traces of a User's existence from the system. For an EndUser you might want to consider just letting them churn after a period of inactivity.

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 3.4 # float | 

    try:
        # Delete a User
        api_response = api_instance.users_id_delete(id)
        print("The response of UserApi->users_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->users_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 

### Return type

[**User**](User.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the deleted User |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_get**
> User users_id_get(id)

Get a User record

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 3.4 # float | 

    try:
        # Get a User record
        api_response = api_instance.users_id_get(id)
        print("The response of UserApi->users_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->users_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**|  | 

### Return type

[**User**](User.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the User record |  -  |
**410** | User has been deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_put**
> User users_id_put(id, user=user)

Update a User

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.models.users_id_put_request import UsersIdPutRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 3.4 # float | Feedback's User ID
    user = openapi_client.UsersIdPutRequest() # UsersIdPutRequest |  (optional)

    try:
        # Update a User
        api_response = api_instance.users_id_put(id, user=user)
        print("The response of UserApi->users_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->users_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Feedback&#39;s User ID | 
 **user** | [**UsersIdPutRequest**](UsersIdPutRequest.md)|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | updated User |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_tags_delete**
> users_id_tags_delete(id)

Delete custom User tags

Removes all custom tags associated with the User

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 3.4 # float | Feedback's User ID

    try:
        # Delete custom User tags
        api_instance.users_id_tags_delete(id)
    except Exception as e:
        print("Exception when calling UserApi->users_id_tags_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Feedback&#39;s User ID | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_tags_get**
> users_id_tags_get(id)

Get custom User tags

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 3.4 # float | Feedback's User ID

    try:
        # Get custom User tags
        api_instance.users_id_tags_get(id)
    except Exception as e:
        print("Exception when calling UserApi->users_id_tags_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Feedback&#39;s User ID | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of maps specifying tags under each tag group, for example:  [  {&#39;impacts&#39; &#x3D;&gt; [&#39;sales&#39;]},  {&#39;resources&#39; &#x3D;&gt; [&#39;dev&#39;, &#39;test&#39;, &#39;support&#39;]}  ] |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_tags_post**
> users_id_tags_post(id, tags)

Overwrite current custom User tags with the given tags

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    id = 3.4 # float | Feedback's User ID
    tags = None # object | An array of maps specifying tags under each tag group, for example:  [  {'impacts' => ['sales']},  {'resources' => ['dev', 'test', 'support']}  ]

    try:
        # Overwrite current custom User tags with the given tags
        api_instance.users_id_tags_post(id, tags)
    except Exception as e:
        print("Exception when calling UserApi->users_id_tags_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **float**| Feedback&#39;s User ID | 
 **tags** | **object**| An array of maps specifying tags under each tag group, for example:  [  {&#39;impacts&#39; &#x3D;&gt; [&#39;sales&#39;]},  {&#39;resources&#39; &#x3D;&gt; [&#39;dev&#39;, &#39;test&#39;, &#39;support&#39;]}  ] | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated User tags |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_invite_end_user_post**
> users_invite_end_user_post(data)

Invite an EndUser (customer)

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.users_invite_end_user_post_request import UsersInviteEndUserPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    data = openapi_client.UsersInviteEndUserPostRequest() # UsersInviteEndUserPostRequest | 

    try:
        # Invite an EndUser (customer)
        api_instance.users_invite_end_user_post(data)
    except Exception as e:
        print("Exception when calling UserApi->users_invite_end_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**UsersInviteEndUserPostRequest**](UsersInviteEndUserPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_invite_vendor_user_post**
> users_invite_vendor_user_post(data)

Invite a VendorUser (Team member)

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.users_invite_vendor_user_post_request import UsersInviteVendorUserPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    data = openapi_client.UsersInviteVendorUserPostRequest() # UsersInviteVendorUserPostRequest | 

    try:
        # Invite a VendorUser (Team member)
        api_instance.users_invite_vendor_user_post(data)
    except Exception as e:
        print("Exception when calling UserApi->users_invite_vendor_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**UsersInviteVendorUserPostRequest**](UsersInviteVendorUserPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_post**
> users_post(data)

Ping to create or update an EndUser and Account in one call

Replicates much of the functionality of the widget ping, allowing callers to create or update User records for End Users. If you call this with a new User and/or Account, the record will be created. If you call for an existing User/Account, the record will be updated. You can also call this at EndUser login time, or more frequently, to notify Feedback that the EndUser has been seen. This keeps Feedback's 'last seen' data fresh and updates your reporting. This endpoint is used by our Zapier integration. The only value allowed in user.roles is 'endUser'. The id you supply here for the User and Account should be your own unique id, which Feedback calls external_id. This probably isn't the same as Feedback's id seen elsewhere in the API.

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.end_user_ping import EndUserPing
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    data = openapi_client.EndUserPing() # EndUserPing | the account and user

    try:
        # Ping to create or update an EndUser and Account in one call
        api_instance.users_post(data)
    except Exception as e:
        print("Exception when calling UserApi->users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**EndUserPing**](EndUserPing.md)| the account and user | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_search_get**
> User users_search_get(external_id=external_id, email=email, role=role)

Find a User with a query

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    external_id = 'external_id_example' # str | Find using your external ID, rather than the ID generated by Feedback (optional)
    email = 'email_example' # str | Find user by their email address. Role param must be specified when using this option (optional)
    role = 'role_example' # str | Users role ('vendorUser' or 'endUser'). Only useful when finding a user by their email address (optional)

    try:
        # Find a User with a query
        api_response = api_instance.users_search_get(external_id=external_id, email=email, role=role)
        print("The response of UserApi->users_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->users_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| Find using your external ID, rather than the ID generated by Feedback | [optional] 
 **email** | **str**| Find user by their email address. Role param must be specified when using this option | [optional] 
 **role** | **str**| Users role (&#39;vendorUser&#39; or &#39;endUser&#39;). Only useful when finding a user by their email address | [optional] 

### Return type

[**User**](User.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the User record |  -  |
**410** | User has been deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_users_post**
> vendor_users_post(data)

Create or update a team member by their external_id

the POST /vendor_users is very similar to the POST /users/invite_vendor_user but /vendor_users is intended for consumers to refresh team member data periodically, rather than just a one-off user creation.

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.vendor_users_post_request import VendorUsersPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    data = openapi_client.VendorUsersPostRequest() # VendorUsersPostRequest | 

    try:
        # Create or update a team member by their external_id
        api_instance.vendor_users_post(data)
    except Exception as e:
        print("Exception when calling UserApi->vendor_users_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**VendorUsersPostRequest**](VendorUsersPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

