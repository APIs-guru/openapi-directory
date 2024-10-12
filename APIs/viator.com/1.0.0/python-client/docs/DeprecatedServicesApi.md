# openapi_client.DeprecatedServicesApi

All URIs are relative to *https://viatorapi.viator.com/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchant_cancellation**](DeprecatedServicesApi.md#merchant_cancellation) | **POST** /merchant/cancellation | /merchant/cancellation


# **merchant_cancellation**
> MerchantCancellation200Response merchant_cancellation(accept_language, merchant_cancellation_request=merchant_cancellation_request)

/merchant/cancellation

Cancel a booking **Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.merchant_cancellation200_response import MerchantCancellation200Response
from openapi_client.models.merchant_cancellation_request import MerchantCancellationRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeprecatedServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    merchant_cancellation_request = openapi_client.MerchantCancellationRequest() # MerchantCancellationRequest |  (optional)

    try:
        # /merchant/cancellation
        api_response = api_instance.merchant_cancellation(accept_language, merchant_cancellation_request=merchant_cancellation_request)
        print("The response of DeprecatedServicesApi->merchant_cancellation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeprecatedServicesApi->merchant_cancellation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **merchant_cancellation_request** | [**MerchantCancellationRequest**](MerchantCancellationRequest.md)|  | [optional] 

### Return type

[**MerchantCancellation200Response**](MerchantCancellation200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

