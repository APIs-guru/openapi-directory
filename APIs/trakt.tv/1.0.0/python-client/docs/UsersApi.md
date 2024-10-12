# openapi_client.UsersApi

All URIs are relative to *https://api.trakt.tv*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_hidden_items**](UsersApi.md#add_hidden_items) | **POST** /users/hidden/{section} | Add hidden items
[**add_items_to_personal_list**](UsersApi.md#add_items_to_personal_list) | **POST** /users/{id}/lists/{list_id}/items | Add items to personal list
[**approve_follow_request**](UsersApi.md#approve_follow_request) | **POST** /users/requests/{id} | Approve follow request
[**create_personal_list**](UsersApi.md#create_personal_list) | **POST** /users/{id}/lists | Create personal list
[**delete_a_users_personal_list**](UsersApi.md#delete_a_users_personal_list) | **DELETE** /users/{id}/lists/{list_id} | Delete a user&#39;s personal list
[**deny_follow_request**](UsersApi.md#deny_follow_request) | **DELETE** /users/requests/{id} | Deny follow request
[**follow_this_user**](UsersApi.md#follow_this_user) | **POST** /users/{id}/follow | Follow this user
[**get_a_users_personal_lists**](UsersApi.md#get_a_users_personal_lists) | **GET** /users/{id}/lists | Get a user&#39;s personal lists
[**get_all_lists_a_user_can_collaborate_on**](UsersApi.md#get_all_lists_a_user_can_collaborate_on) | **GET** /users/{id}/lists/collaborations | Get all lists a user can collaborate on
[**get_comments**](UsersApi.md#get_comments) | **GET** /users/{id}/comments/{comment_type}/{type} | Get comments
[**get_follow_requests**](UsersApi.md#get_follow_requests) | **GET** /users/requests | Get follow requests
[**get_followers**](UsersApi.md#get_followers) | **GET** /users/{id}/followers | Get followers
[**get_following**](UsersApi.md#get_following) | **GET** /users/{id}/following | Get following
[**get_friends**](UsersApi.md#get_friends) | **GET** /users/{id}/friends | Get friends
[**get_hidden_items**](UsersApi.md#get_hidden_items) | **GET** /users/hidden/{section} | Get hidden items
[**get_items_on_a_personal_list**](UsersApi.md#get_items_on_a_personal_list) | **GET** /users/{id}/lists/{list_id}/items/{type} | Get items on a personal list
[**get_likes**](UsersApi.md#get_likes) | **GET** /users/{id}/likes/{type} | Get likes
[**get_pending_following_requests**](UsersApi.md#get_pending_following_requests) | **GET** /users/requests/following | Get pending following requests
[**get_personal_list**](UsersApi.md#get_personal_list) | **GET** /users/{id}/lists/{list_id} | Get personal list
[**get_saved_filters**](UsersApi.md#get_saved_filters) | **GET** /users/saved_filters/{section} | Get saved filters
[**get_stats**](UsersApi.md#get_stats) | **GET** /users/{id}/stats | Get stats
[**get_user_profile**](UsersApi.md#get_user_profile) | **GET** /users/{id} | Get user profile
[**get_watching**](UsersApi.md#get_watching) | **GET** /users/{id}/watching | Get watching
[**like_a_list**](UsersApi.md#like_a_list) | **POST** /users/{id}/lists/{list_id}/like | Like a list
[**remove_hidden_items**](UsersApi.md#remove_hidden_items) | **POST** /users/hidden/{section}/remove | Remove hidden items
[**remove_items_from_personal_list**](UsersApi.md#remove_items_from_personal_list) | **POST** /users/{id}/lists/{list_id}/items/remove | Remove items from personal list
[**remove_like_on_a_list**](UsersApi.md#remove_like_on_a_list) | **DELETE** /users/{id}/lists/{list_id}/like | Remove like on a list
[**reorder_a_users_lists**](UsersApi.md#reorder_a_users_lists) | **POST** /users/{id}/lists/reorder | Reorder a user&#39;s lists
[**reorder_items_on_a_list**](UsersApi.md#reorder_items_on_a_list) | **POST** /users/{id}/lists/{list_id}/items/reorder | Reorder items on a list
[**retrieve_settings**](UsersApi.md#retrieve_settings) | **GET** /users/settings | Retrieve settings
[**unfollow_this_user**](UsersApi.md#unfollow_this_user) | **DELETE** /users/{id}/follow | Unfollow this user
[**update_personal_list**](UsersApi.md#update_personal_list) | **PUT** /users/{id}/lists/{list_id} | Update personal list
[**users_id_collection_type_get**](UsersApi.md#users_id_collection_type_get) | **GET** /users/{id}/collection/{type} | Get collection
[**users_id_history_type_item_id_get**](UsersApi.md#users_id_history_type_item_id_get) | **GET** /users/{id}/history/{type}/{item_id} | Get watched history
[**users_id_lists_list_id_comments_sort_get**](UsersApi.md#users_id_lists_list_id_comments_sort_get) | **GET** /users/{id}/lists/{list_id}/comments/{sort} | Get all list comments
[**users_id_lists_list_id_likes_get**](UsersApi.md#users_id_lists_list_id_likes_get) | **GET** /users/{id}/lists/{list_id}/likes | Get all users who liked a list
[**users_id_ratings_type_rating_get**](UsersApi.md#users_id_ratings_type_rating_get) | **GET** /users/{id}/ratings/{type}/{rating} | Get ratings
[**users_id_recommendations_type_sort_get**](UsersApi.md#users_id_recommendations_type_sort_get) | **GET** /users/{id}/recommendations/{type}/{sort} | Get personal recommendations
[**users_id_watched_type_get**](UsersApi.md#users_id_watched_type_get) | **GET** /users/{id}/watched/{type} | Get watched
[**users_id_watchlist_type_sort_get**](UsersApi.md#users_id_watchlist_type_sort_get) | **GET** /users/{id}/watchlist/{type}/{sort} | Get watchlist


# **add_hidden_items**
> add_hidden_items(section, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_hidden_items_request=add_hidden_items_request)

Add hidden items

#### &#128274; OAuth Required  Hide items for a specific section. Here's what type of items can hidden for each section.  #### Hideable Media Objects  | Section | Objects | |---|---|---| | `calendar` | `movie`, `show` | | `progress_watched` | `show`, `season` | | `progress_collected` | `show`, `season` | | `recommendations` | `movie`, `show` | | `comments` | `user` |  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `users` | array | Array of `user` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_hidden_items_request import AddHiddenItemsRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    section = 'calendar' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_hidden_items_request = openapi_client.AddHiddenItemsRequest() # AddHiddenItemsRequest |  (optional)

    try:
        # Add hidden items
        api_instance.add_hidden_items(section, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_hidden_items_request=add_hidden_items_request)
    except Exception as e:
        print("Exception when calling UsersApi->add_hidden_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **str**|  | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_hidden_items_request** | [**AddHiddenItemsRequest**](AddHiddenItemsRequest.md)|  | [optional] 

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

# **add_items_to_personal_list**
> add_items_to_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_personal_list_request=add_items_to_personal_list_request)

Add items to personal list

#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced  Add one or more items to a personal list. Items can be movies, shows, seasons, episodes, or people.  #### Notes  Each list item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.  #### Limits  If the user's list item limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. | | `people` | array | Array of `person` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_items_to_personal_list_request import AddItemsToPersonalListRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_items_to_personal_list_request = openapi_client.AddItemsToPersonalListRequest() # AddItemsToPersonalListRequest |  (optional)

    try:
        # Add items to personal list
        api_instance.add_items_to_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_items_to_personal_list_request=add_items_to_personal_list_request)
    except Exception as e:
        print("Exception when calling UsersApi->add_items_to_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_items_to_personal_list_request** | [**AddItemsToPersonalListRequest**](AddItemsToPersonalListRequest.md)|  | [optional] 

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
**420** |  |  * X-Account-Limit -  <br>  * X-Upgrade-URL -  <br>  * X-VIP-User -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **approve_follow_request**
> approve_follow_request(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Approve follow request

#### &#128274; OAuth Required  Approve a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = '123' # str | ID of the follower request.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Approve follow request
        api_instance.approve_follow_request(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->approve_follow_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the follower request. | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_personal_list**
> create_personal_list(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, create_personal_list_request=create_personal_list_request)

Create personal list

#### &#128274; OAuth Required 🔥 VIP Enhanced  Create a new personal list. The `name` is the only required field, but the other info is recommended to ask for.  #### Limits  If the user's list limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.  #### Privacy  Lists will be `private` by default. Here is what each value means.  | Value | Privacy impact... | |---|---| | `private` | Only you can see the list. | | `link` | Anyone with the `share_link` can see the list. | | `friends` | Only your friends can see the list. | | `public` | Anyone can see the list. |  #### JSON POST Data  | Key | Type | Default | Value | |---|---|---|---| | `name` <span style=\"color:red;\">*</a> | string |  | Name of the list. | | `description` | string |  | Description for this list. | | `privacy` | string | `private` | `private`, `link`, `friends`, `public` | | `display_numbers` | boolean | `false` | Should each item be numbered? | | `allow_comments` | boolean | `true` | Are comments allowed? | | `sort_by` | string | `rank` | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` | | `sort_how` | string | `asc` | `asc`, `desc` |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.create_personal_list_request import CreatePersonalListRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    create_personal_list_request = openapi_client.CreatePersonalListRequest() # CreatePersonalListRequest |  (optional)

    try:
        # Create personal list
        api_instance.create_personal_list(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, create_personal_list_request=create_personal_list_request)
    except Exception as e:
        print("Exception when calling UsersApi->create_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **create_personal_list_request** | [**CreatePersonalListRequest**](CreatePersonalListRequest.md)|  | [optional] 

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
**420** |  |  * X-Account-Limit -  <br>  * X-Upgrade-URL -  <br>  * X-VIP-User -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_a_users_personal_list**
> delete_a_users_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Delete a user's personal list

#### &#128274; OAuth Required  Remove a personal list and all items it contains.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | Automatically added
    list_id = 'list_id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Delete a user's personal list
        api_instance.delete_a_users_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->delete_a_users_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **list_id** | **str**| Automatically added | 
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

# **deny_follow_request**
> deny_follow_request(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Deny follow request

#### &#128274; OAuth Required  Deny a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Deny follow request
        api_instance.deny_follow_request(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->deny_follow_request: %s\n" % e)
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

# **follow_this_user**
> follow_this_user(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Follow this user

#### &#128274; OAuth Required  If the user has a private profile, the follow request will require approval (`approved_at` will be null). If a user is public, they will be followed immediately (`approved_at` will have a date).  **Note:** If this user is already being followed, a `409` HTTP status code will returned.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Follow this user
        api_instance.follow_this_user(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->follow_this_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_a_users_personal_lists**
> get_a_users_personal_lists(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get a user's personal lists

#### &#128275; OAuth Optional &#128513; Emojis  Returns all personal lists for a user. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items a specific list contains.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get a user's personal lists
        api_instance.get_a_users_personal_lists(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_a_users_personal_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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

# **get_all_lists_a_user_can_collaborate_on**
> get_all_lists_a_user_can_collaborate_on(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all lists a user can collaborate on

#### &#128275; OAuth Optional  Returns all lists a user can collaborate on. This gives full access to add, remove, and re-order list items. It essentially works just like a list owned by the user, just make sure to use the correct list owner `user` when building the API URLs.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all lists a user can collaborate on
        api_instance.get_all_lists_a_user_can_collaborate_on(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_all_lists_a_user_can_collaborate_on: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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

# **get_comments**
> get_comments(id, comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get comments

#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info  Returns the most recently written comments for the user. You can optionally filter by the `comment_type` and media `type` to limit what gets returned.  By default, only top level comments are returned. Set `?include_replies=true` to return replies in addition to top level comments. Set `?include_replies=only` to return only replies and no top level comments.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    comment_type = 'all' # str | 
    type = 'all' # str | 
    include_replies = 'false' # str | include comment replies (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get comments
        api_instance.get_comments(id, comment_type, type, include_replies=include_replies, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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
**200** | &#x60;&#x60;&#x60; /users/sean/comments &#x60;&#x60;&#x60; |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_follow_requests**
> get_follow_requests(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get follow requests

#### &#128274; OAuth Required &#10024; Extended Info  List a user's pending follow requests so they can either approve or deny them.

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
    api_instance = openapi_client.UsersApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get follow requests
        api_instance.get_follow_requests(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_follow_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_followers**
> get_followers(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get followers

#### &#128275; OAuth Optional &#10024; Extended Info  Returns all followers including when the relationship began.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get followers
        api_instance.get_followers(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_followers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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

# **get_following**
> get_following(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get following

#### &#128275; OAuth Optional &#10024; Extended Info  Returns all user's they follow including when the relationship began.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get following
        api_instance.get_following(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_following: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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

# **get_friends**
> get_friends(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get friends

#### &#128275; OAuth Optional &#10024; Extended Info  Returns all friends for a user including when the relationship began. Friendship is a 2 way relationship where each user follows the other.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get friends
        api_instance.get_friends(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_friends: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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

# **get_hidden_items**
> get_hidden_items(section, type=type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get hidden items

#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info  Get hidden items for a section. This will return an array of standard media objects. You can optionally limit the `type` of results to return.

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
    api_instance = openapi_client.UsersApi(api_client)
    section = 'calendar' # str | 
    type = 'type_example' # str | Narrow down by element type. (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get hidden items
        api_instance.get_hidden_items(section, type=type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_hidden_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **str**|  | 
 **type** | **str**| Narrow down by element type. | [optional] 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items_on_a_personal_list**
> get_items_on_a_personal_list(id, list_id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get items on a personal list

#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Get all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.  #### Notes  Each list item contains a `notes` field with text entered by the user.  #### Sorting Headers  All list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    type = 'movies' # str | Filter for a specific item type
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get items on a personal list
        api_instance.get_items_on_a_personal_list(id, list_id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_items_on_a_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
 **type** | **str**| Filter for a specific item type | 
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
**200** | OK |  * X-Private-User -  <br>  * X-Sort-By -  <br>  * X-Sort-How -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_likes**
> get_likes(id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get likes

#### &#128274; OAuth Optional &#128196; Pagination  Get items a user likes. This will return an array of standard media objects. You can optionally limit the `type` of results to return.  #### Comment Media Objects  If you add `?extended=comments` to the URL, it will return media objects for each comment like.  **Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'type_example' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get likes
        api_instance.get_likes(id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_likes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**|  | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /users/sean/likes/lists &#x60;&#x60;&#x60; |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pending_following_requests**
> get_pending_following_requests(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get pending following requests

#### &#128274; OAuth Required &#10024; Extended Info  List a user's pending following requests that they're waiting for the other user's to approve.

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
    api_instance = openapi_client.UsersApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get pending following requests
        api_instance.get_pending_following_requests(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_pending_following_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_personal_list**
> get_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get personal list

#### &#128275; OAuth Optional &#128513; Emojis  Returns a single personal list. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items this list contains.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get personal list
        api_instance.get_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
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
**200** | OK |  * X-Sort-By -  <br>  * X-Sort-How -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_saved_filters**
> get_saved_filters(section, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get saved filters

#### &#128274; OAuth Required &#128196; Pagination 🔥 VIP Only  Get all saved filters a user has created. The `path` and `query` can be used to construct an API path to retrieve the saved data. Think of this like a dynamically updated list.

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
    api_instance = openapi_client.UsersApi(api_client)
    section = 'movies' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get saved filters
        api_instance.get_saved_filters(section, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_saved_filters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **str**|  | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_stats**
> get_stats(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get stats

#### &#128275; OAuth Optional  Returns stats about the movies, shows, and episodes a user has watched, collected, and rated.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get stats
        api_instance.get_stats(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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

# **get_user_profile**
> get_user_profile(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get user profile

#### &#128275; OAuth Optional &#10024; Extended Info  Get a user's profile information. If the user is private, info will only be returned if you send OAuth and are either that user or an approved follower. Adding `?extended=vip` will return some additional VIP related fields so you can display the user's Trakt VIP status and year count.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get user profile
        api_instance.get_user_profile(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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
**200** | &#x60;&#x60;&#x60; /users/sean?extended&#x3D;vip &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_watching**
> get_watching(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watching

#### &#128275; OAuth Optional &#10024; Extended Info  Returns a movie or episode if the user is currently watching something.  If they are not, it returns no data and a `204` HTTP status code.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watching
        api_instance.get_watching(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->get_watching: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
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
**200** | Currently watching a &#x60;movie&#x60;. |  -  |
**204** | Not watching anything. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **like_a_list**
> like_a_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Like a list

#### &#128274; OAuth Required  Votes help determine popular lists. Only one like is allowed per list per user.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Like a list
        api_instance.like_a_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->like_a_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
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

# **remove_hidden_items**
> remove_hidden_items(section, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_hidden_items_request=add_hidden_items_request)

Remove hidden items

#### &#128274; OAuth Required  Unhide items for a specific section. Here's what type of items can unhidden for each section.  #### Unhideable Media Objects  | Section | Objects | |---|---|---| | `calendar` | `movie`, `show` | | `progress_watched` | `show`, `season` | | `progress_collected` | `show`, `season` | | `recommendations` | `movie`, `show` | | `comments` | `user` |  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `users` | array | Array of `user` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.add_hidden_items_request import AddHiddenItemsRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    section = 'calendar' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    add_hidden_items_request = openapi_client.AddHiddenItemsRequest() # AddHiddenItemsRequest |  (optional)

    try:
        # Remove hidden items
        api_instance.remove_hidden_items(section, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, add_hidden_items_request=add_hidden_items_request)
    except Exception as e:
        print("Exception when calling UsersApi->remove_hidden_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **section** | **str**|  | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **add_hidden_items_request** | [**AddHiddenItemsRequest**](AddHiddenItemsRequest.md)|  | [optional] 

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

# **remove_items_from_personal_list**
> remove_items_from_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_personal_list_request=remove_items_from_personal_list_request)

Remove items from personal list

#### &#128274; OAuth Required  Remove one or more items from a personal list.  #### JSON POST Data  | Key | Type | Value | |---|---|---| | `movies` | array | Array of `movie` objects. (see examples &#8594;) | | `shows` | array | Array of `show` objects. | | `seasons` | array | Array of `season` objects. | | `episodes` | array | Array of `episode` objects. | | `people` | array | Array of `person` objects. |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.remove_items_from_personal_list_request import RemoveItemsFromPersonalListRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    remove_items_from_personal_list_request = openapi_client.RemoveItemsFromPersonalListRequest() # RemoveItemsFromPersonalListRequest |  (optional)

    try:
        # Remove items from personal list
        api_instance.remove_items_from_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, remove_items_from_personal_list_request=remove_items_from_personal_list_request)
    except Exception as e:
        print("Exception when calling UsersApi->remove_items_from_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **remove_items_from_personal_list_request** | [**RemoveItemsFromPersonalListRequest**](RemoveItemsFromPersonalListRequest.md)|  | [optional] 

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

# **remove_like_on_a_list**
> remove_like_on_a_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Remove like on a list

#### &#128274; OAuth Required  Remove a like on a list.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | Automatically added
    list_id = 'list_id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Remove like on a list
        api_instance.remove_like_on_a_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->remove_like_on_a_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **list_id** | **str**| Automatically added | 
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

# **reorder_a_users_lists**
> reorder_a_users_lists(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_a_user_s_lists_request=reorder_a_user_s_lists_request)

Reorder a user's lists

#### &#128274; OAuth Required  Reorder all lists by sending the updated `rank` of list ids. Use the [**/users/:id/lists**](#reference/users/lists) method to get all list ids.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.reorder_a_user_s_lists_request import ReorderAUserSListsRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    reorder_a_user_s_lists_request = openapi_client.ReorderAUserSListsRequest() # ReorderAUserSListsRequest |  (optional)

    try:
        # Reorder a user's lists
        api_instance.reorder_a_users_lists(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_a_user_s_lists_request=reorder_a_user_s_lists_request)
    except Exception as e:
        print("Exception when calling UsersApi->reorder_a_users_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **reorder_a_user_s_lists_request** | [**ReorderAUserSListsRequest**](ReorderAUserSListsRequest.md)|  | [optional] 

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

# **reorder_items_on_a_list**
> reorder_items_on_a_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_personally_recommended_items_request=reorder_personally_recommended_items_request)

Reorder items on a list

#### &#128274; OAuth Required  Reorder all items on a list by sending the updated `rank` of list item ids. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get all list item ids.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.reorder_personally_recommended_items_request import ReorderPersonallyRecommendedItemsRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    reorder_personally_recommended_items_request = openapi_client.ReorderPersonallyRecommendedItemsRequest() # ReorderPersonallyRecommendedItemsRequest |  (optional)

    try:
        # Reorder items on a list
        api_instance.reorder_items_on_a_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, reorder_personally_recommended_items_request=reorder_personally_recommended_items_request)
    except Exception as e:
        print("Exception when calling UsersApi->reorder_items_on_a_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **reorder_personally_recommended_items_request** | [**ReorderPersonallyRecommendedItemsRequest**](ReorderPersonallyRecommendedItemsRequest.md)|  | [optional] 

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

# **retrieve_settings**
> retrieve_settings(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Retrieve settings

#### &#128274; OAuth Required  Get the user's settings so you can align your app's experience with what they're used to on the trakt website. A globally unique `uuid` is also returned, which can be used to identify the user locally in your app if needed. However, the `uuid` can't be used to retrieve data from the Trakt API.

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
    api_instance = openapi_client.UsersApi(api_client)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Retrieve settings
        api_instance.retrieve_settings(trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->retrieve_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unfollow_this_user**
> unfollow_this_user(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Unfollow this user

#### &#128274; OAuth Required  Unfollow someone you already follow.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Unfollow this user
        api_instance.unfollow_this_user(id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->unfollow_this_user: %s\n" % e)
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

# **update_personal_list**
> update_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, update_personal_list_request=update_personal_list_request)

Update personal list

#### &#128274; OAuth Required  Update a personal list by sending 1 or more parameters. If you update the list name, the original slug will still be retained so existing references to this list won't break.  #### Privacy  Lists will be `private` by default. Here is what each value means.  | Value | Privacy impact... | |---|---| | `private` | Only you can see the list. | | `link` | Anyone with the `share_link` can see the list. | | `friends` | Only your friends can see the list. | | `public` | Anyone can see the list. |  #### JSON POST Data  | Key | Type | Value | |---|---|---|---| | `name` | string | Name of the list. | | `description` | string | Description for this list. | | `privacy` | string | `private`, `link`, `friends`, `public` | | `display_numbers` | boolean | Should each item be numbered? | | `allow_comments` | boolean | Are comments allowed? | | `sort_by` | string | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` | | `sort_how` | string | `asc`, `desc` |

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.update_personal_list_request import UpdatePersonalListRequest
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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | Automatically added
    list_id = 'list_id_example' # str | Automatically added
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)
    update_personal_list_request = openapi_client.UpdatePersonalListRequest() # UpdatePersonalListRequest |  (optional)

    try:
        # Update personal list
        api_instance.update_personal_list(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key, update_personal_list_request=update_personal_list_request)
    except Exception as e:
        print("Exception when calling UsersApi->update_personal_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Automatically added | 
 **list_id** | **str**| Automatically added | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 
 **update_personal_list_request** | [**UpdatePersonalListRequest**](UpdatePersonalListRequest.md)|  | [optional] 

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

# **users_id_collection_type_get**
> users_id_collection_type_get(id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get collection

#### &#128275; OAuth Optional &#10024; Extended Info  Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.  Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.  Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.  If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'movies' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get collection
        api_instance.users_id_collection_type_get(id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_collection_type_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**|  | 
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
**200** | &#x60;&#x60;&#x60; /users/sean/collection/shows?extended&#x3D;metadata &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_history_type_item_id_get**
> users_id_history_type_item_id_get(id, type, item_id, start_at=start_at, end_at=end_at, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watched history

#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info  Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.  Specify a `type` and trakt `item_id` to limit the history for just that item. If the `item_id` is valid, but there is no history, an empty array will be returned.  | Example URL | Returns watches for... | |---|---| | `/history/movies/12601` | TRON: Legacy | | `/history/shows/1388` | All episodes of Breaking Bad | | `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 | | `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'movies' # str | 
    item_id = 123 # int | Trakt ID for a specific item.
    start_at = '2016-06-01T00:00:00.000Z' # str | Starting date. (optional)
    end_at = '2016-07-01T23:59:59.000Z' # str | Ending date. (optional)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watched history
        api_instance.users_id_history_type_item_id_get(id, type, item_id, start_at=start_at, end_at=end_at, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_history_type_item_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**|  | 
 **item_id** | **int**| Trakt ID for a specific item. | 
 **start_at** | **str**| Starting date. | [optional] 
 **end_at** | **str**| Ending date. | [optional] 
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
**200** | &#x60;&#x60;&#x60; /users/sean/history/episodes &#x60;&#x60;&#x60; |  * X-Pagination-Item-Count -  <br>  * X-Pagination-Limit -  <br>  * X-Pagination-Page -  <br>  * X-Pagination-Page-Count -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_lists_list_id_comments_sort_get**
> users_id_lists_list_id_comments_sort_get(id, list_id, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all list comments

#### &#128275; OAuth Optional &#128196; Pagination &#128513; Emojis  Returns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    sort = 'newest' # str | how to sort
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all list comments
        api_instance.users_id_lists_list_id_comments_sort_get(id, list_id, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_lists_list_id_comments_sort_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
 **sort** | **str**| how to sort | 
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

# **users_id_lists_list_id_likes_get**
> users_id_lists_list_id_likes_get(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get all users who liked a list

#### &#128275; OAuth Optional &#128196; Pagination  Returns all users who liked a list.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    list_id = 'star-wars-in-machete-order' # str | Trakt ID or Trakt slug
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get all users who liked a list
        api_instance.users_id_lists_list_id_likes_get(id, list_id, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_lists_list_id_likes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **list_id** | **str**| Trakt ID or Trakt slug | 
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

# **users_id_ratings_type_rating_get**
> users_id_ratings_type_rating_get(id, type, rating, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get ratings

#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info  Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'movies' # str | 
    rating = 9 # int | Filter for a specific rating.
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get ratings
        api_instance.users_id_ratings_type_rating_get(id, type, rating, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_ratings_type_rating_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**|  | 
 **rating** | **int**| Filter for a specific rating. | 
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
**200** | &#x60;&#x60;&#x60; /users/sean/ratings/episodes &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_recommendations_type_sort_get**
> users_id_recommendations_type_sort_get(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get personal recommendations

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Returns the top 50 items a user personally recommendeds to others. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.  #### Notes  Each recommendation contains a `notes` field explaining why the user recommended the item.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'movies' # str | Filter for a specific item type
    sort = 'rank' # str | How to sort (only if type is also sent)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get personal recommendations
        api_instance.users_id_recommendations_type_sort_get(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_recommendations_type_sort_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**| Filter for a specific item type | 
 **sort** | **str**| How to sort (only if type is also sent) | 
 **trakt_api_version** | **str**| e.g. 2 | [optional] 
 **trakt_api_key** | **str**| e.g. [client_id] | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | &#x60;&#x60;&#x60; /users/justin/recommendations/shows &#x60;&#x60;&#x60; |  * X-Sort-By -  <br>  * X-Sort-How -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_watched_type_get**
> users_id_watched_type_get(id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watched

#### &#128275; OAuth Optional &#10024; Extended Info  Returns all movies or shows a user has watched sorted by most plays.  If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.  Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.  Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'movies' # str | 
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watched
        api_instance.users_id_watched_type_get(id, type, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_watched_type_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**|  | 
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
**200** | &#x60;&#x60;&#x60; /users/sean/watched/shows?extended&#x3D;noseasons &#x60;&#x60;&#x60; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_watchlist_type_sort_get**
> users_id_watchlist_type_sort_get(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)

Get watchlist

#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis  Returns all items in a user's watchlist filtered by type.  #### Notes  Each watchlist item contains a `notes` field with text entered by the user.  #### Sorting Headers  By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.  We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.  #### Auto Removal  When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.  _**The watchlist should not be used as a list of what the user is actively watching.**_  Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

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
    api_instance = openapi_client.UsersApi(api_client)
    id = 'sean' # str | User slug
    type = 'movies' # str | Filter for a specific item type
    sort = 'rank' # str | How to sort (only if type is also sent)
    trakt_api_version = '2' # str | e.g. 2 (optional)
    trakt_api_key = '[client_id]' # str | e.g. [client_id] (optional)

    try:
        # Get watchlist
        api_instance.users_id_watchlist_type_sort_get(id, type, sort, trakt_api_version=trakt_api_version, trakt_api_key=trakt_api_key)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_watchlist_type_sort_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User slug | 
 **type** | **str**| Filter for a specific item type | 
 **sort** | **str**| How to sort (only if type is also sent) | 
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
**200** | &#x60;&#x60;&#x60; /users/sean/watchlist/episodes &#x60;&#x60;&#x60; |  * X-Private-User -  <br>  * X-Sort-By -  <br>  * X-Sort-How -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

