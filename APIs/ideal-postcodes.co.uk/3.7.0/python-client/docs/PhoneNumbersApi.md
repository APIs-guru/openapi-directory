# openapi_client.PhoneNumbersApi

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phone_number_validation**](PhoneNumbersApi.md#phone_number_validation) | **GET** /phone_numbers | Phone Number Validation


# **phone_number_validation**
> PhoneNumberResponse phone_number_validation(api_key, query)

Phone Number Validation

Query for and validate phone numbers. 

### Example


```python
import openapi_client
from openapi_client.models.phone_number_response import PhoneNumberResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PhoneNumbersApi(api_client)
    api_key = 'api_key_example' # str | 
    query = 'query_example' # str | Specifies the phone number to validate. Phone number must include a country code in acceptable format. For instance, UK phone numbers should be suffixed `+44`, `44` or `0044`.

    try:
        # Phone Number Validation
        api_response = api_instance.phone_number_validation(api_key, query)
        print("The response of PhoneNumbersApi->phone_number_validation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhoneNumbersApi->phone_number_validation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**|  | 
 **query** | **str**| Specifies the phone number to validate. Phone number must include a country code in acceptable format. For instance, UK phone numbers should be suffixed &#x60;+44&#x60;, &#x60;44&#x60; or &#x60;0044&#x60;. | 

### Return type

[**PhoneNumberResponse**](PhoneNumberResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**429** | Rate Limit Timeout |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

