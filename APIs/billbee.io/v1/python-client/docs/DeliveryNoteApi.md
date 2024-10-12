# openapi_client.DeliveryNoteApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**order_api_create_delivery_note_0**](DeliveryNoteApi.md#order_api_create_delivery_note_0) | **POST** /api/v1/orders/CreateDeliveryNote/{id} | Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.


# **order_api_create_delivery_note_0**
> object order_api_create_delivery_note_0(id, include_pdf=include_pdf, send_to_cloud_id=send_to_cloud_id)

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeliveryNoteApi(api_client)
    id = 56 # int | The internal billbee id of the order
    include_pdf = True # bool | If true, the PDF is included in the response as base64 encoded string (optional)
    send_to_cloud_id = 56 # int | Optionally specify the id of a billbee connected cloud device to send the pdf to (optional)

    try:
        # Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
        api_response = api_instance.order_api_create_delivery_note_0(id, include_pdf=include_pdf, send_to_cloud_id=send_to_cloud_id)
        print("The response of DeliveryNoteApi->order_api_create_delivery_note_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeliveryNoteApi->order_api_create_delivery_note_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal billbee id of the order | 
 **include_pdf** | **bool**| If true, the PDF is included in the response as base64 encoded string | [optional] 
 **send_to_cloud_id** | **int**| Optionally specify the id of a billbee connected cloud device to send the pdf to | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

