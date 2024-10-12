# openapi_client.Batch1Api

All URIs are relative to *https://api.ntropy.network*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_a_batch_of_business_transaction_classification_results_1**](Batch1Api.md#get_a_batch_of_business_transaction_classification_results_1) | **GET** /classifier/business/batch/{id} | Get a batch of business transaction classification results.


# **get_a_batch_of_business_transaction_classification_results_1**
> GetABatchOfBusinessTransactionClassificationResults200Response get_a_batch_of_business_transaction_classification_results_1(id)

Get a batch of business transaction classification results.

Get a batch of business transaction classification results.

### Example


```python
import openapi_client
from openapi_client.models.get_a_batch_of_business_transaction_classification_results200_response import GetABatchOfBusinessTransactionClassificationResults200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ntropy.network
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ntropy.network"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.Batch1Api(api_client)
    id = '247ee045-3d04-4b3c-872b-a9160b810f33' # str | (Required) Batch id.

    try:
        # Get a batch of business transaction classification results.
        api_response = api_instance.get_a_batch_of_business_transaction_classification_results_1(id)
        print("The response of Batch1Api->get_a_batch_of_business_transaction_classification_results_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling Batch1Api->get_a_batch_of_business_transaction_classification_results_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| (Required) Batch id. | 

### Return type

[**GetABatchOfBusinessTransactionClassificationResults200Response**](GetABatchOfBusinessTransactionClassificationResults200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned a batch of business transaction classification results. |  -  |
**404** | Not found. |  -  |
**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

