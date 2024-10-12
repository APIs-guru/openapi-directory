# openapi_client.QueuesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**queues_create_or_update**](QueuesApi.md#queues_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName} | 
[**queues_create_or_update_authorization_rule**](QueuesApi.md#queues_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName} | 
[**queues_delete**](QueuesApi.md#queues_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName} | 
[**queues_delete_authorization_rule**](QueuesApi.md#queues_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName} | 
[**queues_get**](QueuesApi.md#queues_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName} | 
[**queues_get_authorization_rule**](QueuesApi.md#queues_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName} | 
[**queues_list_all**](QueuesApi.md#queues_list_all) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues | 
[**queues_list_authorization_rules**](QueuesApi.md#queues_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules | 
[**queues_post_authorization_rule**](QueuesApi.md#queues_post_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/queues/{queueName}/authorizationRules/{authorizationRuleName} | 


# **queues_create_or_update**
> QueueResource queues_create_or_update(resource_group_name, namespace_name, queue_name, api_version, subscription_id, parameters)



Creates or updates a Service Bus queue. This operation is idempotent.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.queue_create_or_update_parameters import QueueCreateOrUpdateParameters
from openapi_client.models.queue_resource import QueueResource
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.QueueCreateOrUpdateParameters() # QueueCreateOrUpdateParameters | Parameters supplied to create or update a queue resource.

    try:
        api_response = api_instance.queues_create_or_update(resource_group_name, namespace_name, queue_name, api_version, subscription_id, parameters)
        print("The response of QueuesApi->queues_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**QueueCreateOrUpdateParameters**](QueueCreateOrUpdateParameters.md)| Parameters supplied to create or update a queue resource. | 

### Return type

[**QueueResource**](QueueResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Queue successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_create_or_update_authorization_rule**
> SharedAccessAuthorizationRuleResource queues_create_or_update_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates an authorization rule for a queue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_create_or_update_parameters import SharedAccessAuthorizationRuleCreateOrUpdateParameters
from openapi_client.models.shared_access_authorization_rule_resource import SharedAccessAuthorizationRuleResource
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SharedAccessAuthorizationRuleCreateOrUpdateParameters() # SharedAccessAuthorizationRuleCreateOrUpdateParameters | The shared access authorization rule.

    try:
        api_response = api_instance.queues_create_or_update_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of QueuesApi->queues_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SharedAccessAuthorizationRuleCreateOrUpdateParameters**](SharedAccessAuthorizationRuleCreateOrUpdateParameters.md)| The shared access authorization rule. | 

### Return type

[**SharedAccessAuthorizationRuleResource**](SharedAccessAuthorizationRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization rule successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_delete**
> queues_delete(resource_group_name, namespace_name, queue_name, api_version, subscription_id)



Deletes a queue from the specified namespace in a resource group.

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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.queues_delete(resource_group_name, namespace_name, queue_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
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
**200** | Queue successfully deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_delete_authorization_rule**
> queues_delete_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id)



Deletes a queue authorization rule.

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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.queues_delete_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
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
**200** | Authorization rule successfully deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_get**
> QueueResource queues_get(resource_group_name, namespace_name, queue_name, api_version, subscription_id)



Returns a description for the specified queue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.queue_resource import QueueResource
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.queues_get(resource_group_name, namespace_name, queue_name, api_version, subscription_id)
        print("The response of QueuesApi->queues_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**QueueResource**](QueueResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Queue description successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_get_authorization_rule**
> SharedAccessAuthorizationRuleGetResource queues_get_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id)



Gets an authorization rule for a queue by rule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_get_resource import SharedAccessAuthorizationRuleGetResource
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.queues_get_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id)
        print("The response of QueuesApi->queues_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleGetResource**](SharedAccessAuthorizationRuleGetResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization rule successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_list_all**
> QueueListResult queues_list_all(resource_group_name, namespace_name, api_version, subscription_id)



Gets the queues within a namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.queue_list_result import QueueListResult
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.queues_list_all(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of QueuesApi->queues_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**QueueListResult**](QueueListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Queues successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_list_authorization_rules**
> SharedAccessAuthorizationRuleListResult queues_list_authorization_rules(resource_group_name, namespace_name, queue_name, api_version, subscription_id)



Gets all authorization rules for a queue.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_list_result import SharedAccessAuthorizationRuleListResult
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.queues_list_authorization_rules(resource_group_name, namespace_name, queue_name, api_version, subscription_id)
        print("The response of QueuesApi->queues_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_list_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleListResult**](SharedAccessAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization rules successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queues_post_authorization_rule**
> SharedAccessAuthorizationRuleResource queues_post_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id)



Gets an authorization rule for a queue by rule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.shared_access_authorization_rule_resource import SharedAccessAuthorizationRuleResource
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
    api_instance = openapi_client.QueuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The namespace name
    queue_name = 'queue_name_example' # str | The queue name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.queues_post_authorization_rule(resource_group_name, namespace_name, queue_name, authorization_rule_name, api_version, subscription_id)
        print("The response of QueuesApi->queues_post_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QueuesApi->queues_post_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The namespace name | 
 **queue_name** | **str**| The queue name. | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SharedAccessAuthorizationRuleResource**](SharedAccessAuthorizationRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization rule successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

