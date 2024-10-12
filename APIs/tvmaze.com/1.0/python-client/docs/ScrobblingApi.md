# openapi_client.ScrobblingApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scrobble_episodes_episode_id_put**](ScrobblingApi.md#scrobble_episodes_episode_id_put) | **PUT** /scrobble/episodes/{episode_id} | Mark an episode as acquired or watched based on its ID
[**scrobble_episodes_post**](ScrobblingApi.md#scrobble_episodes_post) | **POST** /scrobble/episodes | Mark episodes as acquired or watched based on their IDs
[**scrobble_shows_post**](ScrobblingApi.md#scrobble_shows_post) | **POST** /scrobble/shows | Mark episodes within a show as acquired or watched based on their attributes
[**scrobble_shows_show_id_get**](ScrobblingApi.md#scrobble_shows_show_id_get) | **GET** /scrobble/shows/{show_id} | List watched and acquired episodes for a show


# **scrobble_episodes_episode_id_put**
> MarkedEpisode scrobble_episodes_episode_id_put(episode_id, marked_episode=marked_episode)

Mark an episode as acquired or watched based on its ID

This endpoint can be used by all users, even without premium

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.marked_episode import MarkedEpisode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobblingApi(api_client)
    episode_id = 56 # int | 
    marked_episode = openapi_client.MarkedEpisode() # MarkedEpisode |  (optional)

    try:
        # Mark an episode as acquired or watched based on its ID
        api_response = api_instance.scrobble_episodes_episode_id_put(episode_id, marked_episode=marked_episode)
        print("The response of ScrobblingApi->scrobble_episodes_episode_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScrobblingApi->scrobble_episodes_episode_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**|  | 
 **marked_episode** | [**MarkedEpisode**](MarkedEpisode.md)|  | [optional] 

### Return type

[**MarkedEpisode**](MarkedEpisode.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | this episode is now marked |  -  |
**404** | this episode does not exist |  -  |
**422** | invalid input data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scrobble_episodes_post**
> List[BulkResponseInner] scrobble_episodes_post(scrobble_episodes_post_request_inner=scrobble_episodes_post_request_inner)

Mark episodes as acquired or watched based on their IDs

This endpoint can be used by all users, even without premium

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.bulk_response_inner import BulkResponseInner
from openapi_client.models.scrobble_episodes_post_request_inner import ScrobbleEpisodesPostRequestInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobblingApi(api_client)
    scrobble_episodes_post_request_inner = [openapi_client.ScrobbleEpisodesPostRequestInner()] # List[ScrobbleEpisodesPostRequestInner] |  (optional)

    try:
        # Mark episodes as acquired or watched based on their IDs
        api_response = api_instance.scrobble_episodes_post(scrobble_episodes_post_request_inner=scrobble_episodes_post_request_inner)
        print("The response of ScrobblingApi->scrobble_episodes_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScrobblingApi->scrobble_episodes_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scrobble_episodes_post_request_inner** | [**List[ScrobbleEpisodesPostRequestInner]**](ScrobbleEpisodesPostRequestInner.md)|  | [optional] 

### Return type

[**List[BulkResponseInner]**](BulkResponseInner.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All episodes were succesfully marked |  -  |
**207** | Some episodes were succesfully marked, but there are errors |  -  |
**422** | None of the episodes were succesfully marked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scrobble_shows_post**
> List[BulkResponseInner] scrobble_shows_post(tvmaze_id=tvmaze_id, thetvdb_id=thetvdb_id, imdb_id=imdb_id, scrobble_shows_post_request_inner=scrobble_shows_post_request_inner)

Mark episodes within a show as acquired or watched based on their attributes

To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.  This endpoint can be used by all users, even without premium. 

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.bulk_response_inner import BulkResponseInner
from openapi_client.models.scrobble_shows_post_request_inner import ScrobbleShowsPostRequestInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobblingApi(api_client)
    tvmaze_id = 56 # int | The show's TVmaze ID (optional)
    thetvdb_id = 56 # int | The show's TheTVDB ID (optional)
    imdb_id = 56 # int | The show's IMDB ID (optional)
    scrobble_shows_post_request_inner = [openapi_client.ScrobbleShowsPostRequestInner()] # List[ScrobbleShowsPostRequestInner] |  (optional)

    try:
        # Mark episodes within a show as acquired or watched based on their attributes
        api_response = api_instance.scrobble_shows_post(tvmaze_id=tvmaze_id, thetvdb_id=thetvdb_id, imdb_id=imdb_id, scrobble_shows_post_request_inner=scrobble_shows_post_request_inner)
        print("The response of ScrobblingApi->scrobble_shows_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScrobblingApi->scrobble_shows_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tvmaze_id** | **int**| The show&#39;s TVmaze ID | [optional] 
 **thetvdb_id** | **int**| The show&#39;s TheTVDB ID | [optional] 
 **imdb_id** | **int**| The show&#39;s IMDB ID | [optional] 
 **scrobble_shows_post_request_inner** | [**List[ScrobbleShowsPostRequestInner]**](ScrobbleShowsPostRequestInner.md)|  | [optional] 

### Return type

[**List[BulkResponseInner]**](BulkResponseInner.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All episodes were succesfully marked |  -  |
**207** | Some episodes were succesfully marked, but there are errors |  -  |
**422** | None of the episodes were succesfully marked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scrobble_shows_show_id_get**
> List[MarkedEpisode] scrobble_shows_show_id_get(show_id, embed=embed)

List watched and acquired episodes for a show

This endpoint can be used by all users, even without premium

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
from openapi_client.models.marked_episode import MarkedEpisode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.tvmaze.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.tvmaze.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: usertoken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScrobblingApi(api_client)
    show_id = 56 # int | ID of the target show
    embed = 'embed_example' # str | Embed full episode info (optional)

    try:
        # List watched and acquired episodes for a show
        api_response = api_instance.scrobble_shows_show_id_get(show_id, embed=embed)
        print("The response of ScrobblingApi->scrobble_shows_show_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScrobblingApi->scrobble_shows_show_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**| ID of the target show | 
 **embed** | **str**| Embed full episode info | [optional] 

### Return type

[**List[MarkedEpisode]**](MarkedEpisode.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of marked episodes |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

