# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analytics_items_delete**](DefaultApi.md#analytics_items_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item | 
[**analytics_items_get**](DefaultApi.md#analytics_items_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item | 
[**analytics_items_list**](DefaultApi.md#analytics_items_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath} | 
[**analytics_items_put**](DefaultApi.md#analytics_items_put) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/components/{resourceName}/{scopePath}/item | 


# **analytics_items_delete**
> analytics_items_delete(subscription_id, resource_group_name, resource_name, scope_path, api_version, id=id, name=name)



Deletes a specific Analytics Items defined within an Application Insights component.

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
    scope_path = 'scope_path_example' # str | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    id = 'id_example' # str | The Id of a specific item defined in the Application Insights component (optional)
    name = 'name_example' # str | The name of a specific item defined in the Application Insights component (optional)

    try:
        api_instance.analytics_items_delete(subscription_id, resource_group_name, resource_name, scope_path, api_version, id=id, name=name)
    except Exception as e:
        print("Exception when calling DefaultApi->analytics_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **scope_path** | **str**| Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **id** | **str**| The Id of a specific item defined in the Application Insights component | [optional] 
 **name** | **str**| The name of a specific item defined in the Application Insights component | [optional] 

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
**200** | The item has been successfully removed from the Application Insights component |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_items_get**
> ApplicationInsightsComponentAnalyticsItem analytics_items_get(subscription_id, resource_group_name, resource_name, scope_path, api_version, id=id, name=name)



Gets a specific Analytics Items defined within an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_analytics_item import ApplicationInsightsComponentAnalyticsItem
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
    scope_path = 'scope_path_example' # str | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    id = 'id_example' # str | The Id of a specific item defined in the Application Insights component (optional)
    name = 'name_example' # str | The name of a specific item defined in the Application Insights component (optional)

    try:
        api_response = api_instance.analytics_items_get(subscription_id, resource_group_name, resource_name, scope_path, api_version, id=id, name=name)
        print("The response of DefaultApi->analytics_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analytics_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **scope_path** | **str**| Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **id** | **str**| The Id of a specific item defined in the Application Insights component | [optional] 
 **name** | **str**| The name of a specific item defined in the Application Insights component | [optional] 

### Return type

[**ApplicationInsightsComponentAnalyticsItem**](ApplicationInsightsComponentAnalyticsItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single item associated with the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_items_list**
> List[ApplicationInsightsComponentAnalyticsItem] analytics_items_list(subscription_id, resource_group_name, resource_name, scope_path, api_version, scope=scope, type=type, include_content=include_content)



Gets a list of Analytics Items defined within an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_analytics_item import ApplicationInsightsComponentAnalyticsItem
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
    scope_path = 'scope_path_example' # str | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope = shared # str | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. (optional) (default to shared)
    type = none # str | Enum indicating the type of the Analytics item. (optional) (default to none)
    include_content = True # bool | Flag indicating whether or not to return the content of each applicable item. If false, only return the item information. (optional)

    try:
        api_response = api_instance.analytics_items_list(subscription_id, resource_group_name, resource_name, scope_path, api_version, scope=scope, type=type, include_content=include_content)
        print("The response of DefaultApi->analytics_items_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analytics_items_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **scope_path** | **str**| Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope** | **str**| Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | [optional] [default to shared]
 **type** | **str**| Enum indicating the type of the Analytics item. | [optional] [default to none]
 **include_content** | **bool**| Flag indicating whether or not to return the content of each applicable item. If false, only return the item information. | [optional] 

### Return type

[**List[ApplicationInsightsComponentAnalyticsItem]**](ApplicationInsightsComponentAnalyticsItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more items associated with the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_items_put**
> ApplicationInsightsComponentAnalyticsItem analytics_items_put(subscription_id, resource_group_name, resource_name, scope_path, api_version, item_properties, override_item=override_item)



Adds or Updates a specific Analytics Item within an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_analytics_item import ApplicationInsightsComponentAnalyticsItem
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
    scope_path = 'scope_path_example' # str | Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    item_properties = openapi_client.ApplicationInsightsComponentAnalyticsItem() # ApplicationInsightsComponentAnalyticsItem | Properties that need to be specified to create a new item and add it to an Application Insights component.
    override_item = True # bool | Flag indicating whether or not to force save an item. This allows overriding an item if it already exists. (optional)

    try:
        api_response = api_instance.analytics_items_put(subscription_id, resource_group_name, resource_name, scope_path, api_version, item_properties, override_item=override_item)
        print("The response of DefaultApi->analytics_items_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analytics_items_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **scope_path** | **str**| Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **item_properties** | [**ApplicationInsightsComponentAnalyticsItem**](ApplicationInsightsComponentAnalyticsItem.md)| Properties that need to be specified to create a new item and add it to an Application Insights component. | 
 **override_item** | **bool**| Flag indicating whether or not to force save an item. This allows overriding an item if it already exists. | [optional] 

### Return type

[**ApplicationInsightsComponentAnalyticsItem**](ApplicationInsightsComponentAnalyticsItem.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new or updated item associated with the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

