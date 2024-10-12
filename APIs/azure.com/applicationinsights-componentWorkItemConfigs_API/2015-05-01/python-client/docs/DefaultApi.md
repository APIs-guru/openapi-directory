# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**work_item_configurations_create**](DefaultApi.md#work_item_configurations_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs | 
[**work_item_configurations_delete**](DefaultApi.md#work_item_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId} | 
[**work_item_configurations_get_default**](DefaultApi.md#work_item_configurations_get_default) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/DefaultWorkItemConfig | 
[**work_item_configurations_get_item**](DefaultApi.md#work_item_configurations_get_item) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId} | 
[**work_item_configurations_list**](DefaultApi.md#work_item_configurations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs | 
[**work_item_configurations_update_item**](DefaultApi.md#work_item_configurations_update_item) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId} | 


# **work_item_configurations_create**
> WorkItemConfiguration work_item_configurations_create(resource_group_name, api_version, subscription_id, resource_name, work_item_configuration_properties)



Create a work item configuration for an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.work_item_configuration import WorkItemConfiguration
from openapi_client.models.work_item_create_configuration import WorkItemCreateConfiguration
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    work_item_configuration_properties = openapi_client.WorkItemCreateConfiguration() # WorkItemCreateConfiguration | Properties that need to be specified to create a work item configuration of a Application Insights component.

    try:
        api_response = api_instance.work_item_configurations_create(resource_group_name, api_version, subscription_id, resource_name, work_item_configuration_properties)
        print("The response of DefaultApi->work_item_configurations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->work_item_configurations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **work_item_configuration_properties** | [**WorkItemCreateConfiguration**](WorkItemCreateConfiguration.md)| Properties that need to be specified to create a work item configuration of a Application Insights component. | 

### Return type

[**WorkItemConfiguration**](WorkItemConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An object containing the work item configuration definition created by this PUT call. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **work_item_configurations_delete**
> work_item_configurations_delete(resource_group_name, api_version, subscription_id, resource_name, work_item_config_id)



Delete a work item configuration of an Application Insights component.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    work_item_config_id = 'work_item_config_id_example' # str | The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration

    try:
        api_instance.work_item_configurations_delete(resource_group_name, api_version, subscription_id, resource_name, work_item_config_id)
    except Exception as e:
        print("Exception when calling DefaultApi->work_item_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **work_item_config_id** | **str**| The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The work item configuration that was successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **work_item_configurations_get_default**
> WorkItemConfiguration work_item_configurations_get_default(resource_group_name, api_version, subscription_id, resource_name)



Gets default work item configurations that exist for the application

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.work_item_configuration import WorkItemConfiguration
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.

    try:
        api_response = api_instance.work_item_configurations_get_default(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->work_item_configurations_get_default:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->work_item_configurations_get_default: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**WorkItemConfiguration**](WorkItemConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **work_item_configurations_get_item**
> WorkItemConfiguration work_item_configurations_get_item(resource_group_name, api_version, subscription_id, resource_name, work_item_config_id)



Gets specified work item configuration for an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.work_item_configuration import WorkItemConfiguration
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    work_item_config_id = 'work_item_config_id_example' # str | The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration

    try:
        api_response = api_instance.work_item_configurations_get_item(resource_group_name, api_version, subscription_id, resource_name, work_item_config_id)
        print("The response of DefaultApi->work_item_configurations_get_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->work_item_configurations_get_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **work_item_config_id** | **str**| The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration | 

### Return type

[**WorkItemConfiguration**](WorkItemConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **work_item_configurations_list**
> WorkItemConfigurationsListResult work_item_configurations_list(resource_group_name, api_version, subscription_id, resource_name)



Gets the list work item configurations that exist for the application

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.work_item_configurations_list_result import WorkItemConfigurationsListResult
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.

    try:
        api_response = api_instance.work_item_configurations_list(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->work_item_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->work_item_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**WorkItemConfigurationsListResult**](WorkItemConfigurationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **work_item_configurations_update_item**
> WorkItemConfiguration work_item_configurations_update_item(resource_group_name, api_version, subscription_id, resource_name, work_item_config_id, work_item_configuration_properties)



Update a work item configuration for an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.work_item_configuration import WorkItemConfiguration
from openapi_client.models.work_item_create_configuration import WorkItemCreateConfiguration
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    work_item_config_id = 'work_item_config_id_example' # str | The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration
    work_item_configuration_properties = openapi_client.WorkItemCreateConfiguration() # WorkItemCreateConfiguration | Properties that need to be specified to update a work item configuration for this Application Insights component.

    try:
        api_response = api_instance.work_item_configurations_update_item(resource_group_name, api_version, subscription_id, resource_name, work_item_config_id, work_item_configuration_properties)
        print("The response of DefaultApi->work_item_configurations_update_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->work_item_configurations_update_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **work_item_config_id** | **str**| The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration | 
 **work_item_configuration_properties** | [**WorkItemCreateConfiguration**](WorkItemCreateConfiguration.md)| Properties that need to be specified to update a work item configuration for this Application Insights component. | 

### Return type

[**WorkItemConfiguration**](WorkItemConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation indicating the config updated by this PATCH call. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

