# openapi_client.KnowledgebasesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runtime_generate_answer**](KnowledgebasesApi.md#runtime_generate_answer) | **POST** /knowledgebases/{kbId}/generateAnswer | GenerateAnswer call to query the knowledgebase.
[**runtime_train**](KnowledgebasesApi.md#runtime_train) | **POST** /knowledgebases/{kbId}/train | Train call to add suggestions to the knowledgebase.


# **runtime_generate_answer**
> QnASearchResultList runtime_generate_answer(kb_id, generate_answer_payload)

GenerateAnswer call to query the knowledgebase.

### Example

* Api Key Authentication (auth_key):

```python
import openapi_client
from openapi_client.models.qn_a_search_result_list import QnASearchResultList
from openapi_client.models.query_dto import QueryDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: auth_key
configuration.api_key['auth_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['auth_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.
    generate_answer_payload = openapi_client.QueryDTO() # QueryDTO | Post body of the request.

    try:
        # GenerateAnswer call to query the knowledgebase.
        api_response = api_instance.runtime_generate_answer(kb_id, generate_answer_payload)
        print("The response of KnowledgebasesApi->runtime_generate_answer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->runtime_generate_answer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 
 **generate_answer_payload** | [**QueryDTO**](QueryDTO.md)| Post body of the request. | 

### Return type

[**QnASearchResultList**](QnASearchResultList.md)

### Authorization

[auth_key](../README.md#auth_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | GenerateAnswer call response. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **runtime_train**
> runtime_train(kb_id, train_payload)

Train call to add suggestions to the knowledgebase.

### Example

* Api Key Authentication (auth_key):

```python
import openapi_client
from openapi_client.models.feedback_records_dto import FeedbackRecordsDTO
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: auth_key
configuration.api_key['auth_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['auth_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KnowledgebasesApi(api_client)
    kb_id = 'kb_id_example' # str | Knowledgebase id.
    train_payload = openapi_client.FeedbackRecordsDTO() # FeedbackRecordsDTO | Post body of the request.

    try:
        # Train call to add suggestions to the knowledgebase.
        api_instance.runtime_train(kb_id, train_payload)
    except Exception as e:
        print("Exception when calling KnowledgebasesApi->runtime_train: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kb_id** | **str**| Knowledgebase id. | 
 **train_payload** | [**FeedbackRecordsDTO**](FeedbackRecordsDTO.md)| Post body of the request. | 

### Return type

void (empty response body)

### Authorization

[auth_key](../README.md#auth_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | HTTP 204 No Content. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

