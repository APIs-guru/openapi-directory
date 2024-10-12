# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**available_delegations_list**](DefaultApi.md#available_delegations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/availableDelegations | 
[**available_resource_group_delegations_list**](DefaultApi.md#available_resource_group_delegations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/availableDelegations | 


# **available_delegations_list**
> AvailableDelegationsResult available_delegations_list(location, api_version, subscription_id)



Gets all of the available subnet delegations for this subscription in this region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_delegations_result import AvailableDelegationsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    location = 'location_example' # str | The location of the subnet.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.available_delegations_list(location, api_version, subscription_id)
        print("The response of DefaultApi->available_delegations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->available_delegations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the subnet. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**AvailableDelegationsResult**](AvailableDelegationsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all of the possible delegations for a subnet in this subscription in the region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **available_resource_group_delegations_list**
> AvailableDelegationsResult available_resource_group_delegations_list(location, resource_group_name, subscription_id, api_version)



Gets all of the available subnet delegations for this resource group in this region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_delegations_result import AvailableDelegationsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    location = 'location_example' # str | The location of the domain name.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.available_resource_group_delegations_list(location, resource_group_name, subscription_id, api_version)
        print("The response of DefaultApi->available_resource_group_delegations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->available_resource_group_delegations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location of the domain name. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API version. | 

### Return type

[**AvailableDelegationsResult**](AvailableDelegationsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. Returns all of the possible delegations for a subnet in this subscription in the region. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

