# openapi_client.MetricAlertsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metric_alerts_create_or_update**](MetricAlertsApi.md#metric_alerts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName} | 
[**metric_alerts_delete**](MetricAlertsApi.md#metric_alerts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName} | 
[**metric_alerts_get**](MetricAlertsApi.md#metric_alerts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName} | 
[**metric_alerts_list_by_resource_group**](MetricAlertsApi.md#metric_alerts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts | 
[**metric_alerts_list_by_subscription**](MetricAlertsApi.md#metric_alerts_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Insights/metricAlerts | 
[**metric_alerts_update**](MetricAlertsApi.md#metric_alerts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName} | 


# **metric_alerts_create_or_update**
> MetricAlertResource metric_alerts_create_or_update(subscription_id, resource_group_name, rule_name, api_version, parameters)



Create or update an metric alert definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_resource import MetricAlertResource
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
    api_instance = openapi_client.MetricAlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.MetricAlertResource() # MetricAlertResource | The parameters of the rule to create or update.

    try:
        api_response = api_instance.metric_alerts_create_or_update(subscription_id, resource_group_name, rule_name, api_version, parameters)
        print("The response of MetricAlertsApi->metric_alerts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsApi->metric_alerts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**MetricAlertResource**](MetricAlertResource.md)| The parameters of the rule to create or update. | 

### Return type

[**MetricAlertResource**](MetricAlertResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metric_alerts_delete**
> metric_alerts_delete(subscription_id, resource_group_name, rule_name, api_version)



Delete an alert rule definition.

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
    api_instance = openapi_client.MetricAlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.metric_alerts_delete(subscription_id, resource_group_name, rule_name, api_version)
    except Exception as e:
        print("Exception when calling MetricAlertsApi->metric_alerts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
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
**200** | Successful request to delete an metric alert rule |  -  |
**204** | No content: the request was successful, but the response is empty |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metric_alerts_get**
> MetricAlertResource metric_alerts_get(subscription_id, resource_group_name, rule_name, api_version)



Retrieve an alert rule definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_resource import MetricAlertResource
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
    api_instance = openapi_client.MetricAlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.metric_alerts_get(subscription_id, resource_group_name, rule_name, api_version)
        print("The response of MetricAlertsApi->metric_alerts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsApi->metric_alerts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetricAlertResource**](MetricAlertResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of metric alerts |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metric_alerts_list_by_resource_group**
> MetricAlertResourceCollection metric_alerts_list_by_resource_group(subscription_id, resource_group_name, api_version)



Retrieve alert rule definitions in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_resource_collection import MetricAlertResourceCollection
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
    api_instance = openapi_client.MetricAlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.metric_alerts_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of MetricAlertsApi->metric_alerts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsApi->metric_alerts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetricAlertResourceCollection**](MetricAlertResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of metric alerts |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metric_alerts_list_by_subscription**
> MetricAlertResourceCollection metric_alerts_list_by_subscription(subscription_id, api_version)



Retrieve alert rule definitions in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_resource_collection import MetricAlertResourceCollection
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
    api_instance = openapi_client.MetricAlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.metric_alerts_list_by_subscription(subscription_id, api_version)
        print("The response of MetricAlertsApi->metric_alerts_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsApi->metric_alerts_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetricAlertResourceCollection**](MetricAlertResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for a list of metric alerts |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metric_alerts_update**
> MetricAlertResource metric_alerts_update(subscription_id, resource_group_name, rule_name, api_version, parameters)



Update an metric alert definition.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_resource import MetricAlertResource
from openapi_client.models.metric_alert_resource_patch import MetricAlertResourcePatch
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
    api_instance = openapi_client.MetricAlertsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.
    parameters = openapi_client.MetricAlertResourcePatch() # MetricAlertResourcePatch | The parameters of the rule to update.

    try:
        api_response = api_instance.metric_alerts_update(subscription_id, resource_group_name, rule_name, api_version, parameters)
        print("The response of MetricAlertsApi->metric_alerts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsApi->metric_alerts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 
 **parameters** | [**MetricAlertResourcePatch**](MetricAlertResourcePatch.md)| The parameters of the rule to update. | 

### Return type

[**MetricAlertResource**](MetricAlertResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

