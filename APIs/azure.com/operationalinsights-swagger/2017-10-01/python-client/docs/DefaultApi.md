# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**query_execute**](DefaultApi.md#query_execute) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/query | Execute an Analytics query
[**query_get**](DefaultApi.md#query_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/query | Execute an Analytics query


# **query_execute**
> QueryResults query_execute(subscription_id, resource_group_name, workspace_name, api_version, body)

Execute an Analytics query

Executes an Analytics query for data. [Here](https://dev.loganalytics.io/documentation/Using-the-API) is an example for using POST with an Analytics query.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_body import QueryBody
from openapi_client.models.query_results import QueryResults
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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics workspace.
    api_version = '2017-10-01' # str | Client API version. (default to '2017-10-01')
    body = openapi_client.QueryBody() # QueryBody | The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)

    try:
        # Execute an Analytics query
        api_response = api_instance.query_execute(subscription_id, resource_group_name, workspace_name, api_version, body)
        print("The response of DefaultApi->query_execute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_execute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics workspace. | 
 **api_version** | **str**| Client API version. | [default to &#39;2017-10-01&#39;]
 **body** | [**QueryBody**](QueryBody.md)| The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/) | 

### Return type

[**QueryResults**](QueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The API call succeeded and the Analytics query result is in the response payload |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_get**
> QueryResults query_get(subscription_id, resource_group_name, workspace_name, query, api_version, timespan=timespan)

Execute an Analytics query

Executes an Analytics query for data

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_results import QueryResults
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
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    workspace_name = 'workspace_name_example' # str | Name of the Log Analytics workspace.
    query = 'query_example' # str | The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
    api_version = '2017-10-01' # str | Client API version. (default to '2017-10-01')
    timespan = 'timespan_example' # str | Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression. (optional)

    try:
        # Execute an Analytics query
        api_response = api_instance.query_get(subscription_id, resource_group_name, workspace_name, query, api_version, timespan=timespan)
        print("The response of DefaultApi->query_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **workspace_name** | **str**| Name of the Log Analytics workspace. | 
 **query** | **str**| The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/) | 
 **api_version** | **str**| Client API version. | [default to &#39;2017-10-01&#39;]
 **timespan** | **str**| Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression. | [optional] 

### Return type

[**QueryResults**](QueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The API call succeeded and the Analytics query result is in the response payload |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

