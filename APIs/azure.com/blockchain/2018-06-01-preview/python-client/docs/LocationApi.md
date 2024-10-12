# openapi_client.LocationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locations_check_name_availability**](LocationApi.md#locations_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/locations/{locationName}/checkNameAvailability | 
[**locations_list_consortiums**](LocationApi.md#locations_list_consortiums) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Blockchain/locations/{locationName}/listConsortiums | 


# **locations_check_name_availability**
> NameAvailability locations_check_name_availability(location_name, api_version, subscription_id, name_availability_request=name_availability_request)



To check whether a resource name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.name_availability import NameAvailability
from openapi_client.models.name_availability_request import NameAvailabilityRequest
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
    api_instance = openapi_client.LocationApi(api_client)
    location_name = 'location_name_example' # str | Location Name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.
    name_availability_request = openapi_client.NameAvailabilityRequest() # NameAvailabilityRequest | Name availability request payload. (optional)

    try:
        api_response = api_instance.locations_check_name_availability(location_name, api_version, subscription_id, name_availability_request=name_availability_request)
        print("The response of LocationApi->locations_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationApi->locations_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| Location Name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 
 **name_availability_request** | [**NameAvailabilityRequest**](NameAvailabilityRequest.md)| Name availability request payload. | [optional] 

### Return type

[**NameAvailability**](NameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locations_list_consortiums**
> ConsortiumCollection locations_list_consortiums(location_name, api_version, subscription_id)



Lists the available consortiums for a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consortium_collection import ConsortiumCollection
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
    api_instance = openapi_client.LocationApi(api_client)
    location_name = 'location_name_example' # str | Location Name.
    api_version = 'api_version_example' # str | Client API Version.
    subscription_id = 'subscription_id_example' # str | Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call.

    try:
        api_response = api_instance.locations_list_consortiums(location_name, api_version, subscription_id)
        print("The response of LocationApi->locations_list_consortiums:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationApi->locations_list_consortiums: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| Location Name. | 
 **api_version** | **str**| Client API Version. | 
 **subscription_id** | **str**| Gets the subscription Id which uniquely identifies the Microsoft Azure subscription. The subscription ID is part of the URI for every service call. | 

### Return type

[**ConsortiumCollection**](ConsortiumCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

