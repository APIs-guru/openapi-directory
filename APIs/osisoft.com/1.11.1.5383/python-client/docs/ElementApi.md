# openapi_client.ElementApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**element_add_referenced_element**](ElementApi.md#element_add_referenced_element) | **POST** /elements/{webId}/referencedelements | Add a reference to an existing element to the child elements collection.
[**element_create_analysis**](ElementApi.md#element_create_analysis) | **POST** /elements/{webId}/analyses | Create an Analysis.
[**element_create_attribute**](ElementApi.md#element_create_attribute) | **POST** /elements/{webId}/attributes | Create a new attribute of the specified element.
[**element_create_config**](ElementApi.md#element_create_config) | **POST** /elements/{webId}/config | Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.
[**element_create_element**](ElementApi.md#element_create_element) | **POST** /elements/{webId}/elements | Create a child element.
[**element_create_notification_rule**](ElementApi.md#element_create_notification_rule) | **POST** /elements/{webId}/notificationrules | Create a notification rule.
[**element_create_search_by_attribute**](ElementApi.md#element_create_search_by_attribute) | **POST** /elements/searchbyattribute | Create a link for a \&quot;Search Elements By Attribute Value\&quot; operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.
[**element_create_security_entry**](ElementApi.md#element_create_security_entry) | **POST** /elements/{webId}/securityentries | Create a security entry owned by the element.
[**element_delete**](ElementApi.md#element_delete) | **DELETE** /elements/{webId} | Delete an element.
[**element_delete_security_entry**](ElementApi.md#element_delete_security_entry) | **DELETE** /elements/{webId}/securityentries/{name} | Delete a security entry owned by the element.
[**element_execute_search_by_attribute**](ElementApi.md#element_execute_search_by_attribute) | **GET** /elements/searchbyattribute/{searchId} | Execute a \&quot;Search Elements By Attribute Value\&quot; operation.
[**element_find_element_attributes**](ElementApi.md#element_find_element_attributes) | **GET** /elements/{webId}/elementattributes | Retrieves a list of element attributes matching the specified filters from the specified element.
[**element_get**](ElementApi.md#element_get) | **GET** /elements/{webId} | Retrieve an element.
[**element_get_analyses**](ElementApi.md#element_get_analyses) | **GET** /elements/{webId}/analyses | Retrieve analyses based on the specified conditions.
[**element_get_attributes**](ElementApi.md#element_get_attributes) | **GET** /elements/{webId}/attributes | Get the attributes of the specified element.
[**element_get_by_path**](ElementApi.md#element_get_by_path) | **GET** /elements | Retrieve an element by path.
[**element_get_categories**](ElementApi.md#element_get_categories) | **GET** /elements/{webId}/categories | Get an element&#39;s categories.
[**element_get_elements**](ElementApi.md#element_get_elements) | **GET** /elements/{webId}/elements | Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified element.
[**element_get_elements_query**](ElementApi.md#element_get_elements_query) | **GET** /elements/search | Retrieve elements based on the specified conditions. By default, returns all the elements.
[**element_get_event_frames**](ElementApi.md#element_get_event_frames) | **GET** /elements/{webId}/eventframes | Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element that have been active in the past 8 hours.
[**element_get_multiple**](ElementApi.md#element_get_multiple) | **GET** /elements/multiple | Retrieve multiple elements by web id or path.
[**element_get_notification_rules**](ElementApi.md#element_get_notification_rules) | **GET** /elements/{webId}/notificationrules | Retrieve notification rules for an element
[**element_get_paths**](ElementApi.md#element_get_paths) | **GET** /elements/{webId}/paths | Get a list of the full or relative paths to this element.
[**element_get_referenced_elements**](ElementApi.md#element_get_referenced_elements) | **GET** /elements/{webId}/referencedelements | Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements of the current resource.
[**element_get_security**](ElementApi.md#element_get_security) | **GET** /elements/{webId}/security | Get the security information of the specified security item associated with the element for a specified user.
[**element_get_security_entries**](ElementApi.md#element_get_security_entries) | **GET** /elements/{webId}/securityentries | Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.
[**element_get_security_entry_by_name**](ElementApi.md#element_get_security_entry_by_name) | **GET** /elements/{webId}/securityentries/{name} | Retrieve the security entry associated with the element with the specified name.
[**element_remove_referenced_element**](ElementApi.md#element_remove_referenced_element) | **DELETE** /elements/{webId}/referencedelements | Remove a reference to an existing element from the child elements collection.
[**element_update**](ElementApi.md#element_update) | **PATCH** /elements/{webId} | Update an element by replacing items in its definition.
[**element_update_security_entry**](ElementApi.md#element_update_security_entry) | **PUT** /elements/{webId}/securityentries/{name} | Update a security entry owned by the element.


# **element_add_referenced_element**
> element_add_referenced_element(web_id, referenced_element_web_id, reference_type=reference_type)

Add a reference to an existing element to the child elements collection.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element which the referenced element will be added to.
    referenced_element_web_id = ['referenced_element_web_id_example'] # List[str] | The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.
    reference_type = 'reference_type_example' # str | The name of the reference type between the parent and the referenced element. The default is \"parent-child\". (optional)

    try:
        # Add a reference to an existing element to the child elements collection.
        api_instance.element_add_referenced_element(web_id, referenced_element_web_id, reference_type=reference_type)
    except Exception as e:
        print("Exception when calling ElementApi->element_add_referenced_element: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element which the referenced element will be added to. | 
 **referenced_element_web_id** | [**List[str]**](str.md)| The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter. | 
 **reference_type** | **str**| The name of the reference type between the parent and the referenced element. The default is \&quot;parent-child\&quot;. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The referenced element was successfully added. |  -  |
**409** | The referenced element already exists in the collection. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_create_analysis**
> element_create_analysis(web_id, analysis, web_id_type=web_id_type)

Create an Analysis.

### Example


```python
import openapi_client
from openapi_client.models.analysis import Analysis
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element on which to create the Analysis.
    analysis = openapi_client.Analysis() # Analysis | The new Analysis definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create an Analysis.
        api_instance.element_create_analysis(web_id, analysis, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_analysis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element on which to create the Analysis. | 
 **analysis** | [**Analysis**](Analysis.md)| The new Analysis definition. | 
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
**201** | The Analysis was created. The response&#39;s Location header is a link to the Analysis. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_create_attribute**
> element_create_attribute(web_id, attribute, web_id_type=web_id_type)

Create a new attribute of the specified element.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element on which to create the attribute.
    attribute = openapi_client.Attribute() # Attribute | The definition of the new attribute.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a new attribute of the specified element.
        api_instance.element_create_attribute(web_id, attribute, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element on which to create the attribute. | 
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

# **element_create_config**
> element_create_config(web_id, include_child_elements=include_child_elements)

Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
    include_child_elements = True # bool | If true, includes the child elements of the specified element. (optional)

    try:
        # Executes the create configuration function of the data references found within the attributes of the element, and optionally, its children.
        api_instance.element_create_config(web_id, include_child_elements=include_child_elements)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
 **include_child_elements** | **bool**| If true, includes the child elements of the specified element. | [optional] 

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
**200** | Process log of operations. Operations completed with no errors. |  -  |
**207** | Process log of operations. Operations completed with errors. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_create_element**
> element_create_element(web_id, element, web_id_type=web_id_type)

Create a child element.

### Example


```python
import openapi_client
from openapi_client.models.element import Element
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent element on which to create the element.
    element = openapi_client.Element() # Element | The new element definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a child element.
        api_instance.element_create_element(web_id, element, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_element: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent element on which to create the element. | 
 **element** | [**Element**](Element.md)| The new element definition. | 
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
**201** | The element was created. The response&#39;s Location header is a link to the element. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_create_notification_rule**
> element_create_notification_rule(web_id, notification_rule, web_id_type=web_id_type)

Create a notification rule.

### Example


```python
import openapi_client
from openapi_client.models.notification_rule import NotificationRule
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element on which to create the notification rule.
    notification_rule = openapi_client.NotificationRule() # NotificationRule | The new notification rule.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a notification rule.
        api_instance.element_create_notification_rule(web_id, notification_rule, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_notification_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element on which to create the notification rule. | 
 **notification_rule** | [**NotificationRule**](NotificationRule.md)| The new notification rule. | 
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
**201** | The notification rule was created. The response&#39;s Location header is a link to the notification rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_create_search_by_attribute**
> ItemsElement element_create_search_by_attribute(query, associations=associations, no_results=no_results, web_id_type=web_id_type)

Create a link for a \"Search Elements By Attribute Value\" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.

### Example


```python
import openapi_client
from openapi_client.models.items_element import ItemsElement
from openapi_client.models.search_by_attribute import SearchByAttribute
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
    api_instance = openapi_client.ElementApi(api_client)
    query = openapi_client.SearchByAttribute() # SearchByAttribute | The query of search by attribute.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    no_results = True # bool | If false, the response content will contain the first page of the search results. If true, the response content will be empty. The default is false. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a link for a \"Search Elements By Attribute Value\" operation, whose queries are specified in the request content. The SearchRoot is specified by the Web Id of the root Element. If the SearchRoot is not specified, then the search starts at the Asset Database. ElementTemplate must be provided as the Web ID of the ElementTemplate, which are used to create the Elements. All the attributes in the queries must be defined as AttributeTemplates on the ElementTemplate. An array of attribute value queries are ANDed together to find the desired Element objects. At least one value query must be specified. There are limitations on SearchOperators.
        api_response = api_instance.element_create_search_by_attribute(query, associations=associations, no_results=no_results, web_id_type=web_id_type)
        print("The response of ElementApi->element_create_search_by_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_search_by_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**SearchByAttribute**](SearchByAttribute.md)| The query of search by attribute. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **no_results** | **bool**| If false, the response content will contain the first page of the search results. If true, the response content will be empty. The default is false. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElement**](ItemsElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The link is stored in the response&#39;s \&quot;Location\&quot; header. The response content is the first page of the search result by the default parameters. |  -  |
**400** | Empty or invalid request content. |  -  |
**413** | Request content is too large. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_create_security_entry**
> element_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, web_id_type=web_id_type)

Create a security entry owned by the element.

### Example


```python
import openapi_client
from openapi_client.models.security_entry import SecurityEntry
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element where the security entry will be created.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a security entry owned by the element.
        api_instance.element_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementApi->element_create_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element where the security entry will be created. | 
 **security_entry** | [**SecurityEntry**](SecurityEntry.md)| The new security entry definition. The full list of allow and deny rights must be supplied. | 
 **apply_to_children** | **bool**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. | [optional] 
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
**201** | The security entry was created. The response&#39;s Location header is a link to the security entry. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_delete**
> element_delete(web_id)

Delete an element.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.

    try:
        # Delete an element.
        api_instance.element_delete(web_id)
    except Exception as e:
        print("Exception when calling ElementApi->element_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 

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
**204** | The element was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_delete_security_entry**
> element_delete_security_entry(name, web_id, apply_to_children=apply_to_children)

Delete a security entry owned by the element.

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
    api_instance = openapi_client.ElementApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the element where the security entry will be deleted.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)

    try:
        # Delete a security entry owned by the element.
        api_instance.element_delete_security_entry(name, web_id, apply_to_children=apply_to_children)
    except Exception as e:
        print("Exception when calling ElementApi->element_delete_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the element where the security entry will be deleted. | 
 **apply_to_children** | **bool**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. | [optional] 

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
**204** | The security entry was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_execute_search_by_attribute**
> ItemsElement element_execute_search_by_attribute(search_id, associations=associations, category_name=category_name, description_filter=description_filter, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)

Execute a \"Search Elements By Attribute Value\" operation.

### Example


```python
import openapi_client
from openapi_client.models.items_element import ItemsElement
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
    api_instance = openapi_client.ElementApi(api_client)
    search_id = 'search_id_example' # str | The encoded search Id of the \"Search Elements By Attribute Value\" operation.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    category_name = 'category_name_example' # str | Specify that the owner of the returned attributes must have this category. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. (optional)
    description_filter = 'description_filter_example' # str | The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. (optional)
    max_count = 56 # int | The maximum number of objects to be returned. The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for finding objects. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Execute a \"Search Elements By Attribute Value\" operation.
        api_response = api_instance.element_execute_search_by_attribute(search_id, associations=associations, category_name=category_name, description_filter=description_filter, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)
        print("The response of ElementApi->element_execute_search_by_attribute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_execute_search_by_attribute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_id** | **str**| The encoded search Id of the \&quot;Search Elements By Attribute Value\&quot; operation. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **category_name** | **str**| Specify that the owner of the returned attributes must have this category. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. | [optional] 
 **description_filter** | **str**| The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned. The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for finding objects. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElement**](ItemsElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of matching Elements. |  -  |
**400** | Invalid search Id or search parameters. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_find_element_attributes**
> ItemsAttribute element_find_element_attributes(web_id, associations=associations, attribute_category=attribute_category, attribute_description_filter=attribute_description_filter, attribute_name_filter=attribute_name_filter, attribute_type=attribute_type, element_category=element_category, element_description_filter=element_description_filter, element_name_filter=element_name_filter, element_template=element_template, element_type=element_type, max_count=max_count, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)

Retrieves a list of element attributes matching the specified filters from the specified element.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element to use as the root of the search.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. (optional)
    attribute_category = 'attribute_category_example' # str | Specify that returned attributes must have this category. The default is no filter. (optional)
    attribute_description_filter = 'attribute_description_filter_example' # str | The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. (optional)
    attribute_name_filter = 'attribute_name_filter_example' # str | The attribute name filter string used for finding objects. The default is no filter. (optional)
    attribute_type = 'attribute_type_example' # str | Specify that returned attributes' value type must be this value type. The default is no filter. (optional)
    element_category = 'element_category_example' # str | Specify that the owner of the returned attributes must have this category. The default is no filter. (optional)
    element_description_filter = 'element_description_filter_example' # str | The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. (optional)
    element_name_filter = 'element_name_filter_example' # str | The element name filter string used for finding objects. The default is no filter. (optional)
    element_template = 'element_template_example' # str | Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter. (optional)
    element_type = 'element_type_example' # str | Specify that the element of the returned attributes must have this AFElementType. The default is no filter. (optional)
    max_count = 56 # int | The maximum number of objects to be returned (the page size). The default is 1000. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include objects nested further than immediate children of the given resource. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieves a list of element attributes matching the specified filters from the specified element.
        api_response = api_instance.element_find_element_attributes(web_id, associations=associations, attribute_category=attribute_category, attribute_description_filter=attribute_description_filter, attribute_name_filter=attribute_name_filter, attribute_type=attribute_type, element_category=element_category, element_description_filter=element_description_filter, element_name_filter=element_name_filter, element_template=element_template, element_type=element_type, max_count=max_count, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)
        print("The response of ElementApi->element_find_element_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_find_element_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element to use as the root of the search. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports DataReference to return attributes with data references. If this parameter is not specified, DataReference values are not returned. | [optional] 
 **attribute_category** | **str**| Specify that returned attributes must have this category. The default is no filter. | [optional] 
 **attribute_description_filter** | **str**| The attribute description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. | [optional] 
 **attribute_name_filter** | **str**| The attribute name filter string used for finding objects. The default is no filter. | [optional] 
 **attribute_type** | **str**| Specify that returned attributes&#39; value type must be this value type. The default is no filter. | [optional] 
 **element_category** | **str**| Specify that the owner of the returned attributes must have this category. The default is no filter. | [optional] 
 **element_description_filter** | **str**| The element description filter string used for finding objects. Only the first 440 characters of the description will be searched. For Asset Servers older than 2.7, a 400 status code (Bad Request) will be returned if this parameter is specified. The default is no filter. | [optional] 
 **element_name_filter** | **str**| The element name filter string used for finding objects. The default is no filter. | [optional] 
 **element_template** | **str**| Specify that the owner of the returned attributes must have this template or a template derived from this template. The default is no filter. | [optional] 
 **element_type** | **str**| Specify that the element of the returned attributes must have this AFElementType. The default is no filter. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned (the page size). The default is 1000. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include objects nested further than immediate children of the given resource. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
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
**200** | a list of matching attributes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get**
> Element element_get(web_id, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an element.

### Example


```python
import openapi_client
from openapi_client.models.element import Element
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an element.
        api_response = api_instance.element_get(web_id, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Element**](Element.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified element. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_analyses**
> ItemsAnalysis element_get_analyses(web_id, max_count=max_count, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)

Retrieve analyses based on the specified conditions.

Users can search for the analyses based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the analyses that match the default search.

### Example


```python
import openapi_client
from openapi_client.models.items_analysis import ItemsAnalysis
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element, which is the Target of the analyses.
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve analyses based on the specified conditions.
        api_response = api_instance.element_get_analyses(web_id, max_count=max_count, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_analyses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_analyses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element, which is the Target of the analyses. | 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAnalysis**](ItemsAnalysis.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of analyses matching the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_attributes**
> ItemsAttribute element_get_attributes(web_id, associations=associations, category_name=category_name, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, trait=trait, trait_category=trait_category, value_type=value_type, web_id_type=web_id_type)

Get the attributes of the specified element.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
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
        # Get the attributes of the specified element.
        api_response = api_instance.element_get_attributes(web_id, associations=associations, category_name=category_name, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, trait=trait, trait_category=trait_category, value_type=value_type, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_attributes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_attributes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
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

# **element_get_by_path**
> Element element_get_by_path(path, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an element by path.

This method returns an element based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.element import Element
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
    api_instance = openapi_client.ElementApi(api_client)
    path = 'path_example' # str | The path to the element.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an element by path.
        api_response = api_instance.element_get_by_path(path, associations=associations, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the element. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**Element**](Element.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified element. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_categories**
> ItemsElementCategory element_get_categories(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get an element's categories.

### Example


```python
import openapi_client
from openapi_client.models.items_element_category import ItemsElementCategory
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get an element's categories.
        api_response = api_instance.element_get_categories(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElementCategory**](ItemsElementCategory.md)

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

# **element_get_elements**
> ItemsElement element_get_elements(web_id, associations=associations, category_name=category_name, description_filter=description_filter, element_type=element_type, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, web_id_type=web_id_type)

Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified element.

Users can search for the elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.

### Example


```python
import openapi_client
from openapi_client.models.items_element import ItemsElement
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element to use as the root of the search.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    category_name = 'category_name_example' # str | Specify that returned elements must have this category. The default is no category filter. (optional)
    description_filter = 'description_filter_example' # str | Specify that returned elements must have this description. The default is no description filter. (optional)
    element_type = 'element_type_example' # str | Specify that returned elements must have this type. The default type is 'Any'. (optional)
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for finding objects. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    template_name = 'template_name_example' # str | Specify that returned elements must have this template or a template derived from this template. The default is no template filter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve elements based on the specified conditions. By default, this method selects immediate children of the specified element.
        api_response = api_instance.element_get_elements(web_id, associations=associations, category_name=category_name, description_filter=description_filter, element_type=element_type, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_elements:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_elements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element to use as the root of the search. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **category_name** | **str**| Specify that returned elements must have this category. The default is no category filter. | [optional] 
 **description_filter** | **str**| Specify that returned elements must have this description. The default is no description filter. | [optional] 
 **element_type** | **str**| Specify that returned elements must have this type. The default type is &#39;Any&#39;. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for finding objects. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include objects nested further than the immediate children of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **template_name** | **str**| Specify that returned elements must have this template or a template derived from this template. The default is no template filter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElement**](ItemsElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of elements matching the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_elements_query**
> ItemsElement element_get_elements_query(associations=associations, database_web_id=database_web_id, max_count=max_count, query=query, query_date=query_date, selected_fields=selected_fields, start_index=start_index, web_id_type=web_id_type)

Retrieve elements based on the specified conditions. By default, returns all the elements.

### Example


```python
import openapi_client
from openapi_client.models.items_element import ItemsElement
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
    api_instance = openapi_client.ElementApi(api_client)
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    database_web_id = 'database_web_id_example' # str | The ID of the asset database to use as the root of the query. (optional)
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    query = 'query_example' # str | The query string is a list of filters used to perform an AFSearch for the elements in the asset database. An example would be: \"query=Name:=MyElement* Template:=ElementTemplate\". (optional)
    query_date = 'query_date_example' # str | Optional parameter. Used to retrieve the relative the version of an object. A value of null or AFTime.MaxValue initializes the query date so the latest versions of sub-objects are retrieved. The value may be an AFTime, DateTime, PITime, String, or numeric. An integer numeric represents the number of ticks (100-nanosecond intervals) since January 1, 0001. A floating point numeric represents the number of seconds since January 1, 1970 UTC. A String is interpreted as local time, unless it contains a time zone indicator such as a trailing \"Z\" or \"GMT\". (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve elements based on the specified conditions. By default, returns all the elements.
        api_response = api_instance.element_get_elements_query(associations=associations, database_web_id=database_web_id, max_count=max_count, query=query, query_date=query_date, selected_fields=selected_fields, start_index=start_index, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_elements_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_elements_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **database_web_id** | **str**| The ID of the asset database to use as the root of the query. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **query** | **str**| The query string is a list of filters used to perform an AFSearch for the elements in the asset database. An example would be: \&quot;query&#x3D;Name:&#x3D;MyElement* Template:&#x3D;ElementTemplate\&quot;. | [optional] 
 **query_date** | **str**| Optional parameter. Used to retrieve the relative the version of an object. A value of null or AFTime.MaxValue initializes the query date so the latest versions of sub-objects are retrieved. The value may be an AFTime, DateTime, PITime, String, or numeric. An integer numeric represents the number of ticks (100-nanosecond intervals) since January 1, 0001. A floating point numeric represents the number of seconds since January 1, 1970 UTC. A String is interpreted as local time, unless it contains a time zone indicator such as a trailing \&quot;Z\&quot; or \&quot;GMT\&quot;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElement**](ItemsElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of elements matching the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_event_frames**
> ItemsEventFrame element_get_event_frames(web_id, can_be_acknowledged=can_be_acknowledged, category_name=category_name, end_time=end_time, is_acknowledged=is_acknowledged, max_count=max_count, name_filter=name_filter, search_mode=search_mode, selected_fields=selected_fields, severity=severity, sort_field=sort_field, sort_order=sort_order, start_index=start_index, start_time=start_time, template_name=template_name, web_id_type=web_id_type)

Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element that have been active in the past 8 hours.

### Example


```python
import openapi_client
from openapi_client.models.items_event_frame import ItemsEventFrame
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element whose related event frames are sought.
    can_be_acknowledged = True # bool | Specify the returned event frames' canBeAcknowledged property. The default is no canBeAcknowledged filter. (optional)
    category_name = 'category_name_example' # str | Specify that returned event frames must have this category. The default is no category filter. (optional)
    end_time = 'end_time_example' # str | The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*' if searchMode is not one of the 'Backward*' or 'Forward*' values. (optional)
    is_acknowledged = True # bool | Specify the returned event frames' isAcknowledged property. The default no isAcknowledged filter. (optional)
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for finding event frames. The default is no filter. (optional)
    search_mode = 'search_mode_example' # str | Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the 'Backward*' or 'Forward*' values, none of endTime, sortField, or sortOrder may be specified. The default is 'Overlapped'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    severity = ['severity_example'] # List[str] | Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name' if searchMode is not one of the 'Backward*' or 'Forward*' values. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' if searchMode is not one of the 'Backward*' or 'Forward*' values. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    start_time = 'start_time_example' # str | The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame's startTime or endTime. The default is '*-8h'. (optional)
    template_name = 'template_name_example' # str | Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve event frames that reference this element based on the specified conditions. By default, returns all event frames that reference this element that have been active in the past 8 hours.
        api_response = api_instance.element_get_event_frames(web_id, can_be_acknowledged=can_be_acknowledged, category_name=category_name, end_time=end_time, is_acknowledged=is_acknowledged, max_count=max_count, name_filter=name_filter, search_mode=search_mode, selected_fields=selected_fields, severity=severity, sort_field=sort_field, sort_order=sort_order, start_index=start_index, start_time=start_time, template_name=template_name, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_event_frames:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_event_frames: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element whose related event frames are sought. | 
 **can_be_acknowledged** | **bool**| Specify the returned event frames&#39; canBeAcknowledged property. The default is no canBeAcknowledged filter. | [optional] 
 **category_name** | **str**| Specify that returned event frames must have this category. The default is no category filter. | [optional] 
 **end_time** | **str**| The ending time for the search. The endTime must be greater than or equal to the startTime. The searchMode parameter will control whether the comparison will be performed against the event frame&#39;s startTime or endTime. The default is &#39;*&#39; if searchMode is not one of the &#39;Backward*&#39; or &#39;Forward*&#39; values. | [optional] 
 **is_acknowledged** | **bool**| Specify the returned event frames&#39; isAcknowledged property. The default no isAcknowledged filter. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for finding event frames. The default is no filter. | [optional] 
 **search_mode** | **str**| Determines how the startTime and endTime parameters are treated when searching for event frame objects to be included in the returned collection. If this parameter is one of the &#39;Backward*&#39; or &#39;Forward*&#39; values, none of endTime, sortField, or sortOrder may be specified. The default is &#39;Overlapped&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **severity** | [**List[str]**](str.md)| Specify that returned event frames must have this severity. Multiple severity values may be specified with multiple instances of the parameter. The default is no severity filter. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39; if searchMode is not one of the &#39;Backward*&#39; or &#39;Forward*&#39; values. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; if searchMode is not one of the &#39;Backward*&#39; or &#39;Forward*&#39; values. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **start_time** | **str**| The starting time for the search. startTime must be less than or equal to the endTime. The searchMode parameter will control whether the comparison will be performed against the event frame&#39;s startTime or endTime. The default is &#39;*-8h&#39;. | [optional] 
 **template_name** | **str**| Specify that returned event frames must have this template or a template derived from this template. The default is no template filter. Specify this parameter by name. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsEventFrame**](ItemsEventFrame.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of event frames matching the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_multiple**
> ItemsItemElement element_get_multiple(as_parallel=as_parallel, associations=associations, include_mode=include_mode, path=path, selected_fields=selected_fields, web_id=web_id, web_id_type=web_id_type)

Retrieve multiple elements by web id or path.

### Example


```python
import openapi_client
from openapi_client.models.items_item_element import ItemsItemElement
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
    api_instance = openapi_client.ElementApi(api_client)
    as_parallel = True # bool | Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is 'false'. (optional)
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    include_mode = 'include_mode_example' # str | The include mode for the return list. The default is 'All'. (optional)
    path = ['path_example'] # List[str] | The path of an element. Multiple elements may be specified with multiple instances of the parameter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id = ['web_id_example'] # List[str] | The ID of an element. Multiple elements may be specified with multiple instances of the parameter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve multiple elements by web id or path.
        api_response = api_instance.element_get_multiple(as_parallel=as_parallel, associations=associations, include_mode=include_mode, path=path, selected_fields=selected_fields, web_id=web_id, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_multiple:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_multiple: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **as_parallel** | **bool**| Specifies if the retrieval processes should be run in parallel on the server. This may improve the response time for large amounts of requested attributes. The default is &#39;false&#39;. | [optional] 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **include_mode** | **str**| The include mode for the return list. The default is &#39;All&#39;. | [optional] 
 **path** | [**List[str]**](str.md)| The path of an element. Multiple elements may be specified with multiple instances of the parameter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id** | [**List[str]**](str.md)| The ID of an element. Multiple elements may be specified with multiple instances of the parameter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsItemElement**](ItemsItemElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested elements |  -  |
**207** | Some or all items contain exceptions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_notification_rules**
> ItemsNotificationRule element_get_notification_rules(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve notification rules for an element

### Example


```python
import openapi_client
from openapi_client.models.items_notification_rule import ItemsNotificationRule
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the resource to use as the root of the search.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve notification rules for an element
        api_response = api_instance.element_get_notification_rules(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_notification_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_notification_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the resource to use as the root of the search. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsNotificationRule**](ItemsNotificationRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification rules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_paths**
> ItemsString element_get_paths(web_id, relative_path=relative_path)

Get a list of the full or relative paths to this element.

This method will return paths with the primary path at the first index. If there is no primary path, then null will be at the first index. If relative path is specified but does not exist, null will be returned at the first index.

### Example


```python
import openapi_client
from openapi_client.models.items_string import ItemsString
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
    relative_path = 'relative_path_example' # str | The full path in ShortName format to the parent object that the returned paths should be relative. For example, \"\\\\Server1\\Database2\" would return all the paths to the element relative to the database. A path of \"\\\\Server1\\Database2\\RootElement\" would return all paths to the element relative to \"RootElement\". If null, then all the full paths to the element will be returned. (optional)

    try:
        # Get a list of the full or relative paths to this element.
        api_response = api_instance.element_get_paths(web_id, relative_path=relative_path)
        print("The response of ElementApi->element_get_paths:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_paths: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
 **relative_path** | **str**| The full path in ShortName format to the parent object that the returned paths should be relative. For example, \&quot;\\\\Server1\\Database2\&quot; would return all the paths to the element relative to the database. A path of \&quot;\\\\Server1\\Database2\\RootElement\&quot; would return all paths to the element relative to \&quot;RootElement\&quot;. If null, then all the full paths to the element will be returned. | [optional] 

### Return type

[**ItemsString**](ItemsString.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of the full or relative paths to this element. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_referenced_elements**
> ItemsElement element_get_referenced_elements(web_id, associations=associations, category_name=category_name, description_filter=description_filter, element_type=element_type, max_count=max_count, name_filter=name_filter, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, web_id_type=web_id_type)

Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements of the current resource.

Users can search for the referenced elements based on specific search parameters. If no parameters are specified in the search, the default values for each parameter will be used and will return the elements that match the default search.

### Example


```python
import openapi_client
from openapi_client.models.items_element import ItemsElement
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the resource to use as the root of the search.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. (optional)
    category_name = 'category_name_example' # str | Specify that returned elements must have this category. The default is no category filter. (optional)
    description_filter = 'description_filter_example' # str | Specify that returned elements must have this description. The default is no description filter. (optional)
    element_type = 'element_type_example' # str | Specify that returned elements must have this type. The default type is 'Any'. (optional)
    max_count = 56 # int | The maximum number of objects to be returned per call (page size). The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for finding objects. The default is no filter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    template_name = 'template_name_example' # str | Specify that returned elements must have this template or a template derived from this template. The default is no template filter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve referenced elements based on the specified conditions. By default, this method selects all referenced elements of the current resource.
        api_response = api_instance.element_get_referenced_elements(web_id, associations=associations, category_name=category_name, description_filter=description_filter, element_type=element_type, max_count=max_count, name_filter=name_filter, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_index=start_index, template_name=template_name, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_referenced_elements:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_referenced_elements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the resource to use as the root of the search. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Paths to return all paths to the element. If this parameter is not specified, paths are not returned. | [optional] 
 **category_name** | **str**| Specify that returned elements must have this category. The default is no category filter. | [optional] 
 **description_filter** | **str**| Specify that returned elements must have this description. The default is no description filter. | [optional] 
 **element_type** | **str**| Specify that returned elements must have this type. The default type is &#39;Any&#39;. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned per call (page size). The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for finding objects. The default is no filter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
 **template_name** | **str**| Specify that returned elements must have this template or a template derived from this template. The default is no template filter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElement**](ItemsElement.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of referenced elements matching the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_security**
> ItemsSecurityRights element_get_security(web_id, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)

Get the security information of the specified security item associated with the element for a specified user.

### Example


```python
import openapi_client
from openapi_client.models.items_security_rights import ItemsSecurityRights
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element for the security to be checked.
    user_identity = ['user_identity_example'] # List[str] | The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
    force_refresh = True # bool | Indicates if the security cache should be refreshed before getting security information. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the security information of the specified security item associated with the element for a specified user.
        api_response = api_instance.element_get_security(web_id, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_security:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_security: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element for the security to be checked. | 
 **user_identity** | [**List[str]**](str.md)| The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user&#39;s security rights will be returned. | 
 **force_refresh** | **bool**| Indicates if the security cache should be refreshed before getting security information. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsSecurityRights**](ItemsSecurityRights.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Security rights. |  -  |
**400** | An invalid or local account is specified as the user identity. |  -  |
**401** | Access denied for the specified user identity. |  -  |
**409** | Unsupported when using Anonymous authentication method. |  -  |
**502** | Failed to retrieve the specified user identity. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_security_entries**
> ItemsSecurityEntry element_get_security_entries(web_id, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.

### Example


```python
import openapi_client
from openapi_client.models.items_security_entry import ItemsSecurityEntry
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
    name_filter = 'name_filter_example' # str | The name query string used for filtering security entries. The default is no filter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entries associated with the element based on the specified criteria. By default, all security entries for this element are returned.
        api_response = api_instance.element_get_security_entries(web_id, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_security_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_security_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
 **name_filter** | **str**| The name query string used for filtering security entries. The default is no filter. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsSecurityEntry**](ItemsSecurityEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of security entries matching the specified condition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_get_security_entry_by_name**
> SecurityEntry element_get_security_entry_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entry associated with the element with the specified name.

### Example


```python
import openapi_client
from openapi_client.models.security_entry import SecurityEntry
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
    api_instance = openapi_client.ElementApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the element.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entry associated with the element with the specified name.
        api_response = api_instance.element_get_security_entry_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementApi->element_get_security_entry_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementApi->element_get_security_entry_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the element. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**SecurityEntry**](SecurityEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The security entry matching the specified condition. |  -  |
**404** | The security entry with the specified name is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_remove_referenced_element**
> element_remove_referenced_element(web_id, referenced_element_web_id)

Remove a reference to an existing element from the child elements collection.

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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element which the referenced element will be removed from.
    referenced_element_web_id = ['referenced_element_web_id_example'] # List[str] | The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter.

    try:
        # Remove a reference to an existing element from the child elements collection.
        api_instance.element_remove_referenced_element(web_id, referenced_element_web_id)
    except Exception as e:
        print("Exception when calling ElementApi->element_remove_referenced_element: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element which the referenced element will be removed from. | 
 **referenced_element_web_id** | [**List[str]**](str.md)| The ID of the referenced element. Multiple referenced elements may be specified with multiple instances of the parameter. | 

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
**204** | The referenced element was successfully removed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_update**
> element_update(web_id, element)

Update an element by replacing items in its definition.

### Example


```python
import openapi_client
from openapi_client.models.element import Element
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
    api_instance = openapi_client.ElementApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element.
    element = openapi_client.Element() # Element | A partial element containing the desired changes.

    try:
        # Update an element by replacing items in its definition.
        api_instance.element_update(web_id, element)
    except Exception as e:
        print("Exception when calling ElementApi->element_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element. | 
 **element** | [**Element**](Element.md)| A partial element containing the desired changes. | 

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
**204** | The element was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_update_security_entry**
> element_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children)

Update a security entry owned by the element.

### Example


```python
import openapi_client
from openapi_client.models.security_entry import SecurityEntry
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
    api_instance = openapi_client.ElementApi(api_client)
    name = 'name_example' # str | The name of the security entry.
    web_id = 'web_id_example' # str | The ID of the element where the security entry will be updated.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)

    try:
        # Update a security entry owned by the element.
        api_instance.element_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children)
    except Exception as e:
        print("Exception when calling ElementApi->element_update_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. | 
 **web_id** | **str**| The ID of the element where the security entry will be updated. | 
 **security_entry** | [**SecurityEntry**](SecurityEntry.md)| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed. | 
 **apply_to_children** | **bool**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. | [optional] 

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
**204** | The security entry was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

