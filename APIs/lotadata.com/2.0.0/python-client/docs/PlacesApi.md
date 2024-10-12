# openapi_client.PlacesApi

All URIs are relative to *https://api2.lotadata.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**places_get**](PlacesApi.md#places_get) | **GET** /places | Venues, landmarks, regions, these are all places to search.
[**places_id_get**](PlacesApi.md#places_id_get) | **GET** /places/{id} | Get specific place details


# **places_get**
> PlacesSearchResponse places_get(fieldset, category=category, function=function, ambience=ambience, tag=tag, type=type, name=name, exact=exact, capacity_min=capacity_min, capacity_max=capacity_max, street=street, locality=locality, region=region, postal_code=postal_code, country=country, center=center, radius=radius, bbox=bbox, polygon=polygon, within=within, offset=offset, limit=limit)

Venues, landmarks, regions, these are all places to search.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.places_search_response import PlacesSearchResponse
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
    api_instance = openapi_client.PlacesApi(api_client)
    fieldset = context # str | Return results starting at specified offset (summary, context, detail) (default to context)
    category = ['category_example'] # List[str] | List of required PlaceCategory ids (Tier 1) (optional)
    function = ['function_example'] # List[str] | List of required PlaceFunction ids (Tier 2) (optional)
    ambience = ['ambience_example'] # List[str] | List of required ambience ids (optional)
    tag = ['tag_example'] # List[str] | List of required tags (optional)
    type = 'type_example' # str | Specific PlaceType to return (optional)
    name = 'name_example' # str | Match on place names (optional)
    exact = True # bool | Require an exact name match (optional)
    capacity_min = 3.4 # float | Min capacity at location (optional)
    capacity_max = 3.4 # float | Min capacity at location (optional)
    street = 'street_example' # str | Address of the place or street component of the address (optional)
    locality = 'locality_example' # str | city, town, or neighborhood of the place (optional)
    region = 'region_example' # str | region or state (optional)
    postal_code = 'postal_code_example' # str | Postal or zip code (optional)
    country = 'country_example' # str | country component of the address (optional)
    center = 'center_example' # str | latitude,longitude of the origin point (optional)
    radius = 56 # int | Distance from origin in meters (optional)
    bbox = ['bbox_example'] # List[str] | Corner of a bounding box (lat,lng). Requires 0 or 2 pairs (optional)
    polygon = ['polygon_example'] # List[str] | Closed custom polygon. Ordered list of lat,lng pairs (optional)
    within = 'within_example' # str | Search within specified geopolitical place id (optional)
    offset = 56 # int | Return results starting at specified offset (optional)
    limit = 56 # int | Max results to return (optional)

    try:
        # Venues, landmarks, regions, these are all places to search.
        api_response = api_instance.places_get(fieldset, category=category, function=function, ambience=ambience, tag=tag, type=type, name=name, exact=exact, capacity_min=capacity_min, capacity_max=capacity_max, street=street, locality=locality, region=region, postal_code=postal_code, country=country, center=center, radius=radius, bbox=bbox, polygon=polygon, within=within, offset=offset, limit=limit)
        print("The response of PlacesApi->places_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacesApi->places_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldset** | **str**| Return results starting at specified offset (summary, context, detail) | [default to context]
 **category** | [**List[str]**](str.md)| List of required PlaceCategory ids (Tier 1) | [optional] 
 **function** | [**List[str]**](str.md)| List of required PlaceFunction ids (Tier 2) | [optional] 
 **ambience** | [**List[str]**](str.md)| List of required ambience ids | [optional] 
 **tag** | [**List[str]**](str.md)| List of required tags | [optional] 
 **type** | **str**| Specific PlaceType to return | [optional] 
 **name** | **str**| Match on place names | [optional] 
 **exact** | **bool**| Require an exact name match | [optional] 
 **capacity_min** | **float**| Min capacity at location | [optional] 
 **capacity_max** | **float**| Min capacity at location | [optional] 
 **street** | **str**| Address of the place or street component of the address | [optional] 
 **locality** | **str**| city, town, or neighborhood of the place | [optional] 
 **region** | **str**| region or state | [optional] 
 **postal_code** | **str**| Postal or zip code | [optional] 
 **country** | **str**| country component of the address | [optional] 
 **center** | **str**| latitude,longitude of the origin point | [optional] 
 **radius** | **int**| Distance from origin in meters | [optional] 
 **bbox** | [**List[str]**](str.md)| Corner of a bounding box (lat,lng). Requires 0 or 2 pairs | [optional] 
 **polygon** | [**List[str]**](str.md)| Closed custom polygon. Ordered list of lat,lng pairs | [optional] 
 **within** | **str**| Search within specified geopolitical place id | [optional] 
 **offset** | **int**| Return results starting at specified offset | [optional] 
 **limit** | **int**| Max results to return | [optional] 

### Return type

[**PlacesSearchResponse**](PlacesSearchResponse.md)

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

# **places_id_get**
> PlaceDetail places_id_get(id, fieldset=fieldset)

Get specific place details

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.place_detail import PlaceDetail
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
    api_instance = openapi_client.PlacesApi(api_client)
    id = 'id_example' # str | place @id
    fieldset = summary # str |  (optional) (default to summary)

    try:
        # Get specific place details
        api_response = api_instance.places_id_get(id, fieldset=fieldset)
        print("The response of PlacesApi->places_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PlacesApi->places_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| place @id | 
 **fieldset** | **str**|  | [optional] [default to summary]

### Return type

[**PlaceDetail**](PlaceDetail.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested place |  -  |
**404** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

