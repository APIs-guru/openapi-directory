# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**action_rules_create_update**](DefaultApi.md#action_rules_create_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{actionRuleName} | Create/update an action rule
[**action_rules_delete**](DefaultApi.md#action_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{actionRuleName} | Delete action rule
[**action_rules_get_by_name**](DefaultApi.md#action_rules_get_by_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{actionRuleName} | Get action rule by name
[**action_rules_list_by_resource_group**](DefaultApi.md#action_rules_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules | Get all action rules created in a resource group
[**action_rules_list_by_subscription**](DefaultApi.md#action_rules_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/actionRules | Get all action rule in a given subscription
[**action_rules_update**](DefaultApi.md#action_rules_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AlertsManagement/actionRules/{actionRuleName} | Patch action rule
[**alerts_change_state**](DefaultApi.md#alerts_change_state) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts/{alertId}/changestate | 
[**alerts_get_all**](DefaultApi.md#alerts_get_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts | 
[**alerts_get_by_id**](DefaultApi.md#alerts_get_by_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts/{alertId} | Get a specific alert.
[**alerts_get_history**](DefaultApi.md#alerts_get_history) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history | 
[**alerts_get_summary**](DefaultApi.md#alerts_get_summary) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alertsSummary | 
[**alerts_meta_data**](DefaultApi.md#alerts_meta_data) | **GET** /providers/Microsoft.AlertsManagement/alertsMetaData | 
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.AlertsManagement/operations | 
[**smart_groups_change_state**](DefaultApi.md#smart_groups_change_state) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}/changeState | 
[**smart_groups_get_all**](DefaultApi.md#smart_groups_get_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups | Get all Smart Groups within a specified subscription
[**smart_groups_get_by_id**](DefaultApi.md#smart_groups_get_by_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId} | Get information related to a specific Smart Group.
[**smart_groups_get_history**](DefaultApi.md#smart_groups_get_history) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}/history | 


# **action_rules_create_update**
> ActionRule action_rules_create_update(subscription_id, resource_group_name, action_rule_name, api_version, action_rule)

Create/update an action rule

Creates/Updates a specific action rule

### Example


```python
import openapi_client
from openapi_client.models.action_rule import ActionRule
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | Resource group name where the resource is created.
    action_rule_name = 'action_rule_name_example' # str | The name of action rule that needs to be created/updated
    api_version = 'api_version_example' # str | client API version
    action_rule = openapi_client.ActionRule() # ActionRule | action rule to be created/updated

    try:
        # Create/update an action rule
        api_response = api_instance.action_rules_create_update(subscription_id, resource_group_name, action_rule_name, api_version, action_rule)
        print("The response of DefaultApi->action_rules_create_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_rules_create_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| Resource group name where the resource is created. | 
 **action_rule_name** | **str**| The name of action rule that needs to be created/updated | 
 **api_version** | **str**| client API version | 
 **action_rule** | [**ActionRule**](ActionRule.md)| action rule to be created/updated | 

### Return type

[**ActionRule**](ActionRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the created/updated action rule |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_rules_delete**
> bool action_rules_delete(subscription_id, resource_group_name, action_rule_name, api_version)

Delete action rule

Deletes a given action rule

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | Resource group name where the resource is created.
    action_rule_name = 'action_rule_name_example' # str | The name that needs to be deleted
    api_version = 'api_version_example' # str | client API version

    try:
        # Delete action rule
        api_response = api_instance.action_rules_delete(subscription_id, resource_group_name, action_rule_name, api_version)
        print("The response of DefaultApi->action_rules_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| Resource group name where the resource is created. | 
 **action_rule_name** | **str**| The name that needs to be deleted | 
 **api_version** | **str**| client API version | 

### Return type

**bool**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns true if deleted successfully |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_rules_get_by_name**
> ActionRule action_rules_get_by_name(subscription_id, resource_group_name, action_rule_name, api_version)

Get action rule by name

Get a specific action rule

### Example


```python
import openapi_client
from openapi_client.models.action_rule import ActionRule
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | Resource group name where the resource is created.
    action_rule_name = 'action_rule_name_example' # str | The name of action rule that needs to be fetched
    api_version = 'api_version_example' # str | client API version

    try:
        # Get action rule by name
        api_response = api_instance.action_rules_get_by_name(subscription_id, resource_group_name, action_rule_name, api_version)
        print("The response of DefaultApi->action_rules_get_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_rules_get_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| Resource group name where the resource is created. | 
 **action_rule_name** | **str**| The name of action rule that needs to be fetched | 
 **api_version** | **str**| client API version | 

### Return type

[**ActionRule**](ActionRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the specific action rule |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_rules_list_by_resource_group**
> ActionRulesList action_rules_list_by_resource_group(subscription_id, resource_group_name, api_version, target_resource_group=target_resource_group, target_resource_type=target_resource_type, target_resource=target_resource, severity=severity, monitor_service=monitor_service, impacted_scope=impacted_scope, description=description, alert_rule_id=alert_rule_id, action_group=action_group, name=name)

Get all action rules created in a resource group

List all action rules of the subscription, created in given resource group and given input filters

### Example


```python
import openapi_client
from openapi_client.models.action_rules_list import ActionRulesList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | Resource group name where the resource is created.
    api_version = 'api_version_example' # str | client API version
    target_resource_group = 'target_resource_group_example' # str | Filter by target resource group name. Default value is select all. (optional)
    target_resource_type = 'target_resource_type_example' # str | Filter by target resource type. Default value is select all. (optional)
    target_resource = 'target_resource_example' # str | Filter by target resource( which is full ARM ID) Default value is select all. (optional)
    severity = 'severity_example' # str | Filter by severity.  Default value is select all. (optional)
    monitor_service = 'monitor_service_example' # str | Filter by monitor service which generates the alert instance. Default value is select all. (optional)
    impacted_scope = 'impacted_scope_example' # str | filter by impacted/target scope (provide comma separated list for multiple scopes). The value should be an well constructed ARM id of the scope. (optional)
    description = 'description_example' # str | filter by alert rule description (optional)
    alert_rule_id = 'alert_rule_id_example' # str | filter by alert rule id (optional)
    action_group = 'action_group_example' # str | filter by action group configured as part of action rule (optional)
    name = 'name_example' # str | filter by action rule name (optional)

    try:
        # Get all action rules created in a resource group
        api_response = api_instance.action_rules_list_by_resource_group(subscription_id, resource_group_name, api_version, target_resource_group=target_resource_group, target_resource_type=target_resource_type, target_resource=target_resource, severity=severity, monitor_service=monitor_service, impacted_scope=impacted_scope, description=description, alert_rule_id=alert_rule_id, action_group=action_group, name=name)
        print("The response of DefaultApi->action_rules_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_rules_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| Resource group name where the resource is created. | 
 **api_version** | **str**| client API version | 
 **target_resource_group** | **str**| Filter by target resource group name. Default value is select all. | [optional] 
 **target_resource_type** | **str**| Filter by target resource type. Default value is select all. | [optional] 
 **target_resource** | **str**| Filter by target resource( which is full ARM ID) Default value is select all. | [optional] 
 **severity** | **str**| Filter by severity.  Default value is select all. | [optional] 
 **monitor_service** | **str**| Filter by monitor service which generates the alert instance. Default value is select all. | [optional] 
 **impacted_scope** | **str**| filter by impacted/target scope (provide comma separated list for multiple scopes). The value should be an well constructed ARM id of the scope. | [optional] 
 **description** | **str**| filter by alert rule description | [optional] 
 **alert_rule_id** | **str**| filter by alert rule id | [optional] 
 **action_group** | **str**| filter by action group configured as part of action rule | [optional] 
 **name** | **str**| filter by action rule name | [optional] 

### Return type

[**ActionRulesList**](ActionRulesList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Return the list of action rules |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_rules_list_by_subscription**
> ActionRulesList action_rules_list_by_subscription(subscription_id, api_version, target_resource_group=target_resource_group, target_resource_type=target_resource_type, target_resource=target_resource, severity=severity, monitor_service=monitor_service, impacted_scope=impacted_scope, description=description, alert_rule_id=alert_rule_id, action_group=action_group, name=name)

Get all action rule in a given subscription

List all action rules of the subscription and given input filters

### Example


```python
import openapi_client
from openapi_client.models.action_rules_list import ActionRulesList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | client API version
    target_resource_group = 'target_resource_group_example' # str | Filter by target resource group name. Default value is select all. (optional)
    target_resource_type = 'target_resource_type_example' # str | Filter by target resource type. Default value is select all. (optional)
    target_resource = 'target_resource_example' # str | Filter by target resource( which is full ARM ID) Default value is select all. (optional)
    severity = 'severity_example' # str | Filter by severity.  Default value is select all. (optional)
    monitor_service = 'monitor_service_example' # str | Filter by monitor service which generates the alert instance. Default value is select all. (optional)
    impacted_scope = 'impacted_scope_example' # str | filter by impacted/target scope (provide comma separated list for multiple scopes). The value should be an well constructed ARM id of the scope. (optional)
    description = 'description_example' # str | filter by alert rule description (optional)
    alert_rule_id = 'alert_rule_id_example' # str | filter by alert rule id (optional)
    action_group = 'action_group_example' # str | filter by action group configured as part of action rule (optional)
    name = 'name_example' # str | filter by action rule name (optional)

    try:
        # Get all action rule in a given subscription
        api_response = api_instance.action_rules_list_by_subscription(subscription_id, api_version, target_resource_group=target_resource_group, target_resource_type=target_resource_type, target_resource=target_resource, severity=severity, monitor_service=monitor_service, impacted_scope=impacted_scope, description=description, alert_rule_id=alert_rule_id, action_group=action_group, name=name)
        print("The response of DefaultApi->action_rules_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_rules_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| client API version | 
 **target_resource_group** | **str**| Filter by target resource group name. Default value is select all. | [optional] 
 **target_resource_type** | **str**| Filter by target resource type. Default value is select all. | [optional] 
 **target_resource** | **str**| Filter by target resource( which is full ARM ID) Default value is select all. | [optional] 
 **severity** | **str**| Filter by severity.  Default value is select all. | [optional] 
 **monitor_service** | **str**| Filter by monitor service which generates the alert instance. Default value is select all. | [optional] 
 **impacted_scope** | **str**| filter by impacted/target scope (provide comma separated list for multiple scopes). The value should be an well constructed ARM id of the scope. | [optional] 
 **description** | **str**| filter by alert rule description | [optional] 
 **alert_rule_id** | **str**| filter by alert rule id | [optional] 
 **action_group** | **str**| filter by action group configured as part of action rule | [optional] 
 **name** | **str**| filter by action rule name | [optional] 

### Return type

[**ActionRulesList**](ActionRulesList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Return the list of action rules |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_rules_update**
> ActionRule action_rules_update(subscription_id, resource_group_name, action_rule_name, api_version, action_rule_patch)

Patch action rule

Update enabled flag and/or tags for the given action rule

### Example


```python
import openapi_client
from openapi_client.models.action_rule import ActionRule
from openapi_client.models.patch_object import PatchObject
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | Resource group name where the resource is created.
    action_rule_name = 'action_rule_name_example' # str | The name that needs to be updated
    api_version = 'api_version_example' # str | client API version
    action_rule_patch = openapi_client.PatchObject() # PatchObject | Parameters supplied to the operation.

    try:
        # Patch action rule
        api_response = api_instance.action_rules_update(subscription_id, resource_group_name, action_rule_name, api_version, action_rule_patch)
        print("The response of DefaultApi->action_rules_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->action_rules_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| Resource group name where the resource is created. | 
 **action_rule_name** | **str**| The name that needs to be updated | 
 **api_version** | **str**| client API version | 
 **action_rule_patch** | [**PatchObject**](PatchObject.md)| Parameters supplied to the operation. | 

### Return type

[**ActionRule**](ActionRule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the created/updated action rule |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_change_state**
> Alert alerts_change_state(subscription_id, alert_id, api_version, new_state)



Change the state of an alert.

### Example


```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    alert_id = 'alert_id_example' # str | Unique ID of an alert instance.
    api_version = 'api_version_example' # str | client API version
    new_state = 'new_state_example' # str | New state of the alert.

    try:
        api_response = api_instance.alerts_change_state(subscription_id, alert_id, api_version, new_state)
        print("The response of DefaultApi->alerts_change_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_change_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **alert_id** | **str**| Unique ID of an alert instance. | 
 **api_version** | **str**| client API version | 
 **new_state** | **str**| New state of the alert. | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Alert state updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_get_all**
> AlertsList alerts_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_type=target_resource_type, target_resource_group=target_resource_group, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, alert_state=alert_state, alert_rule=alert_rule, smart_group_id=smart_group_id, include_context=include_context, include_egress_config=include_egress_config, page_count=page_count, sort_by=sort_by, sort_order=sort_order, select=select, time_range=time_range, custom_time_range=custom_time_range)



List all existing alerts, where the results can be filtered on the basis of multiple parameters (e.g. time range). The results can then be sorted on the basis specific fields, with the default being lastModifiedDateTime. 

### Example


```python
import openapi_client
from openapi_client.models.alerts_list import AlertsList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | client API version
    target_resource = 'target_resource_example' # str | Filter by target resource( which is full ARM ID) Default value is select all. (optional)
    target_resource_type = 'target_resource_type_example' # str | Filter by target resource type. Default value is select all. (optional)
    target_resource_group = 'target_resource_group_example' # str | Filter by target resource group name. Default value is select all. (optional)
    monitor_service = 'monitor_service_example' # str | Filter by monitor service which generates the alert instance. Default value is select all. (optional)
    monitor_condition = 'monitor_condition_example' # str | Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all. (optional)
    severity = 'severity_example' # str | Filter by severity.  Default value is select all. (optional)
    alert_state = 'alert_state_example' # str | Filter by state of the alert instance. Default value is to select all. (optional)
    alert_rule = 'alert_rule_example' # str | Filter by specific alert rule.  Default value is to select all. (optional)
    smart_group_id = 'smart_group_id_example' # str | Filter the alerts list by the Smart Group Id. Default value is none. (optional)
    include_context = True # bool | Include context which has contextual data specific to the monitor service. Default value is false' (optional)
    include_egress_config = True # bool | Include egress config which would be used for displaying the content in portal.  Default value is 'false'. (optional)
    page_count = 56 # int | Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the \"includeContent\"  filter is selected, maximum value allowed is 25. Default value is 25. (optional)
    sort_by = 'sort_by_example' # str | Sort the query results by input field,  Default value is 'lastModifiedDateTime'. (optional)
    sort_order = 'sort_order_example' # str | Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others. (optional)
    select = 'select_example' # str | This filter allows to selection of the fields(comma separated) which would  be part of the essential section. This would allow to project only the  required fields rather than getting entire content.  Default is to fetch all the fields in the essentials section. (optional)
    time_range = 'time_range_example' # str | Filter by time range by below listed values. Default value is 1 day. (optional)
    custom_time_range = 'custom_time_range_example' # str | Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none. (optional)

    try:
        api_response = api_instance.alerts_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_type=target_resource_type, target_resource_group=target_resource_group, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, alert_state=alert_state, alert_rule=alert_rule, smart_group_id=smart_group_id, include_context=include_context, include_egress_config=include_egress_config, page_count=page_count, sort_by=sort_by, sort_order=sort_order, select=select, time_range=time_range, custom_time_range=custom_time_range)
        print("The response of DefaultApi->alerts_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| client API version | 
 **target_resource** | **str**| Filter by target resource( which is full ARM ID) Default value is select all. | [optional] 
 **target_resource_type** | **str**| Filter by target resource type. Default value is select all. | [optional] 
 **target_resource_group** | **str**| Filter by target resource group name. Default value is select all. | [optional] 
 **monitor_service** | **str**| Filter by monitor service which generates the alert instance. Default value is select all. | [optional] 
 **monitor_condition** | **str**| Filter by monitor condition which is either &#39;Fired&#39; or &#39;Resolved&#39;. Default value is to select all. | [optional] 
 **severity** | **str**| Filter by severity.  Default value is select all. | [optional] 
 **alert_state** | **str**| Filter by state of the alert instance. Default value is to select all. | [optional] 
 **alert_rule** | **str**| Filter by specific alert rule.  Default value is to select all. | [optional] 
 **smart_group_id** | **str**| Filter the alerts list by the Smart Group Id. Default value is none. | [optional] 
 **include_context** | **bool**| Include context which has contextual data specific to the monitor service. Default value is false&#39; | [optional] 
 **include_egress_config** | **bool**| Include egress config which would be used for displaying the content in portal.  Default value is &#39;false&#39;. | [optional] 
 **page_count** | **int**| Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the \&quot;includeContent\&quot;  filter is selected, maximum value allowed is 25. Default value is 25. | [optional] 
 **sort_by** | **str**| Sort the query results by input field,  Default value is &#39;lastModifiedDateTime&#39;. | [optional] 
 **sort_order** | **str**| Sort the query results order in either ascending or descending.  Default value is &#39;desc&#39; for time fields and &#39;asc&#39; for others. | [optional] 
 **select** | **str**| This filter allows to selection of the fields(comma separated) which would  be part of the essential section. This would allow to project only the  required fields rather than getting entire content.  Default is to fetch all the fields in the essentials section. | [optional] 
 **time_range** | **str**| Filter by time range by below listed values. Default value is 1 day. | [optional] 
 **custom_time_range** | **str**| Filter by custom time range in the format &lt;start-time&gt;/&lt;end-time&gt;  where time is in (ISO-8601 format)&#39;. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none. | [optional] 

### Return type

[**AlertsList**](AlertsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully listed alert objects. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_get_by_id**
> Alert alerts_get_by_id(subscription_id, alert_id, api_version)

Get a specific alert.

Get information related to a specific alert

### Example


```python
import openapi_client
from openapi_client.models.alert import Alert
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    alert_id = 'alert_id_example' # str | Unique ID of an alert instance.
    api_version = 'api_version_example' # str | client API version

    try:
        # Get a specific alert.
        api_response = api_instance.alerts_get_by_id(subscription_id, alert_id, api_version)
        print("The response of DefaultApi->alerts_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **alert_id** | **str**| Unique ID of an alert instance. | 
 **api_version** | **str**| client API version | 

### Return type

[**Alert**](Alert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the alert with the specified ID. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_get_history**
> AlertModification alerts_get_history(subscription_id, alert_id, api_version)



Get the history of an alert, which captures any monitor condition changes (Fired/Resolved) and alert state changes (New/Acknowledged/Closed).

### Example


```python
import openapi_client
from openapi_client.models.alert_modification import AlertModification
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    alert_id = 'alert_id_example' # str | Unique ID of an alert instance.
    api_version = 'api_version_example' # str | client API version

    try:
        api_response = api_instance.alerts_get_history(subscription_id, alert_id, api_version)
        print("The response of DefaultApi->alerts_get_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_get_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **alert_id** | **str**| Unique ID of an alert instance. | 
 **api_version** | **str**| client API version | 

### Return type

[**AlertModification**](AlertModification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the history of the specified alert. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_get_summary**
> AlertsSummary alerts_get_summary(subscription_id, groupby, api_version, include_smart_groups_count=include_smart_groups_count, target_resource=target_resource, target_resource_type=target_resource_type, target_resource_group=target_resource_group, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, alert_state=alert_state, alert_rule=alert_rule, time_range=time_range, custom_time_range=custom_time_range)



Get a summarized count of your alerts grouped by various parameters (e.g. grouping by 'Severity' returns the count of alerts for each severity).

### Example


```python
import openapi_client
from openapi_client.models.alerts_summary import AlertsSummary
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    groupby = 'groupby_example' # str | This parameter allows the result set to be grouped by input fields (Maximum 2 comma separated fields supported). For example, groupby=severity or groupby=severity,alertstate.
    api_version = 'api_version_example' # str | client API version
    include_smart_groups_count = True # bool | Include count of the SmartGroups as part of the summary. Default value is 'false'. (optional)
    target_resource = 'target_resource_example' # str | Filter by target resource( which is full ARM ID) Default value is select all. (optional)
    target_resource_type = 'target_resource_type_example' # str | Filter by target resource type. Default value is select all. (optional)
    target_resource_group = 'target_resource_group_example' # str | Filter by target resource group name. Default value is select all. (optional)
    monitor_service = 'monitor_service_example' # str | Filter by monitor service which generates the alert instance. Default value is select all. (optional)
    monitor_condition = 'monitor_condition_example' # str | Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all. (optional)
    severity = 'severity_example' # str | Filter by severity.  Default value is select all. (optional)
    alert_state = 'alert_state_example' # str | Filter by state of the alert instance. Default value is to select all. (optional)
    alert_rule = 'alert_rule_example' # str | Filter by specific alert rule.  Default value is to select all. (optional)
    time_range = 'time_range_example' # str | Filter by time range by below listed values. Default value is 1 day. (optional)
    custom_time_range = 'custom_time_range_example' # str | Filter by custom time range in the format <start-time>/<end-time>  where time is in (ISO-8601 format)'. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none. (optional)

    try:
        api_response = api_instance.alerts_get_summary(subscription_id, groupby, api_version, include_smart_groups_count=include_smart_groups_count, target_resource=target_resource, target_resource_type=target_resource_type, target_resource_group=target_resource_group, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, alert_state=alert_state, alert_rule=alert_rule, time_range=time_range, custom_time_range=custom_time_range)
        print("The response of DefaultApi->alerts_get_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_get_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **groupby** | **str**| This parameter allows the result set to be grouped by input fields (Maximum 2 comma separated fields supported). For example, groupby&#x3D;severity or groupby&#x3D;severity,alertstate. | 
 **api_version** | **str**| client API version | 
 **include_smart_groups_count** | **bool**| Include count of the SmartGroups as part of the summary. Default value is &#39;false&#39;. | [optional] 
 **target_resource** | **str**| Filter by target resource( which is full ARM ID) Default value is select all. | [optional] 
 **target_resource_type** | **str**| Filter by target resource type. Default value is select all. | [optional] 
 **target_resource_group** | **str**| Filter by target resource group name. Default value is select all. | [optional] 
 **monitor_service** | **str**| Filter by monitor service which generates the alert instance. Default value is select all. | [optional] 
 **monitor_condition** | **str**| Filter by monitor condition which is either &#39;Fired&#39; or &#39;Resolved&#39;. Default value is to select all. | [optional] 
 **severity** | **str**| Filter by severity.  Default value is select all. | [optional] 
 **alert_state** | **str**| Filter by state of the alert instance. Default value is to select all. | [optional] 
 **alert_rule** | **str**| Filter by specific alert rule.  Default value is to select all. | [optional] 
 **time_range** | **str**| Filter by time range by below listed values. Default value is 1 day. | [optional] 
 **custom_time_range** | **str**| Filter by custom time range in the format &lt;start-time&gt;/&lt;end-time&gt;  where time is in (ISO-8601 format)&#39;. Permissible values is within 30 days from  query time. Either timeRange or customTimeRange could be used but not both. Default is none. | [optional] 

### Return type

[**AlertsSummary**](AlertsSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Alert summary returned. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_meta_data**
> AlertsMetaData alerts_meta_data(api_version, identifier)



List alerts meta data information based on value of identifier parameter.

### Example


```python
import openapi_client
from openapi_client.models.alerts_meta_data import AlertsMetaData
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | client API version
    identifier = 'identifier_example' # str | Identification of the information to be retrieved by API call.

    try:
        api_response = api_instance.alerts_meta_data(api_version, identifier)
        print("The response of DefaultApi->alerts_meta_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_meta_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| client API version | 
 **identifier** | **str**| Identification of the information to be retrieved by API call. | 

### Return type

[**AlertsMetaData**](AlertsMetaData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully listed alert meta data. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationsList operations_list(api_version)



List all operations available through Azure Alerts Management Resource Provider.

### Example


```python
import openapi_client
from openapi_client.models.operations_list import OperationsList
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | client API version

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of DefaultApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| client API version | 

### Return type

[**OperationsList**](OperationsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully retrieved operations list. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_groups_change_state**
> SmartGroup smart_groups_change_state(subscription_id, smart_group_id, api_version, new_state)



Change the state of a Smart Group.

### Example


```python
import openapi_client
from openapi_client.models.smart_group import SmartGroup
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    smart_group_id = 'smart_group_id_example' # str | Smart group unique id. 
    api_version = 'api_version_example' # str | client API version
    new_state = 'new_state_example' # str | New state of the alert.

    try:
        api_response = api_instance.smart_groups_change_state(subscription_id, smart_group_id, api_version, new_state)
        print("The response of DefaultApi->smart_groups_change_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->smart_groups_change_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **smart_group_id** | **str**| Smart group unique id.  | 
 **api_version** | **str**| client API version | 
 **new_state** | **str**| New state of the alert. | 

### Return type

[**SmartGroup**](SmartGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Smart Group state updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_groups_get_all**
> SmartGroupsList smart_groups_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_group=target_resource_group, target_resource_type=target_resource_type, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, smart_group_state=smart_group_state, time_range=time_range, page_count=page_count, sort_by=sort_by, sort_order=sort_order)

Get all Smart Groups within a specified subscription

List all the Smart Groups within a specified subscription. 

### Example


```python
import openapi_client
from openapi_client.models.smart_groups_list import SmartGroupsList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | client API version
    target_resource = 'target_resource_example' # str | Filter by target resource( which is full ARM ID) Default value is select all. (optional)
    target_resource_group = 'target_resource_group_example' # str | Filter by target resource group name. Default value is select all. (optional)
    target_resource_type = 'target_resource_type_example' # str | Filter by target resource type. Default value is select all. (optional)
    monitor_service = 'monitor_service_example' # str | Filter by monitor service which generates the alert instance. Default value is select all. (optional)
    monitor_condition = 'monitor_condition_example' # str | Filter by monitor condition which is either 'Fired' or 'Resolved'. Default value is to select all. (optional)
    severity = 'severity_example' # str | Filter by severity.  Default value is select all. (optional)
    smart_group_state = 'smart_group_state_example' # str | Filter by state of the smart group. Default value is to select all. (optional)
    time_range = 'time_range_example' # str | Filter by time range by below listed values. Default value is 1 day. (optional)
    page_count = 56 # int | Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the \"includeContent\"  filter is selected, maximum value allowed is 25. Default value is 25. (optional)
    sort_by = 'sort_by_example' # str | Sort the query results by input field. Default value is sort by 'lastModifiedDateTime'. (optional)
    sort_order = 'sort_order_example' # str | Sort the query results order in either ascending or descending.  Default value is 'desc' for time fields and 'asc' for others. (optional)

    try:
        # Get all Smart Groups within a specified subscription
        api_response = api_instance.smart_groups_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_group=target_resource_group, target_resource_type=target_resource_type, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, smart_group_state=smart_group_state, time_range=time_range, page_count=page_count, sort_by=sort_by, sort_order=sort_order)
        print("The response of DefaultApi->smart_groups_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->smart_groups_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| client API version | 
 **target_resource** | **str**| Filter by target resource( which is full ARM ID) Default value is select all. | [optional] 
 **target_resource_group** | **str**| Filter by target resource group name. Default value is select all. | [optional] 
 **target_resource_type** | **str**| Filter by target resource type. Default value is select all. | [optional] 
 **monitor_service** | **str**| Filter by monitor service which generates the alert instance. Default value is select all. | [optional] 
 **monitor_condition** | **str**| Filter by monitor condition which is either &#39;Fired&#39; or &#39;Resolved&#39;. Default value is to select all. | [optional] 
 **severity** | **str**| Filter by severity.  Default value is select all. | [optional] 
 **smart_group_state** | **str**| Filter by state of the smart group. Default value is to select all. | [optional] 
 **time_range** | **str**| Filter by time range by below listed values. Default value is 1 day. | [optional] 
 **page_count** | **int**| Determines number of alerts returned per page in response. Permissible value is between 1 to 250. When the \&quot;includeContent\&quot;  filter is selected, maximum value allowed is 25. Default value is 25. | [optional] 
 **sort_by** | **str**| Sort the query results by input field. Default value is sort by &#39;lastModifiedDateTime&#39;. | [optional] 
 **sort_order** | **str**| Sort the query results order in either ascending or descending.  Default value is &#39;desc&#39; for time fields and &#39;asc&#39; for others. | [optional] 

### Return type

[**SmartGroupsList**](SmartGroupsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of all smartGroups. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_groups_get_by_id**
> SmartGroup smart_groups_get_by_id(subscription_id, smart_group_id, api_version)

Get information related to a specific Smart Group.

Get information related to a specific Smart Group.

### Example


```python
import openapi_client
from openapi_client.models.smart_group import SmartGroup
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    smart_group_id = 'smart_group_id_example' # str | Smart group unique id. 
    api_version = 'api_version_example' # str | client API version

    try:
        # Get information related to a specific Smart Group.
        api_response = api_instance.smart_groups_get_by_id(subscription_id, smart_group_id, api_version)
        print("The response of DefaultApi->smart_groups_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->smart_groups_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **smart_group_id** | **str**| Smart group unique id.  | 
 **api_version** | **str**| client API version | 

### Return type

[**SmartGroup**](SmartGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the group with the specified smart group Id. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_groups_get_history**
> SmartGroupModification smart_groups_get_history(subscription_id, smart_group_id, api_version)



Get the history a smart group, which captures any Smart Group state changes (New/Acknowledged/Closed) .

### Example


```python
import openapi_client
from openapi_client.models.smart_group_modification import SmartGroupModification
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    smart_group_id = 'smart_group_id_example' # str | Smart group unique id. 
    api_version = 'api_version_example' # str | client API version

    try:
        api_response = api_instance.smart_groups_get_history(subscription_id, smart_group_id, api_version)
        print("The response of DefaultApi->smart_groups_get_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->smart_groups_get_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **smart_group_id** | **str**| Smart group unique id.  | 
 **api_version** | **str**| client API version | 

### Return type

[**SmartGroupModification**](SmartGroupModification.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the list of changes of smart group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

