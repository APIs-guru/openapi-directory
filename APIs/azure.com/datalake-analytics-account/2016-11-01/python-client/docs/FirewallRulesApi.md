# openapi_client.FirewallRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**firewall_rules_create_or_update**](FirewallRulesApi.md#firewall_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_delete**](FirewallRulesApi.md#firewall_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_get**](FirewallRulesApi.md#firewall_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName} | 
[**firewall_rules_list_by_account**](FirewallRulesApi.md#firewall_rules_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules | 
[**firewall_rules_update**](FirewallRulesApi.md#firewall_rules_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeAnalytics/accounts/{accountName}/firewallRules/{firewallRuleName} | 


# **firewall_rules_create_or_update**
> FirewallRule firewall_rules_create_or_update(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version, parameters)



Creates or updates the specified firewall rule. During update, the firewall rule with the specified name will be replaced with this new firewall rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_or_update_firewall_rule_parameters import CreateOrUpdateFirewallRuleParameters
from openapi_client.models.firewall_rule import FirewallRule
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
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule to create or update.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CreateOrUpdateFirewallRuleParameters() # CreateOrUpdateFirewallRuleParameters | Parameters supplied to create or update the firewall rule.

    try:
        api_response = api_instance.firewall_rules_create_or_update(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version, parameters)
        print("The response of FirewallRulesApi->firewall_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **firewall_rule_name** | **str**| The name of the firewall rule to create or update. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CreateOrUpdateFirewallRuleParameters**](CreateOrUpdateFirewallRuleParameters.md)| Parameters supplied to create or update the firewall rule. | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the specified firewall rule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_delete**
> firewall_rules_delete(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version)



Deletes the specified firewall rule from the specified Data Lake Analytics account

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
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule to delete.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.firewall_rules_delete(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **firewall_rule_name** | **str**| The name of the firewall rule to delete. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Successfully deleted the specified firewall rule |  -  |
**204** | The specified firewall rule does not exist or was already deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_get**
> FirewallRule firewall_rules_get(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version)



Gets the specified Data Lake Analytics firewall rule.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirewallRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.firewall_rules_get(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version)
        print("The response of FirewallRulesApi->firewall_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **firewall_rule_name** | **str**| The name of the firewall rule to retrieve. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified firewall rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_list_by_account**
> FirewallRuleListResult firewall_rules_list_by_account(subscription_id, resource_group_name, account_name, api_version)



Lists the Data Lake Analytics firewall rules within the specified Data Lake Analytics account.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FirewallRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.firewall_rules_list_by_account(subscription_id, resource_group_name, account_name, api_version)
        print("The response of FirewallRulesApi->firewall_rules_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**FirewallRuleListResult**](FirewallRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully listed the firewall rules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **firewall_rules_update**
> FirewallRule firewall_rules_update(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version, parameters=parameters)



Updates the specified firewall rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.firewall_rule import FirewallRule
from openapi_client.models.update_firewall_rule_parameters import UpdateFirewallRuleParameters
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
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Analytics account.
    firewall_rule_name = 'firewall_rule_name_example' # str | The name of the firewall rule to update.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateFirewallRuleParameters() # UpdateFirewallRuleParameters | Parameters supplied to update the firewall rule. (optional)

    try:
        api_response = api_instance.firewall_rules_update(subscription_id, resource_group_name, account_name, firewall_rule_name, api_version, parameters=parameters)
        print("The response of FirewallRulesApi->firewall_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallRulesApi->firewall_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Analytics account. | 
 **firewall_rule_name** | **str**| The name of the firewall rule to update. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateFirewallRuleParameters**](UpdateFirewallRuleParameters.md)| Parameters supplied to update the firewall rule. | [optional] 

### Return type

[**FirewallRule**](FirewallRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the specified firewall rule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

