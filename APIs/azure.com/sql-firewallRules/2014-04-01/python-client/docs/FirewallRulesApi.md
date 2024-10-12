# openapi_client.FirewallRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_rules_create_or_update**](FirewallRulesApi.md#firewall_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_delete**](FirewallRulesApi.md#firewall_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_get**](FirewallRulesApi.md#firewall_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_list_by_server**](FirewallRulesApi.md#firewall_rules_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules | 


# **firewall_rules_create_or_update**
> FirewallRule firewall_rules_create_or_update(api_version, subscription_id, resource_group_name, server_name, firewall_rule_name, parameters)



Creates or updates a firewall rule.

### Example


```python
import openapi_client
from openapi_client.models.firewall_rule import FirewallRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirewallRulesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule.
    parameters = openapi_client.FirewallRule() # FirewallRule | The required parameters for creating or updating a firewall rule.

    try:
        api_response = api_instance.firewall_rules_create_or_update(api_version, subscription_id, resource_group_name, server_name, firewall_rule_name, parameters)
        print("The response of FirewallRulesApi->firewall_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **firewall_rule_name** | **str**| The name of the firewall rule. | 
 **parameters** | [**FirewallRule**](FirewallRule.md)| The required parameters for creating or updating a firewall rule. | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_delete**
> firewall_rules_delete(api_version, subscription_id, resource_group_name, server_name, firewall_rule_name)



Deletes a firewall rule.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirewallRulesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule.

    try:
        api_instance.firewall_rules_delete(api_version, subscription_id, resource_group_name, server_name, firewall_rule_name)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **firewall_rule_name** | **str**| The name of the firewall rule. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_get**
> FirewallRule firewall_rules_get(api_version, subscription_id, resource_group_name, server_name, firewall_rule_name)



Gets a firewall rule.

### Example


```python
import openapi_client
from openapi_client.models.firewall_rule import FirewallRule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirewallRulesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule.

    try:
        api_response = api_instance.firewall_rules_get(api_version, subscription_id, resource_group_name, server_name, firewall_rule_name)
        print("The response of FirewallRulesApi->firewall_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **firewall_rule_name** | **str**| The name of the firewall rule. | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_list_by_server**
> FirewallRuleListResult firewall_rules_list_by_server(api_version, subscription_id, resource_group_name, server_name)



Returns a list of firewall rules.

### Example


```python
import openapi_client
from openapi_client.models.firewall_rule_list_result import FirewallRuleListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirewallRulesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.

    try:
        api_response = api_instance.firewall_rules_list_by_server(api_version, subscription_id, resource_group_name, server_name)
        print("The response of FirewallRulesApi->firewall_rules_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 

### Return type

[**FirewallRuleListResult**](FirewallRuleListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

