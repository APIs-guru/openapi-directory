# openapi_client.VirtualNetworkRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_network_rules_create_or_update**](VirtualNetworkRulesApi.md#virtual_network_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName} | 
[**virtual_network_rules_delete**](VirtualNetworkRulesApi.md#virtual_network_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName} | 
[**virtual_network_rules_get**](VirtualNetworkRulesApi.md#virtual_network_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName} | 
[**virtual_network_rules_list_by_account**](VirtualNetworkRulesApi.md#virtual_network_rules_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules | 
[**virtual_network_rules_update**](VirtualNetworkRulesApi.md#virtual_network_rules_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataLakeStore/accounts/{accountName}/virtualNetworkRules/{virtualNetworkRuleName} | 


# **virtual_network_rules_create_or_update**
> VirtualNetworkRule virtual_network_rules_create_or_update(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version, parameters)



Creates or updates the specified virtual network rule. During update, the virtual network rule with the specified name will be replaced with this new virtual network rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_or_update_virtual_network_rule_parameters import CreateOrUpdateVirtualNetworkRuleParameters
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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule to create or update.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.CreateOrUpdateVirtualNetworkRuleParameters() # CreateOrUpdateVirtualNetworkRuleParameters | Parameters supplied to create or update the virtual network rule.

    try:
        api_response = api_instance.virtual_network_rules_create_or_update(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version, parameters)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule to create or update. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**CreateOrUpdateVirtualNetworkRuleParameters**](CreateOrUpdateVirtualNetworkRuleParameters.md)| Parameters supplied to create or update the virtual network rule. | 

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
**200** | Successfully created or updated the specified virtual network rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_delete**
> virtual_network_rules_delete(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version)



Deletes the specified virtual network rule from the specified Data Lake Store account.

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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule to delete.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.virtual_network_rules_delete(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule to delete. | 
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
**200** | Successfully deleted the specified virtual network rule. |  -  |
**204** | The specified virtual network rule does not exist or was already deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_get**
> VirtualNetworkRule virtual_network_rules_get(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version)



Gets the specified Data Lake Store virtual network rule.

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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule to retrieve.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.virtual_network_rules_get(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule to retrieve. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Successfully retrieved the virtual network rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_list_by_account**
> VirtualNetworkRuleListResult virtual_network_rules_list_by_account(subscription_id, resource_group_name, account_name, api_version)



Lists the Data Lake Store virtual network rules within the specified Data Lake Store account.

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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.virtual_network_rules_list_by_account(subscription_id, resource_group_name, account_name, api_version)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **api_version** | **str**| Client Api Version. | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_network_rules_update**
> VirtualNetworkRule virtual_network_rules_update(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version, parameters=parameters)



Updates the specified virtual network rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.update_virtual_network_rule_parameters import UpdateVirtualNetworkRuleParameters
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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure resource group.
    account_name = 'account_name_example' # str | The name of the Data Lake Store account.
    virtual_network_rule_name = 'virtual_network_rule_name_example' # str | The name of the virtual network rule to update.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.UpdateVirtualNetworkRuleParameters() # UpdateVirtualNetworkRuleParameters | Parameters supplied to update the virtual network rule. (optional)

    try:
        api_response = api_instance.virtual_network_rules_update(subscription_id, resource_group_name, account_name, virtual_network_rule_name, api_version, parameters=parameters)
        print("The response of VirtualNetworkRulesApi->virtual_network_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworkRulesApi->virtual_network_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the Azure resource group. | 
 **account_name** | **str**| The name of the Data Lake Store account. | 
 **virtual_network_rule_name** | **str**| The name of the virtual network rule to update. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**UpdateVirtualNetworkRuleParameters**](UpdateVirtualNetworkRuleParameters.md)| Parameters supplied to update the virtual network rule. | [optional] 

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
**200** | Successfully updated the specified virtual network rule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

