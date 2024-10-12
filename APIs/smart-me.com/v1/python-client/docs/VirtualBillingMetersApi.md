# openapi_client.VirtualBillingMetersApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_billing_meters_get**](VirtualBillingMetersApi.md#virtual_billing_meters_get) | **GET** /api/VirtualBillingMeters | Beta: Gets all Meters available to activate as a Virtual Meter.


# **virtual_billing_meters_get**
> List[Device] virtual_billing_meters_get()

Beta: Gets all Meters available to activate as a Virtual Meter.

Beta: Gets all Meters available to activate as a Virtual Meter.

### Example


```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://smart-me.com:443
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://smart-me.com:443"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualBillingMetersApi(api_client)

    try:
        # Beta: Gets all Meters available to activate as a Virtual Meter.
        api_response = api_instance.virtual_billing_meters_get()
        print("The response of VirtualBillingMetersApi->virtual_billing_meters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualBillingMetersApi->virtual_billing_meters_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Device]**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

