# openapi_client.WCFRelaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**w_cf_relays_create_or_update**](WCFRelaysApi.md#w_cf_relays_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName} | 
[**w_cf_relays_create_or_update_authorization_rule**](WCFRelaysApi.md#w_cf_relays_create_or_update_authorization_rule) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules/{authorizationRuleName} | 
[**w_cf_relays_delete**](WCFRelaysApi.md#w_cf_relays_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName} | 
[**w_cf_relays_delete_authorization_rule**](WCFRelaysApi.md#w_cf_relays_delete_authorization_rule) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules/{authorizationRuleName} | 
[**w_cf_relays_get**](WCFRelaysApi.md#w_cf_relays_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName} | 
[**w_cf_relays_get_authorization_rule**](WCFRelaysApi.md#w_cf_relays_get_authorization_rule) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules/{authorizationRuleName} | 
[**w_cf_relays_list_authorization_rules**](WCFRelaysApi.md#w_cf_relays_list_authorization_rules) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules | 
[**w_cf_relays_list_by_namespace**](WCFRelaysApi.md#w_cf_relays_list_by_namespace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays | 
[**w_cf_relays_list_keys**](WCFRelaysApi.md#w_cf_relays_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules/{authorizationRuleName}/ListKeys | 
[**w_cf_relays_list_post_authorization_rules**](WCFRelaysApi.md#w_cf_relays_list_post_authorization_rules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules | 
[**w_cf_relays_post_authorization_rule**](WCFRelaysApi.md#w_cf_relays_post_authorization_rule) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules/{authorizationRuleName} | 
[**w_cf_relays_regenerate_keys**](WCFRelaysApi.md#w_cf_relays_regenerate_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/WcfRelays/{relayName}/authorizationRules/{authorizationRuleName}/regenerateKeys | 


# **w_cf_relays_create_or_update**
> WcfRelay w_cf_relays_create_or_update(resource_group_name, namespace_name, relay_name, api_version, subscription_id, parameters)



Creates or Updates a WCFRelay. This operation is idempotent.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wcf_relay import WcfRelay
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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.WcfRelay() # WcfRelay | Parameters supplied to create a WCFRelays.

    try:
        api_response = api_instance.w_cf_relays_create_or_update(resource_group_name, namespace_name, relay_name, api_version, subscription_id, parameters)
        print("The response of WCFRelaysApi->w_cf_relays_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**WcfRelay**](WcfRelay.md)| Parameters supplied to create a WCFRelays. | 

### Return type

[**WcfRelay**](WcfRelay.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request to create WCFRelays succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_create_or_update_authorization_rule**
> AuthorizationRule w_cf_relays_create_or_update_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id, parameters)



Creates or Updates an authorization rule for a WCFRelays

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.AuthorizationRule() # AuthorizationRule | The authorization rule parameters.

    try:
        api_response = api_instance.w_cf_relays_create_or_update_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of WCFRelaysApi->w_cf_relays_create_or_update_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_create_or_update_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
 **authorization_rule_name** | **str**| The authorizationRule name. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**AuthorizationRule**](AuthorizationRule.md)| The authorization rule parameters. | 

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
**200** | WCFRelays Authorization rule created |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_delete**
> w_cf_relays_delete(resource_group_name, namespace_name, relay_name, api_version, subscription_id)



Deletes a WCFRelays .

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.w_cf_relays_delete(resource_group_name, namespace_name, relay_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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
**200** | WCFRelays deleted. |  -  |
**204** | No Content |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_delete_authorization_rule**
> w_cf_relays_delete_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)



Deletes a WCFRelays authorization rule

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.w_cf_relays_delete_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_delete_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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
**200** | Request to delete WCFRelay authorizationRule succeeded |  -  |
**204** | Request accepted but Authorization rule does not exist |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_get**
> WcfRelay w_cf_relays_get(resource_group_name, namespace_name, relay_name, api_version, subscription_id)



Returns the description for the specified WCFRelays.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wcf_relay import WcfRelay
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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_get(resource_group_name, namespace_name, relay_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**WcfRelay**](WcfRelay.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved WCFRelays description |  -  |
**204** | WCFRelays not found |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_get_authorization_rule**
> AuthorizationRule w_cf_relays_get_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)



Get authorizationRule for a WCFRelays by name.

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_get_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_get_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_get_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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
**200** | Request for WCFRelays AuthorizationRule succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_list_authorization_rules**
> AuthorizationRuleListResult w_cf_relays_list_authorization_rules(resource_group_name, namespace_name, relay_name, api_version, subscription_id)



Authorization rules for a WCFRelays.

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_list_authorization_rules(resource_group_name, namespace_name, relay_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_list_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_list_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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

# **w_cf_relays_list_by_namespace**
> WcfRelaysListResult w_cf_relays_list_by_namespace(resource_group_name, namespace_name, api_version, subscription_id)



Lists the WCFRelays within the namespace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.wcf_relays_list_result import WcfRelaysListResult
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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_list_by_namespace(resource_group_name, namespace_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_list_by_namespace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_list_by_namespace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**WcfRelaysListResult**](WcfRelaysListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | WCF Relays returned successfully |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_list_keys**
> AuthorizationRuleKeys w_cf_relays_list_keys(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)



Primary and Secondary ConnectionStrings to the WCFRelays.

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_list_keys(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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
**200** | Successful |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_list_post_authorization_rules**
> AuthorizationRuleListResult w_cf_relays_list_post_authorization_rules(resource_group_name, namespace_name, relay_name, api_version, subscription_id)



Authorization rules for a WCFRelays.

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_list_post_authorization_rules(resource_group_name, namespace_name, relay_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_list_post_authorization_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_list_post_authorization_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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

# **w_cf_relays_post_authorization_rule**
> AuthorizationRule w_cf_relays_post_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)



Get authorizationRule for a WCFRelays by name.

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.w_cf_relays_post_authorization_rule(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id)
        print("The response of WCFRelaysApi->w_cf_relays_post_authorization_rule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_post_authorization_rule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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
**200** | Request for WCFRelays AuthorizationRule succeeded |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **w_cf_relays_regenerate_keys**
> AuthorizationRuleKeys w_cf_relays_regenerate_keys(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id, parameters)



Regenerates the Primary or Secondary ConnectionStrings to the WCFRelays

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
    api_instance = openapi_client.WCFRelaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    namespace_name = 'namespace_name_example' # str | The Namespace Name
    relay_name = 'relay_name_example' # str | The relay name
    authorization_rule_name = 'authorization_rule_name_example' # str | The authorizationRule name.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RegenerateKeysParameters() # RegenerateKeysParameters | Parameters supplied to regenerate Auth Rule.

    try:
        api_response = api_instance.w_cf_relays_regenerate_keys(resource_group_name, namespace_name, relay_name, authorization_rule_name, api_version, subscription_id, parameters)
        print("The response of WCFRelaysApi->w_cf_relays_regenerate_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WCFRelaysApi->w_cf_relays_regenerate_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **namespace_name** | **str**| The Namespace Name | 
 **relay_name** | **str**| The relay name | 
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
**200** | Successful |  -  |
**0** | Relay error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

