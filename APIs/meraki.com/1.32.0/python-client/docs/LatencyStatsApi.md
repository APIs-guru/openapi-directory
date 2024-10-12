# openapi_client.LatencyStatsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_wireless_latency_stats_1**](LatencyStatsApi.md#get_device_wireless_latency_stats_1) | **GET** /devices/{serial}/wireless/latencyStats | Aggregated latency info for a given AP on this network
[**get_network_wireless_client_latency_stats_2**](LatencyStatsApi.md#get_network_wireless_client_latency_stats_2) | **GET** /networks/{networkId}/wireless/clients/{clientId}/latencyStats | Aggregated latency info for a given client on this network
[**get_network_wireless_clients_latency_stats_2**](LatencyStatsApi.md#get_network_wireless_clients_latency_stats_2) | **GET** /networks/{networkId}/wireless/clients/latencyStats | Aggregated latency info for this network, grouped by clients
[**get_network_wireless_devices_latency_stats_2**](LatencyStatsApi.md#get_network_wireless_devices_latency_stats_2) | **GET** /networks/{networkId}/wireless/devices/latencyStats | Aggregated latency info for this network, grouped by node
[**get_network_wireless_latency_stats_1**](LatencyStatsApi.md#get_network_wireless_latency_stats_1) | **GET** /networks/{networkId}/wireless/latencyStats | Aggregated latency info for this network


# **get_device_wireless_latency_stats_1**
> object get_device_wireless_latency_stats_1(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for a given AP on this network

Aggregated latency info for a given AP on this network

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
    api_instance = openapi_client.LatencyStatsApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for a given AP on this network
        api_response = api_instance.get_device_wireless_latency_stats_1(serial, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of LatencyStatsApi->get_device_wireless_latency_stats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LatencyStatsApi->get_device_wireless_latency_stats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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

# **get_network_wireless_client_latency_stats_2**
> object get_network_wireless_client_latency_stats_2(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for a given client on this network

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

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
    api_instance = openapi_client.LatencyStatsApi(api_client)
    network_id = 'network_id_example' # str | 
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for a given client on this network
        api_response = api_instance.get_network_wireless_client_latency_stats_2(network_id, client_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of LatencyStatsApi->get_network_wireless_client_latency_stats_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LatencyStatsApi->get_network_wireless_client_latency_stats_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 180 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. | [optional] 
 **band** | **str**| Filter results by band (either &#39;2.4&#39;, &#39;5&#39; or &#39;6&#39;). Note that data prior to February 2020 will not have band information. | [optional] 
 **ssid** | **int**| Filter results by SSID | [optional] 
 **vlan** | **int**| Filter results by VLAN | [optional] 
 **ap_tag** | **str**| Filter results by AP Tag | [optional] 
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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

# **get_network_wireless_clients_latency_stats_2**
> List[object] get_network_wireless_clients_latency_stats_2(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for this network, grouped by clients

Aggregated latency info for this network, grouped by clients

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
    api_instance = openapi_client.LatencyStatsApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for this network, grouped by clients
        api_response = api_instance.get_network_wireless_clients_latency_stats_2(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of LatencyStatsApi->get_network_wireless_clients_latency_stats_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LatencyStatsApi->get_network_wireless_clients_latency_stats_2: %s\n" % e)
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
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_wireless_devices_latency_stats_2**
> List[object] get_network_wireless_devices_latency_stats_2(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for this network, grouped by node

Aggregated latency info for this network, grouped by node

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
    api_instance = openapi_client.LatencyStatsApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for this network, grouped by node
        api_response = api_instance.get_network_wireless_devices_latency_stats_2(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of LatencyStatsApi->get_network_wireless_devices_latency_stats_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LatencyStatsApi->get_network_wireless_devices_latency_stats_2: %s\n" % e)
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
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_wireless_latency_stats_1**
> object get_network_wireless_latency_stats_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)

Aggregated latency info for this network

Aggregated latency info for this network

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
    api_instance = openapi_client.LatencyStatsApi(api_client)
    network_id = 'network_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. (optional)
    band = 'band_example' # str | Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information. (optional)
    ssid = 56 # int | Filter results by SSID (optional)
    vlan = 56 # int | Filter results by VLAN (optional)
    ap_tag = 'ap_tag_example' # str | Filter results by AP Tag (optional)
    fields = 'fields_example' # str | Partial selection: If present, this call will return only the selected fields of [\"rawDistribution\", \"avg\"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. (optional)

    try:
        # Aggregated latency info for this network
        api_response = api_instance.get_network_wireless_latency_stats_1(network_id, t0=t0, t1=t1, timespan=timespan, band=band, ssid=ssid, vlan=vlan, ap_tag=ap_tag, fields=fields)
        print("The response of LatencyStatsApi->get_network_wireless_latency_stats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LatencyStatsApi->get_network_wireless_latency_stats_1: %s\n" % e)
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
 **fields** | **str**| Partial selection: If present, this call will return only the selected fields of [\&quot;rawDistribution\&quot;, \&quot;avg\&quot;]. All fields will be returned by default. Selected fields must be entered as a comma separated string. | [optional] 

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

