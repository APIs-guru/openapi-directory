# openapi_client.OnboardingApi

All URIs are relative to *https://api.ebay.com/sell/account/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_payments_program_onboarding**](OnboardingApi.md#get_payments_program_onboarding) | **GET** /payments_program/{marketplace_id}/{payments_program_type}/onboarding | 


# **get_payments_program_onboarding**
> PaymentsProgramOnboardingResponse get_payments_program_onboarding(marketplace_id, payments_program_type)



<span class=\"tablenote\"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.payments_program_onboarding_response import PaymentsProgramOnboardingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/account/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/account/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnboardingApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | The eBay marketplace ID associated with the onboarding status to retrieve.
    payments_program_type = 'payments_program_type_example' # str | The type of payments program whose status is returned by the method.

    try:
        api_response = api_instance.get_payments_program_onboarding(marketplace_id, payments_program_type)
        print("The response of OnboardingApi->get_payments_program_onboarding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnboardingApi->get_payments_program_onboarding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| The eBay marketplace ID associated with the onboarding status to retrieve. | 
 **payments_program_type** | **str**| The type of payments program whose status is returned by the method. | 

### Return type

[**PaymentsProgramOnboardingResponse**](PaymentsProgramOnboardingResponse.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

