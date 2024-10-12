# openapi_client.FailedConnectionsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_wireless_failed_connections_1**](FailedConnectionsApi.md#get_network_wireless_failed_connections_1) | **GET** /networks/{networkId}/wireless/failedConnections | List of all failed client connection events on this network in a given time range


# **get_network_wireless_failed_connections_1**
> List[GetNetworkWirelessFailedConnections200ResponseInner] get_network_wireless_failed_connections_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, serial=serial, client_id=client_id)

List of all failed client connection events on this network in a given time range

List of all failed client connection events on this network in a given time range

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_failed_connections200_response_inner import GetNetworkWirelessFailedConnections200ResponseInner
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
    api_instance = openapi_client.FailedConnectionsApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    serial = 'serial_example' # str | Filter by AP (optional)
    client_id = 'client_id_example' # str | Filter by client MAC (optional)

    try:
        # List of all failed client connection events on this network in a given time range
        api_response = api_instance.get_network_wireless_failed_connections_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, serial=serial, client_id=client_id)
        print("The response of FailedConnectionsApi->get_network_wireless_failed_connections_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailedConnectionsApi->get_network_wireless_failed_connections_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 
 **serial** | **str**| Filter by AP | [optional] 
 **client_id** | **str**| Filter by client MAC | [optional] 

### Return type

[**List[GetNetworkWirelessFailedConnections200ResponseInner]**](GetNetworkWirelessFailedConnections200ResponseInner.md)

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

