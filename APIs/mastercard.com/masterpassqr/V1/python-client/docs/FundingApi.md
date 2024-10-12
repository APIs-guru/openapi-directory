# openapi_client.FundingApi

All URIs are relative to *https://api.mastercard.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_funding**](FundingApi.md#create_funding) | **POST** /send/v1/partners/{partnerId}/transfers/funding | The Funding Transaction enables the &#39;pull&#39; of money from the sender&#39;s card to the Transaction Originator who is providing the Person to Merchant service. The amount that is debited from the Funding Account (sending consumer&#39;s account) will be the amount &#39;pushed&#39; to the recipient via a payment transfer request.  Funds can be transferred from Mastercard® or Maestro® debit card accounts. To initiate the funding transaction, users can provide the sending consumer&#39;s Primary Account Number (PAN) or a unique identifier previously mapped to the sending consumer&#39;s account.


# **create_funding**
> Transfer129Wrapper create_funding(partner_id, funding_transfer=funding_transfer)

The Funding Transaction enables the 'pull' of money from the sender's card to the Transaction Originator who is providing the Person to Merchant service. The amount that is debited from the Funding Account (sending consumer's account) will be the amount 'pushed' to the recipient via a payment transfer request.  Funds can be transferred from Mastercard® or Maestro® debit card accounts. To initiate the funding transaction, users can provide the sending consumer's Primary Account Number (PAN) or a unique identifier previously mapped to the sending consumer's account.

The Funding Transaction enables the 'pull' of money from the sender's card to the Transaction Originator who is providing the Person to Merchant service. The amount that is debited from the Funding Account (sending consumer's account) will be the amount 'pushed' to the recipient via a payment transfer request.  Funds can be transferred from Mastercard® or Maestro® debit card accounts. To initiate the funding transaction, users can provide the sending consumer's Primary Account Number (PAN) or a unique identifier previously mapped to the sending consumer's account.

### Example


```python
import openapi_client
from openapi_client.models.funding_transfer118_wrapper import FundingTransfer118Wrapper
from openapi_client.models.transfer129_wrapper import Transfer129Wrapper
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
    api_instance = openapi_client.FundingApi(api_client)
    partner_id = 'ptnr_A37V2q91WUqSonkfEG29Q-Bf4s9' # str | Path Param - Provider assigned partner id. Details - string, 32
    funding_transfer = openapi_client.FundingTransfer118Wrapper() # FundingTransfer118Wrapper | Contains the details of the request message. (optional)

    try:
        # The Funding Transaction enables the 'pull' of money from the sender's card to the Transaction Originator who is providing the Person to Merchant service. The amount that is debited from the Funding Account (sending consumer's account) will be the amount 'pushed' to the recipient via a payment transfer request.  Funds can be transferred from Mastercard® or Maestro® debit card accounts. To initiate the funding transaction, users can provide the sending consumer's Primary Account Number (PAN) or a unique identifier previously mapped to the sending consumer's account.
        api_response = api_instance.create_funding(partner_id, funding_transfer=funding_transfer)
        print("The response of FundingApi->create_funding:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FundingApi->create_funding: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partner_id** | **str**| Path Param - Provider assigned partner id. Details - string, 32 | 
 **funding_transfer** | [**FundingTransfer118Wrapper**](FundingTransfer118Wrapper.md)| Contains the details of the request message. | [optional] 

### Return type

[**Transfer129Wrapper**](Transfer129Wrapper.md)

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

