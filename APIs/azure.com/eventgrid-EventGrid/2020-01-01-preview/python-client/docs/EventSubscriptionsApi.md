# openapi_client.EventSubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_subscriptions_create_or_update**](EventSubscriptionsApi.md#event_subscriptions_create_or_update) | **PUT** /{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName} | Create or update an event subscription
[**event_subscriptions_delete**](EventSubscriptionsApi.md#event_subscriptions_delete) | **DELETE** /{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName} | Delete an event subscription
[**event_subscriptions_get**](EventSubscriptionsApi.md#event_subscriptions_get) | **GET** /{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName} | Get an event subscription
[**event_subscriptions_get_full_url**](EventSubscriptionsApi.md#event_subscriptions_get_full_url) | **POST** /{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}/getFullUrl | Get full URL of an event subscription
[**event_subscriptions_list_by_domain_topic**](EventSubscriptionsApi.md#event_subscriptions_list_by_domain_topic) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/providers/Microsoft.EventGrid/eventSubscriptions | List all event subscriptions for a specific domain topic
[**event_subscriptions_list_by_resource**](EventSubscriptionsApi.md#event_subscriptions_list_by_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventSubscriptions | List all event subscriptions for a specific topic
[**event_subscriptions_list_global_by_resource_group**](EventSubscriptionsApi.md#event_subscriptions_list_global_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/eventSubscriptions | List all global event subscriptions under an Azure subscription and resource group
[**event_subscriptions_list_global_by_resource_group_for_topic_type**](EventSubscriptionsApi.md#event_subscriptions_list_global_by_resource_group_for_topic_type) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventSubscriptions | List all global event subscriptions under a resource group for a topic type
[**event_subscriptions_list_global_by_subscription**](EventSubscriptionsApi.md#event_subscriptions_list_global_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/eventSubscriptions | Get an aggregated list of all global event subscriptions under an Azure subscription
[**event_subscriptions_list_global_by_subscription_for_topic_type**](EventSubscriptionsApi.md#event_subscriptions_list_global_by_subscription_for_topic_type) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventSubscriptions | List all global event subscriptions for a topic type
[**event_subscriptions_list_regional_by_resource_group**](EventSubscriptionsApi.md#event_subscriptions_list_regional_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/locations/{location}/eventSubscriptions | List all regional event subscriptions under an Azure subscription and resource group
[**event_subscriptions_list_regional_by_resource_group_for_topic_type**](EventSubscriptionsApi.md#event_subscriptions_list_regional_by_resource_group_for_topic_type) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/locations/{location}/topicTypes/{topicTypeName}/eventSubscriptions | List all regional event subscriptions under an Azure subscription and resource group for a topic type
[**event_subscriptions_list_regional_by_subscription**](EventSubscriptionsApi.md#event_subscriptions_list_regional_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/locations/{location}/eventSubscriptions | List all regional event subscriptions under an Azure subscription
[**event_subscriptions_list_regional_by_subscription_for_topic_type**](EventSubscriptionsApi.md#event_subscriptions_list_regional_by_subscription_for_topic_type) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/locations/{location}/topicTypes/{topicTypeName}/eventSubscriptions | List all regional event subscriptions under an Azure subscription for a topic type
[**event_subscriptions_update**](EventSubscriptionsApi.md#event_subscriptions_update) | **PATCH** /{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName} | Update an event subscription


# **event_subscriptions_create_or_update**
> EventSubscription event_subscriptions_create_or_update(scope, event_subscription_name, api_version, event_subscription_info)

Create or update an event subscription

Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.

### Example


```python
import openapi_client
from openapi_client.models.event_subscription import EventSubscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    scope = 'scope_example' # str | The identifier of the resource to which the event subscription needs to be created or updated. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
    event_subscription_name = 'event_subscription_name_example' # str | Name of the event subscription. Event subscription names must be between 3 and 64 characters in length and should use alphanumeric letters only.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    event_subscription_info = openapi_client.EventSubscription() # EventSubscription | Event subscription properties containing the destination and filter information

    try:
        # Create or update an event subscription
        api_response = api_instance.event_subscriptions_create_or_update(scope, event_subscription_name, api_version, event_subscription_info)
        print("The response of EventSubscriptionsApi->event_subscriptions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The identifier of the resource to which the event subscription needs to be created or updated. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use &#39;/subscriptions/{subscriptionId}/&#39; for a subscription, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for a resource group, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}&#39; for a resource, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}&#39; for an EventGrid topic. | 
 **event_subscription_name** | **str**| Name of the event subscription. Event subscription names must be between 3 and 64 characters in length and should use alphanumeric letters only. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **event_subscription_info** | [**EventSubscription**](EventSubscription.md)| Event subscription properties containing the destination and filter information | 

### Return type

[**EventSubscription**](EventSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | EventSubscription CreateOrUpdate request accepted. |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_delete**
> event_subscriptions_delete(scope, event_subscription_name, api_version)

Delete an event subscription

Delete an existing event subscription

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    scope = 'scope_example' # str | The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
    event_subscription_name = 'event_subscription_name_example' # str | Name of the event subscription
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Delete an event subscription
        api_instance.event_subscriptions_delete(scope, event_subscription_name, api_version)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use &#39;/subscriptions/{subscriptionId}/&#39; for a subscription, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for a resource group, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}&#39; for a resource, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}&#39; for an EventGrid topic. | 
 **event_subscription_name** | **str**| Name of the event subscription | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_get**
> EventSubscription event_subscriptions_get(scope, event_subscription_name, api_version)

Get an event subscription

Get properties of an event subscription

### Example


```python
import openapi_client
from openapi_client.models.event_subscription import EventSubscription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    scope = 'scope_example' # str | The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
    event_subscription_name = 'event_subscription_name_example' # str | Name of the event subscription
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get an event subscription
        api_response = api_instance.event_subscriptions_get(scope, event_subscription_name, api_version)
        print("The response of EventSubscriptionsApi->event_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use &#39;/subscriptions/{subscriptionId}/&#39; for a subscription, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for a resource group, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}&#39; for a resource, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}&#39; for an EventGrid topic. | 
 **event_subscription_name** | **str**| Name of the event subscription | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**EventSubscription**](EventSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_get_full_url**
> EventSubscriptionFullUrl event_subscriptions_get_full_url(scope, event_subscription_name, api_version)

Get full URL of an event subscription

Get the full endpoint URL for an event subscription

### Example


```python
import openapi_client
from openapi_client.models.event_subscription_full_url import EventSubscriptionFullUrl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    scope = 'scope_example' # str | The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
    event_subscription_name = 'event_subscription_name_example' # str | Name of the event subscription
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get full URL of an event subscription
        api_response = api_instance.event_subscriptions_get_full_url(scope, event_subscription_name, api_version)
        print("The response of EventSubscriptionsApi->event_subscriptions_get_full_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_get_full_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use &#39;/subscriptions/{subscriptionId}/&#39; for a subscription, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for a resource group, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}&#39; for a resource, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}&#39; for an EventGrid topic. | 
 **event_subscription_name** | **str**| Name of the event subscription | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**EventSubscriptionFullUrl**](EventSubscriptionFullUrl.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_by_domain_topic**
> EventSubscriptionsListResult event_subscriptions_list_by_domain_topic(subscription_id, resource_group_name, domain_name, topic_name, api_version, filter=filter, top=top)

List all event subscriptions for a specific domain topic

List all event subscriptions that have been created for a specific domain topic

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the top level domain
    topic_name = 'topic_name_example' # str | Name of the domain topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all event subscriptions for a specific domain topic
        api_response = api_instance.event_subscriptions_list_by_domain_topic(subscription_id, resource_group_name, domain_name, topic_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_by_domain_topic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_by_domain_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the top level domain | 
 **topic_name** | **str**| Name of the domain topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_by_resource**
> EventSubscriptionsListResult event_subscriptions_list_by_resource(subscription_id, resource_group_name, provider_namespace, resource_type_name, resource_name, api_version, filter=filter, top=top)

List all event subscriptions for a specific topic

List all event subscriptions that have been created for a specific topic

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    provider_namespace = 'provider_namespace_example' # str | Namespace of the provider of the topic
    resource_type_name = 'resource_type_name_example' # str | Name of the resource type
    resource_name = 'resource_name_example' # str | Name of the resource
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all event subscriptions for a specific topic
        api_response = api_instance.event_subscriptions_list_by_resource(subscription_id, resource_group_name, provider_namespace, resource_type_name, resource_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_by_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_by_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **provider_namespace** | **str**| Namespace of the provider of the topic | 
 **resource_type_name** | **str**| Name of the resource type | 
 **resource_name** | **str**| Name of the resource | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_global_by_resource_group**
> EventSubscriptionsListResult event_subscriptions_list_global_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top)

List all global event subscriptions under an Azure subscription and resource group

List all global event subscriptions under a specific Azure subscription and resource group

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all global event subscriptions under an Azure subscription and resource group
        api_response = api_instance.event_subscriptions_list_global_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_global_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_global_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_global_by_resource_group_for_topic_type**
> EventSubscriptionsListResult event_subscriptions_list_global_by_resource_group_for_topic_type(subscription_id, resource_group_name, topic_type_name, api_version, filter=filter, top=top)

List all global event subscriptions under a resource group for a topic type

List all global event subscriptions under a resource group for a specific topic type.

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_type_name = 'topic_type_name_example' # str | Name of the topic type
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all global event subscriptions under a resource group for a topic type
        api_response = api_instance.event_subscriptions_list_global_by_resource_group_for_topic_type(subscription_id, resource_group_name, topic_type_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_global_by_resource_group_for_topic_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_global_by_resource_group_for_topic_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_type_name** | **str**| Name of the topic type | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_global_by_subscription**
> EventSubscriptionsListResult event_subscriptions_list_global_by_subscription(subscription_id, api_version, filter=filter, top=top)

Get an aggregated list of all global event subscriptions under an Azure subscription

List all aggregated global event subscriptions under a specific Azure subscription

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # Get an aggregated list of all global event subscriptions under an Azure subscription
        api_response = api_instance.event_subscriptions_list_global_by_subscription(subscription_id, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_global_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_global_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_global_by_subscription_for_topic_type**
> EventSubscriptionsListResult event_subscriptions_list_global_by_subscription_for_topic_type(subscription_id, topic_type_name, api_version, filter=filter, top=top)

List all global event subscriptions for a topic type

List all global event subscriptions under an Azure subscription for a topic type.

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    topic_type_name = 'topic_type_name_example' # str | Name of the topic type
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all global event subscriptions for a topic type
        api_response = api_instance.event_subscriptions_list_global_by_subscription_for_topic_type(subscription_id, topic_type_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_global_by_subscription_for_topic_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_global_by_subscription_for_topic_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **topic_type_name** | **str**| Name of the topic type | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_regional_by_resource_group**
> EventSubscriptionsListResult event_subscriptions_list_regional_by_resource_group(subscription_id, resource_group_name, location, api_version, filter=filter, top=top)

List all regional event subscriptions under an Azure subscription and resource group

List all event subscriptions from the given location under a specific Azure subscription and resource group

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    location = 'location_example' # str | Name of the location
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all regional event subscriptions under an Azure subscription and resource group
        api_response = api_instance.event_subscriptions_list_regional_by_resource_group(subscription_id, resource_group_name, location, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_regional_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_regional_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **location** | **str**| Name of the location | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_regional_by_resource_group_for_topic_type**
> EventSubscriptionsListResult event_subscriptions_list_regional_by_resource_group_for_topic_type(subscription_id, resource_group_name, location, topic_type_name, api_version, filter=filter, top=top)

List all regional event subscriptions under an Azure subscription and resource group for a topic type

List all event subscriptions from the given location under a specific Azure subscription and resource group and topic type

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    location = 'location_example' # str | Name of the location
    topic_type_name = 'topic_type_name_example' # str | Name of the topic type
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all regional event subscriptions under an Azure subscription and resource group for a topic type
        api_response = api_instance.event_subscriptions_list_regional_by_resource_group_for_topic_type(subscription_id, resource_group_name, location, topic_type_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_regional_by_resource_group_for_topic_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_regional_by_resource_group_for_topic_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **location** | **str**| Name of the location | 
 **topic_type_name** | **str**| Name of the topic type | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_regional_by_subscription**
> EventSubscriptionsListResult event_subscriptions_list_regional_by_subscription(subscription_id, location, api_version, filter=filter, top=top)

List all regional event subscriptions under an Azure subscription

List all event subscriptions from the given location under a specific Azure subscription

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Name of the location
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all regional event subscriptions under an Azure subscription
        api_response = api_instance.event_subscriptions_list_regional_by_subscription(subscription_id, location, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_regional_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_regional_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Name of the location | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_list_regional_by_subscription_for_topic_type**
> EventSubscriptionsListResult event_subscriptions_list_regional_by_subscription_for_topic_type(subscription_id, location, topic_type_name, api_version, filter=filter, top=top)

List all regional event subscriptions under an Azure subscription for a topic type

List all event subscriptions from the given location under a specific Azure subscription and topic type.

### Example


```python
import openapi_client
from openapi_client.models.event_subscriptions_list_result import EventSubscriptionsListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | Name of the location
    topic_type_name = 'topic_type_name_example' # str | Name of the topic type
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'. (optional)
    top = 56 # int | The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. (optional)

    try:
        # List all regional event subscriptions under an Azure subscription for a topic type
        api_response = api_instance.event_subscriptions_list_regional_by_subscription_for_topic_type(subscription_id, location, topic_type_name, api_version, filter=filter, top=top)
        print("The response of EventSubscriptionsApi->event_subscriptions_list_regional_by_subscription_for_topic_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_list_regional_by_subscription_for_topic_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| Name of the location | 
 **topic_type_name** | **str**| Name of the topic type | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| The query used to filter the search results using OData syntax. Filtering is permitted on the &#39;name&#39; property only and with limited number of OData operations. These operations are: the &#39;contains&#39; function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter&#x3D;contains(namE, &#39;PATTERN&#39;) and name ne &#39;PATTERN-1&#39;. The following is not a valid filter example: $filter&#x3D;location eq &#39;westus&#39;. | [optional] 
 **top** | **int**| The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page. | [optional] 

### Return type

[**EventSubscriptionsListResult**](EventSubscriptionsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_subscriptions_update**
> EventSubscription event_subscriptions_update(scope, event_subscription_name, api_version, event_subscription_update_parameters)

Update an event subscription

Asynchronously updates an existing event subscription.

### Example


```python
import openapi_client
from openapi_client.models.event_subscription import EventSubscription
from openapi_client.models.event_subscription_update_parameters import EventSubscriptionUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventSubscriptionsApi(api_client)
    scope = 'scope_example' # str | The scope of existing event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
    event_subscription_name = 'event_subscription_name_example' # str | Name of the event subscription to be updated
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    event_subscription_update_parameters = openapi_client.EventSubscriptionUpdateParameters() # EventSubscriptionUpdateParameters | Updated event subscription information

    try:
        # Update an event subscription
        api_response = api_instance.event_subscriptions_update(scope, event_subscription_name, api_version, event_subscription_update_parameters)
        print("The response of EventSubscriptionsApi->event_subscriptions_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventSubscriptionsApi->event_subscriptions_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of existing event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use &#39;/subscriptions/{subscriptionId}/&#39; for a subscription, &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}&#39; for a resource group, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}&#39; for a resource, and &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}&#39; for an EventGrid topic. | 
 **event_subscription_name** | **str**| Name of the event subscription to be updated | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **event_subscription_update_parameters** | [**EventSubscriptionUpdateParameters**](EventSubscriptionUpdateParameters.md)| Updated event subscription information | 

### Return type

[**EventSubscription**](EventSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | EventSubscription update request accepted. |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

