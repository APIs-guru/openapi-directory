# openapi_client.PDFGenerationApi

All URIs are relative to *https://dynamicdocs.p.rapidapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compile**](PDFGenerationApi.md#compile) | **POST** /templates/{template-token}/compile | Compile New Document PDF


# **compile**
> object compile(template_token, content_type, doc_url_expires_in=doc_url_expires_in, latex_compiler=latex_compiler, latex_runs_=latex_runs_, main_file_name=main_file_name, doc_file_name=doc_file_name, body=body)

Compile New Document PDF

Compile a PDF document from a specific template

### Example

* Api Key Authentication (Adv-Security-Token):
* Api Key Authentication (X-RapidAPI-Key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dynamicdocs.p.rapidapi.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dynamicdocs.p.rapidapi.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Adv-Security-Token
configuration.api_key['Adv-Security-Token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Adv-Security-Token'] = 'Bearer'

# Configure API key authorization: X-RapidAPI-Key
configuration.api_key['X-RapidAPI-Key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-RapidAPI-Key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFGenerationApi(api_client)
    template_token = '7a582350acb835ed' # str | The template-token is available in your template settings after publishing your template.
    content_type = 'application/json' # str | Should be set to \"application/json\" (default to 'application/json')
    doc_url_expires_in = 3600 # int | The doc-url-expires-in is a numerical parameter which takes integers and describes after how many seconds the provided URL is available to download the document. (optional)
    latex_compiler = 'latex_compiler_example' # str | The latex-compiler parameter can take the following values:  pdflatex lualatex (optional)
    latex_runs_ = 56 # int | The latex-runs is a numerical parameter and can take values of 1, 2 and 3.  (optional)
    main_file_name = 'inputFile.tex' # str | The main-file-name is a string parameter which identifies the main file to compile. (optional)
    doc_file_name = 'brilliantDocument' # str | The doc-file-name is a string parameter which determines the name of the file. Note that the extension of the file is not required. (optional)
    body = {"amount":"ZAR 100 000","client":{"address":"xx Long Street","company":"ABC Company Pty Ltd","firstName":"John","lastName":"Smith","location":"Cape Town, South Africa"},"consultant":{"address":"xx Rivonia Road","company":"XYZ Company Pty Ltd","firstName":"Kobus","lastName":"van der Merwe","location":"Sandton, South Africa"},"effectiveDate":"1 February 2021","servicesDescription":"perform analysis on the company's clients and identify existing market segments"} # object | Post the dynamic data for the template to compile the document PDF. (optional)

    try:
        # Compile New Document PDF
        api_response = api_instance.compile(template_token, content_type, doc_url_expires_in=doc_url_expires_in, latex_compiler=latex_compiler, latex_runs_=latex_runs_, main_file_name=main_file_name, doc_file_name=doc_file_name, body=body)
        print("The response of PDFGenerationApi->compile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFGenerationApi->compile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_token** | **str**| The template-token is available in your template settings after publishing your template. | 
 **content_type** | **str**| Should be set to \&quot;application/json\&quot; | [default to &#39;application/json&#39;]
 **doc_url_expires_in** | **int**| The doc-url-expires-in is a numerical parameter which takes integers and describes after how many seconds the provided URL is available to download the document. | [optional] 
 **latex_compiler** | **str**| The latex-compiler parameter can take the following values:  pdflatex lualatex | [optional] 
 **latex_runs_** | **int**| The latex-runs is a numerical parameter and can take values of 1, 2 and 3.  | [optional] 
 **main_file_name** | **str**| The main-file-name is a string parameter which identifies the main file to compile. | [optional] 
 **doc_file_name** | **str**| The doc-file-name is a string parameter which determines the name of the file. Note that the extension of the file is not required. | [optional] 
 **body** | **object**| Post the dynamic data for the template to compile the document PDF. | [optional] 

### Return type

**object**

### Authorization

[Adv-Security-Token](../README.md#Adv-Security-Token), [X-RapidAPI-Key](../README.md#X-RapidAPI-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Document Status URL Created |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

