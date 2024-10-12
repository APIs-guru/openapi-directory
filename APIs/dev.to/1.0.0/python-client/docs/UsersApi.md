# openapi_client.UsersApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_org_users_0**](UsersApi.md#get_org_users_0) | **GET** /api/organizations/{username}/users | Organization&#39;s users
[**get_user**](UsersApi.md#get_user) | **GET** /api/users/{id} | A User
[**get_user_all_articles_0**](UsersApi.md#get_user_all_articles_0) | **GET** /api/articles/me/all | User&#39;s all articles
[**get_user_articles_0**](UsersApi.md#get_user_articles_0) | **GET** /api/articles/me | User&#39;s articles
[**get_user_me**](UsersApi.md#get_user_me) | **GET** /api/users/me | The authenticated user
[**get_user_published_articles_0**](UsersApi.md#get_user_published_articles_0) | **GET** /api/articles/me/published | User&#39;s published articles
[**get_user_unpublished_articles_0**](UsersApi.md#get_user_unpublished_articles_0) | **GET** /api/articles/me/unpublished | User&#39;s unpublished articles
[**post_admin_users_create**](UsersApi.md#post_admin_users_create) | **POST** /api/admin/users | Invite a User
[**suspend_user**](UsersApi.md#suspend_user) | **PUT** /api/users/{id}/suspend | Suspend a User
[**unpublish_user**](UsersApi.md#unpublish_user) | **PUT** /api/users/{id}/unpublish | Unpublish a User&#39;s Articles and Comments


# **get_org_users_0**
> List[User] get_org_users_0(username, page=page, per_page=per_page)

Organization's users

This endpoint allows the client to retrieve a list of users belonging to the organization  It supports pagination, each page will contain `30` users by default.

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    username = 'username_example' # str | 
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # Organization's users
        api_response = api_instance.get_org_users_0(username, page=page, per_page=per_page)
        print("The response of UsersApi->get_org_users_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_org_users_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**|  | 
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Organization&#39;s users |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user**
> List[User] get_user(id)

A User

This endpoint allows the client to retrieve a single user, either by id or by the user's username.  For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | 

    try:
        # A User
        api_response = api_instance.get_user(id)
        print("The response of UsersApi->get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[User]**](User.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_all_articles_0**
> List[ArticleIndex] get_user_all_articles_0(page=page, per_page=per_page)

User's all articles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  It will return both published and unpublished articles with pagination.  Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.  By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's all articles
        api_response = api_instance.get_user_all_articles_0(page=page, per_page=per_page)
        print("The response of UsersApi->get_user_all_articles_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_all_articles_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_articles_0**
> List[ArticleIndex] get_user_articles_0(page=page, per_page=per_page)

User's articles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Published articles will be in reverse chronological publication order.  It will return published articles with pagination. By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's articles
        api_response = api_instance.get_user_articles_0(page=page, per_page=per_page)
        print("The response of UsersApi->get_user_articles_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_articles_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_me**
> List[User] get_user_me()

The authenticated user

This endpoint allows the client to retrieve information about the authenticated user

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        # The authenticated user
        api_response = api_instance.get_user_me()
        print("The response of UsersApi->get_user_me:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_me: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[User]**](User.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_published_articles_0**
> List[ArticleIndex] get_user_published_articles_0(page=page, per_page=per_page)

User's published articles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Published articles will be in reverse chronological publication order.  It will return published articles with pagination. By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's published articles
        api_response = api_instance.get_user_published_articles_0(page=page, per_page=per_page)
        print("The response of UsersApi->get_user_published_articles_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_published_articles_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_unpublished_articles_0**
> List[ArticleIndex] get_user_unpublished_articles_0(page=page, per_page=per_page)

User's unpublished articles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.  \"Articles\" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.  Unpublished articles will be in reverse chronological creation order.  It will return unpublished articles with pagination. By default a page will contain 30 articles.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.article_index import ArticleIndex
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)

    try:
        # User's unpublished articles
        api_response = api_instance.get_user_unpublished_articles_0(page=page, per_page=per_page)
        print("The response of UsersApi->get_user_unpublished_articles_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_unpublished_articles_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]

### Return type

[**List[ArticleIndex]**](ArticleIndex.md)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of the authenticated user&#39;s Articles |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_admin_users_create**
> post_admin_users_create(user_invite_param=user_invite_param)

Invite a User

This endpoint allows the client to trigger an invitation to the provided email address.          It requires a token from a user with `super_admin` privileges.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.models.user_invite_param import UserInviteParam
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_invite_param = openapi_client.UserInviteParam() # UserInviteParam |  (optional)

    try:
        # Invite a User
        api_instance.post_admin_users_create(user_invite_param=user_invite_param)
    except Exception as e:
        print("Exception when calling UsersApi->post_admin_users_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_invite_param** | [**UserInviteParam**](UserInviteParam.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful |  -  |
**401** | Unauthorized |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **suspend_user**
> suspend_user(id)

Suspend a User

This endpoint allows the client to suspend a user.  The user associated with the API key must have any 'admin' or 'moderator' role.  This specified user will be assigned the 'suspended' role. Suspending a user will stop the user from posting new posts and comments. It doesn't delete any of the user's content, just prevents them from creating new content while suspended. Users are not notified of their suspension in the UI, so if you want them to know about this, you must notify them.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 1 # int | The ID of the user to suspend.

    try:
        # Suspend a User
        api_instance.suspend_user(id)
    except Exception as e:
        print("Exception when calling UsersApi->suspend_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the user to suspend. | 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User successfully unpublished |  -  |
**401** | Unauthorized |  -  |
**404** | Unknown User ID |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unpublish_user**
> unpublish_user(id)

Unpublish a User's Articles and Comments

This endpoint allows the client to unpublish all of the articles and comments created by a user.  The user associated with the API key must have any 'admin' or 'moderator' role.  This specified user's articles and comments will be unpublished and will no longer be visible to the public. They will remain in the database and will set back to draft status on the specified user's  dashboard. Any notifications associated with the specified user's articles and comments will be deleted.  Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT status code immediately, but the articles and comments will not be unpublished until the request is completed on the server.

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 1 # int | The ID of the user to unpublish.

    try:
        # Unpublish a User's Articles and Comments
        api_instance.unpublish_user(id)
    except Exception as e:
        print("Exception when calling UsersApi->unpublish_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the user to unpublish. | 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User&#39;s articles and comments successfully unpublished |  -  |
**401** | Unauthorized |  -  |
**404** | Unknown User ID (still accepted for async processing) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

