# openapi_client.ServiceHealthsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_healths_get**](ServiceHealthsApi.md#service_healths_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths/{serviceHealth} | 
[**service_healths_list**](ServiceHealthsApi.md#service_healths_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.InfrastructureInsights.Admin/regionHealths/{location}/serviceHealths | 


# **service_healths_get**
> ServiceHealth service_healths_get(subscription_id, resource_group_name, location, service_health, api_version)



Returns the requested service health object.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_health import ServiceHealth
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
    api_instance = openapi_client.ServiceHealthsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    location = 'location_example' # str | Name of the region
    service_health = 'service_health_example' # str | Service Health name.
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')

    try:
        api_response = api_instance.service_healths_get(subscription_id, resource_group_name, location, service_health, api_version)
        print("The response of ServiceHealthsApi->service_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceHealthsApi->service_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **location** | **str**| Name of the region | 
 **service_health** | **str**| Service Health name. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]

### Return type

[**ServiceHealth**](ServiceHealth.md)

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

# **service_healths_list**
> ServiceHealthList service_healths_list(subscription_id, resource_group_name, location, api_version, filter=filter)



Returns the list of all resource provider health states.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_health_list import ServiceHealthList
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
    api_instance = openapi_client.ServiceHealthsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    location = 'location_example' # str | Name of the region
    api_version = '2016-05-01' # str | Client API Version. (default to '2016-05-01')
    filter = 'filter_example' # str | OData filter parameter. (optional)

    try:
        api_response = api_instance.service_healths_list(subscription_id, resource_group_name, location, api_version, filter=filter)
        print("The response of ServiceHealthsApi->service_healths_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceHealthsApi->service_healths_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **location** | **str**| Name of the region | 
 **api_version** | **str**| Client API Version. | [default to &#39;2016-05-01&#39;]
 **filter** | **str**| OData filter parameter. | [optional] 

### Return type

[**ServiceHealthList**](ServiceHealthList.md)

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

