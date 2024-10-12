# openapi_client.AttributeTemplateApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attribute_template_create_attribute_template**](AttributeTemplateApi.md#attribute_template_create_attribute_template) | **POST** /attributetemplates/{webId}/attributetemplates | Create an attribute template as a child of another attribute template.
[**attribute_template_delete**](AttributeTemplateApi.md#attribute_template_delete) | **DELETE** /attributetemplates/{webId} | Delete an attribute template.
[**attribute_template_get**](AttributeTemplateApi.md#attribute_template_get) | **GET** /attributetemplates/{webId} | Retrieve an attribute template.
[**attribute_template_get_attribute_templates**](AttributeTemplateApi.md#attribute_template_get_attribute_templates) | **GET** /attributetemplates/{webId}/attributetemplates | Retrieve an attribute template&#39;s child attribute templates.
[**attribute_template_get_by_path**](AttributeTemplateApi.md#attribute_template_get_by_path) | **GET** /attributetemplates | Retrieve an attribute template by path.
[**attribute_template_get_categories**](AttributeTemplateApi.md#attribute_template_get_categories) | **GET** /attributetemplates/{webId}/categories | Get an attribute template&#39;s categories.
[**attribute_template_update**](AttributeTemplateApi.md#attribute_template_update) | **PATCH** /attributetemplates/{webId} | Update an existing attribute template by replacing items in its definition.


# **attribute_template_create_attribute_template**
> attribute_template_create_attribute_template(web_id, template, web_id_type=web_id_type)

Create an attribute template as a child of another attribute template.

### Example


```python
import openapi_client
from openapi_client.models.attribute_template import AttributeTemplate
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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent attribute template on which to create the attribute template.
    template = openapi_client.AttributeTemplate() # AttributeTemplate | The attribute template definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create an attribute template as a child of another attribute template.
        api_instance.attribute_template_create_attribute_template(web_id, template, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_create_attribute_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent attribute template on which to create the attribute template. | 
 **template** | [**AttributeTemplate**](AttributeTemplate.md)| The attribute template definition. | 
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
**201** | The attribute template was created. The response&#39;s Location header is a link to the created resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_template_delete**
> attribute_template_delete(web_id)

Delete an attribute template.

Deleting an attribute template will delete the attributes that were created based on the template

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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute template.

    try:
        # Delete an attribute template.
        api_instance.attribute_template_delete(web_id)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute template. | 

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
**204** | The attribute template was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_template_get**
> AttributeTemplate attribute_template_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an attribute template.

### Example


```python
import openapi_client
from openapi_client.models.attribute_template import AttributeTemplate
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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an attribute template.
        api_response = api_instance.attribute_template_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeTemplateApi->attribute_template_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AttributeTemplate**](AttributeTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified attribute template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_template_get_attribute_templates**
> ItemsAttributeTemplate attribute_template_get_attribute_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an attribute template's child attribute templates.

### Example


```python
import openapi_client
from openapi_client.models.items_attribute_template import ItemsAttributeTemplate
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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an attribute template's child attribute templates.
        api_response = api_instance.attribute_template_get_attribute_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeTemplateApi->attribute_template_get_attribute_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_get_attribute_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAttributeTemplate**](ItemsAttributeTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of child attribute templates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_template_get_by_path**
> AttributeTemplate attribute_template_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an attribute template by path.

This method returns an attribute template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.attribute_template import AttributeTemplate
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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    path = 'path_example' # str | The path to the attribute template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an attribute template by path.
        api_response = api_instance.attribute_template_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeTemplateApi->attribute_template_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the attribute template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AttributeTemplate**](AttributeTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified attribute template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_template_get_categories**
> ItemsAttributeCategory attribute_template_get_categories(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get an attribute template's categories.

### Example


```python
import openapi_client
from openapi_client.models.items_attribute_category import ItemsAttributeCategory
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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get an attribute template's categories.
        api_response = api_instance.attribute_template_get_categories(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeTemplateApi->attribute_template_get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_get_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAttributeCategory**](ItemsAttributeCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of categories. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_template_update**
> attribute_template_update(web_id, template)

Update an existing attribute template by replacing items in its definition.

Updating an attribute template will propagate changes to the attributes that were created based on the template

### Example


```python
import openapi_client
from openapi_client.models.attribute_template import AttributeTemplate
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
    api_instance = openapi_client.AttributeTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute template.
    template = openapi_client.AttributeTemplate() # AttributeTemplate | A partial attribute template containing the desired changes.

    try:
        # Update an existing attribute template by replacing items in its definition.
        api_instance.attribute_template_update(web_id, template)
    except Exception as e:
        print("Exception when calling AttributeTemplateApi->attribute_template_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute template. | 
 **template** | [**AttributeTemplate**](AttributeTemplate.md)| A partial attribute template containing the desired changes. | 

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
**204** | The attribute template was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

