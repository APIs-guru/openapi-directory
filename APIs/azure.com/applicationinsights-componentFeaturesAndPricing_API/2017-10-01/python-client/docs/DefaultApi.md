# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**component_current_pricing_plan_create_and_update**](DefaultApi.md#component_current_pricing_plan_create_and_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current | 
[**component_current_pricing_plan_get**](DefaultApi.md#component_current_pricing_plan_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current | 
[**component_current_pricing_plan_update**](DefaultApi.md#component_current_pricing_plan_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/pricingPlans/current | 


# **component_current_pricing_plan_create_and_update**
> ApplicationInsightsComponentPricingPlan component_current_pricing_plan_create_and_update(resource_group_name, api_version, subscription_id, resource_name, pricing_plan_properties)



Replace current pricing plan for an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_pricing_plan import ApplicationInsightsComponentPricingPlan
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
    pricing_plan_properties = openapi_client.ApplicationInsightsComponentPricingPlan() # ApplicationInsightsComponentPricingPlan | Properties that need to be specified to update current pricing plan for an Application Insights component.

    try:
        api_response = api_instance.component_current_pricing_plan_create_and_update(resource_group_name, api_version, subscription_id, resource_name, pricing_plan_properties)
        print("The response of DefaultApi->component_current_pricing_plan_create_and_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->component_current_pricing_plan_create_and_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **pricing_plan_properties** | [**ApplicationInsightsComponentPricingPlan**](ApplicationInsightsComponentPricingPlan.md)| Properties that need to be specified to update current pricing plan for an Application Insights component. | 

### Return type

[**ApplicationInsightsComponentPricingPlan**](ApplicationInsightsComponentPricingPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request when updating billing features for an Application Insights component. The updated current billing features are returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **component_current_pricing_plan_get**
> ApplicationInsightsComponentPricingPlan component_current_pricing_plan_get(resource_group_name, api_version, subscription_id, resource_name)



Returns the current pricing plan setting for an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_pricing_plan import ApplicationInsightsComponentPricingPlan
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
        api_response = api_instance.component_current_pricing_plan_get(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->component_current_pricing_plan_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->component_current_pricing_plan_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**ApplicationInsightsComponentPricingPlan**](ApplicationInsightsComponentPricingPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Application Insights component pricing plan definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **component_current_pricing_plan_update**
> ApplicationInsightsComponentPricingPlan component_current_pricing_plan_update(resource_group_name, api_version, subscription_id, resource_name, pricing_plan_properties)



Update current pricing plan for an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_pricing_plan import ApplicationInsightsComponentPricingPlan
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
    pricing_plan_properties = openapi_client.ApplicationInsightsComponentPricingPlan() # ApplicationInsightsComponentPricingPlan | Properties that need to be specified to update current pricing plan for an Application Insights component.

    try:
        api_response = api_instance.component_current_pricing_plan_update(resource_group_name, api_version, subscription_id, resource_name, pricing_plan_properties)
        print("The response of DefaultApi->component_current_pricing_plan_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->component_current_pricing_plan_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **pricing_plan_properties** | [**ApplicationInsightsComponentPricingPlan**](ApplicationInsightsComponentPricingPlan.md)| Properties that need to be specified to update current pricing plan for an Application Insights component. | 

### Return type

[**ApplicationInsightsComponentPricingPlan**](ApplicationInsightsComponentPricingPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request when updating billing features for an Application Insights component. The updated current billing features are returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

