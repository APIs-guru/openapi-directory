# openapi_client.SpotsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maps_id_spots_get**](SpotsApi.md#maps_id_spots_get) | **GET** /maps/{id}/spots | List spots for a given map
[**maps_id_spots_post**](SpotsApi.md#maps_id_spots_post) | **POST** /maps/{id}/spots | Create spot
[**maps_map_id_spots_id_get**](SpotsApi.md#maps_map_id_spots_id_get) | **GET** /maps/{map_id}/spots/{id} | Get spot
[**spots_get**](SpotsApi.md#spots_get) | **GET** /spots | List your own spots
[**spots_id_delete**](SpotsApi.md#spots_id_delete) | **DELETE** /spots/{id} | Delete spot
[**spots_id_patch**](SpotsApi.md#spots_id_patch) | **PATCH** /spots/{id} | Update spot


# **maps_id_spots_get**
> List[Spot] maps_id_spots_get(id, order=order)

List spots for a given map

List spots for a given map.

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
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | Id of map
    order = 'order_example' # str | Order of spots (optional)

    try:
        # List spots for a given map
        api_response = api_instance.maps_id_spots_get(id, order=order)
        print("The response of SpotsApi->maps_id_spots_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->maps_id_spots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of map | 
 **order** | **str**| Order of spots | [optional] 

### Return type

[**List[Spot]**](Spot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of spots. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_id_spots_post**
> Spot maps_id_spots_post(id, spot)

Create spot

Create spot. Wrap parameters in [spot]. To add a spot picture pass a base64 encoded string to [spot][picture].

### Example


```python
import openapi_client
from openapi_client.models.spot import Spot
from openapi_client.models.spot_editable import SpotEditable
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
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | Id of map
    spot = openapi_client.SpotEditable() # SpotEditable | spot attributes

    try:
        # Create spot
        api_response = api_instance.maps_id_spots_post(id, spot)
        print("The response of SpotsApi->maps_id_spots_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->maps_id_spots_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of map | 
 **spot** | [**SpotEditable**](SpotEditable.md)| spot attributes | 

### Return type

[**Spot**](Spot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains spot data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maps_map_id_spots_id_get**
> Spot maps_map_id_spots_id_get(id, map_id)

Get spot

Get basic information about a spot

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
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | Id of spot
    map_id = 56 # int | Id of map

    try:
        # Get spot
        api_response = api_instance.maps_map_id_spots_id_get(id, map_id)
        print("The response of SpotsApi->maps_map_id_spots_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->maps_map_id_spots_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| Id of spot | 
 **map_id** | **int**| Id of map | 

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
**200** | Contains spot data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_get**
> List[Spot] spots_get(order=order)

List your own spots

List your own spots.

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
    api_instance = openapi_client.SpotsApi(api_client)
    order = 'order_example' # str | Order of spots (optional)

    try:
        # List your own spots
        api_response = api_instance.spots_get(order=order)
        print("The response of SpotsApi->spots_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->spots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **str**| Order of spots | [optional] 

### Return type

[**List[Spot]**](Spot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of spots. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_delete**
> Spot spots_id_delete(id)

Delete spot

Delete spot.

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
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | spot id

    try:
        # Delete spot
        api_response = api_instance.spots_id_delete(id)
        print("The response of SpotsApi->spots_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->spots_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| spot id | 

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
**200** | Contains deleted spot. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **spots_id_patch**
> Spot spots_id_patch(id, spot=spot)

Update spot

Update spot. Wrap parameters in [spot]. To update the spot picture pass a base64 encoded string to [spot][picture].

### Example


```python
import openapi_client
from openapi_client.models.spot import Spot
from openapi_client.models.spot_editable import SpotEditable
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
    api_instance = openapi_client.SpotsApi(api_client)
    id = 56 # int | spot id
    spot = openapi_client.SpotEditable() # SpotEditable | spot attributes (optional)

    try:
        # Update spot
        api_response = api_instance.spots_id_patch(id, spot=spot)
        print("The response of SpotsApi->spots_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpotsApi->spots_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| spot id | 
 **spot** | [**SpotEditable**](SpotEditable.md)| spot attributes | [optional] 

### Return type

[**Spot**](Spot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains spot data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

