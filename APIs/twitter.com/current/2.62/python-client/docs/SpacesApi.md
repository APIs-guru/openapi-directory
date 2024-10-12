# openapi_client.SpacesApi

All URIs are relative to *https://api.twitter.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_space_by_id**](SpacesApi.md#find_space_by_id) | **GET** /2/spaces/{id} | Space lookup by Space ID
[**find_spaces_by_creator_ids**](SpacesApi.md#find_spaces_by_creator_ids) | **GET** /2/spaces/by/creator_ids | Space lookup by their creators
[**find_spaces_by_ids**](SpacesApi.md#find_spaces_by_ids) | **GET** /2/spaces | Space lookup up Space IDs
[**search_spaces**](SpacesApi.md#search_spaces) | **GET** /2/spaces/search | Search for Spaces
[**space_buyers**](SpacesApi.md#space_buyers) | **GET** /2/spaces/{id}/buyers | Retrieve the list of Users who purchased a ticket to the given space
[**space_tweets**](SpacesApi.md#space_tweets) | **GET** /2/spaces/{id}/tweets | Retrieve Tweets from a Space.


# **find_space_by_id**
> Get2SpacesIdResponse find_space_by_id(id, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)

Space lookup by Space ID

Returns a variety of information about the Space specified by the requested ID

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_id_response import Get2SpacesIdResponse
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = '1YqKDqWqdPLsV' # str | The ID of the Space to be retrieved.
    space_fields = ['[\"created_at\",\"creator_id\",\"ended_at\",\"host_ids\",\"id\",\"invited_user_ids\",\"is_ticketed\",\"lang\",\"participant_count\",\"scheduled_start\",\"speaker_ids\",\"started_at\",\"state\",\"subscriber_count\",\"title\",\"topic_ids\",\"updated_at\"]'] # List[str] | A comma separated list of Space fields to display. (optional)
    expansions = ['[\"creator_id\",\"host_ids\",\"invited_user_ids\",\"speaker_ids\",\"topic_ids\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    topic_fields = ['[\"description\",\"id\",\"name\"]'] # List[str] | A comma separated list of Topic fields to display. (optional)

    try:
        # Space lookup by Space ID
        api_response = api_instance.find_space_by_id(id, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)
        print("The response of SpacesApi->find_space_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->find_space_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Space to be retrieved. | 
 **space_fields** | [**List[str]**](str.md)| A comma separated list of Space fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **topic_fields** | [**List[str]**](str.md)| A comma separated list of Topic fields to display. | [optional] 

### Return type

[**Get2SpacesIdResponse**](Get2SpacesIdResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_spaces_by_creator_ids**
> Get2SpacesByCreatorIdsResponse find_spaces_by_creator_ids(user_ids, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)

Space lookup by their creators

Returns a variety of information about the Spaces created by the provided User IDs

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_by_creator_ids_response import Get2SpacesByCreatorIdsResponse
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
    api_instance = openapi_client.SpacesApi(api_client)
    user_ids = ['user_ids_example'] # List[str] | The IDs of Users to search through.
    space_fields = ['[\"created_at\",\"creator_id\",\"ended_at\",\"host_ids\",\"id\",\"invited_user_ids\",\"is_ticketed\",\"lang\",\"participant_count\",\"scheduled_start\",\"speaker_ids\",\"started_at\",\"state\",\"subscriber_count\",\"title\",\"topic_ids\",\"updated_at\"]'] # List[str] | A comma separated list of Space fields to display. (optional)
    expansions = ['[\"creator_id\",\"host_ids\",\"invited_user_ids\",\"speaker_ids\",\"topic_ids\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    topic_fields = ['[\"description\",\"id\",\"name\"]'] # List[str] | A comma separated list of Topic fields to display. (optional)

    try:
        # Space lookup by their creators
        api_response = api_instance.find_spaces_by_creator_ids(user_ids, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)
        print("The response of SpacesApi->find_spaces_by_creator_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->find_spaces_by_creator_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_ids** | [**List[str]**](str.md)| The IDs of Users to search through. | 
 **space_fields** | [**List[str]**](str.md)| A comma separated list of Space fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **topic_fields** | [**List[str]**](str.md)| A comma separated list of Topic fields to display. | [optional] 

### Return type

[**Get2SpacesByCreatorIdsResponse**](Get2SpacesByCreatorIdsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_spaces_by_ids**
> Get2SpacesResponse find_spaces_by_ids(ids, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)

Space lookup up Space IDs

Returns a variety of information about the Spaces specified by the requested IDs

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_response import Get2SpacesResponse
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
    api_instance = openapi_client.SpacesApi(api_client)
    ids = ['ids_example'] # List[str] | The list of Space IDs to return.
    space_fields = ['[\"created_at\",\"creator_id\",\"ended_at\",\"host_ids\",\"id\",\"invited_user_ids\",\"is_ticketed\",\"lang\",\"participant_count\",\"scheduled_start\",\"speaker_ids\",\"started_at\",\"state\",\"subscriber_count\",\"title\",\"topic_ids\",\"updated_at\"]'] # List[str] | A comma separated list of Space fields to display. (optional)
    expansions = ['[\"creator_id\",\"host_ids\",\"invited_user_ids\",\"speaker_ids\",\"topic_ids\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    topic_fields = ['[\"description\",\"id\",\"name\"]'] # List[str] | A comma separated list of Topic fields to display. (optional)

    try:
        # Space lookup up Space IDs
        api_response = api_instance.find_spaces_by_ids(ids, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)
        print("The response of SpacesApi->find_spaces_by_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->find_spaces_by_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List[str]**](str.md)| The list of Space IDs to return. | 
 **space_fields** | [**List[str]**](str.md)| A comma separated list of Space fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **topic_fields** | [**List[str]**](str.md)| A comma separated list of Topic fields to display. | [optional] 

### Return type

[**Get2SpacesResponse**](Get2SpacesResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_spaces**
> Get2SpacesSearchResponse search_spaces(query, state=state, max_results=max_results, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)

Search for Spaces

Returns Spaces that match the provided query.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_search_response import Get2SpacesSearchResponse
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
    api_instance = openapi_client.SpacesApi(api_client)
    query = 'crypto' # str | The search query.
    state = all # str | The state of Spaces to search for. (optional) (default to all)
    max_results = 100 # int | The number of results to return. (optional) (default to 100)
    space_fields = ['[\"created_at\",\"creator_id\",\"ended_at\",\"host_ids\",\"id\",\"invited_user_ids\",\"is_ticketed\",\"lang\",\"participant_count\",\"scheduled_start\",\"speaker_ids\",\"started_at\",\"state\",\"subscriber_count\",\"title\",\"topic_ids\",\"updated_at\"]'] # List[str] | A comma separated list of Space fields to display. (optional)
    expansions = ['[\"creator_id\",\"host_ids\",\"invited_user_ids\",\"speaker_ids\",\"topic_ids\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    topic_fields = ['[\"description\",\"id\",\"name\"]'] # List[str] | A comma separated list of Topic fields to display. (optional)

    try:
        # Search for Spaces
        api_response = api_instance.search_spaces(query, state=state, max_results=max_results, space_fields=space_fields, expansions=expansions, user_fields=user_fields, topic_fields=topic_fields)
        print("The response of SpacesApi->search_spaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->search_spaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| The search query. | 
 **state** | **str**| The state of Spaces to search for. | [optional] [default to all]
 **max_results** | **int**| The number of results to return. | [optional] [default to 100]
 **space_fields** | [**List[str]**](str.md)| A comma separated list of Space fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **topic_fields** | [**List[str]**](str.md)| A comma separated list of Topic fields to display. | [optional] 

### Return type

[**Get2SpacesSearchResponse**](Get2SpacesSearchResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **space_buyers**
> Get2SpacesIdBuyersResponse space_buyers(id, pagination_token=pagination_token, max_results=max_results, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)

Retrieve the list of Users who purchased a ticket to the given space

Retrieves the list of Users who purchased a ticket to the given space

### Example

* OAuth Authentication (OAuth2UserToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_id_buyers_response import Get2SpacesIdBuyersResponse
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = '1YqKDqWqdPLsV' # str | The ID of the Space to be retrieved.
    pagination_token = 'pagination_token_example' # str | This parameter is used to get a specified 'page' of results. (optional)
    max_results = 100 # int | The maximum number of results. (optional) (default to 100)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    expansions = ['[\"pinned_tweet_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)

    try:
        # Retrieve the list of Users who purchased a ticket to the given space
        api_response = api_instance.space_buyers(id, pagination_token=pagination_token, max_results=max_results, user_fields=user_fields, expansions=expansions, tweet_fields=tweet_fields)
        print("The response of SpacesApi->space_buyers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->space_buyers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Space to be retrieved. | 
 **pagination_token** | **str**| This parameter is used to get a specified &#39;page&#39; of results. | [optional] 
 **max_results** | **int**| The maximum number of results. | [optional] [default to 100]
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 

### Return type

[**Get2SpacesIdBuyersResponse**](Get2SpacesIdBuyersResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **space_tweets**
> Get2SpacesIdTweetsResponse space_tweets(id, max_results=max_results, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)

Retrieve Tweets from a Space.

Retrieves Tweets shared in the specified Space.

### Example

* OAuth Authentication (OAuth2UserToken):
* Bearer Authentication (BearerToken):

```python
import openapi_client
from openapi_client.models.get2_spaces_id_tweets_response import Get2SpacesIdTweetsResponse
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
    api_instance = openapi_client.SpacesApi(api_client)
    id = '1YqKDqWqdPLsV' # str | The ID of the Space to be retrieved.
    max_results = 100 # int | The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100. (optional) (default to 100)
    tweet_fields = ['[\"attachments\",\"author_id\",\"context_annotations\",\"conversation_id\",\"created_at\",\"edit_controls\",\"edit_history_tweet_ids\",\"entities\",\"geo\",\"id\",\"in_reply_to_user_id\",\"lang\",\"non_public_metrics\",\"organic_metrics\",\"possibly_sensitive\",\"promoted_metrics\",\"public_metrics\",\"referenced_tweets\",\"reply_settings\",\"source\",\"text\",\"withheld\"]'] # List[str] | A comma separated list of Tweet fields to display. (optional)
    expansions = ['[\"attachments.media_keys\",\"attachments.poll_ids\",\"author_id\",\"edit_history_tweet_ids\",\"entities.mentions.username\",\"geo.place_id\",\"in_reply_to_user_id\",\"referenced_tweets.id\",\"referenced_tweets.id.author_id\"]'] # List[str] | A comma separated list of fields to expand. (optional)
    media_fields = ['[\"alt_text\",\"duration_ms\",\"height\",\"media_key\",\"non_public_metrics\",\"organic_metrics\",\"preview_image_url\",\"promoted_metrics\",\"public_metrics\",\"type\",\"url\",\"variants\",\"width\"]'] # List[str] | A comma separated list of Media fields to display. (optional)
    poll_fields = ['[\"duration_minutes\",\"end_datetime\",\"id\",\"options\",\"voting_status\"]'] # List[str] | A comma separated list of Poll fields to display. (optional)
    user_fields = ['[\"created_at\",\"description\",\"entities\",\"id\",\"location\",\"name\",\"pinned_tweet_id\",\"profile_image_url\",\"protected\",\"public_metrics\",\"url\",\"username\",\"verified\",\"verified_type\",\"withheld\"]'] # List[str] | A comma separated list of User fields to display. (optional)
    place_fields = ['[\"contained_within\",\"country\",\"country_code\",\"full_name\",\"geo\",\"id\",\"name\",\"place_type\"]'] # List[str] | A comma separated list of Place fields to display. (optional)

    try:
        # Retrieve Tweets from a Space.
        api_response = api_instance.space_tweets(id, max_results=max_results, tweet_fields=tweet_fields, expansions=expansions, media_fields=media_fields, poll_fields=poll_fields, user_fields=user_fields, place_fields=place_fields)
        print("The response of SpacesApi->space_tweets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpacesApi->space_tweets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Space to be retrieved. | 
 **max_results** | **int**| The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100. | [optional] [default to 100]
 **tweet_fields** | [**List[str]**](str.md)| A comma separated list of Tweet fields to display. | [optional] 
 **expansions** | [**List[str]**](str.md)| A comma separated list of fields to expand. | [optional] 
 **media_fields** | [**List[str]**](str.md)| A comma separated list of Media fields to display. | [optional] 
 **poll_fields** | [**List[str]**](str.md)| A comma separated list of Poll fields to display. | [optional] 
 **user_fields** | [**List[str]**](str.md)| A comma separated list of User fields to display. | [optional] 
 **place_fields** | [**List[str]**](str.md)| A comma separated list of Place fields to display. | [optional] 

### Return type

[**Get2SpacesIdTweetsResponse**](Get2SpacesIdTweetsResponse.md)

### Authorization

[OAuth2UserToken](../README.md#OAuth2UserToken), [BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request has succeeded. |  -  |
**0** | The request has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

