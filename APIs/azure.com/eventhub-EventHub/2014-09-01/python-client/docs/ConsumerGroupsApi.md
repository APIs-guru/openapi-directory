# openapi_client.ConsumerGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumer_groups_create_or_update**](ConsumerGroupsApi.md#consumer_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName} | 
[**consumer_groups_delete**](ConsumerGroupsApi.md#consumer_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName} | 
[**consumer_groups_get**](ConsumerGroupsApi.md#consumer_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName} | 
[**consumer_groups_list_all**](ConsumerGroupsApi.md#consumer_groups_list_all) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups | 


# **consumer_groups_create_or_update**
> ConsumerGroupResource consumer_groups_create_or_update(resource_group_name, namespace_name, event_hub_name, consumer_group_name, api_version, subscription_id, parameters)



Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_group_create_or_update_parameters import ConsumerGroupCreateOrUpdateParameters
from openapi_client.models.consumer_group_resource import ConsumerGroupResource
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
    api_instance = openapi_client.ConsumerGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    consumer_group_name = 'consumer_group_name_example' # str | The consumer group name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ConsumerGroupCreateOrUpdateParameters() # ConsumerGroupCreateOrUpdateParameters | Parameters supplied to create or update a consumer group resource.

    try:
        api_response = api_instance.consumer_groups_create_or_update(resource_group_name, namespace_name, event_hub_name, consumer_group_name, api_version, subscription_id, parameters)
        print("The response of ConsumerGroupsApi->consumer_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumerGroupsApi->consumer_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **consumer_group_name** | **str**| The consumer group name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ConsumerGroupCreateOrUpdateParameters**](ConsumerGroupCreateOrUpdateParameters.md)| Parameters supplied to create or update a consumer group resource. | 

### Return type

[**ConsumerGroupResource**](ConsumerGroupResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumer group successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumer_groups_delete**
> consumer_groups_delete(resource_group_name, namespace_name, event_hub_name, consumer_group_name, api_version, subscription_id)



Deletes a consumer group from the specified Event Hub and resource group.

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
    api_instance = openapi_client.ConsumerGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    consumer_group_name = 'consumer_group_name_example' # str | The consumer group name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.consumer_groups_delete(resource_group_name, namespace_name, event_hub_name, consumer_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ConsumerGroupsApi->consumer_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **consumer_group_name** | **str**| The consumer group name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Consumer group deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumer_groups_get**
> ConsumerGroupResource consumer_groups_get(resource_group_name, namespace_name, event_hub_name, consumer_group_name, api_version, subscription_id)



Gets a description for the specified consumer group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_group_resource import ConsumerGroupResource
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
    api_instance = openapi_client.ConsumerGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    consumer_group_name = 'consumer_group_name_example' # str | The consumer group name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.consumer_groups_get(resource_group_name, namespace_name, event_hub_name, consumer_group_name, api_version, subscription_id)
        print("The response of ConsumerGroupsApi->consumer_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumerGroupsApi->consumer_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **consumer_group_name** | **str**| The consumer group name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ConsumerGroupResource**](ConsumerGroupResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the consumer group description. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumer_groups_list_all**
> ConsumerGroupListResult consumer_groups_list_all(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)



Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_group_list_result import ConsumerGroupListResult
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
    api_instance = openapi_client.ConsumerGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.consumer_groups_list_all(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)
        print("The response of ConsumerGroupsApi->consumer_groups_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumerGroupsApi->consumer_groups_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ConsumerGroupListResult**](ConsumerGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of consumer groups. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

