# openapi_client.ZXINGZebraCrossingBarCodesApi

All URIs are relative to *https://v2018.api2pdf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zebra_get**](ZXINGZebraCrossingBarCodesApi.md#zebra_get) | **GET** /zebra | Generate bar codes and QR codes with ZXING.


# **zebra_get**
> bytearray zebra_get(format, value, showlabel=showlabel, height=height, width=width)

Generate bar codes and QR codes with ZXING.

See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/) ### Authorize via Query String Parameter **apikey=YOUR-API-KEY** ### Example ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 

### Example

* Api Key Authentication (QueryApiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2018.api2pdf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2018.api2pdf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: QueryApiKey
configuration.api_key['QueryApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['QueryApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ZXINGZebraCrossingBarCodesApi(api_client)
    format = 'format_example' # str | Most common is CODE_39 or QR_CODE
    value = 'value_example' # str | Specify the text value you want to convert
    showlabel = True # bool | Show label of text below barcode (optional)
    height = 56 # int | Height of the barcode generated image (optional)
    width = 56 # int | Width of the barcode generated image (optional)

    try:
        # Generate bar codes and QR codes with ZXING.
        api_response = api_instance.zebra_get(format, value, showlabel=showlabel, height=height, width=width)
        print("The response of ZXINGZebraCrossingBarCodesApi->zebra_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ZXINGZebraCrossingBarCodesApi->zebra_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **str**| Most common is CODE_39 or QR_CODE | 
 **value** | **str**| Specify the text value you want to convert | 
 **showlabel** | **bool**| Show label of text below barcode | [optional] 
 **height** | **int**| Height of the barcode generated image | [optional] 
 **width** | **int**| Width of the barcode generated image | [optional] 

### Return type

**bytearray**

### Authorization

[QueryApiKey](../README.md#QueryApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An image of the generated barcode or QR code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

