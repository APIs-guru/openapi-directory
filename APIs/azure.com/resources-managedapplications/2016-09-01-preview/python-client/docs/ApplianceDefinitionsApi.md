# openapi_client.ApplianceDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appliance_definitions_create_or_update**](ApplianceDefinitionsApi.md#appliance_definitions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions/{applianceDefinitionName} | 
[**appliance_definitions_create_or_update_by_id**](ApplianceDefinitionsApi.md#appliance_definitions_create_or_update_by_id) | **PUT** /{applianceDefinitionId} | 
[**appliance_definitions_delete**](ApplianceDefinitionsApi.md#appliance_definitions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions/{applianceDefinitionName} | 
[**appliance_definitions_delete_by_id**](ApplianceDefinitionsApi.md#appliance_definitions_delete_by_id) | **DELETE** /{applianceDefinitionId} | 
[**appliance_definitions_get**](ApplianceDefinitionsApi.md#appliance_definitions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions/{applianceDefinitionName} | 
[**appliance_definitions_get_by_id**](ApplianceDefinitionsApi.md#appliance_definitions_get_by_id) | **GET** /{applianceDefinitionId} | 
[**appliance_definitions_list_by_resource_group**](ApplianceDefinitionsApi.md#appliance_definitions_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions | 


# **appliance_definitions_create_or_update**
> ApplianceDefinition appliance_definitions_create_or_update(resource_group_name, appliance_definition_name, api_version, subscription_id, parameters)



Creates a new appliance definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.appliance_definition import ApplianceDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    appliance_definition_name = 'appliance_definition_name_example' # str | The name of the appliance definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    parameters = openapi_client.ApplianceDefinition() # ApplianceDefinition | Parameters supplied to the create or update an appliance definition.

    try:
        api_response = api_instance.appliance_definitions_create_or_update(resource_group_name, appliance_definition_name, api_version, subscription_id, parameters)
        print("The response of ApplianceDefinitionsApi->appliance_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **appliance_definition_name** | **str**| The name of the appliance definition. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **parameters** | [**ApplianceDefinition**](ApplianceDefinition.md)| Parameters supplied to the create or update an appliance definition. | 

### Return type

[**ApplianceDefinition**](ApplianceDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the appliance definition, including provisioning status. |  -  |
**201** | Created - Returns information about the appliance definition, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appliance_definitions_create_or_update_by_id**
> ApplianceDefinition appliance_definitions_create_or_update_by_id(appliance_definition_id, api_version, parameters)



Creates a new appliance definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.appliance_definition import ApplianceDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    appliance_definition_id = 'appliance_definition_id_example' # str | The fully qualified ID of the appliance definition, including the appliance name and the appliance definition resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
    api_version = 'api_version_example' # str | The API version to use for this operation.
    parameters = openapi_client.ApplianceDefinition() # ApplianceDefinition | Parameters supplied to the create or update an appliance definition.

    try:
        api_response = api_instance.appliance_definitions_create_or_update_by_id(appliance_definition_id, api_version, parameters)
        print("The response of ApplianceDefinitionsApi->appliance_definitions_create_or_update_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_create_or_update_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appliance_definition_id** | **str**| The fully qualified ID of the appliance definition, including the appliance name and the appliance definition resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name} | 
 **api_version** | **str**| The API version to use for this operation. | 
 **parameters** | [**ApplianceDefinition**](ApplianceDefinition.md)| Parameters supplied to the create or update an appliance definition. | 

### Return type

[**ApplianceDefinition**](ApplianceDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the appliance definition, including provisioning status. |  -  |
**201** | Created - Returns information about the appliance definition, including provisioning status. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appliance_definitions_delete**
> appliance_definitions_delete(resource_group_name, appliance_definition_name, api_version, subscription_id)



Deletes the appliance definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    appliance_definition_name = 'appliance_definition_name_example' # str | The name of the appliance definition to delete.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.appliance_definitions_delete(resource_group_name, appliance_definition_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **appliance_definition_name** | **str**| The name of the appliance definition to delete. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appliance_definitions_delete_by_id**
> appliance_definitions_delete_by_id(appliance_definition_id, api_version)



Deletes the appliance definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    appliance_definition_id = 'appliance_definition_id_example' # str | The fully qualified ID of the appliance definition, including the appliance name and the appliance definition resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.appliance_definitions_delete_by_id(appliance_definition_id, api_version)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_delete_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appliance_definition_id** | **str**| The fully qualified ID of the appliance definition, including the appliance name and the appliance definition resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name} | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted - Returns this status until the asynchronous operation has completed. |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appliance_definitions_get**
> ApplianceDefinition appliance_definitions_get(resource_group_name, appliance_definition_name, api_version, subscription_id)



Gets the appliance definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.appliance_definition import ApplianceDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    appliance_definition_name = 'appliance_definition_name_example' # str | The name of the appliance definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.appliance_definitions_get(resource_group_name, appliance_definition_name, api_version, subscription_id)
        print("The response of ApplianceDefinitionsApi->appliance_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **appliance_definition_name** | **str**| The name of the appliance definition. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**ApplianceDefinition**](ApplianceDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the appliance definition. |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appliance_definitions_get_by_id**
> ApplianceDefinition appliance_definitions_get_by_id(appliance_definition_id, api_version)



Gets the appliance definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.appliance_definition import ApplianceDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    appliance_definition_id = 'appliance_definition_id_example' # str | The fully qualified ID of the appliance definition, including the appliance name and the appliance definition resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.appliance_definitions_get_by_id(appliance_definition_id, api_version)
        print("The response of ApplianceDefinitionsApi->appliance_definitions_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appliance_definition_id** | **str**| The fully qualified ID of the appliance definition, including the appliance name and the appliance definition resource type. Use the format, /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name} | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**ApplianceDefinition**](ApplianceDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the appliance definition. |  -  |
**404** | Not Found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **appliance_definitions_list_by_resource_group**
> ApplianceDefinitionListResult appliance_definitions_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists the appliance definitions in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.appliance_definition_list_result import ApplianceDefinitionListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplianceDefinitionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.appliance_definitions_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of ApplianceDefinitionsApi->appliance_definitions_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplianceDefinitionsApi->appliance_definitions_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**ApplianceDefinitionListResult**](ApplianceDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of appliance definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

