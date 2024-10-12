# openapi_client.RedisApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_rules_create_or_update**](RedisApi.md#firewall_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName} | 
[**firewall_rules_delete**](RedisApi.md#firewall_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName} | 
[**firewall_rules_get**](RedisApi.md#firewall_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules/{ruleName} | 
[**firewall_rules_list_by_redis_resource**](RedisApi.md#firewall_rules_list_by_redis_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{cacheName}/firewallRules | 
[**patch_schedules_create_or_update**](RedisApi.md#patch_schedules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/default | 
[**patch_schedules_delete**](RedisApi.md#patch_schedules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/default | 
[**patch_schedules_get**](RedisApi.md#patch_schedules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/patchSchedules/default | 
[**redis_create**](RedisApi.md#redis_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name} | 
[**redis_delete**](RedisApi.md#redis_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name} | 
[**redis_export_data**](RedisApi.md#redis_export_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/export | 
[**redis_force_reboot**](RedisApi.md#redis_force_reboot) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/forceReboot | 
[**redis_get**](RedisApi.md#redis_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name} | 
[**redis_import_data**](RedisApi.md#redis_import_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/import | 
[**redis_linked_server_create**](RedisApi.md#redis_linked_server_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName} | 
[**redis_linked_server_delete**](RedisApi.md#redis_linked_server_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName} | 
[**redis_linked_server_get**](RedisApi.md#redis_linked_server_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers/{linkedServerName} | 
[**redis_linked_server_list**](RedisApi.md#redis_linked_server_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/linkedServers | 
[**redis_list**](RedisApi.md#redis_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Cache/Redis/ | 
[**redis_list_by_resource_group**](RedisApi.md#redis_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/ | 
[**redis_list_keys**](RedisApi.md#redis_list_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/listKeys | 
[**redis_regenerate_key**](RedisApi.md#redis_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name}/regenerateKey | 
[**redis_update**](RedisApi.md#redis_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cache/Redis/{name} | 


# **firewall_rules_create_or_update**
> RedisFirewallRule firewall_rules_create_or_update(resource_group_name, cache_name, rule_name, api_version, subscription_id, parameters)



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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.
    rule_name = 'rule_name_example' # str | The name of the firewall rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisFirewallRule() # RedisFirewallRule | Parameters supplied to the create or update redis firewall rule operation.

    try:
        api_response = api_instance.firewall_rules_create_or_update(resource_group_name, cache_name, rule_name, api_version, subscription_id, parameters)
        print("The response of RedisApi->firewall_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->firewall_rules_create_or_update: %s\n" % e)
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

# **firewall_rules_delete**
> firewall_rules_delete(resource_group_name, cache_name, rule_name, api_version, subscription_id)



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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.
    rule_name = 'rule_name_example' # str | The name of the firewall rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.firewall_rules_delete(resource_group_name, cache_name, rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RedisApi->firewall_rules_delete: %s\n" % e)
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

# **firewall_rules_get**
> RedisFirewallRule firewall_rules_get(resource_group_name, cache_name, rule_name, api_version, subscription_id)



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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.
    rule_name = 'rule_name_example' # str | The name of the firewall rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.firewall_rules_get(resource_group_name, cache_name, rule_name, api_version, subscription_id)
        print("The response of RedisApi->firewall_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->firewall_rules_get: %s\n" % e)
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

# **firewall_rules_list_by_redis_resource**
> RedisFirewallRuleListResult firewall_rules_list_by_redis_resource(api_version, subscription_id, resource_group_name, cache_name)



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
    api_instance = openapi_client.RedisApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cache_name = 'cache_name_example' # str | The name of the Redis cache.

    try:
        api_response = api_instance.firewall_rules_list_by_redis_resource(api_version, subscription_id, resource_group_name, cache_name)
        print("The response of RedisApi->firewall_rules_list_by_redis_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->firewall_rules_list_by_redis_resource: %s\n" % e)
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

# **patch_schedules_create_or_update**
> RedisPatchSchedule patch_schedules_create_or_update(resource_group_name, name, api_version, subscription_id, parameters)



Create or replace the patching schedule for Redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_patch_schedule import RedisPatchSchedule
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisPatchSchedule() # RedisPatchSchedule | Parameters to set the patching schedule for Redis cache.

    try:
        api_response = api_instance.patch_schedules_create_or_update(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of RedisApi->patch_schedules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->patch_schedules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisPatchSchedule**](RedisPatchSchedule.md)| Parameters to set the patching schedule for Redis cache. | 

### Return type

[**RedisPatchSchedule**](RedisPatchSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The patch schedule was successfully updated. |  -  |
**201** | The patch schedule was successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_schedules_delete**
> patch_schedules_delete(resource_group_name, name, api_version, subscription_id)



Deletes the patching schedule of a redis cache (requires Premium SKU).

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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.patch_schedules_delete(resource_group_name, name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RedisApi->patch_schedules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
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
**200** | Success. |  -  |
**204** | Success. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_schedules_get**
> RedisPatchSchedule patch_schedules_get(resource_group_name, name, api_version, subscription_id)



Gets the patching schedule of a redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_patch_schedule import RedisPatchSchedule
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.patch_schedules_get(resource_group_name, name, api_version, subscription_id)
        print("The response of RedisApi->patch_schedules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->patch_schedules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisPatchSchedule**](RedisPatchSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response of get patch schedules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_create**
> RedisResource redis_create(resource_group_name, name, api_version, subscription_id, parameters)



Create or replace (overwrite/recreate, with potential downtime) an existing Redis cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_create_parameters import RedisCreateParameters
from openapi_client.models.redis_resource import RedisResource
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisCreateParameters() # RedisCreateParameters | Parameters supplied to the Create Redis operation.

    try:
        api_response = api_instance.redis_create(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of RedisApi->redis_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisCreateParameters**](RedisCreateParameters.md)| Parameters supplied to the Create Redis operation. | 

### Return type

[**RedisResource**](RedisResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The existing redis cache was successfully updated. Check provisioningStatus to see detailed status. |  -  |
**201** | The new redis cache was successfully created. Check provisioningStatus to see detailed status. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_delete**
> redis_delete(resource_group_name, name, api_version, subscription_id)



Deletes a Redis cache.

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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.redis_delete(resource_group_name, name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RedisApi->redis_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
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
**200** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_export_data**
> redis_export_data(resource_group_name, name, api_version, subscription_id, parameters)



Export data from the redis cache to blobs in a container.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.export_rdb_parameters import ExportRDBParameters
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ExportRDBParameters() # ExportRDBParameters | Parameters for Redis export operation.

    try:
        api_instance.redis_export_data(resource_group_name, name, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling RedisApi->redis_export_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ExportRDBParameters**](ExportRDBParameters.md)| Parameters for Redis export operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Export operation succeeded. |  -  |
**202** | Export operation successfully enqueued; follow the Location header to poll for final outcome. |  -  |
**204** | Export operation succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_force_reboot**
> RedisForceRebootResponse redis_force_reboot(resource_group_name, name, api_version, subscription_id, parameters)



Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_force_reboot_response import RedisForceRebootResponse
from openapi_client.models.redis_reboot_parameters import RedisRebootParameters
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisRebootParameters() # RedisRebootParameters | Specifies which Redis node(s) to reboot.

    try:
        api_response = api_instance.redis_force_reboot(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of RedisApi->redis_force_reboot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_force_reboot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisRebootParameters**](RedisRebootParameters.md)| Specifies which Redis node(s) to reboot. | 

### Return type

[**RedisForceRebootResponse**](RedisForceRebootResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reboot operation successfully enqueued |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_get**
> RedisResource redis_get(resource_group_name, name, api_version, subscription_id)



Gets a Redis cache (resource description).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_resource import RedisResource
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.redis_get(resource_group_name, name, api_version, subscription_id)
        print("The response of RedisApi->redis_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisResource**](RedisResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_import_data**
> redis_import_data(resource_group_name, name, api_version, subscription_id, parameters)



Import data into Redis cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.import_rdb_parameters import ImportRDBParameters
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ImportRDBParameters() # ImportRDBParameters | Parameters for Redis import operation.

    try:
        api_instance.redis_import_data(resource_group_name, name, api_version, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling RedisApi->redis_import_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ImportRDBParameters**](ImportRDBParameters.md)| Parameters for Redis import operation. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Import operation succeeded. |  -  |
**202** | Import operation successfully enqueued; follow the Location header to poll for final outcome. |  -  |
**204** | Import operation succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_linked_server_create**
> RedisLinkedServerWithProperties redis_linked_server_create(resource_group_name, name, linked_server_name, api_version, subscription_id, parameters)



Adds a linked server to the Redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_linked_server_create_parameters import RedisLinkedServerCreateParameters
from openapi_client.models.redis_linked_server_with_properties import RedisLinkedServerWithProperties
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    linked_server_name = 'linked_server_name_example' # str | The name of the linked server that is being added to the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisLinkedServerCreateParameters() # RedisLinkedServerCreateParameters | Parameters supplied to the Create Linked server operation.

    try:
        api_response = api_instance.redis_linked_server_create(resource_group_name, name, linked_server_name, api_version, subscription_id, parameters)
        print("The response of RedisApi->redis_linked_server_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_linked_server_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **linked_server_name** | **str**| The name of the linked server that is being added to the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisLinkedServerCreateParameters**](RedisLinkedServerCreateParameters.md)| Parameters supplied to the Create Linked server operation. | 

### Return type

[**RedisLinkedServerWithProperties**](RedisLinkedServerWithProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The linked server was successfully added. |  -  |
**201** | The linked server was successfully added. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_linked_server_delete**
> redis_linked_server_delete(resource_group_name, name, linked_server_name, api_version, subscription_id)



Deletes the linked server from a redis cache (requires Premium SKU).

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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    linked_server_name = 'linked_server_name_example' # str | The name of the linked server that is being added to the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.redis_linked_server_delete(resource_group_name, name, linked_server_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling RedisApi->redis_linked_server_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
 **linked_server_name** | **str**| The name of the linked server that is being added to the Redis cache. | 
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
**200** | Linked server was successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_linked_server_get**
> RedisLinkedServerWithProperties redis_linked_server_get(resource_group_name, name, linked_server_name, api_version, subscription_id)



Gets the detailed information about a linked server of a redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_linked_server_with_properties import RedisLinkedServerWithProperties
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    linked_server_name = 'linked_server_name_example' # str | The name of the linked server.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.redis_linked_server_get(resource_group_name, name, linked_server_name, api_version, subscription_id)
        print("The response of RedisApi->redis_linked_server_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_linked_server_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
 **linked_server_name** | **str**| The name of the linked server. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisLinkedServerWithProperties**](RedisLinkedServerWithProperties.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response of get linked server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_linked_server_list**
> RedisLinkedServerWithPropertiesList redis_linked_server_list(resource_group_name, name, api_version, subscription_id)



Gets the list of linked servers associated with this redis cache (requires Premium SKU).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_linked_server_with_properties_list import RedisLinkedServerWithPropertiesList
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.redis_linked_server_list(resource_group_name, name, api_version, subscription_id)
        print("The response of RedisApi->redis_linked_server_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_linked_server_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisLinkedServerWithPropertiesList**](RedisLinkedServerWithPropertiesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response of get linked servers. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_list**
> RedisListResult redis_list(api_version, subscription_id)



Gets all Redis caches in the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_list_result import RedisListResult
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
    api_instance = openapi_client.RedisApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.redis_list(api_version, subscription_id)
        print("The response of RedisApi->redis_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisListResult**](RedisListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_list_by_resource_group**
> RedisListResult redis_list_by_resource_group(resource_group_name, api_version, subscription_id)



Lists all Redis caches in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_list_result import RedisListResult
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.redis_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of RedisApi->redis_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisListResult**](RedisListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_list_keys**
> RedisAccessKeys redis_list_keys(resource_group_name, name, api_version, subscription_id)



Retrieve a Redis cache's access keys. This operation requires write permission to the cache resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_access_keys import RedisAccessKeys
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.redis_list_keys(resource_group_name, name, api_version, subscription_id)
        print("The response of RedisApi->redis_list_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_list_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**RedisAccessKeys**](RedisAccessKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists the keys for the specified Redis cache. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_regenerate_key**
> RedisAccessKeys redis_regenerate_key(resource_group_name, name, api_version, subscription_id, parameters)



Regenerate Redis cache's access keys. This operation requires write permission to the cache resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_access_keys import RedisAccessKeys
from openapi_client.models.redis_regenerate_key_parameters import RedisRegenerateKeyParameters
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisRegenerateKeyParameters() # RedisRegenerateKeyParameters | Specifies which key to regenerate.

    try:
        api_response = api_instance.redis_regenerate_key(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of RedisApi->redis_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisRegenerateKeyParameters**](RedisRegenerateKeyParameters.md)| Specifies which key to regenerate. | 

### Return type

[**RedisAccessKeys**](RedisAccessKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists the regenerated keys for Redis Cache |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redis_update**
> RedisResource redis_update(resource_group_name, name, api_version, subscription_id, parameters)



Update an existing Redis cache.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.redis_resource import RedisResource
from openapi_client.models.redis_update_parameters import RedisUpdateParameters
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
    api_instance = openapi_client.RedisApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the Redis cache.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RedisUpdateParameters() # RedisUpdateParameters | Parameters supplied to the Update Redis operation.

    try:
        api_response = api_instance.redis_update(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of RedisApi->redis_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RedisApi->redis_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the Redis cache. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RedisUpdateParameters**](RedisUpdateParameters.md)| Parameters supplied to the Update Redis operation. | 

### Return type

[**RedisResource**](RedisResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

