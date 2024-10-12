# openapi_client.ResourcesApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**resource_healths_get**](ResourcesApi.md#resource_healths_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceRegistrationId}/resourceHealths/{resourceRegistrationId} | 
[**resource_healths_list**](ResourcesApi.md#resource_healths_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceRegistrationId}/resourceHealths | 


# **resource_healths_get**
> ResourceHealth resource_healths_get(subscription_id, resource_group_name, location, service_registration_id, resource_registration_id, api_version, filter=filter)



Returns the requested health information about a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health import ResourceHealth
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
    api_instance = openapi_client.ResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    location = 'location_example' # str | Name of the region
    service_registration_id = 'service_registration_id_example' # str | Service registration ID.
    resource_registration_id = 'resource_registration_id_example' # str | Resource registration ID.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.resource_healths_get(subscription_id, resource_group_name, location, service_registration_id, resource_registration_id, api_version, filter=filter)
        print("The response of ResourcesApi->resource_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resource_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **location** | **str**| Name of the region | 
 **service_registration_id** | **str**| Service registration ID. | 
 **resource_registration_id** | **str**| Resource registration ID. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**ResourceHealth**](ResourceHealth.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_healths_list**
> ResourceHealthList resource_healths_list(subscription_id, resource_group_name, location, service_registration_id, api_version, filter=filter)



Returns a list of each resource's health under a service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_health_list import ResourceHealthList
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
    api_instance = openapi_client.ResourcesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    location = 'location_example' # str | Name of the region
    service_registration_id = 'service_registration_id_example' # str | Service registration ID.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.resource_healths_list(subscription_id, resource_group_name, location, service_registration_id, api_version, filter=filter)
        print("The response of ResourcesApi->resource_healths_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResourcesApi->resource_healths_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **location** | **str**| Name of the region | 
 **service_registration_id** | **str**| Service registration ID. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**ResourceHealthList**](ResourceHealthList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

