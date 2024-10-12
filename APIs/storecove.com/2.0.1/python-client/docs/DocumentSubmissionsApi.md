# openapi_client.DocumentSubmissionsApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_document_submission**](DocumentSubmissionsApi.md#create_document_submission) | **POST** /document_submissions | Submit a new document.
[**show_document_submission_evidence**](DocumentSubmissionsApi.md#show_document_submission_evidence) | **GET** /document_submissions/{guid}/evidence/{evidence_type} | Get DocumentSubmission Evidence


# **create_document_submission**
> DocumentSubmissionResult create_document_submission(document_submission)

Submit a new document.

Submit a document for delivery. This endpoint will replaces the /invoice_submissions endpoint which will soon be deprecated.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.document_submission import DocumentSubmission
from openapi_client.models.document_submission_result import DocumentSubmissionResult
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
    api_instance = openapi_client.DocumentSubmissionsApi(api_client)
    document_submission = openapi_client.DocumentSubmission() # DocumentSubmission | Document to submit

    try:
        # Submit a new document.
        api_response = api_instance.create_document_submission(document_submission)
        print("The response of DocumentSubmissionsApi->create_document_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentSubmissionsApi->create_document_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_submission** | [**DocumentSubmission**](DocumentSubmission.md)| Document to submit | 

### Return type

[**DocumentSubmissionResult**](DocumentSubmissionResult.md)

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

# **show_document_submission_evidence**
> DocumentSubmissionEvidence show_document_submission_evidence(guid, evidence_type)

Get DocumentSubmission Evidence

Get evidence for a DocumentSubmission by GUID with corresponding status

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.document_submission_evidence import DocumentSubmissionEvidence
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
    api_instance = openapi_client.DocumentSubmissionsApi(api_client)
    guid = 'guid_example' # str | DocumentSubmission GUID
    evidence_type = sending # str | Type of evidence requested (default to sending)

    try:
        # Get DocumentSubmission Evidence
        api_response = api_instance.show_document_submission_evidence(guid, evidence_type)
        print("The response of DocumentSubmissionsApi->show_document_submission_evidence:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentSubmissionsApi->show_document_submission_evidence: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**| DocumentSubmission GUID | 
 **evidence_type** | **str**| Type of evidence requested | [default to sending]

### Return type

[**DocumentSubmissionEvidence**](DocumentSubmissionEvidence.md)

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

