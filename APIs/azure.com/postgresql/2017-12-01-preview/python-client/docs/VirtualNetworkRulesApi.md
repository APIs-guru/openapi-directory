# openapi_client.VirtualNetworkRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_rules_create_or_update**](VirtualNetworkRulesApi.md#virtual_network_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName} | 
[**virtual_network_rules_delete**](VirtualNetworkRulesApi.md#virtual_network_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName} | 
[**virtual_network_rules_get**](VirtualNetworkRulesApi.md#virtual_network_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName} | 
[**virtual_network_rules_list_by_server**](VirtualNetworkRulesApi.md#virtual_network_rules_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/virtualNetworkRules | 


# **virtual_network_rules_create_or_update**
> VirtualNetworkRule virtual_network_rules_create_or_update(resource_group_name, server_name, subscription_id, api_version, virtual_network_rule_name, parameters)



Creates or updates an existing virtual network rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_rule import VirtualNetworkRule
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
    api_instance = openapi_client.VirtualNetworkRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule.
    parameters = openapi_client.VirtualNetworkRule() # VirtualNetworkRule | The requested virtual Network Rule Resource state.

    try:
        api_response = api_instance.virtual_network_rules_create_or_update(resource_group_name, server_name, subscription_id, api_version, virtual_network_rule_name, parameters)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule. | 
 **parameters** | [**VirtualNetworkRule**](VirtualNetworkRule.md)| The requested virtual Network Rule Resource state. | 

### Return type

[**VirtualNetworkRule**](VirtualNetworkRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated a virtual network rule. |  -  |
**201** | Successfully created a virtual network rule. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceId - Invalid resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 NullVirtualNetworkRequest - Virtual Network Request is Null   * 400 NullVirtualNetworkRequestParameters - Virtual Network Request Parameters are Null   * 400 NullVirtualNetworkSubnetId - The Virtual Network Subnet Id is null   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 VirtualNetworkRuleNotEnabled - Azure SQL Server Virtual Network Rule feature is not enabled   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_delete**
> virtual_network_rules_delete(resource_group_name, server_name, virtual_network_rule_name, subscription_id, api_version)



Deletes the virtual network rule with the given name.

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
    api_instance = openapi_client.VirtualNetworkRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.virtual_network_rules_delete(resource_group_name, server_name, virtual_network_rule_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

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
**200** | Successfully deleted the virtual network rule. |  -  |
**202** | Accepted |  -  |
**204** | The specified virtual network rule does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceId - Invalid resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 NullVirtualNetworkRequest - Virtual Network Request is Null   * 400 NullVirtualNetworkRequestParameters - Virtual Network Request Parameters are Null   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 OperationIdNotFound - The operation with Id does not exist.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_get**
> VirtualNetworkRule virtual_network_rules_get(resource_group_name, server_name, subscription_id, api_version, virtual_network_rule_name)



Gets a virtual network rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_rule import VirtualNetworkRule
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
    api_instance = openapi_client.VirtualNetworkRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule.

    try:
        api_response = api_instance.virtual_network_rules_get(resource_group_name, server_name, subscription_id, api_version, virtual_network_rule_name)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule. | 

### Return type

[**VirtualNetworkRule**](VirtualNetworkRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved a specified virtual network rule. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_list_by_server**
> VirtualNetworkRuleListResult virtual_network_rules_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of virtual network rules in a server.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_rule_list_result import VirtualNetworkRuleListResult
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
    api_instance = openapi_client.VirtualNetworkRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.virtual_network_rules_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**VirtualNetworkRuleListResult**](VirtualNetworkRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of virtual network rules. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 ResourceNotFound - The requested resource was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

