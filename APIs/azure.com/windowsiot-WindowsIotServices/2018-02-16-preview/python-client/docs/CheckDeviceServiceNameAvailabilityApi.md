# openapi_client.CheckDeviceServiceNameAvailabilityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_check_device_service_name_availability**](CheckDeviceServiceNameAvailabilityApi.md#services_check_device_service_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.WindowsIoT/checkDeviceServiceNameAvailability | 


# **services_check_device_service_name_availability**
> DeviceServiceNameAvailabilityInfo services_check_device_service_name_availability(api_version, subscription_id, device_service_check_name_availability_parameters)



Check if a Windows IoT Device Service name is available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_service_check_name_availability_parameters import DeviceServiceCheckNameAvailabilityParameters
from openapi_client.models.device_service_name_availability_info import DeviceServiceNameAvailabilityInfo
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
    api_instance = openapi_client.CheckDeviceServiceNameAvailabilityApi(api_client)
    api_version = 'api_version_example' # str | The version of the API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    device_service_check_name_availability_parameters = openapi_client.DeviceServiceCheckNameAvailabilityParameters() # DeviceServiceCheckNameAvailabilityParameters | Set the name parameter in the DeviceServiceCheckNameAvailabilityParameters structure to the name of the Windows IoT Device Service to check.

    try:
        api_response = api_instance.services_check_device_service_name_availability(api_version, subscription_id, device_service_check_name_availability_parameters)
        print("The response of CheckDeviceServiceNameAvailabilityApi->services_check_device_service_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckDeviceServiceNameAvailabilityApi->services_check_device_service_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **device_service_check_name_availability_parameters** | [**DeviceServiceCheckNameAvailabilityParameters**](DeviceServiceCheckNameAvailabilityParameters.md)| Set the name parameter in the DeviceServiceCheckNameAvailabilityParameters structure to the name of the Windows IoT Device Service to check. | 

### Return type

[**DeviceServiceNameAvailabilityInfo**](DeviceServiceNameAvailabilityInfo.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

