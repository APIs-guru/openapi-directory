# openapi_client.MBusApi

All URIs are relative to *https://smart-me.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**m_bus_post**](MBusApi.md#m_bus_post) | **POST** /api/MBus | M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.              Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.


# **m_bus_post**
> object m_bus_post(m_bus_data)

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.              Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.              Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.

### Example


```python
import openapi_client
from openapi_client.models.m_bus_data import MBusData
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
    api_instance = openapi_client.MBusApi(api_client)
    m_bus_data = openapi_client.MBusData() # MBusData | The M-BUS Telegram

    try:
        # M-BUS API: Adds data of a M-BUS Meter to the smart-me Cloud.              Just send us the M-BUS Telegram (RSP_UD) and we will do the Rest.
        api_response = api_instance.m_bus_post(m_bus_data)
        print("The response of MBusApi->m_bus_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MBusApi->m_bus_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **m_bus_data** | [**MBusData**](MBusData.md)| The M-BUS Telegram | 

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

