# openapi_client.ChannelUtilizationHistoryApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_wireless_channel_utilization_history_1**](ChannelUtilizationHistoryApi.md#get_network_wireless_channel_utilization_history_1) | **GET** /networks/{networkId}/wireless/channelUtilizationHistory | Return AP channel utilization over time for a device or network client


# **get_network_wireless_channel_utilization_history_1**
> List[GetNetworkWirelessChannelUtilizationHistory200ResponseInner] get_network_wireless_channel_utilization_history_1(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band)

Return AP channel utilization over time for a device or network client

Return AP channel utilization over time for a device or network client

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_channel_utilization_history200_response_inner import GetNetworkWirelessChannelUtilizationHistory200ResponseInner
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
    api_instance = openapi_client.ChannelUtilizationHistoryApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400. (optional)
    auto_resolution = True # bool | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. (optional)
    client_id = 'client_id_example' # str | Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history. (optional)
    device_serial = 'device_serial_example' # str | Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified. (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). (optional)

    try:
        # Return AP channel utilization over time for a device or network client
        api_response = api_instance.get_network_wireless_channel_utilization_history_1(network_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, auto_resolution=auto_resolution, client_id=client_id, device_serial=device_serial, ap_tag=ap_tag, band=band)
        print("The response of ChannelUtilizationHistoryApi->get_network_wireless_channel_utilization_history_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelUtilizationHistoryApi->get_network_wireless_channel_utilization_history_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400. | [optional] 
 **auto_resolution** | **bool**| Automatically select a data resolution based on the given timespan; this overrides the value specified by the &#39;resolution&#39; parameter. The default setting is false. | [optional] 
 **client_id** | **str**| Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client&#39;s connection history. | [optional] 
 **device_serial** | **str**| Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified. | [optional] 
 **ap_tag** | **str**| Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). | [optional] 

### Return type

[**List[GetNetworkWirelessChannelUtilizationHistory200ResponseInner]**](GetNetworkWirelessChannelUtilizationHistory200ResponseInner.md)

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

