# openapi_client.CostApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cost_get_resource**](CostApi.md#cost_get_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name} | 
[**cost_list**](CostApi.md#cost_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs | 
[**cost_refresh_data**](CostApi.md#cost_refresh_data) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/costs/{name}/refreshData | 


# **cost_get_resource**
> Cost cost_get_resource(subscription_id, resource_group_name, lab_name, name, api_version)



Get cost.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.cost import Cost
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
    api_instance = openapi_client.CostApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the cost.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_response = api_instance.cost_get_resource(subscription_id, resource_group_name, lab_name, name, api_version)
        print("The response of CostApi->cost_get_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostApi->cost_get_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the cost. | 
 **api_version** | **str**| Client API version. | [default to &#39;2015-05-21-preview&#39;]

### Return type

[**Cost**](Cost.md)

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

# **cost_list**
> ResponseWithContinuationCost cost_list(subscription_id, resource_group_name, lab_name, api_version, filter=filter, top=top, order_by=order_by)



List costs.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.response_with_continuation_cost import ResponseWithContinuationCost
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
    api_instance = openapi_client.CostApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')
    filter = 'filter_example' # str | The filter to apply on the operation. (optional)
    top = 56 # int |  (optional)
    order_by = 'order_by_example' # str |  (optional)

    try:
        api_response = api_instance.cost_list(subscription_id, resource_group_name, lab_name, api_version, filter=filter, top=top, order_by=order_by)
        print("The response of CostApi->cost_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CostApi->cost_list: %s\n" % e)
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

[**ResponseWithContinuationCost**](ResponseWithContinuationCost.md)

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

# **cost_refresh_data**
> cost_refresh_data(subscription_id, resource_group_name, lab_name, name, api_version)



Refresh Lab's Cost Data. This operation can take a while to complete.

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
    api_instance = openapi_client.CostApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the cost.
    api_version = '2015-05-21-preview' # str | Client API version. (default to '2015-05-21-preview')

    try:
        api_instance.cost_refresh_data(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling CostApi->cost_refresh_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the cost. | 
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

