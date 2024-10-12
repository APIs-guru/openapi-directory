# openapi_client.FirewalledServicesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_firewall_firewalled_service_2**](FirewalledServicesApi.md#get_network_appliance_firewall_firewalled_service_2) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Return the accessibility settings of the given service (&#39;ICMP&#39;, &#39;web&#39;, or &#39;SNMP&#39;)
[**get_network_appliance_firewall_firewalled_services_2**](FirewalledServicesApi.md#get_network_appliance_firewall_firewalled_services_2) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices | List the appliance services and their accessibility rules
[**update_network_appliance_firewall_firewalled_service_2**](FirewalledServicesApi.md#update_network_appliance_firewall_firewalled_service_2) | **PUT** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Updates the accessibility settings for the given service (&#39;ICMP&#39;, &#39;web&#39;, or &#39;SNMP&#39;)


# **get_network_appliance_firewall_firewalled_service_2**
> object get_network_appliance_firewall_firewalled_service_2(network_id, service)

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

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
    api_instance = openapi_client.FirewalledServicesApi(api_client)
    network_id = 'network_id_example' # str | 
    service = 'service_example' # str | 

    try:
        # Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        api_response = api_instance.get_network_appliance_firewall_firewalled_service_2(network_id, service)
        print("The response of FirewalledServicesApi->get_network_appliance_firewall_firewalled_service_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewalledServicesApi->get_network_appliance_firewall_firewalled_service_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **service** | **str**|  | 

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

# **get_network_appliance_firewall_firewalled_services_2**
> List[object] get_network_appliance_firewall_firewalled_services_2(network_id)

List the appliance services and their accessibility rules

List the appliance services and their accessibility rules

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
    api_instance = openapi_client.FirewalledServicesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the appliance services and their accessibility rules
        api_response = api_instance.get_network_appliance_firewall_firewalled_services_2(network_id)
        print("The response of FirewalledServicesApi->get_network_appliance_firewall_firewalled_services_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewalledServicesApi->get_network_appliance_firewall_firewalled_services_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

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

# **update_network_appliance_firewall_firewalled_service_2**
> object update_network_appliance_firewall_firewalled_service_2(network_id, service, update_network_appliance_firewall_firewalled_service_request)

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_firewalled_service_request import UpdateNetworkApplianceFirewallFirewalledServiceRequest
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
    api_instance = openapi_client.FirewalledServicesApi(api_client)
    network_id = 'network_id_example' # str | 
    service = 'service_example' # str | 
    update_network_appliance_firewall_firewalled_service_request = openapi_client.UpdateNetworkApplianceFirewallFirewalledServiceRequest() # UpdateNetworkApplianceFirewallFirewalledServiceRequest | 

    try:
        # Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        api_response = api_instance.update_network_appliance_firewall_firewalled_service_2(network_id, service, update_network_appliance_firewall_firewalled_service_request)
        print("The response of FirewalledServicesApi->update_network_appliance_firewall_firewalled_service_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewalledServicesApi->update_network_appliance_firewall_firewalled_service_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **service** | **str**|  | 
 **update_network_appliance_firewall_firewalled_service_request** | [**UpdateNetworkApplianceFirewallFirewalledServiceRequest**](UpdateNetworkApplianceFirewallFirewalledServiceRequest.md)|  | 

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

