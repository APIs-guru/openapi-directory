# openapi_client.DefaultApi

All URIs are relative to *https://azure.local/vision/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_image**](DefaultApi.md#analyze_image) | **POST** /analyze | 
[**analyze_image_by_domain**](DefaultApi.md#analyze_image_by_domain) | **POST** /models/{model}/analyze | 
[**describe_image**](DefaultApi.md#describe_image) | **POST** /describe | 
[**generate_thumbnail**](DefaultApi.md#generate_thumbnail) | **POST** /generateThumbnail | 
[**get_text_operation_result**](DefaultApi.md#get_text_operation_result) | **GET** /textOperations/{operationId} | 
[**list_models**](DefaultApi.md#list_models) | **GET** /models | 
[**recognize_printed_text**](DefaultApi.md#recognize_printed_text) | **POST** /ocr | 
[**recognize_text**](DefaultApi.md#recognize_text) | **POST** /recognizeText | 
[**tag_image**](DefaultApi.md#tag_image) | **POST** /tag | 


# **analyze_image**
> ImageAnalysis analyze_image(image_url, visual_features=visual_features, details=details, language=language)



This operation extracts a rich set of visual features based on the image content. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.models.image_analysis import ImageAnalysis
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    visual_features = ['visual_features_example'] # List[str] | A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include:Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&white.Adult - detects if the image is pornographic in nature (depicts nudity or a sex act).  Sexually suggestive content is also detected. (optional)
    details = ['details_example'] # List[str] | A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include:Celebrities - identifies celebrities if detected in the image. (optional)
    language = en # str | The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. (optional) (default to en)

    try:
        api_response = api_instance.analyze_image(image_url, visual_features=visual_features, details=details, language=language)
        print("The response of DefaultApi->analyze_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **visual_features** | [**List[str]**](str.md)| A string indicating what visual feature types to return. Multiple values should be comma-separated. Valid visual feature types include:Categories - categorizes image content according to a taxonomy defined in documentation. Tags - tags the image with a detailed list of words related to the image content. Description - describes the image content with a complete English sentence. Faces - detects if faces are present. If present, generate coordinates, gender and age. ImageType - detects if image is clipart or a line drawing. Color - determines the accent color, dominant color, and whether an image is black&amp;white.Adult - detects if the image is pornographic in nature (depicts nudity or a sex act).  Sexually suggestive content is also detected. | [optional] 
 **details** | [**List[str]**](str.md)| A string indicating which domain-specific details to return. Multiple values should be comma-separated. Valid visual feature types include:Celebrities - identifies celebrities if detected in the image. | [optional] 
 **language** | **str**| The desired language for output generation. If this parameter is not specified, the default value is &amp;quot;en&amp;quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. | [optional] [default to en]

### Return type

[**ImageAnalysis**](ImageAnalysis.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response include the extracted features in JSON format.Here is the definitions for enumeration typesClipartTypeNon-clipart &#x3D; 0,  ambiguous &#x3D; 1, normal-clipart &#x3D; 2, good-clipart &#x3D; 3.LineDrawingTypeNon-LineDrawing &#x3D; 0,LineDrawing &#x3D; 1. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyze_image_by_domain**
> DomainModelResults analyze_image_by_domain(model, image_url, language=language)



This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.models.domain_model_results import DomainModelResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    model = 'model_example' # str | The domain-specific content to recognize.
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    language = en # str | The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. (optional) (default to en)

    try:
        api_response = api_instance.analyze_image_by_domain(model, image_url, language=language)
        print("The response of DefaultApi->analyze_image_by_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_image_by_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **str**| The domain-specific content to recognize. | 
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **language** | **str**| The desired language for output generation. If this parameter is not specified, the default value is &amp;quot;en&amp;quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. | [optional] [default to en]

### Return type

[**DomainModelResults**](DomainModelResults.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Analysis result based on the domain model |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **describe_image**
> ImageDescription describe_image(image_url, max_candidates=max_candidates, language=language)



This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English. Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.models.image_description import ImageDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    max_candidates = '1' # str | Maximum number of candidate descriptions to be returned.  The default is 1. (optional) (default to '1')
    language = en # str | The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. (optional) (default to en)

    try:
        api_response = api_instance.describe_image(image_url, max_candidates=max_candidates, language=language)
        print("The response of DefaultApi->describe_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->describe_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **max_candidates** | **str**| Maximum number of candidate descriptions to be returned.  The default is 1. | [optional] [default to &#39;1&#39;]
 **language** | **str**| The desired language for output generation. If this parameter is not specified, the default value is &amp;quot;en&amp;quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. | [optional] [default to en]

### Return type

[**ImageDescription**](ImageDescription.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image description object. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_thumbnail**
> bytearray generate_thumbnail(width, height, image_url, smart_cropping=smart_cropping)



This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image. A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    width = 56 # int | Width of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
    height = 56 # int | Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    smart_cropping = False # bool | Boolean flag for enabling smart cropping. (optional) (default to False)

    try:
        api_response = api_instance.generate_thumbnail(width, height, image_url, smart_cropping=smart_cropping)
        print("The response of DefaultApi->generate_thumbnail:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->generate_thumbnail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **width** | **int**| Width of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50. | 
 **height** | **int**| Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50. | 
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **smart_cropping** | **bool**| Boolean flag for enabling smart cropping. | [optional] [default to False]

### Return type

**bytearray**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The generated thumbnail in binary format. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_text_operation_result**
> TextOperationResult get_text_operation_result(operation_id)



This interface is used for getting text operation result. The URL to this interface should be retrieved from 'Operation-Location' field returned from Recognize Text interface.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.text_operation_result import TextOperationResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    operation_id = 'operation_id_example' # str | Id of the text operation returned in the response of the 'Recognize Handwritten Text'

    try:
        api_response = api_instance.get_text_operation_result(operation_id)
        print("The response of DefaultApi->get_text_operation_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_text_operation_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**| Id of the text operation returned in the response of the &#39;Recognize Handwritten Text&#39; | 

### Return type

[**TextOperationResult**](TextOperationResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the operation status. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_models**
> ListModelsResult list_models()



This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer. A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.list_models_result import ListModelsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.list_models()
        print("The response of DefaultApi->list_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_models: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListModelsResult**](ListModelsResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of available domain models. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_printed_text**
> OcrResult recognize_printed_text(detect_orientation, image_url, language=language)



Optical Character Recognition (OCR) detects printed text in an image and extracts the recognized characters into a machine-usable character stream.   Upon success, the OCR results will be returned. Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.models.ocr_result import OcrResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    detect_orientation = True # bool | Whether detect the text orientation in the image. With detectOrientation=true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it's upside-down).  (default to True)
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    language = unk # str | The BCP-47 language code of the text to be detected in the image. The default value is 'unk' (optional) (default to unk)

    try:
        api_response = api_instance.recognize_printed_text(detect_orientation, image_url, language=language)
        print("The response of DefaultApi->recognize_printed_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->recognize_printed_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **detect_orientation** | **bool**| Whether detect the text orientation in the image. With detectOrientation&#x3D;true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it&#39;s upside-down).  | [default to True]
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **language** | **str**| The BCP-47 language code of the text to be detected in the image. The default value is &#39;unk&#39; | [optional] [default to unk]

### Return type

[**OcrResult**](OcrResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.textAngleThe angle, in degrees, of the detected text with respect to the closest horizontal or vertical direction. After rotating the input image clockwise by this angle, the recognized text lines become horizontal or vertical. In combination with the orientation property it can be used to overlay recognition results correctly on the original image, by rotating either the original image or recognition results by a suitable angle around the center of the original image. If the angle cannot be confidently detected, this property is not present. If the image contains text at different angles, only part of the text will be recognized correctly. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_text**
> recognize_text(image_url, detect_handwriting=detect_handwriting)



Recognize Text operation. When you use the Recognize Text interface, the response contains a field called 'Operation-Location'. The 'Operation-Location' field contains the URL that you must use for your Get Handwritten Text Operation Result operation.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    detect_handwriting = False # bool | If 'true' is specified, handwriting recognition is performed. If this parameter is set to 'false' or is not specified, printed text recognition is performed. (optional) (default to False)

    try:
        api_instance.recognize_text(image_url, detect_handwriting=detect_handwriting)
    except Exception as e:
        print("Exception when calling DefaultApi->recognize_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **detect_handwriting** | **bool**| If &#39;true&#39; is specified, handwriting recognition is performed. If this parameter is set to &#39;false&#39; or is not specified, printed text recognition is performed. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The service has accepted the request and will start processing later. It will return Accepted immediately and include an Operation-Location header. Client side should further query the operation status using the URL specified in this header. The operation ID will expire in 48 hours. |  * Operation-Location - URL to query for status of the operation. The operation ID will expire in 48 hours.  <br>  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tag_image**
> TagResult tag_image(image_url, language=language)



This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag 'cello' may be accompanied by the hint 'musical instrument'. All tags are in English.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_image_request import AnalyzeImageRequest
from openapi_client.models.tag_result import TagResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/vision/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/vision/v1.0"
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
    api_instance = openapi_client.DefaultApi(api_client)
    image_url = openapi_client.AnalyzeImageRequest() # AnalyzeImageRequest | A JSON document with a URL pointing to the image that is to be analyzed.
    language = en # str | The desired language for output generation. If this parameter is not specified, the default value is &quot;en&quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. (optional) (default to en)

    try:
        api_response = api_instance.tag_image(image_url, language=language)
        print("The response of DefaultApi->tag_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->tag_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | [**AnalyzeImageRequest**](AnalyzeImageRequest.md)| A JSON document with a URL pointing to the image that is to be analyzed. | 
 **language** | **str**| The desired language for output generation. If this parameter is not specified, the default value is &amp;quot;en&amp;quot;.Supported languages:en - English, Default. es - Spanish, ja - Japanese, pt - Portuguese, zh - Simplified Chinese. | [optional] [default to en]

### Return type

[**TagResult**](TagResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image tags object. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

