# openapi_client.ReceivedDocumentsApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_received_document**](ReceivedDocumentsApi.md#get_received_document) | **GET** /received_documents/{guid}/{format} | Get a new ReceivedDocument
[**receive_document**](ReceivedDocumentsApi.md#receive_document) | **POST** /legal_entities/{legal_entity_id}/received_documents | Receive a new Document


# **get_received_document**
> ReceivedDocument get_received_document(guid, syntax, format)

Get a new ReceivedDocument

EXPERIMENTAL: use only for orders. Get a new ReceivedDocument.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.received_document import ReceivedDocument
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
    api_instance = openapi_client.ReceivedDocumentsApi(api_client)
    guid = 'guid_example' # str | The guid of the document that was received. This is the \"document_guid\" property of the \"received_document\" webhook.
    syntax = json # str | The syntax in which to receive the received document. (default to json)
    format = 'format_example' # str | Automatically added

    try:
        # Get a new ReceivedDocument
        api_response = api_instance.get_received_document(guid, syntax, format)
        print("The response of ReceivedDocumentsApi->get_received_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReceivedDocumentsApi->get_received_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**| The guid of the document that was received. This is the \&quot;document_guid\&quot; property of the \&quot;received_document\&quot; webhook. | 
 **syntax** | **str**| The syntax in which to receive the received document. | [default to json]
 **format** | **str**| Automatically added | 

### Return type

[**ReceivedDocument**](ReceivedDocument.md)

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

# **receive_document**
> ReceivedDocument receive_document(legal_entity_id, received_document_create)

Receive a new Document

Receive a new Document.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.received_document import ReceivedDocument
from openapi_client.models.received_document_create import ReceivedDocumentCreate
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
    api_instance = openapi_client.ReceivedDocumentsApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity for which the document was received.
    received_document_create = openapi_client.ReceivedDocumentCreate() # ReceivedDocumentCreate | Received document to process.

    try:
        # Receive a new Document
        api_response = api_instance.receive_document(legal_entity_id, received_document_create)
        print("The response of ReceivedDocumentsApi->receive_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReceivedDocumentsApi->receive_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity for which the document was received. | 
 **received_document_create** | [**ReceivedDocumentCreate**](ReceivedDocumentCreate.md)| Received document to process. | 

### Return type

[**ReceivedDocument**](ReceivedDocument.md)

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
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

