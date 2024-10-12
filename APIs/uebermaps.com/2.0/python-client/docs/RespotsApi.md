# openapi_client.RespotsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maps_id_respots_get**](RespotsApi.md#maps_id_respots_get) | **GET** /maps/{id}/respots | List respots of a map
[**maps_map_id_spots_spot_id_respot_delete**](RespotsApi.md#maps_map_id_spots_spot_id_respot_delete) | **DELETE** /maps/{map_id}/spots/{spot_id}/respot | Delete respot from map by spot id
[**respot_maps_get**](RespotsApi.md#respot_maps_get) | **GET** /respot_maps | List maps that user can respot to
[**respots_id_delete**](RespotsApi.md#respots_id_delete) | **DELETE** /respots/{id} | Delete respot
[**respots_id_get**](RespotsApi.md#respots_id_get) | **GET** /respots/{id} | Get respot
[**spots_id_respots_post**](RespotsApi.md#spots_id_respots_post) | **POST** /spots/{id}/respots | Respot a spot onto a map


# **maps_id_respots_get**
> List[Respot] maps_id_respots_get(id)

List respots of a map

List respots of a map.

### Example


```python
import openapi_client
from openapi_client.models.respot import Respot
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
    api_instance = openapi_client.RespotsApi(api_client)
    id = 56 # int | Map Id

    try:
        # List respots of a map
        api_response = api_instance.maps_id_respots_get(id)
        print("The response of RespotsApi->maps_id_respots_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RespotsApi->maps_id_respots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Map Id | 

### Return type

[**List[Respot]**](Respot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of respots. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_map_id_spots_spot_id_respot_delete**
> Respot maps_map_id_spots_spot_id_respot_delete(map_id, spot_id)

Delete respot from map by spot id

Delete respot from map by spot id.

### Example


```python
import openapi_client
from openapi_client.models.respot import Respot
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
    api_instance = openapi_client.RespotsApi(api_client)
    map_id = 56 # int | Map Id
    spot_id = 56 # int | Spot Id

    try:
        # Delete respot from map by spot id
        api_response = api_instance.maps_map_id_spots_spot_id_respot_delete(map_id, spot_id)
        print("The response of RespotsApi->maps_map_id_spots_spot_id_respot_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RespotsApi->maps_map_id_spots_spot_id_respot_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map_id** | **int**| Map Id | 
 **spot_id** | **int**| Spot Id | 

### Return type

[**Respot**](Respot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted respot. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respot_maps_get**
> List[Map] respot_maps_get()

List maps that user can respot to

List maps that user can respot to.

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
    api_instance = openapi_client.RespotsApi(api_client)

    try:
        # List maps that user can respot to
        api_response = api_instance.respot_maps_get()
        print("The response of RespotsApi->respot_maps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RespotsApi->respot_maps_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Map]**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of maps. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respots_id_delete**
> Respot respots_id_delete(id)

Delete respot

Delete respot.

### Example


```python
import openapi_client
from openapi_client.models.respot import Respot
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
    api_instance = openapi_client.RespotsApi(api_client)
    id = 56 # int | Respot Id

    try:
        # Delete respot
        api_response = api_instance.respots_id_delete(id)
        print("The response of RespotsApi->respots_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RespotsApi->respots_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Respot Id | 

### Return type

[**Respot**](Respot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains deleted respot. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **respots_id_get**
> Respot respots_id_get(id)

Get respot

Get basic information about a respot

### Example


```python
import openapi_client
from openapi_client.models.respot import Respot
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
    api_instance = openapi_client.RespotsApi(api_client)
    id = 56 # int | Id of respot

    try:
        # Get respot
        api_response = api_instance.respots_id_get(id)
        print("The response of RespotsApi->respots_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RespotsApi->respots_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of respot | 

### Return type

[**Respot**](Respot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains respot data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_respots_post**
> Respot spots_id_respots_post(id, map_id)

Respot a spot onto a map

Respot a spot onto a map.

### Example


```python
import openapi_client
from openapi_client.models.respot import Respot
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
    api_instance = openapi_client.RespotsApi(api_client)
    id = 56 # int | Spot Id
    map_id = 3.4 # float | Map Id

    try:
        # Respot a spot onto a map
        api_response = api_instance.spots_id_respots_post(id, map_id)
        print("The response of RespotsApi->spots_id_respots_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RespotsApi->spots_id_respots_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Spot Id | 
 **map_id** | **float**| Map Id | 

### Return type

[**Respot**](Respot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains respot data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

