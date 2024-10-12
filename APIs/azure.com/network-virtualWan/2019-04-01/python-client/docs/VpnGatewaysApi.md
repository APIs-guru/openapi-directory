# openapi_client.VpnGatewaysApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vpn_gateways_reset**](VpnGatewaysApi.md#vpn_gateways_reset) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName}/reset | 
[**vpn_gateways_update_tags**](VpnGatewaysApi.md#vpn_gateways_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnGateways/{gatewayName} | 


# **vpn_gateways_reset**
> VpnGateway vpn_gateways_reset(resource_group_name, gateway_name, api_version, subscription_id)



Resets the primary of the vpn gateway in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vpn_gateway import VpnGateway
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
    api_instance = openapi_client.VpnGatewaysApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.vpn_gateways_reset(resource_group_name, gateway_name, api_version, subscription_id)
        print("The response of VpnGatewaysApi->vpn_gateways_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnGatewaysApi->vpn_gateways_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VpnGateway**](VpnGateway.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation reset the primary of the VpnGateway. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vpn_gateways_update_tags**
> VpnGateway vpn_gateways_update_tags(subscription_id, resource_group_name, gateway_name, api_version, vpn_gateway_parameters)



Updates virtual wan vpn gateway tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.p2s_vpn_gateways_update_tags_request import P2sVpnGatewaysUpdateTagsRequest
from openapi_client.models.vpn_gateway import VpnGateway
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
    api_instance = openapi_client.VpnGatewaysApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnGateway.
    gateway_name = 'gateway_name_example' # str | The name of the gateway.
    api_version = 'api_version_example' # str | Client API version.
    vpn_gateway_parameters = openapi_client.P2sVpnGatewaysUpdateTagsRequest() # P2sVpnGatewaysUpdateTagsRequest | Parameters supplied to update a virtual wan vpn gateway tags.

    try:
        api_response = api_instance.vpn_gateways_update_tags(subscription_id, resource_group_name, gateway_name, api_version, vpn_gateway_parameters)
        print("The response of VpnGatewaysApi->vpn_gateways_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnGatewaysApi->vpn_gateways_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnGateway. | 
 **gateway_name** | **str**| The name of the gateway. | 
 **api_version** | **str**| Client API version. | 
 **vpn_gateway_parameters** | [**P2sVpnGatewaysUpdateTagsRequest**](P2sVpnGatewaysUpdateTagsRequest.md)| Parameters supplied to update a virtual wan vpn gateway tags. | 

### Return type

[**VpnGateway**](VpnGateway.md)

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

