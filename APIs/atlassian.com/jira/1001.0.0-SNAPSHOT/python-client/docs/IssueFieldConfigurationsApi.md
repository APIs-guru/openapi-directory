# openapi_client.IssueFieldConfigurationsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assign_field_configuration_scheme_to_project**](IssueFieldConfigurationsApi.md#assign_field_configuration_scheme_to_project) | **PUT** /rest/api/3/fieldconfigurationscheme/project | Assign field configuration scheme to project
[**create_field_configuration**](IssueFieldConfigurationsApi.md#create_field_configuration) | **POST** /rest/api/3/fieldconfiguration | Create field configuration
[**create_field_configuration_scheme**](IssueFieldConfigurationsApi.md#create_field_configuration_scheme) | **POST** /rest/api/3/fieldconfigurationscheme | Create field configuration scheme
[**delete_field_configuration**](IssueFieldConfigurationsApi.md#delete_field_configuration) | **DELETE** /rest/api/3/fieldconfiguration/{id} | Delete field configuration
[**delete_field_configuration_scheme**](IssueFieldConfigurationsApi.md#delete_field_configuration_scheme) | **DELETE** /rest/api/3/fieldconfigurationscheme/{id} | Delete field configuration scheme
[**get_all_field_configuration_schemes**](IssueFieldConfigurationsApi.md#get_all_field_configuration_schemes) | **GET** /rest/api/3/fieldconfigurationscheme | Get all field configuration schemes
[**get_all_field_configurations**](IssueFieldConfigurationsApi.md#get_all_field_configurations) | **GET** /rest/api/3/fieldconfiguration | Get all field configurations
[**get_field_configuration_items**](IssueFieldConfigurationsApi.md#get_field_configuration_items) | **GET** /rest/api/3/fieldconfiguration/{id}/fields | Get field configuration items
[**get_field_configuration_scheme_mappings**](IssueFieldConfigurationsApi.md#get_field_configuration_scheme_mappings) | **GET** /rest/api/3/fieldconfigurationscheme/mapping | Get field configuration issue type items
[**get_field_configuration_scheme_project_mapping**](IssueFieldConfigurationsApi.md#get_field_configuration_scheme_project_mapping) | **GET** /rest/api/3/fieldconfigurationscheme/project | Get field configuration schemes for projects
[**remove_issue_types_from_global_field_configuration_scheme**](IssueFieldConfigurationsApi.md#remove_issue_types_from_global_field_configuration_scheme) | **POST** /rest/api/3/fieldconfigurationscheme/{id}/mapping/delete | Remove issue types from field configuration scheme
[**set_field_configuration_scheme_mapping**](IssueFieldConfigurationsApi.md#set_field_configuration_scheme_mapping) | **PUT** /rest/api/3/fieldconfigurationscheme/{id}/mapping | Assign issue types to field configurations
[**update_field_configuration**](IssueFieldConfigurationsApi.md#update_field_configuration) | **PUT** /rest/api/3/fieldconfiguration/{id} | Update field configuration
[**update_field_configuration_items**](IssueFieldConfigurationsApi.md#update_field_configuration_items) | **PUT** /rest/api/3/fieldconfiguration/{id}/fields | Update field configuration items
[**update_field_configuration_scheme**](IssueFieldConfigurationsApi.md#update_field_configuration_scheme) | **PUT** /rest/api/3/fieldconfigurationscheme/{id} | Update field configuration scheme


# **assign_field_configuration_scheme_to_project**
> object assign_field_configuration_scheme_to_project(field_configuration_scheme_project_association)

Assign field configuration scheme to project

Assigns a field configuration scheme to a project. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.  Field configuration schemes can only be assigned to classic projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.field_configuration_scheme_project_association import FieldConfigurationSchemeProjectAssociation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    field_configuration_scheme_project_association = {"fieldConfigurationSchemeId":"10000","projectId":"10000"} # FieldConfigurationSchemeProjectAssociation | 

    try:
        # Assign field configuration scheme to project
        api_response = api_instance.assign_field_configuration_scheme_to_project(field_configuration_scheme_project_association)
        print("The response of IssueFieldConfigurationsApi->assign_field_configuration_scheme_to_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->assign_field_configuration_scheme_to_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_configuration_scheme_project_association** | [**FieldConfigurationSchemeProjectAssociation**](FieldConfigurationSchemeProjectAssociation.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the project is not a classic project. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permissions. |  -  |
**404** | Returned if the project is missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_field_configuration**
> FieldConfiguration create_field_configuration(field_configuration_details)

Create field configuration

Creates a field configuration. The field configuration is created with the same field properties as the default configuration, with all the fields being optional.  This operation can only create configurations for use in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.field_configuration import FieldConfiguration
from openapi_client.models.field_configuration_details import FieldConfigurationDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    field_configuration_details = {"description":"My field configuration description","name":"My Field Configuration"} # FieldConfigurationDetails | 

    try:
        # Create field configuration
        api_response = api_instance.create_field_configuration(field_configuration_details)
        print("The response of IssueFieldConfigurationsApi->create_field_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->create_field_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_configuration_details** | [**FieldConfigurationDetails**](FieldConfigurationDetails.md)|  | 

### Return type

[**FieldConfiguration**](FieldConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_field_configuration_scheme**
> FieldConfigurationScheme create_field_configuration_scheme(update_field_configuration_scheme_details)

Create field configuration scheme

Creates a field configuration scheme.  This operation can only create field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.field_configuration_scheme import FieldConfigurationScheme
from openapi_client.models.update_field_configuration_scheme_details import UpdateFieldConfigurationSchemeDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    update_field_configuration_scheme_details = {"description":"We can use this one for software projects.","name":"Field Configuration Scheme for software related projects"} # UpdateFieldConfigurationSchemeDetails | The details of the field configuration scheme.

    try:
        # Create field configuration scheme
        api_response = api_instance.create_field_configuration_scheme(update_field_configuration_scheme_details)
        print("The response of IssueFieldConfigurationsApi->create_field_configuration_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->create_field_configuration_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_field_configuration_scheme_details** | [**UpdateFieldConfigurationSchemeDetails**](UpdateFieldConfigurationSchemeDetails.md)| The details of the field configuration scheme. | 

### Return type

[**FieldConfigurationScheme**](FieldConfigurationScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_field_configuration**
> object delete_field_configuration(id)

Delete field configuration

Deletes a field configuration.  This operation can only delete configurations used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration.

    try:
        # Delete field configuration
        api_response = api_instance.delete_field_configuration(id)
        print("The response of IssueFieldConfigurationsApi->delete_field_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->delete_field_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_field_configuration_scheme**
> object delete_field_configuration_scheme(id)

Delete field configuration scheme

Deletes a field configuration scheme.  This operation can only delete field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration scheme.

    try:
        # Delete field configuration scheme
        api_response = api_instance.delete_field_configuration_scheme(id)
        print("The response of IssueFieldConfigurationsApi->delete_field_configuration_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->delete_field_configuration_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration scheme. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_field_configuration_schemes**
> PageBeanFieldConfigurationScheme get_all_field_configuration_schemes(start_at=start_at, max_results=max_results, id=id)

Get all field configuration schemes

Returns a [paginated](#pagination) list of field configuration schemes.  Only field configuration schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field_configuration_scheme import PageBeanFieldConfigurationScheme
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    id = [56] # List[int] | The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)

    try:
        # Get all field configuration schemes
        api_response = api_instance.get_all_field_configuration_schemes(start_at=start_at, max_results=max_results, id=id)
        print("The response of IssueFieldConfigurationsApi->get_all_field_configuration_schemes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->get_all_field_configuration_schemes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **id** | [**List[int]**](int.md)| The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanFieldConfigurationScheme**](PageBeanFieldConfigurationScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_field_configurations**
> PageBeanFieldConfigurationDetails get_all_field_configurations(start_at=start_at, max_results=max_results, id=id, is_default=is_default, query=query)

Get all field configurations

Returns a [paginated](#pagination) list of field configurations. The list can be for all field configurations or a subset determined by any combination of these criteria:   *  a list of field configuration item IDs.  *  whether the field configuration is a default.  *  whether the field configuration name or description contains a query string.  Only field configurations used in company-managed (classic) projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field_configuration_details import PageBeanFieldConfigurationDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    id = [56] # List[int] | The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`. (optional)
    is_default = False # bool | If *true* returns default field configurations only. (optional) (default to False)
    query = '' # str | The query string used to match against field configuration names and descriptions. (optional) (default to '')

    try:
        # Get all field configurations
        api_response = api_instance.get_all_field_configurations(start_at=start_at, max_results=max_results, id=id, is_default=is_default, query=query)
        print("The response of IssueFieldConfigurationsApi->get_all_field_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->get_all_field_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **id** | [**List[int]**](int.md)| The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 
 **is_default** | **bool**| If *true* returns default field configurations only. | [optional] [default to False]
 **query** | **str**| The query string used to match against field configuration names and descriptions. | [optional] [default to &#39;&#39;]

### Return type

[**PageBeanFieldConfigurationDetails**](PageBeanFieldConfigurationDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_field_configuration_items**
> PageBeanFieldConfigurationItem get_field_configuration_items(id, start_at=start_at, max_results=max_results)

Get field configuration items

Returns a [paginated](#pagination) list of all fields for a configuration.  Only the fields from configurations used in company-managed (classic) projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field_configuration_item import PageBeanFieldConfigurationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get field configuration items
        api_response = api_instance.get_field_configuration_items(id, start_at=start_at, max_results=max_results)
        print("The response of IssueFieldConfigurationsApi->get_field_configuration_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->get_field_configuration_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanFieldConfigurationItem**](PageBeanFieldConfigurationItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_field_configuration_scheme_mappings**
> PageBeanFieldConfigurationIssueTypeItem get_field_configuration_scheme_mappings(start_at=start_at, max_results=max_results, field_configuration_scheme_id=field_configuration_scheme_id)

Get field configuration issue type items

Returns a [paginated](#pagination) list of field configuration issue type items.  Only items used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field_configuration_issue_type_item import PageBeanFieldConfigurationIssueTypeItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    field_configuration_scheme_id = [56] # List[int] | The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`. (optional)

    try:
        # Get field configuration issue type items
        api_response = api_instance.get_field_configuration_scheme_mappings(start_at=start_at, max_results=max_results, field_configuration_scheme_id=field_configuration_scheme_id)
        print("The response of IssueFieldConfigurationsApi->get_field_configuration_scheme_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->get_field_configuration_scheme_mappings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **field_configuration_scheme_id** | [**List[int]**](int.md)| The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: &#x60;fieldConfigurationSchemeId&#x3D;10000&amp;fieldConfigurationSchemeId&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanFieldConfigurationIssueTypeItem**](PageBeanFieldConfigurationIssueTypeItem.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if no field configuration schemes are found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_field_configuration_scheme_project_mapping**
> PageBeanFieldConfigurationSchemeProjects get_field_configuration_scheme_project_mapping(project_id, start_at=start_at, max_results=max_results)

Get field configuration schemes for projects

Returns a [paginated](#pagination) list of field configuration schemes and, for each scheme, a list of the projects that use it.  The list is sorted by field configuration scheme ID. The first item contains the list of project IDs assigned to the default field configuration scheme.  Only field configuration schemes used in classic projects are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field_configuration_scheme_projects import PageBeanFieldConfigurationSchemeProjects
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    project_id = [56] # List[int] | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)

    try:
        # Get field configuration schemes for projects
        api_response = api_instance.get_field_configuration_scheme_project_mapping(project_id, start_at=start_at, max_results=max_results)
        print("The response of IssueFieldConfigurationsApi->get_field_configuration_scheme_project_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->get_field_configuration_scheme_project_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | [**List[int]**](int.md)| The list of project IDs. To include multiple projects, separate IDs with ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanFieldConfigurationSchemeProjects**](PageBeanFieldConfigurationSchemeProjects.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_issue_types_from_global_field_configuration_scheme**
> object remove_issue_types_from_global_field_configuration_scheme(id, issue_type_ids_to_remove)

Remove issue types from field configuration scheme

Removes issue types from the field configuration scheme.  This operation can only modify field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.issue_type_ids_to_remove import IssueTypeIdsToRemove
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration scheme.
    issue_type_ids_to_remove = {"issueTypeIds":["10000","10001","10002"]} # IssueTypeIdsToRemove | The issue type IDs to remove.

    try:
        # Remove issue types from field configuration scheme
        api_response = api_instance.remove_issue_types_from_global_field_configuration_scheme(id, issue_type_ids_to_remove)
        print("The response of IssueFieldConfigurationsApi->remove_issue_types_from_global_field_configuration_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->remove_issue_types_from_global_field_configuration_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration scheme. | 
 **issue_type_ids_to_remove** | [**IssueTypeIdsToRemove**](IssueTypeIdsToRemove.md)| The issue type IDs to remove. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration scheme or the issue types are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_field_configuration_scheme_mapping**
> object set_field_configuration_scheme_mapping(id, associate_field_configurations_with_issue_types_request)

Assign issue types to field configurations

Assigns issue types to field configurations on field configuration scheme.  This operation can only modify field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.associate_field_configurations_with_issue_types_request import AssociateFieldConfigurationsWithIssueTypesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration scheme.
    associate_field_configurations_with_issue_types_request = {"mappings":[{"fieldConfigurationId":"10000","issueTypeId":"default"},{"fieldConfigurationId":"10002","issueTypeId":"10001"},{"fieldConfigurationId":"10001","issueTypeId":"10002"}]} # AssociateFieldConfigurationsWithIssueTypesRequest | 

    try:
        # Assign issue types to field configurations
        api_response = api_instance.set_field_configuration_scheme_mapping(id, associate_field_configurations_with_issue_types_request)
        print("The response of IssueFieldConfigurationsApi->set_field_configuration_scheme_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->set_field_configuration_scheme_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration scheme. | 
 **associate_field_configurations_with_issue_types_request** | [**AssociateFieldConfigurationsWithIssueTypesRequest**](AssociateFieldConfigurationsWithIssueTypesRequest.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration scheme, the field configuration, or the issue type is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_field_configuration**
> object update_field_configuration(id, field_configuration_details)

Update field configuration

Updates a field configuration. The name and the description provided in the request override the existing values.  This operation can only update configurations used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.field_configuration_details import FieldConfigurationDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration.
    field_configuration_details = {"description":"A brand new description","name":"My Modified Field Configuration"} # FieldConfigurationDetails | 

    try:
        # Update field configuration
        api_response = api_instance.update_field_configuration(id, field_configuration_details)
        print("The response of IssueFieldConfigurationsApi->update_field_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->update_field_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration. | 
 **field_configuration_details** | [**FieldConfigurationDetails**](FieldConfigurationDetails.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_field_configuration_items**
> object update_field_configuration_items(id, field_configuration_items_details)

Update field configuration items

Updates fields in a field configuration. The properties of the field configuration fields provided override the existing values.  This operation can only update field configurations used in company-managed (classic) projects.  The operation can set the renderer for text fields to the default text renderer (`text-renderer`) or wiki style renderer (`wiki-renderer`). However, the renderer cannot be updated for fields using the autocomplete renderer (`autocomplete-renderer`).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.field_configuration_items_details import FieldConfigurationItemsDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration.
    field_configuration_items_details = {"fieldConfigurationItems":[{"description":"The new description of this item.","id":"customfield_10012","isHidden":false},{"id":"customfield_10011","isRequired":true},{"description":"Another new description.","id":"customfield_10010","isHidden":false,"isRequired":false,"renderer":"wiki-renderer"}]} # FieldConfigurationItemsDetails | 

    try:
        # Update field configuration items
        api_response = api_instance.update_field_configuration_items(id, field_configuration_items_details)
        print("The response of IssueFieldConfigurationsApi->update_field_configuration_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->update_field_configuration_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration. | 
 **field_configuration_items_details** | [**FieldConfigurationItemsDetails**](FieldConfigurationItemsDetails.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the field configuration is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_field_configuration_scheme**
> object update_field_configuration_scheme(id, update_field_configuration_scheme_details)

Update field configuration scheme

Updates a field configuration scheme.  This operation can only update field configuration schemes used in company-managed (classic) projects.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.update_field_configuration_scheme_details import UpdateFieldConfigurationSchemeDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueFieldConfigurationsApi(api_client)
    id = 56 # int | The ID of the field configuration scheme.
    update_field_configuration_scheme_details = {"description":"We can use this one for software projects.","name":"Field Configuration Scheme for software related projects"} # UpdateFieldConfigurationSchemeDetails | The details of the field configuration scheme.

    try:
        # Update field configuration scheme
        api_response = api_instance.update_field_configuration_scheme(id, update_field_configuration_scheme_details)
        print("The response of IssueFieldConfigurationsApi->update_field_configuration_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldConfigurationsApi->update_field_configuration_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The ID of the field configuration scheme. | 
 **update_field_configuration_scheme_details** | [**UpdateFieldConfigurationSchemeDetails**](UpdateFieldConfigurationSchemeDetails.md)| The details of the field configuration scheme. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permissions. |  -  |
**404** | Returned if the field configuration scheme is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

