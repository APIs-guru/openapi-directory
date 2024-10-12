# openapi_client.ProductApi

All URIs are relative to *https://go-upc.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_product_info**](ProductApi.md#get_product_info) | **GET** /code/{code} | Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).


# **get_product_info**
> GetProductInfo200Response get_product_info(code)

Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).

### Example

* Api Key Authentication (ApiKeyAuth):

```python
import openapi_client
from openapi_client.models.get_product_info200_response import GetProductInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://go-upc.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://go-upc.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    code = 'code_example' # str | 

    try:
        # Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).
        api_response = api_instance.get_product_info(code)
        print("The response of ProductApi->get_product_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->get_product_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**|  | 

### Return type

[**GetProductInfo200Response**](GetProductInfo200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The product corresponding to the provided &#x60;code&#x60; |  -  |
**404** | No product information was found for the given &#x60;code&#x60;. |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

