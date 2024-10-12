# openapi_client.TextAnalysisApi

All URIs are relative to *https://api.symanto.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**communication**](TextAnalysisApi.md#communication) | **POST** /communication | Communication &amp; Tonality
[**ekman_emotion**](TextAnalysisApi.md#ekman_emotion) | **POST** /ekman-emotion | Emotion Analysis
[**emotion**](TextAnalysisApi.md#emotion) | **POST** /emotion | Emotion Analysis
[**language_detection**](TextAnalysisApi.md#language_detection) | **POST** /language-detection | Language Detection
[**personality**](TextAnalysisApi.md#personality) | **POST** /personality | Personality Traits
[**sentiment**](TextAnalysisApi.md#sentiment) | **POST** /sentiment | Sentiment Analysis
[**topic_sentiment**](TextAnalysisApi.md#topic_sentiment) | **POST** /topic-sentiment | Extracts topics and sentiments and relates them.


# **communication**
> List[PostPredicted] communication(all=all, post=post)

Communication & Tonality

Identify the purpose and writing style of a written text.  Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]  Returned labels: * action-seeking * fact-oriented * information-seeking * self-revealing

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.models.post_predicted import PostPredicted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    all = False # bool |  (optional) (default to False)
    post = [openapi_client.Post()] # List[Post] |  (optional)

    try:
        # Communication & Tonality
        api_response = api_instance.communication(all=all, post=post)
        print("The response of TextAnalysisApi->communication:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->communication: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **bool**|  | [optional] [default to False]
 **post** | [**List[Post]**](Post.md)|  | [optional] 

### Return type

[**List[PostPredicted]**](PostPredicted.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ekman_emotion**
> List[PostPredicted] ekman_emotion(all=all, post=post)

Emotion Analysis

Detect the emotions of the text based on Ekman.  Supported Langauges: [`en`, `de`, `es`]  Returned labels: * anger * disgust * fear * joy * sadness * surprise * no-emotion

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.models.post_predicted import PostPredicted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    all = False # bool |  (optional) (default to False)
    post = [openapi_client.Post()] # List[Post] |  (optional)

    try:
        # Emotion Analysis
        api_response = api_instance.ekman_emotion(all=all, post=post)
        print("The response of TextAnalysisApi->ekman_emotion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->ekman_emotion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **bool**|  | [optional] [default to False]
 **post** | [**List[Post]**](Post.md)|  | [optional] 

### Return type

[**List[PostPredicted]**](PostPredicted.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emotion**
> List[PostPredicted] emotion(all=all, post=post)

Emotion Analysis

Detect the emotions of the text.  Supported Langauges: [`en`, `de`, `es`]  Returned labels: * anger * joy * love * sadness * surprise * uncategorized

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.models.post_predicted import PostPredicted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    all = False # bool |  (optional) (default to False)
    post = [openapi_client.Post()] # List[Post] |  (optional)

    try:
        # Emotion Analysis
        api_response = api_instance.emotion(all=all, post=post)
        print("The response of TextAnalysisApi->emotion:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->emotion: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **bool**|  | [optional] [default to False]
 **post** | [**List[Post]**](Post.md)|  | [optional] 

### Return type

[**List[PostPredicted]**](PostPredicted.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **language_detection**
> List[LanguagePredicted] language_detection(language_detection=language_detection)

Language Detection

Identifies what language a text is written in. Only languages that our API supports can be analyzed.  Returned labels: * language_code of the detected language

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.language_detection import LanguageDetection
from openapi_client.models.language_predicted import LanguagePredicted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    language_detection = [openapi_client.LanguageDetection()] # List[LanguageDetection] |  (optional)

    try:
        # Language Detection
        api_response = api_instance.language_detection(language_detection=language_detection)
        print("The response of TextAnalysisApi->language_detection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->language_detection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language_detection** | [**List[LanguageDetection]**](LanguageDetection.md)|  | [optional] 

### Return type

[**List[LanguagePredicted]**](LanguagePredicted.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **personality**
> List[PostPredicted] personality(all=all, post=post)

Personality Traits

Predict the personality trait of author of any written text.  Supported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]  Returned labels:  * emotional * rational

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.models.post_predicted import PostPredicted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    all = False # bool |  (optional) (default to False)
    post = [openapi_client.Post()] # List[Post] |  (optional)

    try:
        # Personality Traits
        api_response = api_instance.personality(all=all, post=post)
        print("The response of TextAnalysisApi->personality:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->personality: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **bool**|  | [optional] [default to False]
 **post** | [**List[Post]**](Post.md)|  | [optional] 

### Return type

[**List[PostPredicted]**](PostPredicted.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sentiment**
> List[PostPredicted] sentiment(all=all, post=post)

Sentiment Analysis

Evaluate the overall tonality of the text.  Supported Languages: [`en`, `de`, `es`]  Returned labels: * positive * negative

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.models.post_predicted import PostPredicted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    all = False # bool |  (optional) (default to False)
    post = [openapi_client.Post()] # List[Post] |  (optional)

    try:
        # Sentiment Analysis
        api_response = api_instance.sentiment(all=all, post=post)
        print("The response of TextAnalysisApi->sentiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->sentiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **bool**|  | [optional] [default to False]
 **post** | [**List[Post]**](Post.md)|  | [optional] 

### Return type

[**List[PostPredicted]**](PostPredicted.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **topic_sentiment**
> List[TopicSentimentOutput] topic_sentiment(domain=domain, post=post)

Extracts topics and sentiments and relates them.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.post import Post
from openapi_client.models.topic_sentiment_output import TopicSentimentOutput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.symanto.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.symanto.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextAnalysisApi(api_client)
    domain = 'domain_example' # str | Provide analysis domain for better extraction (optional) (optional)
    post = [openapi_client.Post()] # List[Post] |  (optional)

    try:
        # Extracts topics and sentiments and relates them.
        api_response = api_instance.topic_sentiment(domain=domain, post=post)
        print("The response of TextAnalysisApi->topic_sentiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextAnalysisApi->topic_sentiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **str**| Provide analysis domain for better extraction (optional) | [optional] 
 **post** | [**List[Post]**](Post.md)|  | [optional] 

### Return type

[**List[TopicSentimentOutput]**](TopicSentimentOutput.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

