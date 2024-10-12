# openapi_client.DriversApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_driver**](DriversApi.md#delete_driver) | **DELETE** /v1/drivers/{id} | 
[**get_driver**](DriversApi.md#get_driver) | **GET** /v1/drivers/{id} | 
[**get_drivers**](DriversApi.md#get_drivers) | **GET** /v1/drivers | 
[**patch_driver**](DriversApi.md#patch_driver) | **PATCH** /v1/drivers/{id} | 
[**post_drivers**](DriversApi.md#post_drivers) | **POST** /v1/drivers | 


# **delete_driver**
> delete_driver(id)



Delete a driver

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
    api_instance = openapi_client.DriversApi(api_client)
    id = 'id_example' # str | The driver id that needs to be deleted

    try:
        api_instance.delete_driver(id)
    except Exception as e:
        print("Exception when calling DriversApi->delete_driver: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The driver id that needs to be deleted | 

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
**200** | Returns the deleted driver object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_driver**
> get_driver(id, include_tokens=include_tokens, include_group=include_group, include_organization=include_organization)



Get a driver's data

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
    api_instance = openapi_client.DriversApi(api_client)
    id = 'id_example' # str | The driver id that needs to be fetched
    include_tokens = True # bool | Populate tokens (optional)
    include_group = True # bool | Populate group (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_instance.get_driver(id, include_tokens=include_tokens, include_group=include_group, include_organization=include_organization)
    except Exception as e:
        print("Exception when calling DriversApi->get_driver: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The driver id that needs to be fetched | 
 **include_tokens** | **bool**| Populate tokens | [optional] 
 **include_group** | **bool**| Populate group | [optional] 
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
**200** | Returns a driver object |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_drivers**
> GetDrivers200Response get_drivers(active=active, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_tokens=include_tokens, include_group=include_group, include_organization=include_organization)



List all drivers

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
    api_instance = openapi_client.DriversApi(api_client)
    active = True # bool | Get a list of active drivers (optional)
    paginate_limit = 20 # int | Number of results per page (optional) (default to 20)
    paginate_page = 'paginate_page_example' # str | The queried page index (optional)
    paginate_enabled = True # bool | Enable pagination (optional) (default to True)
    sort_by = 'createdAt' # str | Sort data by this key (optional) (default to 'createdAt')
    sort_order = desc # str | asc to sort ascending (default is desc - descending) (optional) (default to desc)
    created_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    created_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_gte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    updated_at_lte = '2013-10-20T19:20:30+01:00' # datetime | Date as ISO String (optional)
    include_tokens = True # bool | Populate tokens (optional)
    include_group = True # bool | Populate group (optional)
    include_organization = True # bool | Populate organization (optional)

    try:
        api_response = api_instance.get_drivers(active=active, paginate_limit=paginate_limit, paginate_page=paginate_page, paginate_enabled=paginate_enabled, sort_by=sort_by, sort_order=sort_order, created_at_gte=created_at_gte, created_at_lte=created_at_lte, updated_at_gte=updated_at_gte, updated_at_lte=updated_at_lte, include_tokens=include_tokens, include_group=include_group, include_organization=include_organization)
        print("The response of DriversApi->get_drivers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DriversApi->get_drivers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **active** | **bool**| Get a list of active drivers | [optional] 
 **paginate_limit** | **int**| Number of results per page | [optional] [default to 20]
 **paginate_page** | **str**| The queried page index | [optional] 
 **paginate_enabled** | **bool**| Enable pagination | [optional] [default to True]
 **sort_by** | **str**| Sort data by this key | [optional] [default to &#39;createdAt&#39;]
 **sort_order** | **str**| asc to sort ascending (default is desc - descending) | [optional] [default to desc]
 **created_at_gte** | **datetime**| Date as ISO String | [optional] 
 **created_at_lte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_gte** | **datetime**| Date as ISO String | [optional] 
 **updated_at_lte** | **datetime**| Date as ISO String | [optional] 
 **include_tokens** | **bool**| Populate tokens | [optional] 
 **include_group** | **bool**| Populate group | [optional] 
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
**200** | Returns a list of driver objects |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_driver**
> GetDrivers200Response patch_driver(id, patch_driver_request)



Update a driver's data

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.get_drivers200_response import GetDrivers200Response
from openapi_client.models.patch_driver_request import PatchDriverRequest
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
    api_instance = openapi_client.DriversApi(api_client)
    id = 'id_example' # str | ID of driver that needs to be updated
    patch_driver_request = openapi_client.PatchDriverRequest() # PatchDriverRequest | Include driver properties to create here

    try:
        api_response = api_instance.patch_driver(id, patch_driver_request)
        print("The response of DriversApi->patch_driver:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DriversApi->patch_driver: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of driver that needs to be updated | 
 **patch_driver_request** | [**PatchDriverRequest**](PatchDriverRequest.md)| Include driver properties to create here | 

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
**200** | Returns the updated driver object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_drivers**
> PatchChargeStation200Response post_drivers(post_drivers_request)



Create a new driver

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.patch_charge_station200_response import PatchChargeStation200Response
from openapi_client.models.post_drivers_request import PostDriversRequest
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
    api_instance = openapi_client.DriversApi(api_client)
    post_drivers_request = openapi_client.PostDriversRequest() # PostDriversRequest | Include driver properties to create here

    try:
        api_response = api_instance.post_drivers(post_drivers_request)
        print("The response of DriversApi->post_drivers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DriversApi->post_drivers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_drivers_request** | [**PostDriversRequest**](PostDriversRequest.md)| Include driver properties to create here | 

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
**200** | Returns the newly created driver object |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

