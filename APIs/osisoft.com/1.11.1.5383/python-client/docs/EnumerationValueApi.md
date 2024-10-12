# openapi_client.EnumerationValueApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enumeration_value_delete_enumeration_value**](EnumerationValueApi.md#enumeration_value_delete_enumeration_value) | **DELETE** /enumerationvalues/{webId} | Delete an enumeration value from an enumeration set.
[**enumeration_value_get**](EnumerationValueApi.md#enumeration_value_get) | **GET** /enumerationvalues/{webId} | Retrieve an enumeration value mapping
[**enumeration_value_get_by_path**](EnumerationValueApi.md#enumeration_value_get_by_path) | **GET** /enumerationvalues | Retrieve an enumeration value by path.
[**enumeration_value_update_enumeration_value**](EnumerationValueApi.md#enumeration_value_update_enumeration_value) | **PATCH** /enumerationvalues/{webId} | Update an enumeration value by replacing items in its definition.


# **enumeration_value_delete_enumeration_value**
> enumeration_value_delete_enumeration_value(web_id)

Delete an enumeration value from an enumeration set.

Deleting a value will remove it from the enumeration set along with any value references within the PI Web API system.

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
    api_instance = openapi_client.EnumerationValueApi(api_client)
    web_id = 'web_id_example' # str | The ID of the enumeration value.

    try:
        # Delete an enumeration value from an enumeration set.
        api_instance.enumeration_value_delete_enumeration_value(web_id)
    except Exception as e:
        print("Exception when calling EnumerationValueApi->enumeration_value_delete_enumeration_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the enumeration value. | 

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
**204** | The enumeration value was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enumeration_value_get**
> EnumerationValue enumeration_value_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an enumeration value mapping

### Example


```python
import openapi_client
from openapi_client.models.enumeration_value import EnumerationValue
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
    api_instance = openapi_client.EnumerationValueApi(api_client)
    web_id = 'web_id_example' # str | The ID of the enumeration value.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an enumeration value mapping
        api_response = api_instance.enumeration_value_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of EnumerationValueApi->enumeration_value_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnumerationValueApi->enumeration_value_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the enumeration value. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**EnumerationValue**](EnumerationValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified enumeration value mapping |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enumeration_value_get_by_path**
> EnumerationValue enumeration_value_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an enumeration value by path.

This method returns a enumeration value based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.enumeration_value import EnumerationValue
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
    api_instance = openapi_client.EnumerationValueApi(api_client)
    path = 'path_example' # str | The path to the target enumeration value.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an enumeration value by path.
        api_response = api_instance.enumeration_value_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of EnumerationValueApi->enumeration_value_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnumerationValueApi->enumeration_value_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the target enumeration value. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**EnumerationValue**](EnumerationValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified enumeration set. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enumeration_value_update_enumeration_value**
> enumeration_value_update_enumeration_value(web_id, enumeration_value)

Update an enumeration value by replacing items in its definition.

### Example


```python
import openapi_client
from openapi_client.models.enumeration_value import EnumerationValue
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
    api_instance = openapi_client.EnumerationValueApi(api_client)
    web_id = 'web_id_example' # str | The ID of the enumeration value to update.
    enumeration_value = openapi_client.EnumerationValue() # EnumerationValue | A partial enumeration value containing the desired changes.

    try:
        # Update an enumeration value by replacing items in its definition.
        api_instance.enumeration_value_update_enumeration_value(web_id, enumeration_value)
    except Exception as e:
        print("Exception when calling EnumerationValueApi->enumeration_value_update_enumeration_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the enumeration value to update. | 
 **enumeration_value** | [**EnumerationValue**](EnumerationValue.md)| A partial enumeration value containing the desired changes. | 

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
**204** | The enumeration set was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

