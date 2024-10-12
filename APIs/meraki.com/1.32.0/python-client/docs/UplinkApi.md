# openapi_client.UplinkApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_cellular_gateway_uplink_1**](UplinkApi.md#get_network_cellular_gateway_uplink_1) | **GET** /networks/{networkId}/cellularGateway/uplink | Returns the uplink settings for your MG network.
[**get_organization_cellular_gateway_uplink_statuses_1**](UplinkApi.md#get_organization_cellular_gateway_uplink_statuses_1) | **GET** /organizations/{organizationId}/cellularGateway/uplink/statuses | List the uplink status of every Meraki MG cellular gateway in the organization
[**update_network_cellular_gateway_uplink_1**](UplinkApi.md#update_network_cellular_gateway_uplink_1) | **PUT** /networks/{networkId}/cellularGateway/uplink | Updates the uplink settings for your MG network.


# **get_network_cellular_gateway_uplink_1**
> object get_network_cellular_gateway_uplink_1(network_id)

Returns the uplink settings for your MG network.

Returns the uplink settings for your MG network.

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
    api_instance = openapi_client.UplinkApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns the uplink settings for your MG network.
        api_response = api_instance.get_network_cellular_gateway_uplink_1(network_id)
        print("The response of UplinkApi->get_network_cellular_gateway_uplink_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UplinkApi->get_network_cellular_gateway_uplink_1: %s\n" % e)
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

# **get_organization_cellular_gateway_uplink_statuses_1**
> List[GetOrganizationCellularGatewayUplinkStatuses200ResponseInner] get_organization_cellular_gateway_uplink_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)

List the uplink status of every Meraki MG cellular gateway in the organization

List the uplink status of every Meraki MG cellular gateway in the organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_cellular_gateway_uplink_statuses200_response_inner import GetOrganizationCellularGatewayUplinkStatuses200ResponseInner
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
    api_instance = openapi_client.UplinkApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned devices will be filtered to only include these networks. (optional)
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned devices will be filtered to only include these serials. (optional)
    iccids = ['iccids_example'] # List[str] | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. (optional)

    try:
        # List the uplink status of every Meraki MG cellular gateway in the organization
        api_response = api_instance.get_organization_cellular_gateway_uplink_statuses_1(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before, network_ids=network_ids, serials=serials, iccids=iccids)
        print("The response of UplinkApi->get_organization_cellular_gateway_uplink_statuses_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UplinkApi->get_organization_cellular_gateway_uplink_statuses_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of network IDs. The returned devices will be filtered to only include these networks. | [optional] 
 **serials** | [**List[str]**](str.md)| A list of serial numbers. The returned devices will be filtered to only include these serials. | [optional] 
 **iccids** | [**List[str]**](str.md)| A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. | [optional] 

### Return type

[**List[GetOrganizationCellularGatewayUplinkStatuses200ResponseInner]**](GetOrganizationCellularGatewayUplinkStatuses200ResponseInner.md)

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

# **update_network_cellular_gateway_uplink_1**
> object update_network_cellular_gateway_uplink_1(network_id, update_network_cellular_gateway_uplink_request=update_network_cellular_gateway_uplink_request)

Updates the uplink settings for your MG network.

Updates the uplink settings for your MG network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_cellular_gateway_uplink_request import UpdateNetworkCellularGatewayUplinkRequest
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
    api_instance = openapi_client.UplinkApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_cellular_gateway_uplink_request = openapi_client.UpdateNetworkCellularGatewayUplinkRequest() # UpdateNetworkCellularGatewayUplinkRequest |  (optional)

    try:
        # Updates the uplink settings for your MG network.
        api_response = api_instance.update_network_cellular_gateway_uplink_1(network_id, update_network_cellular_gateway_uplink_request=update_network_cellular_gateway_uplink_request)
        print("The response of UplinkApi->update_network_cellular_gateway_uplink_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UplinkApi->update_network_cellular_gateway_uplink_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_cellular_gateway_uplink_request** | [**UpdateNetworkCellularGatewayUplinkRequest**](UpdateNetworkCellularGatewayUplinkRequest.md)|  | [optional] 

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

