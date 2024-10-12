# openapi_client.PointApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**point_delete**](PointApi.md#point_delete) | **DELETE** /points/{webId} | Delete a point.
[**point_get**](PointApi.md#point_get) | **GET** /points/{webId} | Get a point.
[**point_get_attribute_by_name**](PointApi.md#point_get_attribute_by_name) | **GET** /points/{webId}/attributes/{name} | Get a point attribute by name.
[**point_get_attributes**](PointApi.md#point_get_attributes) | **GET** /points/{webId}/attributes | Get point attributes.
[**point_get_by_path**](PointApi.md#point_get_by_path) | **GET** /points | Get a point by path.
[**point_get_multiple**](PointApi.md#point_get_multiple) | **GET** /points/multiple | Retrieve multiple points by web id or path.
[**point_update**](PointApi.md#point_update) | **PATCH** /points/{webId} | Update a point. The only PI Point attributes that can be updated include: Name, Descriptor, EngineeringUnits, Step, and DisplayDigits. Other PI Point attributes cannot be updated through PI Web API.


# **point_delete**
> point_delete(web_id)

Delete a point.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    web_id = 'web_id_example' # str | The ID of the point.

    try:
        # Delete a point.
        api_instance.point_delete(web_id)
    except Exception as e:
        print("Exception when calling PointApi->point_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the point. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The point was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point_get**
> Point point_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get a point.

### Example


```python
import openapi_client
from openapi_client.models.point import Point
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    web_id = 'web_id_example' # str | The ID of the point.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get a point.
        api_response = api_instance.point_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of PointApi->point_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointApi->point_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the point. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Point**](Point.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified point. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point_get_attribute_by_name**
> PointAttribute point_get_attribute_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get a point attribute by name.

### Example


```python
import openapi_client
from openapi_client.models.point_attribute import PointAttribute
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    name = 'name_example' # str | The name of the attribute.
    web_id = 'web_id_example' # str | The ID of the point.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get a point attribute by name.
        api_response = api_instance.point_get_attribute_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of PointApi->point_get_attribute_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointApi->point_get_attribute_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the attribute. | 
 **web_id** | **str**| The ID of the point. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**PointAttribute**](PointAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A point attribute specified by its name. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point_get_attributes**
> ItemsPointAttribute point_get_attributes(web_id, name=name, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)

Get point attributes.

### Example


```python
import openapi_client
from openapi_client.models.items_point_attribute import ItemsPointAttribute
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    web_id = 'web_id_example' # str | The ID of the point.
    name = ['name_example'] # List[str] | The name of a point attribute to be returned. Multiple attributes may be specified with multiple instances of the parameter. (optional)
    name_filter = 'name_filter_example' # str | The filter to the names of the list of point attributes to be returned. The default is no filter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get point attributes.
        api_response = api_instance.point_get_attributes(web_id, name=name, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of PointApi->point_get_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointApi->point_get_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the point. | 
 **name** | [**List[str]**](str.md)| The name of a point attribute to be returned. Multiple attributes may be specified with multiple instances of the parameter. | [optional] 
 **name_filter** | **str**| The filter to the names of the list of point attributes to be returned. The default is no filter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsPointAttribute**](ItemsPointAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of point attributes based on the specified names and name filter. |  -  |
**400** | Some or all of the point attribute names could not be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point_get_by_path**
> Point point_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Get a point by path.

This method returns a PI Point based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.point import Point
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    path = 'path_example' # str | The path to the point.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get a point by path.
        api_response = api_instance.point_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of PointApi->point_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointApi->point_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the point. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Point**](Point.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified point. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point_get_multiple**
> ItemsItemPoint point_get_multiple(as_parallel=as_parallel, include_mode=include_mode, path=path, selected_fields=selected_fields, web_id=web_id, web_id_type=web_id_type)

Retrieve multiple points by web id or path.

### Example


```python
import openapi_client
from openapi_client.models.items_item_point import ItemsItemPoint
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    as_parallel = True # bool | Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested points. The default is 'false'. (optional)
    include_mode = 'include_mode_example' # str | The include mode for the return list. The default is 'All'. (optional)
    path = ['path_example'] # List[str] | The path of a point. Multiple points may be specified with multiple instances of the parameter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id = ['web_id_example'] # List[str] | The ID of a point. Multiple points may be specified with multiple instances of the parameter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve multiple points by web id or path.
        api_response = api_instance.point_get_multiple(as_parallel=as_parallel, include_mode=include_mode, path=path, selected_fields=selected_fields, web_id=web_id, web_id_type=web_id_type)
        print("The response of PointApi->point_get_multiple:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PointApi->point_get_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **as_parallel** | **bool**| Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested points. The default is &#39;false&#39;. | [optional] 
 **include_mode** | **str**| The include mode for the return list. The default is &#39;All&#39;. | [optional] 
 **path** | [**List[str]**](str.md)| The path of a point. Multiple points may be specified with multiple instances of the parameter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id** | [**List[str]**](str.md)| The ID of a point. Multiple points may be specified with multiple instances of the parameter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsItemPoint**](ItemsItemPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested points |  -  |
**207** | Some or all items contain exceptions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point_update**
> point_update(web_id, point_dto)

Update a point. The only PI Point attributes that can be updated include: Name, Descriptor, EngineeringUnits, Step, and DisplayDigits. Other PI Point attributes cannot be updated through PI Web API.

### Example


```python
import openapi_client
from openapi_client.models.point import Point
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PointApi(api_client)
    web_id = 'web_id_example' # str | The ID of the point.
    point_dto = openapi_client.Point() # Point | A partial point containing the desired changes.

    try:
        # Update a point. The only PI Point attributes that can be updated include: Name, Descriptor, EngineeringUnits, Step, and DisplayDigits. Other PI Point attributes cannot be updated through PI Web API.
        api_instance.point_update(web_id, point_dto)
    except Exception as e:
        print("Exception when calling PointApi->point_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the point. | 
 **point_dto** | [**Point**](Point.md)| A partial point containing the desired changes. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The point was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

