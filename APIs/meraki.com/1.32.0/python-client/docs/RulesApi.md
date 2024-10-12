# openapi_client.RulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_traffic_shaping_rules_2**](RulesApi.md#get_network_appliance_traffic_shaping_rules_2) | **GET** /networks/{networkId}/appliance/trafficShaping/rules | Display the traffic shaping settings rules for an MX network
[**get_network_wireless_ssid_traffic_shaping_rules_3**](RulesApi.md#get_network_wireless_ssid_traffic_shaping_rules_3) | **GET** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Display the traffic shaping settings for a SSID on an MR network
[**update_network_appliance_traffic_shaping_rules_2**](RulesApi.md#update_network_appliance_traffic_shaping_rules_2) | **PUT** /networks/{networkId}/appliance/trafficShaping/rules | Update the traffic shaping settings rules for an MX network
[**update_network_wireless_ssid_traffic_shaping_rules_3**](RulesApi.md#update_network_wireless_ssid_traffic_shaping_rules_3) | **PUT** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Update the traffic shaping settings for an SSID on an MR network


# **get_network_appliance_traffic_shaping_rules_2**
> object get_network_appliance_traffic_shaping_rules_2(network_id)

Display the traffic shaping settings rules for an MX network

Display the traffic shaping settings rules for an MX network

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
    api_instance = openapi_client.RulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Display the traffic shaping settings rules for an MX network
        api_response = api_instance.get_network_appliance_traffic_shaping_rules_2(network_id)
        print("The response of RulesApi->get_network_appliance_traffic_shaping_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->get_network_appliance_traffic_shaping_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **get_network_wireless_ssid_traffic_shaping_rules_3**
> object get_network_wireless_ssid_traffic_shaping_rules_3(network_id, number)

Display the traffic shaping settings for a SSID on an MR network

Display the traffic shaping settings for a SSID on an MR network

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
    api_instance = openapi_client.RulesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the traffic shaping settings for a SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_traffic_shaping_rules_3(network_id, number)
        print("The response of RulesApi->get_network_wireless_ssid_traffic_shaping_rules_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->get_network_wireless_ssid_traffic_shaping_rules_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

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

# **update_network_appliance_traffic_shaping_rules_2**
> object update_network_appliance_traffic_shaping_rules_2(network_id, update_network_appliance_traffic_shaping_rules_request=update_network_appliance_traffic_shaping_rules_request)

Update the traffic shaping settings rules for an MX network

Update the traffic shaping settings rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request import UpdateNetworkApplianceTrafficShapingRulesRequest
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
    api_instance = openapi_client.RulesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_traffic_shaping_rules_request = openapi_client.UpdateNetworkApplianceTrafficShapingRulesRequest() # UpdateNetworkApplianceTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings rules for an MX network
        api_response = api_instance.update_network_appliance_traffic_shaping_rules_2(network_id, update_network_appliance_traffic_shaping_rules_request=update_network_appliance_traffic_shaping_rules_request)
        print("The response of RulesApi->update_network_appliance_traffic_shaping_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->update_network_appliance_traffic_shaping_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_traffic_shaping_rules_request** | [**UpdateNetworkApplianceTrafficShapingRulesRequest**](UpdateNetworkApplianceTrafficShapingRulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_traffic_shaping_rules_3**
> object update_network_wireless_ssid_traffic_shaping_rules_3(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)

Update the traffic shaping settings for an SSID on an MR network

Update the traffic shaping settings for an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_traffic_shaping_rules_request import UpdateNetworkWirelessSsidTrafficShapingRulesRequest
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
    api_instance = openapi_client.RulesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_traffic_shaping_rules_request = openapi_client.UpdateNetworkWirelessSsidTrafficShapingRulesRequest() # UpdateNetworkWirelessSsidTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings for an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_traffic_shaping_rules_3(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)
        print("The response of RulesApi->update_network_wireless_ssid_traffic_shaping_rules_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RulesApi->update_network_wireless_ssid_traffic_shaping_rules_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_traffic_shaping_rules_request** | [**UpdateNetworkWirelessSsidTrafficShapingRulesRequest**](UpdateNetworkWirelessSsidTrafficShapingRulesRequest.md)|  | [optional] 

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

