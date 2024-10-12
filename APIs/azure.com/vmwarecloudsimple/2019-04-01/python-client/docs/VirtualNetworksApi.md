# openapi_client.VirtualNetworksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_networks_get**](VirtualNetworksApi.md#virtual_networks_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualNetworks/{virtualNetworkName} | Implements virtual network GET method
[**virtual_networks_list**](VirtualNetworksApi.md#virtual_networks_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualNetworks | Implements list available virtual networks within a subscription method


# **virtual_networks_get**
> VirtualNetwork virtual_networks_get(subscription_id, region_id, pc_name, virtual_network_name, api_version)

Implements virtual network GET method

Return virtual network by its name

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network import VirtualNetwork
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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    virtual_network_name = 'virtual_network_name_example' # str | virtual network id (vsphereId)
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements virtual network GET method
        api_response = api_instance.virtual_networks_get(subscription_id, region_id, pc_name, virtual_network_name, api_version)
        print("The response of VirtualNetworksApi->virtual_networks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **virtual_network_name** | **str**| virtual network id (vsphereId) | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VirtualNetwork**](VirtualNetwork.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_networks_list**
> VirtualNetworkListResponse virtual_networks_list(subscription_id, region_id, pc_name, api_version, resource_pool_name)

Implements list available virtual networks within a subscription method

Return list of virtual networks in location for private cloud

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_network_list_response import VirtualNetworkListResponse
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
    api_instance = openapi_client.VirtualNetworksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    region_id = 'region_id_example' # str | The region Id (westus, eastus)
    pc_name = 'pc_name_example' # str | The private cloud name
    api_version = 'api_version_example' # str | Client API version.
    resource_pool_name = 'resource_pool_name_example' # str | Resource pool used to derive vSphere cluster which contains virtual networks

    try:
        # Implements list available virtual networks within a subscription method
        api_response = api_instance.virtual_networks_list(subscription_id, region_id, pc_name, api_version, resource_pool_name)
        print("The response of VirtualNetworksApi->virtual_networks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualNetworksApi->virtual_networks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **region_id** | **str**| The region Id (westus, eastus) | 
 **pc_name** | **str**| The private cloud name | 
 **api_version** | **str**| Client API version. | 
 **resource_pool_name** | **str**| Resource pool used to derive vSphere cluster which contains virtual networks | 

### Return type

[**VirtualNetworkListResponse**](VirtualNetworkListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

