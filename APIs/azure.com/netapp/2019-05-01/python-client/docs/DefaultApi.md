# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_file_path_availability**](DefaultApi.md#check_file_path_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkFilePathAvailability | Check file path availability
[**check_name_availability**](DefaultApi.md#check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkNameAvailability | Check resource name availability


# **check_file_path_availability**
> ResourceNameAvailability check_file_path_availability(subscription_id, location, api_version, body)

Check file path availability

Check if a file path is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_name_availability import ResourceNameAvailability
from openapi_client.models.resource_name_availability_request import ResourceNameAvailabilityRequest
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The location
    api_version = '2019-05-01' # str | Version of the API to be used with the client request. (default to '2019-05-01')
    body = openapi_client.ResourceNameAvailabilityRequest() # ResourceNameAvailabilityRequest | File path availability request.

    try:
        # Check file path availability
        api_response = api_instance.check_file_path_availability(subscription_id, location, api_version, body)
        print("The response of DefaultApi->check_file_path_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->check_file_path_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The location | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-05-01&#39;]
 **body** | [**ResourceNameAvailabilityRequest**](ResourceNameAvailabilityRequest.md)| File path availability request. | 

### Return type

[**ResourceNameAvailability**](ResourceNameAvailability.md)

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

# **check_name_availability**
> ResourceNameAvailability check_name_availability(subscription_id, location, api_version, body)

Check resource name availability

Check if a resource name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_name_availability import ResourceNameAvailability
from openapi_client.models.resource_name_availability_request import ResourceNameAvailabilityRequest
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
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The location
    api_version = '2019-05-01' # str | Version of the API to be used with the client request. (default to '2019-05-01')
    body = openapi_client.ResourceNameAvailabilityRequest() # ResourceNameAvailabilityRequest | Name availability request.

    try:
        # Check resource name availability
        api_response = api_instance.check_name_availability(subscription_id, location, api_version, body)
        print("The response of DefaultApi->check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The location | 
 **api_version** | **str**| Version of the API to be used with the client request. | [default to &#39;2019-05-01&#39;]
 **body** | [**ResourceNameAvailabilityRequest**](ResourceNameAvailabilityRequest.md)| Name availability request. | 

### Return type

[**ResourceNameAvailability**](ResourceNameAvailability.md)

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

