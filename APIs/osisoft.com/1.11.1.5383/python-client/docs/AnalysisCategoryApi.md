# openapi_client.AnalysisCategoryApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analysis_category_create_security_entry**](AnalysisCategoryApi.md#analysis_category_create_security_entry) | **POST** /analysiscategories/{webId}/securityentries | Create a security entry owned by the analysis category.
[**analysis_category_delete**](AnalysisCategoryApi.md#analysis_category_delete) | **DELETE** /analysiscategories/{webId} | Delete an analysis category.
[**analysis_category_delete_security_entry**](AnalysisCategoryApi.md#analysis_category_delete_security_entry) | **DELETE** /analysiscategories/{webId}/securityentries/{name} | Delete a security entry owned by the analysis category.
[**analysis_category_get**](AnalysisCategoryApi.md#analysis_category_get) | **GET** /analysiscategories/{webId} | Retrieve an analysis category.
[**analysis_category_get_by_path**](AnalysisCategoryApi.md#analysis_category_get_by_path) | **GET** /analysiscategories | Retrieve an analysis category by path.
[**analysis_category_get_security**](AnalysisCategoryApi.md#analysis_category_get_security) | **GET** /analysiscategories/{webId}/security | Get the security information of the specified security item associated with the analysis category for a specified user.
[**analysis_category_get_security_entries**](AnalysisCategoryApi.md#analysis_category_get_security_entries) | **GET** /analysiscategories/{webId}/securityentries | Retrieve the security entries associated with the analysis category based on the specified criteria. By default, all security entries for this analysis category are returned.
[**analysis_category_get_security_entry_by_name**](AnalysisCategoryApi.md#analysis_category_get_security_entry_by_name) | **GET** /analysiscategories/{webId}/securityentries/{name} | Retrieve the security entry associated with the analysis category with the specified name.
[**analysis_category_update**](AnalysisCategoryApi.md#analysis_category_update) | **PATCH** /analysiscategories/{webId} | Update an analysis category by replacing items in its definition.
[**analysis_category_update_security_entry**](AnalysisCategoryApi.md#analysis_category_update_security_entry) | **PUT** /analysiscategories/{webId}/securityentries/{name} | Update a security entry owned by the analysis category.


# **analysis_category_create_security_entry**
> analysis_category_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, web_id_type=web_id_type)

Create a security entry owned by the analysis category.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    web_id = 'web_id_example' # str | The ID of the analysis category, where the security entry will be created.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Create a security entry owned by the analysis category.
        api_instance.analysis_category_create_security_entry(web_id, security_entry, apply_to_children=apply_to_children, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_create_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the analysis category, where the security entry will be created. | 
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

# **analysis_category_delete**
> analysis_category_delete(web_id)

Delete an analysis category.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    web_id = 'web_id_example' # str | The ID of the analysis category to delete.

    try:
        # Delete an analysis category.
        api_instance.analysis_category_delete(web_id)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the analysis category to delete. | 

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
**204** | The analysis category was deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_category_delete_security_entry**
> analysis_category_delete_security_entry(name, web_id, apply_to_children=apply_to_children)

Delete a security entry owned by the analysis category.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the analysis category, where the security entry will be deleted.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)

    try:
        # Delete a security entry owned by the analysis category.
        api_instance.analysis_category_delete_security_entry(name, web_id, apply_to_children=apply_to_children)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_delete_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the analysis category, where the security entry will be deleted. | 
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

# **analysis_category_get**
> AnalysisCategory analysis_category_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an analysis category.

### Example


```python
import openapi_client
from openapi_client.models.analysis_category import AnalysisCategory
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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    web_id = 'web_id_example' # str | The ID of the analysis category.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an analysis category.
        api_response = api_instance.analysis_category_get(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisCategoryApi->analysis_category_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the analysis category. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AnalysisCategory**](AnalysisCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified analysis category. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_category_get_by_path**
> AnalysisCategory analysis_category_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve an analysis category by path.

### Example


```python
import openapi_client
from openapi_client.models.analysis_category import AnalysisCategory
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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    path = 'path_example' # str | The path to the target analysis category.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve an analysis category by path.
        api_response = api_instance.analysis_category_get_by_path(path, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisCategoryApi->analysis_category_get_by_path:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_get_by_path: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **path** | **str**| The path to the target analysis category. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**AnalysisCategory**](AnalysisCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified analysis category. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_category_get_security**
> ItemsSecurityRights analysis_category_get_security(web_id, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)

Get the security information of the specified security item associated with the analysis category for a specified user.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    web_id = 'web_id_example' # str | The ID of the analysis category for the security to be checked.
    user_identity = ['user_identity_example'] # List[str] | The user identity for the security information to be checked. Multiple security identities may be specified with multiple instances of the parameter. If the parameter is not specified, only the current user's security rights will be returned.
    force_refresh = True # bool | Indicates if the security cache should be refreshed before getting security information. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Get the security information of the specified security item associated with the analysis category for a specified user.
        api_response = api_instance.analysis_category_get_security(web_id, user_identity, force_refresh=force_refresh, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisCategoryApi->analysis_category_get_security:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_get_security: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the analysis category for the security to be checked. | 
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

# **analysis_category_get_security_entries**
> ItemsSecurityEntry analysis_category_get_security_entries(web_id, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entries associated with the analysis category based on the specified criteria. By default, all security entries for this analysis category are returned.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    web_id = 'web_id_example' # str | The ID of the analysis category.
    name_filter = 'name_filter_example' # str | The name query string used for filtering security entries. The default is no filter. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entries associated with the analysis category based on the specified criteria. By default, all security entries for this analysis category are returned.
        api_response = api_instance.analysis_category_get_security_entries(web_id, name_filter=name_filter, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisCategoryApi->analysis_category_get_security_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_get_security_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the analysis category. | 
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

# **analysis_category_get_security_entry_by_name**
> SecurityEntry analysis_category_get_security_entry_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Retrieve the security entry associated with the analysis category with the specified name.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    name = 'name_example' # str | The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username.
    web_id = 'web_id_example' # str | The ID of the analysis category.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Retrieve the security entry associated with the analysis category with the specified name.
        api_response = api_instance.analysis_category_get_security_entry_by_name(name, web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of AnalysisCategoryApi->analysis_category_get_security_entry_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_get_security_entry_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. For every backslash character (\\) in the security entry name, replace with asterisk (*). As an example, use domain*username instead of domain\\username. | 
 **web_id** | **str**| The ID of the analysis category. | 
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

# **analysis_category_update**
> analysis_category_update(web_id, category)

Update an analysis category by replacing items in its definition.

### Example


```python
import openapi_client
from openapi_client.models.analysis_category import AnalysisCategory
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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    web_id = 'web_id_example' # str | The ID of the analysis category to update.
    category = openapi_client.AnalysisCategory() # AnalysisCategory | A partial analysis category containing the desired changes.

    try:
        # Update an analysis category by replacing items in its definition.
        api_instance.analysis_category_update(web_id, category)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the analysis category to update. | 
 **category** | [**AnalysisCategory**](AnalysisCategory.md)| A partial analysis category containing the desired changes. | 

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
**204** | The analysis category was updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analysis_category_update_security_entry**
> analysis_category_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children)

Update a security entry owned by the analysis category.

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
    api_instance = openapi_client.AnalysisCategoryApi(api_client)
    name = 'name_example' # str | The name of the security entry.
    web_id = 'web_id_example' # str | The ID of the analysis category, where the security entry will be updated.
    security_entry = openapi_client.SecurityEntry() # SecurityEntry | The new security entry definition. The full list of allow and deny rights must be supplied or they will be removed.
    apply_to_children = True # bool | If false, the new access permissions are only applied to the associated object. If true, the access permissions of children with any parent-child reference types will change when the permissions on the primary parent change. (optional)

    try:
        # Update a security entry owned by the analysis category.
        api_instance.analysis_category_update_security_entry(name, web_id, security_entry, apply_to_children=apply_to_children)
    except Exception as e:
        print("Exception when calling AnalysisCategoryApi->analysis_category_update_security_entry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The name of the security entry. | 
 **web_id** | **str**| The ID of the analysis category, where the security entry will be updated. | 
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

