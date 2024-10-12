# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alerts_change_state**](DefaultApi.md#alerts_change_state) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts/{alertId}/changestate | 
[**alerts_get_all**](DefaultApi.md#alerts_get_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts | 
[**alerts_get_by_id**](DefaultApi.md#alerts_get_by_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts/{alertId} | Get a specific alert.
[**alerts_get_history**](DefaultApi.md#alerts_get_history) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alerts/{alertId}/history | 
[**alerts_get_summary**](DefaultApi.md#alerts_get_summary) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/alertsSummary | 
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.AlertsManagement/operations | 
[**smart_groups_change_state**](DefaultApi.md#smart_groups_change_state) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}/changeState | 
[**smart_groups_get_all**](DefaultApi.md#smart_groups_get_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups | Get all smartGroups within the subscription
[**smart_groups_get_by_id**](DefaultApi.md#smart_groups_get_by_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId} | Get information of smart alerts group.
[**smart_groups_get_history**](DefaultApi.md#smart_groups_get_history) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AlertsManagement/smartGroups/{smartGroupId}/history | 


# **alerts_change_state**
> Alert alerts_change_state(subscription_id, alert_id, api_version, new_state)



Change the state of the alert.

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    alert_id = 'alert_id_example' # str | Unique ID of an alert object.
    api_version = 'api_version_example' # str | client API version
    new_state = 'new_state_example' # str | filter by state

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
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **alert_id** | **str**| Unique ID of an alert object. | 
 **api_version** | **str**| client API version | 
 **new_state** | **str**| filter by state | 

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
> AlertsList alerts_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_group=target_resource_group, target_resource_type=target_resource_type, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, alert_state=alert_state, smart_group_id=smart_group_id, include_payload=include_payload, page_count=page_count, sort_by=sort_by, sort_order=sort_order, time_range=time_range)



List all the existing alerts, where the results can be selective by passing multiple filter parameters including time range and sorted on specific fields. 

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | client API version
    target_resource = 'target_resource_example' # str | filter by target resource (optional)
    target_resource_group = 'target_resource_group_example' # str | filter by target resource group name (optional)
    target_resource_type = 'target_resource_type_example' # str | filter by target resource type (optional)
    monitor_service = 'monitor_service_example' # str | filter by monitor service which is the source of the alert object. (optional)
    monitor_condition = 'monitor_condition_example' # str | filter by monitor condition which is the state of the alert at monitor service (optional)
    severity = 'severity_example' # str | filter by severity (optional)
    alert_state = 'alert_state_example' # str | filter by state (optional)
    smart_group_id = 'smart_group_id_example' # str | filter by smart Group Id (optional)
    include_payload = True # bool | include payload field content, default value is 'false'. (optional)
    page_count = 56 # int | number of items per page, default value is '25'. (optional)
    sort_by = 'sort_by_example' # str | sort the query results by input field, default value is 'lastModifiedDateTime'. (optional)
    sort_order = 'sort_order_example' # str | sort the query results order in either ascending or descending, default value is 'desc' for time fields and 'asc' for others. (optional)
    time_range = 'time_range_example' # str | filter by time range, default value is 1 day (optional)

    try:
        api_response = api_instance.alerts_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_group=target_resource_group, target_resource_type=target_resource_type, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, alert_state=alert_state, smart_group_id=smart_group_id, include_payload=include_payload, page_count=page_count, sort_by=sort_by, sort_order=sort_order, time_range=time_range)
        print("The response of DefaultApi->alerts_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| client API version | 
 **target_resource** | **str**| filter by target resource | [optional] 
 **target_resource_group** | **str**| filter by target resource group name | [optional] 
 **target_resource_type** | **str**| filter by target resource type | [optional] 
 **monitor_service** | **str**| filter by monitor service which is the source of the alert object. | [optional] 
 **monitor_condition** | **str**| filter by monitor condition which is the state of the alert at monitor service | [optional] 
 **severity** | **str**| filter by severity | [optional] 
 **alert_state** | **str**| filter by state | [optional] 
 **smart_group_id** | **str**| filter by smart Group Id | [optional] 
 **include_payload** | **bool**| include payload field content, default value is &#39;false&#39;. | [optional] 
 **page_count** | **int**| number of items per page, default value is &#39;25&#39;. | [optional] 
 **sort_by** | **str**| sort the query results by input field, default value is &#39;lastModifiedDateTime&#39;. | [optional] 
 **sort_order** | **str**| sort the query results order in either ascending or descending, default value is &#39;desc&#39; for time fields and &#39;asc&#39; for others. | [optional] 
 **time_range** | **str**| filter by time range, default value is 1 day | [optional] 

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    alert_id = 'alert_id_example' # str | Unique ID of an alert object.
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
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **alert_id** | **str**| Unique ID of an alert object. | 
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



Get the history of the changes of an alert.

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    alert_id = 'alert_id_example' # str | Unique ID of an alert object.
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
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **alert_id** | **str**| Unique ID of an alert object. | 
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
**200** | OK. Returns the list of changes of alert. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alerts_get_summary**
> AlertsSummary alerts_get_summary(subscription_id, api_version, target_resource_group=target_resource_group, time_range=time_range)



Summary of alerts with the count each severity.

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | client API version
    target_resource_group = 'target_resource_group_example' # str | filter by target resource group name (optional)
    time_range = 'time_range_example' # str | filter by time range, default value is 1 day (optional)

    try:
        api_response = api_instance.alerts_get_summary(subscription_id, api_version, target_resource_group=target_resource_group, time_range=time_range)
        print("The response of DefaultApi->alerts_get_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->alerts_get_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| client API version | 
 **target_resource_group** | **str**| filter by target resource group name | [optional] 
 **time_range** | **str**| filter by time range, default value is 1 day | [optional] 

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
**200** | OK. Alert state updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

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



Change the state from unresolved to resolved and all the alerts within the smart group will also be resolved.

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    smart_group_id = 'smart_group_id_example' # str | Smart Group Id
    api_version = 'api_version_example' # str | client API version
    new_state = 'new_state_example' # str | filter by state

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
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **smart_group_id** | **str**| Smart Group Id | 
 **api_version** | **str**| client API version | 
 **new_state** | **str**| filter by state | 

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
**200** | OK. Alert state updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **smart_groups_get_all**
> SmartGroupsList smart_groups_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_group=target_resource_group, target_resource_type=target_resource_type, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, smart_group_state=smart_group_state, time_range=time_range, page_count=page_count, sort_by=sort_by, sort_order=sort_order)

Get all smartGroups within the subscription

List all the smartGroups within the specified subscription. 

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | client API version
    target_resource = 'target_resource_example' # str | filter by target resource (optional)
    target_resource_group = 'target_resource_group_example' # str | filter by target resource group name (optional)
    target_resource_type = 'target_resource_type_example' # str | filter by target resource type (optional)
    monitor_service = 'monitor_service_example' # str | filter by monitor service which is the source of the alert object. (optional)
    monitor_condition = 'monitor_condition_example' # str | filter by monitor condition which is the state of the alert at monitor service (optional)
    severity = 'severity_example' # str | filter by severity (optional)
    smart_group_state = 'smart_group_state_example' # str | filter by state (optional)
    time_range = 'time_range_example' # str | filter by time range, default value is 1 day (optional)
    page_count = 56 # int | number of items per page, default value is '25'. (optional)
    sort_by = 'sort_by_example' # str | sort the query results by input field, default value is 'lastModifiedDateTime'. (optional)
    sort_order = 'sort_order_example' # str | sort the query results order in either ascending or descending, default value is 'desc' for time fields and 'asc' for others. (optional)

    try:
        # Get all smartGroups within the subscription
        api_response = api_instance.smart_groups_get_all(subscription_id, api_version, target_resource=target_resource, target_resource_group=target_resource_group, target_resource_type=target_resource_type, monitor_service=monitor_service, monitor_condition=monitor_condition, severity=severity, smart_group_state=smart_group_state, time_range=time_range, page_count=page_count, sort_by=sort_by, sort_order=sort_order)
        print("The response of DefaultApi->smart_groups_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->smart_groups_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| client API version | 
 **target_resource** | **str**| filter by target resource | [optional] 
 **target_resource_group** | **str**| filter by target resource group name | [optional] 
 **target_resource_type** | **str**| filter by target resource type | [optional] 
 **monitor_service** | **str**| filter by monitor service which is the source of the alert object. | [optional] 
 **monitor_condition** | **str**| filter by monitor condition which is the state of the alert at monitor service | [optional] 
 **severity** | **str**| filter by severity | [optional] 
 **smart_group_state** | **str**| filter by state | [optional] 
 **time_range** | **str**| filter by time range, default value is 1 day | [optional] 
 **page_count** | **int**| number of items per page, default value is &#39;25&#39;. | [optional] 
 **sort_by** | **str**| sort the query results by input field, default value is &#39;lastModifiedDateTime&#39;. | [optional] 
 **sort_order** | **str**| sort the query results order in either ascending or descending, default value is &#39;desc&#39; for time fields and &#39;asc&#39; for others. | [optional] 

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

Get information of smart alerts group.

Get details of smart group.

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    smart_group_id = 'smart_group_id_example' # str | Smart Group Id
    api_version = 'api_version_example' # str | client API version

    try:
        # Get information of smart alerts group.
        api_response = api_instance.smart_groups_get_by_id(subscription_id, smart_group_id, api_version)
        print("The response of DefaultApi->smart_groups_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->smart_groups_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **smart_group_id** | **str**| Smart Group Id | 
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



Get the history of the changes of smart group.

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
    subscription_id = 'subscription_id_example' # str | subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    smart_group_id = 'smart_group_id_example' # str | Smart Group Id
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
 **subscription_id** | **str**| subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **smart_group_id** | **str**| Smart Group Id | 
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

