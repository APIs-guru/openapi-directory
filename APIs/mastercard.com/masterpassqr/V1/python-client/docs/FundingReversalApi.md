# openapi_client.FundingReversalApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_funding_reversal**](FundingReversalApi.md#create_funding_reversal) | **POST** /send/v1/partners/{partner-id}/transfers/{transfer-id}/transactions/{transaction-id}/reversals | Funding Reversals must be submitted within 30 minutes of the funding transfer request, and should only be submitted for the following conditions:  Funding Transaction must be reversed if payment transaction cannot complete successfully, i.e. the payment transaction is rejected or declined.  Upon a successful reversal of a funding transaction, the refund must be credited to the sending consumer’s Funding Account.


# **create_funding_reversal**
> Transfer145Wrapper create_funding_reversal(partner_id, transfer_id, transaction_id, funding_reversal=funding_reversal)

Funding Reversals must be submitted within 30 minutes of the funding transfer request, and should only be submitted for the following conditions:  Funding Transaction must be reversed if payment transaction cannot complete successfully, i.e. the payment transaction is rejected or declined.  Upon a successful reversal of a funding transaction, the refund must be credited to the sending consumer’s Funding Account.

Funding Reversals must be submitted within 30 minutes of the funding transfer request, and should only be submitted for the following conditions:  Funding Transaction must be reversed if payment transaction cannot complete successfully, i.e. the payment transaction is rejected or declined.  Upon a successful reversal of a funding transaction, the refund must be credited to the sending consumer’s Funding Account.

### Example


```python
import openapi_client
from openapi_client.models.funding_reversal144_wrapper import FundingReversal144Wrapper
from openapi_client.models.transfer145_wrapper import Transfer145Wrapper
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mastercard.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mastercard.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FundingReversalApi(api_client)
    partner_id = 'partner_id_example' # str | Path Param - Provider assigned partner id. Details - string, 32
    transfer_id = 'transfer_id_example' # str | Valid transfer id
    transaction_id = 'transaction_id_example' # str | Valid transaction id
    funding_reversal = openapi_client.FundingReversal144Wrapper() # FundingReversal144Wrapper | Contains the details of the request message. (optional)

    try:
        # Funding Reversals must be submitted within 30 minutes of the funding transfer request, and should only be submitted for the following conditions:  Funding Transaction must be reversed if payment transaction cannot complete successfully, i.e. the payment transaction is rejected or declined.  Upon a successful reversal of a funding transaction, the refund must be credited to the sending consumer’s Funding Account.
        api_response = api_instance.create_funding_reversal(partner_id, transfer_id, transaction_id, funding_reversal=funding_reversal)
        print("The response of FundingReversalApi->create_funding_reversal:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FundingReversalApi->create_funding_reversal: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **transfer_id** | **str**| Valid transfer id | 
 **transaction_id** | **str**| Valid transaction id | 
 **funding_reversal** | [**FundingReversal144Wrapper**](FundingReversal144Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**Transfer145Wrapper**](Transfer145Wrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

