# openapi_client.L7FirewallRulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_firewall_l7_firewall_rules_2**](L7FirewallRulesApi.md#get_network_appliance_firewall_l7_firewall_rules_2) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules | List the MX L7 firewall rules for an MX network
[**get_network_appliance_firewall_l7_firewall_rules_application_categories_2**](L7FirewallRulesApi.md#get_network_appliance_firewall_l7_firewall_rules_application_categories_2) | **GET** /networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories | Return the L7 firewall application categories and their associated applications for an MX network
[**get_network_wireless_ssid_firewall_l7_firewall_rules_3**](L7FirewallRulesApi.md#get_network_wireless_ssid_firewall_l7_firewall_rules_3) | **GET** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Return the L7 firewall rules for an SSID on an MR network
[**update_network_appliance_firewall_l7_firewall_rules_2**](L7FirewallRulesApi.md#update_network_appliance_firewall_l7_firewall_rules_2) | **PUT** /networks/{networkId}/appliance/firewall/l7FirewallRules | Update the MX L7 firewall rules for an MX network
[**update_network_wireless_ssid_firewall_l7_firewall_rules_3**](L7FirewallRulesApi.md#update_network_wireless_ssid_firewall_l7_firewall_rules_3) | **PUT** /networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules | Update the L7 firewall rules of an SSID on an MR network


# **get_network_appliance_firewall_l7_firewall_rules_2**
> object get_network_appliance_firewall_l7_firewall_rules_2(network_id)

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
    api_instance = openapi_client.L7FirewallRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the MX L7 firewall rules for an MX network
        api_response = api_instance.get_network_appliance_firewall_l7_firewall_rules_2(network_id)
        print("The response of L7FirewallRulesApi->get_network_appliance_firewall_l7_firewall_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling L7FirewallRulesApi->get_network_appliance_firewall_l7_firewall_rules_2: %s\n" % e)
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

# **get_network_appliance_firewall_l7_firewall_rules_application_categories_2**
> object get_network_appliance_firewall_l7_firewall_rules_application_categories_2(network_id)

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
    api_instance = openapi_client.L7FirewallRulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the L7 firewall application categories and their associated applications for an MX network
        api_response = api_instance.get_network_appliance_firewall_l7_firewall_rules_application_categories_2(network_id)
        print("The response of L7FirewallRulesApi->get_network_appliance_firewall_l7_firewall_rules_application_categories_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling L7FirewallRulesApi->get_network_appliance_firewall_l7_firewall_rules_application_categories_2: %s\n" % e)
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

# **get_network_wireless_ssid_firewall_l7_firewall_rules_3**
> object get_network_wireless_ssid_firewall_l7_firewall_rules_3(network_id, number)

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
    api_instance = openapi_client.L7FirewallRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # Return the L7 firewall rules for an SSID on an MR network
        api_response = api_instance.get_network_wireless_ssid_firewall_l7_firewall_rules_3(network_id, number)
        print("The response of L7FirewallRulesApi->get_network_wireless_ssid_firewall_l7_firewall_rules_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling L7FirewallRulesApi->get_network_wireless_ssid_firewall_l7_firewall_rules_3: %s\n" % e)
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

# **update_network_appliance_firewall_l7_firewall_rules_2**
> object update_network_appliance_firewall_l7_firewall_rules_2(network_id, update_network_appliance_firewall_l7_firewall_rules_request=update_network_appliance_firewall_l7_firewall_rules_request)

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
    api_instance = openapi_client.L7FirewallRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkApplianceFirewallL7FirewallRulesRequest() # UpdateNetworkApplianceFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the MX L7 firewall rules for an MX network
        api_response = api_instance.update_network_appliance_firewall_l7_firewall_rules_2(network_id, update_network_appliance_firewall_l7_firewall_rules_request=update_network_appliance_firewall_l7_firewall_rules_request)
        print("The response of L7FirewallRulesApi->update_network_appliance_firewall_l7_firewall_rules_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling L7FirewallRulesApi->update_network_appliance_firewall_l7_firewall_rules_2: %s\n" % e)
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

# **update_network_wireless_ssid_firewall_l7_firewall_rules_3**
> object update_network_wireless_ssid_firewall_l7_firewall_rules_3(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)

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
    api_instance = openapi_client.L7FirewallRulesApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_firewall_l7_firewall_rules_request = openapi_client.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest() # UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest |  (optional)

    try:
        # Update the L7 firewall rules of an SSID on an MR network
        api_response = api_instance.update_network_wireless_ssid_firewall_l7_firewall_rules_3(network_id, number, update_network_wireless_ssid_firewall_l7_firewall_rules_request=update_network_wireless_ssid_firewall_l7_firewall_rules_request)
        print("The response of L7FirewallRulesApi->update_network_wireless_ssid_firewall_l7_firewall_rules_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling L7FirewallRulesApi->update_network_wireless_ssid_firewall_l7_firewall_rules_3: %s\n" % e)
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

