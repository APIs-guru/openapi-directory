# openapi_client.ResourceLinksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_links_create_or_update**](ResourceLinksApi.md#resource_links_create_or_update) | **PUT** /{linkId} | 
[**resource_links_delete**](ResourceLinksApi.md#resource_links_delete) | **DELETE** /{linkId} | 
[**resource_links_get**](ResourceLinksApi.md#resource_links_get) | **GET** /{linkId} | 
[**resource_links_list_at_source_scope**](ResourceLinksApi.md#resource_links_list_at_source_scope) | **GET** /{scope}/providers/Microsoft.Resources/links | 
[**resource_links_list_at_subscription**](ResourceLinksApi.md#resource_links_list_at_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Resources/links | 


# **resource_links_create_or_update**
> ResourceLink resource_links_create_or_update(link_id, api_version, parameters)



Creates or updates a resource link between the specified resources.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_link import ResourceLink
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
    api_instance = openapi_client.ResourceLinksApi(api_client)
    link_id = 'link_id_example' # str | The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
    api_version = 'api_version_example' # str | The API version to use for the operation.
    parameters = openapi_client.ResourceLink() # ResourceLink | Parameters for creating or updating a resource link.

    try:
        api_response = api_instance.resource_links_create_or_update(link_id, api_version, parameters)
        print("The response of ResourceLinksApi->resource_links_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceLinksApi->resource_links_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_id** | **str**| The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink | 
 **api_version** | **str**| The API version to use for the operation. | 
 **parameters** | [**ResourceLink**](ResourceLink.md)| Parameters for creating or updating a resource link. | 

### Return type

[**ResourceLink**](ResourceLink.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the link. |  -  |
**201** | Created - Returns information about the link. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_links_delete**
> resource_links_delete(link_id, api_version)



Deletes a resource link with the specified ID.

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
    api_instance = openapi_client.ResourceLinksApi(api_client)
    link_id = 'link_id_example' # str | The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_instance.resource_links_delete(link_id, api_version)
    except Exception as e:
        print("Exception when calling ResourceLinksApi->resource_links_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_id** | **str**| The fully qualified ID of the resource link. Use the format, /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink | 
 **api_version** | **str**| The API version to use for the operation. | 

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
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_links_get**
> ResourceLink resource_links_get(link_id, api_version)



Gets a resource link with the specified ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_link import ResourceLink
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
    api_instance = openapi_client.ResourceLinksApi(api_client)
    link_id = 'link_id_example' # str | The fully qualified Id of the resource link. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
    api_version = 'api_version_example' # str | The API version to use for the operation.

    try:
        api_response = api_instance.resource_links_get(link_id, api_version)
        print("The response of ResourceLinksApi->resource_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceLinksApi->resource_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **link_id** | **str**| The fully qualified Id of the resource link. For example, /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink | 
 **api_version** | **str**| The API version to use for the operation. | 

### Return type

[**ResourceLink**](ResourceLink.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns information about the resource link. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_links_list_at_source_scope**
> ResourceLinkResult resource_links_list_at_source_scope(scope, api_version, filter=filter)



Gets a list of resource links at and below the specified source scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_link_result import ResourceLinkResult
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
    api_instance = openapi_client.ResourceLinksApi(api_client)
    scope = 'scope_example' # str | The fully qualified ID of the scope for getting the resource links. For example, to list resource links at and under a resource group, set the scope to /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    filter = 'filter_example' # str | The filter to apply when getting resource links. To get links only at the specified scope (not below the scope), use Filter.atScope(). (optional)

    try:
        api_response = api_instance.resource_links_list_at_source_scope(scope, api_version, filter=filter)
        print("The response of ResourceLinksApi->resource_links_list_at_source_scope:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceLinksApi->resource_links_list_at_source_scope: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The fully qualified ID of the scope for getting the resource links. For example, to list resource links at and under a resource group, set the scope to /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **filter** | **str**| The filter to apply when getting resource links. To get links only at the specified scope (not below the scope), use Filter.atScope(). | [optional] 

### Return type

[**ResourceLinkResult**](ResourceLinkResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of links at the specified scope. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_links_list_at_subscription**
> ResourceLinkResult resource_links_list_at_subscription(api_version, subscription_id, filter=filter)



Gets all the linked resources for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_link_result import ResourceLinkResult
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
    api_instance = openapi_client.ResourceLinksApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    filter = 'filter_example' # str | The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter=targetId eq {value} (optional)

    try:
        api_response = api_instance.resource_links_list_at_subscription(api_version, subscription_id, filter=filter)
        print("The response of ResourceLinksApi->resource_links_list_at_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourceLinksApi->resource_links_list_at_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **filter** | **str**| The filter to apply on the list resource links operation. The supported filter for list resource links is targetId. For example, $filter&#x3D;targetId eq {value} | [optional] 

### Return type

[**ResourceLinkResult**](ResourceLinkResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an array of resource links for the subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

