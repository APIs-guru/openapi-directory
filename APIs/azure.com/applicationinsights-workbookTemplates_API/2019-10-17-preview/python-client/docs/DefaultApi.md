# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workbook_templates_create_or_update**](DefaultApi.md#workbook_templates_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooktemplates/{resourceName} | 
[**workbook_templates_delete**](DefaultApi.md#workbook_templates_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooktemplates/{resourceName} | 
[**workbook_templates_get**](DefaultApi.md#workbook_templates_get) | **GET** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooktemplates/{resourceName} | 
[**workbook_templates_list_by_resource_group**](DefaultApi.md#workbook_templates_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooktemplates | 
[**workbook_templates_update**](DefaultApi.md#workbook_templates_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooktemplates/{resourceName} | 


# **workbook_templates_create_or_update**
> WorkbookTemplate workbook_templates_create_or_update(subscription_id, resource_group_name, resource_name, api_version, workbook_template_properties)



Create a new workbook template.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook_template import WorkbookTemplate
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    workbook_template_properties = openapi_client.WorkbookTemplate() # WorkbookTemplate | Properties that need to be specified to create a new workbook.

    try:
        api_response = api_instance.workbook_templates_create_or_update(subscription_id, resource_group_name, resource_name, api_version, workbook_template_properties)
        print("The response of DefaultApi->workbook_templates_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbook_templates_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **workbook_template_properties** | [**WorkbookTemplate**](WorkbookTemplate.md)| Properties that need to be specified to create a new workbook. | 

### Return type

[**WorkbookTemplate**](WorkbookTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly created workbook template. |  -  |
**201** | The newly created workbook template. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbook_templates_delete**
> workbook_templates_delete(subscription_id, resource_group_name, resource_name, api_version)



Delete a workbook template.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.workbook_templates_delete(subscription_id, resource_group_name, resource_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->workbook_templates_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
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
**200** | The workbook template has been successfully deleted. |  -  |
**204** | The resource doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbook_templates_get**
> WorkbookTemplate workbook_templates_get(subscription_id, resource_group_name, resource_name, api_version)



Get a single workbook template by its resourceName.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook_template import WorkbookTemplate
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.workbook_templates_get(subscription_id, resource_group_name, resource_name, api_version)
        print("The response of DefaultApi->workbook_templates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbook_templates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**WorkbookTemplate**](WorkbookTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A workbook template definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbook_templates_list_by_resource_group**
> WorkbookTemplatesListResult workbook_templates_list_by_resource_group(subscription_id, resource_group_name, api_version)



Get all Workbook templates defined within a specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook_templates_list_result import WorkbookTemplatesListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.workbook_templates_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->workbook_templates_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbook_templates_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**WorkbookTemplatesListResult**](WorkbookTemplatesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more workbook template definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbook_templates_update**
> WorkbookTemplate workbook_templates_update(subscription_id, resource_group_name, resource_name, api_version, workbook_template_update_parameters=workbook_template_update_parameters)



Updates a workbook template that has already been added.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook_template import WorkbookTemplate
from openapi_client.models.workbook_template_update_parameters import WorkbookTemplateUpdateParameters
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    workbook_template_update_parameters = openapi_client.WorkbookTemplateUpdateParameters() # WorkbookTemplateUpdateParameters | Properties that need to be specified to patch a workbook template. (optional)

    try:
        api_response = api_instance.workbook_templates_update(subscription_id, resource_group_name, resource_name, api_version, workbook_template_update_parameters=workbook_template_update_parameters)
        print("The response of DefaultApi->workbook_templates_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbook_templates_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **workbook_template_update_parameters** | [**WorkbookTemplateUpdateParameters**](WorkbookTemplateUpdateParameters.md)| Properties that need to be specified to patch a workbook template. | [optional] 

### Return type

[**WorkbookTemplate**](WorkbookTemplate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The workbook template definition updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

