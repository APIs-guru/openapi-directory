# openapi_client.PodcastEpisodesApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_podcast_episodes**](PodcastEpisodesApi.md#get_podcast_episodes) | **GET** /api/podcast_episodes | Podcast Episodes


# **get_podcast_episodes**
> List[PodcastEpisodeIndex] get_podcast_episodes(page=page, per_page=per_page, username=username)

Podcast Episodes

This endpoint allows the client to retrieve a list of podcast episodes.         \"Podcast episodes\" are episodes belonging to podcasts.         It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.         It supports pagination, each page will contain 30 articles by default.

### Example


```python
import openapi_client
from openapi_client.models.podcast_episode_index import PodcastEpisodeIndex
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
    api_instance = openapi_client.PodcastEpisodesApi(api_client)
    page = 1 # int | Pagination page (optional) (default to 1)
    per_page = 30 # int | Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable. (optional) (default to 30)
    username = 'codenewbie' # str | Using this parameter will retrieve episodes belonging to a specific podcast. (optional)

    try:
        # Podcast Episodes
        api_response = api_instance.get_podcast_episodes(page=page, per_page=per_page, username=username)
        print("The response of PodcastEpisodesApi->get_podcast_episodes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PodcastEpisodesApi->get_podcast_episodes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Pagination page | [optional] [default to 1]
 **per_page** | **int**| Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable. | [optional] [default to 30]
 **username** | **str**| Using this parameter will retrieve episodes belonging to a specific podcast. | [optional] 

### Return type

[**List[PodcastEpisodeIndex]**](PodcastEpisodeIndex.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A List of Podcast episodes filtered by username |  -  |
**404** | Unknown Podcast username |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

