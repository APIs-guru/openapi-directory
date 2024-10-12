# openapi_client.CostInsightApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cost_insight_get_resource**](CostInsightApi.md#cost_insight_get_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costinsights/{name} | 
[**cost_insight_list**](CostInsightApi.md#cost_insight_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costinsights | 
[**cost_insight_refresh_data**](CostInsightApi.md#cost_insight_refresh_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costinsights/{name}/refreshData | 


# **cost_insight_get_resource**
> CostInsight cost_insight_get_resource(subscription_id, resource_group_name, lab_name, name, api_version)



Get cost insight.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.cost_insight import CostInsight
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
    api_instance = openapi_client.CostInsightApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the cost insight.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_response = api_instance.cost_insight_get_resource(subscription_id, resource_group_name, lab_name, name, api_version)
        print("The response of CostInsightApi->cost_insight_get_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostInsightApi->cost_insight_get_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the cost insight. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]

### Return type

[**CostInsight**](CostInsight.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cost_insight_list**
> ResponseWithContinuationCostInsight cost_insight_list(subscription_id, resource_group_name, lab_name, api_version, filter=filter, top=top, order_by=order_by)



List cost insights.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.response_with_continuation_cost_insight import ResponseWithContinuationCostInsight
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
    api_instance = openapi_client.CostInsightApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    order_by = 'order_by_example' # str |  (optional)

    try:
        api_response = api_instance.cost_insight_list(subscription_id, resource_group_name, lab_name, api_version, filter=filter, top=top, order_by=order_by)
        print("The response of CostInsightApi->cost_insight_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostInsightApi->cost_insight_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]
 **filter** | **str**| The filter to apply on the operation. | [optional] 
 **top** | **int**|  | [optional] 
 **order_by** | **str**|  | [optional] 

### Return type

[**ResponseWithContinuationCostInsight**](ResponseWithContinuationCostInsight.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cost_insight_refresh_data**
> cost_insight_refresh_data(subscription_id, resource_group_name, lab_name, name, api_version)



Refresh Lab's Cost Insight Data. This operation can take a while to complete.

### Example

* OAuth Authentication (oauth2):

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
    api_instance = openapi_client.CostInsightApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the cost insight.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_instance.cost_insight_refresh_data(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling CostInsightApi->cost_insight_refresh_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the cost insight. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

