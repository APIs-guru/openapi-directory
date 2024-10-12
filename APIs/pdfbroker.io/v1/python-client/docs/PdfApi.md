# openapi_client.PdfApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_pdf_get**](PdfApi.md#api_pdf_get) | **GET** /api/pdf | Basic method to verify api is up and running
[**api_pdf_pdfconcat_post**](PdfApi.md#api_pdf_pdfconcat_post) | **POST** /api/pdf/pdfconcat | Concatenate multiple pdf files into single pdf file..
[**api_pdf_pdftoimage_post**](PdfApi.md#api_pdf_pdftoimage_post) | **POST** /api/pdf/pdftoimage | Generate an image of to provided pdf file
[**api_pdf_pdfwritestring_post**](PdfApi.md#api_pdf_pdfwritestring_post) | **POST** /api/pdf/pdfwritestring | Write text on a page in a pdf document.
[**api_pdf_wkhtmltopdf_post**](PdfApi.md#api_pdf_wkhtmltopdf_post) | **POST** /api/pdf/wkhtmltopdf | Generate pdf file from url using the excellent tool wkhtmltopdf.
[**api_pdf_xslfo_post**](PdfApi.md#api_pdf_xslfo_post) | **POST** /api/pdf/xslfo | Create pdf-file from complete XSL-FO document.
[**api_pdf_xslfowithtransform_post**](PdfApi.md#api_pdf_xslfowithtransform_post) | **POST** /api/pdf/xslfowithtransform | Create pdf-file from transforming xml document with Xsl-Fo transform document.


# **api_pdf_get**
> api_pdf_get()

Basic method to verify api is up and running

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)

    try:
        # Basic method to verify api is up and running
        api_instance.api_pdf_get()
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**400** | If any error occurs parsing input |  -  |
**415** | If content-type of request is not set to multipart/form-data or application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pdf_pdfconcat_post**
> PdfResponseDto api_pdf_pdfconcat_post(pdf_concatenation_request_dto=pdf_concatenation_request_dto)

Concatenate multiple pdf files into single pdf file..

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.pdf_concatenation_request_dto import PdfConcatenationRequestDto
from openapi_client.models.pdf_response_dto import PdfResponseDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)
    pdf_concatenation_request_dto = {
  "pdfDocumentsAsBase64String": [
    "<Encode your pdf documents as Base64 encoded string>",
    "<Encode your pdf documents as Base64 encoded string>"
  ]
} # PdfConcatenationRequestDto | PdfConcat Request. Add two or more pdf files and concatenate pages into single pdf document. (optional)

    try:
        # Concatenate multiple pdf files into single pdf file..
        api_response = api_instance.api_pdf_pdfconcat_post(pdf_concatenation_request_dto=pdf_concatenation_request_dto)
        print("The response of PdfApi->api_pdf_pdfconcat_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_pdfconcat_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pdf_concatenation_request_dto** | [**PdfConcatenationRequestDto**](PdfConcatenationRequestDto.md)| PdfConcat Request. Add two or more pdf files and concatenate pages into single pdf document. | [optional] 

### Return type

[**PdfResponseDto**](PdfResponseDto.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json |  -  |
**400** | If any error occurs parsing input |  -  |
**415** | If content-type of request is not set to multipart/form-data or application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pdf_pdftoimage_post**
> ImageResponseDto api_pdf_pdftoimage_post(pdf_to_image_request_dto=pdf_to_image_request_dto)

Generate an image of to provided pdf file

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.image_response_dto import ImageResponseDto
from openapi_client.models.pdf_to_image_request_dto import PdfToImageRequestDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)
    pdf_to_image_request_dto = {
  "pdfFileBase64String": "<Encode your existing PDF document as Base64 encoded string>",
  "options": {
    "pageNumber": 1,
    "imageFormat": "image/jpeg",
    "horizontalResolution": 96.0,
    "verticalResolution": 96.0,
    "width": 0,
    "height": 0,
    "transparent": false,
    "jpegQuality": 90,
    "pngCompressionLevel": 6
  }
} # PdfToImageRequestDto | PdfToImage Request. Create an image of a page in an existing pdf document. (optional)

    try:
        # Generate an image of to provided pdf file
        api_response = api_instance.api_pdf_pdftoimage_post(pdf_to_image_request_dto=pdf_to_image_request_dto)
        print("The response of PdfApi->api_pdf_pdftoimage_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_pdftoimage_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pdf_to_image_request_dto** | [**PdfToImageRequestDto**](PdfToImageRequestDto.md)| PdfToImage Request. Create an image of a page in an existing pdf document. | [optional] 

### Return type

[**ImageResponseDto**](ImageResponseDto.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, image/gif, image/jpeg, image/png

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Generate an image of the provided pdf file. Either the image file directly or serialized as Json if Accept-header is set to application/json |  -  |
**400** | If any error occurs parsing input |  -  |
**415** | If content-type of request is not set to multipart/form-data or application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pdf_pdfwritestring_post**
> PdfResponseDto api_pdf_pdfwritestring_post(pdf_write_string_request_dto=pdf_write_string_request_dto)

Write text on a page in a pdf document.

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.pdf_response_dto import PdfResponseDto
from openapi_client.models.pdf_write_string_request_dto import PdfWriteStringRequestDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)
    pdf_write_string_request_dto = {
  "pdfFileBase64String": "<Encode your existing PDF document as Base64 encoded string>",
  "options": {
    "text": "This is test string",
    "textColor": {
      "r": 33,
      "g": 34,
      "b": 35
    },
    "font": {
      "name": "Arial",
      "size": 24.0,
      "style": 1
    },
    "pageNumber": 3,
    "xPosition": 40.0,
    "yPosition": -200.0,
    "xOrigin": 1,
    "yOrigin": 2
  },
  "fontFileBase64String": "<Attach your own TrueTypeFont file if necessary to style text, encoded as Base64 encoded string>"
} # PdfWriteStringRequestDto | PdfWriteString Request. Write string on page in pdf document (optional)

    try:
        # Write text on a page in a pdf document.
        api_response = api_instance.api_pdf_pdfwritestring_post(pdf_write_string_request_dto=pdf_write_string_request_dto)
        print("The response of PdfApi->api_pdf_pdfwritestring_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_pdfwritestring_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pdf_write_string_request_dto** | [**PdfWriteStringRequestDto**](PdfWriteStringRequestDto.md)| PdfWriteString Request. Write string on page in pdf document | [optional] 

### Return type

[**PdfResponseDto**](PdfResponseDto.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json |  -  |
**400** | If any error occurs parsing input |  -  |
**415** | If content-type of request is not set to multipart/form-data or application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pdf_wkhtmltopdf_post**
> PdfResponseDto api_pdf_wkhtmltopdf_post(wk_html_to_pdf_request_dto=wk_html_to_pdf_request_dto)

Generate pdf file from url using the excellent tool wkhtmltopdf.

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.pdf_response_dto import PdfResponseDto
from openapi_client.models.wk_html_to_pdf_request_dto import WkHtmlToPdfRequestDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)
    wk_html_to_pdf_request_dto = {
  "url": "https://www.pdfbroker.io",
  "htmlBase64String": null,
  "wkHtmlToPdfArguments": {
    "grayscale": "",
    "viewport-size": "1280x1024"
  },
  "resources": null
} # WkHtmlToPdfRequestDto | WkHtmlToPdf Request. Generate pdf from html, either from url or base64 encoded html string (optional)

    try:
        # Generate pdf file from url using the excellent tool wkhtmltopdf.
        api_response = api_instance.api_pdf_wkhtmltopdf_post(wk_html_to_pdf_request_dto=wk_html_to_pdf_request_dto)
        print("The response of PdfApi->api_pdf_wkhtmltopdf_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_wkhtmltopdf_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wk_html_to_pdf_request_dto** | [**WkHtmlToPdfRequestDto**](WkHtmlToPdfRequestDto.md)| WkHtmlToPdf Request. Generate pdf from html, either from url or base64 encoded html string | [optional] 

### Return type

[**PdfResponseDto**](PdfResponseDto.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json |  -  |
**400** | If any error occurs executing request |  -  |
**415** | If content-type of request is not set to application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pdf_xslfo_post**
> PdfResponseDto api_pdf_xslfo_post(fo_request_dto=fo_request_dto)

Create pdf-file from complete XSL-FO document.

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.fo_request_dto import FoRequestDto
from openapi_client.models.pdf_response_dto import PdfResponseDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)
    fo_request_dto = {
  "foDocumentBase64String": "<Encode your XSL-FO document as Base64 encoded string>",
  "resources": {
    "<Use file name as key, i.e 'logo.png', which is set as src on fo:external-graphic elements>": "<Convert your images to Base64 encoded string>"
  },
  "metadata": {
    "title": "Pdf title metadata can be set with metadata object",
    "author": null,
    "subject": null,
    "keywords": [
      "pdf",
      "api"
    ],
    "enableAdd": true,
    "enableCopy": true,
    "enableModify": true,
    "enablePrinting": true,
    "ownerPassword": null,
    "userPassword": null
  }
} # FoRequestDto | XSL-FO Request, the basic XSL-FO request. Post your XSL-FO document and digital resources, either as 'multipart/form-data' or 'application/json' (optional)

    try:
        # Create pdf-file from complete XSL-FO document.
        api_response = api_instance.api_pdf_xslfo_post(fo_request_dto=fo_request_dto)
        print("The response of PdfApi->api_pdf_xslfo_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_xslfo_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fo_request_dto** | [**FoRequestDto**](FoRequestDto.md)| XSL-FO Request, the basic XSL-FO request. Post your XSL-FO document and digital resources, either as &#39;multipart/form-data&#39; or &#39;application/json&#39; | [optional] 

### Return type

[**PdfResponseDto**](PdfResponseDto.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json |  -  |
**400** | If any error occurs parsing input |  -  |
**415** | If content-type of request is not set to multipart/form-data or application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_pdf_xslfowithtransform_post**
> PdfResponseDto api_pdf_xslfowithtransform_post(fo_transform_request_dto=fo_transform_request_dto)

Create pdf-file from transforming xml document with Xsl-Fo transform document.

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.fo_transform_request_dto import FoTransformRequestDto
from openapi_client.models.pdf_response_dto import PdfResponseDto
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PdfApi(api_client)
    fo_transform_request_dto = {
  "xmlDataDocumentBase64String": "<This is the document which contains your data that the XSL-FO transform will be applied on. Send as Base64 encoded string>",
  "foDocumentBase64String": "<Encode your XSL-FO transform document as Base64 encoded string>",
  "resources": {
    "<Use file name as key, i.e 'logo.png', which is set as src on fo:external-graphic elements>": "<Convert your images to Base64 encoded string>"
  },
  "metadata": null
} # FoTransformRequestDto | XSL-FO Transform Request. The XSL-FO is transformed on the supplied xml data document. Post your XSL-FO transform document and xml data document aloing with your digital resources, either as 'multipart/form-data' or 'application/json' (optional)

    try:
        # Create pdf-file from transforming xml document with Xsl-Fo transform document.
        api_response = api_instance.api_pdf_xslfowithtransform_post(fo_transform_request_dto=fo_transform_request_dto)
        print("The response of PdfApi->api_pdf_xslfowithtransform_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PdfApi->api_pdf_xslfowithtransform_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fo_transform_request_dto** | [**FoTransformRequestDto**](FoTransformRequestDto.md)| XSL-FO Transform Request. The XSL-FO is transformed on the supplied xml data document. Post your XSL-FO transform document and xml data document aloing with your digital resources, either as &#39;multipart/form-data&#39; or &#39;application/json&#39; | [optional] 

### Return type

[**PdfResponseDto**](PdfResponseDto.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json |  -  |
**400** | If any error occurs parsing input |  -  |
**415** | If content-type of request is not set to multipart/form-data or application/json |  -  |
**429** | If you reach the monthly request limit for your subscription plan |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

