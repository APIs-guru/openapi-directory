# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_layout_async**](DefaultApi.md#analyze_layout_async) | **POST** /layout/analyze | Analyze Layout
[**analyze_receipt_async**](DefaultApi.md#analyze_receipt_async) | **POST** /prebuilt/receipt/analyze | Analyze Receipt
[**analyze_with_custom_model**](DefaultApi.md#analyze_with_custom_model) | **POST** /custom/models/{modelId}/analyze | Analyze Form
[**delete_custom_model**](DefaultApi.md#delete_custom_model) | **DELETE** /custom/models/{modelId} | Delete Custom Model
[**get_analyze_form_result**](DefaultApi.md#get_analyze_form_result) | **GET** /custom/models/{modelId}/analyzeResults/{resultId} | Get Analyze Form Result
[**get_analyze_layout_result**](DefaultApi.md#get_analyze_layout_result) | **GET** /layout/analyzeResults/{resultId} | Get Analyze Layout Result
[**get_analyze_receipt_result**](DefaultApi.md#get_analyze_receipt_result) | **GET** /prebuilt/receipt/analyzeResults/{resultId} | Get Analyze Receipt Result
[**get_custom_model**](DefaultApi.md#get_custom_model) | **GET** /custom/models/{modelId} | Get Custom Model
[**get_custom_models**](DefaultApi.md#get_custom_models) | **GET** /custom/models | List Custom Models
[**train_custom_model_async**](DefaultApi.md#train_custom_model_async) | **POST** /custom/models | Train Custom Model


# **analyze_layout_async**
> analyze_layout_async(file_stream=file_stream)

Analyze Layout

Extract text and layout information from a given document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the location (Uri or local path) of the document to be analyzed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    file_stream = None # object | .json, .pdf, .jpg, .png or .tiff type file stream. (optional)

    try:
        # Analyze Layout
        api_instance.analyze_layout_async(file_stream=file_stream)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_layout_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file_stream** | **object**| .json, .pdf, .jpg, .png or .tiff type file stream. | [optional] 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/pdf, application/json, image/jpeg, image/png, image/tiff
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Request is queued successfully. |  * Operation-Location - URL containing the resultId used to track the progress and obtain the result of the analyze operation. <br>  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyze_receipt_async**
> analyze_receipt_async(include_text_details=include_text_details, file_stream=file_stream)

Analyze Receipt

Extract field text and semantic values from a given receipt document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the location (Uri or local path) of the document to be analyzed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    include_text_details = False # bool | Include text lines and element references in the result. (optional) (default to False)
    file_stream = None # object | .json, .pdf, .jpg, .png or .tiff type file stream. (optional)

    try:
        # Analyze Receipt
        api_instance.analyze_receipt_async(include_text_details=include_text_details, file_stream=file_stream)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_receipt_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_text_details** | **bool**| Include text lines and element references in the result. | [optional] [default to False]
 **file_stream** | **object**| .json, .pdf, .jpg, .png or .tiff type file stream. | [optional] 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/pdf, application/json, image/jpeg, image/png, image/tiff
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Request is queued successfully. |  * Operation-Location - URL containing the resultId used to track the progress and obtain the result of the analyze operation. <br>  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyze_with_custom_model**
> analyze_with_custom_model(model_id, include_text_details=include_text_details, file_stream=file_stream)

Analyze Form

Extract key-value pairs, tables, and semantic values from a given document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg', 'image/png' or 'image/tiff'. Alternatively, use 'application/json' type to specify the location (Uri or local path) of the document to be analyzed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    model_id = 'model_id_example' # str | Model identifier.
    include_text_details = False # bool | Include text lines and element references in the result. (optional) (default to False)
    file_stream = None # object | .json, .pdf, .jpg, .png or .tiff type file stream. (optional)

    try:
        # Analyze Form
        api_instance.analyze_with_custom_model(model_id, include_text_details=include_text_details, file_stream=file_stream)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_with_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **str**| Model identifier. | 
 **include_text_details** | **bool**| Include text lines and element references in the result. | [optional] [default to False]
 **file_stream** | **object**| .json, .pdf, .jpg, .png or .tiff type file stream. | [optional] 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/pdf, application/json, image/jpeg, image/png, image/tiff
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Request is queued successfully. |  * Operation-Location - URL containing the resultId used to track the progress and obtain the result of the analyze operation. <br>  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_custom_model**
> delete_custom_model(model_id)

Delete Custom Model

Mark model for deletion. Model artifacts will be permanently removed within a predetermined period.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    model_id = 'model_id_example' # str | Model identifier.

    try:
        # Delete Custom Model
        api_instance.delete_custom_model(model_id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **str**| Model identifier. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successfully marked model for deletion. Model artifacts will be removed within a predefined time period. |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_analyze_form_result**
> AnalyzeOperationResult get_analyze_form_result(model_id, result_id)

Get Analyze Form Result

Obtain current status and the result of the analyze form operation.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_operation_result import AnalyzeOperationResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    model_id = 'model_id_example' # str | Model identifier.
    result_id = 'result_id_example' # str | Analyze operation result identifier.

    try:
        # Get Analyze Form Result
        api_response = api_instance.get_analyze_form_result(model_id, result_id)
        print("The response of DefaultApi->get_analyze_form_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_analyze_form_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **str**| Model identifier. | 
 **result_id** | **str**| Analyze operation result identifier. | 

### Return type

[**AnalyzeOperationResult**](AnalyzeOperationResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_analyze_layout_result**
> AnalyzeOperationResult get_analyze_layout_result(result_id)

Get Analyze Layout Result

Track the progress and obtain the result of the analyze layout operation

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_operation_result import AnalyzeOperationResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    result_id = 'result_id_example' # str | Analyze operation result identifier.

    try:
        # Get Analyze Layout Result
        api_response = api_instance.get_analyze_layout_result(result_id)
        print("The response of DefaultApi->get_analyze_layout_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_analyze_layout_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **result_id** | **str**| Analyze operation result identifier. | 

### Return type

[**AnalyzeOperationResult**](AnalyzeOperationResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_analyze_receipt_result**
> AnalyzeOperationResult get_analyze_receipt_result(result_id)

Get Analyze Receipt Result

Track the progress and obtain the result of the analyze receipt operation.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_operation_result import AnalyzeOperationResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    result_id = 'result_id_example' # str | Analyze operation result identifier.

    try:
        # Get Analyze Receipt Result
        api_response = api_instance.get_analyze_receipt_result(result_id)
        print("The response of DefaultApi->get_analyze_receipt_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_analyze_receipt_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **result_id** | **str**| Analyze operation result identifier. | 

### Return type

[**AnalyzeOperationResult**](AnalyzeOperationResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_custom_model**
> Model get_custom_model(model_id, include_keys=include_keys)

Get Custom Model

Get detailed information about a custom model.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.model import Model
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
    api_instance = openapi_client.DefaultApi(api_client)
    model_id = 'model_id_example' # str | Model identifier.
    include_keys = False # bool | Include list of extracted keys in model information. (optional) (default to False)

    try:
        # Get Custom Model
        api_response = api_instance.get_custom_model(model_id, include_keys=include_keys)
        print("The response of DefaultApi->get_custom_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model_id** | **str**| Model identifier. | 
 **include_keys** | **bool**| Include list of extracted keys in model information. | [optional] [default to False]

### Return type

[**Model**](Model.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_custom_models**
> Models get_custom_models(op=op)

List Custom Models

Get information about all custom models

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.models import Models
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
    api_instance = openapi_client.DefaultApi(api_client)
    op = full # str | Specify whether to return summary or full list of models. (optional) (default to full)

    try:
        # List Custom Models
        api_response = api_instance.get_custom_models(op=op)
        print("The response of DefaultApi->get_custom_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_custom_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **op** | **str**| Specify whether to return summary or full list of models. | [optional] [default to full]

### Return type

[**Models**](Models.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **train_custom_model_async**
> train_custom_model_async(train_request)

Train Custom Model

Create and train a custom model. The request must include a source parameter that is either an externally accessible Azure storage blob container Uri (preferably a Shared Access Signature Uri) or valid path to a data folder in a locally mounted drive. When local paths are specified, they must follow the Linux/Unix path format and be an absolute path rooted to the input mount configuration setting value e.g., if '{Mounts:Input}' configuration setting value is '/input' then a valid source path would be '/input/contosodataset'. All data to be trained is expected to be under the source folder or sub folders under it. Models are trained using documents that are of the following content type - 'application/pdf', 'image/jpeg', 'image/png', 'image/tiff'. Other type of content is ignored.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.train_request import TrainRequest
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
    api_instance = openapi_client.DefaultApi(api_client)
    train_request = openapi_client.TrainRequest() # TrainRequest | Training request parameters.

    try:
        # Train Custom Model
        api_instance.train_custom_model_async(train_request)
    except Exception as e:
        print("Exception when calling DefaultApi->train_custom_model_async: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **train_request** | [**TrainRequest**](TrainRequest.md)| Training request parameters. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Request is queued successfully. |  * Location - Location and ID of the model being trained. The status of model training is specified in the status property at the model location. <br>  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

