# openapi_client.CheckNameAvailabilityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_name_availability**](CheckNameAvailabilityApi.md#check_name_availability) | **POST** /providers/Microsoft.Management/checkNameAvailability | 


# **check_name_availability**
> CheckNameAvailabilityResult check_name_availability(api_version, check_name_availability_request)



Checks if the specified management group name is valid and unique

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_request import CheckNameAvailabilityRequest
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
    api_instance = openapi_client.CheckNameAvailabilityApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-01-01-preview.
    check_name_availability_request = openapi_client.CheckNameAvailabilityRequest() # CheckNameAvailabilityRequest | Management group name availability check parameters.

    try:
        api_response = api_instance.check_name_availability(api_version, check_name_availability_request)
        print("The response of CheckNameAvailabilityApi->check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckNameAvailabilityApi->check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-01-01-preview. | 
 **check_name_availability_request** | [**CheckNameAvailabilityRequest**](CheckNameAvailabilityRequest.md)| Management group name availability check parameters. | 

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
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

