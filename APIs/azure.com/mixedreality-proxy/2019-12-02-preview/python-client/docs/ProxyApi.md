# openapi_client.ProxyApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_name_availability_local**](ProxyApi.md#check_name_availability_local) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.MixedReality/locations/{location}/checkNameAvailability | 
[**operations_list**](ProxyApi.md#operations_list) | **GET** /providers/Microsoft.MixedReality/operations | 


# **check_name_availability_local**
> CheckNameAvailabilityResponse check_name_availability_local(subscription_id, location, api_version, check_name_availability)



Check Name Availability for local uniqueness

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProxyApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    location = 'location_example' # str | The location in which uniqueness will be verified.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    check_name_availability = openapi_client.CheckNameAvailabilityRequest() # CheckNameAvailabilityRequest | Check Name Availability Request.

    try:
        api_response = api_instance.check_name_availability_local(subscription_id, location, api_version, check_name_availability)
        print("The response of ProxyApi->check_name_availability_local:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProxyApi->check_name_availability_local: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription ID. | 
 **location** | **str**| The location in which uniqueness will be verified. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **check_name_availability** | [**CheckNameAvailabilityRequest**](CheckNameAvailabilityRequest.md)| Check Name Availability Request. | 

### Return type

[**CheckNameAvailabilityResponse**](CheckNameAvailabilityResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationPage operations_list(api_version)



Exposing Available Operations

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_page import OperationPage
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
    api_instance = openapi_client.ProxyApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of ProxyApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProxyApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**OperationPage**](OperationPage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

