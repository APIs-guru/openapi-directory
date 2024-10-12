# openapi_client.MarkedEpisodesApi

All URIs are relative to *https://api.tvmaze.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_episodes_episode_id_delete**](MarkedEpisodesApi.md#user_episodes_episode_id_delete) | **DELETE** /user/episodes/{episode_id} | Unmark an episode
[**user_episodes_episode_id_get**](MarkedEpisodesApi.md#user_episodes_episode_id_get) | **GET** /user/episodes/{episode_id} | Check if an episode is marked
[**user_episodes_episode_id_put**](MarkedEpisodesApi.md#user_episodes_episode_id_put) | **PUT** /user/episodes/{episode_id} | Mark an episode
[**user_episodes_get**](MarkedEpisodesApi.md#user_episodes_get) | **GET** /user/episodes | List the marked episodes


# **user_episodes_episode_id_delete**
> user_episodes_episode_id_delete(episode_id)

Unmark an episode

### Example

* Basic Authentication (usertoken):

```python
import openapi_client
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
    api_instance = openapi_client.MarkedEpisodesApi(api_client)
    episode_id = 56 # int | 

    try:
        # Unmark an episode
        api_instance.user_episodes_episode_id_delete(episode_id)
    except Exception as e:
        print("Exception when calling MarkedEpisodesApi->user_episodes_episode_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the episode is now unmarked |  -  |
**404** | this episode was not marked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_episodes_episode_id_get**
> MarkedEpisode user_episodes_episode_id_get(episode_id)

Check if an episode is marked

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
    api_instance = openapi_client.MarkedEpisodesApi(api_client)
    episode_id = 56 # int | 

    try:
        # Check if an episode is marked
        api_response = api_instance.user_episodes_episode_id_get(episode_id)
        print("The response of MarkedEpisodesApi->user_episodes_episode_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkedEpisodesApi->user_episodes_episode_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **episode_id** | **int**|  | 

### Return type

[**MarkedEpisode**](MarkedEpisode.md)

### Authorization

[usertoken](../README.md#usertoken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The marked episode |  -  |
**404** | This episode is not marked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_episodes_episode_id_put**
> MarkedEpisode user_episodes_episode_id_put(episode_id, marked_episode=marked_episode)

Mark an episode

Set `marked_at` to `NULL` or leave it out to use the current time.

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
    api_instance = openapi_client.MarkedEpisodesApi(api_client)
    episode_id = 56 # int | 
    marked_episode = openapi_client.MarkedEpisode() # MarkedEpisode |  (optional)

    try:
        # Mark an episode
        api_response = api_instance.user_episodes_episode_id_put(episode_id, marked_episode=marked_episode)
        print("The response of MarkedEpisodesApi->user_episodes_episode_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkedEpisodesApi->user_episodes_episode_id_put: %s\n" % e)
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

# **user_episodes_get**
> List[MarkedEpisode] user_episodes_get(show_id=show_id)

List the marked episodes

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
    api_instance = openapi_client.MarkedEpisodesApi(api_client)
    show_id = 56 # int | Only return episodes from this specific show (optional)

    try:
        # List the marked episodes
        api_response = api_instance.user_episodes_get(show_id=show_id)
        print("The response of MarkedEpisodesApi->user_episodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarkedEpisodesApi->user_episodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show_id** | **int**| Only return episodes from this specific show | [optional] 

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

