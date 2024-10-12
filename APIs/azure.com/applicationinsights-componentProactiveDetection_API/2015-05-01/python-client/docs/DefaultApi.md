# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proactive_detection_configurations_get**](DefaultApi.md#proactive_detection_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs/{ConfigurationId} | 
[**proactive_detection_configurations_list**](DefaultApi.md#proactive_detection_configurations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs | 
[**proactive_detection_configurations_update**](DefaultApi.md#proactive_detection_configurations_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ProactiveDetectionConfigs/{ConfigurationId} | 


# **proactive_detection_configurations_get**
> ApplicationInsightsComponentProactiveDetectionConfiguration proactive_detection_configurations_get(resource_group_name, api_version, subscription_id, resource_name, configuration_id)



Get the ProactiveDetection configuration for this configuration id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_proactive_detection_configuration import ApplicationInsightsComponentProactiveDetectionConfiguration
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
    configuration_id = 'configuration_id_example' # str | The ProactiveDetection configuration ID. This is unique within a Application Insights component.

    try:
        api_response = api_instance.proactive_detection_configurations_get(resource_group_name, api_version, subscription_id, resource_name, configuration_id)
        print("The response of DefaultApi->proactive_detection_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->proactive_detection_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **configuration_id** | **str**| The ProactiveDetection configuration ID. This is unique within a Application Insights component. | 

### Return type

[**ApplicationInsightsComponentProactiveDetectionConfiguration**](ApplicationInsightsComponentProactiveDetectionConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ProactiveDetection configuration for this configuration id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proactive_detection_configurations_list**
> List[ApplicationInsightsComponentProactiveDetectionConfiguration] proactive_detection_configurations_list(resource_group_name, api_version, subscription_id, resource_name)



Gets a list of ProactiveDetection configurations of an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_proactive_detection_configuration import ApplicationInsightsComponentProactiveDetectionConfiguration
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
        api_response = api_instance.proactive_detection_configurations_list(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->proactive_detection_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->proactive_detection_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**List[ApplicationInsightsComponentProactiveDetectionConfiguration]**](ApplicationInsightsComponentProactiveDetectionConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more ProactiveDetection configurations of an Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **proactive_detection_configurations_update**
> ApplicationInsightsComponentProactiveDetectionConfiguration proactive_detection_configurations_update(resource_group_name, api_version, subscription_id, resource_name, configuration_id, proactive_detection_properties)



Update the ProactiveDetection configuration for this configuration id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_proactive_detection_configuration import ApplicationInsightsComponentProactiveDetectionConfiguration
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
    configuration_id = 'configuration_id_example' # str | The ProactiveDetection configuration ID. This is unique within a Application Insights component.
    proactive_detection_properties = openapi_client.ApplicationInsightsComponentProactiveDetectionConfiguration() # ApplicationInsightsComponentProactiveDetectionConfiguration | Properties that need to be specified to update the ProactiveDetection configuration.

    try:
        api_response = api_instance.proactive_detection_configurations_update(resource_group_name, api_version, subscription_id, resource_name, configuration_id, proactive_detection_properties)
        print("The response of DefaultApi->proactive_detection_configurations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->proactive_detection_configurations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **configuration_id** | **str**| The ProactiveDetection configuration ID. This is unique within a Application Insights component. | 
 **proactive_detection_properties** | [**ApplicationInsightsComponentProactiveDetectionConfiguration**](ApplicationInsightsComponentProactiveDetectionConfiguration.md)| Properties that need to be specified to update the ProactiveDetection configuration. | 

### Return type

[**ApplicationInsightsComponentProactiveDetectionConfiguration**](ApplicationInsightsComponentProactiveDetectionConfiguration.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The ProactiveDetection configuration that was successfully updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

