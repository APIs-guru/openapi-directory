# openapi_client.OrganizationsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claim_into_organization**](OrganizationsApi.md#claim_into_organization) | **POST** /organizations/{organizationId}/claim | Claim a list of devices, licenses, and/or orders into an organization
[**clone_organization**](OrganizationsApi.md#clone_organization) | **POST** /organizations/{organizationId}/clone | Create a new organization by cloning the addressed organization
[**get_organization**](OrganizationsApi.md#get_organization) | **GET** /organizations/{organizationId} | Return an organization
[**get_organization_device_statuses**](OrganizationsApi.md#get_organization_device_statuses) | **GET** /organizations/{organizationId}/deviceStatuses | List the status of every Meraki device in the organization
[**get_organization_inventory**](OrganizationsApi.md#get_organization_inventory) | **GET** /organizations/{organizationId}/inventory | Return the inventory for an organization
[**get_organization_third_party_vpn_peers**](OrganizationsApi.md#get_organization_third_party_vpn_peers) | **GET** /organizations/{organizationId}/thirdPartyVPNPeers | Return the third party VPN peers for an organization
[**get_organization_uplinks_loss_and_latency**](OrganizationsApi.md#get_organization_uplinks_loss_and_latency) | **GET** /organizations/{organizationId}/uplinksLossAndLatency | Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
[**get_organizations**](OrganizationsApi.md#get_organizations) | **GET** /organizations | List the organizations that the user has privileges on
[**update_organization_third_party_vpn_peers**](OrganizationsApi.md#update_organization_third_party_vpn_peers) | **PUT** /organizations/{organizationId}/thirdPartyVPNPeers | Update the third party VPN peers for an organization


# **claim_into_organization**
> object claim_into_organization(organization_id, claim_into_organization_request=claim_into_organization_request)

Claim a list of devices, licenses, and/or orders into an organization

Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.claim_into_organization_request import ClaimIntoOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    claim_into_organization_request = openapi_client.ClaimIntoOrganizationRequest() # ClaimIntoOrganizationRequest |  (optional)

    try:
        # Claim a list of devices, licenses, and/or orders into an organization
        api_response = api_instance.claim_into_organization(organization_id, claim_into_organization_request=claim_into_organization_request)
        print("The response of OrganizationsApi->claim_into_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->claim_into_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **claim_into_organization_request** | [**ClaimIntoOrganizationRequest**](ClaimIntoOrganizationRequest.md)|  | [optional] 

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

# **clone_organization**
> object clone_organization(organization_id, clone_organization_request)

Create a new organization by cloning the addressed organization

Create a new organization by cloning the addressed organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.clone_organization_request import CloneOrganizationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    clone_organization_request = openapi_client.CloneOrganizationRequest() # CloneOrganizationRequest | 

    try:
        # Create a new organization by cloning the addressed organization
        api_response = api_instance.clone_organization(organization_id, clone_organization_request)
        print("The response of OrganizationsApi->clone_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->clone_organization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **clone_organization_request** | [**CloneOrganizationRequest**](CloneOrganizationRequest.md)|  | 

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

# **get_organization**
> object get_organization(organization_id)

Return an organization

Return an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return an organization
        api_response = api_instance.get_organization(organization_id)
        print("The response of OrganizationsApi->get_organization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization: %s\n" % e)
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

# **get_organization_device_statuses**
> List[object] get_organization_device_statuses(organization_id)

List the status of every Meraki device in the organization

List the status of every Meraki device in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List the status of every Meraki device in the organization
        api_response = api_instance.get_organization_device_statuses(organization_id)
        print("The response of OrganizationsApi->get_organization_device_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_device_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **get_organization_inventory**
> List[object] get_organization_inventory(organization_id, include_license_info=include_license_info)

Return the inventory for an organization

Return the inventory for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    include_license_info = True # bool | When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false. (optional)

    try:
        # Return the inventory for an organization
        api_response = api_instance.get_organization_inventory(organization_id, include_license_info=include_license_info)
        print("The response of OrganizationsApi->get_organization_inventory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_inventory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **include_license_info** | **bool**| When this parameter is true, each entity in the response will include the license expiration date of the device (if any). Only applies to organizations that are on the per-device licensing model. Defaults to false. | [optional] 

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

# **get_organization_third_party_vpn_peers**
> List[object] get_organization_third_party_vpn_peers(organization_id)

Return the third party VPN peers for an organization

Return the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # Return the third party VPN peers for an organization
        api_response = api_instance.get_organization_third_party_vpn_peers(organization_id)
        print("The response of OrganizationsApi->get_organization_third_party_vpn_peers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_third_party_vpn_peers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **get_organization_uplinks_loss_and_latency**
> List[object] get_organization_uplinks_loss_and_latency(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 60 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. (optional)
    uplink = 'uplink_example' # str | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. (optional)
    ip = 'ip_example' # str | Optional filter for a specific destination IP. Default will return all destination IPs. (optional)

    try:
        # Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
        api_response = api_instance.get_organization_uplinks_loss_and_latency(organization_id, t0=t0, t1=t1, timespan=timespan, uplink=uplink, ip=ip)
        print("The response of OrganizationsApi->get_organization_uplinks_loss_and_latency:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organization_uplinks_loss_and_latency: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 60 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. | [optional] 
 **uplink** | **str**| Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. | [optional] 
 **ip** | **str**| Optional filter for a specific destination IP. Default will return all destination IPs. | [optional] 

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

# **get_organizations**
> List[object] get_organizations()

List the organizations that the user has privileges on

List the organizations that the user has privileges on

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)

    try:
        # List the organizations that the user has privileges on
        api_response = api_instance.get_organizations()
        print("The response of OrganizationsApi->get_organizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->get_organizations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **update_organization_third_party_vpn_peers**
> List[object] update_organization_third_party_vpn_peers(organization_id, update_organization_third_party_vpn_peers_request)

Update the third party VPN peers for an organization

Update the third party VPN peers for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_third_party_vpn_peers_request import UpdateOrganizationThirdPartyVPNPeersRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
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
    api_instance = openapi_client.OrganizationsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_third_party_vpn_peers_request = openapi_client.UpdateOrganizationThirdPartyVPNPeersRequest() # UpdateOrganizationThirdPartyVPNPeersRequest | 

    try:
        # Update the third party VPN peers for an organization
        api_response = api_instance.update_organization_third_party_vpn_peers(organization_id, update_organization_third_party_vpn_peers_request)
        print("The response of OrganizationsApi->update_organization_third_party_vpn_peers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrganizationsApi->update_organization_third_party_vpn_peers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_third_party_vpn_peers_request** | [**UpdateOrganizationThirdPartyVPNPeersRequest**](UpdateOrganizationThirdPartyVPNPeersRequest.md)|  | 

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

