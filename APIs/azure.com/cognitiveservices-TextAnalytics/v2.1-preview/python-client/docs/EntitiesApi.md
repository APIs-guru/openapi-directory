# openapi_client.EntitiesApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entities**](EntitiesApi.md#entities) | **POST** /entities | The API returns a list of recognized entities in a given document.


# **entities**
> EntitiesBatchResultV2dot1 entities(input)

The API returns a list of recognized entities in a given document.

The API returns a list of recognized entities in a given document. To get even more information on each recognized entity we recommend using the Bing Entity Search API by querying for the recognized entities names. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.The API returns a list of known entities and general named entities (\"Person\", \"Location\", \"Organization\" etc) in a given document. Known entities are returned with Wikipedia Id and Wikipedia link, and also Bing Id which can be used in Bing Entity Search API. General named entities are returned with entity types. If a general named entity is also a known entity, then all information regarding it (Wikipedia Id, Bing Id, entity type etc) will be returned. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-entity-linking#supported-types-for-named-entity-recognition\">Supported Entity Types in Text Analytics API</a> for the list of supported Entity Types. See the <a href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/text-analytics-supported-languages\">Supported languages in Text Analytics API</a> for the list of enabled languages.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.entities_batch_result_v2dot1 import EntitiesBatchResultV2dot1
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
    api_instance = openapi_client.EntitiesApi(api_client)
    input = openapi_client.MultiLanguageBatchInput() # MultiLanguageBatchInput | Collection of documents to analyze.

    try:
        # The API returns a list of recognized entities in a given document.
        api_response = api_instance.entities(input)
        print("The response of EntitiesApi->entities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EntitiesApi->entities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**MultiLanguageBatchInput**](MultiLanguageBatchInput.md)| Collection of documents to analyze. | 

### Return type

[**EntitiesBatchResultV2dot1**](EntitiesBatchResultV2dot1.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful call results in a list of recognized entities returned for each valid document |  -  |
**0** | Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

