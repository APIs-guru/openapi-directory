# openapi_client.ApplicationAccelerationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_vehicle_seen_vehicle_seen_get_0**](ApplicationAccelerationApi.md#get_vehicle_seen_vehicle_seen_get_0) | **GET** /vehicleSeen | Checks if a VIN appeared on the market on or after a given date.


# **get_vehicle_seen_vehicle_seen_get_0**
> BooleanResp get_vehicle_seen_vehicle_seen_get_0(jwt, vin, after_date)

Checks if a VIN appeared on the market on or after a given date.

Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.  This endpoint is more cost effective than the /vehicleHistory endpoint if your use case requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).

### Example


```python
import openapi_client
from openapi_client.models.boolean_resp import BooleanResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApplicationAccelerationApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    after_date = '2013-10-20' # date | 

    try:
        # Checks if a VIN appeared on the market on or after a given date.
        api_response = api_instance.get_vehicle_seen_vehicle_seen_get_0(jwt, vin, after_date)
        print("The response of ApplicationAccelerationApi->get_vehicle_seen_vehicle_seen_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationAccelerationApi->get_vehicle_seen_vehicle_seen_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **after_date** | **date**|  | 

### Return type

[**BooleanResp**](BooleanResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

