# openapi_client.SubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptions_create_or_update**](SubscriptionsApi.md#subscriptions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName} | 
[**subscriptions_delete**](SubscriptionsApi.md#subscriptions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName} | 
[**subscriptions_get**](SubscriptionsApi.md#subscriptions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName} | 
[**subscriptions_list_all**](SubscriptionsApi.md#subscriptions_list_all) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions | 


# **subscriptions_create_or_update**
> SubscriptionResource subscriptions_create_or_update(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id, parameters)



Creates a topic subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_create_or_update_parameters import SubscriptionCreateOrUpdateParameters
from openapi_client.models.subscription_resource import SubscriptionResource
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    subscription_name = 'subscription_name_example' # str | The subscription name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SubscriptionCreateOrUpdateParameters() # SubscriptionCreateOrUpdateParameters | Parameters supplied to create a subscription resource.

    try:
        api_response = api_instance.subscriptions_create_or_update(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id, parameters)
        print("The response of SubscriptionsApi->subscriptions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **subscription_name** | **str**| The subscription name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SubscriptionCreateOrUpdateParameters**](SubscriptionCreateOrUpdateParameters.md)| Parameters supplied to create a subscription resource. | 

### Return type

[**SubscriptionResource**](SubscriptionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription create request accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_delete**
> subscriptions_delete(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id)



Deletes a subscription from the specified topic.

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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    subscription_name = 'subscription_name_example' # str | The subscription name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.subscriptions_delete(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **subscription_name** | **str**| The subscription name. | 
 **api_version** | **str**| Client API version. | 
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
**200** | Subscription successfully deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_get**
> SubscriptionResource subscriptions_get(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id)



Returns a subscription description for the specified topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_resource import SubscriptionResource
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    subscription_name = 'subscription_name_example' # str | The subscription name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.subscriptions_get(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id)
        print("The response of SubscriptionsApi->subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **subscription_name** | **str**| The subscription name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SubscriptionResource**](SubscriptionResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved subscription description. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_list_all**
> SubscriptionListResult subscriptions_list_all(resource_group_name, namespace_name, topic_name, api_version, subscription_id)



List all the subscriptions under a specified topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_list_result import SubscriptionListResult
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.subscriptions_list_all(resource_group_name, namespace_name, topic_name, api_version, subscription_id)
        print("The response of SubscriptionsApi->subscriptions_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SubscriptionListResult**](SubscriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved list of subscriptions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

