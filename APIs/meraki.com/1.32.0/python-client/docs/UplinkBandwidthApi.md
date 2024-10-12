# openapi_client.UplinkBandwidthApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_traffic_shaping_uplink_bandwidth_2**](UplinkBandwidthApi.md#get_network_appliance_traffic_shaping_uplink_bandwidth_2) | **GET** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Returns the uplink bandwidth limits for your MX network
[**update_network_appliance_traffic_shaping_uplink_bandwidth_2**](UplinkBandwidthApi.md#update_network_appliance_traffic_shaping_uplink_bandwidth_2) | **PUT** /networks/{networkId}/appliance/trafficShaping/uplinkBandwidth | Updates the uplink bandwidth settings for your MX network.


# **get_network_appliance_traffic_shaping_uplink_bandwidth_2**
> GetNetworkApplianceTrafficShapingUplinkBandwidth200Response get_network_appliance_traffic_shaping_uplink_bandwidth_2(network_id)

Returns the uplink bandwidth limits for your MX network

Returns the uplink bandwidth limits for your MX network. This may not reflect the affected device's hardware capabilities.  For more information on your device's hardware capabilities, please consult our MX Family Datasheet - [https://meraki.cisco.com/product-collateral/mx-family-datasheet/?file]

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_traffic_shaping_uplink_bandwidth200_response import GetNetworkApplianceTrafficShapingUplinkBandwidth200Response
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
    api_instance = openapi_client.UplinkBandwidthApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the uplink bandwidth limits for your MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_uplink_bandwidth_2(network_id)
        print("The response of UplinkBandwidthApi->get_network_appliance_traffic_shaping_uplink_bandwidth_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UplinkBandwidthApi->get_network_appliance_traffic_shaping_uplink_bandwidth_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceTrafficShapingUplinkBandwidth200Response**](GetNetworkApplianceTrafficShapingUplinkBandwidth200Response.md)

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

# **update_network_appliance_traffic_shaping_uplink_bandwidth_2**
> object update_network_appliance_traffic_shaping_uplink_bandwidth_2(network_id, update_network_appliance_traffic_shaping_uplink_bandwidth_request=update_network_appliance_traffic_shaping_uplink_bandwidth_request)

Updates the uplink bandwidth settings for your MX network.

Updates the uplink bandwidth settings for your MX network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_uplink_bandwidth_request import UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest
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
    api_instance = openapi_client.UplinkBandwidthApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_uplink_bandwidth_request = openapi_client.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest() # UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest |  (optional)

    try:
        # Updates the uplink bandwidth settings for your MX network.
        api_response = api_instance.update_network_appliance_traffic_shaping_uplink_bandwidth_2(network_id, update_network_appliance_traffic_shaping_uplink_bandwidth_request=update_network_appliance_traffic_shaping_uplink_bandwidth_request)
        print("The response of UplinkBandwidthApi->update_network_appliance_traffic_shaping_uplink_bandwidth_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UplinkBandwidthApi->update_network_appliance_traffic_shaping_uplink_bandwidth_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_uplink_bandwidth_request** | [**UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest**](UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

