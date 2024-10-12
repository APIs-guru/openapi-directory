# openapi_client.SubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rules_get**](SubscriptionsApi.md#rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName}/rules/{ruleName} | 
[**subscriptions_create_or_update**](SubscriptionsApi.md#subscriptions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName} | 
[**subscriptions_delete**](SubscriptionsApi.md#subscriptions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName} | 
[**subscriptions_get**](SubscriptionsApi.md#subscriptions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions/{subscriptionName} | 
[**subscriptions_list_by_topic**](SubscriptionsApi.md#subscriptions_list_by_topic) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/subscriptions | 


# **rules_get**
> Rule rules_get(resource_group_name, namespace_name, topic_name, subscription_name, rule_name, api_version, subscription_id)



Retrieves the description for the specified rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.rule import Rule
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
    rule_name = 'rule_name_example' # str | The rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.rules_get(resource_group_name, namespace_name, topic_name, subscription_name, rule_name, api_version, subscription_id)
        print("The response of SubscriptionsApi->rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **subscription_name** | **str**| The subscription name. | 
 **rule_name** | **str**| The rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**Rule**](Rule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved rule description. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_create_or_update**
> SBSubscription subscriptions_create_or_update(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id, parameters)



Creates a topic subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_subscription import SBSubscription
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
    parameters = openapi_client.SBSubscription() # SBSubscription | Parameters supplied to create a subscription resource.

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
 **parameters** | [**SBSubscription**](SBSubscription.md)| Parameters supplied to create a subscription resource. | 

### Return type

[**SBSubscription**](SBSubscription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription create request accepted. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

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
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription successfully deleted. |  -  |
**204** | No content. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_get**
> SBSubscription subscriptions_get(resource_group_name, namespace_name, topic_name, subscription_name, api_version, subscription_id)



Returns a subscription description for the specified topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_subscription import SBSubscription
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

[**SBSubscription**](SBSubscription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved subscription description. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_list_by_topic**
> SBSubscriptionListResult subscriptions_list_by_topic(resource_group_name, namespace_name, topic_name, api_version, subscription_id, skip=skip, top=top)



List all the subscriptions under a specified topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_subscription_list_result import SBSubscriptionListResult
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
    skip = 56 # int | Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.subscriptions_list_by_topic(resource_group_name, namespace_name, topic_name, api_version, subscription_id, skip=skip, top=top)
        print("The response of SubscriptionsApi->subscriptions_list_by_topic:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_list_by_topic: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **skip** | **int**| Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**SBSubscriptionListResult**](SBSubscriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved list of subscriptions. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

