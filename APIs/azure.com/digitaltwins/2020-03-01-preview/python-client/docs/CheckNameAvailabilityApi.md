# openapi_client.CheckNameAvailabilityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**digital_twins_check_name_availability**](CheckNameAvailabilityApi.md#digital_twins_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DigitalTwins/locations/{location}/checkNameAvailability | 


# **digital_twins_check_name_availability**
> CheckNameResult digital_twins_check_name_availability(api_version, subscription_id, location, digital_twins_instance_check_name)



Check if a DigitalTwinsInstance name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_request import CheckNameRequest
from openapi_client.models.check_name_result import CheckNameResult
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
    api_instance = openapi_client.CheckNameAvailabilityApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    location = 'location_example' # str | Location of DigitalTwinsInstance.
    digital_twins_instance_check_name = openapi_client.CheckNameRequest() # CheckNameRequest | Set the name parameter in the DigitalTwinsInstanceCheckName structure to the name of the DigitalTwinsInstance to check.

    try:
        api_response = api_instance.digital_twins_check_name_availability(api_version, subscription_id, location, digital_twins_instance_check_name)
        print("The response of CheckNameAvailabilityApi->digital_twins_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckNameAvailabilityApi->digital_twins_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **location** | **str**| Location of DigitalTwinsInstance. | 
 **digital_twins_instance_check_name** | [**CheckNameRequest**](CheckNameRequest.md)| Set the name parameter in the DigitalTwinsInstanceCheckName structure to the name of the DigitalTwinsInstance to check. | 

### Return type

[**CheckNameResult**](CheckNameResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the DigitalTwins service name is available. If the name is not available, the body contains the reason. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

