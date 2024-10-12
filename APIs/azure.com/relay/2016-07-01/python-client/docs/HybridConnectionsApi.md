# openapi_client.HybridConnectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hybrid_connections_create_or_update**](HybridConnectionsApi.md#hybrid_connections_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName} | 
[**hybrid_connections_create_or_update_authorization_rule**](HybridConnectionsApi.md#hybrid_connections_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName} | 
[**hybrid_connections_delete**](HybridConnectionsApi.md#hybrid_connections_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName} | 
[**hybrid_connections_delete_authorization_rule**](HybridConnectionsApi.md#hybrid_connections_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName} | 
[**hybrid_connections_get**](HybridConnectionsApi.md#hybrid_connections_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName} | 
[**hybrid_connections_get_authorization_rule**](HybridConnectionsApi.md#hybrid_connections_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName} | 
[**hybrid_connections_list_authorization_rules**](HybridConnectionsApi.md#hybrid_connections_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules | 
[**hybrid_connections_list_by_namespace**](HybridConnectionsApi.md#hybrid_connections_list_by_namespace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections | 
[**hybrid_connections_list_keys**](HybridConnectionsApi.md#hybrid_connections_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}/ListKeys | 
[**hybrid_connections_list_post_authorization_rules**](HybridConnectionsApi.md#hybrid_connections_list_post_authorization_rules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules | 
[**hybrid_connections_post_authorization_rule**](HybridConnectionsApi.md#hybrid_connections_post_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName} | 
[**hybrid_connections_regenerate_keys**](HybridConnectionsApi.md#hybrid_connections_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/HybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}/regenerateKeys | 


# **hybrid_connections_create_or_update**
> HybridConnection hybrid_connections_create_or_update(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id, parameters)



Creates or Updates a service HybridConnection. This operation is idempotent.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_connection import HybridConnection
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.HybridConnection() # HybridConnection | Parameters supplied to create a HybridConnection.

    try:
        api_response = api_instance.hybrid_connections_create_or_update(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id, parameters)
        print("The response of HybridConnectionsApi->hybrid_connections_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**HybridConnection**](HybridConnection.md)| Parameters supplied to create a HybridConnection. | 

### Return type

[**HybridConnection**](HybridConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request to Create Hybrid Connections succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_create_or_update_authorization_rule**
> AuthorizationRule hybrid_connections_create_or_update_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates or Updates an authorization rule for a HybridConnection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule import AuthorizationRule
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AuthorizationRule() # AuthorizationRule | The authorization rule parameters

    try:
        api_response = api_instance.hybrid_connections_create_or_update_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of HybridConnectionsApi->hybrid_connections_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AuthorizationRule**](AuthorizationRule.md)| The authorization rule parameters | 

### Return type

[**AuthorizationRule**](AuthorizationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HybridConnection Authorization rule created |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_delete**
> hybrid_connections_delete(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)



Deletes a HybridConnection .

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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.hybrid_connections_delete(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Request to delete Hybrid Connections succeeded. |  -  |
**204** | No Content. The request has been accepted but the Hybrid Connections was not found. |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_delete_authorization_rule**
> hybrid_connections_delete_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)



Deletes a HybridConnection authorization rule

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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.hybrid_connections_delete_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | HybridConnection authorizationRule deleted |  -  |
**204** | Authorization rule does not exist |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_get**
> HybridConnection hybrid_connections_get(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)



Returns the description for the specified HybridConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_connection import HybridConnection
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_get(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**HybridConnection**](HybridConnection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved hybridConnection description |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_get_authorization_rule**
> AuthorizationRule hybrid_connections_get_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)



HybridConnection authorizationRule for a HybridConnection by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule import AuthorizationRule
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_get_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationRule**](AuthorizationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HybridConnection AuthorizationRule returned successfully |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_list_authorization_rules**
> AuthorizationRuleListResult hybrid_connections_list_authorization_rules(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)



Authorization rules for a HybridConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule_list_result import AuthorizationRuleListResult
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_list_authorization_rules(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_list_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationRuleListResult**](AuthorizationRuleListResult.md)

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

# **hybrid_connections_list_by_namespace**
> HybridConnectionListResult hybrid_connections_list_by_namespace(resource_group_name, namespace_name, api_version, subscription_id)



Lists the HybridConnection within the namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_connection_list_result import HybridConnectionListResult
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_list_by_namespace(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_list_by_namespace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_list_by_namespace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**HybridConnectionListResult**](HybridConnectionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request to retrieve HybridConnections by NameSpace succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_list_keys**
> AuthorizationRuleKeys hybrid_connections_list_keys(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)



Primary and Secondary ConnectionStrings to the HybridConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule_keys import AuthorizationRuleKeys
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_list_keys(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationRuleKeys**](AuthorizationRuleKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request to retirve ConnectionStrings to the HybridConnection succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_list_post_authorization_rules**
> AuthorizationRuleListResult hybrid_connections_list_post_authorization_rules(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)



Authorization rules for a HybridConnection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule_list_result import AuthorizationRuleListResult
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_list_post_authorization_rules(resource_group_name, namespace_name, hybrid_connection_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_list_post_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_list_post_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationRuleListResult**](AuthorizationRuleListResult.md)

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

# **hybrid_connections_post_authorization_rule**
> AuthorizationRule hybrid_connections_post_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)



HybridConnection authorizationRule for a HybridConnection by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule import AuthorizationRule
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.hybrid_connections_post_authorization_rule(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id)
        print("The response of HybridConnectionsApi->hybrid_connections_post_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_post_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AuthorizationRule**](AuthorizationRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HybridConnection AuthorizationRule returned successfully |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hybrid_connections_regenerate_keys**
> AuthorizationRuleKeys hybrid_connections_regenerate_keys(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id, parameters)



Regenerates the Primary or Secondary ConnectionStrings to the HybridConnection

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.authorization_rule_keys import AuthorizationRuleKeys
from openapi_client.models.regenerate_keys_parameters import RegenerateKeysParameters
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
    api_instance = openapi_client.HybridConnectionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    hybrid_connection_name = 'hybrid_connection_name_example' # str | The hybrid connection name.
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RegenerateKeysParameters() # RegenerateKeysParameters | Parameters supplied to regenerate Auth Rule.

    try:
        api_response = api_instance.hybrid_connections_regenerate_keys(resource_group_name, namespace_name, hybrid_connection_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of HybridConnectionsApi->hybrid_connections_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridConnectionsApi->hybrid_connections_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **hybrid_connection_name** | **str**| The hybrid connection name. | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RegenerateKeysParameters**](RegenerateKeysParameters.md)| Parameters supplied to regenerate Auth Rule. | 

### Return type

[**AuthorizationRuleKeys**](AuthorizationRuleKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request to regenerate ConnectionStrings to HybridConnection succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

