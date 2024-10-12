# openapi_client.CommentsApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_a_comment_or_reply**](CommentsApi.md#delete_a_comment_or_reply) | **DELETE** /comments/{id} | Delete a comment or reply
[**get_a_comment_or_reply**](CommentsApi.md#get_a_comment_or_reply) | **GET** /comments/{id} | Get a comment or reply
[**get_all_users_who_liked_a_comment**](CommentsApi.md#get_all_users_who_liked_a_comment) | **GET** /comments/{id}/likes | Get all users who liked a comment
[**get_recently_created_comments**](CommentsApi.md#get_recently_created_comments) | **GET** /comments/recent/{comment_type}/{type} | Get recently created comments
[**get_recently_updated_comments**](CommentsApi.md#get_recently_updated_comments) | **GET** /comments/updates/{comment_type}/{type} | Get recently updated comments
[**get_replies_for_a_comment**](CommentsApi.md#get_replies_for_a_comment) | **GET** /comments/{id}/replies | Get replies for a comment
[**get_the_attached_media_item**](CommentsApi.md#get_the_attached_media_item) | **GET** /comments/{id}/item | Get the attached media item
[**get_trending_comments**](CommentsApi.md#get_trending_comments) | **GET** /comments/trending/{comment_type}/{type} | Get trending comments
[**like_a_comment**](CommentsApi.md#like_a_comment) | **POST** /comments/{id}/like | Like a comment
[**post_a_comment**](CommentsApi.md#post_a_comment) | **POST** /comments | Post a comment
[**post_a_reply_for_a_comment**](CommentsApi.md#post_a_reply_for_a_comment) | **POST** /comments/{id}/replies | Post a reply for a comment
[**remove_like_on_a_comment**](CommentsApi.md#remove_like_on_a_comment) | **DELETE** /comments/{id}/like | Remove like on a comment
[**update_a_comment_or_reply**](CommentsApi.md#update_a_comment_or_reply) | **PUT** /comments/{id} | Update a comment or reply


# **delete_a_comment_or_reply**
> delete_a_comment_or_reply(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Delete a comment or reply

#### &#128274; OAuth Required  Delete a single comment. The OAuth user must match the author of the comment in order to delete it. If not, a `401` HTTP status code is returned. The comment must also be less than 2 weeks old or have 0 replies. If not, a `409` HTTP status is returned.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Delete a comment or reply
        api_instance.delete_a_comment_or_reply(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->delete_a_comment_or_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_a_comment_or_reply**
> get_a_comment_or_reply(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get a comment or reply

####  &#128513; Emojis  Returns a single comment and indicates how many replies it has. Use [**/comments/:id/replies**](/reference/comments/replies/) to get the actual replies.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = '417' # str | A specific comment ID.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get a comment or reply
        api_instance.get_a_comment_or_reply(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_a_comment_or_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A specific comment ID. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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
**200** | OK |  * X-Item-ID -  <br>  * X-Item-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_users_who_liked_a_comment**
> get_all_users_who_liked_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all users who liked a comment

#### &#128196; Pagination  Returns all users who liked a comment. If you only need the `replies` count, the main `comment` object already has that, so no need to use this method.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 417 # int | A specific comment ID.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all users who liked a comment
        api_instance.get_all_users_who_liked_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_all_users_who_liked_a_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A specific comment ID. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recently_created_comments**
> get_recently_created_comments(comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get recently created comments

#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis  Returns the most recently written comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    comment_type = 'all' # str | 
    type = 'all' # str | 
    include_replies = 'false' # str | include comment replies (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get recently created comments
        api_instance.get_recently_created_comments(comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_recently_created_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment_type** | **str**|  | 
 **type** | **str**|  | 
 **include_replies** | **str**| include comment replies | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recently_updated_comments**
> get_recently_updated_comments(comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get recently updated comments

#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis  Returns the most recently updated comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    comment_type = 'all' # str | 
    type = 'all' # str | 
    include_replies = 'false' # str | include comment replies (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get recently updated comments
        api_instance.get_recently_updated_comments(comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_recently_updated_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment_type** | **str**|  | 
 **type** | **str**|  | 
 **include_replies** | **str**| include comment replies | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replies_for_a_comment**
> get_replies_for_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get replies for a comment

#### &#128196; Pagination &#128513; Emojis  Returns all replies for a comment. It is possible these replies could have replies themselves, so in that case you would just call [**/comments/:id/replies**](/reference/comments/replies/) again with the new comment `id`.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = '417' # str | A specific comment ID.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get replies for a comment
        api_instance.get_replies_for_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_replies_for_a_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A specific comment ID. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_the_attached_media_item**
> get_the_attached_media_item(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get the attached media item

#### &#10024; Extended Info  Returns the media item this comment is attached to. The media type can be `movie`, `show`, `season`, `episode`, or `list` and it also returns the standard media object for that media type.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 417 # int | A specific comment ID.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get the attached media item
        api_instance.get_the_attached_media_item(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_the_attached_media_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A specific comment ID. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trending_comments**
> get_trending_comments(comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get trending comments

#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis  Returns all comments with the most likes and replies over the last 7 days. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    comment_type = 'all' # str | 
    type = 'all' # str | 
    include_replies = 'false' # str | include comment replies (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get trending comments
        api_instance.get_trending_comments(comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->get_trending_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **comment_type** | **str**|  | 
 **type** | **str**|  | 
 **include_replies** | **str**| include comment replies | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

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
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **like_a_comment**
> like_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Like a comment

#### &#128274; OAuth Required  Votes help determine popular comments. Only one like is allowed per comment per user.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = '417' # str | A specific comment ID.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Like a comment
        api_instance.like_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->like_a_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A specific comment ID. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_a_comment**
> post_a_comment(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, post_a_comment_request=post_a_comment_request)

Post a comment

#### &#128274; OAuth Required &#128513; Emojis  Add a new comment to a movie, show, season, episode, or list. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.  #### JSON POST Data  | Key | Type | Default | Value | |---|---|---|---| | item <span style=\"color:red;\">*</a> | object | | `movie`, `show`, `season`, `episode`, or `list` object. (see examples &#8594;) | | `comment` <span style=\"color:red;\">*</a> | string |  | Text for the comment. | | `spoiler` | boolean | `false` | Is this a spoiler? | | `sharing`  | object | | Control sharing to any connected social networks. (see below &#8595;) |  #### Sharing  The `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.  | Key | Type | |---|---| | `twitter` | boolean | | `tumblr` | boolean | | `medium` | boolean |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.post_a_comment_request import PostACommentRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    post_a_comment_request = openapi_client.PostACommentRequest() # PostACommentRequest |  (optional)

    try:
        # Post a comment
        api_instance.post_a_comment(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, post_a_comment_request=post_a_comment_request)
    except Exception as e:
        print("Exception when calling CommentsApi->post_a_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **post_a_comment_request** | [**PostACommentRequest**](PostACommentRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_a_reply_for_a_comment**
> post_a_reply_for_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, post_a_reply_for_a_comment_request=post_a_reply_for_a_comment_request)

Post a reply for a comment

#### &#128274; OAuth Required &#128513; Emojis  Add a new reply to an existing comment. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.  #### JSON POST Data  | Key | Type | Default | Value | |---|---|---|---| | `comment` <span style=\"color:red;\">*</a> | string |  | Text for the reply. | | `spoiler` | boolean | `false` | Is this a spoiler? |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.post_a_reply_for_a_comment_request import PostAReplyForACommentRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    post_a_reply_for_a_comment_request = openapi_client.PostAReplyForACommentRequest() # PostAReplyForACommentRequest |  (optional)

    try:
        # Post a reply for a comment
        api_instance.post_a_reply_for_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, post_a_reply_for_a_comment_request=post_a_reply_for_a_comment_request)
    except Exception as e:
        print("Exception when calling CommentsApi->post_a_reply_for_a_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **post_a_reply_for_a_comment_request** | [**PostAReplyForACommentRequest**](PostAReplyForACommentRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_like_on_a_comment**
> remove_like_on_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Remove like on a comment

#### &#128274; OAuth Required  Remove a like on a comment.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Remove like on a comment
        api_instance.remove_like_on_a_comment(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling CommentsApi->remove_like_on_a_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_a_comment_or_reply**
> update_a_comment_or_reply(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, update_a_comment_or_reply_request=update_a_comment_or_reply_request)

Update a comment or reply

#### &#128274; OAuth Required &#128513; Emojis  Update a single comment. The OAuth user must match the author of the comment in order to update it. If not, a `401` HTTP status is returned.  #### JSON POST Data  | Key | Type | Default | Value | |---|---|---|---| | `comment` | string |  | Text for the comment. | | `spoiler` | boolean | `false` | Is this a spoiler? |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.update_a_comment_or_reply_request import UpdateACommentOrReplyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.trakt.tv
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.trakt.tv"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentsApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    update_a_comment_or_reply_request = openapi_client.UpdateACommentOrReplyRequest() # UpdateACommentOrReplyRequest |  (optional)

    try:
        # Update a comment or reply
        api_instance.update_a_comment_or_reply(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, update_a_comment_or_reply_request=update_a_comment_or_reply_request)
    except Exception as e:
        print("Exception when calling CommentsApi->update_a_comment_or_reply: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **update_a_comment_or_reply_request** | [**UpdateACommentOrReplyRequest**](UpdateACommentOrReplyRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

