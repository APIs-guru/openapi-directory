# openapi_client.FirewallRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_rules_create_or_update_0**](FirewallRulesApi.md#firewall_rules_create_or_update_0) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName} | 
[**firewall_rules_delete_0**](FirewallRulesApi.md#firewall_rules_delete_0) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName} | 
[**firewall_rules_get_0**](FirewallRulesApi.md#firewall_rules_get_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName} | 
[**firewall_rules_list_by_redis_resource_0**](FirewallRulesApi.md#firewall_rules_list_by_redis_resource_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules | 


# **firewall_rules_create_or_update_0**
> RedisFirewallRule firewall_rules_create_or_update_0(resource_group_name, cache_name, rule_name, api_version, subscription_id, parameters)



Create or update a redis cache firewall rule

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_firewall_rule import RedisFirewallRule
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
    api_instance = openapi_client.FirewallRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.
    rule_name = 'rule_name_example' # str | The name of the firewall rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisFirewallRule() # RedisFirewallRule | Parameters supplied to the create or update redis firewall rule operation.

    try:
        api_response = api_instance.firewall_rules_create_or_update_0(resource_group_name, cache_name, rule_name, api_version, subscription_id, parameters)
        print("The response of FirewallRulesApi->firewall_rules_create_or_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_create_or_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cache_name** | **str**| The name of the Redis cache. | 
 **rule_name** | **str**| The name of the firewall rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisFirewallRule**](RedisFirewallRule.md)| Parameters supplied to the create or update redis firewall rule operation. | 

### Return type

[**RedisFirewallRule**](RedisFirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource was successfully updated |  -  |
**201** | Resource was successfully created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_delete_0**
> firewall_rules_delete_0(resource_group_name, cache_name, rule_name, api_version, subscription_id)



Deletes a single firewall rule in a specified redis cache.

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
    api_instance = openapi_client.FirewallRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.
    rule_name = 'rule_name_example' # str | The name of the firewall rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.firewall_rules_delete_0(resource_group_name, cache_name, rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cache_name** | **str**| The name of the Redis cache. | 
 **rule_name** | **str**| The name of the firewall rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Successfully deleted the rule |  -  |
**204** | Successfully deleted the rule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_get_0**
> RedisFirewallRule firewall_rules_get_0(resource_group_name, cache_name, rule_name, api_version, subscription_id)



Gets a single firewall rule in a specified redis cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_firewall_rule import RedisFirewallRule
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
    api_instance = openapi_client.FirewallRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.
    rule_name = 'rule_name_example' # str | The name of the firewall rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.firewall_rules_get_0(resource_group_name, cache_name, rule_name, api_version, subscription_id)
        print("The response of FirewallRulesApi->firewall_rules_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **cache_name** | **str**| The name of the Redis cache. | 
 **rule_name** | **str**| The name of the firewall rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisFirewallRule**](RedisFirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully found the rule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_list_by_redis_resource_0**
> RedisFirewallRuleListResult firewall_rules_list_by_redis_resource_0(api_version, subscription_id, resource_group_name, cache_name)



Gets all firewall rules in the specified redis cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_firewall_rule_list_result import RedisFirewallRuleListResult
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
    api_instance = openapi_client.FirewallRulesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.

    try:
        api_response = api_instance.firewall_rules_list_by_redis_resource_0(api_version, subscription_id, resource_group_name, cache_name)
        print("The response of FirewallRulesApi->firewall_rules_list_by_redis_resource_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_list_by_redis_resource_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cache_name** | **str**| The name of the Redis cache. | 

### Return type

[**RedisFirewallRuleListResult**](RedisFirewallRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully got the current rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

