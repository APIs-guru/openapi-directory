# openapi_client.WorkloadInsightsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**components_summary_list**](WorkloadInsightsApi.md#components_summary_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.WorkloadMonitor/componentsSummary | Get subscription wide details of components.
[**monitor_instances_summary_list**](WorkloadInsightsApi.md#monitor_instances_summary_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.WorkloadMonitor/monitorInstancesSummary | Get subscription wide health instances.
[**operations_list**](WorkloadInsightsApi.md#operations_list) | **GET** /providers/Microsoft.WorkloadMonitor/operations | Gets the details of all operations possible on the resource provider.


# **components_summary_list**
> ComponentsCollection components_summary_list(subscription_id, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)

Get subscription wide details of components.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.components_collection import ComponentsCollection
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
    api_instance = openapi_client.WorkloadInsightsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    select = 'select_example' # str | Properties to be returned in the response. (optional)
    filter = 'filter_example' # str | Filter to be applied on the operation. (optional)
    apply = 'apply_example' # str | Apply aggregation. (optional)
    orderby = 'orderby_example' # str | Sort the result on one or more properties. (optional)
    expand = 'expand_example' # str | Include properties inline in the response. (optional)
    top = 'top_example' # str | Limit the result to the specified number of rows. (optional)
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Get subscription wide details of components.
        api_response = api_instance.components_summary_list(subscription_id, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)
        print("The response of WorkloadInsightsApi->components_summary_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkloadInsightsApi->components_summary_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **select** | **str**| Properties to be returned in the response. | [optional] 
 **filter** | **str**| Filter to be applied on the operation. | [optional] 
 **apply** | **str**| Apply aggregation. | [optional] 
 **orderby** | **str**| Sort the result on one or more properties. | [optional] 
 **expand** | **str**| Include properties inline in the response. | [optional] 
 **top** | **str**| Limit the result to the specified number of rows. | [optional] 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**ComponentsCollection**](ComponentsCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. At least one component found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monitor_instances_summary_list**
> MonitorInstancesCollection monitor_instances_summary_list(subscription_id, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)

Get subscription wide health instances.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.monitor_instances_collection import MonitorInstancesCollection
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
    api_instance = openapi_client.WorkloadInsightsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    select = 'select_example' # str | Properties to be returned in the response. (optional)
    filter = 'filter_example' # str | Filter to be applied on the operation. (optional)
    apply = 'apply_example' # str | Apply aggregation. (optional)
    orderby = 'orderby_example' # str | Sort the result on one or more properties. (optional)
    expand = 'expand_example' # str | Include properties inline in the response. (optional)
    top = 'top_example' # str | Limit the result to the specified number of rows. (optional)
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Get subscription wide health instances.
        api_response = api_instance.monitor_instances_summary_list(subscription_id, api_version, select=select, filter=filter, apply=apply, orderby=orderby, expand=expand, top=top, skiptoken=skiptoken)
        print("The response of WorkloadInsightsApi->monitor_instances_summary_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkloadInsightsApi->monitor_instances_summary_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **select** | **str**| Properties to be returned in the response. | [optional] 
 **filter** | **str**| Filter to be applied on the operation. | [optional] 
 **apply** | **str**| Apply aggregation. | [optional] 
 **orderby** | **str**| Sort the result on one or more properties. | [optional] 
 **expand** | **str**| Include properties inline in the response. | [optional] 
 **top** | **str**| Limit the result to the specified number of rows. | [optional] 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**MonitorInstancesCollection**](MonitorInstancesCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationListResult operations_list(api_version, skiptoken=skiptoken)

Gets the details of all operations possible on the resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list_result import OperationListResult
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
    api_instance = openapi_client.WorkloadInsightsApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    skiptoken = 'skiptoken_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        # Gets the details of all operations possible on the resource provider.
        api_response = api_instance.operations_list(api_version, skiptoken=skiptoken)
        print("The response of WorkloadInsightsApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkloadInsightsApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **skiptoken** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**OperationListResult**](OperationListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

