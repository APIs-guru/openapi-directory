# openapi_client.AdminApi

All URIs are relative to *http://apicurio.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_global_rule_0**](AdminApi.md#create_global_rule_0) | **POST** /admin/rules | Create global rule
[**create_role_mapping**](AdminApi.md#create_role_mapping) | **POST** /admin/roleMappings | Create a new role mapping
[**delete_all_global_rules_0**](AdminApi.md#delete_all_global_rules_0) | **DELETE** /admin/rules | Delete all global rules
[**delete_global_rule_0**](AdminApi.md#delete_global_rule_0) | **DELETE** /admin/rules/{rule} | Delete global rule
[**delete_role_mapping**](AdminApi.md#delete_role_mapping) | **DELETE** /admin/roleMappings/{principalId} | Delete a role mapping
[**export_data**](AdminApi.md#export_data) | **GET** /admin/export | Export registry data
[**get_config_property**](AdminApi.md#get_config_property) | **GET** /admin/config/properties/{propertyName} | Get configuration property value
[**get_global_rule_config_0**](AdminApi.md#get_global_rule_config_0) | **GET** /admin/rules/{rule} | Get global rule configuration
[**get_log_configuration**](AdminApi.md#get_log_configuration) | **GET** /admin/loggers/{logger} | Get a single logger configuration
[**get_role_mapping**](AdminApi.md#get_role_mapping) | **GET** /admin/roleMappings/{principalId} | Return a single role mapping
[**import_data**](AdminApi.md#import_data) | **POST** /admin/import | Import registry data
[**list_artifact_types_0**](AdminApi.md#list_artifact_types_0) | **GET** /admin/artifactTypes | List artifact types
[**list_config_properties**](AdminApi.md#list_config_properties) | **GET** /admin/config/properties | List all configuration properties
[**list_global_rules_0**](AdminApi.md#list_global_rules_0) | **GET** /admin/rules | List global rules
[**list_log_configurations**](AdminApi.md#list_log_configurations) | **GET** /admin/loggers | List logging configurations
[**list_role_mappings**](AdminApi.md#list_role_mappings) | **GET** /admin/roleMappings | List all role mappings
[**remove_log_configuration**](AdminApi.md#remove_log_configuration) | **DELETE** /admin/loggers/{logger} | Removes logger configuration
[**reset_config_property**](AdminApi.md#reset_config_property) | **DELETE** /admin/config/properties/{propertyName} | Reset a configuration property
[**set_log_configuration**](AdminApi.md#set_log_configuration) | **PUT** /admin/loggers/{logger} | Set a logger&#39;s configuration
[**update_config_property**](AdminApi.md#update_config_property) | **PUT** /admin/config/properties/{propertyName} | Update a configuration property
[**update_global_rule_config_0**](AdminApi.md#update_global_rule_config_0) | **PUT** /admin/rules/{rule} | Update global rule configuration
[**update_role_mapping**](AdminApi.md#update_role_mapping) | **PUT** /admin/roleMappings/{principalId} | Update a role mapping


# **create_global_rule_0**
> create_global_rule_0(rule)

Create global rule

Adds a rule to the list of globally configured rules.  This operation can fail for the following reasons:  * The rule type is unknown (HTTP error `400`) * The rule already exists (HTTP error `409`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    rule = openapi_client.Rule() # Rule | 

    try:
        # Create global rule
        api_instance.create_global_rule_0(rule)
    except Exception as e:
        print("Exception when calling AdminApi->create_global_rule_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | [**Rule**](Rule.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The global rule was added. |  -  |
**400** | Common response for all operations that can return a &#x60;400&#x60; error. |  -  |
**409** | Common response used when an input conflicts with existing data. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_role_mapping**
> create_role_mapping(role_mapping)

Create a new role mapping

Creates a new mapping between a user/principal and a role.  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`)  

### Example


```python
import openapi_client
from openapi_client.models.role_mapping import RoleMapping
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    role_mapping = openapi_client.RoleMapping() # RoleMapping | 

    try:
        # Create a new role mapping
        api_instance.create_role_mapping(role_mapping)
    except Exception as e:
        print("Exception when calling AdminApi->create_role_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **role_mapping** | [**RoleMapping**](RoleMapping.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned when the role mapping was successfully created. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_all_global_rules_0**
> delete_all_global_rules_0()

Delete all global rules

Deletes all globally configured rules.  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # Delete all global rules
        api_instance.delete_all_global_rules_0()
    except Exception as e:
        print("Exception when calling AdminApi->delete_all_global_rules_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | All global rules have been removed successfully. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_global_rule_0**
> delete_global_rule_0(rule)

Delete global rule

Deletes a single global rule.  If this is the only rule configured, this is the same as deleting **all** rules.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * Rule cannot be deleted (HTTP error `409`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.rule_type import RuleType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    rule = openapi_client.RuleType() # RuleType | The unique name/type of a rule.

    try:
        # Delete global rule
        api_instance.delete_global_rule_0(rule)
    except Exception as e:
        print("Exception when calling AdminApi->delete_global_rule_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | [**RuleType**](.md)| The unique name/type of a rule. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The global rule was successfully deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_role_mapping**
> delete_role_mapping(principal_id)

Delete a role mapping

Deletes a single role mapping, effectively denying access to a user/principal.  This operation can fail for the following reasons:  * No role mapping for the principalId exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    principal_id = 'principal_id_example' # str | Unique id of a principal (typically either a user or service account).

    try:
        # Delete a role mapping
        api_instance.delete_role_mapping(principal_id)
    except Exception as e:
        print("Exception when calling AdminApi->delete_role_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **principal_id** | **str**| Unique id of a principal (typically either a user or service account). | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Response returned when the delete was successful. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_data**
> DownloadRef export_data(for_browser=for_browser)

Export registry data

Exports registry data as a ZIP archive.

### Example


```python
import openapi_client
from openapi_client.models.download_ref import DownloadRef
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    for_browser = True # bool | Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called `href`.  This `href` will be a single-use, naked download link suitable for use by a web browser to download the content. (optional)

    try:
        # Export registry data
        api_response = api_instance.export_data(for_browser=for_browser)
        print("The response of AdminApi->export_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->export_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **for_browser** | **bool**| Indicates if the operation is done for a browser.  If true, the response will be a JSON payload with a property called &#x60;href&#x60;.  This &#x60;href&#x60; will be a single-use, naked download link suitable for use by a web browser to download the content. | [optional] 

### Return type

[**DownloadRef**](DownloadRef.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/zip

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response when the export is successful. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_config_property**
> ConfigurationProperty get_config_property(property_name)

Get configuration property value

Returns the value of a single configuration property.  This operation may fail for one of the following reasons:  * Property not found or not configured (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.configuration_property import ConfigurationProperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    property_name = 'property_name_example' # str | The name of a configuration property.

    try:
        # Get configuration property value
        api_response = api_instance.get_config_property(property_name)
        print("The response of AdminApi->get_config_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_config_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_name** | **str**| The name of a configuration property. | 

### Return type

[**ConfigurationProperty**](ConfigurationProperty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The configuration property value. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_global_rule_config_0**
> Rule get_global_rule_config_0(rule)

Get global rule configuration

Returns information about the named globally configured rule.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.models.rule_type import RuleType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    rule = openapi_client.RuleType() # RuleType | The unique name/type of a rule.

    try:
        # Get global rule configuration
        api_response = api_instance.get_global_rule_config_0(rule)
        print("The response of AdminApi->get_global_rule_config_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_global_rule_config_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | [**RuleType**](.md)| The unique name/type of a rule. | 

### Return type

[**Rule**](Rule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The global rule&#39;s configuration. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_log_configuration**
> NamedLogConfiguration get_log_configuration(logger)

Get a single logger configuration

Returns the configured logger configuration for the provided logger name, if no logger configuration is persisted it will return the current default log configuration in the system.

### Example


```python
import openapi_client
from openapi_client.models.named_log_configuration import NamedLogConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    logger = 'logger_example' # str | The name of a single logger.

    try:
        # Get a single logger configuration
        api_response = api_instance.get_log_configuration(logger)
        print("The response of AdminApi->get_log_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_log_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logger** | **str**| The name of a single logger. | 

### Return type

[**NamedLogConfiguration**](NamedLogConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The logger configuration for the named logger. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_role_mapping**
> RoleMapping get_role_mapping(principal_id)

Return a single role mapping

Gets the details of a single role mapping (by `principalId`).  This operation can fail for the following reasons:  * No role mapping for the `principalId` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.role_mapping import RoleMapping
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    principal_id = 'principal_id_example' # str | Unique id of a principal (typically either a user or service account).

    try:
        # Return a single role mapping
        api_response = api_instance.get_role_mapping(principal_id)
        print("The response of AdminApi->get_role_mapping:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->get_role_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **principal_id** | **str**| Unique id of a principal (typically either a user or service account). | 

### Return type

[**RoleMapping**](RoleMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | When successful, returns the details of a role mapping. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_data**
> import_data(body, x_registry_preserve_global_id=x_registry_preserve_global_id, x_registry_preserve_content_id=x_registry_preserve_content_id)

Import registry data

Imports registry data that was previously exported using the `/admin/export` operation.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    body = None # bytearray | The ZIP file representing the previously exported registry data.
    x_registry_preserve_global_id = True # bool | If this header is set to false, global ids of imported data will be ignored and replaced by next id in global id sequence. This allows to import any data even thought the global ids would cause a conflict. (optional)
    x_registry_preserve_content_id = True # bool | If this header is set to false, content ids of imported data will be ignored and replaced by next id in content id sequence. The mapping between content and artifacts will be preserved. This allows to import any data even thought the content ids would cause a conflict. (optional)

    try:
        # Import registry data
        api_instance.import_data(body, x_registry_preserve_global_id=x_registry_preserve_global_id, x_registry_preserve_content_id=x_registry_preserve_content_id)
    except Exception as e:
        print("Exception when calling AdminApi->import_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **bytearray**| The ZIP file representing the previously exported registry data. | 
 **x_registry_preserve_global_id** | **bool**| If this header is set to false, global ids of imported data will be ignored and replaced by next id in global id sequence. This allows to import any data even thought the global ids would cause a conflict. | [optional] 
 **x_registry_preserve_content_id** | **bool**| If this header is set to false, content ids of imported data will be ignored and replaced by next id in content id sequence. The mapping between content and artifacts will be preserved. This allows to import any data even thought the content ids would cause a conflict. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/zip
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Indicates that the import was successful. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_artifact_types_0**
> List[ArtifactTypeInfo] list_artifact_types_0()

List artifact types

Gets a list of all the configured artifact types.  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.artifact_type_info import ArtifactTypeInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # List artifact types
        api_response = api_instance.list_artifact_types_0()
        print("The response of AdminApi->list_artifact_types_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_artifact_types_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ArtifactTypeInfo]**](ArtifactTypeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of available artifact types. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_config_properties**
> List[ConfigurationProperty] list_config_properties()

List all configuration properties

Returns a list of all configuration properties that have been set.  The list is not paged.  This operation may fail for one of the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.configuration_property import ConfigurationProperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # List all configuration properties
        api_response = api_instance.list_config_properties()
        print("The response of AdminApi->list_config_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_config_properties: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ConfigurationProperty]**](ConfigurationProperty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | On a successful response, returns a list of configuration properties. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_global_rules_0**
> List[RuleType] list_global_rules_0()

List global rules

Gets a list of all the currently configured global rules (if any).  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.rule_type import RuleType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # List global rules
        api_response = api_instance.list_global_rules_0()
        print("The response of AdminApi->list_global_rules_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_global_rules_0: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RuleType]**](RuleType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of names of the globally configured rules. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_log_configurations**
> List[NamedLogConfiguration] list_log_configurations()

List logging configurations

List all of the configured logging levels.  These override the default logging configuration.

### Example


```python
import openapi_client
from openapi_client.models.named_log_configuration import NamedLogConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # List logging configurations
        api_response = api_instance.list_log_configurations()
        print("The response of AdminApi->list_log_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_log_configurations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[NamedLogConfiguration]**](NamedLogConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of logging configurations. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_role_mappings**
> List[RoleMapping] list_role_mappings()

List all role mappings

Gets a list of all role mappings configured in the registry (if any).  This operation can fail for the following reasons:  * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.role_mapping import RoleMapping
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)

    try:
        # List all role mappings
        api_response = api_instance.list_role_mappings()
        print("The response of AdminApi->list_role_mappings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->list_role_mappings: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[RoleMapping]**](RoleMapping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response will return the list of role mappings. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_log_configuration**
> NamedLogConfiguration remove_log_configuration(logger)

Removes logger configuration

Removes the configured logger configuration (if any) for the given logger.

### Example


```python
import openapi_client
from openapi_client.models.named_log_configuration import NamedLogConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    logger = 'logger_example' # str | The name of a single logger.

    try:
        # Removes logger configuration
        api_response = api_instance.remove_log_configuration(logger)
        print("The response of AdminApi->remove_log_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->remove_log_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logger** | **str**| The name of a single logger. | 

### Return type

[**NamedLogConfiguration**](NamedLogConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The default logger configuration (now that the configuration for this logger has been removed, the  default configuration is applied). |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_config_property**
> reset_config_property(property_name)

Reset a configuration property

Resets the value of a single configuration property.  This will return the property to its default value (see external documentation for supported properties and their default values).  This operation may fail for one of the following reasons:  * Property not found or not configured (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    property_name = 'property_name_example' # str | The name of a configuration property.

    try:
        # Reset a configuration property
        api_instance.reset_config_property(property_name)
    except Exception as e:
        print("Exception when calling AdminApi->reset_config_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_name** | **str**| The name of a configuration property. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The configuration property was deleted. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_log_configuration**
> NamedLogConfiguration set_log_configuration(logger, log_configuration)

Set a logger's configuration

Configures the logger referenced by the provided logger name with the given configuration.

### Example


```python
import openapi_client
from openapi_client.models.log_configuration import LogConfiguration
from openapi_client.models.named_log_configuration import NamedLogConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    logger = 'logger_example' # str | The name of a single logger.
    log_configuration = openapi_client.LogConfiguration() # LogConfiguration | The new logger configuration.

    try:
        # Set a logger's configuration
        api_response = api_instance.set_log_configuration(logger, log_configuration)
        print("The response of AdminApi->set_log_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->set_log_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logger** | **str**| The name of a single logger. | 
 **log_configuration** | [**LogConfiguration**](LogConfiguration.md)| The new logger configuration. | 

### Return type

[**NamedLogConfiguration**](NamedLogConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new configuration for the given logger. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_config_property**
> update_config_property(property_name, update_configuration_property)

Update a configuration property

Updates the value of a single configuration property.  This operation may fail for one of the following reasons:  * Property not found or not configured (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.update_configuration_property import UpdateConfigurationProperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    property_name = 'property_name_example' # str | The name of a configuration property.
    update_configuration_property = openapi_client.UpdateConfigurationProperty() # UpdateConfigurationProperty | 

    try:
        # Update a configuration property
        api_instance.update_config_property(property_name, update_configuration_property)
    except Exception as e:
        print("Exception when calling AdminApi->update_config_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_name** | **str**| The name of a configuration property. | 
 **update_configuration_property** | [**UpdateConfigurationProperty**](UpdateConfigurationProperty.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The configuration property was updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_global_rule_config_0**
> Rule update_global_rule_config_0(rule, rule2)

Update global rule configuration

Updates the configuration for a globally configured rule.  This operation can fail for the following reasons:  * Invalid rule name/type (HTTP error `400`) * No rule with name/type `rule` exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.rule import Rule
from openapi_client.models.rule_type import RuleType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    rule = openapi_client.RuleType() # RuleType | The unique name/type of a rule.
    rule2 = openapi_client.Rule() # Rule | 

    try:
        # Update global rule configuration
        api_response = api_instance.update_global_rule_config_0(rule, rule2)
        print("The response of AdminApi->update_global_rule_config_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminApi->update_global_rule_config_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | [**RuleType**](.md)| The unique name/type of a rule. | 
 **rule2** | [**Rule**](Rule.md)|  | 

### Return type

[**Rule**](Rule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The global rule&#39;s configuration was successfully updated. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_role_mapping**
> update_role_mapping(principal_id, update_role)

Update a role mapping

Updates a single role mapping for one user/principal.  This operation can fail for the following reasons:  * No role mapping for the principalId exists (HTTP error `404`) * A server error occurred (HTTP error `500`) 

### Example


```python
import openapi_client
from openapi_client.models.update_role import UpdateRole
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://apicurio.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://apicurio.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminApi(api_client)
    principal_id = 'principal_id_example' # str | Unique id of a principal (typically either a user or service account).
    update_role = openapi_client.UpdateRole() # UpdateRole | 

    try:
        # Update a role mapping
        api_instance.update_role_mapping(principal_id, update_role)
    except Exception as e:
        print("Exception when calling AdminApi->update_role_mapping: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **principal_id** | **str**| Unique id of a principal (typically either a user or service account). | 
 **update_role** | [**UpdateRole**](UpdateRole.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Response when the update is successful. |  -  |
**404** | Common response for all operations that can return a &#x60;404&#x60; error. |  -  |
**500** | Common response for all operations that can fail with an unexpected server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

