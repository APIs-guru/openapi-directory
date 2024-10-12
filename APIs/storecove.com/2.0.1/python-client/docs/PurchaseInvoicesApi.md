# openapi_client.PurchaseInvoicesApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_invoice_json**](PurchaseInvoicesApi.md#get_invoice_json) | **GET** /purchase_invoices/{guid} | Get Purchase invoice data as JSON
[**get_invoice_ubl**](PurchaseInvoicesApi.md#get_invoice_ubl) | **GET** /purchase_invoices/{guid}/{packaging} | Get Purchase invoice data in a selectable format
[**get_invoice_ubl_versioned**](PurchaseInvoicesApi.md#get_invoice_ubl_versioned) | **GET** /purchase_invoices/{guid}/{packaging}/{package_version} | Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version


# **get_invoice_json**
> PurchaseInvoice get_invoice_json(guid, pmv=pmv)

Get Purchase invoice data as JSON

Get a specific PurchaseInvoice, in JSON format.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.purchase_invoice import PurchaseInvoice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PurchaseInvoicesApi(api_client)
    guid = 'guid_example' # str | The guid of the purchase invoice, from the webhook.
    pmv = '1.0' # str | The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.  Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean. (optional) (default to '1.0')

    try:
        # Get Purchase invoice data as JSON
        api_response = api_instance.get_invoice_json(guid, pmv=pmv)
        print("The response of PurchaseInvoicesApi->get_invoice_json:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PurchaseInvoicesApi->get_invoice_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**| The guid of the purchase invoice, from the webhook. | 
 **pmv** | **str**| The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.  Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower &#39;g&#39; in &#39;bankgiro&#39;). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean. | [optional] [default to &#39;1.0&#39;]

### Return type

[**PurchaseInvoice**](PurchaseInvoice.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invoice_ubl**
> PurchaseInvoiceUbl get_invoice_ubl(guid, packaging, pmv=pmv)

Get Purchase invoice data in a selectable format

Get a specific PurchaseInvoice.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.purchase_invoice_ubl import PurchaseInvoiceUbl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PurchaseInvoicesApi(api_client)
    guid = 'guid_example' # str | purchase invoice guid
    packaging = json # str | How to package the purchase invoice. (default to json)
    pmv = '1.0' # str | The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.  Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower 'g' in 'bankgiro'). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean. (optional) (default to '1.0')

    try:
        # Get Purchase invoice data in a selectable format
        api_response = api_instance.get_invoice_ubl(guid, packaging, pmv=pmv)
        print("The response of PurchaseInvoicesApi->get_invoice_ubl:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PurchaseInvoicesApi->get_invoice_ubl: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**| purchase invoice guid | 
 **packaging** | **str**| How to package the purchase invoice. | [default to json]
 **pmv** | **str**| The PaymentMeans version. The default (and deprecated) version 1.0 will give BankPaymentMean, DirectDebitPaymentMean, CardPaymentMean, NppPaymentMean, SeBankGiroPaymentMean, SePlusGiroPaymentMean, SgCardPaymentMean, SgGiroPaymentMean, SgPaynowPaymentMean.  Version 2.0 deprecates BankPaymentMean (now CreditTransferPaymentMean), CardPaymentMean (now CreditCardPaymentMean), NppPaymentMean (now AunzNppPayidPaymentMean), SeBankGiroPaymentMean (now SeBankgiroPaymentMean  -- note the lower &#39;g&#39; in &#39;bankgiro&#39;). It also adds OnlinePaymentServicePaymentMean, StandingAgreementPaymentMean, AunzNppPaytoPaymentMean, AunzBpayPaymentMean, AunzPostbillpayPaymentMean, AunzUriPaymentMean. | [optional] [default to &#39;1.0&#39;]

### Return type

[**PurchaseInvoiceUbl**](PurchaseInvoiceUbl.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invoice_ubl_versioned**
> PurchaseInvoiceUbl get_invoice_ubl_versioned(guid, packaging, package_version)

Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version

Get a specific PurchaseInvoice in UBL format

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.purchase_invoice_ubl import PurchaseInvoiceUbl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PurchaseInvoicesApi(api_client)
    guid = 'guid_example' # str | purchase invoice guid
    packaging = ubl # str | How to package the purchase invoice. (default to ubl)
    package_version = si11 # str | The version of the package. (default to si11)

    try:
        # Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version
        api_response = api_instance.get_invoice_ubl_versioned(guid, packaging, package_version)
        print("The response of PurchaseInvoicesApi->get_invoice_ubl_versioned:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PurchaseInvoicesApi->get_invoice_ubl_versioned: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**| purchase invoice guid | 
 **packaging** | **str**| How to package the purchase invoice. | [default to ubl]
 **package_version** | **str**| The version of the package. | [default to si11]

### Return type

[**PurchaseInvoiceUbl**](PurchaseInvoiceUbl.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

