# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyze_with_custom_model**](DefaultApi.md#analyze_with_custom_model) | **POST** /custom/models/{id}/analyze | Analyze Form
[**delete_custom_model**](DefaultApi.md#delete_custom_model) | **DELETE** /custom/models/{id} | Delete Model
[**get_custom_model**](DefaultApi.md#get_custom_model) | **GET** /custom/models/{id} | Get Model
[**get_custom_models**](DefaultApi.md#get_custom_models) | **GET** /custom/models | Get Models
[**get_extracted_keys**](DefaultApi.md#get_extracted_keys) | **GET** /custom/models/{id}/keys | Get Keys
[**train_custom_model**](DefaultApi.md#train_custom_model) | **POST** /custom/train | Train Model


# **analyze_with_custom_model**
> AnalyzeResult analyze_with_custom_model(id, analyze_with_custom_model_request, keys=keys)

Analyze Form

Extract key-value pairs from a given document. The input document must be of one of the supported content types - 'application/pdf', 'image/jpeg' or 'image/png'. A success response is returned in JSON.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.analyze_result import AnalyzeResult
from openapi_client.models.analyze_with_custom_model_request import AnalyzeWithCustomModelRequest
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
    id = 'id_example' # str | Model Identifier to analyze the document with.
    analyze_with_custom_model_request = openapi_client.AnalyzeWithCustomModelRequest() # AnalyzeWithCustomModelRequest | 
    keys = ['keys_example'] # List[str] | An optional list of known keys to extract the values for. (optional)

    try:
        # Analyze Form
        api_response = api_instance.analyze_with_custom_model(id, analyze_with_custom_model_request, keys=keys)
        print("The response of DefaultApi->analyze_with_custom_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->analyze_with_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Model Identifier to analyze the document with. | 
 **analyze_with_custom_model_request** | [**AnalyzeWithCustomModelRequest**](AnalyzeWithCustomModelRequest.md)|  | 
 **keys** | [**List[str]**](str.md)| An optional list of known keys to extract the values for. | [optional] 

### Return type

[**AnalyzeResult**](AnalyzeResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/pdf, image/jpeg, image/png, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_custom_model**
> delete_custom_model(id)

Delete Model

Delete model artifacts.

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
    id = 'id_example' # str | The identifier of the model to delete.

    try:
        # Delete Model
        api_instance.delete_custom_model(id)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The identifier of the model to delete. | 

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
**204** | Successfully removed model artifacts. |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_custom_model**
> ModelResult get_custom_model(id)

Get Model

Get information about a model.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.model_result import ModelResult
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
    id = 'id_example' # str | Model identifier.

    try:
        # Get Model
        api_response = api_instance.get_custom_model(id)
        print("The response of DefaultApi->get_custom_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Model identifier. | 

### Return type

[**ModelResult**](ModelResult.md)

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
> ModelsResult get_custom_models()

Get Models

Get information about all trained custom models

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.models_result import ModelsResult
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

    try:
        # Get Models
        api_response = api_instance.get_custom_models()
        print("The response of DefaultApi->get_custom_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_custom_models: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ModelsResult**](ModelsResult.md)

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

# **get_extracted_keys**
> KeysResult get_extracted_keys(id)

Get Keys

Retrieve the keys that were   extracted during the training of the specified model.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.keys_result import KeysResult
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
    id = 'id_example' # str | Model identifier.

    try:
        # Get Keys
        api_response = api_instance.get_extracted_keys(id)
        print("The response of DefaultApi->get_extracted_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_extracted_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Model identifier. | 

### Return type

[**KeysResult**](KeysResult.md)

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

# **train_custom_model**
> TrainResult train_custom_model(train_request)

Train Model

Create and train a custom model. The train request must include a source parameter that is either an externally accessible Azure Storage blob container Uri (preferably a Shared Access Signature Uri) or valid path to a data folder in a locally mounted drive. When local paths are specified, they must follow the Linux/Unix path format and be an absolute path rooted to the input mount configuration   setting value e.g., if '{Mounts:Input}' configuration setting value is '/input' then a valid source path would be '/input/contosodataset'. All data to be trained is expected to be directly under the source folder. Subfolders are not supported. Models are trained using documents that are of the following content type - 'application/pdf', 'image/jpeg' and 'image/png'.\"   Other type of content is ignored.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.train_request import TrainRequest
from openapi_client.models.train_result import TrainResult
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
    train_request = openapi_client.TrainRequest() # TrainRequest | Request object for training.

    try:
        # Train Model
        api_response = api_instance.train_custom_model(train_request)
        print("The response of DefaultApi->train_custom_model:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->train_custom_model: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **train_request** | [**TrainRequest**](TrainRequest.md)| Request object for training. | 

### Return type

[**TrainResult**](TrainResult.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Response entity accompanying non-successful responses containing additional details about the error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

