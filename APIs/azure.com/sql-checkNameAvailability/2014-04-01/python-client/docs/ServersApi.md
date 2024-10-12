# openapi_client.ServersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servers_check_name_availability**](ServersApi.md#servers_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/checkNameAvailability | 


# **servers_check_name_availability**
> CheckNameAvailabilityResponse servers_check_name_availability(api_version, subscription_id, parameters)



Determines whether a resource can be created with the specified name.

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_request import CheckNameAvailabilityRequest
from openapi_client.models.check_name_availability_response import CheckNameAvailabilityResponse
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
    api_instance = openapi_client.ServersApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    parameters = openapi_client.CheckNameAvailabilityRequest() # CheckNameAvailabilityRequest | The parameters to request for name availability.

    try:
        api_response = api_instance.servers_check_name_availability(api_version, subscription_id, parameters)
        print("The response of ServersApi->servers_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServersApi->servers_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **parameters** | [**CheckNameAvailabilityRequest**](CheckNameAvailabilityRequest.md)| The parameters to request for name availability. | 

### Return type

[**CheckNameAvailabilityResponse**](CheckNameAvailabilityResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

