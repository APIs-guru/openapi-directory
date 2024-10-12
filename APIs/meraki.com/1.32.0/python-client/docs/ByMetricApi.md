# openapi_client.ByMetricApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_sensor_alerts_current_overview_by_metric_4**](ByMetricApi.md#get_network_sensor_alerts_current_overview_by_metric_4) | **GET** /networks/{networkId}/sensor/alerts/current/overview/byMetric | Return an overview of currently alerting sensors by metric
[**get_network_sensor_alerts_overview_by_metric_3**](ByMetricApi.md#get_network_sensor_alerts_overview_by_metric_3) | **GET** /networks/{networkId}/sensor/alerts/overview/byMetric | Return an overview of alert occurrences over a timespan, by metric


# **get_network_sensor_alerts_current_overview_by_metric_4**
> GetNetworkSensorAlertsCurrentOverviewByMetric200Response get_network_sensor_alerts_current_overview_by_metric_4(network_id)

Return an overview of currently alerting sensors by metric

Return an overview of currently alerting sensors by metric

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_current_overview_by_metric200_response import GetNetworkSensorAlertsCurrentOverviewByMetric200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ByMetricApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return an overview of currently alerting sensors by metric
        api_response = api_instance.get_network_sensor_alerts_current_overview_by_metric_4(network_id)
        print("The response of ByMetricApi->get_network_sensor_alerts_current_overview_by_metric_4:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ByMetricApi->get_network_sensor_alerts_current_overview_by_metric_4: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkSensorAlertsCurrentOverviewByMetric200Response**](GetNetworkSensorAlertsCurrentOverviewByMetric200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_sensor_alerts_overview_by_metric_3**
> List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner] get_network_sensor_alerts_overview_by_metric_3(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)

Return an overview of alert occurrences over a timespan, by metric

Return an overview of alert occurrences over a timespan, by metric

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sensor_alerts_overview_by_metric200_response_inner import GetNetworkSensorAlertsOverviewByMetric200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ByMetricApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    interval = 56 # int | The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. (optional)

    try:
        # Return an overview of alert occurrences over a timespan, by metric
        api_response = api_instance.get_network_sensor_alerts_overview_by_metric_3(network_id, t0=t0, t1=t1, timespan=timespan, interval=interval)
        print("The response of ByMetricApi->get_network_sensor_alerts_overview_by_metric_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ByMetricApi->get_network_sensor_alerts_overview_by_metric_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **interval** | **int**| The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800. | [optional] 

### Return type

[**List[GetNetworkSensorAlertsOverviewByMetric200ResponseInner]**](GetNetworkSensorAlertsOverviewByMetric200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

