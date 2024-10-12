# openapi_client.BaselineApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**baseline_get**](BaselineApi.md#baseline_get) | **GET** /{resourceUri}/providers/microsoft.insights/baseline | 
[**metric_baseline_get**](BaselineApi.md#metric_baseline_get) | **GET** /{resourceUri}/providers/microsoft.insights/baseline/{metricName} | 


# **baseline_get**
> BaselineResponse baseline_get(resource_uri, api_version, metricnames=metricnames, timespan=timespan, interval=interval, aggregation=aggregation, sensitivities=sensitivities, result_type=result_type, metricnamespace=metricnamespace, filter=filter)



**Gets the baseline values for a resource**.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.baseline_response import BaselineResponse
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
    api_instance = openapi_client.BaselineApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
    api_version = 'api_version_example' # str | Client Api Version.
    metricnames = 'metricnames_example' # str | The names of the metrics (comma separated) to retrieve. (optional)
    timespan = 'timespan_example' # str | The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. (optional)
    interval = 'interval_example' # str | The interval (i.e. timegrain) of the query. (optional)
    aggregation = 'aggregation_example' # str | The aggregation type of the metric to retrieve the baseline for. (optional)
    sensitivities = 'sensitivities_example' # str | The list of sensitivities (comma separated) to retrieve. (optional)
    result_type = 'result_type_example' # str | Allows retrieving only metadata of the baseline. On data request all information is retrieved. (optional)
    metricnamespace = 'metricnamespace_example' # str | Metric namespace to query metric definitions for. (optional)
    filter = 'filter_example' # str | The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for. (optional)

    try:
        api_response = api_instance.baseline_get(resource_uri, api_version, metricnames=metricnames, timespan=timespan, interval=interval, aggregation=aggregation, sensitivities=sensitivities, result_type=result_type, metricnamespace=metricnamespace, filter=filter)
        print("The response of BaselineApi->baseline_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BaselineApi->baseline_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1 | 
 **api_version** | **str**| Client Api Version. | 
 **metricnames** | **str**| The names of the metrics (comma separated) to retrieve. | [optional] 
 **timespan** | **str**| The timespan of the query. It is a string with the following format &#39;startDateTime_ISO/endDateTime_ISO&#39;. | [optional] 
 **interval** | **str**| The interval (i.e. timegrain) of the query. | [optional] 
 **aggregation** | **str**| The aggregation type of the metric to retrieve the baseline for. | [optional] 
 **sensitivities** | **str**| The list of sensitivities (comma separated) to retrieve. | [optional] 
 **result_type** | **str**| Allows retrieving only metadata of the baseline. On data request all information is retrieved. | [optional] 
 **metricnamespace** | **str**| Metric namespace to query metric definitions for. | [optional] 
 **filter** | **str**| The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric&#39;s time series, in which a baseline is requested for. | [optional] 

### Return type

[**BaselineResponse**](BaselineResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metric_baseline_get**
> BaselineResponse metric_baseline_get(resource_uri, metric_name, api_version, timespan=timespan, interval=interval, aggregation=aggregation, sensitivities=sensitivities, result_type=result_type, metricnamespace=metricnamespace, filter=filter)



**Gets the baseline values for a specific metric**.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.baseline_response import BaselineResponse
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
    api_instance = openapi_client.BaselineApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
    metric_name = 'metric_name_example' # str | The name of the metric to retrieve the baseline for.
    api_version = 'api_version_example' # str | Client Api Version.
    timespan = 'timespan_example' # str | The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. (optional)
    interval = 'interval_example' # str | The interval (i.e. timegrain) of the query. (optional)
    aggregation = 'aggregation_example' # str | The aggregation type of the metric to retrieve the baseline for. (optional)
    sensitivities = 'sensitivities_example' # str | The list of sensitivities (comma separated) to retrieve. (optional)
    result_type = 'result_type_example' # str | Allows retrieving only metadata of the baseline. On data request all information is retrieved. (optional)
    metricnamespace = 'metricnamespace_example' # str | Metric namespace to query metric definitions for. (optional)
    filter = 'filter_example' # str | The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric's time series, in which a baseline is requested for. (optional)

    try:
        api_response = api_instance.metric_baseline_get(resource_uri, metric_name, api_version, timespan=timespan, interval=interval, aggregation=aggregation, sensitivities=sensitivities, result_type=result_type, metricnamespace=metricnamespace, filter=filter)
        print("The response of BaselineApi->metric_baseline_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BaselineApi->metric_baseline_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1 | 
 **metric_name** | **str**| The name of the metric to retrieve the baseline for. | 
 **api_version** | **str**| Client Api Version. | 
 **timespan** | **str**| The timespan of the query. It is a string with the following format &#39;startDateTime_ISO/endDateTime_ISO&#39;. | [optional] 
 **interval** | **str**| The interval (i.e. timegrain) of the query. | [optional] 
 **aggregation** | **str**| The aggregation type of the metric to retrieve the baseline for. | [optional] 
 **sensitivities** | **str**| The list of sensitivities (comma separated) to retrieve. | [optional] 
 **result_type** | **str**| Allows retrieving only metadata of the baseline. On data request all information is retrieved. | [optional] 
 **metricnamespace** | **str**| Metric namespace to query metric definitions for. | [optional] 
 **filter** | **str**| The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metric&#39;s time series, in which a baseline is requested for. | [optional] 

### Return type

[**BaselineResponse**](BaselineResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

