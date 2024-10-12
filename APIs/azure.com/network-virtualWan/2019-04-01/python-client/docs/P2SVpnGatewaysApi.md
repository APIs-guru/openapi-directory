# openapi_client.P2SVpnGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**p2s_vpn_gateways_generate_vpn_profile**](P2SVpnGatewaysApi.md#p2s_vpn_gateways_generate_vpn_profile) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/generatevpnprofile | 
[**p2s_vpn_gateways_get_p2s_vpn_connection_health**](P2SVpnGatewaysApi.md#p2s_vpn_gateways_get_p2s_vpn_connection_health) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/getP2sVpnConnectionHealth | 
[**p2s_vpn_gateways_update_tags**](P2SVpnGatewaysApi.md#p2s_vpn_gateways_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName} | 


# **p2s_vpn_gateways_generate_vpn_profile**
> VpnProfileResponse p2s_vpn_gateways_generate_vpn_profile(resource_group_name, gateway_name, api_version, subscription_id, parameters)



Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.p2_s_vpn_profile_parameters import P2SVpnProfileParameters
from openapi_client.models.vpn_profile_response import VpnProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.P2SVpnGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gateway_name = 'gateway_name_example' # str | The name of the P2SVpnGateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.P2SVpnProfileParameters() # P2SVpnProfileParameters | Parameters supplied to the generate P2SVpnGateway VPN client package operation.

    try:
        api_response = api_instance.p2s_vpn_gateways_generate_vpn_profile(resource_group_name, gateway_name, api_version, subscription_id, parameters)
        print("The response of P2SVpnGatewaysApi->p2s_vpn_gateways_generate_vpn_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling P2SVpnGatewaysApi->p2s_vpn_gateways_generate_vpn_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **gateway_name** | **str**| The name of the P2SVpnGateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**P2SVpnProfileParameters**](P2SVpnProfileParameters.md)| Parameters supplied to the generate P2SVpnGateway VPN client package operation. | 

### Return type

[**VpnProfileResponse**](VpnProfileResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VPN profile package URL. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **p2s_vpn_gateways_get_p2s_vpn_connection_health**
> P2SVpnGateway p2s_vpn_gateways_get_p2s_vpn_connection_health(resource_group_name, gateway_name, api_version, subscription_id)



Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.p2_s_vpn_gateway import P2SVpnGateway
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.P2SVpnGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    gateway_name = 'gateway_name_example' # str | The name of the P2SVpnGateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.p2s_vpn_gateways_get_p2s_vpn_connection_health(resource_group_name, gateway_name, api_version, subscription_id)
        print("The response of P2SVpnGatewaysApi->p2s_vpn_gateways_get_p2s_vpn_connection_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling P2SVpnGatewaysApi->p2s_vpn_gateways_get_p2s_vpn_connection_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **gateway_name** | **str**| The name of the P2SVpnGateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**P2SVpnGateway**](P2SVpnGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | P2S Vpn Gateway with P2S connection health details. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **p2s_vpn_gateways_update_tags**
> P2SVpnGateway p2s_vpn_gateways_update_tags(subscription_id, resource_group_name, gateway_name, api_version, p2_s_vpn_gateway_parameters)



Updates virtual wan p2s vpn gateway tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.p2_s_vpn_gateway import P2SVpnGateway
from openapi_client.models.p2s_vpn_gateways_update_tags_request import P2sVpnGatewaysUpdateTagsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.P2SVpnGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the P2SVpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.
    p2_s_vpn_gateway_parameters = openapi_client.P2sVpnGatewaysUpdateTagsRequest() # P2sVpnGatewaysUpdateTagsRequest | Parameters supplied to update a virtual wan p2s vpn gateway tags.

    try:
        api_response = api_instance.p2s_vpn_gateways_update_tags(subscription_id, resource_group_name, gateway_name, api_version, p2_s_vpn_gateway_parameters)
        print("The response of P2SVpnGatewaysApi->p2s_vpn_gateways_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling P2SVpnGatewaysApi->p2s_vpn_gateways_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the P2SVpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 
 **p2_s_vpn_gateway_parameters** | [**P2sVpnGatewaysUpdateTagsRequest**](P2sVpnGatewaysUpdateTagsRequest.md)| Parameters supplied to update a virtual wan p2s vpn gateway tags. | 

### Return type

[**P2SVpnGateway**](P2SVpnGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the updated gateway. |  -  |
**201** | Request received successfully. Returns the details of the updated gateway. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

