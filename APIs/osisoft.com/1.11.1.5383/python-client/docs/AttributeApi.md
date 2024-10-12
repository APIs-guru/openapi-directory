# openapi_client.AttributeApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attribute_create_attribute**](AttributeApi.md#attribute_create_attribute) | **POST** /attributes/{webId}/attributes | Create a new attribute as a child of the specified attribute.
[**attribute_create_config**](AttributeApi.md#attribute_create_config) | **POST** /attributes/{webId}/config | Create or update an attribute&#39;s DataReference configuration (Create/Update PI point for PI Point DataReference).
[**attribute_delete**](AttributeApi.md#attribute_delete) | **DELETE** /attributes/{webId} | Delete an attribute.
[**attribute_get**](AttributeApi.md#attribute_get) | **GET** /attributes/{webId} | Retrieve an attribute.
[**attribute_get_attributes**](AttributeApi.md#attribute_get_attributes) | **GET** /attributes/{webId}/attributes | Get the child attributes of the specified attribute.
[**attribute_get_attributes_query**](AttributeApi.md#attribute_get_attributes_query) | **GET** /attributes/search | Retrieve attributes based on the specified conditions. Returns attributes using the specified search query string.
[**attribute_get_by_path**](AttributeApi.md#attribute_get_by_path) | **GET** /attributes | Retrieve an attribute by path.
[**attribute_get_categories**](AttributeApi.md#attribute_get_categories) | **GET** /attributes/{webId}/categories | Get an attribute&#39;s categories.
[**attribute_get_multiple**](AttributeApi.md#attribute_get_multiple) | **GET** /attributes/multiple | Retrieve multiple attributes by web id or path.
[**attribute_get_value**](AttributeApi.md#attribute_get_value) | **GET** /attributes/{webId}/value | Get the attribute&#39;s value. This call is intended for use with attributes that have no data reference only. For attributes with a data reference, consult the documentation for Streams.
[**attribute_set_value**](AttributeApi.md#attribute_set_value) | **PUT** /attributes/{webId}/value | Set the value of a configuration item attribute. For attributes with a data reference or non-configuration item attributes, consult the documentation for streams.
[**attribute_update**](AttributeApi.md#attribute_update) | **PATCH** /attributes/{webId} | Update an attribute by replacing items in its definition.


# **attribute_create_attribute**
> attribute_create_attribute(web_id, attribute, web_id_type=web_id_type)

Create a new attribute as a child of the specified attribute.

### Example


```python
import openapi_client
from openapi_client.models.attribute import Attribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent attribute on which to create the attribute.
    attribute = openapi_client.Attribute() # Attribute | The definition of the new attribute.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a new attribute as a child of the specified attribute.
        api_instance.attribute_create_attribute(web_id, attribute, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_create_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent attribute on which to create the attribute. | 
 **attribute** | [**Attribute**](Attribute.md)| The definition of the new attribute. | 
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
**201** | The attribute was created. The response&#39;s Location header is a link to the created attribute. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_create_config**
> attribute_create_config(web_id, web_id_type=web_id_type)

Create or update an attribute's DataReference configuration (Create/Update PI point for PI Point DataReference).

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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create or update an attribute's DataReference configuration (Create/Update PI point for PI Point DataReference).
        api_instance.attribute_create_config(web_id, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_create_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

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
**201** | The attribute&#39;s DataReference configuration was created or updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_delete**
> attribute_delete(web_id)

Delete an attribute.

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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.

    try:
        # Delete an attribute.
        api_instance.attribute_delete(web_id)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 

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
**204** | The attribute was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_get**
> Attribute attribute_get(web_id, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an attribute.

### Example


```python
import openapi_client
from openapi_client.models.attribute import Attribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an attribute.
        api_response = api_instance.attribute_get(web_id, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeApi->attribute_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Attribute**](Attribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested attribute. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_get_attributes**
> ItemsAttribute attribute_get_attributes(web_id, associations=associations, category_name=category_name, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, trait=trait, trait_category=trait_category, value_type=value_type, web_id_type=web_id_type)

Get the child attributes of the specified attribute.

### Example


```python
import openapi_client
from openapi_client.models.items_attribute import ItemsAttribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent attribute.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. (optional)
    category_name = 'category_name_example' # str | Specify that returned attributes must have this category. The default is no category filter. (optional)
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for finding attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    template_name = 'template_name_example' # str | Specify that returned attributes must be members of this template. The default is no template filter. (optional)
    trait = ['trait_example'] # List[str] | The name of the attribute trait. Multiple traits may be specified with multiple instances of the parameter. (optional)
    trait_category = ['trait_category_example'] # List[str] | The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is \"all\", then all attribute traits of all categories will be returned. (optional)
    value_type = 'value_type_example' # str | Specify that returned attributes' value type must be the given value type. The default is no value type filter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the child attributes of the specified attribute.
        api_response = api_instance.attribute_get_attributes(web_id, associations=associations, category_name=category_name, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, trait=trait, trait_category=trait_category, value_type=value_type, web_id_type=web_id_type)
        print("The response of AttributeApi->attribute_get_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent attribute. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. | [optional] 
 **category_name** | **str**| Specify that returned attributes must have this category. The default is no category filter. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for finding attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **template_name** | **str**| Specify that returned attributes must be members of this template. The default is no template filter. | [optional] 
 **trait** | [**List[str]**](str.md)| The name of the attribute trait. Multiple traits may be specified with multiple instances of the parameter. | [optional] 
 **trait_category** | [**List[str]**](str.md)| The category of the attribute traits. Multiple categories may be specified with multiple instances of the parameter. If the parameter is not specified, or if its value is \&quot;all\&quot;, then all attribute traits of all categories will be returned. | [optional] 
 **value_type** | **str**| Specify that returned attributes&#39; value type must be the given value type. The default is no value type filter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAttribute**](ItemsAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of child attributes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_get_attributes_query**
> ItemsAttribute attribute_get_attributes_query(associations=associations, database_web_id=database_web_id, max_count=max_count, query=query, selected_fields=selected_fields, start_index=start_index, web_id_type=web_id_type)

Retrieve attributes based on the specified conditions. Returns attributes using the specified search query string.

### Example


```python
import openapi_client
from openapi_client.models.items_attribute import ItemsAttribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. (optional)
    database_web_id = 'database_web_id_example' # str | The ID of the asset database to use as the root of the query. (optional)
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    query = 'query_example' # str | The query string is a list of filters used to perform an AFSearch for the attributes in the asset database. An example would be: \"query=Element:{ Name:='MyElement' } Type:=Int32\". (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve attributes based on the specified conditions. Returns attributes using the specified search query string.
        api_response = api_instance.attribute_get_attributes_query(associations=associations, database_web_id=database_web_id, max_count=max_count, query=query, selected_fields=selected_fields, start_index=start_index, web_id_type=web_id_type)
        print("The response of AttributeApi->attribute_get_attributes_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get_attributes_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. | [optional] 
 **database_web_id** | **str**| The ID of the asset database to use as the root of the query. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **query** | **str**| The query string is a list of filters used to perform an AFSearch for the attributes in the asset database. An example would be: \&quot;query&#x3D;Element:{ Name:&#x3D;&#39;MyElement&#39; } Type:&#x3D;Int32\&quot;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAttribute**](ItemsAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of attributes matching the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_get_by_path**
> Attribute attribute_get_by_path(path, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an attribute by path.

This method returns an attribute based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.attribute import Attribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    path = 'path_example' # str | The path to the attribute.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an attribute by path.
        api_response = api_instance.attribute_get_by_path(path, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeApi->attribute_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the attribute. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Attribute**](Attribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested attribute. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_get_categories**
> ItemsAttributeCategory attribute_get_categories(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get an attribute's categories.

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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get an attribute's categories.
        api_response = api_instance.attribute_get_categories(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AttributeApi->attribute_get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 
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

# **attribute_get_multiple**
> ItemsItemAttribute attribute_get_multiple(as_parallel=as_parallel, associations=associations, include_mode=include_mode, path=path, selected_fields=selected_fields, web_id=web_id, web_id_type=web_id_type)

Retrieve multiple attributes by web id or path.

### Example


```python
import openapi_client
from openapi_client.models.items_item_attribute import ItemsItemAttribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    as_parallel = True # bool | Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'. (optional)
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. (optional)
    include_mode = 'include_mode_example' # str | The include mode for the return list. The default is 'All'. (optional)
    path = ['path_example'] # List[str] | The path of an attribute. Multiple attributes may be specified with multiple instances of the parameter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id = ['web_id_example'] # List[str] | The ID of an attribute. Multiple attributes may be specified with multiple instances of the parameter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve multiple attributes by web id or path.
        api_response = api_instance.attribute_get_multiple(as_parallel=as_parallel, associations=associations, include_mode=include_mode, path=path, selected_fields=selected_fields, web_id=web_id, web_id_type=web_id_type)
        print("The response of AttributeApi->attribute_get_multiple:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **as_parallel** | **bool**| Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is &#39;false&#39;. | [optional] 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. | [optional] 
 **include_mode** | **str**| The include mode for the return list. The default is &#39;All&#39;. | [optional] 
 **path** | [**List[str]**](str.md)| The path of an attribute. Multiple attributes may be specified with multiple instances of the parameter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id** | [**List[str]**](str.md)| The ID of an attribute. Multiple attributes may be specified with multiple instances of the parameter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsItemAttribute**](ItemsItemAttribute.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested attributes |  -  |
**207** | Some or all items contain exceptions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_get_value**
> TimedValue attribute_get_value(web_id, selected_fields=selected_fields)

Get the attribute's value. This call is intended for use with attributes that have no data reference only. For attributes with a data reference, consult the documentation for Streams.

### Example


```python
import openapi_client
from openapi_client.models.timed_value import TimedValue
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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)

    try:
        # Get the attribute's value. This call is intended for use with attributes that have no data reference only. For attributes with a data reference, consult the documentation for Streams.
        api_response = api_instance.attribute_get_value(web_id, selected_fields=selected_fields)
        print("The response of AttributeApi->attribute_get_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_get_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 

### Return type

[**TimedValue**](TimedValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The attribute&#39;s value. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_set_value**
> attribute_set_value(web_id, value)

Set the value of a configuration item attribute. For attributes with a data reference or non-configuration item attributes, consult the documentation for streams.

Users must be aware of the value type that the attribute takes before changing the value. If a value entered by the user does not match the value type expressed in the attribute, it will not work or it will return an error. Users should also be careful of what the value type means, for instance, if a value type accepts strings and the user enters a number, the attribute will interpret it as a string of characters and not as the integer value that the user may have wanted.

### Example


```python
import openapi_client
from openapi_client.models.timed_value import TimedValue
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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.
    value = openapi_client.TimedValue() # TimedValue | The value to write.

    try:
        # Set the value of a configuration item attribute. For attributes with a data reference or non-configuration item attributes, consult the documentation for streams.
        api_instance.attribute_set_value(web_id, value)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_set_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 
 **value** | [**TimedValue**](TimedValue.md)| The value to write. | 

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
**204** | The value was set successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **attribute_update**
> attribute_update(web_id, attribute)

Update an attribute by replacing items in its definition.

If an attribute is based on a template, the user must make sure to update the attribute appropriately so that it does not conflict with the template's design. Once a template is applied to an attribute, it can not be changed.

### Example


```python
import openapi_client
from openapi_client.models.attribute import Attribute
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
    api_instance = openapi_client.AttributeApi(api_client)
    web_id = 'web_id_example' # str | The ID of the attribute.
    attribute = openapi_client.Attribute() # Attribute | A partial attribute containing the desired changes.

    try:
        # Update an attribute by replacing items in its definition.
        api_instance.attribute_update(web_id, attribute)
    except Exception as e:
        print("Exception when calling AttributeApi->attribute_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the attribute. | 
 **attribute** | [**Attribute**](Attribute.md)| A partial attribute containing the desired changes. | 

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
**204** | The attribute was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

