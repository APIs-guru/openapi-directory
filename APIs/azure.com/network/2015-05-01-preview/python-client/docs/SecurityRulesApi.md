# openapi_client.SecurityRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**security_rules_create_or_update**](SecurityRulesApi.md#security_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules/{securityRuleName} | 
[**security_rules_delete**](SecurityRulesApi.md#security_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules/{securityRuleName} | 
[**security_rules_get**](SecurityRulesApi.md#security_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules/{securityRuleName} | 
[**security_rules_list**](SecurityRulesApi.md#security_rules_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules | 


# **security_rules_create_or_update**
> SecurityRule security_rules_create_or_update(resource_group_name, network_security_group_name, security_rule_name, api_version, subscription_id, security_rule_parameters)



The Put network security rule operation creates/updates a security rule in the specified network security group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_rule import SecurityRule
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
    api_instance = openapi_client.SecurityRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    security_rule_name = 'security_rule_name_example' # str | The name of the security rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    security_rule_parameters = openapi_client.SecurityRule() # SecurityRule | Parameters supplied to the create/update network security rule operation

    try:
        api_response = api_instance.security_rules_create_or_update(resource_group_name, network_security_group_name, security_rule_name, api_version, subscription_id, security_rule_parameters)
        print("The response of SecurityRulesApi->security_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityRulesApi->security_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **security_rule_name** | **str**| The name of the security rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **security_rule_parameters** | [**SecurityRule**](SecurityRule.md)| Parameters supplied to the create/update network security rule operation | 

### Return type

[**SecurityRule**](SecurityRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_rules_delete**
> security_rules_delete(resource_group_name, network_security_group_name, security_rule_name, api_version, subscription_id)



The delete network security rule operation deletes the specified network security rule.

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
    api_instance = openapi_client.SecurityRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    security_rule_name = 'security_rule_name_example' # str | The name of the security rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.security_rules_delete(resource_group_name, network_security_group_name, security_rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling SecurityRulesApi->security_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **security_rule_name** | **str**| The name of the security rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**202** |  |  -  |
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_rules_get**
> SecurityRule security_rules_get(resource_group_name, network_security_group_name, security_rule_name, api_version, subscription_id)



The Get NetworkSecurityRule operation retrieves information about the specified network security rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_rule import SecurityRule
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
    api_instance = openapi_client.SecurityRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    security_rule_name = 'security_rule_name_example' # str | The name of the security rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.security_rules_get(resource_group_name, network_security_group_name, security_rule_name, api_version, subscription_id)
        print("The response of SecurityRulesApi->security_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityRulesApi->security_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **security_rule_name** | **str**| The name of the security rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SecurityRule**](SecurityRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **security_rules_list**
> SecurityRuleListResult security_rules_list(resource_group_name, network_security_group_name, api_version, subscription_id)



The List network security rule operation retrieves all the security rules in a network security group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_rule_list_result import SecurityRuleListResult
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
    api_instance = openapi_client.SecurityRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_security_group_name = 'network_security_group_name_example' # str | The name of the network security group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.security_rules_list(resource_group_name, network_security_group_name, api_version, subscription_id)
        print("The response of SecurityRulesApi->security_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityRulesApi->security_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_security_group_name** | **str**| The name of the network security group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SecurityRuleListResult**](SecurityRuleListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

