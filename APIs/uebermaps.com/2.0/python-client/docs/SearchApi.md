# openapi_client.SearchApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maps_search_get**](SearchApi.md#maps_search_get) | **GET** /maps/search | Search maps
[**spots_search_get**](SearchApi.md#spots_search_get) | **GET** /spots/search | Search spots
[**users_search_get**](SearchApi.md#users_search_get) | **GET** /users/search | Search users


# **maps_search_get**
> Map maps_search_get(q=q, d=d, lat=lat, lon=lon)

Search maps

Search maps

### Example


```python
import openapi_client
from openapi_client.models.map import Map
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    q = 'q_example' # str | Query (optional)
    d = 56 # int | Distance. Diameter of search radius in meter (default: 2000 meter) (optional)
    lat = 3.4 # float | Latitude for search radius (default distance: 2000 meter) (optional)
    lon = 3.4 # float | Longitude for search radius (default distance: 2000 meter) (optional)

    try:
        # Search maps
        api_response = api_instance.maps_search_get(q=q, d=d, lat=lat, lon=lon)
        print("The response of SearchApi->maps_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->maps_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Query | [optional] 
 **d** | **int**| Distance. Diameter of search radius in meter (default: 2000 meter) | [optional] 
 **lat** | **float**| Latitude for search radius (default distance: 2000 meter) | [optional] 
 **lon** | **float**| Longitude for search radius (default distance: 2000 meter) | [optional] 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains map data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_search_get**
> Spot spots_search_get(q=q, d=d, lat=lat, lon=lon)

Search spots

Search spots

### Example


```python
import openapi_client
from openapi_client.models.spot import Spot
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    q = 'q_example' # str | Query (optional)
    d = 56 # int | Distance. Diameter of search radius in meter (default: 2000 meter) (optional)
    lat = 3.4 # float | Latitude for search radius (2 km) (optional)
    lon = 3.4 # float | Longitude for search radius (2 km) (optional)

    try:
        # Search spots
        api_response = api_instance.spots_search_get(q=q, d=d, lat=lat, lon=lon)
        print("The response of SearchApi->spots_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->spots_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Query | [optional] 
 **d** | **int**| Distance. Diameter of search radius in meter (default: 2000 meter) | [optional] 
 **lat** | **float**| Latitude for search radius (2 km) | [optional] 
 **lon** | **float**| Longitude for search radius (2 km) | [optional] 

### Return type

[**Spot**](Spot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains spot data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_search_get**
> User users_search_get(q=q)

Search users

Search users

### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SearchApi(api_client)
    q = 'q_example' # str | Query (optional)

    try:
        # Search users
        api_response = api_instance.users_search_get(q=q)
        print("The response of SearchApi->users_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SearchApi->users_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Query | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains users data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

