# openapi_client.FirewallPolicyRuleGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_policy_rule_groups_create_or_update**](FirewallPolicyRuleGroupsApi.md#firewall_policy_rule_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName} | 
[**firewall_policy_rule_groups_delete**](FirewallPolicyRuleGroupsApi.md#firewall_policy_rule_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName} | 
[**firewall_policy_rule_groups_get**](FirewallPolicyRuleGroupsApi.md#firewall_policy_rule_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName} | 
[**firewall_policy_rule_groups_list**](FirewallPolicyRuleGroupsApi.md#firewall_policy_rule_groups_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups | 


# **firewall_policy_rule_groups_create_or_update**
> FirewallPolicyRuleGroup firewall_policy_rule_groups_create_or_update(resource_group_name, firewall_policy_name, rule_group_name, api_version, subscription_id, parameters)



Creates or updates the specified FirewallPolicyRuleGroup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy_rule_group import FirewallPolicyRuleGroup
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
    api_instance = openapi_client.FirewallPolicyRuleGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    rule_group_name = 'rule_group_name_example' # str | The name of the FirewallPolicyRuleGroup.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FirewallPolicyRuleGroup() # FirewallPolicyRuleGroup | Parameters supplied to the create or update FirewallPolicyRuleGroup operation.

    try:
        api_response = api_instance.firewall_policy_rule_groups_create_or_update(resource_group_name, firewall_policy_name, rule_group_name, api_version, subscription_id, parameters)
        print("The response of FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
 **rule_group_name** | **str**| The name of the FirewallPolicyRuleGroup. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FirewallPolicyRuleGroup**](FirewallPolicyRuleGroup.md)| Parameters supplied to the create or update FirewallPolicyRuleGroup operation. | 

### Return type

[**FirewallPolicyRuleGroup**](FirewallPolicyRuleGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting FirewallPolicyRuleGroup resource. |  -  |
**201** | Request received successfully. The operation returns the resulting FirewallPolicyRuleGroup resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policy_rule_groups_delete**
> firewall_policy_rule_groups_delete(resource_group_name, firewall_policy_name, rule_group_name, api_version, subscription_id)



Deletes the specified FirewallPolicyRuleGroup.

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
    api_instance = openapi_client.FirewallPolicyRuleGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    rule_group_name = 'rule_group_name_example' # str | The name of the FirewallPolicyRuleGroup.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.firewall_policy_rule_groups_delete(resource_group_name, firewall_policy_name, rule_group_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
 **rule_group_name** | **str**| The name of the FirewallPolicyRuleGroup. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Delete successful. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Request successful. Resource with the specified name does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policy_rule_groups_get**
> FirewallPolicyRuleGroup firewall_policy_rule_groups_get(resource_group_name, firewall_policy_name, rule_group_name, api_version, subscription_id)



Gets the specified FirewallPolicyRuleGroup.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy_rule_group import FirewallPolicyRuleGroup
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
    api_instance = openapi_client.FirewallPolicyRuleGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    rule_group_name = 'rule_group_name_example' # str | The name of the FirewallPolicyRuleGroup.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.firewall_policy_rule_groups_get(resource_group_name, firewall_policy_name, rule_group_name, api_version, subscription_id)
        print("The response of FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
 **rule_group_name** | **str**| The name of the FirewallPolicyRuleGroup. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FirewallPolicyRuleGroup**](FirewallPolicyRuleGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a FirewallPolicyRuleGroup resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_policy_rule_groups_list**
> FirewallPolicyRuleGroupListResult firewall_policy_rule_groups_list(resource_group_name, firewall_policy_name, api_version, subscription_id)



Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_policy_rule_group_list_result import FirewallPolicyRuleGroupListResult
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
    api_instance = openapi_client.FirewallPolicyRuleGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    firewall_policy_name = 'firewall_policy_name_example' # str | The name of the Firewall Policy.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.firewall_policy_rule_groups_list(resource_group_name, firewall_policy_name, api_version, subscription_id)
        print("The response of FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallPolicyRuleGroupsApi->firewall_policy_rule_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **firewall_policy_name** | **str**| The name of the Firewall Policy. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FirewallPolicyRuleGroupListResult**](FirewallPolicyRuleGroupListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The operation returns a list of FirewallPolicyRuleGroup resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

