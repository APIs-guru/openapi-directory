# openapi_client.VirtualBillingMeterDeactivateApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_billing_meter_deactivate_post**](VirtualBillingMeterDeactivateApi.md#virtual_billing_meter_deactivate_post) | **POST** /api/VirtualBillingMeterDeactivate | Beta: Virtual Meter API: Deactivates a Virtual Meter.


# **virtual_billing_meter_deactivate_post**
> object virtual_billing_meter_deactivate_post(v_meter_to_deactivate)

Beta: Virtual Meter API: Deactivates a Virtual Meter.

Beta: Virtual Meter API: Deactivates a Virtual Meter.

### Example


```python
import openapi_client
from openapi_client.models.v_meter_to_deactivate import VMeterToDeactivate
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
    api_instance = openapi_client.VirtualBillingMeterDeactivateApi(api_client)
    v_meter_to_deactivate = openapi_client.VMeterToDeactivate() # VMeterToDeactivate | The Meter to activate

    try:
        # Beta: Virtual Meter API: Deactivates a Virtual Meter.
        api_response = api_instance.virtual_billing_meter_deactivate_post(v_meter_to_deactivate)
        print("The response of VirtualBillingMeterDeactivateApi->virtual_billing_meter_deactivate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualBillingMeterDeactivateApi->virtual_billing_meter_deactivate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v_meter_to_deactivate** | [**VMeterToDeactivate**](VMeterToDeactivate.md)| The Meter to activate | 

### Return type

**object**

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

