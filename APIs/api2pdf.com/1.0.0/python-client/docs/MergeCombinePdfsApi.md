# openapi_client.MergeCombinePdfsApi

All URIs are relative to *https://v2018.api2pdf.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merge_post**](MergeCombinePdfsApi.md#merge_post) | **POST** /merge | Merge multiple PDFs together


# **merge_post**
> ApiResponseSuccess merge_post(merge_request=merge_request)

Merge multiple PDFs together

Merge two or more PDFs together on AWS Lambda. ### Authorize via Header of Request **Authorization: YOUR-API-KEY**

### Example

* Api Key Authentication (HeaderApiKey):

```python
import openapi_client
from openapi_client.models.api_response_success import ApiResponseSuccess
from openapi_client.models.merge_request import MergeRequest
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
    api_instance = openapi_client.MergeCombinePdfsApi(api_client)
    merge_request = openapi_client.MergeRequest() # MergeRequest | A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below: - `urls` *(array of urls, required)* - A JSON array of direct URLs to PDFs. Api2Pdf will consume the PDF files in the list and then merge them all together.. - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false. - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.  (optional)

    try:
        # Merge multiple PDFs together
        api_response = api_instance.merge_post(merge_request=merge_request)
        print("The response of MergeCombinePdfsApi->merge_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MergeCombinePdfsApi->merge_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merge_request** | [**MergeRequest**](MergeRequest.md)| A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below: - &#x60;urls&#x60; *(array of urls, required)* - A JSON array of direct URLs to PDFs. Api2Pdf will consume the PDF files in the list and then merge them all together.. - &#x60;inlinePdf&#x60; *(boolean, optional)* - Open the PDF in a browser window. Default to false. - &#x60;fileName&#x60; *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.  | [optional] 

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

