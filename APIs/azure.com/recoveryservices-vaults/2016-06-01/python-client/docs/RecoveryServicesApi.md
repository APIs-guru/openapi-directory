# openapi_client.RecoveryServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recovery_services_check_name_availability**](RecoveryServicesApi.md#recovery_services_check_name_availability) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/locations/{location}/checkNameAvailability | API to check for resource name availability.  A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type  or if one or more such resources exist, each of these must be GC&#39;d and their time of deletion be more than 24 Hours Ago


# **recovery_services_check_name_availability**
> CheckNameAvailabilityResultResource recovery_services_check_name_availability(subscription_id, resource_group_name, api_version, location, input)

API to check for resource name availability.  A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type  or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameters import CheckNameAvailabilityParameters
from openapi_client.models.check_name_availability_result_resource import CheckNameAvailabilityResultResource
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
    api_instance = openapi_client.RecoveryServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    api_version = 'api_version_example' # str | Client Api Version.
    location = 'location_example' # str | Location of the resource
    input = openapi_client.CheckNameAvailabilityParameters() # CheckNameAvailabilityParameters | Contains information about Resource type and Resource name

    try:
        # API to check for resource name availability.  A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type  or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
        api_response = api_instance.recovery_services_check_name_availability(subscription_id, resource_group_name, api_version, location, input)
        print("The response of RecoveryServicesApi->recovery_services_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecoveryServicesApi->recovery_services_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription Id. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **api_version** | **str**| Client Api Version. | 
 **location** | **str**| Location of the resource | 
 **input** | [**CheckNameAvailabilityParameters**](CheckNameAvailabilityParameters.md)| Contains information about Resource type and Resource name | 

### Return type

[**CheckNameAvailabilityResultResource**](CheckNameAvailabilityResultResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

