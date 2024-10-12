# openapi_client.ChargeStationsApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_charge_station**](ChargeStationsApi.md#delete_charge_station) | **DELETE** /v1/chargestations/{id} | 
[**get_charge_station**](ChargeStationsApi.md#get_charge_station) | **GET** /v1/chargestations/{id} | 
[**get_charge_station_connectors**](ChargeStationsApi.md#get_charge_station_connectors) | **GET** /v1/chargestations/{id}/connectors | 
[**get_charge_stations**](ChargeStationsApi.md#get_charge_stations) | **GET** /v1/chargestations | 
[**patch_charge_station**](ChargeStationsApi.md#patch_charge_station) | **PATCH** /v1/chargestations/{id} | 
[**post_charge_stations**](ChargeStationsApi.md#post_charge_stations) | **POST** /v1/chargestations | 


# **delete_charge_station**
> delete_charge_station(id)



Use to delete a charge station

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
    api_instance = openapi_client.ChargeStationsApi(api_client)
    id = 'id_example' # str | The charge station id that needs to be deleted

    try:
        api_instance.delete_charge_station(id)
    except Exception as e:
        print("Exception when calling ChargeStationsApi->delete_charge_station: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The charge station id that needs to be deleted | 

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
**200** | Returns the deleted chargestion object |  -  |
**400** | Request Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_charge_station**
> get_charge_station(id, include_location=include_location, include_evses=include_evses, include_organization=include_organization)



Get a single charge station's data

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
    api_instance = openapi_client.ChargeStationsApi(api_client)
    id = 'id_example' # str | The charge station id that needs to be fetched
    include_location = True # bool | Populate location (optional)
    include_evses = True # bool | Populate evses (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_charge_station(id, include_location=include_location, include_evses=include_evses, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling ChargeStationsApi->get_charge_station: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The charge station id that needs to be fetched | 
 **include_location** | **bool**| Populate location | [optional] 
 **include_evses** | **bool**| Populate evses | [optional] 
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
**200** | Returns a chargestion object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_charge_station_connectors**
> get_charge_station_connectors(id, include_evse=include_evse, include_organization=include_organization)



List connectors for a chargestation

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
    api_instance = openapi_client.ChargeStationsApi(api_client)
    id = 'id_example' # str | chargeStation id
    include_evse = True # bool | Populate evse (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_charge_station_connectors(id, include_evse=include_evse, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling ChargeStationsApi->get_charge_station_connectors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| chargeStation id | 
 **include_evse** | **bool**| Populate evse | [optional] 
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
**200** | Returns an array of connector objects |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_charge_stations**
> get_charge_stations(organization=organization, location=location, online=online, active=active, public=public, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_location=include_location, include_evses=include_evses, include_organization=include_organization)



List all Chargestations

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
    api_instance = openapi_client.ChargeStationsApi(api_client)
    organization = 'organization_example' # str | Filter by Org. Id (optional)
    location = 'location_example' # str | Filter by Location Id (optional)
    online = True # bool | Filter by Online Status (optional)
    active = True # bool | Chargestations that have been activated/deactivated by the admin (optional)
    public = True # bool | Chargestations that are public (optional)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_location = True # bool | Populate location (optional)
    include_evses = True # bool | Populate evses (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_charge_stations(organization=organization, location=location, online=online, active=active, public=public, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_location=include_location, include_evses=include_evses, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling ChargeStationsApi->get_charge_stations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **str**| Filter by Org. Id | [optional] 
 **location** | **str**| Filter by Location Id | [optional] 
 **online** | **bool**| Filter by Online Status | [optional] 
 **active** | **bool**| Chargestations that have been activated/deactivated by the admin | [optional] 
 **public** | **bool**| Chargestations that are public | [optional] 
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_location** | **bool**| Populate location | [optional] 
 **include_evses** | **bool**| Populate evses | [optional] 
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
**200** | An array of chargestation objects |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_charge_station**
> PatchChargeStation200Response patch_charge_station(id, schema1)



Update a charge station's data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.schema1 import Schema1
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
    api_instance = openapi_client.ChargeStationsApi(api_client)
    id = 'id_example' # str | ID of charge station that needs to be updated
    schema1 = openapi_client.Schema1() # Schema1 | Include charge station properties to update here

    try:
        api_response = api_instance.patch_charge_station(id, schema1)
        print("The response of ChargeStationsApi->patch_charge_station:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeStationsApi->patch_charge_station: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of charge station that needs to be updated | 
 **schema1** | [**Schema1**](Schema1.md)| Include charge station properties to update here | 

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
**200** | Returns the updated chargestion object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_charge_stations**
> PostChargeStations201Response post_charge_stations(schema1)



Create a new charge station

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.post_charge_stations201_response import PostChargeStations201Response
from openapi_client.models.schema1 import Schema1
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
    api_instance = openapi_client.ChargeStationsApi(api_client)
    schema1 = openapi_client.Schema1() # Schema1 | Include charge station properties to create here

    try:
        api_response = api_instance.post_charge_stations(schema1)
        print("The response of ChargeStationsApi->post_charge_stations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChargeStationsApi->post_charge_stations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schema1** | [**Schema1**](Schema1.md)| Include charge station properties to create here | 

### Return type

[**PostChargeStations201Response**](PostChargeStations201Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the newly created chargestion object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

