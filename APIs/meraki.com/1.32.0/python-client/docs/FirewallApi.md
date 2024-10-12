# openapi_client.FirewallApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_firewall_cellular_firewall_rules_1**](FirewallApi.md#get_network_appliance_firewall_cellular_firewall_rules_1) | **GET** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Return the cellular firewall rules for an MX network
[**get_network_appliance_firewall_firewalled_service_1**](FirewallApi.md#get_network_appliance_firewall_firewalled_service_1) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Return the accessibility settings of the given service (&#39;ICMP&#39;, &#39;web&#39;, or &#39;SNMP&#39;)
[**get_network_appliance_firewall_firewalled_services_1**](FirewallApi.md#get_network_appliance_firewall_firewalled_services_1) | **GET** /networks/{networkId}/appliance/firewall/firewalledServices | List the appliance services and their accessibility rules
[**get_network_appliance_firewall_inbound_cellular_firewall_rules_1**](FirewallApi.md#get_network_appliance_firewall_inbound_cellular_firewall_rules_1) | **GET** /networks/{networkId}/appliance/firewall/inboundCellularFirewallRules | Return the inbound cellular firewall rules for an MX network
[**get_network_appliance_firewall_inbound_firewall_rules_1**](FirewallApi.md#get_network_appliance_firewall_inbound_firewall_rules_1) | **GET** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Return the inbound firewall rules for an MX network
[**get_network_appliance_firewall_l3_firewall_rules_1**](FirewallApi.md#get_network_appliance_firewall_l3_firewall_rules_1) | **GET** /networks/{networkId}/appliance/firewall/l3FirewallRules | Return the L3 firewall rules for an MX network
[**get_network_appliance_firewall_l7_firewall_rules_1**](FirewallApi.md#get_network_appliance_firewall_l7_firewall_rules_1) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules | List the MX L7 firewall rules for an MX network
[**get_network_appliance_firewall_l7_firewall_rules_application_categories_1**](FirewallApi.md#get_network_appliance_firewall_l7_firewall_rules_application_categories_1) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories | Return the L7 firewall application categories and their associated applications for an MX network
[**get_network_appliance_firewall_one_to_many_nat_rules_1**](FirewallApi.md#get_network_appliance_firewall_one_to_many_nat_rules_1) | **GET** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Return the 1:Many NAT mapping rules for an MX network
[**get_network_appliance_firewall_one_to_one_nat_rules_1**](FirewallApi.md#get_network_appliance_firewall_one_to_one_nat_rules_1) | **GET** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Return the 1:1 NAT mapping rules for an MX network
[**get_network_appliance_firewall_port_forwarding_rules_1**](FirewallApi.md#get_network_appliance_firewall_port_forwarding_rules_1) | **GET** /networks/{networkId}/appliance/firewall/portForwardingRules | Return the port forwarding rules for an MX network
[**get_network_appliance_firewall_settings_1**](FirewallApi.md#get_network_appliance_firewall_settings_1) | **GET** /networks/{networkId}/appliance/firewall/settings | Return the firewall settings for this network
[**get_network_wireless_ssid_firewall_l3_firewall_rules_2**](FirewallApi.md#get_network_wireless_ssid_firewall_l3_firewall_rules_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Return the L3 firewall rules for an SSID on an MR network
[**get_network_wireless_ssid_firewall_l7_firewall_rules_2**](FirewallApi.md#get_network_wireless_ssid_firewall_l7_firewall_rules_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**update_network_appliance_firewall_cellular_firewall_rules_1**](FirewallApi.md#update_network_appliance_firewall_cellular_firewall_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/cellularFirewallRules | Update the cellular firewall rules of an MX network
[**update_network_appliance_firewall_firewalled_service_1**](FirewallApi.md#update_network_appliance_firewall_firewalled_service_1) | **PUT** /networks/{networkId}/appliance/firewall/firewalledServices/{service} | Updates the accessibility settings for the given service (&#39;ICMP&#39;, &#39;web&#39;, or &#39;SNMP&#39;)
[**update_network_appliance_firewall_inbound_cellular_firewall_rules_1**](FirewallApi.md#update_network_appliance_firewall_inbound_cellular_firewall_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/inboundCellularFirewallRules | Update the inbound cellular firewall rules of an MX network
[**update_network_appliance_firewall_inbound_firewall_rules_1**](FirewallApi.md#update_network_appliance_firewall_inbound_firewall_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/inboundFirewallRules | Update the inbound firewall rules of an MX network
[**update_network_appliance_firewall_l3_firewall_rules_1**](FirewallApi.md#update_network_appliance_firewall_l3_firewall_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/l3FirewallRules | Update the L3 firewall rules of an MX network
[**update_network_appliance_firewall_l7_firewall_rules_1**](FirewallApi.md#update_network_appliance_firewall_l7_firewall_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/l7FirewallRules | Update the MX L7 firewall rules for an MX network
[**update_network_appliance_firewall_one_to_many_nat_rules_1**](FirewallApi.md#update_network_appliance_firewall_one_to_many_nat_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/oneToManyNatRules | Set the 1:Many NAT mapping rules for an MX network
[**update_network_appliance_firewall_one_to_one_nat_rules_1**](FirewallApi.md#update_network_appliance_firewall_one_to_one_nat_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/oneToOneNatRules | Set the 1:1 NAT mapping rules for an MX network
[**update_network_appliance_firewall_port_forwarding_rules_1**](FirewallApi.md#update_network_appliance_firewall_port_forwarding_rules_1) | **PUT** /networks/{networkId}/appliance/firewall/portForwardingRules | Update the port forwarding rules for an MX network
[**update_network_appliance_firewall_settings_1**](FirewallApi.md#update_network_appliance_firewall_settings_1) | **PUT** /networks/{networkId}/appliance/firewall/settings | Update the firewall settings for this network
[**update_network_wireless_ssid_firewall_l3_firewall_rules_2**](FirewallApi.md#update_network_wireless_ssid_firewall_l3_firewall_rules_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Update the L3 firewall rules of an SSID on an MR network
[**update_network_wireless_ssid_firewall_l7_firewall_rules_2**](FirewallApi.md#update_network_wireless_ssid_firewall_l7_firewall_rules_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network


# **get_network_appliance_firewall_cellular_firewall_rules_1**
> object get_network_appliance_firewall_cellular_firewall_rules_1(network_id)

Return the cellular firewall rules for an MX network

Return the cellular firewall rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the cellular firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_cellular_firewall_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_cellular_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_cellular_firewall_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_firewalled_service_1**
> object get_network_appliance_firewall_firewalled_service_1(network_id, service)

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    service = 'service_example' # str | 

    try:
        # Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
        api_response = api_instance.get_network_appliance_firewall_firewalled_service_1(network_id, service)
        print("The response of FirewallApi->get_network_appliance_firewall_firewalled_service_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_firewalled_service_1: %s\n" % e)
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

# **get_network_appliance_firewall_firewalled_services_1**
> List[object] get_network_appliance_firewall_firewalled_services_1(network_id)

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the appliance services and their accessibility rules
        api_response = api_instance.get_network_appliance_firewall_firewalled_services_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_firewalled_services_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_firewalled_services_1: %s\n" % e)
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

# **get_network_appliance_firewall_inbound_cellular_firewall_rules_1**
> List[object] get_network_appliance_firewall_inbound_cellular_firewall_rules_1(network_id)

Return the inbound cellular firewall rules for an MX network

Return the inbound cellular firewall rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the inbound cellular firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_inbound_cellular_firewall_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_inbound_cellular_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_inbound_cellular_firewall_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_inbound_firewall_rules_1**
> object get_network_appliance_firewall_inbound_firewall_rules_1(network_id)

Return the inbound firewall rules for an MX network

Return the inbound firewall rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the inbound firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_inbound_firewall_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_inbound_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_inbound_firewall_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_l3_firewall_rules_1**
> object get_network_appliance_firewall_l3_firewall_rules_1(network_id)

Return the L3 firewall rules for an MX network

Return the L3 firewall rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the L3 firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_l3_firewall_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_l3_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_l3_firewall_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_l7_firewall_rules_1**
> object get_network_appliance_firewall_l7_firewall_rules_1(network_id)

List the MX L7 firewall rules for an MX network

List the MX L7 firewall rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MX L7 firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_l7_firewall_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_l7_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_l7_firewall_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_l7_firewall_rules_application_categories_1**
> object get_network_appliance_firewall_l7_firewall_rules_application_categories_1(network_id)

Return the L7 firewall application categories and their associated applications for an MX network

Return the L7 firewall application categories and their associated applications for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the L7 firewall application categories and their associated applications for an MX network
        api_response = api_instance.get_network_appliance_firewall_l7_firewall_rules_application_categories_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_l7_firewall_rules_application_categories_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_l7_firewall_rules_application_categories_1: %s\n" % e)
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

# **get_network_appliance_firewall_one_to_many_nat_rules_1**
> object get_network_appliance_firewall_one_to_many_nat_rules_1(network_id)

Return the 1:Many NAT mapping rules for an MX network

Return the 1:Many NAT mapping rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the 1:Many NAT mapping rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_one_to_many_nat_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_one_to_many_nat_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_one_to_many_nat_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_one_to_one_nat_rules_1**
> object get_network_appliance_firewall_one_to_one_nat_rules_1(network_id)

Return the 1:1 NAT mapping rules for an MX network

Return the 1:1 NAT mapping rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the 1:1 NAT mapping rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_one_to_one_nat_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_one_to_one_nat_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_one_to_one_nat_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_port_forwarding_rules_1**
> object get_network_appliance_firewall_port_forwarding_rules_1(network_id)

Return the port forwarding rules for an MX network

Return the port forwarding rules for an MX network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the port forwarding rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_port_forwarding_rules_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_port_forwarding_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_port_forwarding_rules_1: %s\n" % e)
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

# **get_network_appliance_firewall_settings_1**
> object get_network_appliance_firewall_settings_1(network_id)

Return the firewall settings for this network

Return the firewall settings for this network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the firewall settings for this network
        api_response = api_instance.get_network_appliance_firewall_settings_1(network_id)
        print("The response of FirewallApi->get_network_appliance_firewall_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_appliance_firewall_settings_1: %s\n" % e)
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

# **get_network_wireless_ssid_firewall_l3_firewall_rules_2**
> object get_network_wireless_ssid_firewall_l3_firewall_rules_2(network_id, number)

Return the L3 firewall rules for an SSID on an MR network

Return the L3 firewall rules for an SSID on an MR network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L3 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l3_firewall_rules_2(network_id, number)
        print("The response of FirewallApi->get_network_wireless_ssid_firewall_l3_firewall_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_wireless_ssid_firewall_l3_firewall_rules_2: %s\n" % e)
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

# **get_network_wireless_ssid_firewall_l7_firewall_rules_2**
> object get_network_wireless_ssid_firewall_l7_firewall_rules_2(network_id, number)

Return the L7 firewall rules for an SSID on an MR network

Return the L7 firewall rules for an SSID on an MR network

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L7 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l7_firewall_rules_2(network_id, number)
        print("The response of FirewallApi->get_network_wireless_ssid_firewall_l7_firewall_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->get_network_wireless_ssid_firewall_l7_firewall_rules_2: %s\n" % e)
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

# **update_network_appliance_firewall_cellular_firewall_rules_1**
> object update_network_appliance_firewall_cellular_firewall_rules_1(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)

Update the cellular firewall rules of an MX network

Update the cellular firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_cellular_firewall_rules_request import UpdateNetworkApplianceFirewallCellularFirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_cellular_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest() # UpdateNetworkApplianceFirewallCellularFirewallRulesRequest |  (optional)

    try:
        # Update the cellular firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_cellular_firewall_rules_1(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_cellular_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_cellular_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_cellular_firewall_rules_request** | [**UpdateNetworkApplianceFirewallCellularFirewallRulesRequest**](UpdateNetworkApplianceFirewallCellularFirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_firewalled_service_1**
> object update_network_appliance_firewall_firewalled_service_1(network_id, service, update_network_appliance_firewall_firewalled_service_request)

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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    service = 'service_example' # str | 
    update_network_appliance_firewall_firewalled_service_request = openapi_client.UpdateNetworkApplianceFirewallFirewalledServiceRequest() # UpdateNetworkApplianceFirewallFirewalledServiceRequest | 

    try:
        # Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
        api_response = api_instance.update_network_appliance_firewall_firewalled_service_1(network_id, service, update_network_appliance_firewall_firewalled_service_request)
        print("The response of FirewallApi->update_network_appliance_firewall_firewalled_service_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_firewalled_service_1: %s\n" % e)
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

# **update_network_appliance_firewall_inbound_cellular_firewall_rules_1**
> List[object] update_network_appliance_firewall_inbound_cellular_firewall_rules_1(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)

Update the inbound cellular firewall rules of an MX network

Update the inbound cellular firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_cellular_firewall_rules_request import UpdateNetworkApplianceFirewallCellularFirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_cellular_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest() # UpdateNetworkApplianceFirewallCellularFirewallRulesRequest |  (optional)

    try:
        # Update the inbound cellular firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_inbound_cellular_firewall_rules_1(network_id, update_network_appliance_firewall_cellular_firewall_rules_request=update_network_appliance_firewall_cellular_firewall_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_inbound_cellular_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_inbound_cellular_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_cellular_firewall_rules_request** | [**UpdateNetworkApplianceFirewallCellularFirewallRulesRequest**](UpdateNetworkApplianceFirewallCellularFirewallRulesRequest.md)|  | [optional] 

### Return type

**List[object]**

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

# **update_network_appliance_firewall_inbound_firewall_rules_1**
> object update_network_appliance_firewall_inbound_firewall_rules_1(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)

Update the inbound firewall rules of an MX network

Update the inbound firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_inbound_firewall_rules_request import UpdateNetworkApplianceFirewallInboundFirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_inbound_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest() # UpdateNetworkApplianceFirewallInboundFirewallRulesRequest |  (optional)

    try:
        # Update the inbound firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_inbound_firewall_rules_1(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_inbound_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_inbound_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_inbound_firewall_rules_request** | [**UpdateNetworkApplianceFirewallInboundFirewallRulesRequest**](UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_l3_firewall_rules_1**
> object update_network_appliance_firewall_l3_firewall_rules_1(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)

Update the L3 firewall rules of an MX network

Update the L3 firewall rules of an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_inbound_firewall_rules_request import UpdateNetworkApplianceFirewallInboundFirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_inbound_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest() # UpdateNetworkApplianceFirewallInboundFirewallRulesRequest |  (optional)

    try:
        # Update the L3 firewall rules of an MX network
        api_response = api_instance.update_network_appliance_firewall_l3_firewall_rules_1(network_id, update_network_appliance_firewall_inbound_firewall_rules_request=update_network_appliance_firewall_inbound_firewall_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_l3_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_l3_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_inbound_firewall_rules_request** | [**UpdateNetworkApplianceFirewallInboundFirewallRulesRequest**](UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_l7_firewall_rules_1**
> object update_network_appliance_firewall_l7_firewall_rules_1(network_id, update_network_appliance_firewall_l7_firewall_rules_request=update_network_appliance_firewall_l7_firewall_rules_request)

Update the MX L7 firewall rules for an MX network

Update the MX L7 firewall rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_l7_firewall_rules_request import UpdateNetworkApplianceFirewallL7FirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallL7FirewallRulesRequest() # UpdateNetworkApplianceFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the MX L7 firewall rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_l7_firewall_rules_1(network_id, update_network_appliance_firewall_l7_firewall_rules_request=update_network_appliance_firewall_l7_firewall_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_l7_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_l7_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_l7_firewall_rules_request** | [**UpdateNetworkApplianceFirewallL7FirewallRulesRequest**](UpdateNetworkApplianceFirewallL7FirewallRulesRequest.md)|  | [optional] 

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

# **update_network_appliance_firewall_one_to_many_nat_rules_1**
> object update_network_appliance_firewall_one_to_many_nat_rules_1(network_id, update_network_appliance_firewall_one_to_many_nat_rules_request)

Set the 1:Many NAT mapping rules for an MX network

Set the 1:Many NAT mapping rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_one_to_many_nat_rules_request import UpdateNetworkApplianceFirewallOneToManyNatRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_one_to_many_nat_rules_request = openapi_client.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest() # UpdateNetworkApplianceFirewallOneToManyNatRulesRequest | 

    try:
        # Set the 1:Many NAT mapping rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_one_to_many_nat_rules_1(network_id, update_network_appliance_firewall_one_to_many_nat_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_one_to_many_nat_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_one_to_many_nat_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_one_to_many_nat_rules_request** | [**UpdateNetworkApplianceFirewallOneToManyNatRulesRequest**](UpdateNetworkApplianceFirewallOneToManyNatRulesRequest.md)|  | 

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

# **update_network_appliance_firewall_one_to_one_nat_rules_1**
> object update_network_appliance_firewall_one_to_one_nat_rules_1(network_id, update_network_appliance_firewall_one_to_one_nat_rules_request)

Set the 1:1 NAT mapping rules for an MX network

Set the 1:1 NAT mapping rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_one_to_one_nat_rules_request import UpdateNetworkApplianceFirewallOneToOneNatRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_one_to_one_nat_rules_request = openapi_client.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest() # UpdateNetworkApplianceFirewallOneToOneNatRulesRequest | 

    try:
        # Set the 1:1 NAT mapping rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_one_to_one_nat_rules_1(network_id, update_network_appliance_firewall_one_to_one_nat_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_one_to_one_nat_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_one_to_one_nat_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_one_to_one_nat_rules_request** | [**UpdateNetworkApplianceFirewallOneToOneNatRulesRequest**](UpdateNetworkApplianceFirewallOneToOneNatRulesRequest.md)|  | 

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

# **update_network_appliance_firewall_port_forwarding_rules_1**
> object update_network_appliance_firewall_port_forwarding_rules_1(network_id, update_network_appliance_firewall_port_forwarding_rules_request)

Update the port forwarding rules for an MX network

Update the port forwarding rules for an MX network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_port_forwarding_rules_request import UpdateNetworkApplianceFirewallPortForwardingRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_port_forwarding_rules_request = openapi_client.UpdateNetworkApplianceFirewallPortForwardingRulesRequest() # UpdateNetworkApplianceFirewallPortForwardingRulesRequest | 

    try:
        # Update the port forwarding rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_port_forwarding_rules_1(network_id, update_network_appliance_firewall_port_forwarding_rules_request)
        print("The response of FirewallApi->update_network_appliance_firewall_port_forwarding_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_port_forwarding_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_port_forwarding_rules_request** | [**UpdateNetworkApplianceFirewallPortForwardingRulesRequest**](UpdateNetworkApplianceFirewallPortForwardingRulesRequest.md)|  | 

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

# **update_network_appliance_firewall_settings_1**
> object update_network_appliance_firewall_settings_1(network_id, update_network_appliance_firewall_settings_request=update_network_appliance_firewall_settings_request)

Update the firewall settings for this network

Update the firewall settings for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_firewall_settings_request import UpdateNetworkApplianceFirewallSettingsRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_settings_request = openapi_client.UpdateNetworkApplianceFirewallSettingsRequest() # UpdateNetworkApplianceFirewallSettingsRequest |  (optional)

    try:
        # Update the firewall settings for this network
        api_response = api_instance.update_network_appliance_firewall_settings_1(network_id, update_network_appliance_firewall_settings_request=update_network_appliance_firewall_settings_request)
        print("The response of FirewallApi->update_network_appliance_firewall_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_appliance_firewall_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_firewall_settings_request** | [**UpdateNetworkApplianceFirewallSettingsRequest**](UpdateNetworkApplianceFirewallSettingsRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_firewall_l3_firewall_rules_2**
> object update_network_wireless_ssid_firewall_l3_firewall_rules_2(network_id, number, update_network_wireless_ssid_firewall_l3_firewall_rules_request=update_network_wireless_ssid_firewall_l3_firewall_rules_request)

Update the L3 firewall rules of an SSID on an MR network

Update the L3 firewall rules of an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_firewall_l3_firewall_rules_request import UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l3_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest |  (optional)

    try:
        # Update the L3 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l3_firewall_rules_2(network_id, number, update_network_wireless_ssid_firewall_l3_firewall_rules_request=update_network_wireless_ssid_firewall_l3_firewall_rules_request)
        print("The response of FirewallApi->update_network_wireless_ssid_firewall_l3_firewall_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_wireless_ssid_firewall_l3_firewall_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_firewall_l3_firewall_rules_request** | [**UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest**](UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_firewall_l7_firewall_rules_2**
> object update_network_wireless_ssid_firewall_l7_firewall_rules_2(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)

Update the L7 firewall rules of an SSID on an MR network

Update the L7 firewall rules of an SSID on an MR network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_firewall_l7_firewall_rules_request import UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest
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
    api_instance = openapi_client.FirewallApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the L7 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l7_firewall_rules_2(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)
        print("The response of FirewallApi->update_network_wireless_ssid_firewall_l7_firewall_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirewallApi->update_network_wireless_ssid_firewall_l7_firewall_rules_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_firewall_l7_firewall_rules_request** | [**UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest**](UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest.md)|  | [optional] 

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

