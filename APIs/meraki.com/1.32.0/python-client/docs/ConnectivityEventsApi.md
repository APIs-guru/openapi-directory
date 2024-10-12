# openapi_client.ConnectivityEventsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_wireless_client_connectivity_events_2**](ConnectivityEventsApi.md#get_network_wireless_client_connectivity_events_2) | **GET** /networks/{networkId}/wireless/clients/{clientId}/connectivityEvents | List the wireless connectivity events for a client within a network in the timespan.


# **get_network_wireless_client_connectivity_events_2**
> List[object] get_network_wireless_client_connectivity_events_2(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, types=types, included_severities=included_severities, band=band, ssid_number=ssid_number, device_serial=device_serial)

List the wireless connectivity events for a client within a network in the timespan.

List the wireless connectivity events for a client within a network in the timespan.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.ConnectivityEventsApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    types = ['types_example'] # List[str] | A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam', 'connection' and/or 'sticky'. (optional)
    included_severities = ['included_severities_example'] # List[str] | A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5', '6'). (optional)
    ssid_number = 56 # int | An SSID number to include. If not specified, events for all SSIDs will be returned. (optional)
    device_serial = 'device_serial_example' # str | Filter results by an AP's serial number. (optional)

    try:
        # List the wireless connectivity events for a client within a network in the timespan.
        api_response = api_instance.get_network_wireless_client_connectivity_events_2(network_id, client_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, t0=t0, t1=t1, timespan=timespan, types=types, included_severities=included_severities, band=band, ssid_number=ssid_number, device_serial=device_serial)
        print("The response of ConnectivityEventsApi->get_network_wireless_client_connectivity_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectivityEventsApi->get_network_wireless_client_connectivity_events_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **types** | [**List[str]**](str.md)| A list of event types to include. If not specified, events of all types will be returned. Valid types are &#39;assoc&#39;, &#39;disassoc&#39;, &#39;auth&#39;, &#39;deauth&#39;, &#39;dns&#39;, &#39;dhcp&#39;, &#39;roam&#39;, &#39;connection&#39; and/or &#39;sticky&#39;. | [optional] 
 **included_severities** | [**List[str]**](str.md)| A list of severities to include. If not specified, events of all severities will be returned. Valid severities are &#39;good&#39;, &#39;info&#39;, &#39;warn&#39; and/or &#39;bad&#39;. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39;, &#39;6&#39;). | [optional] 
 **ssid_number** | **int**| An SSID number to include. If not specified, events for all SSIDs will be returned. | [optional] 
 **device_serial** | **str**| Filter results by an AP&#39;s serial number. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

