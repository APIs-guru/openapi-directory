# openapi_client.InvoiceSubmissionsApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_invoice_submission**](InvoiceSubmissionsApi.md#create_invoice_submission) | **POST** /invoice_submissions | Submit a new invoice
[**preflight_invoice_recipient**](InvoiceSubmissionsApi.md#preflight_invoice_recipient) | **POST** /invoice_submissions/preflight | DEPRECATED. Preflight an invoice recipient
[**show_invoice_submission_evidence**](InvoiceSubmissionsApi.md#show_invoice_submission_evidence) | **GET** /invoice_submissions/{guid}/evidence | DEPRECATED. Get InvoiceSubmission Evidence


# **create_invoice_submission**
> InvoiceSubmissionResult create_invoice_submission(invoice_submission)

Submit a new invoice

DEPRECATED. Use the new /document_submissions endpoint. Submit an invoice for delivery.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.invoice_submission import InvoiceSubmission
from openapi_client.models.invoice_submission_result import InvoiceSubmissionResult
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
    api_instance = openapi_client.InvoiceSubmissionsApi(api_client)
    invoice_submission = openapi_client.InvoiceSubmission() # InvoiceSubmission | Invoice to submit

    try:
        # Submit a new invoice
        api_response = api_instance.create_invoice_submission(invoice_submission)
        print("The response of InvoiceSubmissionsApi->create_invoice_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSubmissionsApi->create_invoice_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_submission** | [**InvoiceSubmission**](InvoiceSubmission.md)| Invoice to submit | 

### Return type

[**InvoiceSubmissionResult**](InvoiceSubmissionResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **preflight_invoice_recipient**
> PreflightInvoiceRecipientResult preflight_invoice_recipient(invoice_recipient_preflight)

DEPRECATED. Preflight an invoice recipient

Deprecated. Use the new /discovery endpoint. Check whether Storecove can deliver an invoice for a list of ids.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.invoice_recipient_preflight import InvoiceRecipientPreflight
from openapi_client.models.preflight_invoice_recipient_result import PreflightInvoiceRecipientResult
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
    api_instance = openapi_client.InvoiceSubmissionsApi(api_client)
    invoice_recipient_preflight = openapi_client.InvoiceRecipientPreflight() # InvoiceRecipientPreflight | The invoice recipient to preflight

    try:
        # DEPRECATED. Preflight an invoice recipient
        api_response = api_instance.preflight_invoice_recipient(invoice_recipient_preflight)
        print("The response of InvoiceSubmissionsApi->preflight_invoice_recipient:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSubmissionsApi->preflight_invoice_recipient: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice_recipient_preflight** | [**InvoiceRecipientPreflight**](InvoiceRecipientPreflight.md)| The invoice recipient to preflight | 

### Return type

[**PreflightInvoiceRecipientResult**](PreflightInvoiceRecipientResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **show_invoice_submission_evidence**
> InvoiceSubmissionEvidence show_invoice_submission_evidence(guid)

DEPRECATED. Get InvoiceSubmission Evidence

Deprecated. Use the new /document_submissions/{guid}/evidence endpoint. Get evidence for an InvoiceSubmission by GUID with corresponding status

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.invoice_submission_evidence import InvoiceSubmissionEvidence
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
    api_instance = openapi_client.InvoiceSubmissionsApi(api_client)
    guid = 'guid_example' # str | InvoiceSubmission GUID

    try:
        # DEPRECATED. Get InvoiceSubmission Evidence
        api_response = api_instance.show_invoice_submission_evidence(guid)
        print("The response of InvoiceSubmissionsApi->show_invoice_submission_evidence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSubmissionsApi->show_invoice_submission_evidence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**| InvoiceSubmission GUID | 

### Return type

[**InvoiceSubmissionEvidence**](InvoiceSubmissionEvidence.md)

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

