# openapi_client.BINTableListingServiceApi

All URIs are relative to *https://api.mastercard.com/fraud/mtf/bintable/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**binlisting_get**](BINTableListingServiceApi.md#binlisting_get) | **GET** /binlisting | BIN Table Listing file


# **binlisting_get**
> BinTableResponse binlisting_get()

BIN Table Listing file

REST service will retrieve and return the BIN Table file to Merchants.

### Example


```python
import openapi_client
from openapi_client.models.bin_table_response import BinTableResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/fraud/mtf/bintable/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/fraud/mtf/bintable/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BINTableListingServiceApi(api_client)

    try:
        # BIN Table Listing file
        api_response = api_instance.binlisting_get()
        print("The response of BINTableListingServiceApi->binlisting_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BINTableListingServiceApi->binlisting_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BinTableResponse**](BinTableResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the BIN Table Listing file and available to Merchants |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

