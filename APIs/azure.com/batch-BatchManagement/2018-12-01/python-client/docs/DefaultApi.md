# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**location_check_name_availability**](DefaultApi.md#location_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/checkNameAvailability | 


# **location_check_name_availability**
> CheckNameAvailabilityResult location_check_name_availability(location_name, api_version, subscription_id, parameters)



Checks whether the Batch account name is available in the specified region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameters import CheckNameAvailabilityParameters
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
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
    location_name = 'location_name_example' # str | The desired region for the name check.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    parameters = openapi_client.CheckNameAvailabilityParameters() # CheckNameAvailabilityParameters | Properties needed to check the availability of a name.

    try:
        api_response = api_instance.location_check_name_availability(location_name, api_version, subscription_id, parameters)
        print("The response of DefaultApi->location_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->location_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The desired region for the name check. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **parameters** | [**CheckNameAvailabilityParameters**](CheckNameAvailabilityParameters.md)| Properties needed to check the availability of a name. | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Returns details about whether a Batch account name is available. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

