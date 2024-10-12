# openapi_client.UsersApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_my_user**](UsersApi.md#find_my_user) | **GET** /2/users/me | User lookup me
[**find_user_by_id**](UsersApi.md#find_user_by_id) | **GET** /2/users/{id} | User lookup by ID
[**find_user_by_username**](UsersApi.md#find_user_by_username) | **GET** /2/users/by/username/{username} | User lookup by username
[**find_users_by_id**](UsersApi.md#find_users_by_id) | **GET** /2/users | User lookup by IDs
[**find_users_by_username**](UsersApi.md#find_users_by_username) | **GET** /2/users/by | User lookup by usernames
[**list_get_followers**](UsersApi.md#list_get_followers) | **GET** /2/lists/{id}/followers | Returns User objects that follow a List by the provided List ID
[**list_get_members**](UsersApi.md#list_get_members) | **GET** /2/lists/{id}/members | Returns User objects that are members of a List by the provided List ID.
[**tweets_id_liking_users**](UsersApi.md#tweets_id_liking_users) | **GET** /2/tweets/{id}/liking_users | Returns User objects that have liked the provided Tweet ID
[**tweets_id_retweeting_users**](UsersApi.md#tweets_id_retweeting_users) | **GET** /2/tweets/{id}/retweeted_by | Returns User objects that have retweeted the provided Tweet ID
[**users_id_block**](UsersApi.md#users_id_block) | **POST** /2/users/{id}/blocking | Block User by User ID
[**users_id_blocking**](UsersApi.md#users_id_blocking) | **GET** /2/users/{id}/blocking | Returns User objects that are blocked by provided User ID
[**users_id_follow**](UsersApi.md#users_id_follow) | **POST** /2/users/{id}/following | Follow User
[**users_id_followers**](UsersApi.md#users_id_followers) | **GET** /2/users/{id}/followers | Followers by User ID
[**users_id_following**](UsersApi.md#users_id_following) | **GET** /2/users/{id}/following | Following by User ID
[**users_id_mute**](UsersApi.md#users_id_mute) | **POST** /2/users/{id}/muting | Mute User by User ID.
[**users_id_muting**](UsersApi.md#users_id_muting) | **GET** /2/users/{id}/muting | Returns User objects that are muted by the provided User ID
[**users_id_unblock**](UsersApi.md#users_id_unblock) | **DELETE** /2/users/{source_user_id}/blocking/{target_user_id} | Unblock User by User ID
[**users_id_unfollow**](UsersApi.md#users_id_unfollow) | **DELETE** /2/users/{source_user_id}/following/{target_user_id} | Unfollow User
[**users_id_unmute**](UsersApi.md#users_id_unmute) | **DELETE** /2/users/{source_user_id}/muting/{target_user_id} | Unmute User by User ID


# **find_my_user**
> Get2UsersMeResponse find_my_user(user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

User lookup me

This endpoint returns information about the requesting User.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_users_me_response import Get2UsersMeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # User lookup me
        api_response = api_instance.find_my_user(user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->find_my_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->find_my_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersMeResponse**](Get2UsersMeResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_user_by_id**
> Get2UsersIdResponse find_user_by_id(id, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

User lookup by ID

This endpoint returns information about a User. Specify User by ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_response import Get2UsersIdResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # User lookup by ID
        api_response = api_instance.find_user_by_id(id, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->find_user_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->find_user_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersIdResponse**](Get2UsersIdResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_user_by_username**
> Get2UsersByUsernameUsernameResponse find_user_by_username(username, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

User lookup by username

This endpoint returns information about a User. Specify User by username.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_by_username_username_response import Get2UsersByUsernameUsernameResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    username = 'TwitterDev' # str | A username.
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # User lookup by username
        api_response = api_instance.find_user_by_username(username, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->find_user_by_username:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->find_user_by_username: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| A username. | 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersByUsernameUsernameResponse**](Get2UsersByUsernameUsernameResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_users_by_id**
> Get2UsersResponse find_users_by_id(ids, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

User lookup by IDs

This endpoint returns information about Users. Specify Users by their ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_response import Get2UsersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    ids = ['2244994945,6253282,12'] # List[str] | A list of User IDs, comma-separated. You can specify up to 100 IDs.
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # User lookup by IDs
        api_response = api_instance.find_users_by_id(ids, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->find_users_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->find_users_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[str]**](str.md)| A list of User IDs, comma-separated. You can specify up to 100 IDs. | 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersResponse**](Get2UsersResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_users_by_username**
> Get2UsersByResponse find_users_by_username(usernames, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

User lookup by usernames

This endpoint returns information about Users. Specify Users by their username.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_by_response import Get2UsersByResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    usernames = ['TwitterDev,TwitterAPI'] # List[str] | A list of usernames, comma-separated.
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # User lookup by usernames
        api_response = api_instance.find_users_by_username(usernames, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->find_users_by_username:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->find_users_by_username: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usernames** | [**List[str]**](str.md)| A list of usernames, comma-separated. | 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersByResponse**](Get2UsersByResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_get_followers**
> Get2ListsIdFollowersResponse list_get_followers(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Returns User objects that follow a List by the provided List ID

Returns a list of Users that follow a List by the provided List ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_lists_id_followers_response import Get2ListsIdFollowersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | The ID of the List.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Returns User objects that follow a List by the provided List ID
        api_response = api_instance.list_get_followers(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->list_get_followers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_get_followers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2ListsIdFollowersResponse**](Get2ListsIdFollowersResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_get_members**
> Get2ListsIdMembersResponse list_get_members(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Returns User objects that are members of a List by the provided List ID.

Returns a list of Users that are members of a List by the provided List ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_lists_id_members_response import Get2ListsIdMembersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | The ID of the List.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Returns User objects that are members of a List by the provided List ID.
        api_response = api_instance.list_get_members(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->list_get_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->list_get_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the List. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2ListsIdMembersResponse**](Get2ListsIdMembersResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweets_id_liking_users**
> Get2TweetsIdLikingUsersResponse tweets_id_liking_users(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Returns User objects that have liked the provided Tweet ID

Returns a list of Users that have liked the provided Tweet ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_id_liking_users_response import Get2TweetsIdLikingUsersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | A single Tweet ID.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Returns User objects that have liked the provided Tweet ID
        api_response = api_instance.tweets_id_liking_users(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->tweets_id_liking_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->tweets_id_liking_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A single Tweet ID. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2TweetsIdLikingUsersResponse**](Get2TweetsIdLikingUsersResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tweets_id_retweeting_users**
> Get2TweetsIdRetweetedByResponse tweets_id_retweeting_users(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Returns User objects that have retweeted the provided Tweet ID

Returns a list of Users that have retweeted the provided Tweet ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_tweets_id_retweeted_by_response import Get2TweetsIdRetweetedByResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | A single Tweet ID.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Returns User objects that have retweeted the provided Tweet ID
        api_response = api_instance.tweets_id_retweeting_users(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->tweets_id_retweeting_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->tweets_id_retweeting_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A single Tweet ID. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2TweetsIdRetweetedByResponse**](Get2TweetsIdRetweetedByResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_block**
> BlockUserMutationResponse users_id_block(id, block_user_request)

Block User by User ID

Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.block_user_mutation_response import BlockUserMutationResponse
from openapi_client.models.block_user_request import BlockUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to block the target User.
    block_user_request = openapi_client.BlockUserRequest() # BlockUserRequest | 

    try:
        # Block User by User ID
        api_response = api_instance.users_id_block(id, block_user_request)
        print("The response of UsersApi->users_id_block:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_block: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to block the target User. | 
 **block_user_request** | [**BlockUserRequest**](BlockUserRequest.md)|  | 

### Return type

[**BlockUserMutationResponse**](BlockUserMutationResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_blocking**
> Get2UsersIdBlockingResponse users_id_blocking(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Returns User objects that are blocked by provided User ID

Returns a list of Users that are blocked by the provided User ID

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_blocking_response import Get2UsersIdBlockingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    id = 'id_example' # str | The ID of the authenticated source User for whom to return results.
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Returns User objects that are blocked by provided User ID
        api_response = api_instance.users_id_blocking(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->users_id_blocking:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_blocking: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User for whom to return results. | 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersIdBlockingResponse**](Get2UsersIdBlockingResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_follow**
> UsersFollowingCreateResponse users_id_follow(id, users_following_create_request=users_following_create_request)

Follow User

Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.users_following_create_request import UsersFollowingCreateRequest
from openapi_client.models.users_following_create_response import UsersFollowingCreateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to follow the target User.
    users_following_create_request = openapi_client.UsersFollowingCreateRequest() # UsersFollowingCreateRequest |  (optional)

    try:
        # Follow User
        api_response = api_instance.users_id_follow(id, users_following_create_request=users_following_create_request)
        print("The response of UsersApi->users_id_follow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_follow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to follow the target User. | 
 **users_following_create_request** | [**UsersFollowingCreateRequest**](UsersFollowingCreateRequest.md)|  | [optional] 

### Return type

[**UsersFollowingCreateResponse**](UsersFollowingCreateResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_followers**
> Get2UsersIdFollowersResponse users_id_followers(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Followers by User ID

Returns a list of Users who are followers of the specified User ID.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_followers_response import Get2UsersIdFollowersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Followers by User ID
        api_response = api_instance.users_id_followers(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->users_id_followers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_followers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersIdFollowersResponse**](Get2UsersIdFollowersResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_following**
> Get2UsersIdFollowingResponse users_id_following(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Following by User ID

Returns a list of Users that are being followed by the provided User ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_following_response import Get2UsersIdFollowingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure Bearer authorization: BearerToken
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = '2244994945' # str | The ID of the User to lookup.
    max_results = 56 # int | The maximum number of results. (optional)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Following by User ID
        api_response = api_instance.users_id_following(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->users_id_following:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_following: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the User to lookup. | 
 **max_results** | **int**| The maximum number of results. | [optional] 
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersIdFollowingResponse**](Get2UsersIdFollowingResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_mute**
> MuteUserMutationResponse users_id_mute(id, mute_user_request=mute_user_request)

Mute User by User ID.

Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.mute_user_mutation_response import MuteUserMutationResponse
from openapi_client.models.mute_user_request import MuteUserRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    id = 'id_example' # str | The ID of the authenticated source User that is requesting to mute the target User.
    mute_user_request = openapi_client.MuteUserRequest() # MuteUserRequest |  (optional)

    try:
        # Mute User by User ID.
        api_response = api_instance.users_id_mute(id, mute_user_request=mute_user_request)
        print("The response of UsersApi->users_id_mute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_mute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User that is requesting to mute the target User. | 
 **mute_user_request** | [**MuteUserRequest**](MuteUserRequest.md)|  | [optional] 

### Return type

[**MuteUserMutationResponse**](MuteUserMutationResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_muting**
> Get2UsersIdMutingResponse users_id_muting(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Returns User objects that are muted by the provided User ID

Returns a list of Users that are muted by the provided User ID

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_users_id_muting_response import Get2UsersIdMutingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    id = 'id_example' # str | The ID of the authenticated source User for whom to return results.
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    pagination_token = 'pagination_token_example' # str | This parameter is used to get the next 'page' of results. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Returns User objects that are muted by the provided User ID
        api_response = api_instance.users_id_muting(id, max_results=max_results, pagination_token=pagination_token, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of UsersApi->users_id_muting:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_muting: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authenticated source User for whom to return results. | 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **pagination_token** | **str**| This parameter is used to get the next &#39;page&#39; of results. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2UsersIdMutingResponse**](Get2UsersIdMutingResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_unblock**
> BlockUserMutationResponse users_id_unblock(source_user_id, target_user_id)

Unblock User by User ID

Causes the source User to unblock the target User. The source User must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.block_user_mutation_response import BlockUserMutationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    source_user_id = 'source_user_id_example' # str | The ID of the authenticated source User that is requesting to unblock the target User.
    target_user_id = 'target_user_id_example' # str | The ID of the User that the source User is requesting to unblock.

    try:
        # Unblock User by User ID
        api_response = api_instance.users_id_unblock(source_user_id, target_user_id)
        print("The response of UsersApi->users_id_unblock:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_unblock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_user_id** | **str**| The ID of the authenticated source User that is requesting to unblock the target User. | 
 **target_user_id** | **str**| The ID of the User that the source User is requesting to unblock. | 

### Return type

[**BlockUserMutationResponse**](BlockUserMutationResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_unfollow**
> UsersFollowingDeleteResponse users_id_unfollow(source_user_id, target_user_id)

Unfollow User

Causes the source User to unfollow the target User. The source User must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.users_following_delete_response import UsersFollowingDeleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    source_user_id = 'source_user_id_example' # str | The ID of the authenticated source User that is requesting to unfollow the target User.
    target_user_id = 'target_user_id_example' # str | The ID of the User that the source User is requesting to unfollow.

    try:
        # Unfollow User
        api_response = api_instance.users_id_unfollow(source_user_id, target_user_id)
        print("The response of UsersApi->users_id_unfollow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_unfollow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_user_id** | **str**| The ID of the authenticated source User that is requesting to unfollow the target User. | 
 **target_user_id** | **str**| The ID of the User that the source User is requesting to unfollow. | 

### Return type

[**UsersFollowingDeleteResponse**](UsersFollowingDeleteResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_id_unmute**
> MuteUserMutationResponse users_id_unmute(source_user_id, target_user_id)

Unmute User by User ID

Causes the source User to unmute the target User. The source User must match the User context authorizing the request

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.mute_user_mutation_response import MuteUserMutationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twitter.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twitter.com"
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
    source_user_id = 'source_user_id_example' # str | The ID of the authenticated source User that is requesting to unmute the target User.
    target_user_id = 'target_user_id_example' # str | The ID of the User that the source User is requesting to unmute.

    try:
        # Unmute User by User ID
        api_response = api_instance.users_id_unmute(source_user_id, target_user_id)
        print("The response of UsersApi->users_id_unmute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_id_unmute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_user_id** | **str**| The ID of the authenticated source User that is requesting to unmute the target User. | 
 **target_user_id** | **str**| The ID of the User that the source User is requesting to unmute. | 

### Return type

[**MuteUserMutationResponse**](MuteUserMutationResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [UserToken](../README.md#UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

