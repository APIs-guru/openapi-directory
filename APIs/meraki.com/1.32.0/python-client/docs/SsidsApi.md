# openapi_client.SsidsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_wireless_ssid_identity_psk_1**](SsidsApi.md#create_network_wireless_ssid_identity_psk_1) | **POST** /networks/{networkId}/wireless/ssids/{number}/identityPsks | Create an Identity PSK
[**delete_network_wireless_ssid_identity_psk_1**](SsidsApi.md#delete_network_wireless_ssid_identity_psk_1) | **DELETE** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Delete an Identity PSK
[**get_network_appliance_ssid_1**](SsidsApi.md#get_network_appliance_ssid_1) | **GET** /networks/{networkId}/appliance/ssids/{number} | Return a single MX SSID
[**get_network_appliance_ssids_1**](SsidsApi.md#get_network_appliance_ssids_1) | **GET** /networks/{networkId}/appliance/ssids | List the MX SSIDs in a network
[**get_network_wireless_ssid_1**](SsidsApi.md#get_network_wireless_ssid_1) | **GET** /networks/{networkId}/wireless/ssids/{number} | Return a single MR SSID
[**get_network_wireless_ssid_bonjour_forwarding_1**](SsidsApi.md#get_network_wireless_ssid_bonjour_forwarding_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/bonjourForwarding | List the Bonjour forwarding setting and rules for the SSID
[**get_network_wireless_ssid_device_type_group_policies_1**](SsidsApi.md#get_network_wireless_ssid_device_type_group_policies_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies | List the device type group policies for the SSID
[**get_network_wireless_ssid_eap_override_1**](SsidsApi.md#get_network_wireless_ssid_eap_override_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/eapOverride | Return the EAP overridden parameters for an SSID
[**get_network_wireless_ssid_firewall_l3_firewall_rules_1**](SsidsApi.md#get_network_wireless_ssid_firewall_l3_firewall_rules_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Return the L3 firewall rules for an SSID on an MR network
[**get_network_wireless_ssid_firewall_l7_firewall_rules_1**](SsidsApi.md#get_network_wireless_ssid_firewall_l7_firewall_rules_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**get_network_wireless_ssid_hotspot20_1**](SsidsApi.md#get_network_wireless_ssid_hotspot20_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/hotspot20 | Return the Hotspot 2.0 settings for an SSID
[**get_network_wireless_ssid_identity_psk_1**](SsidsApi.md#get_network_wireless_ssid_identity_psk_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Return an Identity PSK
[**get_network_wireless_ssid_identity_psks_1**](SsidsApi.md#get_network_wireless_ssid_identity_psks_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/identityPsks | List all Identity PSKs in a wireless network
[**get_network_wireless_ssid_schedules_1**](SsidsApi.md#get_network_wireless_ssid_schedules_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/schedules | List the outage schedule for the SSID
[**get_network_wireless_ssid_splash_settings_1**](SsidsApi.md#get_network_wireless_ssid_splash_settings_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Display the splash page settings for the given SSID
[**get_network_wireless_ssid_traffic_shaping_rules_1**](SsidsApi.md#get_network_wireless_ssid_traffic_shaping_rules_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Display the traffic shaping settings for a SSID on an MR network
[**get_network_wireless_ssid_vpn_1**](SsidsApi.md#get_network_wireless_ssid_vpn_1) | **GET** /networks/{networkId}/wireless/ssids/{number}/vpn | List the VPN settings for the SSID.
[**get_network_wireless_ssids_1**](SsidsApi.md#get_network_wireless_ssids_1) | **GET** /networks/{networkId}/wireless/ssids | List the MR SSIDs in a network
[**get_organization_summary_top_ssids_by_usage_3**](SsidsApi.md#get_organization_summary_top_ssids_by_usage_3) | **GET** /organizations/{organizationId}/summary/top/ssids/byUsage | Return metrics for organization&#39;s top 10 ssids by data usage over given time range
[**update_network_appliance_ssid_1**](SsidsApi.md#update_network_appliance_ssid_1) | **PUT** /networks/{networkId}/appliance/ssids/{number} | Update the attributes of an MX SSID
[**update_network_wireless_ssid_1**](SsidsApi.md#update_network_wireless_ssid_1) | **PUT** /networks/{networkId}/wireless/ssids/{number} | Update the attributes of an MR SSID
[**update_network_wireless_ssid_bonjour_forwarding_1**](SsidsApi.md#update_network_wireless_ssid_bonjour_forwarding_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/bonjourForwarding | Update the bonjour forwarding setting and rules for the SSID
[**update_network_wireless_ssid_device_type_group_policies_1**](SsidsApi.md#update_network_wireless_ssid_device_type_group_policies_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies | Update the device type group policies for the SSID
[**update_network_wireless_ssid_eap_override_1**](SsidsApi.md#update_network_wireless_ssid_eap_override_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/eapOverride | Update the EAP overridden parameters for an SSID.
[**update_network_wireless_ssid_firewall_l3_firewall_rules_1**](SsidsApi.md#update_network_wireless_ssid_firewall_l3_firewall_rules_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules | Update the L3 firewall rules of an SSID on an MR network
[**update_network_wireless_ssid_firewall_l7_firewall_rules_1**](SsidsApi.md#update_network_wireless_ssid_firewall_l7_firewall_rules_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network
[**update_network_wireless_ssid_hotspot20_1**](SsidsApi.md#update_network_wireless_ssid_hotspot20_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/hotspot20 | Update the Hotspot 2.0 settings of an SSID
[**update_network_wireless_ssid_identity_psk_1**](SsidsApi.md#update_network_wireless_ssid_identity_psk_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId} | Update an Identity PSK
[**update_network_wireless_ssid_schedules_1**](SsidsApi.md#update_network_wireless_ssid_schedules_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/schedules | Update the outage schedule for the SSID
[**update_network_wireless_ssid_splash_settings_1**](SsidsApi.md#update_network_wireless_ssid_splash_settings_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/splash/settings | Modify the splash page settings for the given SSID
[**update_network_wireless_ssid_traffic_shaping_rules_1**](SsidsApi.md#update_network_wireless_ssid_traffic_shaping_rules_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules | Update the traffic shaping settings for an SSID on an MR network
[**update_network_wireless_ssid_vpn_1**](SsidsApi.md#update_network_wireless_ssid_vpn_1) | **PUT** /networks/{networkId}/wireless/ssids/{number}/vpn | Update the VPN settings for the SSID


# **create_network_wireless_ssid_identity_psk_1**
> object create_network_wireless_ssid_identity_psk_1(network_id, number, create_network_wireless_ssid_identity_psk_request)

Create an Identity PSK

Create an Identity PSK

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_wireless_ssid_identity_psk_request import CreateNetworkWirelessSsidIdentityPskRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    create_network_wireless_ssid_identity_psk_request = openapi_client.CreateNetworkWirelessSsidIdentityPskRequest() # CreateNetworkWirelessSsidIdentityPskRequest | 

    try:
        # Create an Identity PSK
        api_response = api_instance.create_network_wireless_ssid_identity_psk_1(network_id, number, create_network_wireless_ssid_identity_psk_request)
        print("The response of SsidsApi->create_network_wireless_ssid_identity_psk_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->create_network_wireless_ssid_identity_psk_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **create_network_wireless_ssid_identity_psk_request** | [**CreateNetworkWirelessSsidIdentityPskRequest**](CreateNetworkWirelessSsidIdentityPskRequest.md)|  | 

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
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_wireless_ssid_identity_psk_1**
> delete_network_wireless_ssid_identity_psk_1(network_id, number, identity_psk_id)

Delete an Identity PSK

Delete an Identity PSK

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 

    try:
        # Delete an Identity PSK
        api_instance.delete_network_wireless_ssid_identity_psk_1(network_id, number, identity_psk_id)
    except Exception as e:
        print("Exception when calling SsidsApi->delete_network_wireless_ssid_identity_psk_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **identity_psk_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_ssid_1**
> GetNetworkApplianceSsids200ResponseInner get_network_appliance_ssid_1(network_id, number)

Return a single MX SSID

Return a single MX SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return a single MX SSID
        api_response = api_instance.get_network_appliance_ssid_1(network_id, number)
        print("The response of SsidsApi->get_network_appliance_ssid_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_appliance_ssid_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkApplianceSsids200ResponseInner**](GetNetworkApplianceSsids200ResponseInner.md)

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

# **get_network_appliance_ssids_1**
> List[GetNetworkApplianceSsids200ResponseInner] get_network_appliance_ssids_1(network_id)

List the MX SSIDs in a network

List the MX SSIDs in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MX SSIDs in a network
        api_response = api_instance.get_network_appliance_ssids_1(network_id)
        print("The response of SsidsApi->get_network_appliance_ssids_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_appliance_ssids_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkApplianceSsids200ResponseInner]**](GetNetworkApplianceSsids200ResponseInner.md)

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

# **get_network_wireless_ssid_1**
> object get_network_wireless_ssid_1(network_id, number)

Return a single MR SSID

Return a single MR SSID

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return a single MR SSID
        api_response = api_instance.get_network_wireless_ssid_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_1: %s\n" % e)
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

# **get_network_wireless_ssid_bonjour_forwarding_1**
> object get_network_wireless_ssid_bonjour_forwarding_1(network_id, number)

List the Bonjour forwarding setting and rules for the SSID

List the Bonjour forwarding setting and rules for the SSID

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the Bonjour forwarding setting and rules for the SSID
        api_response = api_instance.get_network_wireless_ssid_bonjour_forwarding_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_bonjour_forwarding_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_bonjour_forwarding_1: %s\n" % e)
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

# **get_network_wireless_ssid_device_type_group_policies_1**
> object get_network_wireless_ssid_device_type_group_policies_1(network_id, number)

List the device type group policies for the SSID

List the device type group policies for the SSID

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the device type group policies for the SSID
        api_response = api_instance.get_network_wireless_ssid_device_type_group_policies_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_device_type_group_policies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_device_type_group_policies_1: %s\n" % e)
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

# **get_network_wireless_ssid_eap_override_1**
> GetNetworkWirelessSsidEapOverride200Response get_network_wireless_ssid_eap_override_1(network_id, number)

Return the EAP overridden parameters for an SSID

Return the EAP overridden parameters for an SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the EAP overridden parameters for an SSID
        api_response = api_instance.get_network_wireless_ssid_eap_override_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_eap_override_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_eap_override_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidEapOverride200Response**](GetNetworkWirelessSsidEapOverride200Response.md)

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

# **get_network_wireless_ssid_firewall_l3_firewall_rules_1**
> object get_network_wireless_ssid_firewall_l3_firewall_rules_1(network_id, number)

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L3 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l3_firewall_rules_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_firewall_l3_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_firewall_l3_firewall_rules_1: %s\n" % e)
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

# **get_network_wireless_ssid_firewall_l7_firewall_rules_1**
> object get_network_wireless_ssid_firewall_l7_firewall_rules_1(network_id, number)

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L7 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l7_firewall_rules_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_firewall_l7_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_firewall_l7_firewall_rules_1: %s\n" % e)
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

# **get_network_wireless_ssid_hotspot20_1**
> object get_network_wireless_ssid_hotspot20_1(network_id, number)

Return the Hotspot 2.0 settings for an SSID

Return the Hotspot 2.0 settings for an SSID

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the Hotspot 2.0 settings for an SSID
        api_response = api_instance.get_network_wireless_ssid_hotspot20_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_hotspot20_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_hotspot20_1: %s\n" % e)
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

# **get_network_wireless_ssid_identity_psk_1**
> GetNetworkWirelessSsidIdentityPsks200ResponseInner get_network_wireless_ssid_identity_psk_1(network_id, number, identity_psk_id)

Return an Identity PSK

Return an Identity PSK

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_identity_psks200_response_inner import GetNetworkWirelessSsidIdentityPsks200ResponseInner
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 

    try:
        # Return an Identity PSK
        api_response = api_instance.get_network_wireless_ssid_identity_psk_1(network_id, number, identity_psk_id)
        print("The response of SsidsApi->get_network_wireless_ssid_identity_psk_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_identity_psk_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **identity_psk_id** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidIdentityPsks200ResponseInner**](GetNetworkWirelessSsidIdentityPsks200ResponseInner.md)

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

# **get_network_wireless_ssid_identity_psks_1**
> List[GetNetworkWirelessSsidIdentityPsks200ResponseInner] get_network_wireless_ssid_identity_psks_1(network_id, number)

List all Identity PSKs in a wireless network

List all Identity PSKs in a wireless network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_identity_psks200_response_inner import GetNetworkWirelessSsidIdentityPsks200ResponseInner
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List all Identity PSKs in a wireless network
        api_response = api_instance.get_network_wireless_ssid_identity_psks_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_identity_psks_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_identity_psks_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**List[GetNetworkWirelessSsidIdentityPsks200ResponseInner]**](GetNetworkWirelessSsidIdentityPsks200ResponseInner.md)

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

# **get_network_wireless_ssid_schedules_1**
> object get_network_wireless_ssid_schedules_1(network_id, number)

List the outage schedule for the SSID

List the outage schedule for the SSID

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the outage schedule for the SSID
        api_response = api_instance.get_network_wireless_ssid_schedules_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_schedules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_schedules_1: %s\n" % e)
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

# **get_network_wireless_ssid_splash_settings_1**
> GetNetworkWirelessSsidSplashSettings200Response get_network_wireless_ssid_splash_settings_1(network_id, number)

Display the splash page settings for the given SSID

Display the splash page settings for the given SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the splash page settings for the given SSID
        api_response = api_instance.get_network_wireless_ssid_splash_settings_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_splash_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_splash_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 

### Return type

[**GetNetworkWirelessSsidSplashSettings200Response**](GetNetworkWirelessSsidSplashSettings200Response.md)

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

# **get_network_wireless_ssid_traffic_shaping_rules_1**
> object get_network_wireless_ssid_traffic_shaping_rules_1(network_id, number)

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Display the traffic shaping settings for a SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_traffic_shaping_rules_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_traffic_shaping_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_traffic_shaping_rules_1: %s\n" % e)
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

# **get_network_wireless_ssid_vpn_1**
> object get_network_wireless_ssid_vpn_1(network_id, number)

List the VPN settings for the SSID.

List the VPN settings for the SSID.

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the VPN settings for the SSID.
        api_response = api_instance.get_network_wireless_ssid_vpn_1(network_id, number)
        print("The response of SsidsApi->get_network_wireless_ssid_vpn_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssid_vpn_1: %s\n" % e)
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

# **get_network_wireless_ssids_1**
> List[object] get_network_wireless_ssids_1(network_id)

List the MR SSIDs in a network

List the MR SSIDs in a network

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MR SSIDs in a network
        api_response = api_instance.get_network_wireless_ssids_1(network_id)
        print("The response of SsidsApi->get_network_wireless_ssids_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_network_wireless_ssids_1: %s\n" % e)
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

# **get_organization_summary_top_ssids_by_usage_3**
> List[GetOrganizationSummaryTopSsidsByUsage200ResponseInner] get_organization_summary_top_ssids_by_usage_3(organization_id, t0=t0, t1=t1, timespan=timespan)

Return metrics for organization's top 10 ssids by data usage over given time range

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_summary_top_ssids_by_usage200_response_inner import GetOrganizationSummaryTopSsidsByUsage200ResponseInner
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
    api_instance = openapi_client.SsidsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Return metrics for organization's top 10 ssids by data usage over given time range
        api_response = api_instance.get_organization_summary_top_ssids_by_usage_3(organization_id, t0=t0, t1=t1, timespan=timespan)
        print("The response of SsidsApi->get_organization_summary_top_ssids_by_usage_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->get_organization_summary_top_ssids_by_usage_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

### Return type

[**List[GetOrganizationSummaryTopSsidsByUsage200ResponseInner]**](GetOrganizationSummaryTopSsidsByUsage200ResponseInner.md)

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

# **update_network_appliance_ssid_1**
> GetNetworkApplianceSsids200ResponseInner update_network_appliance_ssid_1(network_id, number, update_network_appliance_ssid_request=update_network_appliance_ssid_request)

Update the attributes of an MX SSID

Update the attributes of an MX SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_ssids200_response_inner import GetNetworkApplianceSsids200ResponseInner
from openapi_client.models.update_network_appliance_ssid_request import UpdateNetworkApplianceSsidRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_appliance_ssid_request = openapi_client.UpdateNetworkApplianceSsidRequest() # UpdateNetworkApplianceSsidRequest |  (optional)

    try:
        # Update the attributes of an MX SSID
        api_response = api_instance.update_network_appliance_ssid_1(network_id, number, update_network_appliance_ssid_request=update_network_appliance_ssid_request)
        print("The response of SsidsApi->update_network_appliance_ssid_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_appliance_ssid_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_appliance_ssid_request** | [**UpdateNetworkApplianceSsidRequest**](UpdateNetworkApplianceSsidRequest.md)|  | [optional] 

### Return type

[**GetNetworkApplianceSsids200ResponseInner**](GetNetworkApplianceSsids200ResponseInner.md)

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

# **update_network_wireless_ssid_1**
> object update_network_wireless_ssid_1(network_id, number, update_network_wireless_ssid_request=update_network_wireless_ssid_request)

Update the attributes of an MR SSID

Update the attributes of an MR SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_request import UpdateNetworkWirelessSsidRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_request = openapi_client.UpdateNetworkWirelessSsidRequest() # UpdateNetworkWirelessSsidRequest |  (optional)

    try:
        # Update the attributes of an MR SSID
        api_response = api_instance.update_network_wireless_ssid_1(network_id, number, update_network_wireless_ssid_request=update_network_wireless_ssid_request)
        print("The response of SsidsApi->update_network_wireless_ssid_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_request** | [**UpdateNetworkWirelessSsidRequest**](UpdateNetworkWirelessSsidRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_bonjour_forwarding_1**
> object update_network_wireless_ssid_bonjour_forwarding_1(network_id, number, update_network_wireless_ssid_bonjour_forwarding_request=update_network_wireless_ssid_bonjour_forwarding_request)

Update the bonjour forwarding setting and rules for the SSID

Update the bonjour forwarding setting and rules for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_bonjour_forwarding_request import UpdateNetworkWirelessSsidBonjourForwardingRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_bonjour_forwarding_request = openapi_client.UpdateNetworkWirelessSsidBonjourForwardingRequest() # UpdateNetworkWirelessSsidBonjourForwardingRequest |  (optional)

    try:
        # Update the bonjour forwarding setting and rules for the SSID
        api_response = api_instance.update_network_wireless_ssid_bonjour_forwarding_1(network_id, number, update_network_wireless_ssid_bonjour_forwarding_request=update_network_wireless_ssid_bonjour_forwarding_request)
        print("The response of SsidsApi->update_network_wireless_ssid_bonjour_forwarding_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_bonjour_forwarding_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_bonjour_forwarding_request** | [**UpdateNetworkWirelessSsidBonjourForwardingRequest**](UpdateNetworkWirelessSsidBonjourForwardingRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_device_type_group_policies_1**
> object update_network_wireless_ssid_device_type_group_policies_1(network_id, number, update_network_wireless_ssid_device_type_group_policies_request=update_network_wireless_ssid_device_type_group_policies_request)

Update the device type group policies for the SSID

Update the device type group policies for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_device_type_group_policies_request import UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_device_type_group_policies_request = openapi_client.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest() # UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest |  (optional)

    try:
        # Update the device type group policies for the SSID
        api_response = api_instance.update_network_wireless_ssid_device_type_group_policies_1(network_id, number, update_network_wireless_ssid_device_type_group_policies_request=update_network_wireless_ssid_device_type_group_policies_request)
        print("The response of SsidsApi->update_network_wireless_ssid_device_type_group_policies_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_device_type_group_policies_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_device_type_group_policies_request** | [**UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest**](UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_eap_override_1**
> GetNetworkWirelessSsidEapOverride200Response update_network_wireless_ssid_eap_override_1(network_id, number, update_network_wireless_ssid_eap_override_request=update_network_wireless_ssid_eap_override_request)

Update the EAP overridden parameters for an SSID.

Update the EAP overridden parameters for an SSID.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_eap_override200_response import GetNetworkWirelessSsidEapOverride200Response
from openapi_client.models.update_network_wireless_ssid_eap_override_request import UpdateNetworkWirelessSsidEapOverrideRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_eap_override_request = openapi_client.UpdateNetworkWirelessSsidEapOverrideRequest() # UpdateNetworkWirelessSsidEapOverrideRequest |  (optional)

    try:
        # Update the EAP overridden parameters for an SSID.
        api_response = api_instance.update_network_wireless_ssid_eap_override_1(network_id, number, update_network_wireless_ssid_eap_override_request=update_network_wireless_ssid_eap_override_request)
        print("The response of SsidsApi->update_network_wireless_ssid_eap_override_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_eap_override_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_eap_override_request** | [**UpdateNetworkWirelessSsidEapOverrideRequest**](UpdateNetworkWirelessSsidEapOverrideRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSsidEapOverride200Response**](GetNetworkWirelessSsidEapOverride200Response.md)

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

# **update_network_wireless_ssid_firewall_l3_firewall_rules_1**
> object update_network_wireless_ssid_firewall_l3_firewall_rules_1(network_id, number, update_network_wireless_ssid_firewall_l3_firewall_rules_request=update_network_wireless_ssid_firewall_l3_firewall_rules_request)

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l3_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest |  (optional)

    try:
        # Update the L3 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l3_firewall_rules_1(network_id, number, update_network_wireless_ssid_firewall_l3_firewall_rules_request=update_network_wireless_ssid_firewall_l3_firewall_rules_request)
        print("The response of SsidsApi->update_network_wireless_ssid_firewall_l3_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_firewall_l3_firewall_rules_1: %s\n" % e)
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

# **update_network_wireless_ssid_firewall_l7_firewall_rules_1**
> object update_network_wireless_ssid_firewall_l7_firewall_rules_1(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the L7 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l7_firewall_rules_1(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)
        print("The response of SsidsApi->update_network_wireless_ssid_firewall_l7_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_firewall_l7_firewall_rules_1: %s\n" % e)
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

# **update_network_wireless_ssid_hotspot20_1**
> object update_network_wireless_ssid_hotspot20_1(network_id, number, update_network_wireless_ssid_hotspot20_request=update_network_wireless_ssid_hotspot20_request)

Update the Hotspot 2.0 settings of an SSID

Update the Hotspot 2.0 settings of an SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_hotspot20_request import UpdateNetworkWirelessSsidHotspot20Request
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_hotspot20_request = openapi_client.UpdateNetworkWirelessSsidHotspot20Request() # UpdateNetworkWirelessSsidHotspot20Request |  (optional)

    try:
        # Update the Hotspot 2.0 settings of an SSID
        api_response = api_instance.update_network_wireless_ssid_hotspot20_1(network_id, number, update_network_wireless_ssid_hotspot20_request=update_network_wireless_ssid_hotspot20_request)
        print("The response of SsidsApi->update_network_wireless_ssid_hotspot20_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_hotspot20_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_hotspot20_request** | [**UpdateNetworkWirelessSsidHotspot20Request**](UpdateNetworkWirelessSsidHotspot20Request.md)|  | [optional] 

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

# **update_network_wireless_ssid_identity_psk_1**
> object update_network_wireless_ssid_identity_psk_1(network_id, number, identity_psk_id, update_network_wireless_ssid_identity_psk_request=update_network_wireless_ssid_identity_psk_request)

Update an Identity PSK

Update an Identity PSK

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_identity_psk_request import UpdateNetworkWirelessSsidIdentityPskRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    identity_psk_id = 'identity_psk_id_example' # str | 
    update_network_wireless_ssid_identity_psk_request = openapi_client.UpdateNetworkWirelessSsidIdentityPskRequest() # UpdateNetworkWirelessSsidIdentityPskRequest |  (optional)

    try:
        # Update an Identity PSK
        api_response = api_instance.update_network_wireless_ssid_identity_psk_1(network_id, number, identity_psk_id, update_network_wireless_ssid_identity_psk_request=update_network_wireless_ssid_identity_psk_request)
        print("The response of SsidsApi->update_network_wireless_ssid_identity_psk_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_identity_psk_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **identity_psk_id** | **str**|  | 
 **update_network_wireless_ssid_identity_psk_request** | [**UpdateNetworkWirelessSsidIdentityPskRequest**](UpdateNetworkWirelessSsidIdentityPskRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_schedules_1**
> object update_network_wireless_ssid_schedules_1(network_id, number, update_network_wireless_ssid_schedules_request=update_network_wireless_ssid_schedules_request)

Update the outage schedule for the SSID

Update the outage schedule for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_schedules_request import UpdateNetworkWirelessSsidSchedulesRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_schedules_request = openapi_client.UpdateNetworkWirelessSsidSchedulesRequest() # UpdateNetworkWirelessSsidSchedulesRequest |  (optional)

    try:
        # Update the outage schedule for the SSID
        api_response = api_instance.update_network_wireless_ssid_schedules_1(network_id, number, update_network_wireless_ssid_schedules_request=update_network_wireless_ssid_schedules_request)
        print("The response of SsidsApi->update_network_wireless_ssid_schedules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_schedules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_schedules_request** | [**UpdateNetworkWirelessSsidSchedulesRequest**](UpdateNetworkWirelessSsidSchedulesRequest.md)|  | [optional] 

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

# **update_network_wireless_ssid_splash_settings_1**
> GetNetworkWirelessSsidSplashSettings200Response update_network_wireless_ssid_splash_settings_1(network_id, number, update_network_wireless_ssid_splash_settings_request=update_network_wireless_ssid_splash_settings_request)

Modify the splash page settings for the given SSID

Modify the splash page settings for the given SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_wireless_ssid_splash_settings200_response import GetNetworkWirelessSsidSplashSettings200Response
from openapi_client.models.update_network_wireless_ssid_splash_settings_request import UpdateNetworkWirelessSsidSplashSettingsRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_splash_settings_request = openapi_client.UpdateNetworkWirelessSsidSplashSettingsRequest() # UpdateNetworkWirelessSsidSplashSettingsRequest |  (optional)

    try:
        # Modify the splash page settings for the given SSID
        api_response = api_instance.update_network_wireless_ssid_splash_settings_1(network_id, number, update_network_wireless_ssid_splash_settings_request=update_network_wireless_ssid_splash_settings_request)
        print("The response of SsidsApi->update_network_wireless_ssid_splash_settings_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_splash_settings_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_splash_settings_request** | [**UpdateNetworkWirelessSsidSplashSettingsRequest**](UpdateNetworkWirelessSsidSplashSettingsRequest.md)|  | [optional] 

### Return type

[**GetNetworkWirelessSsidSplashSettings200Response**](GetNetworkWirelessSsidSplashSettings200Response.md)

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

# **update_network_wireless_ssid_traffic_shaping_rules_1**
> object update_network_wireless_ssid_traffic_shaping_rules_1(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)

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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_traffic_shaping_rules_request = openapi_client.UpdateNetworkWirelessSsidTrafficShapingRulesRequest() # UpdateNetworkWirelessSsidTrafficShapingRulesRequest |  (optional)

    try:
        # Update the traffic shaping settings for an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_traffic_shaping_rules_1(network_id, number, update_network_wireless_ssid_traffic_shaping_rules_request=update_network_wireless_ssid_traffic_shaping_rules_request)
        print("The response of SsidsApi->update_network_wireless_ssid_traffic_shaping_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_traffic_shaping_rules_1: %s\n" % e)
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

# **update_network_wireless_ssid_vpn_1**
> object update_network_wireless_ssid_vpn_1(network_id, number, update_network_wireless_ssid_vpn_request=update_network_wireless_ssid_vpn_request)

Update the VPN settings for the SSID

Update the VPN settings for the SSID

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_wireless_ssid_vpn_request import UpdateNetworkWirelessSsidVpnRequest
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
    api_instance = openapi_client.SsidsApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_vpn_request = openapi_client.UpdateNetworkWirelessSsidVpnRequest() # UpdateNetworkWirelessSsidVpnRequest |  (optional)

    try:
        # Update the VPN settings for the SSID
        api_response = api_instance.update_network_wireless_ssid_vpn_1(network_id, number, update_network_wireless_ssid_vpn_request=update_network_wireless_ssid_vpn_request)
        print("The response of SsidsApi->update_network_wireless_ssid_vpn_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SsidsApi->update_network_wireless_ssid_vpn_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **number** | **str**|  | 
 **update_network_wireless_ssid_vpn_request** | [**UpdateNetworkWirelessSsidVpnRequest**](UpdateNetworkWirelessSsidVpnRequest.md)|  | [optional] 

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

