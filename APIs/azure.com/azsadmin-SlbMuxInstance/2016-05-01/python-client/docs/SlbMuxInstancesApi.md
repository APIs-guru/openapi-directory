# openapi_client.SlbMuxInstancesApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**slb_mux_instances_get**](SlbMuxInstancesApi.md#slb_mux_instances_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/slbMuxInstances/{slbMuxInstance} | 
[**slb_mux_instances_list**](SlbMuxInstancesApi.md#slb_mux_instances_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Fabric.Admin/fabricLocations/{location}/slbMuxInstances | 


# **slb_mux_instances_get**
> SlbMuxInstance slb_mux_instances_get(subscription_id, resource_group_name, location, slb_mux_instance, api_version)



Returns the requested software load balancer multiplexer instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.slb_mux_instance import SlbMuxInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SlbMuxInstancesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    slb_mux_instance = 'slb_mux_instance_example' # str | Name of a SLB MUX instance.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.slb_mux_instances_get(subscription_id, resource_group_name, location, slb_mux_instance, api_version)
        print("The response of SlbMuxInstancesApi->slb_mux_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SlbMuxInstancesApi->slb_mux_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **slb_mux_instance** | **str**| Name of a SLB MUX instance. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**SlbMuxInstance**](SlbMuxInstance.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **slb_mux_instances_list**
> SlbMuxInstanceList slb_mux_instances_list(subscription_id, resource_group_name, location, api_version, filter=filter)



Returns a list of all software load balancer instances at a location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.slb_mux_instance_list import SlbMuxInstanceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SlbMuxInstancesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    location = 'location_example' # str | Location of the resource.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.slb_mux_instances_list(subscription_id, resource_group_name, location, api_version, filter=filter)
        print("The response of SlbMuxInstancesApi->slb_mux_instances_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SlbMuxInstancesApi->slb_mux_instances_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **location** | **str**| Location of the resource. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**SlbMuxInstanceList**](SlbMuxInstanceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

