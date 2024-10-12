# openapi_client.CellularUsageHistoryApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_sm_device_cellular_usage_history_2**](CellularUsageHistoryApi.md#get_network_sm_device_cellular_usage_history_2) | **GET** /networks/{networkId}/sm/devices/{deviceId}/cellularUsageHistory | Return the client&#39;s daily cellular data usage history


# **get_network_sm_device_cellular_usage_history_2**
> List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner] get_network_sm_device_cellular_usage_history_2(network_id, device_id)

Return the client's daily cellular data usage history

Return the client's daily cellular data usage history. Usage data is in kilobytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_sm_device_cellular_usage_history200_response_inner import GetNetworkSmDeviceCellularUsageHistory200ResponseInner
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
    api_instance = openapi_client.CellularUsageHistoryApi(api_client)
    network_id = 'network_id_example' # str | 
    device_id = 'device_id_example' # str | 

    try:
        # Return the client's daily cellular data usage history
        api_response = api_instance.get_network_sm_device_cellular_usage_history_2(network_id, device_id)
        print("The response of CellularUsageHistoryApi->get_network_sm_device_cellular_usage_history_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellularUsageHistoryApi->get_network_sm_device_cellular_usage_history_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **device_id** | **str**|  | 

### Return type

[**List[GetNetworkSmDeviceCellularUsageHistory200ResponseInner]**](GetNetworkSmDeviceCellularUsageHistory200ResponseInner.md)

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

