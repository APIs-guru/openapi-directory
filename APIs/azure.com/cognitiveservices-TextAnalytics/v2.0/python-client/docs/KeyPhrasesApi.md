# openapi_client.KeyPhrasesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**key_phrases**](KeyPhrasesApi.md#key_phrases) | **POST** /keyPhrases | The API returns a list of strings denoting the key talking points in the input text.


# **key_phrases**
> KeyPhraseBatchResult key_phrases(input)

The API returns a list of strings denoting the key talking points in the input text.

See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview#supported-languages\">Text Analytics Documentation</a> for details about the languages that are supported by key phrase extraction.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.key_phrase_batch_result import KeyPhraseBatchResult
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput
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

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KeyPhrasesApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze. Documents can now contain a language field to indicate the text language

    try:
        # The API returns a list of strings denoting the key talking points in the input text.
        api_response = api_instance.key_phrases(input)
        print("The response of KeyPhrasesApi->key_phrases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling KeyPhrasesApi->key_phrases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. Documents can now contain a language field to indicate the text language | 

### Return type

[**KeyPhraseBatchResult**](KeyPhraseBatchResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response results in 0 or more key phrases identified in each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

