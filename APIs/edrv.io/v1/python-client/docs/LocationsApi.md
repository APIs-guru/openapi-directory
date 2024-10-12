# openapi_client.LocationsApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_location**](LocationsApi.md#delete_location) | **DELETE** /v1/location/{id} | 
[**get_location**](LocationsApi.md#get_location) | **GET** /v1/location/{id} | 
[**get_locations**](LocationsApi.md#get_locations) | **GET** /v1/locations | 
[**patch_location**](LocationsApi.md#patch_location) | **PATCH** /v1/location/{id} | 
[**post_locations**](LocationsApi.md#post_locations) | **POST** /v1/locations | 


# **delete_location**
> delete_location(id)



Delete a location

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
    api_instance = openapi_client.LocationsApi(api_client)
    id = 'id_example' # str | The location id that needs to be deleted

    try:
        api_instance.delete_location(id)
    except Exception as e:
        print("Exception when calling LocationsApi->delete_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The location id that needs to be deleted | 

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
**200** | Returns the deleted location object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_location**
> get_location(id, include_chargestations=include_chargestations, include_organization=include_organization)



Get a location's data

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
    api_instance = openapi_client.LocationsApi(api_client)
    id = 'id_example' # str | The location id that needs to be fetched
    include_chargestations = True # bool | Populate chargestations (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_location(id, include_chargestations=include_chargestations, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling LocationsApi->get_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The location id that needs to be fetched | 
 **include_chargestations** | **bool**| Populate chargestations | [optional] 
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
**200** | Returns a location object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_locations**
> get_locations(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_organization=include_organization)



Get Locations data

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
    api_instance = openapi_client.LocationsApi(api_client)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_locations(paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling LocationsApi->get_locations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
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
**200** | Success |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_location**
> GetDrivers200Response patch_location(id, patch_location_request)



Update a location's data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_drivers200_response import GetDrivers200Response
from openapi_client.models.patch_location_request import PatchLocationRequest
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
    api_instance = openapi_client.LocationsApi(api_client)
    id = 'id_example' # str | ID of location that needs to be updated
    patch_location_request = openapi_client.PatchLocationRequest() # PatchLocationRequest | Include location properties to create here

    try:
        api_response = api_instance.patch_location(id, patch_location_request)
        print("The response of LocationsApi->patch_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->patch_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of location that needs to be updated | 
 **patch_location_request** | [**PatchLocationRequest**](PatchLocationRequest.md)| Include location properties to create here | 

### Return type

[**GetDrivers200Response**](GetDrivers200Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the updated location object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_locations**
> PatchChargeStation200Response post_locations(post_locations_request)



Create a new location

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.post_locations_request import PostLocationsRequest
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
    api_instance = openapi_client.LocationsApi(api_client)
    post_locations_request = openapi_client.PostLocationsRequest() # PostLocationsRequest | Include location properties to create here

    try:
        api_response = api_instance.post_locations(post_locations_request)
        print("The response of LocationsApi->post_locations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->post_locations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_locations_request** | [**PostLocationsRequest**](PostLocationsRequest.md)| Include location properties to create here | 

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
**200** | Returns the newly created location object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

