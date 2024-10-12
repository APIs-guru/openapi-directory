# openapi_client.ElementTemplateApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**element_template_create_attribute_template**](ElementTemplateApi.md#element_template_create_attribute_template) | **POST** /elementtemplates/{webId}/attributetemplates | Create an attribute template.
[**element_template_create_notification_rule_template**](ElementTemplateApi.md#element_template_create_notification_rule_template) | **POST** /elementtemplates/{webId}/notificationruletemplates | Create a notification rule template.
[**element_template_create_security_entry**](ElementTemplateApi.md#element_template_create_security_entry) | **POST** /elementtemplates/{webId}/securityentries | Create a security entry owned by the element template.
[**element_template_delete**](ElementTemplateApi.md#element_template_delete) | **DELETE** /elementtemplates/{webId} | Delete an element template.
[**element_template_delete_security_entry**](ElementTemplateApi.md#element_template_delete_security_entry) | **DELETE** /elementtemplates/{webId}/securityentries/{name} | Delete a security entry owned by the element template.
[**element_template_get**](ElementTemplateApi.md#element_template_get) | **GET** /elementtemplates/{webId} | Retrieve an element template.
[**element_template_get_analysis_templates**](ElementTemplateApi.md#element_template_get_analysis_templates) | **GET** /elementtemplates/{webId}/analysistemplates | Get analysis templates for an element template.
[**element_template_get_attribute_templates**](ElementTemplateApi.md#element_template_get_attribute_templates) | **GET** /elementtemplates/{webId}/attributetemplates | Get child attribute templates for an element template.
[**element_template_get_base_element_templates**](ElementTemplateApi.md#element_template_get_base_element_templates) | **GET** /elementtemplates/{webId}/baseelementtemplates | Get base element templates for an element template.
[**element_template_get_by_path**](ElementTemplateApi.md#element_template_get_by_path) | **GET** /elementtemplates | Retrieve an element template by path.
[**element_template_get_categories**](ElementTemplateApi.md#element_template_get_categories) | **GET** /elementtemplates/{webId}/categories | Get an element template&#39;s categories.
[**element_template_get_derived_element_templates**](ElementTemplateApi.md#element_template_get_derived_element_templates) | **GET** /elementtemplates/{webId}/derivedelementtemplates | Get derived element templates for an element template.
[**element_template_get_notification_rule_templates**](ElementTemplateApi.md#element_template_get_notification_rule_templates) | **GET** /elementtemplates/{webId}/notificationruletemplates | Get notification rule templates for an element template
[**element_template_get_security**](ElementTemplateApi.md#element_template_get_security) | **GET** /elementtemplates/{webId}/security | Get the security information of the specified security item associated with the element template for a specified user.
[**element_template_get_security_entries**](ElementTemplateApi.md#element_template_get_security_entries) | **GET** /elementtemplates/{webId}/securityentries | Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.
[**element_template_get_security_entry_by_name**](ElementTemplateApi.md#element_template_get_security_entry_by_name) | **GET** /elementtemplates/{webId}/securityentries/{name} | Retrieve the security entry associated with the element template with the specified name.
[**element_template_update**](ElementTemplateApi.md#element_template_update) | **PATCH** /elementtemplates/{webId} | Update an element template by replacing items in its definition.
[**element_template_update_security_entry**](ElementTemplateApi.md#element_template_update_security_entry) | **PUT** /elementtemplates/{webId}/securityentries/{name} | Update a security entry owned by the element template.


# **element_template_create_attribute_template**
> element_template_create_attribute_template(web_id, template, web_id_type=web_id_type)

Create an attribute template.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template on which to create the attribute template.
    template = openapi_client.AttributeTemplate() # AttributeTemplate | The attribute template definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create an attribute template.
        api_instance.element_template_create_attribute_template(web_id, template, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_create_attribute_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template on which to create the attribute template. | 
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

# **element_template_create_notification_rule_template**
> element_template_create_notification_rule_template(web_id, notification_rule_template, web_id_type=web_id_type)

Create a notification rule template.

### Example


```python
import openapi_client
from openapi_client.models.notification_rule_template import NotificationRuleTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element on which to create the notification rule template.
    notification_rule_template = openapi_client.NotificationRuleTemplate() # NotificationRuleTemplate | The new notification rule template.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a notification rule template.
        api_instance.element_template_create_notification_rule_template(web_id, notification_rule_template, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_create_notification_rule_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element on which to create the notification rule template. | 
 **notification_rule_template** | [**NotificationRuleTemplate**](NotificationRuleTemplate.md)| The new notification rule template. | 
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
**201** | The notification rule template was created. The response&#39;s Location header is a link to the notification rule template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_create_security_entry**
> element_template_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, web_id_type=web_id_type)

Create a security entry owned by the element template.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template where the security entry will be created.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a security entry owned by the element template.
        api_instance.element_template_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_create_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template where the security entry will be created. | 
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

# **element_template_delete**
> element_template_delete(web_id)

Delete an element template.

Deleting an element template will delete all associated templated data from elements which were created from it.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template to update.

    try:
        # Delete an element template.
        api_instance.element_template_delete(web_id)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template to update. | 

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
**204** | The element template was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_delete_security_entry**
> element_template_delete_security_entry(name, web_id, apply_to_children=apply_to_children)

Delete a security entry owned by the element template.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the element template where the security entry will be deleted.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)

    try:
        # Delete a security entry owned by the element template.
        api_instance.element_template_delete_security_entry(name, web_id, apply_to_children=apply_to_children)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_delete_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the element template where the security entry will be deleted. | 
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

# **element_template_get**
> ElementTemplate element_template_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an element template.

### Example


```python
import openapi_client
from openapi_client.models.element_template import ElementTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an element template.
        api_response = api_instance.element_template_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ElementTemplate**](ElementTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified element template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_analysis_templates**
> ItemsAnalysisTemplate element_template_get_analysis_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get analysis templates for an element template.

### Example


```python
import openapi_client
from openapi_client.models.items_analysis_template import ItemsAnalysisTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get analysis templates for an element template.
        api_response = api_instance.element_template_get_analysis_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_analysis_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_analysis_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAnalysisTemplate**](ItemsAnalysisTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of analysis templates for the specified element template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_attribute_templates**
> ItemsAttributeTemplate element_template_get_attribute_templates(web_id, depth_first_traverse=depth_first_traverse, max_count=max_count, selected_fields=selected_fields, show_descendants=show_descendants, show_inherited=show_inherited, start_index=start_index, web_id_type=web_id_type)

Get child attribute templates for an element template.

If 'showInherited' and 'showDescendants' are 'true', it returns all the attribute templates from current element template and the base template.  If 'showInherited' is 'false', it returns all the attribute templates from the current element template.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    depth_first_traverse = True # bool | When 'true', a Depth First traversal will be performed; this starts at the root and explores as far as possible along each branch before backtracking. When 'false', a Breadth First traversal will be performed; this starts at the tree root and explores the neighbor nodes first, then moves onto the next level of neighbors. The default is 'false' (Breadth First). (optional)
    max_count = 56 # int | The maximum number of objects to be returned. The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_descendants = True # bool | Specifies if the result should include all descendant attribute templates from the current element template, even indirect ones. The default is 'false'. (optional)
    show_inherited = True # bool | Specifies if the result should include attribute templates inherited from base element templates. The default is 'false'. (optional)
    start_index = 56 # int | The starting index (zero based) of the items to be returned. The default is 0. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get child attribute templates for an element template.
        api_response = api_instance.element_template_get_attribute_templates(web_id, depth_first_traverse=depth_first_traverse, max_count=max_count, selected_fields=selected_fields, show_descendants=show_descendants, show_inherited=show_inherited, start_index=start_index, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_attribute_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_attribute_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **depth_first_traverse** | **bool**| When &#39;true&#39;, a Depth First traversal will be performed; this starts at the root and explores as far as possible along each branch before backtracking. When &#39;false&#39;, a Breadth First traversal will be performed; this starts at the tree root and explores the neighbor nodes first, then moves onto the next level of neighbors. The default is &#39;false&#39; (Breadth First). | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned. The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_descendants** | **bool**| Specifies if the result should include all descendant attribute templates from the current element template, even indirect ones. The default is &#39;false&#39;. | [optional] 
 **show_inherited** | **bool**| Specifies if the result should include attribute templates inherited from base element templates. The default is &#39;false&#39;. | [optional] 
 **start_index** | **int**| The starting index (zero based) of the items to be returned. The default is 0. | [optional] 
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
**200** | A list of attribute templates for the specified element template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_base_element_templates**
> ItemsElementTemplate element_template_get_base_element_templates(web_id, max_count=max_count, selected_fields=selected_fields, web_id_type=web_id_type)

Get base element templates for an element template.

The root template will be returned first, followed by successive templates in the inheritance chain.

### Example


```python
import openapi_client
from openapi_client.models.items_element_template import ItemsElementTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    max_count = 56 # int | The maximum number of objects to be returned. The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get base element templates for an element template.
        api_response = api_instance.element_template_get_base_element_templates(web_id, max_count=max_count, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_base_element_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_base_element_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **max_count** | **int**| The maximum number of objects to be returned. The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElementTemplate**](ItemsElementTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of base element templates for the specified element template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_by_path**
> ElementTemplate element_template_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an element template by path.

This method returns an element template based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.element_template import ElementTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    path = 'path_example' # str | The path to the element template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an element template by path.
        api_response = api_instance.element_template_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the element template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ElementTemplate**](ElementTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified element template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_categories**
> ItemsElementCategory element_template_get_categories(web_id, selected_fields=selected_fields, show_inherited=show_inherited, web_id_type=web_id_type)

Get an element template's categories.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_inherited = True # bool | Specifies if the result should include categories inherited from base element templates. The default is 'false'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get an element template's categories.
        api_response = api_instance.element_template_get_categories(web_id, selected_fields=selected_fields, show_inherited=show_inherited, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_inherited** | **bool**| Specifies if the result should include categories inherited from base element templates. The default is &#39;false&#39;. | [optional] 
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

# **element_template_get_derived_element_templates**
> ItemsElementTemplate element_template_get_derived_element_templates(web_id, max_count=max_count, selected_fields=selected_fields, show_descendants=show_descendants, web_id_type=web_id_type)

Get derived element templates for an element template.

### Example


```python
import openapi_client
from openapi_client.models.items_element_template import ItemsElementTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    max_count = 56 # int | The maximum number of objects to be returned. The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_descendants = True # bool | Specifies if the result should include all descendant element templates from the current element template, even indirect ones. The default is 'false'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get derived element templates for an element template.
        api_response = api_instance.element_template_get_derived_element_templates(web_id, max_count=max_count, selected_fields=selected_fields, show_descendants=show_descendants, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_derived_element_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_derived_element_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **max_count** | **int**| The maximum number of objects to be returned. The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_descendants** | **bool**| Specifies if the result should include all descendant element templates from the current element template, even indirect ones. The default is &#39;false&#39;. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsElementTemplate**](ItemsElementTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of derived element templates for the specified element template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_notification_rule_templates**
> ItemsNotificationRuleTemplate element_template_get_notification_rule_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Get notification rule templates for an element template

### Example


```python
import openapi_client
from openapi_client.models.items_notification_rule_template import ItemsNotificationRuleTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get notification rule templates for an element template
        api_response = api_instance.element_template_get_notification_rule_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_notification_rule_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_notification_rule_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsNotificationRuleTemplate**](ItemsNotificationRuleTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification rule templates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_get_security**
> ItemsSecurityRights element_template_get_security(web_id, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)

Get the security information of the specified security item associated with the element template for a specified user.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template for the security to be checked.
    user_identity = ['user_identity_example'] # List[str] | The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
    force_refresh = True # bool | Indicates if the security cache should be refreshed before getting security information. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the security information of the specified security item associated with the element template for a specified user.
        api_response = api_instance.element_template_get_security(web_id, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_security:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_security: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template for the security to be checked. | 
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

# **element_template_get_security_entries**
> ItemsSecurityEntry element_template_get_security_entries(web_id, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template.
    name_filter = 'name_filter_example' # str | The name query string used for filtering security entries. The default is no filter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entries associated with the element template based on the specified criteria. By default, all security entries for this element template are returned.
        api_response = api_instance.element_template_get_security_entries(web_id, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_security_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_security_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template. | 
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

# **element_template_get_security_entry_by_name**
> ItemsSecurityEntry element_template_get_security_entry_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entry associated with the element template with the specified name.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the element template.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entry associated with the element template with the specified name.
        api_response = api_instance.element_template_get_security_entry_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of ElementTemplateApi->element_template_get_security_entry_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_get_security_entry_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the element template. | 
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
**200** | The security entry matching the specified condition. |  -  |
**404** | The security entry with the specified name is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_update**
> element_template_update(web_id, template)

Update an element template by replacing items in its definition.

Updating the InstanceType property of an element template will not affect any elements that have already been created from this template; it will only affect any future elements created from this template. All other changes will be propagated to elements based on this template.

### Example


```python
import openapi_client
from openapi_client.models.element_template import ElementTemplate
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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    web_id = 'web_id_example' # str | The ID of the element template to update.
    template = openapi_client.ElementTemplate() # ElementTemplate | A partial element template containing the desired changes.

    try:
        # Update an element template by replacing items in its definition.
        api_instance.element_template_update(web_id, template)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the element template to update. | 
 **template** | [**ElementTemplate**](ElementTemplate.md)| A partial element template containing the desired changes. | 

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
**204** | The element template was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **element_template_update_security_entry**
> element_template_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children)

Update a security entry owned by the element template.

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
    api_instance = openapi_client.ElementTemplateApi(api_client)
    name = 'name_example' # str | The name of the security entry.
    web_id = 'web_id_example' # str | The ID of the element template where the security entry will be updated.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)

    try:
        # Update a security entry owned by the element template.
        api_instance.element_template_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children)
    except Exception as e:
        print("Exception when calling ElementTemplateApi->element_template_update_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. | 
 **web_id** | **str**| The ID of the element template where the security entry will be updated. | 
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

