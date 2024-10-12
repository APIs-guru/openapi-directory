# openapi_client.BaselineApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metric_baseline_calculate_baseline**](BaselineApi.md#metric_baseline_calculate_baseline) | **POST** /{resourceUri}/providers/microsoft.insights/calculatebaseline | 


# **metric_baseline_calculate_baseline**
> CalculateBaselineResponse metric_baseline_calculate_baseline(resource_uri, api_version, time_series_information)



**Lists the baseline values for a resource**.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.calculate_baseline_response import CalculateBaselineResponse
from openapi_client.models.time_series_information import TimeSeriesInformation
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
    time_series_information = openapi_client.TimeSeriesInformation() # TimeSeriesInformation | Information that need to be specified to calculate a baseline on a time series.

    try:
        api_response = api_instance.metric_baseline_calculate_baseline(resource_uri, api_version, time_series_information)
        print("The response of BaselineApi->metric_baseline_calculate_baseline:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BaselineApi->metric_baseline_calculate_baseline: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1 | 
 **api_version** | **str**| Client Api Version. | 
 **time_series_information** | [**TimeSeriesInformation**](TimeSeriesInformation.md)| Information that need to be specified to calculate a baseline on a time series. | 

### Return type

[**CalculateBaselineResponse**](CalculateBaselineResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

