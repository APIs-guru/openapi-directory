# openapi_client.PreconfiguredEndpointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**preconfigured_endpoints_list**](PreconfiguredEndpointsApi.md#preconfigured_endpoints_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/NetworkExperimentProfiles/{profileName}/PreconfiguredEndpoints | Gets a list of Preconfigured Endpoints


# **preconfigured_endpoints_list**
> PreconfiguredEndpointList preconfigured_endpoints_list(subscription_id, api_version, resource_group_name, profile_name)

Gets a list of Preconfigured Endpoints

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.preconfigured_endpoint_list import PreconfiguredEndpointList
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
    api_instance = openapi_client.PreconfiguredEndpointsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.
    resource_group_name = 'resource_group_name_example' # str | Name of the Resource group within the Azure subscription.
    profile_name = 'profile_name_example' # str | The Profile identifier associated with the Tenant and Partner

    try:
        # Gets a list of Preconfigured Endpoints
        api_response = api_instance.preconfigured_endpoints_list(subscription_id, api_version, resource_group_name, profile_name)
        print("The response of PreconfiguredEndpointsApi->preconfigured_endpoints_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PreconfiguredEndpointsApi->preconfigured_endpoints_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 
 **resource_group_name** | **str**| Name of the Resource group within the Azure subscription. | 
 **profile_name** | **str**| The Profile identifier associated with the Tenant and Partner | 

### Return type

[**PreconfiguredEndpointList**](PreconfiguredEndpointList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

