# openapi_client.VpnApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_appliance_vpn_bgp_1**](VpnApi.md#get_network_appliance_vpn_bgp_1) | **GET** /networks/{networkId}/appliance/vpn/bgp | Return a Hub BGP Configuration
[**get_network_appliance_vpn_site_to_site_vpn_1**](VpnApi.md#get_network_appliance_vpn_site_to_site_vpn_1) | **GET** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Return the site-to-site VPN settings of a network
[**get_network_wireless_ssid_vpn_2**](VpnApi.md#get_network_wireless_ssid_vpn_2) | **GET** /networks/{networkId}/wireless/ssids/{number}/vpn | List the VPN settings for the SSID.
[**get_organization_appliance_vpn_stats_1**](VpnApi.md#get_organization_appliance_vpn_stats_1) | **GET** /organizations/{organizationId}/appliance/vpn/stats | Show VPN history stat for networks in an organization
[**get_organization_appliance_vpn_statuses_1**](VpnApi.md#get_organization_appliance_vpn_statuses_1) | **GET** /organizations/{organizationId}/appliance/vpn/statuses | Show VPN status for networks in an organization
[**get_organization_appliance_vpn_third_party_vpn_peers_1**](VpnApi.md#get_organization_appliance_vpn_third_party_vpn_peers_1) | **GET** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Return the third party VPN peers for an organization
[**get_organization_appliance_vpn_vpn_firewall_rules_1**](VpnApi.md#get_organization_appliance_vpn_vpn_firewall_rules_1) | **GET** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Return the firewall rules for an organization&#39;s site-to-site VPN
[**update_network_appliance_vpn_bgp_1**](VpnApi.md#update_network_appliance_vpn_bgp_1) | **PUT** /networks/{networkId}/appliance/vpn/bgp | Update a Hub BGP Configuration
[**update_network_appliance_vpn_site_to_site_vpn_1**](VpnApi.md#update_network_appliance_vpn_site_to_site_vpn_1) | **PUT** /networks/{networkId}/appliance/vpn/siteToSiteVpn | Update the site-to-site VPN settings of a network
[**update_network_wireless_ssid_vpn_2**](VpnApi.md#update_network_wireless_ssid_vpn_2) | **PUT** /networks/{networkId}/wireless/ssids/{number}/vpn | Update the VPN settings for the SSID
[**update_organization_appliance_vpn_third_party_vpn_peers_1**](VpnApi.md#update_organization_appliance_vpn_third_party_vpn_peers_1) | **PUT** /organizations/{organizationId}/appliance/vpn/thirdPartyVPNPeers | Update the third party VPN peers for an organization
[**update_organization_appliance_vpn_vpn_firewall_rules_1**](VpnApi.md#update_organization_appliance_vpn_vpn_firewall_rules_1) | **PUT** /organizations/{organizationId}/appliance/vpn/vpnFirewallRules | Update the firewall rules of an organization&#39;s site-to-site VPN


# **get_network_appliance_vpn_bgp_1**
> object get_network_appliance_vpn_bgp_1(network_id)

Return a Hub BGP Configuration

Return a Hub BGP Configuration

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
    api_instance = openapi_client.VpnApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return a Hub BGP Configuration
        api_response = api_instance.get_network_appliance_vpn_bgp_1(network_id)
        print("The response of VpnApi->get_network_appliance_vpn_bgp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_network_appliance_vpn_bgp_1: %s\n" % e)
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

# **get_network_appliance_vpn_site_to_site_vpn_1**
> GetNetworkApplianceVpnSiteToSiteVpn200Response get_network_appliance_vpn_site_to_site_vpn_1(network_id)

Return the site-to-site VPN settings of a network

Return the site-to-site VPN settings of a network. Only valid for MX networks.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vpn_site_to_site_vpn200_response import GetNetworkApplianceVpnSiteToSiteVpn200Response
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
    api_instance = openapi_client.VpnApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Return the site-to-site VPN settings of a network
        api_response = api_instance.get_network_appliance_vpn_site_to_site_vpn_1(network_id)
        print("The response of VpnApi->get_network_appliance_vpn_site_to_site_vpn_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_network_appliance_vpn_site_to_site_vpn_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkApplianceVpnSiteToSiteVpn200Response**](GetNetworkApplianceVpnSiteToSiteVpn200Response.md)

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

# **get_network_wireless_ssid_vpn_2**
> object get_network_wireless_ssid_vpn_2(network_id, number)

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
    api_instance = openapi_client.VpnApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 

    try:
        # List the VPN settings for the SSID.
        api_response = api_instance.get_network_wireless_ssid_vpn_2(network_id, number)
        print("The response of VpnApi->get_network_wireless_ssid_vpn_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_network_wireless_ssid_vpn_2: %s\n" % e)
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

# **get_organization_appliance_vpn_stats_1**
> List[object] get_organization_appliance_vpn_stats_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, t0=t0, t1=t1, timespan=timespan)

Show VPN history stat for networks in an organization

Show VPN history stat for networks in an organization

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
    api_instance = openapi_client.VpnApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)

    try:
        # Show VPN history stat for networks in an organization
        api_response = api_instance.get_organization_appliance_vpn_stats_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, t0=t0, t1=t1, timespan=timespan)
        print("The response of VpnApi->get_organization_appliance_vpn_stats_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_organization_appliance_vpn_stats_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 31 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 

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

# **get_organization_appliance_vpn_statuses_1**
> List[object] get_organization_appliance_vpn_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)

Show VPN status for networks in an organization

Show VPN status for networks in an organization

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
    api_instance = openapi_client.VpnApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 (optional)

    try:
        # Show VPN status for networks in an organization
        api_response = api_instance.get_organization_appliance_vpn_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids)
        print("The response of VpnApi->get_organization_appliance_vpn_statuses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_organization_appliance_vpn_statuses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]&#x3D;N_12345678&amp;networkIds[]&#x3D;L_3456 | [optional] 

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

# **get_organization_appliance_vpn_third_party_vpn_peers_1**
> GetOrganizationApplianceVpnThirdPartyVPNPeers200Response get_organization_appliance_vpn_third_party_vpn_peers_1(organization_id)

Return the third party VPN peers for an organization

Return the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response
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
    api_instance = openapi_client.VpnApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the third party VPN peers for an organization
        api_response = api_instance.get_organization_appliance_vpn_third_party_vpn_peers_1(organization_id)
        print("The response of VpnApi->get_organization_appliance_vpn_third_party_vpn_peers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_organization_appliance_vpn_third_party_vpn_peers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

[**GetOrganizationApplianceVpnThirdPartyVPNPeers200Response**](GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.md)

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

# **get_organization_appliance_vpn_vpn_firewall_rules_1**
> object get_organization_appliance_vpn_vpn_firewall_rules_1(organization_id)

Return the firewall rules for an organization's site-to-site VPN

Return the firewall rules for an organization's site-to-site VPN

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
    api_instance = openapi_client.VpnApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the firewall rules for an organization's site-to-site VPN
        api_response = api_instance.get_organization_appliance_vpn_vpn_firewall_rules_1(organization_id)
        print("The response of VpnApi->get_organization_appliance_vpn_vpn_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->get_organization_appliance_vpn_vpn_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **update_network_appliance_vpn_bgp_1**
> object update_network_appliance_vpn_bgp_1(network_id, update_network_appliance_vpn_bgp_request)

Update a Hub BGP Configuration

Update a Hub BGP Configuration

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_appliance_vpn_bgp_request import UpdateNetworkApplianceVpnBgpRequest
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
    api_instance = openapi_client.VpnApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vpn_bgp_request = openapi_client.UpdateNetworkApplianceVpnBgpRequest() # UpdateNetworkApplianceVpnBgpRequest | 

    try:
        # Update a Hub BGP Configuration
        api_response = api_instance.update_network_appliance_vpn_bgp_1(network_id, update_network_appliance_vpn_bgp_request)
        print("The response of VpnApi->update_network_appliance_vpn_bgp_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->update_network_appliance_vpn_bgp_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_vpn_bgp_request** | [**UpdateNetworkApplianceVpnBgpRequest**](UpdateNetworkApplianceVpnBgpRequest.md)|  | 

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

# **update_network_appliance_vpn_site_to_site_vpn_1**
> GetNetworkApplianceVpnSiteToSiteVpn200Response update_network_appliance_vpn_site_to_site_vpn_1(network_id, update_network_appliance_vpn_site_to_site_vpn_request)

Update the site-to-site VPN settings of a network

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_appliance_vpn_site_to_site_vpn200_response import GetNetworkApplianceVpnSiteToSiteVpn200Response
from openapi_client.models.update_network_appliance_vpn_site_to_site_vpn_request import UpdateNetworkApplianceVpnSiteToSiteVpnRequest
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
    api_instance = openapi_client.VpnApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_appliance_vpn_site_to_site_vpn_request = openapi_client.UpdateNetworkApplianceVpnSiteToSiteVpnRequest() # UpdateNetworkApplianceVpnSiteToSiteVpnRequest | 

    try:
        # Update the site-to-site VPN settings of a network
        api_response = api_instance.update_network_appliance_vpn_site_to_site_vpn_1(network_id, update_network_appliance_vpn_site_to_site_vpn_request)
        print("The response of VpnApi->update_network_appliance_vpn_site_to_site_vpn_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->update_network_appliance_vpn_site_to_site_vpn_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_appliance_vpn_site_to_site_vpn_request** | [**UpdateNetworkApplianceVpnSiteToSiteVpnRequest**](UpdateNetworkApplianceVpnSiteToSiteVpnRequest.md)|  | 

### Return type

[**GetNetworkApplianceVpnSiteToSiteVpn200Response**](GetNetworkApplianceVpnSiteToSiteVpn200Response.md)

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

# **update_network_wireless_ssid_vpn_2**
> object update_network_wireless_ssid_vpn_2(network_id, number, update_network_wireless_ssid_vpn_request=update_network_wireless_ssid_vpn_request)

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
    api_instance = openapi_client.VpnApi(api_client)
    network_id = 'network_id_example' # str | 
    number = 'number_example' # str | 
    update_network_wireless_ssid_vpn_request = openapi_client.UpdateNetworkWirelessSsidVpnRequest() # UpdateNetworkWirelessSsidVpnRequest |  (optional)

    try:
        # Update the VPN settings for the SSID
        api_response = api_instance.update_network_wireless_ssid_vpn_2(network_id, number, update_network_wireless_ssid_vpn_request=update_network_wireless_ssid_vpn_request)
        print("The response of VpnApi->update_network_wireless_ssid_vpn_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->update_network_wireless_ssid_vpn_2: %s\n" % e)
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

# **update_organization_appliance_vpn_third_party_vpn_peers_1**
> GetOrganizationApplianceVpnThirdPartyVPNPeers200Response update_organization_appliance_vpn_third_party_vpn_peers_1(organization_id, update_organization_appliance_vpn_third_party_vpn_peers_request)

Update the third party VPN peers for an organization

Update the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response
from openapi_client.models.update_organization_appliance_vpn_third_party_vpn_peers_request import UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest
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
    api_instance = openapi_client.VpnApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_vpn_third_party_vpn_peers_request = openapi_client.UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest() # UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest | 

    try:
        # Update the third party VPN peers for an organization
        api_response = api_instance.update_organization_appliance_vpn_third_party_vpn_peers_1(organization_id, update_organization_appliance_vpn_third_party_vpn_peers_request)
        print("The response of VpnApi->update_organization_appliance_vpn_third_party_vpn_peers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->update_organization_appliance_vpn_third_party_vpn_peers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_vpn_third_party_vpn_peers_request** | [**UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest**](UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest.md)|  | 

### Return type

[**GetOrganizationApplianceVpnThirdPartyVPNPeers200Response**](GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.md)

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

# **update_organization_appliance_vpn_vpn_firewall_rules_1**
> object update_organization_appliance_vpn_vpn_firewall_rules_1(organization_id, update_organization_appliance_vpn_vpn_firewall_rules_request=update_organization_appliance_vpn_vpn_firewall_rules_request)

Update the firewall rules of an organization's site-to-site VPN

Update the firewall rules of an organization's site-to-site VPN

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_appliance_vpn_vpn_firewall_rules_request import UpdateOrganizationApplianceVpnVpnFirewallRulesRequest
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
    api_instance = openapi_client.VpnApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_appliance_vpn_vpn_firewall_rules_request = openapi_client.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest() # UpdateOrganizationApplianceVpnVpnFirewallRulesRequest |  (optional)

    try:
        # Update the firewall rules of an organization's site-to-site VPN
        api_response = api_instance.update_organization_appliance_vpn_vpn_firewall_rules_1(organization_id, update_organization_appliance_vpn_vpn_firewall_rules_request=update_organization_appliance_vpn_vpn_firewall_rules_request)
        print("The response of VpnApi->update_organization_appliance_vpn_vpn_firewall_rules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnApi->update_organization_appliance_vpn_vpn_firewall_rules_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_appliance_vpn_vpn_firewall_rules_request** | [**UpdateOrganizationApplianceVpnVpnFirewallRulesRequest**](UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.md)|  | [optional] 

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

