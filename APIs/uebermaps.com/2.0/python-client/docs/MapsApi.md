# openapi_client.MapsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maps_get**](MapsApi.md#maps_get) | **GET** /maps | List your own maps
[**maps_id_delete**](MapsApi.md#maps_id_delete) | **DELETE** /maps/{id} | Delete map
[**maps_id_get**](MapsApi.md#maps_id_get) | **GET** /maps/{id} | Get map
[**maps_id_patch**](MapsApi.md#maps_id_patch) | **PATCH** /maps/{id} | Update map
[**maps_post**](MapsApi.md#maps_post) | **POST** /maps | Create map
[**users_user_id_maps_get**](MapsApi.md#users_user_id_maps_get) | **GET** /users/{user_id}/maps | List maps for a given user


# **maps_get**
> List[Map] maps_get()

List your own maps

List your own maps.

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
    api_instance = openapi_client.MapsApi(api_client)

    try:
        # List your own maps
        api_response = api_instance.maps_get()
        print("The response of MapsApi->maps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapsApi->maps_get: %s\n" % e)
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

# **maps_id_delete**
> Map maps_id_delete(id)

Delete map

Delete map.

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
    api_instance = openapi_client.MapsApi(api_client)
    id = 56 # int | map id

    try:
        # Delete map
        api_response = api_instance.maps_id_delete(id)
        print("The response of MapsApi->maps_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapsApi->maps_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| map id | 

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
**200** | Contains deleted map. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_get**
> MapWithRelation maps_id_get(id)

Get map

Get basic information about a map

### Example


```python
import openapi_client
from openapi_client.models.map_with_relation import MapWithRelation
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
    api_instance = openapi_client.MapsApi(api_client)
    id = 56 # int | Id of map

    try:
        # Get map
        api_response = api_instance.maps_id_get(id)
        print("The response of MapsApi->maps_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapsApi->maps_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of map | 

### Return type

[**MapWithRelation**](MapWithRelation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains map data, map settings and your relation to this map |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_patch**
> Map maps_id_patch(id, map=map)

Update map

Update map. Wrap map parameters in [map]. To update the map header picture pass a base64 encoded string to [map][picture].

### Example


```python
import openapi_client
from openapi_client.models.map import Map
from openapi_client.models.map_editable import MapEditable
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
    api_instance = openapi_client.MapsApi(api_client)
    id = 56 # int | map id
    map = openapi_client.MapEditable() # MapEditable | map settings attributes (optional)

    try:
        # Update map
        api_response = api_instance.maps_id_patch(id, map=map)
        print("The response of MapsApi->maps_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapsApi->maps_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| map id | 
 **map** | [**MapEditable**](MapEditable.md)| map settings attributes | [optional] 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains map data, map settings and your relation to this map |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_post**
> Map maps_post(map=map)

Create map

Create map. Wrap map parameters in [map]. To add a map header picture pass a base64 encoded string to [map][picture].

### Example


```python
import openapi_client
from openapi_client.models.map import Map
from openapi_client.models.map_editable import MapEditable
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
    api_instance = openapi_client.MapsApi(api_client)
    map = openapi_client.MapEditable() # MapEditable | map attributes (optional)

    try:
        # Create map
        api_response = api_instance.maps_post(map=map)
        print("The response of MapsApi->maps_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapsApi->maps_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **map** | [**MapEditable**](MapEditable.md)| map attributes | [optional] 

### Return type

[**Map**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains map data, map settings and your relation to this map |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **users_user_id_maps_get**
> List[Map] users_user_id_maps_get(user_id)

List maps for a given user

List maps for a given user.

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
    api_instance = openapi_client.MapsApi(api_client)
    user_id = 56 # int | Id of user

    try:
        # List maps for a given user
        api_response = api_instance.users_user_id_maps_get(user_id)
        print("The response of MapsApi->users_user_id_maps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MapsApi->users_user_id_maps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **int**| Id of user | 

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

