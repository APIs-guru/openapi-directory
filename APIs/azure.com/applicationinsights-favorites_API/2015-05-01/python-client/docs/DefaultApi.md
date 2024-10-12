# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**favorites_add**](DefaultApi.md#favorites_add) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId} | 
[**favorites_delete**](DefaultApi.md#favorites_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId} | 
[**favorites_get**](DefaultApi.md#favorites_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId} | 
[**favorites_list**](DefaultApi.md#favorites_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites | 
[**favorites_update**](DefaultApi.md#favorites_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId} | 


# **favorites_add**
> ApplicationInsightsComponentFavorite favorites_add(resource_group_name, api_version, subscription_id, resource_name, favorite_id, favorite_properties)



Adds a new favorites to an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_favorite import ApplicationInsightsComponentFavorite
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
    favorite_id = 'favorite_id_example' # str | The Id of a specific favorite defined in the Application Insights component
    favorite_properties = openapi_client.ApplicationInsightsComponentFavorite() # ApplicationInsightsComponentFavorite | Properties that need to be specified to create a new favorite and add it to an Application Insights component.

    try:
        api_response = api_instance.favorites_add(resource_group_name, api_version, subscription_id, resource_name, favorite_id, favorite_properties)
        print("The response of DefaultApi->favorites_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **favorite_id** | **str**| The Id of a specific favorite defined in the Application Insights component | 
 **favorite_properties** | [**ApplicationInsightsComponentFavorite**](ApplicationInsightsComponentFavorite.md)| Properties that need to be specified to create a new favorite and add it to an Application Insights component. | 

### Return type

[**ApplicationInsightsComponentFavorite**](ApplicationInsightsComponentFavorite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly created favorite that is associated to the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_delete**
> favorites_delete(resource_group_name, api_version, subscription_id, resource_name, favorite_id)



Remove a favorite that is associated to an Application Insights component.

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
    favorite_id = 'favorite_id_example' # str | The Id of a specific favorite defined in the Application Insights component

    try:
        api_instance.favorites_delete(resource_group_name, api_version, subscription_id, resource_name, favorite_id)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **favorite_id** | **str**| The Id of a specific favorite defined in the Application Insights component | 

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
**200** | The favorite has been successfully removed from the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_get**
> ApplicationInsightsComponentFavorite favorites_get(resource_group_name, api_version, subscription_id, resource_name, favorite_id)



Get a single favorite by its FavoriteId, defined within an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_favorite import ApplicationInsightsComponentFavorite
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
    favorite_id = 'favorite_id_example' # str | The Id of a specific favorite defined in the Application Insights component

    try:
        api_response = api_instance.favorites_get(resource_group_name, api_version, subscription_id, resource_name, favorite_id)
        print("The response of DefaultApi->favorites_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **favorite_id** | **str**| The Id of a specific favorite defined in the Application Insights component | 

### Return type

[**ApplicationInsightsComponentFavorite**](ApplicationInsightsComponentFavorite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A favorite definition associated to the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_list**
> List[ApplicationInsightsComponentFavorite] favorites_list(resource_group_name, api_version, subscription_id, resource_name, favorite_type=favorite_type, source_type=source_type, can_fetch_content=can_fetch_content, tags=tags)



Gets a list of favorites defined within an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_favorite import ApplicationInsightsComponentFavorite
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
    favorite_type = shared # str | The type of favorite. Value can be either shared or user. (optional) (default to shared)
    source_type = 'source_type_example' # str | Source type of favorite to return. When left out, the source type defaults to 'other' (not present in this enum). (optional)
    can_fetch_content = True # bool | Flag indicating whether or not to return the full content for each applicable favorite. If false, only return summary content for favorites. (optional)
    tags = ['tags_example'] # List[str] | Tags that must be present on each favorite returned. (optional)

    try:
        api_response = api_instance.favorites_list(resource_group_name, api_version, subscription_id, resource_name, favorite_type=favorite_type, source_type=source_type, can_fetch_content=can_fetch_content, tags=tags)
        print("The response of DefaultApi->favorites_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **favorite_type** | **str**| The type of favorite. Value can be either shared or user. | [optional] [default to shared]
 **source_type** | **str**| Source type of favorite to return. When left out, the source type defaults to &#39;other&#39; (not present in this enum). | [optional] 
 **can_fetch_content** | **bool**| Flag indicating whether or not to return the full content for each applicable favorite. If false, only return summary content for favorites. | [optional] 
 **tags** | [**List[str]**](str.md)| Tags that must be present on each favorite returned. | [optional] 

### Return type

[**List[ApplicationInsightsComponentFavorite]**](ApplicationInsightsComponentFavorite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more favorite definitions associated to the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **favorites_update**
> ApplicationInsightsComponentFavorite favorites_update(resource_group_name, api_version, subscription_id, resource_name, favorite_id, favorite_properties)



Updates a favorite that has already been added to an Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_component_favorite import ApplicationInsightsComponentFavorite
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
    favorite_id = 'favorite_id_example' # str | The Id of a specific favorite defined in the Application Insights component
    favorite_properties = openapi_client.ApplicationInsightsComponentFavorite() # ApplicationInsightsComponentFavorite | Properties that need to be specified to update the existing favorite.

    try:
        api_response = api_instance.favorites_update(resource_group_name, api_version, subscription_id, resource_name, favorite_id, favorite_properties)
        print("The response of DefaultApi->favorites_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->favorites_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **favorite_id** | **str**| The Id of a specific favorite defined in the Application Insights component | 
 **favorite_properties** | [**ApplicationInsightsComponentFavorite**](ApplicationInsightsComponentFavorite.md)| Properties that need to be specified to update the existing favorite. | 

### Return type

[**ApplicationInsightsComponentFavorite**](ApplicationInsightsComponentFavorite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The favorite definition updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

