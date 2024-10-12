# openapi_client.DashboardApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboards_create_or_update**](DashboardApi.md#dashboards_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName} | 
[**dashboards_delete**](DashboardApi.md#dashboards_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName} | 
[**dashboards_get**](DashboardApi.md#dashboards_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName} | 
[**dashboards_list_by_resource_group**](DashboardApi.md#dashboards_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards | 
[**dashboards_list_by_subscription**](DashboardApi.md#dashboards_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Portal/dashboards | 
[**dashboards_update**](DashboardApi.md#dashboards_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Portal/dashboards/{dashboardName} | 


# **dashboards_create_or_update**
> Dashboard dashboards_create_or_update(subscription_id, resource_group_name, dashboard_name, api_version, dashboard)



Creates or updates a Dashboard.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dashboard import Dashboard
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
    api_instance = openapi_client.DashboardApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    dashboard_name = 'dashboard_name_example' # str | The name of the dashboard.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    dashboard = openapi_client.Dashboard() # Dashboard | The parameters required to create or update a dashboard.

    try:
        api_response = api_instance.dashboards_create_or_update(subscription_id, resource_group_name, dashboard_name, api_version, dashboard)
        print("The response of DashboardApi->dashboards_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardApi->dashboards_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **dashboard_name** | **str**| The name of the dashboard. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **dashboard** | [**Dashboard**](Dashboard.md)| The parameters required to create or update a dashboard. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Resource already exists. |  -  |
**201** | Created response definition. Resource has been created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboards_delete**
> dashboards_delete(subscription_id, resource_group_name, dashboard_name, api_version)



Deletes the Dashboard.

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
    api_instance = openapi_client.DashboardApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    dashboard_name = 'dashboard_name_example' # str | The name of the dashboard.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_instance.dashboards_delete(subscription_id, resource_group_name, dashboard_name, api_version)
    except Exception as e:
        print("Exception when calling DashboardApi->dashboards_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **dashboard_name** | **str**| The name of the dashboard. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

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
**200** | OK response definition. |  -  |
**204** | OK resource was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboards_get**
> Dashboard dashboards_get(subscription_id, resource_group_name, dashboard_name, api_version)



Gets the Dashboard.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dashboard import Dashboard
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
    api_instance = openapi_client.DashboardApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    dashboard_name = 'dashboard_name_example' # str | The name of the dashboard.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.dashboards_get(subscription_id, resource_group_name, dashboard_name, api_version)
        print("The response of DashboardApi->dashboards_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardApi->dashboards_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **dashboard_name** | **str**| The name of the dashboard. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboards_list_by_resource_group**
> DashboardListResult dashboards_list_by_resource_group(subscription_id, resource_group_name, api_version)



Gets all the Dashboards within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dashboard_list_result import DashboardListResult
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
    api_instance = openapi_client.DashboardApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.dashboards_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DashboardApi->dashboards_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardApi->dashboards_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**DashboardListResult**](DashboardListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of Dashboards. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboards_list_by_subscription**
> DashboardListResult dashboards_list_by_subscription(subscription_id, api_version)



Gets all the dashboards within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dashboard_list_result import DashboardListResult
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
    api_instance = openapi_client.DashboardApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.dashboards_list_by_subscription(subscription_id, api_version)
        print("The response of DashboardApi->dashboards_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardApi->dashboards_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**DashboardListResult**](DashboardListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of dashboards. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dashboards_update**
> Dashboard dashboards_update(subscription_id, resource_group_name, dashboard_name, api_version, dashboard)



Updates an existing Dashboard.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dashboard import Dashboard
from openapi_client.models.patchable_dashboard import PatchableDashboard
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
    api_instance = openapi_client.DashboardApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    dashboard_name = 'dashboard_name_example' # str | The name of the dashboard.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    dashboard = openapi_client.PatchableDashboard() # PatchableDashboard | The updatable fields of a Dashboard.

    try:
        api_response = api_instance.dashboards_update(subscription_id, resource_group_name, dashboard_name, api_version, dashboard)
        print("The response of DashboardApi->dashboards_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardApi->dashboards_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **dashboard_name** | **str**| The name of the dashboard. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **dashboard** | [**PatchableDashboard**](PatchableDashboard.md)| The updatable fields of a Dashboard. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

