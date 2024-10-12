# openapi_client.EventHubsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**event_hubs_create_or_update**](EventHubsApi.md#event_hubs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName} | 
[**event_hubs_create_or_update_authorization_rule**](EventHubsApi.md#event_hubs_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName} | 
[**event_hubs_delete**](EventHubsApi.md#event_hubs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName} | 
[**event_hubs_delete_authorization_rule**](EventHubsApi.md#event_hubs_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName} | 
[**event_hubs_get**](EventHubsApi.md#event_hubs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName} | 
[**event_hubs_get_authorization_rule**](EventHubsApi.md#event_hubs_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName} | 
[**event_hubs_list_all**](EventHubsApi.md#event_hubs_list_all) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs | 
[**event_hubs_list_authorization_rules**](EventHubsApi.md#event_hubs_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules | 
[**event_hubs_list_keys**](EventHubsApi.md#event_hubs_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}/ListKeys | 
[**event_hubs_post_authorization_rule**](EventHubsApi.md#event_hubs_post_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName} | 
[**event_hubs_regenerate_keys**](EventHubsApi.md#event_hubs_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/authorizationRules/{authorizationRuleName}/regenerateKeys | 


# **event_hubs_create_or_update**
> EventHubResource event_hubs_create_or_update(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id, parameters)



Creates or updates a new Event Hub as a nested resource within a Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_hub_create_or_update_parameters import EventHubCreateOrUpdateParameters
from openapi_client.models.event_hub_resource import EventHubResource
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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.EventHubCreateOrUpdateParameters() # EventHubCreateOrUpdateParameters | Parameters supplied to create an Event Hub resource.

    try:
        api_response = api_instance.event_hubs_create_or_update(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id, parameters)
        print("The response of EventHubsApi->event_hubs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**EventHubCreateOrUpdateParameters**](EventHubCreateOrUpdateParameters.md)| Parameters supplied to create an Event Hub resource. | 

### Return type

[**EventHubResource**](EventHubResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event Hub successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_create_or_update_authorization_rule**
> SharedAccessAuthorizationRuleResource event_hubs_create_or_update_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates or updates an AuthorizationRule for the specified Event Hub.

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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SharedAccessAuthorizationRuleCreateOrUpdateParameters() # SharedAccessAuthorizationRuleCreateOrUpdateParameters | The shared access AuthorizationRule.

    try:
        api_response = api_instance.event_hubs_create_or_update_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of EventHubsApi->event_hubs_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SharedAccessAuthorizationRuleCreateOrUpdateParameters**](SharedAccessAuthorizationRuleCreateOrUpdateParameters.md)| The shared access AuthorizationRule. | 

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
**200** | Event Hub AuthorizationRule successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_delete**
> event_hubs_delete(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)



Deletes an Event Hub from the specified Namespace and resource group.

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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.event_hubs_delete(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_delete: %s\n" % e)
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

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event Hub successfully deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_delete_authorization_rule**
> event_hubs_delete_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)



Deletes an Event Hub AuthorizationRule.

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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.event_hubs_delete_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
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
**200** | Event Hub AuthorizationRule successfully deleted. |  -  |
**204** | No content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_get**
> EventHubResource event_hubs_get(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)



Gets an Event Hubs description for the specified Event Hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_hub_resource import EventHubResource
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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.event_hubs_get(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)
        print("The response of EventHubsApi->event_hubs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_get: %s\n" % e)
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

[**EventHubResource**](EventHubResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the Event Hub description. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_get_authorization_rule**
> SharedAccessAuthorizationRuleResource event_hubs_get_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)



Gets an AuthorizationRule for an Event Hub by rule name.

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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.event_hubs_get_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)
        print("The response of EventHubsApi->event_hubs_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
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
**200** | Event Hub AuthorizationRule successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_list_all**
> EventHubListResult event_hubs_list_all(resource_group_name, namespace_name, api_version, subscription_id)



Gets all the Event Hubs in a Namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_hub_list_result import EventHubListResult
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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.event_hubs_list_all(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of EventHubsApi->event_hubs_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**EventHubListResult**](EventHubListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of Event Hubs. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_list_authorization_rules**
> SharedAccessAuthorizationRuleListResult event_hubs_list_authorization_rules(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)



Gets the authorization rules for an Event Hub.

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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.event_hubs_list_authorization_rules(resource_group_name, namespace_name, event_hub_name, api_version, subscription_id)
        print("The response of EventHubsApi->event_hubs_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_list_authorization_rules: %s\n" % e)
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

[**SharedAccessAuthorizationRuleListResult**](SharedAccessAuthorizationRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event Hub AuthorizationRule returned successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_list_keys**
> ResourceListKeys event_hubs_list_keys(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)



Gets the ACS and SAS connection strings for the Event Hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_list_keys import ResourceListKeys
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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.event_hubs_list_keys(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)
        print("The response of EventHubsApi->event_hubs_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ResourceListKeys**](ResourceListKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection strings successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_post_authorization_rule**
> SharedAccessAuthorizationRuleResource event_hubs_post_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)



Gets an AuthorizationRule for an Event Hub by rule name.

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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.event_hubs_post_authorization_rule(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id)
        print("The response of EventHubsApi->event_hubs_post_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_post_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
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
**200** | Event Hub AuthorizationRule successfully returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **event_hubs_regenerate_keys**
> ResourceListKeys event_hubs_regenerate_keys(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id, parameters)



Regenerates the ACS and SAS connection strings for the Event Hub.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regenerate_keys_parameters import RegenerateKeysParameters
from openapi_client.models.resource_list_keys import ResourceListKeys
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
    api_instance = openapi_client.EventHubsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace name
    event_hub_name = 'event_hub_name_example' # str | The Event Hub name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorization rule name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RegenerateKeysParameters() # RegenerateKeysParameters | Parameters supplied to regenerate the AuthorizationRule Keys (PrimaryKey/SecondaryKey).

    try:
        api_response = api_instance.event_hubs_regenerate_keys(resource_group_name, namespace_name, event_hub_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of EventHubsApi->event_hubs_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventHubsApi->event_hubs_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the azure subscription. | 
 **namespace_name** | **str**| The Namespace name | 
 **event_hub_name** | **str**| The Event Hub name | 
 **authorization_rule_name** | **str**| The authorization rule name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RegenerateKeysParameters**](RegenerateKeysParameters.md)| Parameters supplied to regenerate the AuthorizationRule Keys (PrimaryKey/SecondaryKey). | 

### Return type

[**ResourceListKeys**](ResourceListKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection strings successfully regenerated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

