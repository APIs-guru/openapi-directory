# openapi_client.WkhtmltopdfApi

All URIs are relative to *https://v2018.api2pdf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wkhtmltopdf_from_html_post**](WkhtmltopdfApi.md#wkhtmltopdf_from_html_post) | **POST** /wkhtmltopdf/html | Convert raw HTML to PDF
[**wkhtmltopdf_from_url_get**](WkhtmltopdfApi.md#wkhtmltopdf_from_url_get) | **GET** /wkhtmltopdf/url | Convert URL to PDF
[**wkhtmltopdf_from_url_post**](WkhtmltopdfApi.md#wkhtmltopdf_from_url_post) | **POST** /wkhtmltopdf/url | Convert URL to PDF


# **wkhtmltopdf_from_html_post**
> ApiResponseSuccess wkhtmltopdf_from_html_post(wk_html_to_pdf_html_to_pdf_request=wk_html_to_pdf_html_to_pdf_request)

Convert raw HTML to PDF

Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda. ### Authorize via Header of Request **Authorization: YOUR-API-KEY**

### Example

* Api Key Authentication (HeaderApiKey):

```python
import openapi_client
from openapi_client.models.api_response_success import ApiResponseSuccess
from openapi_client.models.wk_html_to_pdf_html_to_pdf_request import WkHtmlToPdfHtmlToPdfRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2018.api2pdf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2018.api2pdf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: HeaderApiKey
configuration.api_key['HeaderApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['HeaderApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WkhtmltopdfApi(api_client)
    wk_html_to_pdf_html_to_pdf_request = openapi_client.WkHtmlToPdfHtmlToPdfRequest() # WkHtmlToPdfHtmlToPdfRequest | A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below: - `html` *(string, required)* - raw HTML to convert to PDF - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false. - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. - `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/). (optional)

    try:
        # Convert raw HTML to PDF
        api_response = api_instance.wkhtmltopdf_from_html_post(wk_html_to_pdf_html_to_pdf_request=wk_html_to_pdf_html_to_pdf_request)
        print("The response of WkhtmltopdfApi->wkhtmltopdf_from_html_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WkhtmltopdfApi->wkhtmltopdf_from_html_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wk_html_to_pdf_html_to_pdf_request** | [**WkHtmlToPdfHtmlToPdfRequest**](WkHtmlToPdfHtmlToPdfRequest.md)| A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below: - &#x60;html&#x60; *(string, required)* - raw HTML to convert to PDF - &#x60;inlinePdf&#x60; *(boolean, optional)* - Open the PDF in a browser window. Default to false. - &#x60;fileName&#x60; *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. - &#x60;options&#x60; *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/). | [optional] 

### Return type

[**ApiResponseSuccess**](ApiResponseSuccess.md)

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object containing the url to the PDF and other meta data |  -  |
**401** | Failed to generate PDF |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wkhtmltopdf_from_url_get**
> ApiResponseSuccess wkhtmltopdf_from_url_get(url, output=output)

Convert URL to PDF

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility. ### Authorize via Query String Parameter **apikey=YOUR-API-KEY** ### Example ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

### Example

* Api Key Authentication (QueryApiKey):

```python
import openapi_client
from openapi_client.models.api_response_success import ApiResponseSuccess
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2018.api2pdf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2018.api2pdf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: QueryApiKey
configuration.api_key['QueryApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['QueryApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WkhtmltopdfApi(api_client)
    url = 'url_example' # str | Url of the page to convert to PDF. Must start with http:// or https://.
    output = 'output_example' # str | Specify output=json to receive a JSON output. Defaults to PDF file. (optional)

    try:
        # Convert URL to PDF
        api_response = api_instance.wkhtmltopdf_from_url_get(url, output=output)
        print("The response of WkhtmltopdfApi->wkhtmltopdf_from_url_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WkhtmltopdfApi->wkhtmltopdf_from_url_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| Url of the page to convert to PDF. Must start with http:// or https://. | 
 **output** | **str**| Specify output&#x3D;json to receive a JSON output. Defaults to PDF file. | [optional] 

### Return type

[**ApiResponseSuccess**](ApiResponseSuccess.md)

### Authorization

[QueryApiKey](../README.md#QueryApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A PDF file or a JSON object depending on the &#x60;output&#x60; query parameter |  -  |
**401** | Failed to generate PDF |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **wkhtmltopdf_from_url_post**
> ApiResponseSuccess wkhtmltopdf_from_url_post(wk_html_to_pdf_url_to_pdf_request=wk_html_to_pdf_url_to_pdf_request)

Convert URL to PDF

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda.. ### Authorize via Header of Request **Authorization: YOUR-API-KEY**

### Example

* Api Key Authentication (HeaderApiKey):

```python
import openapi_client
from openapi_client.models.api_response_success import ApiResponseSuccess
from openapi_client.models.wk_html_to_pdf_url_to_pdf_request import WkHtmlToPdfUrlToPdfRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://v2018.api2pdf.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://v2018.api2pdf.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: HeaderApiKey
configuration.api_key['HeaderApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['HeaderApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WkhtmltopdfApi(api_client)
    wk_html_to_pdf_url_to_pdf_request = openapi_client.WkHtmlToPdfUrlToPdfRequest() # WkHtmlToPdfUrlToPdfRequest | A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below: - `url` *(string, required)* - Url to the web page to convert to PDF - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false. - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. - `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/). (optional)

    try:
        # Convert URL to PDF
        api_response = api_instance.wkhtmltopdf_from_url_post(wk_html_to_pdf_url_to_pdf_request=wk_html_to_pdf_url_to_pdf_request)
        print("The response of WkhtmltopdfApi->wkhtmltopdf_from_url_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WkhtmltopdfApi->wkhtmltopdf_from_url_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wk_html_to_pdf_url_to_pdf_request** | [**WkHtmlToPdfUrlToPdfRequest**](WkHtmlToPdfUrlToPdfRequest.md)| A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below: - &#x60;url&#x60; *(string, required)* - Url to the web page to convert to PDF - &#x60;inlinePdf&#x60; *(boolean, optional)* - Open the PDF in a browser window. Default to false. - &#x60;fileName&#x60; *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. - &#x60;options&#x60; *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/). | [optional] 

### Return type

[**ApiResponseSuccess**](ApiResponseSuccess.md)

### Authorization

[HeaderApiKey](../README.md#HeaderApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object containing the url to the PDF and other meta data |  -  |
**401** | Failed to generate PDF |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

