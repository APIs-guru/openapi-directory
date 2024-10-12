# openapi_client.DocumentsApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merge_template**](DocumentsApi.md#merge_template) | **POST** /templates/templateId/output | Generate document
[**merge_templates**](DocumentsApi.md#merge_templates) | **POST** /templates/output | Generate document (multiple templates)


# **merge_template**
> MergeTemplates200Response merge_template(template_id, data, name=name, format=format, output=output)

Generate document

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.data import Data
from openapi_client.models.merge_templates200_response import MergeTemplates200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    template_id = 19375 # int | Template unique identifier
    data = openapi_client.Data() # Data | Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
    name = 'My document' # str | Document name, returned in the meta data. (optional)
    format = pdf # str | Document format. The zip option will return a ZIP file with PDF files. (optional) (default to pdf)
    output = base64 # str | Response format. With the url option, the document is stored for 30 days and automatically deleted. (optional) (default to base64)

    try:
        # Generate document
        api_response = api_instance.merge_template(template_id, data, name=name, format=format, output=output)
        print("The response of DocumentsApi->merge_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->merge_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**| Template unique identifier | 
 **data** | [**Data**](Data.md)| Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file. | 
 **name** | **str**| Document name, returned in the meta data. | [optional] 
 **format** | **str**| Document format. The zip option will return a ZIP file with PDF files. | [optional] [default to pdf]
 **output** | **str**| Response format. With the url option, the document is stored for 30 days and automatically deleted. | [optional] [default to base64]

### Return type

[**MergeTemplates200Response**](MergeTemplates200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Document data |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **merge_templates**
> MergeTemplates200Response merge_templates(batch_data_inner, name=name, format=format, output=output)

Generate document (multiple templates)

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.batch_data_inner import BatchDataInner
from openapi_client.models.merge_templates200_response import MergeTemplates200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DocumentsApi(api_client)
    batch_data_inner = [openapi_client.BatchDataInner()] # List[BatchDataInner] | Data used to specify templates and data objects which are used to merge the template
    name = 'My document' # str | Document name, returned in the meta data. (optional)
    format = pdf # str | Document format. The zip option will return a ZIP file with PDF files. (optional) (default to pdf)
    output = base64 # str | Response format. With the url option, the document is stored for 30 days and automatically deleted. (optional) (default to base64)

    try:
        # Generate document (multiple templates)
        api_response = api_instance.merge_templates(batch_data_inner, name=name, format=format, output=output)
        print("The response of DocumentsApi->merge_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DocumentsApi->merge_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_data_inner** | [**List[BatchDataInner]**](BatchDataInner.md)| Data used to specify templates and data objects which are used to merge the template | 
 **name** | **str**| Document name, returned in the meta data. | [optional] 
 **format** | **str**| Document format. The zip option will return a ZIP file with PDF files. | [optional] [default to pdf]
 **output** | **str**| Response format. With the url option, the document is stored for 30 days and automatically deleted. | [optional] [default to base64]

### Return type

[**MergeTemplates200Response**](MergeTemplates200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Document data |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

