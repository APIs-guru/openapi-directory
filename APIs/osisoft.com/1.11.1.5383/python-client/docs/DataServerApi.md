# openapi_client.DataServerApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_server_create_enumeration_set**](DataServerApi.md#data_server_create_enumeration_set) | **POST** /dataservers/{webId}/enumerationsets | Create an enumeration set on the Data Server.
[**data_server_create_point**](DataServerApi.md#data_server_create_point) | **POST** /dataservers/{webId}/points | Create a point in the specified Data Server.
[**data_server_get**](DataServerApi.md#data_server_get) | **GET** /dataservers/{webId} | Retrieve a Data Server.
[**data_server_get_by_name**](DataServerApi.md#data_server_get_by_name) | **GET** /dataservers#name | Retrieve a Data Server by name.
[**data_server_get_by_path**](DataServerApi.md#data_server_get_by_path) | **GET** /dataservers#path | Retrieve a Data Server by path.
[**data_server_get_enumeration_sets**](DataServerApi.md#data_server_get_enumeration_sets) | **GET** /dataservers/{webId}/enumerationsets | Retrieve enumeration sets for given Data Server.
[**data_server_get_license**](DataServerApi.md#data_server_get_license) | **GET** /dataservers/{webId}/license | Retrieves the specified license for the given Data Server. The fields of the response object are string representations of the numerical values reported by the Data Server, with \&quot;Infinity\&quot; representing a license field with no limit.
[**data_server_get_points**](DataServerApi.md#data_server_get_points) | **GET** /dataservers/{webId}/points | Retrieve a list of points on a specified Data Server.
[**data_server_list**](DataServerApi.md#data_server_list) | **GET** /dataservers | Retrieve a list of Data Servers known to this service.


# **data_server_create_enumeration_set**
> data_server_create_enumeration_set(web_id, enumeration_set, web_id_type=web_id_type)

Create an enumeration set on the Data Server.

### Example


```python
import openapi_client
from openapi_client.models.enumeration_set import EnumerationSet
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
    api_instance = openapi_client.DataServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server on which to create the enumeration set.
    enumeration_set = openapi_client.EnumerationSet() # EnumerationSet | The new enumeration set definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create an enumeration set on the Data Server.
        api_instance.data_server_create_enumeration_set(web_id, enumeration_set, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_create_enumeration_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server on which to create the enumeration set. | 
 **enumeration_set** | [**EnumerationSet**](EnumerationSet.md)| The new enumeration set definition. | 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

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
**201** | The enumeration was created. The response&#39;s Location header is a link to the created enumeration set. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_create_point**
> data_server_create_point(web_id, point_dto, web_id_type=web_id_type)

Create a point in the specified Data Server.

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
    api_instance = openapi_client.DataServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    point_dto = openapi_client.Point() # Point | The new point definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a point in the specified Data Server.
        api_instance.data_server_create_point(web_id, point_dto, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_create_point: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **point_dto** | [**Point**](Point.md)| The new point definition. | 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

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
**201** | The point was created. The response&#39;s Location header is a link to the point. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_get**
> DataServer data_server_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a Data Server.

### Example


```python
import openapi_client
from openapi_client.models.data_server import DataServer
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
    api_instance = openapi_client.DataServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a Data Server.
        api_response = api_instance.data_server_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**DataServer**](DataServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_get_by_name**
> DataServer data_server_get_by_name(name, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a Data Server by name.

This method returns a data server based on the name. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.data_server import DataServer
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
    api_instance = openapi_client.DataServerApi(api_client)
    name = 'name_example' # str | The name of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a Data Server by name.
        api_response = api_instance.data_server_get_by_name(name, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_get_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_get_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**DataServer**](DataServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_get_by_path**
> DataServer data_server_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a Data Server by path.

This method returns a data server based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.data_server import DataServer
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
    api_instance = openapi_client.DataServerApi(api_client)
    path = 'path_example' # str | The path to the server. Note that the path supplied to this method must be of the form '\\\\servername'.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a Data Server by path.
        api_response = api_instance.data_server_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the server. Note that the path supplied to this method must be of the form &#39;\\\\servername&#39;. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**DataServer**](DataServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_get_enumeration_sets**
> ItemsEnumerationSet data_server_get_enumeration_sets(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve enumeration sets for given Data Server.

### Example


```python
import openapi_client
from openapi_client.models.items_enumeration_set import ItemsEnumerationSet
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
    api_instance = openapi_client.DataServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve enumeration sets for given Data Server.
        api_response = api_instance.data_server_get_enumeration_sets(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_get_enumeration_sets:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_get_enumeration_sets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsEnumerationSet**](ItemsEnumerationSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified enumeration sets. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_get_license**
> DataServerLicense data_server_get_license(web_id, module, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieves the specified license for the given Data Server. The fields of the response object are string representations of the numerical values reported by the Data Server, with \"Infinity\" representing a license field with no limit.

### Example


```python
import openapi_client
from openapi_client.models.data_server_license import DataServerLicense
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
    api_instance = openapi_client.DataServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    module = 'module_example' # str | The case-sensitive name of the module.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieves the specified license for the given Data Server. The fields of the response object are string representations of the numerical values reported by the Data Server, with \"Infinity\" representing a license field with no limit.
        api_response = api_instance.data_server_get_license(web_id, module, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_get_license:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_get_license: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **module** | **str**| The case-sensitive name of the module. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**DataServerLicense**](DataServerLicense.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified license. |  -  |
**404** | No license with the specified module name existed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_get_points**
> ItemsPoint data_server_get_points(web_id, max_count=max_count, name_filter=name_filter, selected_fields=selected_fields, start_index=start_index, web_id_type=web_id_type)

Retrieve a list of points on a specified Data Server.

Users can search for the data servers based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the data servers that match the default search.

### Example


```python
import openapi_client
from openapi_client.models.items_point import ItemsPoint
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
    api_instance = openapi_client.DataServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | A query string for filtering by point name. The default is no filter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is '0'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of points on a specified Data Server.
        api_response = api_instance.data_server_get_points(web_id, max_count=max_count, name_filter=name_filter, selected_fields=selected_fields, start_index=start_index, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_get_points:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_get_points: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **name_filter** | **str**| A query string for filtering by point name. The default is no filter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is &#39;0&#39;. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsPoint**](ItemsPoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of matching points. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_server_list**
> ItemsDataServer data_server_list(selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of Data Servers known to this service.

This method returns a list of all available known Data Servers that the user can connect to. Even though a server may be returned in the list, the user may not have permission to access it.

### Example


```python
import openapi_client
from openapi_client.models.items_data_server import ItemsDataServer
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
    api_instance = openapi_client.DataServerApi(api_client)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of Data Servers known to this service.
        api_response = api_instance.data_server_list(selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of DataServerApi->data_server_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataServerApi->data_server_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsDataServer**](ItemsDataServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all known servers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

