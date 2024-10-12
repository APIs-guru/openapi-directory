# openapi_client.ExpressRouteLinksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**express_route_links_get**](ExpressRouteLinksApi.md#express_route_links_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}/links/{linkName} | 
[**express_route_links_list**](ExpressRouteLinksApi.md#express_route_links_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}/links | 


# **express_route_links_get**
> ExpressRouteLink express_route_links_get(subscription_id, api_version, resource_group_name, express_route_port_name, link_name)



Retrieves the specified ExpressRouteLink resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_link import ExpressRouteLink
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
    api_instance = openapi_client.ExpressRouteLinksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_port_name = 'express_route_port_name_example' # str | The name of the ExpressRoutePort resource.
    link_name = 'link_name_example' # str | The name of the ExpressRouteLink resource.

    try:
        api_response = api_instance.express_route_links_get(subscription_id, api_version, resource_group_name, express_route_port_name, link_name)
        print("The response of ExpressRouteLinksApi->express_route_links_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteLinksApi->express_route_links_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_port_name** | **str**| The name of the ExpressRoutePort resource. | 
 **link_name** | **str**| The name of the ExpressRouteLink resource. | 

### Return type

[**ExpressRouteLink**](ExpressRouteLink.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the requested ExpressRouteLink resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **express_route_links_list**
> ExpressRouteLinkListResult express_route_links_list(subscription_id, api_version, resource_group_name, express_route_port_name)



Retrieve the ExpressRouteLink sub-resources of the specified ExpressRoutePort resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.express_route_link_list_result import ExpressRouteLinkListResult
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
    api_instance = openapi_client.ExpressRouteLinksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    express_route_port_name = 'express_route_port_name_example' # str | The name of the ExpressRoutePort resource.

    try:
        api_response = api_instance.express_route_links_list(subscription_id, api_version, resource_group_name, express_route_port_name)
        print("The response of ExpressRouteLinksApi->express_route_links_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExpressRouteLinksApi->express_route_links_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **express_route_port_name** | **str**| The name of the ExpressRoutePort resource. | 

### Return type

[**ExpressRouteLinkListResult**](ExpressRouteLinkListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of ExpressRouteLink resources. If there are no ExpressRouteLink resources then an empty list is returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

