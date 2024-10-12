# openapi_client.ContainerServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**container_services_list_orchestrators**](ContainerServicesApi.md#container_services_list_orchestrators) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/locations/{location}/orchestrators | Gets a list of supported orchestrators in the specified subscription.


# **container_services_list_orchestrators**
> OrchestratorVersionProfileListResult container_services_list_orchestrators(api_version, subscription_id, location, resource_type=resource_type)

Gets a list of supported orchestrators in the specified subscription.

Gets a list of supported orchestrators in the specified subscription. The operation returns properties of each orchestrator including version, available upgrades and whether that version or upgrades are in preview.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.orchestrator_version_profile_list_result import OrchestratorVersionProfileListResult
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
    api_instance = openapi_client.ContainerServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The name of a supported Azure region.
    resource_type = 'resource_type_example' # str | resource type for which the list of orchestrators needs to be returned (optional)

    try:
        # Gets a list of supported orchestrators in the specified subscription.
        api_response = api_instance.container_services_list_orchestrators(api_version, subscription_id, location, resource_type=resource_type)
        print("The response of ContainerServicesApi->container_services_list_orchestrators:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerServicesApi->container_services_list_orchestrators: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The name of a supported Azure region. | 
 **resource_type** | **str**| resource type for which the list of orchestrators needs to be returned | [optional] 

### Return type

[**OrchestratorVersionProfileListResult**](OrchestratorVersionProfileListResult.md)

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

