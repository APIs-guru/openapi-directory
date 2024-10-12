# openapi_client.TopicsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**topics_create_or_update**](TopicsApi.md#topics_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName} | Create a topic
[**topics_delete**](TopicsApi.md#topics_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName} | Delete a topic
[**topics_get**](TopicsApi.md#topics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName} | Get a topic
[**topics_list_by_resource_group**](TopicsApi.md#topics_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics | List topics under a resource group
[**topics_list_by_subscription**](TopicsApi.md#topics_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topics | List topics under an Azure subscription
[**topics_list_event_types**](TopicsApi.md#topics_list_event_types) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventTypes | List topic event types
[**topics_list_shared_access_keys**](TopicsApi.md#topics_list_shared_access_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/listKeys | List keys for a topic
[**topics_regenerate_key**](TopicsApi.md#topics_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/regenerateKey | Regenerate key for a topic
[**topics_update**](TopicsApi.md#topics_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName} | Update a topic


# **topics_create_or_update**
> Topic topics_create_or_update(subscription_id, resource_group_name, topic_name, api_version, topic_info)

Create a topic

Asynchronously creates a new topic with the specified parameters.

### Example


```python
import openapi_client
from openapi_client.models.topic import Topic
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    topic_info = openapi_client.Topic() # Topic | Topic information

    try:
        # Create a topic
        api_response = api_instance.topics_create_or_update(subscription_id, resource_group_name, topic_name, api_version, topic_info)
        print("The response of TopicsApi->topics_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_name** | **str**| Name of the topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **topic_info** | [**Topic**](Topic.md)| Topic information | 

### Return type

[**Topic**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_delete**
> topics_delete(subscription_id, resource_group_name, topic_name, api_version)

Delete a topic

Delete existing topic

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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Delete a topic
        api_instance.topics_delete(subscription_id, resource_group_name, topic_name, api_version)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_name** | **str**| Name of the topic | 
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
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_get**
> Topic topics_get(subscription_id, resource_group_name, topic_name, api_version)

Get a topic

Get properties of a topic

### Example


```python
import openapi_client
from openapi_client.models.topic import Topic
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get a topic
        api_response = api_instance.topics_get(subscription_id, resource_group_name, topic_name, api_version)
        print("The response of TopicsApi->topics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_name** | **str**| Name of the topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**Topic**](Topic.md)

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

# **topics_list_by_resource_group**
> TopicsListResult topics_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top)

List topics under a resource group

List all the topics under a resource group

### Example


```python
import openapi_client
from openapi_client.models.topics_list_result import TopicsListResult
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | Filter the results using OData syntax. (optional)
    top = 56 # int | The number of results to return. (optional)

    try:
        # List topics under a resource group
        api_response = api_instance.topics_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top)
        print("The response of TopicsApi->topics_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| Filter the results using OData syntax. | [optional] 
 **top** | **int**| The number of results to return. | [optional] 

### Return type

[**TopicsListResult**](TopicsListResult.md)

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

# **topics_list_by_subscription**
> TopicsListResult topics_list_by_subscription(subscription_id, api_version, filter=filter, top=top)

List topics under an Azure subscription

List all the topics under an Azure subscription

### Example


```python
import openapi_client
from openapi_client.models.topics_list_result import TopicsListResult
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | Filter the results using OData syntax. (optional)
    top = 56 # int | The number of results to return. (optional)

    try:
        # List topics under an Azure subscription
        api_response = api_instance.topics_list_by_subscription(subscription_id, api_version, filter=filter, top=top)
        print("The response of TopicsApi->topics_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| Filter the results using OData syntax. | [optional] 
 **top** | **int**| The number of results to return. | [optional] 

### Return type

[**TopicsListResult**](TopicsListResult.md)

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

# **topics_list_event_types**
> EventTypesListResult topics_list_event_types(subscription_id, resource_group_name, provider_namespace, resource_type_name, resource_name, api_version)

List topic event types

List event types for a topic

### Example


```python
import openapi_client
from openapi_client.models.event_types_list_result import EventTypesListResult
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    provider_namespace = 'provider_namespace_example' # str | Namespace of the provider of the topic
    resource_type_name = 'resource_type_name_example' # str | Name of the topic type
    resource_name = 'resource_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List topic event types
        api_response = api_instance.topics_list_event_types(subscription_id, resource_group_name, provider_namespace, resource_type_name, resource_name, api_version)
        print("The response of TopicsApi->topics_list_event_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_event_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **provider_namespace** | **str**| Namespace of the provider of the topic | 
 **resource_type_name** | **str**| Name of the topic type | 
 **resource_name** | **str**| Name of the topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**EventTypesListResult**](EventTypesListResult.md)

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

# **topics_list_shared_access_keys**
> TopicSharedAccessKeys topics_list_shared_access_keys(subscription_id, resource_group_name, topic_name, api_version)

List keys for a topic

List the two keys used to publish to a topic

### Example


```python
import openapi_client
from openapi_client.models.topic_shared_access_keys import TopicSharedAccessKeys
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List keys for a topic
        api_response = api_instance.topics_list_shared_access_keys(subscription_id, resource_group_name, topic_name, api_version)
        print("The response of TopicsApi->topics_list_shared_access_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_shared_access_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_name** | **str**| Name of the topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**TopicSharedAccessKeys**](TopicSharedAccessKeys.md)

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

# **topics_regenerate_key**
> TopicSharedAccessKeys topics_regenerate_key(subscription_id, resource_group_name, topic_name, api_version, regenerate_key_request)

Regenerate key for a topic

Regenerate a shared access key for a topic

### Example


```python
import openapi_client
from openapi_client.models.topic_regenerate_key_request import TopicRegenerateKeyRequest
from openapi_client.models.topic_shared_access_keys import TopicSharedAccessKeys
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    regenerate_key_request = openapi_client.TopicRegenerateKeyRequest() # TopicRegenerateKeyRequest | Request body to regenerate key

    try:
        # Regenerate key for a topic
        api_response = api_instance.topics_regenerate_key(subscription_id, resource_group_name, topic_name, api_version, regenerate_key_request)
        print("The response of TopicsApi->topics_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_name** | **str**| Name of the topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **regenerate_key_request** | [**TopicRegenerateKeyRequest**](TopicRegenerateKeyRequest.md)| Request body to regenerate key | 

### Return type

[**TopicSharedAccessKeys**](TopicSharedAccessKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_update**
> Topic topics_update(subscription_id, resource_group_name, topic_name, api_version, topic_update_parameters)

Update a topic

Asynchronously updates a topic with the specified parameters.

### Example


```python
import openapi_client
from openapi_client.models.topic import Topic
from openapi_client.models.topic_update_parameters import TopicUpdateParameters
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
    api_instance = openapi_client.TopicsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    topic_name = 'topic_name_example' # str | Name of the topic
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    topic_update_parameters = openapi_client.TopicUpdateParameters() # TopicUpdateParameters | Topic update information

    try:
        # Update a topic
        api_response = api_instance.topics_update(subscription_id, resource_group_name, topic_name, api_version, topic_update_parameters)
        print("The response of TopicsApi->topics_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **topic_name** | **str**| Name of the topic | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **topic_update_parameters** | [**TopicUpdateParameters**](TopicUpdateParameters.md)| Topic update information | 

### Return type

[**Topic**](Topic.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Topic update request accepted. |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

