# openapi_client.PhrasesApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_phrases**](PhrasesApi.md#add_phrases) | **POST** /phrases.{content_type} | Add sentiment-bearing phrases
[**delete_phrases**](PhrasesApi.md#delete_phrases) | **DELETE** /phrases.{content_type} | Remove sentiment-bearing phrases
[**get_phrases**](PhrasesApi.md#get_phrases) | **GET** /phrases.{content_type} | Retrieve sentiment-bearing phrases
[**update_phrases**](PhrasesApi.md#update_phrases) | **PUT** /phrases.{content_type} | Updates sentiment-bearing phrases


# **add_phrases**
> List[PhraseResponseVersion] add_phrases(content_type, sentiment_phrases, config_id=config_id)

Add sentiment-bearing phrases

This method adds sentiment-bearing phrases on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.phrase_response_version import PhraseResponseVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PhrasesApi(api_client)
    content_type = 'content_type_example' # str | 
    sentiment_phrases = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration phrases linked to. (optional)

    try:
        # Add sentiment-bearing phrases
        api_response = api_instance.add_phrases(content_type, sentiment_phrases, config_id=config_id)
        print("The response of PhrasesApi->add_phrases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhrasesApi->add_phrases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **sentiment_phrases** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration phrases linked to. | [optional] 

### Return type

[**List[PhraseResponseVersion]**](PhraseResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Number of allowed sentiment-bearing phrases per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_phrases**
> delete_phrases(content_type, sentiment_phrase_ids, config_id=config_id)

Remove sentiment-bearing phrases

This method removes certain sentiment-bearing phrases by their names on Semantria side.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PhrasesApi(api_client)
    content_type = 'content_type_example' # str | 
    sentiment_phrase_ids = ['sentiment_phrase_ids_example'] # List[str] | List of sentiment-bearing phrase identifiers.
    config_id = 'config_id_example' # str | Identifier of configuration phrases linked to. (optional)

    try:
        # Remove sentiment-bearing phrases
        api_instance.delete_phrases(content_type, sentiment_phrase_ids, config_id=config_id)
    except Exception as e:
        print("Exception when calling PhrasesApi->delete_phrases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **sentiment_phrase_ids** | [**List[str]**](str.md)| List of sentiment-bearing phrase identifiers. | 
 **config_id** | **str**| Identifier of configuration phrases linked to. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**403** | Forbidden. Server responds if client tries to remove primary configuration. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_phrases**
> List[PhraseResponseVersion] get_phrases(content_type, config_id=config_id)

Retrieve sentiment-bearing phrases

This method retrieves list of sentiment-bearing phrases available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.phrase_response_version import PhraseResponseVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PhrasesApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration phrases linked to. (optional)

    try:
        # Retrieve sentiment-bearing phrases
        api_response = api_instance.get_phrases(content_type, config_id=config_id)
        print("The response of PhrasesApi->get_phrases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhrasesApi->get_phrases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration phrases linked to. | [optional] 

### Return type

[**List[PhraseResponseVersion]**](PhraseResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the sentiment-bearing phrases list. |  -  |
**202** | Client request accepted and no sentiment-bearing phrases found. Server responds with empty body. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_phrases**
> List[PhraseResponseVersion] update_phrases(content_type, sentiment_phrases, config_id=config_id)

Updates sentiment-bearing phrases

This method updates sentiment-bearing phrases by unique IDs on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.phrase_response_version import PhraseResponseVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PhrasesApi(api_client)
    content_type = 'content_type_example' # str | 
    sentiment_phrases = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration phrases linked to. (optional)

    try:
        # Updates sentiment-bearing phrases
        api_response = api_instance.update_phrases(content_type, sentiment_phrases, config_id=config_id)
        print("The response of PhrasesApi->update_phrases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PhrasesApi->update_phrases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **sentiment_phrases** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration phrases linked to. | [optional] 

### Return type

[**List[PhraseResponseVersion]**](PhraseResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Number of allowed sentiment-bearing phrases per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

