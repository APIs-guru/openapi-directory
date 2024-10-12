# openapi_client.VpnSitesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vpn_sites_update_tags**](VpnSitesApi.md#vpn_sites_update_tags) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName} | 


# **vpn_sites_update_tags**
> VpnSite vpn_sites_update_tags(subscription_id, resource_group_name, vpn_site_name, api_version, vpn_site_parameters)



Updates VpnSite tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.p2s_vpn_gateways_update_tags_request import P2sVpnGatewaysUpdateTagsRequest
from openapi_client.models.vpn_site import VpnSite
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
    api_instance = openapi_client.VpnSitesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The resource group name of the VpnSite.
    vpn_site_name = 'vpn_site_name_example' # str | The name of the VpnSite being updated.
    api_version = 'api_version_example' # str | Client API version.
    vpn_site_parameters = openapi_client.P2sVpnGatewaysUpdateTagsRequest() # P2sVpnGatewaysUpdateTagsRequest | Parameters supplied to update VpnSite tags.

    try:
        api_response = api_instance.vpn_sites_update_tags(subscription_id, resource_group_name, vpn_site_name, api_version, vpn_site_parameters)
        print("The response of VpnSitesApi->vpn_sites_update_tags:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VpnSitesApi->vpn_sites_update_tags: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The resource group name of the VpnSite. | 
 **vpn_site_name** | **str**| The name of the VpnSite being updated. | 
 **api_version** | **str**| Client API version. | 
 **vpn_site_parameters** | [**P2sVpnGatewaysUpdateTagsRequest**](P2sVpnGatewaysUpdateTagsRequest.md)| Parameters supplied to update VpnSite tags. | 

### Return type

[**VpnSite**](VpnSite.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns the details of the VpnSite updated. |  -  |
**201** | Request received successfully. Returns the details of the VpnSite updated. |  -  |
**0** | Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

