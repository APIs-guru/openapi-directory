# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_log_alerts_create_or_update**](DefaultApi.md#activity_log_alerts_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName} | 
[**activity_log_alerts_delete**](DefaultApi.md#activity_log_alerts_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName} | 
[**activity_log_alerts_get**](DefaultApi.md#activity_log_alerts_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName} | 
[**activity_log_alerts_list_by_resource_group**](DefaultApi.md#activity_log_alerts_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts | 
[**activity_log_alerts_list_by_subscription_id**](DefaultApi.md#activity_log_alerts_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/activityLogAlerts | 
[**activity_log_alerts_update**](DefaultApi.md#activity_log_alerts_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/activityLogAlerts/{activityLogAlertName} | 


# **activity_log_alerts_create_or_update**
> ActivityLogAlertResource activity_log_alerts_create_or_update(subscription_id, resource_group_name, activity_log_alert_name, api_version, activity_log_alert)



Create a new activity log alert or update an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_log_alert_resource import ActivityLogAlertResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    activity_log_alert_name = 'activity_log_alert_name_example' # str | The name of the activity log alert.
    api_version = 'api_version_example' # str | Client Api Version.
    activity_log_alert = openapi_client.ActivityLogAlertResource() # ActivityLogAlertResource | The activity log alert to create or use for the update.

    try:
        api_response = api_instance.activity_log_alerts_create_or_update(subscription_id, resource_group_name, activity_log_alert_name, api_version, activity_log_alert)
        print("The response of DefaultApi->activity_log_alerts_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->activity_log_alerts_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **activity_log_alert_name** | **str**| The name of the activity log alert. | 
 **api_version** | **str**| Client Api Version. | 
 **activity_log_alert** | [**ActivityLogAlertResource**](ActivityLogAlertResource.md)| The activity log alert to create or use for the update. | 

### Return type

[**ActivityLogAlertResource**](ActivityLogAlertResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing activity log alert was successfully updated. |  -  |
**201** | A new activity log alert was successfully created. |  -  |
**0** | An error occurred and the activity log alert could not be created or updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activity_log_alerts_delete**
> activity_log_alerts_delete(subscription_id, resource_group_name, activity_log_alert_name, api_version)



Delete an activity log alert.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    activity_log_alert_name = 'activity_log_alert_name_example' # str | The name of the activity log alert.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.activity_log_alerts_delete(subscription_id, resource_group_name, activity_log_alert_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->activity_log_alerts_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **activity_log_alert_name** | **str**| The name of the activity log alert. | 
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
**200** | The activity log alert was successfully deleted. |  -  |
**204** | The activity log alert does not exist. It may have already been deleted. |  -  |
**0** | An error occurred and the activity log alert could not be deleted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activity_log_alerts_get**
> ActivityLogAlertResource activity_log_alerts_get(subscription_id, resource_group_name, activity_log_alert_name, api_version)



Get an activity log alert.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_log_alert_resource import ActivityLogAlertResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    activity_log_alert_name = 'activity_log_alert_name_example' # str | The name of the activity log alert.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.activity_log_alerts_get(subscription_id, resource_group_name, activity_log_alert_name, api_version)
        print("The response of DefaultApi->activity_log_alerts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->activity_log_alerts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **activity_log_alert_name** | **str**| The name of the activity log alert. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActivityLogAlertResource**](ActivityLogAlertResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the activity log alert could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activity_log_alerts_list_by_resource_group**
> ActivityLogAlertList activity_log_alerts_list_by_resource_group(subscription_id, resource_group_name, api_version)



Get a list of all activity log alerts in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_log_alert_list import ActivityLogAlertList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.activity_log_alerts_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DefaultApi->activity_log_alerts_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->activity_log_alerts_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActivityLogAlertList**](ActivityLogAlertList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of activity log alerts could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activity_log_alerts_list_by_subscription_id**
> ActivityLogAlertList activity_log_alerts_list_by_subscription_id(subscription_id, api_version)



Get a list of all activity log alerts in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_log_alert_list import ActivityLogAlertList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.activity_log_alerts_list_by_subscription_id(subscription_id, api_version)
        print("The response of DefaultApi->activity_log_alerts_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->activity_log_alerts_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**ActivityLogAlertList**](ActivityLogAlertList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request succeeded. |  -  |
**0** | An error occurred and the list of activity log alerts could not be retrieved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activity_log_alerts_update**
> ActivityLogAlertResource activity_log_alerts_update(subscription_id, resource_group_name, activity_log_alert_name, api_version, activity_log_alert_patch)



Updates an existing ActivityLogAlertResource's tags. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activity_log_alert_patch_body import ActivityLogAlertPatchBody
from openapi_client.models.activity_log_alert_resource import ActivityLogAlertResource
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    activity_log_alert_name = 'activity_log_alert_name_example' # str | The name of the activity log alert.
    api_version = 'api_version_example' # str | Client Api Version.
    activity_log_alert_patch = openapi_client.ActivityLogAlertPatchBody() # ActivityLogAlertPatchBody | Parameters supplied to the operation.

    try:
        api_response = api_instance.activity_log_alerts_update(subscription_id, resource_group_name, activity_log_alert_name, api_version, activity_log_alert_patch)
        print("The response of DefaultApi->activity_log_alerts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->activity_log_alerts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **activity_log_alert_name** | **str**| The name of the activity log alert. | 
 **api_version** | **str**| Client Api Version. | 
 **activity_log_alert_patch** | [**ActivityLogAlertPatchBody**](ActivityLogAlertPatchBody.md)| Parameters supplied to the operation. | 

### Return type

[**ActivityLogAlertResource**](ActivityLogAlertResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing activity log alert was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

