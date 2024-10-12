# openapi_client.EventsApi

All URIs are relative to *https://api2.lotadata.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_get**](EventsApi.md#events_get) | **GET** /events | Find event occurrences in the area. Returns results at specific place and time, event groups are expanded for every occurrence.
[**events_id_get**](EventsApi.md#events_id_get) | **GET** /events/{id} | Get Specific event details.


# **events_get**
> EventsSearchResponse events_get(fieldset, category=category, activity=activity, ambience=ambience, genre=genre, name=name, q=q, from_day=from_day, to_day=to_day, capacity_min=capacity_min, capacity_max=capacity_max, center=center, radius=radius, bbox=bbox, polygon=polygon, within=within, offset=offset, limit=limit)

Find event occurrences in the area. Returns results at specific place and time, event groups are expanded for every occurrence.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.events_search_response import EventsSearchResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.lotadata.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.lotadata.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    fieldset = context # str | Return results starting at specified offset (summary, context, detail) (default to context)
    category = ['category_example'] # List[str] | List of required EventCategory ids (Tier 1) (optional)
    activity = 'activity_example' # str | List of required activity type ids (compliment to category) (optional)
    ambience = 'ambience_example' # str | List of required ambience ids (optional)
    genre = 'genre_example' # str | List of required genre ids (optional)
    name = 'name_example' # str | Matching on event and place names (optional)
    q = 'q_example' # str | Text query matching titles, description, various text, tags, category (optional)
    from_day = 'from_day_example' # str | Start on or after date specified (2015-10-16) (optional)
    to_day = 'to_day_example' # str | Start on or before date specified (2015-10-16) (optional)
    capacity_min = 3.4 # float | Min capacity at location (optional)
    capacity_max = 3.4 # float | Min capacity at location (optional)
    center = 'center_example' # str | latitude,longitude of the origin point (optional)
    radius = 56 # int | Distance from origin in meters (optional)
    bbox = ['bbox_example'] # List[str] | Corner of a bounding box (lat,lng). Requires 0 or 2 pairs (optional)
    polygon = ['polygon_example'] # List[str] | Closed custom polygon. Ordered list of lat,lng pairs (optional)
    within = 'within_example' # str | Search within specified geopolitical place id (optional)
    offset = 56 # int | Return results starting at specified offset (optional)
    limit = 56 # int | Max results to return (optional)

    try:
        # Find event occurrences in the area. Returns results at specific place and time, event groups are expanded for every occurrence.
        api_response = api_instance.events_get(fieldset, category=category, activity=activity, ambience=ambience, genre=genre, name=name, q=q, from_day=from_day, to_day=to_day, capacity_min=capacity_min, capacity_max=capacity_max, center=center, radius=radius, bbox=bbox, polygon=polygon, within=within, offset=offset, limit=limit)
        print("The response of EventsApi->events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldset** | **str**| Return results starting at specified offset (summary, context, detail) | [default to context]
 **category** | [**List[str]**](str.md)| List of required EventCategory ids (Tier 1) | [optional] 
 **activity** | **str**| List of required activity type ids (compliment to category) | [optional] 
 **ambience** | **str**| List of required ambience ids | [optional] 
 **genre** | **str**| List of required genre ids | [optional] 
 **name** | **str**| Matching on event and place names | [optional] 
 **q** | **str**| Text query matching titles, description, various text, tags, category | [optional] 
 **from_day** | **str**| Start on or after date specified (2015-10-16) | [optional] 
 **to_day** | **str**| Start on or before date specified (2015-10-16) | [optional] 
 **capacity_min** | **float**| Min capacity at location | [optional] 
 **capacity_max** | **float**| Min capacity at location | [optional] 
 **center** | **str**| latitude,longitude of the origin point | [optional] 
 **radius** | **int**| Distance from origin in meters | [optional] 
 **bbox** | [**List[str]**](str.md)| Corner of a bounding box (lat,lng). Requires 0 or 2 pairs | [optional] 
 **polygon** | [**List[str]**](str.md)| Closed custom polygon. Ordered list of lat,lng pairs | [optional] 
 **within** | **str**| Search within specified geopolitical place id | [optional] 
 **offset** | **int**| Return results starting at specified offset | [optional] 
 **limit** | **int**| Max results to return | [optional] 

### Return type

[**EventsSearchResponse**](EventsSearchResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching events |  -  |
**400** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_id_get**
> EventOccurenceDetail events_id_get(id, fieldset=fieldset)

Get Specific event details.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.event_occurence_detail import EventOccurenceDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.lotadata.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.lotadata.com/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    id = 'id_example' # str | event @id
    fieldset = summary # str |  (optional) (default to summary)

    try:
        # Get Specific event details.
        api_response = api_instance.events_id_get(id, fieldset=fieldset)
        print("The response of EventsApi->events_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->events_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| event @id | 
 **fieldset** | **str**|  | [optional] [default to summary]

### Return type

[**EventOccurenceDetail**](EventOccurenceDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested event |  -  |
**404** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

