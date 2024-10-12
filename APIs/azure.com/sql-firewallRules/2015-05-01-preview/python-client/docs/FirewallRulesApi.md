# openapi_client.FirewallRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_rules_create_or_update**](FirewallRulesApi.md#firewall_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_delete**](FirewallRulesApi.md#firewall_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_get**](FirewallRulesApi.md#firewall_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_list_by_server**](FirewallRulesApi.md#firewall_rules_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules | 
[**firewall_rules_replace**](FirewallRulesApi.md#firewall_rules_replace) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules | 


# **firewall_rules_create_or_update**
> FirewallRule firewall_rules_create_or_update(resource_group_name, server_name, firewall_rule_name, subscription_id, api_version, parameters)



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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.FirewallRule() # FirewallRule | The required parameters for creating or updating a firewall rule.

    try:
        api_response = api_instance.firewall_rules_create_or_update(resource_group_name, server_name, firewall_rule_name, subscription_id, api_version, parameters)
        print("The response of FirewallRulesApi->firewall_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **firewall_rule_name** | **str**| The name of the firewall rule. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
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
**200** | Successfully updated the firewall rule. |  -  |
**201** | Successfully created the firewall rule. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceId - Invalid resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidServerFirewallRuleResourceRequest - The server firewall rule resource request is invalid.   * 400 InvalidServerFirewallRuleResourceParameters - The server firewall rule resource parameter is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_delete**
> firewall_rules_delete(resource_group_name, server_name, firewall_rule_name, subscription_id, api_version)



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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.firewall_rules_delete(resource_group_name, server_name, firewall_rule_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **firewall_rule_name** | **str**| The name of the firewall rule. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully deleted the firewall rule. |  -  |
**204** | The specified firewall rule does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceId - Invalid resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidServerFirewallRuleResourceRequest - The server firewall rule resource request is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_get**
> FirewallRule firewall_rules_get(resource_group_name, server_name, firewall_rule_name, subscription_id, api_version)



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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.firewall_rules_get(resource_group_name, server_name, firewall_rule_name, subscription_id, api_version)
        print("The response of FirewallRulesApi->firewall_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **firewall_rule_name** | **str**| The name of the firewall rule. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully retrieved the specified firewall rule. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_list_by_server**
> FirewallRuleListResult firewall_rules_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of firewall rules.

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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.firewall_rules_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of FirewallRulesApi->firewall_rules_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully retrieved the list of firewall rules. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_replace**
> FirewallRule firewall_rules_replace(resource_group_name, server_name, subscription_id, api_version, parameters)



Replaces all firewall rules on the server.

### Example


```python
import openapi_client
from openapi_client.models.firewall_rule import FirewallRule
from openapi_client.models.firewall_rule_list import FirewallRuleList
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
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.FirewallRuleList() # FirewallRuleList | 

    try:
        api_response = api_instance.firewall_rules_replace(resource_group_name, server_name, subscription_id, api_version, parameters)
        print("The response of FirewallRulesApi->firewall_rules_replace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**FirewallRuleList**](FirewallRuleList.md)|  | 

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
**200** | Successfully updated the firewall rules. |  -  |
**202** | Creating or updating the Server Firewall Rules is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceId - Invalid resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidServerFirewallRuleResourceRequest - The server firewall rule resource request is invalid.   * 400 InvalidServerFirewallRuleResourceParameters - The server firewall rule resource parameter is invalid.   * 400 FirewallRuleNotIPv4Address - The provided firewall rule address is not IPv4   * 400 FirewallRuleInvalidRange - The specified firewall rule range is invalid.   * 400 FirewallRuleNameTooLong - The provided firewall rule name is too long   * 400 FirewallRuleNameEmpty - The provided firewall rule name is empty   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

