# openapi_client.ScheduledQueryRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scheduled_query_rules_create_or_update**](ScheduledQueryRulesApi.md#scheduled_query_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName} | 
[**scheduled_query_rules_delete**](ScheduledQueryRulesApi.md#scheduled_query_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName} | 
[**scheduled_query_rules_get**](ScheduledQueryRulesApi.md#scheduled_query_rules_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName} | 
[**scheduled_query_rules_list_by_resource_group**](ScheduledQueryRulesApi.md#scheduled_query_rules_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules | 
[**scheduled_query_rules_list_by_subscription**](ScheduledQueryRulesApi.md#scheduled_query_rules_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/scheduledQueryRules | 
[**scheduled_query_rules_update**](ScheduledQueryRulesApi.md#scheduled_query_rules_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/scheduledQueryRules/{ruleName} | 


# **scheduled_query_rules_create_or_update**
> LogSearchRuleResource scheduled_query_rules_create_or_update(subscription_id, resource_group_name, rule_name, api_version, parameters)



Creates or updates an log search rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_search_rule_resource import LogSearchRuleResource
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
    api_instance = openapi_client.ScheduledQueryRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.LogSearchRuleResource() # LogSearchRuleResource | The parameters of the rule to create or update.

    try:
        api_response = api_instance.scheduled_query_rules_create_or_update(subscription_id, resource_group_name, rule_name, api_version, parameters)
        print("The response of ScheduledQueryRulesApi->scheduled_query_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledQueryRulesApi->scheduled_query_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**LogSearchRuleResource**](LogSearchRuleResource.md)| The parameters of the rule to create or update. | 

### Return type

[**LogSearchRuleResource**](LogSearchRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to update an Log Search rule |  -  |
**201** | Created alert rule |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scheduled_query_rules_delete**
> scheduled_query_rules_delete(resource_group_name, rule_name, api_version, subscription_id)



Deletes a Log Search rule

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
    api_instance = openapi_client.ScheduledQueryRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_instance.scheduled_query_rules_delete(resource_group_name, rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ScheduledQueryRulesApi->scheduled_query_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

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
**200** | Successful request to delete a  Log Search rule |  -  |
**204** | No Content. Resource not found |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scheduled_query_rules_get**
> LogSearchRuleResource scheduled_query_rules_get(resource_group_name, rule_name, api_version, subscription_id)



Gets an Log Search rule

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_search_rule_resource import LogSearchRuleResource
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
    api_instance = openapi_client.ScheduledQueryRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.scheduled_query_rules_get(resource_group_name, rule_name, api_version, subscription_id)
        print("The response of ScheduledQueryRulesApi->scheduled_query_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledQueryRulesApi->scheduled_query_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**LogSearchRuleResource**](LogSearchRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get a Log Search rule |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scheduled_query_rules_list_by_resource_group**
> LogSearchRuleResourceCollection scheduled_query_rules_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter)



List the Log Search rules within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_search_rule_resource_collection import LogSearchRuleResourceCollection
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
    api_instance = openapi_client.ScheduledQueryRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx (optional)

    try:
        api_response = api_instance.scheduled_query_rules_list_by_resource_group(resource_group_name, api_version, subscription_id, filter=filter)
        print("The response of ScheduledQueryRulesApi->scheduled_query_rules_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledQueryRulesApi->scheduled_query_rules_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx | [optional] 

### Return type

[**LogSearchRuleResourceCollection**](LogSearchRuleResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of alert rules |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scheduled_query_rules_list_by_subscription**
> LogSearchRuleResourceCollection scheduled_query_rules_list_by_subscription(api_version, subscription_id, filter=filter)



List the Log Search rules within a subscription group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_search_rule_resource_collection import LogSearchRuleResourceCollection
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
    api_instance = openapi_client.ScheduledQueryRulesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx (optional)

    try:
        api_response = api_instance.scheduled_query_rules_list_by_subscription(api_version, subscription_id, filter=filter)
        print("The response of ScheduledQueryRulesApi->scheduled_query_rules_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledQueryRulesApi->scheduled_query_rules_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://msdn.microsoft.com/en-us/library/azure/dn931934.aspx | [optional] 

### Return type

[**LogSearchRuleResourceCollection**](LogSearchRuleResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of alert rules |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scheduled_query_rules_update**
> LogSearchRuleResource scheduled_query_rules_update(subscription_id, resource_group_name, rule_name, api_version, parameters)



Update log search Rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_search_rule_resource import LogSearchRuleResource
from openapi_client.models.log_search_rule_resource_patch import LogSearchRuleResourcePatch
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
    api_instance = openapi_client.ScheduledQueryRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.LogSearchRuleResourcePatch() # LogSearchRuleResourcePatch | The parameters of the rule to update.

    try:
        api_response = api_instance.scheduled_query_rules_update(subscription_id, resource_group_name, rule_name, api_version, parameters)
        print("The response of ScheduledQueryRulesApi->scheduled_query_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScheduledQueryRulesApi->scheduled_query_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**LogSearchRuleResourcePatch**](LogSearchRuleResourcePatch.md)| The parameters of the rule to update. | 

### Return type

[**LogSearchRuleResource**](LogSearchRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to update an Log Search rule |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

