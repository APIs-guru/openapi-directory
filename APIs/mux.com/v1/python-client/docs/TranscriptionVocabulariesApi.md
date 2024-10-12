# openapi_client.TranscriptionVocabulariesApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_transcription_vocabulary**](TranscriptionVocabulariesApi.md#create_transcription_vocabulary) | **POST** /video/v1/transcription-vocabularies | Create a Transcription Vocabulary
[**delete_transcription_vocabulary**](TranscriptionVocabulariesApi.md#delete_transcription_vocabulary) | **DELETE** /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID} | Delete a Transcription Vocabulary
[**get_transcription_vocabulary**](TranscriptionVocabulariesApi.md#get_transcription_vocabulary) | **GET** /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID} | Retrieve a Transcription Vocabulary
[**list_transcription_vocabularies**](TranscriptionVocabulariesApi.md#list_transcription_vocabularies) | **GET** /video/v1/transcription-vocabularies | List Transcription Vocabularies
[**update_transcription_vocabulary**](TranscriptionVocabulariesApi.md#update_transcription_vocabulary) | **PUT** /video/v1/transcription-vocabularies/{TRANSCRIPTION_VOCABULARY_ID} | Update a Transcription Vocabulary


# **create_transcription_vocabulary**
> TranscriptionVocabularyResponse create_transcription_vocabulary(create_transcription_vocabulary_request)

Create a Transcription Vocabulary

Create a new Transcription Vocabulary.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.create_transcription_vocabulary_request import CreateTranscriptionVocabularyRequest
from openapi_client.models.transcription_vocabulary_response import TranscriptionVocabularyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranscriptionVocabulariesApi(api_client)
    create_transcription_vocabulary_request = {"name":"Mux API Vocabulary","phrases":["Mux","Live Stream","Playback ID","video encoding"]} # CreateTranscriptionVocabularyRequest | 

    try:
        # Create a Transcription Vocabulary
        api_response = api_instance.create_transcription_vocabulary(create_transcription_vocabulary_request)
        print("The response of TranscriptionVocabulariesApi->create_transcription_vocabulary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscriptionVocabulariesApi->create_transcription_vocabulary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_transcription_vocabulary_request** | [**CreateTranscriptionVocabularyRequest**](CreateTranscriptionVocabularyRequest.md)|  | 

### Return type

[**TranscriptionVocabularyResponse**](TranscriptionVocabularyResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Transcription Vocabulary Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_transcription_vocabulary**
> delete_transcription_vocabulary(transcription_vocabulary_id)

Delete a Transcription Vocabulary

Deletes a Transcription Vocabulary. The Transcription Vocabulary's ID will be disassociated from any live streams using it. Transcription Vocabularies can be deleted while associated live streams are active. However, the words and phrases in the deleted Transcription Vocabulary will remain attached to those streams while they are active.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranscriptionVocabulariesApi(api_client)
    transcription_vocabulary_id = 'transcription_vocabulary_id_example' # str | The ID of the Transcription Vocabulary.

    try:
        # Delete a Transcription Vocabulary
        api_instance.delete_transcription_vocabulary(transcription_vocabulary_id)
    except Exception as e:
        print("Exception when calling TranscriptionVocabulariesApi->delete_transcription_vocabulary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcription_vocabulary_id** | **str**| The ID of the Transcription Vocabulary. | 

### Return type

void (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_transcription_vocabulary**
> TranscriptionVocabularyResponse get_transcription_vocabulary(transcription_vocabulary_id)

Retrieve a Transcription Vocabulary

Retrieves the details of a Transcription Vocabulary that has previously been created. Supply the unique Transcription Vocabulary ID and Mux will return the corresponding Transcription Vocabulary information. The same information is returned when creating a Transcription Vocabulary.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.transcription_vocabulary_response import TranscriptionVocabularyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranscriptionVocabulariesApi(api_client)
    transcription_vocabulary_id = 'transcription_vocabulary_id_example' # str | The ID of the Transcription Vocabulary.

    try:
        # Retrieve a Transcription Vocabulary
        api_response = api_instance.get_transcription_vocabulary(transcription_vocabulary_id)
        print("The response of TranscriptionVocabulariesApi->get_transcription_vocabulary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscriptionVocabulariesApi->get_transcription_vocabulary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcription_vocabulary_id** | **str**| The ID of the Transcription Vocabulary. | 

### Return type

[**TranscriptionVocabularyResponse**](TranscriptionVocabularyResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_transcription_vocabularies**
> ListTranscriptionVocabulariesResponse list_transcription_vocabularies(limit=limit, page=page)

List Transcription Vocabularies

List all Transcription Vocabularies.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_transcription_vocabularies_response import ListTranscriptionVocabulariesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranscriptionVocabulariesApi(api_client)
    limit = 10 # int | Number of items to include in the response (optional) (default to 10)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)

    try:
        # List Transcription Vocabularies
        api_response = api_instance.list_transcription_vocabularies(limit=limit, page=page)
        print("The response of TranscriptionVocabulariesApi->list_transcription_vocabularies:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscriptionVocabulariesApi->list_transcription_vocabularies: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of items to include in the response | [optional] [default to 10]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]

### Return type

[**ListTranscriptionVocabulariesResponse**](ListTranscriptionVocabulariesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_transcription_vocabulary**
> TranscriptionVocabularyResponse update_transcription_vocabulary(transcription_vocabulary_id, update_transcription_vocabulary_request)

Update a Transcription Vocabulary

Updates the details of a previously-created Transcription Vocabulary. Updates to Transcription Vocabularies are allowed while associated live streams are active. However, updates will not be applied to those streams while they are active.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.transcription_vocabulary_response import TranscriptionVocabularyResponse
from openapi_client.models.update_transcription_vocabulary_request import UpdateTranscriptionVocabularyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TranscriptionVocabulariesApi(api_client)
    transcription_vocabulary_id = 'transcription_vocabulary_id_example' # str | The ID of the Transcription Vocabulary.
    update_transcription_vocabulary_request = {"name":"Mux API Vocabulary - Updated","phrases":["Mux","Live Stream","RTMP","Stream Key"]} # UpdateTranscriptionVocabularyRequest | 

    try:
        # Update a Transcription Vocabulary
        api_response = api_instance.update_transcription_vocabulary(transcription_vocabulary_id, update_transcription_vocabulary_request)
        print("The response of TranscriptionVocabulariesApi->update_transcription_vocabulary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TranscriptionVocabulariesApi->update_transcription_vocabulary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transcription_vocabulary_id** | **str**| The ID of the Transcription Vocabulary. | 
 **update_transcription_vocabulary_request** | [**UpdateTranscriptionVocabularyRequest**](UpdateTranscriptionVocabularyRequest.md)|  | 

### Return type

[**TranscriptionVocabularyResponse**](TranscriptionVocabularyResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

