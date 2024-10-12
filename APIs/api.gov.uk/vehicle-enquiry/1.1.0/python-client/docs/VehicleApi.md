# openapi_client.VehicleApi

All URIs are relative to *https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vehicle_details_by_registration_number**](VehicleApi.md#get_vehicle_details_by_registration_number) | **POST** /v1/vehicles | Get vehicle details by registration number


# **get_vehicle_details_by_registration_number**
> Vehicle get_vehicle_details_by_registration_number(x_api_key, vehicle_request, x_correlation_id=x_correlation_id)

Get vehicle details by registration number

Returns vehicle details based on registration number

### Example


```python
import openapi_client
from openapi_client.models.vehicle import Vehicle
from openapi_client.models.vehicle_request import VehicleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VehicleApi(api_client)
    x_api_key = 'x_api_key_example' # str | Client Specific API Key
    vehicle_request = openapi_client.VehicleRequest() # VehicleRequest | Registration number of the vehicle to find details for
    x_correlation_id = 'x_correlation_id_example' # str | Consumer Correlation ID (optional)

    try:
        # Get vehicle details by registration number
        api_response = api_instance.get_vehicle_details_by_registration_number(x_api_key, vehicle_request, x_correlation_id=x_correlation_id)
        print("The response of VehicleApi->get_vehicle_details_by_registration_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VehicleApi->get_vehicle_details_by_registration_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api_key** | **str**| Client Specific API Key | 
 **vehicle_request** | [**VehicleRequest**](VehicleRequest.md)| Registration number of the vehicle to find details for | 
 **x_correlation_id** | **str**| Consumer Correlation ID | [optional] 

### Return type

[**Vehicle**](Vehicle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad Request |  -  |
**404** | Vehicle Not Found |  -  |
**500** | Internal Server Error |  -  |
**503** | Service Unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

