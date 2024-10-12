# openapi_client.StatementCreditActivationDetailApi

All URIs are relative to *https://api.mastercard.com/plo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statementcreditactivationdetail_get**](StatementCreditActivationDetailApi.md#statementcreditactivationdetail_get) | **GET** /statementcreditactivationdetail | Returns Information About Redeemable Postpaid Credit Offer


# **statementcreditactivationdetail_get**
> StatementCreditActivationResponse statementcreditactivationdetail_get(fid, user_token, activation_id)

Returns Information About Redeemable Postpaid Credit Offer

This resource returns extended information about the specified activated postpaid credit offer. 

### Example


```python
import openapi_client
from openapi_client.models.statement_credit_activation_response import StatementCreditActivationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com/plo/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com/plo/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatementCreditActivationDetailApi(api_client)
    fid = '999999' # str | Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation.
    user_token = 'user_token_example' # str | Session identifier as returned by the UserToken resource.
    activation_id = 'TRU_1000136' # str | Distinct identifier for the offer being available for redemption by the user as returned by Activate Statement Credit Offer or Redeemed Offers, not intended for end-user display.

    try:
        # Returns Information About Redeemable Postpaid Credit Offer
        api_response = api_instance.statementcreditactivationdetail_get(fid, user_token, activation_id)
        print("The response of StatementCreditActivationDetailApi->statementcreditactivationdetail_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatementCreditActivationDetailApi->statementcreditactivationdetail_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fid** | **str**| Financial Institution Identifier. Code that specifies the platform and configuration instance, provided by Mastercard during implementation. | 
 **user_token** | **str**| Session identifier as returned by the UserToken resource. | 
 **activation_id** | **str**| Distinct identifier for the offer being available for redemption by the user as returned by Activate Statement Credit Offer or Redeemed Offers, not intended for end-user display. | 

### Return type

[**StatementCreditActivationResponse**](StatementCreditActivationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This resource returns extended information about the specified activated postpaid credit offer. |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

