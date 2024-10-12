# openapi_client.ImageModerationApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**image_moderation_evaluate**](ImageModerationApi.md#image_moderation_evaluate) | **POST** /contentmoderator/moderate/v1.0/ProcessImage/Evaluate | 
[**image_moderation_find_faces**](ImageModerationApi.md#image_moderation_find_faces) | **POST** /contentmoderator/moderate/v1.0/ProcessImage/FindFaces | 
[**image_moderation_match**](ImageModerationApi.md#image_moderation_match) | **POST** /contentmoderator/moderate/v1.0/ProcessImage/Match | 
[**image_moderation_ocr**](ImageModerationApi.md#image_moderation_ocr) | **POST** /contentmoderator/moderate/v1.0/ProcessImage/OCR | 


# **image_moderation_evaluate**
> Evaluate image_moderation_evaluate(cache_image=cache_image)



Returns probabilities of the image containing racy or adult content.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.evaluate import Evaluate
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
    api_instance = openapi_client.ImageModerationApi(api_client)
    cache_image = True # bool | Whether to retain the submitted image for future use; defaults to false if omitted. (optional)

    try:
        api_response = api_instance.image_moderation_evaluate(cache_image=cache_image)
        print("The response of ImageModerationApi->image_moderation_evaluate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageModerationApi->image_moderation_evaluate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cache_image** | **bool**| Whether to retain the submitted image for future use; defaults to false if omitted. | [optional] 

### Return type

[**Evaluate**](Evaluate.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_moderation_find_faces**
> FoundFaces image_moderation_find_faces(cache_image=cache_image)



Returns the list of faces found.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.found_faces import FoundFaces
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
    api_instance = openapi_client.ImageModerationApi(api_client)
    cache_image = True # bool | Whether to retain the submitted image for future use; defaults to false if omitted. (optional)

    try:
        api_response = api_instance.image_moderation_find_faces(cache_image=cache_image)
        print("The response of ImageModerationApi->image_moderation_find_faces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageModerationApi->image_moderation_find_faces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cache_image** | **bool**| Whether to retain the submitted image for future use; defaults to false if omitted. | [optional] 

### Return type

[**FoundFaces**](FoundFaces.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of faces found. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_moderation_match**
> MatchResponse image_moderation_match(list_id=list_id, cache_image=cache_image)



Fuzzily match an image against one of your custom Image Lists. You can create and manage your custom image lists using <a href=\"/docs/services/578ff44d2703741568569ab9/operations/578ff7b12703741568569abe\">this</a> API.     Returns ID and tags of matching image.<br/>  <br/>  Note: Refresh Index must be run on the corresponding Image List before additions and removals are reflected in the response.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.match_response import MatchResponse
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
    api_instance = openapi_client.ImageModerationApi(api_client)
    list_id = 'list_id_example' # str | The list Id. (optional)
    cache_image = True # bool | Whether to retain the submitted image for future use; defaults to false if omitted. (optional)

    try:
        api_response = api_instance.image_moderation_match(list_id=list_id, cache_image=cache_image)
        print("The response of ImageModerationApi->image_moderation_match:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageModerationApi->image_moderation_match: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| The list Id. | [optional] 
 **cache_image** | **bool**| Whether to retain the submitted image for future use; defaults to false if omitted. | [optional] 

### Return type

[**MatchResponse**](MatchResponse.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Supported values for tags are:  &lt;ul&gt;  &lt;li&gt;101: Nudity&lt;/li&gt;  &lt;li&gt;102: Sexual Content&lt;/li&gt;  &lt;li&gt;201: Alcohol&lt;/li&gt;  &lt;li&gt;202: Tobacco&lt;/li&gt;  &lt;li&gt;203: Drugs&lt;/li&gt;  &lt;li&gt;301: Child Exploitation&lt;/li&gt;  &lt;li&gt;401: Violence&lt;/li&gt;  &lt;li&gt;402: Weapons&lt;/li&gt;  &lt;li&gt;403: Gore&lt;/li&gt;  &lt;li&gt;501: Profanity&lt;/li&gt;  &lt;li&gt;502: Vulgarity&lt;/li&gt;  &lt;/ul&gt;. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_moderation_ocr**
> OCR image_moderation_ocr(language, cache_image=cache_image, enhanced=enhanced)



Returns any text found in the image for the language specified. If no language is specified in input then the detection defaults to English.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.ocr import OCR
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
    api_instance = openapi_client.ImageModerationApi(api_client)
    language = 'language_example' # str | Language of the terms.
    cache_image = True # bool | Whether to retain the submitted image for future use; defaults to false if omitted. (optional)
    enhanced = False # bool | When set to True, the image goes through additional processing to come with additional candidates.  image/tiff is not supported when enhanced is set to true  Note: This impacts the response time. (optional) (default to False)

    try:
        api_response = api_instance.image_moderation_ocr(language, cache_image=cache_image, enhanced=enhanced)
        print("The response of ImageModerationApi->image_moderation_ocr:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageModerationApi->image_moderation_ocr: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Language of the terms. | 
 **cache_image** | **bool**| Whether to retain the submitted image for future use; defaults to false if omitted. | [optional] 
 **enhanced** | **bool**| When set to True, the image goes through additional processing to come with additional candidates.  image/tiff is not supported when enhanced is set to true  Note: This impacts the response time. | [optional] [default to False]

### Return type

[**OCR**](OCR.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The text found and list of candidate text details. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

