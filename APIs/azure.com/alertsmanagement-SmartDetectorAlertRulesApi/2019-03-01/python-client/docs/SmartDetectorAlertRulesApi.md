# openapi_client.SmartDetectorAlertRulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**smart_detector_alert_rules_create_or_update**](SmartDetectorAlertRulesApi.md#smart_detector_alert_rules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName} | 
[**smart_detector_alert_rules_delete**](SmartDetectorAlertRulesApi.md#smart_detector_alert_rules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName} | 
[**smart_detector_alert_rules_get**](SmartDetectorAlertRulesApi.md#smart_detector_alert_rules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules/{alertRuleName} | 
[**smart_detector_alert_rules_list**](SmartDetectorAlertRulesApi.md#smart_detector_alert_rules_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.alertsManagement/smartDetectorAlertRules | 
[**smart_detector_alert_rules_list_by_resource_group**](SmartDetectorAlertRulesApi.md#smart_detector_alert_rules_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.alertsManagement/smartDetectorAlertRules | 


# **smart_detector_alert_rules_create_or_update**
> AlertRule smart_detector_alert_rules_create_or_update(subscription_id, resource_group_name, alert_rule_name, api_version, parameters)



Create or update a Smart Detector alert rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule import AlertRule
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
    api_instance = openapi_client.SmartDetectorAlertRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    alert_rule_name = 'alert_rule_name_example' # str | The name of the alert rule.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.AlertRule() # AlertRule | Parameters supplied to the operation.

    try:
        api_response = api_instance.smart_detector_alert_rules_create_or_update(subscription_id, resource_group_name, alert_rule_name, api_version, parameters)
        print("The response of SmartDetectorAlertRulesApi->smart_detector_alert_rules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartDetectorAlertRulesApi->smart_detector_alert_rules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **alert_rule_name** | **str**| The name of the alert rule. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**AlertRule**](AlertRule.md)| Parameters supplied to the operation. | 

### Return type

[**AlertRule**](AlertRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to update a Smart Detector alert rule. |  -  |
**201** | Successful request to create a Smart Detector alert rule. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_detector_alert_rules_delete**
> smart_detector_alert_rules_delete(subscription_id, resource_group_name, alert_rule_name, api_version)



Delete an existing Smart Detector alert rule.

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
    api_instance = openapi_client.SmartDetectorAlertRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    alert_rule_name = 'alert_rule_name_example' # str | The name of the alert rule.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.smart_detector_alert_rules_delete(subscription_id, resource_group_name, alert_rule_name, api_version)
    except Exception as e:
        print("Exception when calling SmartDetectorAlertRulesApi->smart_detector_alert_rules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **alert_rule_name** | **str**| The name of the alert rule. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | Successful request to delete a Smart Detector alert rule. |  -  |
**204** | The Smart Detector alert rule does not exist. It may have already been deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_detector_alert_rules_get**
> AlertRule smart_detector_alert_rules_get(subscription_id, resource_group_name, alert_rule_name, api_version, expand_detector=expand_detector)



Get a specific Smart Detector alert rule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rule import AlertRule
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
    api_instance = openapi_client.SmartDetectorAlertRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    alert_rule_name = 'alert_rule_name_example' # str | The name of the alert rule.
    api_version = 'api_version_example' # str | Client Api Version.
    expand_detector = True # bool | Indicates if Smart Detector should be expanded. (optional)

    try:
        api_response = api_instance.smart_detector_alert_rules_get(subscription_id, resource_group_name, alert_rule_name, api_version, expand_detector=expand_detector)
        print("The response of SmartDetectorAlertRulesApi->smart_detector_alert_rules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartDetectorAlertRulesApi->smart_detector_alert_rules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **alert_rule_name** | **str**| The name of the alert rule. | 
 **api_version** | **str**| Client Api Version. | 
 **expand_detector** | **bool**| Indicates if Smart Detector should be expanded. | [optional] 

### Return type

[**AlertRule**](AlertRule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get Smart Detector alert rule. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_detector_alert_rules_list**
> AlertRulesList smart_detector_alert_rules_list(subscription_id, api_version)



List all the existing Smart Detector alert rules within the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rules_list import AlertRulesList
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
    api_instance = openapi_client.SmartDetectorAlertRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.smart_detector_alert_rules_list(subscription_id, api_version)
        print("The response of SmartDetectorAlertRulesApi->smart_detector_alert_rules_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartDetectorAlertRulesApi->smart_detector_alert_rules_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**AlertRulesList**](AlertRulesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to list Smart Detector alert rules. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_detector_alert_rules_list_by_resource_group**
> AlertRulesList smart_detector_alert_rules_list_by_resource_group(subscription_id, resource_group_name, api_version)



List all the existing Smart Detector alert rules within the subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_rules_list import AlertRulesList
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
    api_instance = openapi_client.SmartDetectorAlertRulesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.smart_detector_alert_rules_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of SmartDetectorAlertRulesApi->smart_detector_alert_rules_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartDetectorAlertRulesApi->smart_detector_alert_rules_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**AlertRulesList**](AlertRulesList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to list Smart Detector alert rules. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

