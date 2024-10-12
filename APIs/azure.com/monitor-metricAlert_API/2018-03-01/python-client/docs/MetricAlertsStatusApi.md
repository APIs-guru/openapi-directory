# openapi_client.MetricAlertsStatusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metric_alerts_status_list**](MetricAlertsStatusApi.md#metric_alerts_status_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}/status | 
[**metric_alerts_status_list_by_name**](MetricAlertsStatusApi.md#metric_alerts_status_list_by_name) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}/status/{statusName} | 


# **metric_alerts_status_list**
> MetricAlertStatusCollection metric_alerts_status_list(subscription_id, resource_group_name, rule_name, api_version)



Retrieve an alert rule status.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_status_collection import MetricAlertStatusCollection
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
    api_instance = openapi_client.MetricAlertsStatusApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.metric_alerts_status_list(subscription_id, resource_group_name, rule_name, api_version)
        print("The response of MetricAlertsStatusApi->metric_alerts_status_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsStatusApi->metric_alerts_status_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetricAlertStatusCollection**](MetricAlertStatusCollection.md)

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

# **metric_alerts_status_list_by_name**
> MetricAlertStatusCollection metric_alerts_status_list_by_name(subscription_id, resource_group_name, rule_name, status_name, api_version)



Retrieve an alert rule status.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_alert_status_collection import MetricAlertStatusCollection
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
    api_instance = openapi_client.MetricAlertsStatusApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    rule_name = 'rule_name_example' # str | The name of the rule.
    status_name = 'status_name_example' # str | The name of the status.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.metric_alerts_status_list_by_name(subscription_id, resource_group_name, rule_name, status_name, api_version)
        print("The response of MetricAlertsStatusApi->metric_alerts_status_list_by_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricAlertsStatusApi->metric_alerts_status_list_by_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **rule_name** | **str**| The name of the rule. | 
 **status_name** | **str**| The name of the status. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetricAlertStatusCollection**](MetricAlertStatusCollection.md)

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

