# openapi_client.VirtualBillingMeterActiveApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_billing_meter_active_get**](VirtualBillingMeterActiveApi.md#virtual_billing_meter_active_get) | **GET** /api/VirtualBillingMeterActive | Beta: Gets all active virtual meters
[**virtual_billing_meter_active_post**](VirtualBillingMeterActiveApi.md#virtual_billing_meter_active_post) | **POST** /api/VirtualBillingMeterActive | Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.


# **virtual_billing_meter_active_get**
> List[Device] virtual_billing_meter_active_get()

Beta: Gets all active virtual meters

Beta: Gets all active virtual meters.

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
    api_instance = openapi_client.VirtualBillingMeterActiveApi(api_client)

    try:
        # Beta: Gets all active virtual meters
        api_response = api_instance.virtual_billing_meter_active_get()
        print("The response of VirtualBillingMeterActiveApi->virtual_billing_meter_active_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualBillingMeterActiveApi->virtual_billing_meter_active_get: %s\n" % e)
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

# **virtual_billing_meter_active_post**
> Device virtual_billing_meter_active_post(v_meter_to_activate)

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.

### Example


```python
import openapi_client
from openapi_client.models.device import Device
from openapi_client.models.v_meter_to_activate import VMeterToActivate
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
    api_instance = openapi_client.VirtualBillingMeterActiveApi(api_client)
    v_meter_to_activate = openapi_client.VMeterToActivate() # VMeterToActivate | The Meter to activate

    try:
        # Beta: Virtual Meter API: Activates a Meter and add the Consumption to a Virtual Meter assosiated with the User.
        api_response = api_instance.virtual_billing_meter_active_post(v_meter_to_activate)
        print("The response of VirtualBillingMeterActiveApi->virtual_billing_meter_active_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualBillingMeterActiveApi->virtual_billing_meter_active_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v_meter_to_activate** | [**VMeterToActivate**](VMeterToActivate.md)| The Meter to activate | 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | BadRequest |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

