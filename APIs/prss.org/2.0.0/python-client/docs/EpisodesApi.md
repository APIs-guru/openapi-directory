# openapi_client.EpisodesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_episodes_get**](EpisodesApi.md#api_v2_episodes_get) | **GET** /api/v2/episodes | Gets episodes matching the given criteria.
[**api_v2_episodes_id_get**](EpisodesApi.md#api_v2_episodes_id_get) | **GET** /api/v2/episodes/{id} | Returns the episode matching the given ID.


# **api_v2_episodes_get**
> List[Episode] api_v2_episodes_get(program_id, id=id, begin_air_date_after=begin_air_date_after, end_air_date_before=end_air_date_before, page_start=page_start, page_size=page_size, order_by_id=order_by_id)

Gets episodes matching the given criteria.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.episode import Episode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    program_id = 56 # int | Matches on the ID of the program that owns the episode.
    id = 56 # int | Matches on the ID of the episode. (optional)
    begin_air_date_after = '2013-10-20T19:20:30+01:00' # datetime | Matches on the begin air date of the episode (inclusive). (optional)
    end_air_date_before = '2013-10-20T19:20:30+01:00' # datetime | Matches on the end air date of the episode (inclusive). (optional)
    page_start = 0 # int | The start page of the results to return. The first item is indexed at 0. (optional) (default to 0)
    page_size = 500 # int | The number of items to return. Must be between 0 and 500, inclusive. (optional) (default to 500)
    order_by_id = 'order_by_id_example' # str | The sort order of the list of episodes, based on episode ID. If unspecified, the episodes are returned in random order. If using paging to iterate through the results, sort order should be specified. (optional)

    try:
        # Gets episodes matching the given criteria.
        api_response = api_instance.api_v2_episodes_get(program_id, id=id, begin_air_date_after=begin_air_date_after, end_air_date_before=end_air_date_before, page_start=page_start, page_size=page_size, order_by_id=order_by_id)
        print("The response of EpisodesApi->api_v2_episodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EpisodesApi->api_v2_episodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **program_id** | **int**| Matches on the ID of the program that owns the episode. | 
 **id** | **int**| Matches on the ID of the episode. | [optional] 
 **begin_air_date_after** | **datetime**| Matches on the begin air date of the episode (inclusive). | [optional] 
 **end_air_date_before** | **datetime**| Matches on the end air date of the episode (inclusive). | [optional] 
 **page_start** | **int**| The start page of the results to return. The first item is indexed at 0. | [optional] [default to 0]
 **page_size** | **int**| The number of items to return. Must be between 0 and 500, inclusive. | [optional] [default to 500]
 **order_by_id** | **str**| The sort order of the list of episodes, based on episode ID. If unspecified, the episodes are returned in random order. If using paging to iterate through the results, sort order should be specified. | [optional] 

### Return type

[**List[Episode]**](Episode.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching episode. |  -  |
**400** | The request is missing required data or invalid. |  -  |
**403** | Authorization failed, or the user is not permitted to view this program or its episodes. |  -  |
**404** | The program cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_episodes_id_get**
> Episode api_v2_episodes_id_get(id)

Returns the episode matching the given ID.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.episode import Episode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EpisodesApi(api_client)
    id = 56 # int | The ID of the episode to operate on.

    try:
        # Returns the episode matching the given ID.
        api_response = api_instance.api_v2_episodes_id_get(id)
        print("The response of EpisodesApi->api_v2_episodes_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EpisodesApi->api_v2_episodes_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the episode to operate on. | 

### Return type

[**Episode**](Episode.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching episode. |  -  |
**403** | Authorization failed, or the user is not permitted to view this episode. |  -  |
**404** | The episode cannot be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

