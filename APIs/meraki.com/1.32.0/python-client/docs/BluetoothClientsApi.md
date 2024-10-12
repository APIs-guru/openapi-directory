# openapi_client.BluetoothClientsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_bluetooth_client_1**](BluetoothClientsApi.md#get_network_bluetooth_client_1) | **GET** /networks/{networkId}/bluetoothClients/{bluetoothClientId} | Return a Bluetooth client
[**get_network_bluetooth_clients_1**](BluetoothClientsApi.md#get_network_bluetooth_clients_1) | **GET** /networks/{networkId}/bluetoothClients | List the Bluetooth clients seen by APs in this network


# **get_network_bluetooth_client_1**
> object get_network_bluetooth_client_1(network_id, bluetooth_client_id, include_connectivity_history=include_connectivity_history, connectivity_history_timespan=connectivity_history_timespan)

Return a Bluetooth client

Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.

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
    api_instance = openapi_client.BluetoothClientsApi(api_client)
    network_id = 'network_id_example' # str | 
    bluetooth_client_id = 'bluetooth_client_id_example' # str | 
    include_connectivity_history = True # bool | Include the connectivity history for this client (optional)
    connectivity_history_timespan = 56 # int | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. (optional)

    try:
        # Return a Bluetooth client
        api_response = api_instance.get_network_bluetooth_client_1(network_id, bluetooth_client_id, include_connectivity_history=include_connectivity_history, connectivity_history_timespan=connectivity_history_timespan)
        print("The response of BluetoothClientsApi->get_network_bluetooth_client_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BluetoothClientsApi->get_network_bluetooth_client_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **bluetooth_client_id** | **str**|  | 
 **include_connectivity_history** | **bool**| Include the connectivity history for this client | [optional] 
 **connectivity_history_timespan** | **int**| The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. | [optional] 

### Return type

**object**

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

# **get_network_bluetooth_clients_1**
> List[object] get_network_bluetooth_clients_1(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, include_connectivity_history=include_connectivity_history)

List the Bluetooth clients seen by APs in this network

List the Bluetooth clients seen by APs in this network

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
    api_instance = openapi_client.BluetoothClientsApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    include_connectivity_history = True # bool | Include the connectivity history for this client (optional)

    try:
        # List the Bluetooth clients seen by APs in this network
        api_response = api_instance.get_network_bluetooth_clients_1(network_id, t0=t0, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, include_connectivity_history=include_connectivity_history)
        print("The response of BluetoothClientsApi->get_network_bluetooth_clients_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BluetoothClientsApi->get_network_bluetooth_clients_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 7 days from today. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **include_connectivity_history** | **bool**| Include the connectivity history for this client | [optional] 

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

