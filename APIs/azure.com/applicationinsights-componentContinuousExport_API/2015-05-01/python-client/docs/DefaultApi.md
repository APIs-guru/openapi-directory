# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_configurations_create**](DefaultApi.md#export_configurations_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/exportconfiguration | 
[**export_configurations_delete**](DefaultApi.md#export_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/exportconfiguration/{exportId} | 
[**export_configurations_get**](DefaultApi.md#export_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/exportconfiguration/{exportId} | 
[**export_configurations_list**](DefaultApi.md#export_configurations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/exportconfiguration | 
[**export_configurations_update**](DefaultApi.md#export_configurations_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/exportconfiguration/{exportId} | 


# **export_configurations_create**
> List[ApplicationInsightsComponentExportConfiguration] export_configurations_create(resource_group_name, api_version, subscription_id, resource_name, export_properties)



Create a Continuous Export configuration of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_export_configuration import ApplicationInsightsComponentExportConfiguration
from openapi_client.models.application_insights_component_export_request import ApplicationInsightsComponentExportRequest
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
    export_properties = openapi_client.ApplicationInsightsComponentExportRequest() # ApplicationInsightsComponentExportRequest | Properties that need to be specified to create a Continuous Export configuration of a Application Insights component.

    try:
        api_response = api_instance.export_configurations_create(resource_group_name, api_version, subscription_id, resource_name, export_properties)
        print("The response of DefaultApi->export_configurations_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_configurations_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **export_properties** | [**ApplicationInsightsComponentExportRequest**](ApplicationInsightsComponentExportRequest.md)| Properties that need to be specified to create a Continuous Export configuration of a Application Insights component. | 

### Return type

[**List[ApplicationInsightsComponentExportConfiguration]**](ApplicationInsightsComponentExportConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing the Continuous Export configuration definition created by this POST call. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_delete**
> ApplicationInsightsComponentExportConfiguration export_configurations_delete(resource_group_name, api_version, subscription_id, resource_name, export_id)



Delete a Continuous Export configuration of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_export_configuration import ApplicationInsightsComponentExportConfiguration
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
    export_id = 'export_id_example' # str | The Continuous Export configuration ID. This is unique within a Application Insights component.

    try:
        api_response = api_instance.export_configurations_delete(resource_group_name, api_version, subscription_id, resource_name, export_id)
        print("The response of DefaultApi->export_configurations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **export_id** | **str**| The Continuous Export configuration ID. This is unique within a Application Insights component. | 

### Return type

[**ApplicationInsightsComponentExportConfiguration**](ApplicationInsightsComponentExportConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Continuous Export configuration that was successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_get**
> ApplicationInsightsComponentExportConfiguration export_configurations_get(resource_group_name, api_version, subscription_id, resource_name, export_id)



Get the Continuous Export configuration for this export id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_export_configuration import ApplicationInsightsComponentExportConfiguration
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
    export_id = 'export_id_example' # str | The Continuous Export configuration ID. This is unique within a Application Insights component.

    try:
        api_response = api_instance.export_configurations_get(resource_group_name, api_version, subscription_id, resource_name, export_id)
        print("The response of DefaultApi->export_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **export_id** | **str**| The Continuous Export configuration ID. This is unique within a Application Insights component. | 

### Return type

[**ApplicationInsightsComponentExportConfiguration**](ApplicationInsightsComponentExportConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Continuous Export configuration for this export id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_list**
> List[ApplicationInsightsComponentExportConfiguration] export_configurations_list(resource_group_name, api_version, subscription_id, resource_name)



Gets a list of Continuous Export configuration of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_export_configuration import ApplicationInsightsComponentExportConfiguration
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
        api_response = api_instance.export_configurations_list(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->export_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**List[ApplicationInsightsComponentExportConfiguration]**](ApplicationInsightsComponentExportConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more Continuous Export configuration definitions of an Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_configurations_update**
> ApplicationInsightsComponentExportConfiguration export_configurations_update(resource_group_name, api_version, subscription_id, resource_name, export_id, export_properties)



Update the Continuous Export configuration for this export id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_export_configuration import ApplicationInsightsComponentExportConfiguration
from openapi_client.models.application_insights_component_export_request import ApplicationInsightsComponentExportRequest
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
    export_id = 'export_id_example' # str | The Continuous Export configuration ID. This is unique within a Application Insights component.
    export_properties = openapi_client.ApplicationInsightsComponentExportRequest() # ApplicationInsightsComponentExportRequest | Properties that need to be specified to update the Continuous Export configuration.

    try:
        api_response = api_instance.export_configurations_update(resource_group_name, api_version, subscription_id, resource_name, export_id, export_properties)
        print("The response of DefaultApi->export_configurations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->export_configurations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **export_id** | **str**| The Continuous Export configuration ID. This is unique within a Application Insights component. | 
 **export_properties** | [**ApplicationInsightsComponentExportRequest**](ApplicationInsightsComponentExportRequest.md)| Properties that need to be specified to update the Continuous Export configuration. | 

### Return type

[**ApplicationInsightsComponentExportConfiguration**](ApplicationInsightsComponentExportConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Continuous Export configuration that was successfully updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

