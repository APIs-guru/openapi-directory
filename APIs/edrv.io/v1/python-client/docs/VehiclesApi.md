# openapi_client.VehiclesApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vehicle**](VehiclesApi.md#get_vehicle) | **GET** /v1/vehicles/{id} | 
[**get_vehicle_battery**](VehiclesApi.md#get_vehicle_battery) | **GET** /v1/vehicles/{id}/battery | 
[**get_vehicle_charge**](VehiclesApi.md#get_vehicle_charge) | **GET** /v1/vehicles/{id}/charge | 
[**get_vehicle_location**](VehiclesApi.md#get_vehicle_location) | **GET** /v1/vehicles/{id}/location | 
[**get_vehicle_odometer**](VehiclesApi.md#get_vehicle_odometer) | **GET** /v1/vehicles/{id}/odometer | 
[**get_vehicles**](VehiclesApi.md#get_vehicles) | **GET** /v1/vehicles | 
[**post_charge**](VehiclesApi.md#post_charge) | **POST** /v1/vehicles/{id}/charge | 


# **get_vehicle**
> get_vehicle(id, include_driver=include_driver, include_token=include_token, include_organization=include_organization)



Get a vehicle's data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    id = 'id_example' # str | The vehicule id that needs to be fetched
    include_driver = True # bool | Populate driver (optional)
    include_token = True # bool | Populate token (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_vehicle(id, include_driver=include_driver, include_token=include_token, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling VehiclesApi->get_vehicle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The vehicule id that needs to be fetched | 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_token** | **bool**| Populate token | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a vehicle object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vehicle_battery**
> get_vehicle_battery(id)



Get a vehicle's battery

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    id = 'id_example' # str | The vehicle id that needs to be fetched

    try:
        api_instance.get_vehicle_battery(id)
    except Exception as e:
        print("Exception when calling VehiclesApi->get_vehicle_battery: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The vehicle id that needs to be fetched | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a vehicle object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vehicle_charge**
> get_vehicle_charge(id)



Get a vehicle's charge

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    id = 'id_example' # str | The vehicle id that needs to be fetched

    try:
        api_instance.get_vehicle_charge(id)
    except Exception as e:
        print("Exception when calling VehiclesApi->get_vehicle_charge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The vehicle id that needs to be fetched | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a vehicle object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vehicle_location**
> get_vehicle_location(id)



Get a vehicle's location

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    id = 'id_example' # str | The vehicle id that needs to be fetched

    try:
        api_instance.get_vehicle_location(id)
    except Exception as e:
        print("Exception when calling VehiclesApi->get_vehicle_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The vehicle id that needs to be fetched | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a vehicle object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vehicle_odometer**
> get_vehicle_odometer(id)



Get a vehicle's odometer

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    id = 'id_example' # str | The vehicle id that needs to be fetched

    try:
        api_instance.get_vehicle_odometer(id)
    except Exception as e:
        print("Exception when calling VehiclesApi->get_vehicle_odometer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The vehicle id that needs to be fetched | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a vehicle object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_vehicles**
> GetDrivers200Response get_vehicles(active=active, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_driver=include_driver, include_token=include_token, include_organization=include_organization)



List all vehicles

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_drivers200_response import GetDrivers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    active = True # bool | Get a list of active vehicles (optional)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_driver = True # bool | Populate driver (optional)
    include_token = True # bool | Populate token (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_response = api_instance.get_vehicles(active=active, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_driver=include_driver, include_token=include_token, include_organization=include_organization)
        print("The response of VehiclesApi->get_vehicles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehiclesApi->get_vehicles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| Get a list of active vehicles | [optional] 
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_driver** | **bool**| Populate driver | [optional] 
 **include_token** | **bool**| Populate token | [optional] 
 **include_organization** | **bool**| Populate organization | [optional] 

### Return type

[**GetDrivers200Response**](GetDrivers200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of vehicle objects |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_charge**
> PatchChargeStation200Response post_charge(id, post_charge_request)



Change charge

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.post_charge_request import PostChargeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehiclesApi(api_client)
    id = 'id_example' # str | The vehicle id that needs to be fetched
    post_charge_request = openapi_client.PostChargeRequest() # PostChargeRequest | Include command properties to send here

    try:
        api_response = api_instance.post_charge(id, post_charge_request)
        print("The response of VehiclesApi->post_charge:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehiclesApi->post_charge: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The vehicle id that needs to be fetched | 
 **post_charge_request** | [**PostChargeRequest**](PostChargeRequest.md)| Include command properties to send here | 

### Return type

[**PatchChargeStation200Response**](PatchChargeStation200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the status of the command |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

