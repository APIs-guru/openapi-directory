# openapi_client.SecurityAndNetworkingApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domain_lookup**](SecurityAndNetworkingApi.md#domain_lookup) | **GET** /domain-lookup | Domain Lookup
[**email_verify**](SecurityAndNetworkingApi.md#email_verify) | **GET** /email-verify | Email Verify
[**host_reputation**](SecurityAndNetworkingApi.md#host_reputation) | **GET** /host-reputation | Host Reputation
[**i_p_blocklist**](SecurityAndNetworkingApi.md#i_p_blocklist) | **GET** /ip-blocklist | IP Blocklist
[**i_p_blocklist_download**](SecurityAndNetworkingApi.md#i_p_blocklist_download) | **GET** /ip-blocklist-download | IP Blocklist Download
[**i_p_probe**](SecurityAndNetworkingApi.md#i_p_probe) | **GET** /ip-probe | IP Probe


# **domain_lookup**
> DomainLookupResponse domain_lookup(host, live=live)

Domain Lookup

Retrieve domain name details and detect potentially malicious or dangerous domains

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.domain_lookup_response import DomainLookupResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityAndNetworkingApi(api_client)
    host = 'host_example' # str | A domain name, hostname, FQDN, URL, HTML link or email address to lookup
    live = True # bool | For domains that we have never seen before then perform various live checks and realtime reconnaissance. <br>NOTE: this option may add additional non-deterministic delay to the request, if you require consistently fast API response times or just want to check our domain blocklists then you can disable this option (optional) (default to True)

    try:
        # Domain Lookup
        api_response = api_instance.domain_lookup(host, live=live)
        print("The response of SecurityAndNetworkingApi->domain_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityAndNetworkingApi->domain_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **str**| A domain name, hostname, FQDN, URL, HTML link or email address to lookup | 
 **live** | **bool**| For domains that we have never seen before then perform various live checks and realtime reconnaissance. &lt;br&gt;NOTE: this option may add additional non-deterministic delay to the request, if you require consistently fast API response times or just want to check our domain blocklists then you can disable this option | [optional] [default to True]

### Return type

[**DomainLookupResponse**](DomainLookupResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_verify**
> EmailVerifyResponse email_verify(email, fix_typos=fix_typos)

Email Verify

SMTP based email address verification

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.email_verify_response import EmailVerifyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityAndNetworkingApi(api_client)
    email = 'email_example' # str | An email address
    fix_typos = False # bool | Automatically attempt to fix typos in the address (optional) (default to False)

    try:
        # Email Verify
        api_response = api_instance.email_verify(email, fix_typos=fix_typos)
        print("The response of SecurityAndNetworkingApi->email_verify:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityAndNetworkingApi->email_verify: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| An email address | 
 **fix_typos** | **bool**| Automatically attempt to fix typos in the address | [optional] [default to False]

### Return type

[**EmailVerifyResponse**](EmailVerifyResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **host_reputation**
> HostReputationResponse host_reputation(host, list_rating=list_rating, zones=zones)

Host Reputation

Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.host_reputation_response import HostReputationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityAndNetworkingApi(api_client)
    host = 'host_example' # str | An IP address, domain name, FQDN or URL. <br>If you supply a domain/URL it will be checked against the URI DNSBL lists
    list_rating = 3 # int | Only check lists with this rating or better (optional) (default to 3)
    zones = 'zones_example' # str | Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values (optional)

    try:
        # Host Reputation
        api_response = api_instance.host_reputation(host, list_rating=list_rating, zones=zones)
        print("The response of SecurityAndNetworkingApi->host_reputation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityAndNetworkingApi->host_reputation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **host** | **str**| An IP address, domain name, FQDN or URL. &lt;br&gt;If you supply a domain/URL it will be checked against the URI DNSBL lists | 
 **list_rating** | **int**| Only check lists with this rating or better | [optional] [default to 3]
 **zones** | **str**| Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values | [optional] 

### Return type

[**HostReputationResponse**](HostReputationResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **i_p_blocklist**
> IPBlocklistResponse i_p_blocklist(ip, vpn_lookup=vpn_lookup)

IP Blocklist

The IP Blocklist API will detect potentially malicious or dangerous IP addresses

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.ip_blocklist_response import IPBlocklistResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityAndNetworkingApi(api_client)
    ip = 'ip_example' # str | An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked
    vpn_lookup = False # bool | Include public VPN provider IP addresses. <br><b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href=\"https://www.neutrinoapi.com/api/ip-probe/\">IP Probe API</a> (optional) (default to False)

    try:
        # IP Blocklist
        api_response = api_instance.i_p_blocklist(ip, vpn_lookup=vpn_lookup)
        print("The response of SecurityAndNetworkingApi->i_p_blocklist:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityAndNetworkingApi->i_p_blocklist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked | 
 **vpn_lookup** | **bool**| Include public VPN provider IP addresses. &lt;br&gt;&lt;b&gt;NOTE&lt;/b&gt;: For more advanced VPN detection including the ability to identify private and stealth VPNs use the &lt;a href&#x3D;\&quot;https://www.neutrinoapi.com/api/ip-probe/\&quot;&gt;IP Probe API&lt;/a&gt; | [optional] [default to False]

### Return type

[**IPBlocklistResponse**](IPBlocklistResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **i_p_blocklist_download**
> bytearray i_p_blocklist_download(format=format, include_vpn=include_vpn, cidr=cidr, ip6=ip6)

IP Blocklist Download

This API is a direct feed to our IP blocklist data

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityAndNetworkingApi(api_client)
    format = 'csv' # str | The data format. Can be either CSV or TXT (optional) (default to 'csv')
    include_vpn = False # bool | Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. <br><b>WARNING</b>: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation (optional) (default to False)
    cidr = False # bool | Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility (optional) (default to False)
    ip6 = False # bool | Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6 (optional) (default to False)

    try:
        # IP Blocklist Download
        api_response = api_instance.i_p_blocklist_download(format=format, include_vpn=include_vpn, cidr=cidr, ip6=ip6)
        print("The response of SecurityAndNetworkingApi->i_p_blocklist_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityAndNetworkingApi->i_p_blocklist_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| The data format. Can be either CSV or TXT | [optional] [default to &#39;csv&#39;]
 **include_vpn** | **bool**| Include public VPN provider addresses, this option is only available for Tier 3 or higher accounts. Adds any IPs which are solely listed as VPN providers, IPs that are listed on multiple sensors will still be included without enabling this option. &lt;br&gt;&lt;b&gt;WARNING&lt;/b&gt;: This adds at least an additional 8 million IP addresses to the download if not using CIDR notation | [optional] [default to False]
 **cidr** | **bool**| Output IPs using CIDR notation. This option should be preferred but is off by default for backwards compatibility | [optional] [default to False]
 **ip6** | **bool**| Output the IPv6 version of the blocklist, the default is to output IPv4 only. Note that this option enables CIDR notation too as this is the only notation currently supported for IPv6 | [optional] [default to False]

### Return type

**bytearray**

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **i_p_probe**
> IPProbeResponse i_p_probe(ip)

IP Probe

Execute a realtime network probe against an IPv4 or IPv6 address

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.ip_probe_response import IPProbeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SecurityAndNetworkingApi(api_client)
    ip = 'ip_example' # str | IPv4 or IPv6 address

    try:
        # IP Probe
        api_response = api_instance.i_p_probe(ip)
        print("The response of SecurityAndNetworkingApi->i_p_probe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SecurityAndNetworkingApi->i_p_probe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ip** | **str**| IPv4 or IPv6 address | 

### Return type

[**IPProbeResponse**](IPProbeResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

