# openapi_client.DocumentApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compare_document**](DocumentApi.md#compare_document) | **POST** /document/new/compare | Create Document and Compare to Original.
[**create_document**](DocumentApi.md#create_document) | **POST** /document | Create New Document.
[**create_scan_document**](DocumentApi.md#create_scan_document) | **POST** /document/new/scan | Create and OCR Scan Document.
[**delete_document**](DocumentApi.md#delete_document) | **DELETE** /document/{documentId} | Delete Document.
[**query_document**](DocumentApi.md#query_document) | **GET** /document/{documentId} | Retrieve Document Details
[**query_document_checks**](DocumentApi.md#query_document_checks) | **GET** /document/{documentId}/checks | Retrieve Document Verification Check Details. 
[**query_document_full**](DocumentApi.md#query_document_full) | **GET** /document/{documentId}/full | Retrieve Document and Scan Data
[**search_document**](DocumentApi.md#search_document) | **POST** /document/search | Search For a Document !! EXPERIMENTAL !!
[**update_compare_document**](DocumentApi.md#update_compare_document) | **POST** /document/{documentId}/compare | Update Document and Compare to Original.
[**update_document**](DocumentApi.md#update_document) | **POST** /document/{documentId} | Update Existing Document.
[**update_scan_document**](DocumentApi.md#update_scan_document) | **POST** /document/{documentId}/scan | Update and OCR Scan Document
[**update_verify_document**](DocumentApi.md#update_verify_document) | **POST** /document/{documentId}/verify | Update and Verify Document.
[**verify_document**](DocumentApi.md#verify_document) | **POST** /document/new/verify | Create and Verify Document.


# **compare_document**
> DocumentCompareResultObject compare_document(x_frankie_customer_id, comparison_set, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Create Document and Compare to Original.

Creates a new document from the \"toDocument\" parameter (usual rules apply in that it must be a valid document, with no existing documentId). The compareDocument can be an existing documentId, or it too can be new as well.   * If existing (i.e. a valid DocumentId is supplied), it will be updated with any new data supplied before being sent to the comparison process.   * If new, then a new document will be created too, and the ID returned in the result.    The document scans are then sent for processing and comparison, such as comparing a selfie-video against a drivers licence photo.  * NOTE: This is NOT the verification process (see /document/verify)  * NOTE: This is NOT the OCR data extraction process either (see /document/scan) 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.comparison_set import ComparisonSet
from openapi_client.models.document_compare_result_object import DocumentCompareResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    comparison_set = openapi_client.ComparisonSet() # ComparisonSet | Contains the document (compareDocument) we want to compare (toDocument) 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Create Document and Compare to Original.
        api_response = api_instance.compare_document(x_frankie_customer_id, comparison_set, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->compare_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->compare_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **comparison_set** | [**ComparisonSet**](ComparisonSet.md)| Contains the document (compareDocument) we want to compare (toDocument)  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**DocumentCompareResultObject**](DocumentCompareResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of the document comparison process.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_document**
> DocumentResultObject create_document(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, document=document)

Create New Document.

Create a document object. A document object can be used to simply store data around a given identity or similar document. You can attach scans, PDFs, photos, videos, etc to the objectif you wish and these may be processed later (using the /scan function) to extract useful information. Or you can manually supply the extracted information if you choose. Document objects can be used to create an entity, based on extracted or supplied data; or it may be attached to an existing entity, either directly or through an ID check. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_result_object import DocumentResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject |  (optional)

    try:
        # Create New Document.
        api_response = api_instance.create_document(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, document=document)
        print("The response of DocumentApi->create_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->create_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)|  | [optional] 

### Return type

[**DocumentResultObject**](DocumentResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the document object as it stands now. No docScan file data will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_scan_document**
> DocumentScanResultObject create_scan_document(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, document=document)

Create and OCR Scan Document.

Create a document object. This is then processed to extract useful information and create an entity; or it may be attached to an entity, either directly or through an ID check. The service will attempt to extract relevant data from any/all uploaded images/documents and will place those in the extraData KVP block. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_scan_result_object import DocumentScanResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject |  (optional)

    try:
        # Create and OCR Scan Document.
        api_response = api_instance.create_scan_document(x_frankie_customer_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, document=document)
        print("The response of DocumentApi->create_scan_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->create_scan_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)|  | [optional] 

### Return type

[**DocumentScanResultObject**](DocumentScanResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of the document scanning process.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_document**
> BasicStatusResultObject delete_document(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Delete Document.

Mark this document as deleted. It will then become effectively invisible to all queries, but will be available in anonymised form for a past check. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.basic_status_result_object import BasicStatusResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Delete Document.
        api_response = api_instance.delete_document(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->delete_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->delete_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**BasicStatusResultObject**](BasicStatusResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Returns a simple status to indicate that the deletion has taken place.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_document**
> DocumentResultObject query_document(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id)

Retrieve Document Details

Query the current status and details of a given documentId. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_result_object import DocumentResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Retrieve Document Details
        api_response = api_instance.query_document(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of DocumentApi->query_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->query_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**DocumentResultObject**](DocumentResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the document object as it stands now. No docScan file data will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_document_checks**
> DocumentChecksResultObject query_document_checks(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Retrieve Document Verification Check Details. 

Get the complete list of all checks that have been performed upon a given document, including the checks that have been performed by others (in those cases you just get the id, status and date run, none of the details). 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_checks_result_object import DocumentChecksResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Retrieve Document Verification Check Details. 
        api_response = api_instance.query_document_checks(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->query_document_checks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->query_document_checks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**DocumentChecksResultObject**](DocumentChecksResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of all checks carried out upon this document.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_document_full**
> DocumentResultObject query_document_full(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id)

Retrieve Document and Scan Data

Query the current status and details of a given documentId. Also returns all document file data, not just the metadata. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_result_object import DocumentResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Retrieve Document and Scan Data
        api_response = api_instance.query_document_full(x_frankie_customer_id, document_id, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of DocumentApi->query_document_full:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->query_document_full: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**DocumentResultObject**](DocumentResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the document object as it stands now. No docScan file data will be returned unless the /full variant is requested. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_document**
> DocumentSearchResultObject search_document(x_frankie_customer_id, search_document, x_frankie_customer_child_id=x_frankie_customer_child_id)

Search For a Document !! EXPERIMENTAL !!

 Search for an existing document that matches the criteria supplied  There are of course limits to what can be searched upon. For a document search to work, you must supply at a minimum:    * idType   * country   * idNumber  The service will return a list of matching documents with confidence levels.  If you are the \"owner\" of the document - i.e. the same CustomerID and CustomerChildID (if relevant) - then the full details of the document will be returned, except for the contents of any attached scans. If you are not the owner of the document, then just the ID and confidence level is returned. You can still use this ID to retrieve any check results (see GET /document/{documentId}/checks)  Note: At this time, we cannot perform searches on document scans. But, you can supply extraData KVPs if they're known. These will help doublecheck search results with ambiguous results. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_search_result_object import DocumentSearchResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    search_document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject | A document object with the parameters you wish to search on. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)

    try:
        # Search For a Document !! EXPERIMENTAL !!
        api_response = api_instance.search_document(x_frankie_customer_id, search_document, x_frankie_customer_child_id=x_frankie_customer_child_id)
        print("The response of DocumentApi->search_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->search_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **search_document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)| A document object with the parameters you wish to search on.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 

### Return type

[**DocumentSearchResultObject**](DocumentSearchResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Returns a list of potentially matching documents or document references, along with a confidence level in the match.  |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_compare_document**
> DocumentCompareResultObject update_compare_document(x_frankie_customer_id, document_id, comparison_set, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Update Document and Compare to Original.

Send the attached document scans to an external service for processing and comparison, such as comparing a selfie-video against a drivers licence photo.  * NOTE: This is NOT the verification process (see /document/verify)  * NOTE: This is NOT the OCR data extraction process either (see /document/scan) 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.comparison_set import ComparisonSet
from openapi_client.models.document_compare_result_object import DocumentCompareResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    comparison_set = openapi_client.ComparisonSet() # ComparisonSet | Contains the document (compareDocument) we want to compare (toDocument).  In this case, the toDocument should be left blank, and is assumed to be \"this\" document 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Update Document and Compare to Original.
        api_response = api_instance.update_compare_document(x_frankie_customer_id, document_id, comparison_set, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->update_compare_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->update_compare_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **comparison_set** | [**ComparisonSet**](ComparisonSet.md)| Contains the document (compareDocument) we want to compare (toDocument).  In this case, the toDocument should be left blank, and is assumed to be \&quot;this\&quot; document  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**DocumentCompareResultObject**](DocumentCompareResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of the document comparison process.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_document**
> DocumentResultObject update_document(x_frankie_customer_id, document_id, document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, no_invalidate=no_invalidate)

Update Existing Document.

Using a previously uploaded but incomplete document, you can optionally supply updated details (such as corrections on a previous scan), along with one or more additional ID scans (e.g. additional pages). 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_result_object import DocumentResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject | The document to be updated
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)
    no_invalidate = True # bool | Disable check result invalidation for this update request.  (optional)

    try:
        # Update Existing Document.
        api_response = api_instance.update_document(x_frankie_customer_id, document_id, document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background, no_invalidate=no_invalidate)
        print("The response of DocumentApi->update_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->update_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)| The document to be updated | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 
 **no_invalidate** | **bool**| Disable check result invalidation for this update request.  | [optional] 

### Return type

[**DocumentResultObject**](DocumentResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the document object as it stands now. No docScan file data will be returned unless the /full variant is requested. |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_scan_document**
> DocumentScanResultObject update_scan_document(x_frankie_customer_id, document_id, document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Update and OCR Scan Document

Using a previously uploaded but potentially incomplete document, you can optionally supply updated details (such as corrections on a previous scan), along with one or more additional ID scans (e.g. additional pages). Includes a follow-on action as well initiating OCR processing proceedures immediately. The service will attempt to extract relevant data from any/all uploaded images/documents and will place those in the extraData KVP block. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_scan_result_object import DocumentScanResultObject
from openapi_client.models.identity_document_object import IdentityDocumentObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    document = openapi_client.IdentityDocumentObject() # IdentityDocumentObject | The entity to be optionally updated, then processed. If updating a document, you only need to populate the fields you're actually adding/updating. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Update and OCR Scan Document
        api_response = api_instance.update_scan_document(x_frankie_customer_id, document_id, document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->update_scan_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->update_scan_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **document** | [**IdentityDocumentObject**](IdentityDocumentObject.md)| The entity to be optionally updated, then processed. If updating a document, you only need to populate the fields you&#39;re actually adding/updating.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**DocumentScanResultObject**](DocumentScanResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of the document scanning process.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_verify_document**
> DocumentVerifyResultObject update_verify_document(x_frankie_customer_id, document_id, process_document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Update and Verify Document.

Using a previously uploaded but potentially incomplete document, you can optionally supply updated details (such as corrections on a previous scan), along with one or more additional ID scans (e.g. additional pages). Includes a follow-on action as well initiating verification proceedures immediately.  Sends the updated document to an external service to have the detailed verified.  For example, we could send through the details of a drivers licence to be checked against a national database.  * NOTE: This is NOT the OCR data extraction process (see /document/scan) * NOTE: This is NOT the comparison process (see /document/compare) 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_verify import DocumentVerify
from openapi_client.models.document_verify_result_object import DocumentVerifyResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    document_id = 'document_id_example' # str | The documentId returned previously from an earlier call to /check or /entity or /document
    process_document = openapi_client.DocumentVerify() # DocumentVerify | The document and (possibly) its associated scans to be verified.  There is also an optional entity object (normally stripped back to it's bare minimum) that can be used to provide supporting data, such as name, address, etc. The entity object may be empty, and is not processed or stored in any way. 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Update and Verify Document.
        api_response = api_instance.update_verify_document(x_frankie_customer_id, document_id, process_document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->update_verify_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->update_verify_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **document_id** | **str**| The documentId returned previously from an earlier call to /check or /entity or /document | 
 **process_document** | [**DocumentVerify**](DocumentVerify.md)| The document and (possibly) its associated scans to be verified.  There is also an optional entity object (normally stripped back to it&#39;s bare minimum) that can be used to provide supporting data, such as name, address, etc. The entity object may be empty, and is not processed or stored in any way.  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**DocumentVerifyResultObject**](DocumentVerifyResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of the document verification process.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_document**
> DocumentVerifyResultObject verify_document(x_frankie_customer_id, process_document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)

Create and Verify Document.

Send the document to an external service to have the detailed verified.  For example, we could send through the details of a drivers licence to be checked against a national database.  * NOTE: This is NOT the OCR data extraction process (see /document/scan) * NOTE: This is NOT the comparison process (see /document/compare) 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.document_verify import DocumentVerify
from openapi_client.models.document_verify_result_object import DocumentVerifyResultObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentApi(api_client)
    x_frankie_customer_id = 'x_frankie_customer_id_example' # str | Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time. 
    process_document = openapi_client.DocumentVerify() # DocumentVerify | The document and (possibly) its associated scans to be verified.  There is also an entity object (normally stripped back to it's bare minimum) that can be used to provide supporting data, such as name, address, etc. The entity object may be empty/ 
    x_frankie_customer_child_id = 'x_frankie_customer_child_id_example' # str | If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer's Children will not be able to see each other's data.  A Customer can see the documents/entities and checks of all their Children.  (optional)
    x_frankie_background = 56 # int | If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  (optional)

    try:
        # Create and Verify Document.
        api_response = api_instance.verify_document(x_frankie_customer_id, process_document, x_frankie_customer_child_id=x_frankie_customer_child_id, x_frankie_background=x_frankie_background)
        print("The response of DocumentApi->verify_document:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentApi->verify_document: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_frankie_customer_id** | **str**| Customer ID issued by Frankie Financial. This will never change. Your API key, which is mapped to this identity, will change over time.  | 
 **process_document** | [**DocumentVerify**](DocumentVerify.md)| The document and (possibly) its associated scans to be verified.  There is also an entity object (normally stripped back to it&#39;s bare minimum) that can be used to provide supporting data, such as name, address, etc. The entity object may be empty/  | 
 **x_frankie_customer_child_id** | **str**| If, as a Frankie Customer, you are acting on behalf of your own customers, then you can populate this field with a Frankie-assigned ID.  Note: If using a CustomerChildID, you will also need a separate api_key for each child.  Any documents, checks, entities that are created when this field has been populated will now be tied to this CustomerID + CustomerChildID combination. Just as Customers cannot see data created by other Customers, so too a Customer&#39;s Children will not be able to see each other&#39;s data.  A Customer can see the documents/entities and checks of all their Children.  | [optional] 
 **x_frankie_background** | **int**| If this header parameter is supplied and set to 1, then the request will not wait for the process to finish, and will return a 202 if there are no obvious errors in the input. The request will then run in the background and send a notification back to the customer. See out callback API for details on this.  See more details here:   https://apidocs.frankiefinancial.com/docs/asynchronous-calls-backgrounding-processes  | [optional] 

### Return type

[**DocumentVerifyResultObject**](DocumentVerifyResultObject.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was valid and able to be processed in some fashion. Results may or may not be successful, but it was completed as far as practical with no actual errors. Returns the results of the document verification process.  |  -  |
**202** | The request was valid and can potentially be fulfilled. The Frankie service has now accepted responsibility for processing and we will either push the results to you, or send you a notification, depending on the request and your configuration. |  -  |
**400** | Bad request. One or more request fields is either missing or incorrect. Details are in the error response. |  -  |
**401** | The request has failed an authorisation check. This can happen for a variety of reasons, such as an invalid or expired API key, or invalid Customer/CustomerChildIDs.  * NOTE: This does not include attempts to read/write data you don&#39;t have access to - that&#39;s a 404 error (as we don&#39;t want to leak information through guessing)  |  -  |
**404** | Cannot return response. In the case of a query, or reference to a specific entity/check/etc, it means that the requested item was not found, or you don&#39;t have access to it. Please check your query before trying again. |  -  |
**405** | A request to POST an update to an object was not allowed due to it&#39;s state. This may indicate an already completed check, or a document that has been processed. You need to create a new document/check if you wish to update the object in question. |  -  |
**415** | For requests with payloads, an unsupported Content-Type was specified. The Frankie Financial API only supports a content type of application/json. |  -  |
**422** | Unprocessable request. This can be triggered in a number of ways. * An attempt to force a check or scan to run, but there is insufficient data to be able to do so. * An attempt to run a utility comparison, or similar industry/document/entity specific scan or process on an unsupported document type (e.g. electricity comparison on a passport) Details of what is required will be in the issues list of the error response.  |  -  |
**429** | The API client is making too many concurrent requests, and some are being throttled. Throttled requests can be retried after a short delay. |  -  |
**500** | Unexpected error. Something went wrong during the checking process. |  -  |
**503** | All of the ID sources configured by the customer are unavailable, or there is no available document processor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

