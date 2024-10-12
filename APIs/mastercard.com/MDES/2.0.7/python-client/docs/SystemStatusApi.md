# openapi_client.SystemStatusApi

All URIs are relative to *https://api.mastercard.com/mdes/csapi/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**systemstatus_get**](SystemStatusApi.md#systemstatus_get) | **GET** /systemstatus | 


# **systemstatus_get**
> SystemStatusResponseSchema systemstatus_get()



Returns the overall system status of the Mastercard Digital Enablement Service.

### Example


```python
import openapi_client
from openapi_client.models.system_status_response_schema import SystemStatusResponseSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/mdes/csapi/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/mdes/csapi/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SystemStatusApi(api_client)

    try:
        api_response = api_instance.systemstatus_get()
        print("The response of SystemStatusApi->systemstatus_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemStatusApi->systemstatus_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**SystemStatusResponseSchema**](SystemStatusResponseSchema.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the details of the response message. |  -  |
**0** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

