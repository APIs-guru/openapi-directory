# openapi_client.NameAvailabilityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_name_availability**](NameAvailabilityApi.md#check_name_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/checkNameAvailability | Check availability of EngagementFabric resource


# **check_name_availability**
> CheckNameAvailabilityResult check_name_availability(subscription_id, resource_group_name, api_version, parameters)

Check availability of EngagementFabric resource

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_parameter import CheckNameAvailabilityParameter
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.NameAvailabilityApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    api_version = 'api_version_example' # str | API version
    parameters = openapi_client.CheckNameAvailabilityParameter() # CheckNameAvailabilityParameter | Parameter describing the name to be checked

    try:
        # Check availability of EngagementFabric resource
        api_response = api_instance.check_name_availability(subscription_id, resource_group_name, api_version, parameters)
        print("The response of NameAvailabilityApi->check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NameAvailabilityApi->check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **api_version** | **str**| API version | 
 **parameters** | [**CheckNameAvailabilityParameter**](CheckNameAvailabilityParameter.md)| Parameter describing the name to be checked | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

