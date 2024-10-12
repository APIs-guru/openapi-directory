# openapi_client.AlertRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alert_rules_create_or_update**](AlertRulesApi.md#alert_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName} | 
[**alert_rules_delete**](AlertRulesApi.md#alert_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName} | 
[**alert_rules_get**](AlertRulesApi.md#alert_rules_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName} | 
[**alert_rules_list_by_resource_group**](AlertRulesApi.md#alert_rules_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules | 
[**alert_rules_list_by_subscription**](AlertRulesApi.md#alert_rules_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/alertrules | 


# **alert_rules_create_or_update**
> AlertRuleResource alert_rules_create_or_update(resource_group_name, rule_name, api_version, subscription_id, parameters)



Creates or updates an alert rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule_resource import AlertRuleResource
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
    api_instance = openapi_client.AlertRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    parameters = openapi_client.AlertRuleResource() # AlertRuleResource | The parameters of the rule to create or update.

    try:
        api_response = api_instance.alert_rules_create_or_update(resource_group_name, rule_name, api_version, subscription_id, parameters)
        print("The response of AlertRulesApi->alert_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->alert_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **parameters** | [**AlertRuleResource**](AlertRuleResource.md)| The parameters of the rule to create or update. | 

### Return type

[**AlertRuleResource**](AlertRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to update an alert rule |  -  |
**201** | Created alert rule |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alert_rules_delete**
> alert_rules_delete(resource_group_name, rule_name, api_version, subscription_id)



Deletes an alert rule

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
    api_instance = openapi_client.AlertRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_instance.alert_rules_delete(resource_group_name, rule_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling AlertRulesApi->alert_rules_delete: %s\n" % e)
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
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to delete an alert rule |  -  |
**204** | No content: the request was successful, but the response is empty |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alert_rules_get**
> AlertRuleResource alert_rules_get(resource_group_name, rule_name, api_version, subscription_id)



Gets an alert rule

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule_resource import AlertRuleResource
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
    api_instance = openapi_client.AlertRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.alert_rules_get(resource_group_name, rule_name, api_version, subscription_id)
        print("The response of AlertRulesApi->alert_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->alert_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**AlertRuleResource**](AlertRuleResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get an alert rule |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alert_rules_list_by_resource_group**
> AlertRuleResourceCollection alert_rules_list_by_resource_group(resource_group_name, api_version, subscription_id)



List the alert rules within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule_resource_collection import AlertRuleResourceCollection
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
    api_instance = openapi_client.AlertRulesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.alert_rules_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of AlertRulesApi->alert_rules_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->alert_rules_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**AlertRuleResourceCollection**](AlertRuleResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of alert rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alert_rules_list_by_subscription**
> AlertRuleResourceCollection alert_rules_list_by_subscription(api_version, subscription_id)



List the alert rules within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule_resource_collection import AlertRuleResourceCollection
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
    api_instance = openapi_client.AlertRulesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.

    try:
        api_response = api_instance.alert_rules_list_by_subscription(api_version, subscription_id)
        print("The response of AlertRulesApi->alert_rules_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertRulesApi->alert_rules_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| The Azure subscription Id. | 

### Return type

[**AlertRuleResourceCollection**](AlertRuleResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of alert rules |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

