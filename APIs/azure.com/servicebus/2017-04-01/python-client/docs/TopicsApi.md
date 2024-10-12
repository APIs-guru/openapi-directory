# openapi_client.TopicsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**topics_create_or_update**](TopicsApi.md#topics_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName} | 
[**topics_create_or_update_authorization_rule**](TopicsApi.md#topics_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName} | 
[**topics_delete**](TopicsApi.md#topics_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName} | 
[**topics_delete_authorization_rule**](TopicsApi.md#topics_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName} | 
[**topics_get**](TopicsApi.md#topics_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName} | 
[**topics_get_authorization_rule**](TopicsApi.md#topics_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName} | 
[**topics_list_authorization_rules**](TopicsApi.md#topics_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules | 
[**topics_list_by_namespace**](TopicsApi.md#topics_list_by_namespace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics | 
[**topics_list_keys**](TopicsApi.md#topics_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/ListKeys | 
[**topics_regenerate_keys**](TopicsApi.md#topics_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/regenerateKeys | 


# **topics_create_or_update**
> SBTopic topics_create_or_update(resource_group_name, namespace_name, topic_name, api_version, subscription_id, parameters)



Creates a topic in the specified namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_topic import SBTopic
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SBTopic() # SBTopic | Parameters supplied to create a topic resource.

    try:
        api_response = api_instance.topics_create_or_update(resource_group_name, namespace_name, topic_name, api_version, subscription_id, parameters)
        print("The response of TopicsApi->topics_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SBTopic**](SBTopic.md)| Parameters supplied to create a topic resource. | 

### Return type

[**SBTopic**](SBTopic.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Topic successfully created. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_create_or_update_authorization_rule**
> SBAuthorizationRule topics_create_or_update_authorization_rule(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates an authorization rule for the specified topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_authorization_rule import SBAuthorizationRule
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SBAuthorizationRule() # SBAuthorizationRule | The shared access authorization rule.

    try:
        api_response = api_instance.topics_create_or_update_authorization_rule(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of TopicsApi->topics_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SBAuthorizationRule**](SBAuthorizationRule.md)| The shared access authorization rule. | 

### Return type

[**SBAuthorizationRule**](SBAuthorizationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Topic authorization rule successfully created. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_delete**
> topics_delete(resource_group_name, namespace_name, topic_name, api_version, subscription_id)



Deletes a topic from the specified namespace and resource group.

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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.topics_delete(resource_group_name, namespace_name, topic_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_delete: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Topic successfully deleted. |  -  |
**204** | No Content |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_delete_authorization_rule**
> topics_delete_authorization_rule(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id)



Deletes a topic authorization rule.

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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.topics_delete_authorization_rule(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
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
**200** | Topic authorization rule successfully deleted. |  -  |
**204** | No content. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_get**
> SBTopic topics_get(resource_group_name, namespace_name, topic_name, api_version, subscription_id)



Returns a description for the specified topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_topic import SBTopic
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.topics_get(resource_group_name, namespace_name, topic_name, api_version, subscription_id)
        print("The response of TopicsApi->topics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_get: %s\n" % e)
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

[**SBTopic**](SBTopic.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Topic description successfully retrieved. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_get_authorization_rule**
> SBAuthorizationRule topics_get_authorization_rule(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id)



Returns the specified authorization rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_authorization_rule import SBAuthorizationRule
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.topics_get_authorization_rule(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id)
        print("The response of TopicsApi->topics_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SBAuthorizationRule**](SBAuthorizationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Topic authorization rule returned successfully. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_list_authorization_rules**
> SBAuthorizationRuleListResult topics_list_authorization_rules(resource_group_name, namespace_name, topic_name, api_version, subscription_id)



Gets authorization rules for a topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_authorization_rule_list_result import SBAuthorizationRuleListResult
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.topics_list_authorization_rules(resource_group_name, namespace_name, topic_name, api_version, subscription_id)
        print("The response of TopicsApi->topics_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_authorization_rules: %s\n" % e)
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

[**SBAuthorizationRuleListResult**](SBAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization rules successfully returned. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_list_by_namespace**
> SBTopicListResult topics_list_by_namespace(resource_group_name, namespace_name, api_version, subscription_id, skip=skip, top=top)



Gets all the topics in a namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sb_topic_list_result import SBTopicListResult
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    skip = 56 # int | Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. (optional)
    top = 56 # int | May be used to limit the number of results to the most recent N usageDetails. (optional)

    try:
        api_response = api_instance.topics_list_by_namespace(resource_group_name, namespace_name, api_version, subscription_id, skip=skip, top=top)
        print("The response of TopicsApi->topics_list_by_namespace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_by_namespace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **skip** | **int**| Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. | [optional] 
 **top** | **int**| May be used to limit the number of results to the most recent N usageDetails. | [optional] 

### Return type

[**SBTopicListResult**](SBTopicListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved list of topics. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_list_keys**
> AccessKeys topics_list_keys(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id)



Gets the primary and secondary connection strings for the topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_keys import AccessKeys
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.topics_list_keys(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id)
        print("The response of TopicsApi->topics_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AccessKeys**](AccessKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection strings successfully retrieved. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topics_regenerate_keys**
> AccessKeys topics_regenerate_keys(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id, parameters)



Regenerates primary or secondary connection strings for the topic.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.access_keys import AccessKeys
from openapi_client.models.regenerate_access_key_parameters import RegenerateAccessKeyParameters
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
    api_instance = openapi_client.TopicsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    topic_name = 'topic_name_example' # str | The topic name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RegenerateAccessKeyParameters() # RegenerateAccessKeyParameters | Parameters supplied to regenerate the authorization rule.

    try:
        api_response = api_instance.topics_regenerate_keys(resource_group_name, namespace_name, topic_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of TopicsApi->topics_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopicsApi->topics_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **topic_name** | **str**| The topic name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RegenerateAccessKeyParameters**](RegenerateAccessKeyParameters.md)| Parameters supplied to regenerate the authorization rule. | 

### Return type

[**AccessKeys**](AccessKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection strings successfully regenerated. |  -  |
**0** | ServiceBus error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

