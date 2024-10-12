# openapi_client.UnitClassApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**unit_class_create_unit**](UnitClassApi.md#unit_class_create_unit) | **POST** /unitclasses/{webId}/units | Create a unit in the specified Unit Class.
[**unit_class_delete**](UnitClassApi.md#unit_class_delete) | **DELETE** /unitclasses/{webId} | Delete a unit class.
[**unit_class_get**](UnitClassApi.md#unit_class_get) | **GET** /unitclasses/{webId} | Retrieve a unit class.
[**unit_class_get_by_path**](UnitClassApi.md#unit_class_get_by_path) | **GET** /unitclasses | Retrieve a unit class by path.
[**unit_class_get_canonical_unit**](UnitClassApi.md#unit_class_get_canonical_unit) | **GET** /unitclasses/{webId}/canonicalunit | Get the canonical unit of a unit class.
[**unit_class_get_units**](UnitClassApi.md#unit_class_get_units) | **GET** /unitclasses/{webId}/units | Get a list of all units belonging to the unit class.
[**unit_class_update**](UnitClassApi.md#unit_class_update) | **PATCH** /unitclasses/{webId} | Update a unit class.


# **unit_class_create_unit**
> unit_class_create_unit(web_id, unit_dto, web_id_type=web_id_type)

Create a unit in the specified Unit Class.

### Example


```python
import openapi_client
from openapi_client.models.unit import Unit
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
    api_instance = openapi_client.UnitClassApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    unit_dto = openapi_client.Unit() # Unit | The new unit definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a unit in the specified Unit Class.
        api_instance.unit_class_create_unit(web_id, unit_dto, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_create_unit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **unit_dto** | [**Unit**](Unit.md)| The new unit definition. | 
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
**201** | The unit was created. The response&#39;s Location header is a link to the unit. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unit_class_delete**
> unit_class_delete(web_id)

Delete a unit class.

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
    api_instance = openapi_client.UnitClassApi(api_client)
    web_id = 'web_id_example' # str | The ID of the unit class.

    try:
        # Delete a unit class.
        api_instance.unit_class_delete(web_id)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the unit class. | 

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
**204** | The unit class was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unit_class_get**
> UnitClass unit_class_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a unit class.

### Example


```python
import openapi_client
from openapi_client.models.unit_class import UnitClass
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
    api_instance = openapi_client.UnitClassApi(api_client)
    web_id = 'web_id_example' # str | The ID of the unit class.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a unit class.
        api_response = api_instance.unit_class_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of UnitClassApi->unit_class_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the unit class. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**UnitClass**](UnitClass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified unit class. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unit_class_get_by_path**
> UnitClass unit_class_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a unit class by path.

### Example


```python
import openapi_client
from openapi_client.models.unit_class import UnitClass
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
    api_instance = openapi_client.UnitClassApi(api_client)
    path = 'path_example' # str | The path to the unit class.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a unit class by path.
        api_response = api_instance.unit_class_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of UnitClassApi->unit_class_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the unit class. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**UnitClass**](UnitClass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified unit class. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unit_class_get_canonical_unit**
> Unit unit_class_get_canonical_unit(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get the canonical unit of a unit class.

### Example


```python
import openapi_client
from openapi_client.models.unit import Unit
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
    api_instance = openapi_client.UnitClassApi(api_client)
    web_id = 'web_id_example' # str | The ID of unit class.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the canonical unit of a unit class.
        api_response = api_instance.unit_class_get_canonical_unit(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of UnitClassApi->unit_class_get_canonical_unit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_get_canonical_unit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of unit class. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Unit**](Unit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the canonical unit of the specified unit class. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unit_class_get_units**
> Unit unit_class_get_units(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get a list of all units belonging to the unit class.

### Example


```python
import openapi_client
from openapi_client.models.unit import Unit
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
    api_instance = openapi_client.UnitClassApi(api_client)
    web_id = 'web_id_example' # str | The ID of unit class.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get a list of all units belonging to the unit class.
        api_response = api_instance.unit_class_get_units(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of UnitClassApi->unit_class_get_units:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_get_units: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of unit class. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Unit**](Unit.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of units in the unit class. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unit_class_update**
> unit_class_update(web_id, unit_class_dto)

Update a unit class.

### Example


```python
import openapi_client
from openapi_client.models.unit_class import UnitClass
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
    api_instance = openapi_client.UnitClassApi(api_client)
    web_id = 'web_id_example' # str | The ID of the unit class.
    unit_class_dto = openapi_client.UnitClass() # UnitClass | A partial unit class containing the desired changes.

    try:
        # Update a unit class.
        api_instance.unit_class_update(web_id, unit_class_dto)
    except Exception as e:
        print("Exception when calling UnitClassApi->unit_class_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the unit class. | 
 **unit_class_dto** | [**UnitClass**](UnitClass.md)| A partial unit class containing the desired changes. | 

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
**204** | The unit class was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

