# openapi_client.AssetServerApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asset_server_create_asset_database**](AssetServerApi.md#asset_server_create_asset_database) | **POST** /assetservers/{webId}/assetdatabases | Create an asset database.
[**asset_server_create_notification_contact_template**](AssetServerApi.md#asset_server_create_notification_contact_template) | **POST** /assetservers/{webId}/notificationcontacttemplates | Create a notification contact template.
[**asset_server_create_security_entry**](AssetServerApi.md#asset_server_create_security_entry) | **POST** /assetservers/{webId}/securityentries | Create a security entry owned by the asset server.
[**asset_server_create_security_identity**](AssetServerApi.md#asset_server_create_security_identity) | **POST** /assetservers/{webId}/securityidentities | Create a security identity.
[**asset_server_create_security_mapping**](AssetServerApi.md#asset_server_create_security_mapping) | **POST** /assetservers/{webId}/securitymappings | Create a security mapping.
[**asset_server_create_unit_class**](AssetServerApi.md#asset_server_create_unit_class) | **POST** /assetservers/{webId}/unitclasses | Create a unit class in the specified Asset Server.
[**asset_server_delete_security_entry**](AssetServerApi.md#asset_server_delete_security_entry) | **DELETE** /assetservers/{webId}/securityentries/{name} | Delete a security entry owned by the asset server.
[**asset_server_get**](AssetServerApi.md#asset_server_get) | **GET** /assetservers/{webId} | Retrieve an Asset Server.
[**asset_server_get_analysis_rule_plug_ins**](AssetServerApi.md#asset_server_get_analysis_rule_plug_ins) | **GET** /assetservers/{webId}/analysisruleplugins | Retrieve a list of all Analysis Rule Plug-in&#39;s.
[**asset_server_get_by_name**](AssetServerApi.md#asset_server_get_by_name) | **GET** /assetservers#name | Retrieve an Asset Server by name.
[**asset_server_get_by_path**](AssetServerApi.md#asset_server_get_by_path) | **GET** /assetservers#path | Retrieve an Asset Server by path.
[**asset_server_get_databases**](AssetServerApi.md#asset_server_get_databases) | **GET** /assetservers/{webId}/assetdatabases | Retrieve a list of all Asset Databases on the specified Asset Server.
[**asset_server_get_notification_contact_templates**](AssetServerApi.md#asset_server_get_notification_contact_templates) | **GET** /assetservers/{webId}/notificationcontacttemplates | Retrieve a list of all notification contact templates on the specified Asset Server.
[**asset_server_get_notification_plug_ins**](AssetServerApi.md#asset_server_get_notification_plug_ins) | **GET** /assetservers/{webId}/notificationplugins | Retrieve a list of all notification plugins on the specified Asset Server.
[**asset_server_get_security**](AssetServerApi.md#asset_server_get_security) | **GET** /assetservers/{webId}/security | Get the security information of the specified security item associated with the asset server for a specified user.
[**asset_server_get_security_entries**](AssetServerApi.md#asset_server_get_security_entries) | **GET** /assetservers/{webId}/securityentries | Retrieve the security entries of the specified security item associated with the asset server based on the specified criteria. By default, all security entries for this asset server are returned.
[**asset_server_get_security_entry_by_name**](AssetServerApi.md#asset_server_get_security_entry_by_name) | **GET** /assetservers/{webId}/securityentries/{name} | Retrieve the security entry of the specified security item associated with the asset server with the specified name.
[**asset_server_get_security_identities**](AssetServerApi.md#asset_server_get_security_identities) | **GET** /assetservers/{webId}/securityidentities | Retrieve security identities based on the specified criteria. By default, all security identities in the specified Asset Server are returned.
[**asset_server_get_security_identities_for_user**](AssetServerApi.md#asset_server_get_security_identities_for_user) | **GET** /assetservers/{webId}/securityidentities#userIdentity | Retrieve security identities for a specific user.
[**asset_server_get_security_mappings**](AssetServerApi.md#asset_server_get_security_mappings) | **GET** /assetservers/{webId}/securitymappings | Retrieve security mappings based on the specified criteria. By default, all security mappings in the specified Asset Server are returned.
[**asset_server_get_time_rule_plug_ins**](AssetServerApi.md#asset_server_get_time_rule_plug_ins) | **GET** /assetservers/{webId}/timeruleplugins | Retrieve a list of all Time Rule Plug-in&#39;s.
[**asset_server_get_unit_classes**](AssetServerApi.md#asset_server_get_unit_classes) | **GET** /assetservers/{webId}/unitclasses | Retrieve a list of all unit classes on the specified Asset Server.
[**asset_server_list**](AssetServerApi.md#asset_server_list) | **GET** /assetservers | Retrieve a list of all Asset Servers known to this service.
[**asset_server_update_security_entry**](AssetServerApi.md#asset_server_update_security_entry) | **PUT** /assetservers/{webId}/securityentries/{name} | Update a security entry owned by the asset server.


# **asset_server_create_asset_database**
> asset_server_create_asset_database(web_id, database, web_id_type=web_id_type)

Create an asset database.

### Example


```python
import openapi_client
from openapi_client.models.asset_database import AssetDatabase
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server on which to create the database.
    database = openapi_client.AssetDatabase() # AssetDatabase | The new database definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create an asset database.
        api_instance.asset_server_create_asset_database(web_id, database, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_create_asset_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server on which to create the database. | 
 **database** | [**AssetDatabase**](AssetDatabase.md)| The new database definition. | 
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
**201** | The database was created. The response&#39;s Location header is a link to the database. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_create_notification_contact_template**
> asset_server_create_notification_contact_template(web_id, notification_contact_template, web_id_type=web_id_type)

Create a notification contact template.

### Example


```python
import openapi_client
from openapi_client.models.notification_contact_template import NotificationContactTemplate
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server on which to create the notification contact template.
    notification_contact_template = openapi_client.NotificationContactTemplate() # NotificationContactTemplate | The new notification contact template definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a notification contact template.
        api_instance.asset_server_create_notification_contact_template(web_id, notification_contact_template, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_create_notification_contact_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server on which to create the notification contact template. | 
 **notification_contact_template** | [**NotificationContactTemplate**](NotificationContactTemplate.md)| The new notification contact template definition. | 
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
**201** | The notification contact template was created. The response&#39;s Location header is a link to the notification contact template. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_create_security_entry**
> asset_server_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, security_item=security_item, web_id_type=web_id_type)

Create a security entry owned by the asset server.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server where the security entry will be created.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)
    security_item = 'security_item_example' # str | The security item of the desired security entries to be created. If the parameter is not specified, security entries of the 'Default' security item will be created. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a security entry owned by the asset server.
        api_instance.asset_server_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, security_item=security_item, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_create_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server where the security entry will be created. | 
 **security_entry** | [**SecurityEntry**](SecurityEntry.md)| The new security entry definition. The full list of allow and deny rights must be supplied. | 
 **apply_to_children** | **bool**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. | [optional] 
 **security_item** | **str**| The security item of the desired security entries to be created. If the parameter is not specified, security entries of the &#39;Default&#39; security item will be created. | [optional] 
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

# **asset_server_create_security_identity**
> asset_server_create_security_identity(web_id, security_identity, web_id_type=web_id_type)

Create a security identity.

### Example


```python
import openapi_client
from openapi_client.models.security_identity import SecurityIdentity
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server on which to create the security identity.
    security_identity = openapi_client.SecurityIdentity() # SecurityIdentity | The new security identity definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a security identity.
        api_instance.asset_server_create_security_identity(web_id, security_identity, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_create_security_identity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server on which to create the security identity. | 
 **security_identity** | [**SecurityIdentity**](SecurityIdentity.md)| The new security identity definition. | 
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
**201** | The security identity was created. The response&#39;s Location header is a link to the security identity. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_create_security_mapping**
> asset_server_create_security_mapping(web_id, security_mapping, web_id_type=web_id_type)

Create a security mapping.

### Example


```python
import openapi_client
from openapi_client.models.security_mapping import SecurityMapping
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server on which to create the security mapping.
    security_mapping = openapi_client.SecurityMapping() # SecurityMapping | The new security mapping definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a security mapping.
        api_instance.asset_server_create_security_mapping(web_id, security_mapping, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_create_security_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server on which to create the security mapping. | 
 **security_mapping** | [**SecurityMapping**](SecurityMapping.md)| The new security mapping definition. | 
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
**201** | The security mapping was created. The response&#39;s Location header is a link to the security mapping. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_create_unit_class**
> asset_server_create_unit_class(web_id, unit_class, web_id_type=web_id_type)

Create a unit class in the specified Asset Server.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    unit_class = openapi_client.UnitClass() # UnitClass | The new unit class definition.
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a unit class in the specified Asset Server.
        api_instance.asset_server_create_unit_class(web_id, unit_class, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_create_unit_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **unit_class** | [**UnitClass**](UnitClass.md)| The new unit class definition. | 
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
**201** | The unit class was created. The response&#39;s Location header is a link to the unit class. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_delete_security_entry**
> asset_server_delete_security_entry(name, web_id, apply_to_children=apply_to_children, security_item=security_item)

Delete a security entry owned by the asset server.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the asset server where the security entry will be deleted.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)
    security_item = 'security_item_example' # str | The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the 'Default' security item will be deleted. (optional)

    try:
        # Delete a security entry owned by the asset server.
        api_instance.asset_server_delete_security_entry(name, web_id, apply_to_children=apply_to_children, security_item=security_item)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_delete_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the asset server where the security entry will be deleted. | 
 **apply_to_children** | **bool**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. | [optional] 
 **security_item** | **str**| The security item of the desired security entries to be deleted. If the parameter is not specified, security entries of the &#39;Default&#39; security item will be deleted. | [optional] 

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

# **asset_server_get**
> AssetServer asset_server_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Asset Server.

### Example


```python
import openapi_client
from openapi_client.models.asset_server import AssetServer
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Asset Server.
        api_response = api_instance.asset_server_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AssetServer**](AssetServer.md)

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

# **asset_server_get_analysis_rule_plug_ins**
> ItemsAnalysisRulePlugIn asset_server_get_analysis_rule_plug_ins(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all Analysis Rule Plug-in's.

### Example


```python
import openapi_client
from openapi_client.models.items_analysis_rule_plug_in import ItemsAnalysisRulePlugIn
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server, where the Analysis Rule Plug-in's are installed.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all Analysis Rule Plug-in's.
        api_response = api_instance.asset_server_get_analysis_rule_plug_ins(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_analysis_rule_plug_ins:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_analysis_rule_plug_ins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server, where the Analysis Rule Plug-in&#39;s are installed. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAnalysisRulePlugIn**](ItemsAnalysisRulePlugIn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Analysis Rule Plug-in&#39;s. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_by_name**
> AssetServer asset_server_get_by_name(name, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Asset Server by name.

This method returns an asset server based on the name associated with it. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.asset_server import AssetServer
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
    api_instance = openapi_client.AssetServerApi(api_client)
    name = 'name_example' # str | The name of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Asset Server by name.
        api_response = api_instance.asset_server_get_by_name(name, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AssetServer**](AssetServer.md)

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

# **asset_server_get_by_path**
> AssetServer asset_server_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an Asset Server by path.

This method returns an asset server based on the hierarchical path associated with it, and should be used when a path has been received from a separate part of the PI System for use in the PI Web API. Users should primarily search with the WebID when available.

### Example


```python
import openapi_client
from openapi_client.models.asset_server import AssetServer
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
    api_instance = openapi_client.AssetServerApi(api_client)
    path = 'path_example' # str | The path to the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an Asset Server by path.
        api_response = api_instance.asset_server_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AssetServer**](AssetServer.md)

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

# **asset_server_get_databases**
> ItemsAssetDatabase asset_server_get_databases(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all Asset Databases on the specified Asset Server.

### Example


```python
import openapi_client
from openapi_client.models.items_asset_database import ItemsAssetDatabase
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all Asset Databases on the specified Asset Server.
        api_response = api_instance.asset_server_get_databases(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAssetDatabase**](ItemsAssetDatabase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of databases. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_notification_contact_templates**
> ItemsNotificationContactTemplate asset_server_get_notification_contact_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all notification contact templates on the specified Asset Server.

### Example


```python
import openapi_client
from openapi_client.models.items_notification_contact_template import ItemsNotificationContactTemplate
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all notification contact templates on the specified Asset Server.
        api_response = api_instance.asset_server_get_notification_contact_templates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_notification_contact_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_notification_contact_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsNotificationContactTemplate**](ItemsNotificationContactTemplate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification contact templates. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_notification_plug_ins**
> ItemsNotificationPlugIn asset_server_get_notification_plug_ins(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all notification plugins on the specified Asset Server.

### Example


```python
import openapi_client
from openapi_client.models.items_notification_plug_in import ItemsNotificationPlugIn
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all notification plugins on the specified Asset Server.
        api_response = api_instance.asset_server_get_notification_plug_ins(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_notification_plug_ins:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_notification_plug_ins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsNotificationPlugIn**](ItemsNotificationPlugIn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of notification delivery channel plugins. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_security**
> ItemsSecurityRights asset_server_get_security(web_id, security_item, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)

Get the security information of the specified security item associated with the asset server for a specified user.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server for the security to be checked.
    security_item = ['security_item_example'] # List[str] | The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only 'Default' security item of the security information will be returned.
    user_identity = ['user_identity_example'] # List[str] | The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
    force_refresh = True # bool | Indicates if the security cache should be refreshed before getting security information. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the security information of the specified security item associated with the asset server for a specified user.
        api_response = api_instance.asset_server_get_security(web_id, security_item, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_security:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_security: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server for the security to be checked. | 
 **security_item** | [**List[str]**](str.md)| The security item of the desired security information to be returned. Multiple security items may be specified with multiple instances of the parameter. If the parameter is not specified, only &#39;Default&#39; security item of the security information will be returned. | 
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
**400** | Unsupported security item; an invalid or local account is specified as the user identity. |  -  |
**401** | Access denied for the specified user identity. |  -  |
**409** | Unsupported when using Anonymous authentication method. |  -  |
**502** | Failed to retrieve the specified user identity. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_security_entries**
> ItemsSecurityEntry asset_server_get_security_entries(web_id, name_filter=name_filter, security_item=security_item, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entries of the specified security item associated with the asset server based on the specified criteria. By default, all security entries for this asset server are returned.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server.
    name_filter = 'name_filter_example' # str | The name query string used for filtering security entries. The default is no filter. (optional)
    security_item = 'security_item_example' # str | The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entries of the specified security item associated with the asset server based on the specified criteria. By default, all security entries for this asset server are returned.
        api_response = api_instance.asset_server_get_security_entries(web_id, name_filter=name_filter, security_item=security_item, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_security_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_security_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server. | 
 **name_filter** | **str**| The name query string used for filtering security entries. The default is no filter. | [optional] 
 **security_item** | **str**| The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the &#39;Default&#39; security item will be returned. | [optional] 
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

# **asset_server_get_security_entry_by_name**
> SecurityEntry asset_server_get_security_entry_by_name(name, web_id, security_item=security_item, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entry of the specified security item associated with the asset server with the specified name.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the asset server.
    security_item = 'security_item_example' # str | The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the 'Default' security item will be returned. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entry of the specified security item associated with the asset server with the specified name.
        api_response = api_instance.asset_server_get_security_entry_by_name(name, web_id, security_item=security_item, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_security_entry_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_security_entry_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the asset server. | 
 **security_item** | **str**| The security item of the desired security entries information to be returned. If the parameter is not specified, security entries of the &#39;Default&#39; security item will be returned. | [optional] 
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

# **asset_server_get_security_identities**
> ItemsSecurityIdentity asset_server_get_security_identities(web_id, var_field=var_field, max_count=max_count, query=query, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, web_id_type=web_id_type)

Retrieve security identities based on the specified criteria. By default, all security identities in the specified Asset Server are returned.

### Example


```python
import openapi_client
from openapi_client.models.items_security_identity import ItemsSecurityIdentity
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server to search.
    var_field = 'var_field_example' # str | Specifies which of the object's properties are searched. The default is 'Name'. (optional)
    max_count = 56 # int | The maximum number of objects to be returned. The default is 1000. (optional)
    query = 'query_example' # str | The query string used for finding objects. The default is no query string. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve security identities based on the specified criteria. By default, all security identities in the specified Asset Server are returned.
        api_response = api_instance.asset_server_get_security_identities(web_id, var_field=var_field, max_count=max_count, query=query, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_security_identities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_security_identities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server to search. | 
 **var_field** | **str**| Specifies which of the object&#39;s properties are searched. The default is &#39;Name&#39;. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned. The default is 1000. | [optional] 
 **query** | **str**| The query string used for finding objects. The default is no query string. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsSecurityIdentity**](ItemsSecurityIdentity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of security identities matching the specified condition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_security_identities_for_user**
> ItemsSecurityIdentity asset_server_get_security_identities_for_user(web_id, user_identity, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve security identities for a specific user.

### Example


```python
import openapi_client
from openapi_client.models.items_security_identity import ItemsSecurityIdentity
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    user_identity = 'user_identity_example' # str | The user identity to search for.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve security identities for a specific user.
        api_response = api_instance.asset_server_get_security_identities_for_user(web_id, user_identity, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_security_identities_for_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_security_identities_for_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **user_identity** | **str**| The user identity to search for. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsSecurityIdentity**](ItemsSecurityIdentity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of security identities for the specified user. |  -  |
**400** | Unsupported security item; an invalid or local account is specified as the user identity. |  -  |
**401** | Access denied for the specified user identity. |  -  |
**502** | Failed to retrieve the specified user identity. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_security_mappings**
> ItemsSecurityMapping asset_server_get_security_mappings(web_id, var_field=var_field, max_count=max_count, query=query, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, web_id_type=web_id_type)

Retrieve security mappings based on the specified criteria. By default, all security mappings in the specified Asset Server are returned.

### Example


```python
import openapi_client
from openapi_client.models.items_security_mapping import ItemsSecurityMapping
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server to search.
    var_field = 'var_field_example' # str | Specifies which of the object's properties are searched. The default is 'Name'. (optional)
    max_count = 56 # int | The maximum number of objects to be returned. The default is 1000. (optional)
    query = 'query_example' # str | The query string used for finding objects. The default is no query string. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. The default is 'Name'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve security mappings based on the specified criteria. By default, all security mappings in the specified Asset Server are returned.
        api_response = api_instance.asset_server_get_security_mappings(web_id, var_field=var_field, max_count=max_count, query=query, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_security_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_security_mappings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server to search. | 
 **var_field** | **str**| Specifies which of the object&#39;s properties are searched. The default is &#39;Name&#39;. | [optional] 
 **max_count** | **int**| The maximum number of objects to be returned. The default is 1000. | [optional] 
 **query** | **str**| The query string used for finding objects. The default is no query string. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. The default is &#39;Name&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsSecurityMapping**](ItemsSecurityMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of security mappings matching the specified condition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_time_rule_plug_ins**
> ItemsTimeRulePlugIn asset_server_get_time_rule_plug_ins(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all Time Rule Plug-in's.

### Example


```python
import openapi_client
from openapi_client.models.items_time_rule_plug_in import ItemsTimeRulePlugIn
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the asset server, where the Time Rule Plug-in's are installed.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all Time Rule Plug-in's.
        api_response = api_instance.asset_server_get_time_rule_plug_ins(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_time_rule_plug_ins:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_time_rule_plug_ins: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the asset server, where the Time Rule Plug-in&#39;s are installed. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsTimeRulePlugIn**](ItemsTimeRulePlugIn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Time Rule Plug-in&#39;s. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_get_unit_classes**
> ItemsUnitClass asset_server_get_unit_classes(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all unit classes on the specified Asset Server.

### Example


```python
import openapi_client
from openapi_client.models.items_unit_class import ItemsUnitClass
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
    api_instance = openapi_client.AssetServerApi(api_client)
    web_id = 'web_id_example' # str | The ID of the server.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all unit classes on the specified Asset Server.
        api_response = api_instance.asset_server_get_unit_classes(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_get_unit_classes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_get_unit_classes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the server. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsUnitClass**](ItemsUnitClass.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of unit classes. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_list**
> ItemsAssetServer asset_server_list(selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve a list of all Asset Servers known to this service.

### Example


```python
import openapi_client
from openapi_client.models.items_asset_server import ItemsAssetServer
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
    api_instance = openapi_client.AssetServerApi(api_client)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve a list of all Asset Servers known to this service.
        api_response = api_instance.asset_server_list(selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AssetServerApi->asset_server_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsAssetServer**](ItemsAssetServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of servers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asset_server_update_security_entry**
> asset_server_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children, security_item=security_item)

Update a security entry owned by the asset server.

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
    api_instance = openapi_client.AssetServerApi(api_client)
    name = 'name_example' # str | The name of the security entry.
    web_id = 'web_id_example' # str | The ID of the asset server where the security entry will be updated.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)
    security_item = 'security_item_example' # str | The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the 'Default' security item will be updated. (optional)

    try:
        # Update a security entry owned by the asset server.
        api_instance.asset_server_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children, security_item=security_item)
    except Exception as e:
        print("Exception when calling AssetServerApi->asset_server_update_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. | 
 **web_id** | **str**| The ID of the asset server where the security entry will be updated. | 
 **security_entry** | [**SecurityEntry**](SecurityEntry.md)| The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed. | 
 **apply_to_children** | **bool**| If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. | [optional] 
 **security_item** | **str**| The security item of the desired security entries to be updated. If the parameter is not specified, security entries of the &#39;Default&#39; security item will be updated. | [optional] 

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

