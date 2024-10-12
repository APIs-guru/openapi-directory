# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prediction_get_slot_prediction**](DefaultApi.md#prediction_get_slot_prediction) | **POST** /apps/{appId}/slots/{slotName}/predict | 
[**prediction_get_slot_prediction_get**](DefaultApi.md#prediction_get_slot_prediction_get) | **GET** /apps/{appId}/slots/{slotName}/predict | 
[**prediction_get_version_prediction**](DefaultApi.md#prediction_get_version_prediction) | **POST** /apps/{appId}/versions/{versionId}/predict | 
[**prediction_get_version_prediction_get**](DefaultApi.md#prediction_get_version_prediction_get) | **GET** /apps/{appId}/versions/{versionId}/predict | 


# **prediction_get_slot_prediction**
> PredictionResponse prediction_get_slot_prediction(app_id, slot_name, prediction_request, verbose=verbose, show_all_intents=show_all_intents, log=log)



Gets the predictions for an application slot.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prediction_request import PredictionRequest
from openapi_client.models.prediction_response import PredictionResponse
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    slot_name = 'slot_name_example' # str | The application slot name.
    prediction_request = openapi_client.PredictionRequest() # PredictionRequest | The prediction request parameters.
    verbose = True # bool | Indicates whether to get extra metadata for the entities predictions or not. (optional)
    show_all_intents = True # bool | Indicates whether to return all the intents in the response or just the top intent. (optional)
    log = True # bool | Indicates whether to log the endpoint query or not. (optional)

    try:
        api_response = api_instance.prediction_get_slot_prediction(app_id, slot_name, prediction_request, verbose=verbose, show_all_intents=show_all_intents, log=log)
        print("The response of DefaultApi->prediction_get_slot_prediction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->prediction_get_slot_prediction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **slot_name** | **str**| The application slot name. | 
 **prediction_request** | [**PredictionRequest**](PredictionRequest.md)| The prediction request parameters. | 
 **verbose** | **bool**| Indicates whether to get extra metadata for the entities predictions or not. | [optional] 
 **show_all_intents** | **bool**| Indicates whether to return all the intents in the response or just the top intent. | [optional] 
 **log** | **bool**| Indicates whether to log the endpoint query or not. | [optional] 

### Return type

[**PredictionResponse**](PredictionResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The prediction for the supplied query. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prediction_get_slot_prediction_get**
> PredictionResponse prediction_get_slot_prediction_get(app_id, slot_name, query, verbose=verbose, show_all_intents=show_all_intents, log=log)



Gets the predictions for an application slot.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prediction_response import PredictionResponse
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    slot_name = 'slot_name_example' # str | The application slot name.
    query = 'query_example' # str | The query to predict.
    verbose = True # bool | Indicates whether to get extra metadata for the entities predictions or not. (optional)
    show_all_intents = True # bool | Indicates whether to return all the intents in the response or just the top intent. (optional)
    log = True # bool | Indicates whether to log the endpoint query or not. (optional)

    try:
        api_response = api_instance.prediction_get_slot_prediction_get(app_id, slot_name, query, verbose=verbose, show_all_intents=show_all_intents, log=log)
        print("The response of DefaultApi->prediction_get_slot_prediction_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->prediction_get_slot_prediction_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **slot_name** | **str**| The application slot name. | 
 **query** | **str**| The query to predict. | 
 **verbose** | **bool**| Indicates whether to get extra metadata for the entities predictions or not. | [optional] 
 **show_all_intents** | **bool**| Indicates whether to return all the intents in the response or just the top intent. | [optional] 
 **log** | **bool**| Indicates whether to log the endpoint query or not. | [optional] 

### Return type

[**PredictionResponse**](PredictionResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The prediction for the supplied query. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prediction_get_version_prediction**
> PredictionResponse prediction_get_version_prediction(app_id, version_id, prediction_request, verbose=verbose, show_all_intents=show_all_intents, log=log)



Gets the predictions for an application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prediction_request import PredictionRequest
from openapi_client.models.prediction_response import PredictionResponse
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The application version ID.
    prediction_request = openapi_client.PredictionRequest() # PredictionRequest | The prediction request parameters.
    verbose = True # bool | Indicates whether to get extra metadata for the entities predictions or not. (optional)
    show_all_intents = True # bool | Indicates whether to return all the intents in the response or just the top intent. (optional)
    log = True # bool | Indicates whether to log the endpoint query or not. (optional)

    try:
        api_response = api_instance.prediction_get_version_prediction(app_id, version_id, prediction_request, verbose=verbose, show_all_intents=show_all_intents, log=log)
        print("The response of DefaultApi->prediction_get_version_prediction:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->prediction_get_version_prediction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The application version ID. | 
 **prediction_request** | [**PredictionRequest**](PredictionRequest.md)| The prediction request parameters. | 
 **verbose** | **bool**| Indicates whether to get extra metadata for the entities predictions or not. | [optional] 
 **show_all_intents** | **bool**| Indicates whether to return all the intents in the response or just the top intent. | [optional] 
 **log** | **bool**| Indicates whether to log the endpoint query or not. | [optional] 

### Return type

[**PredictionResponse**](PredictionResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The prediction for the supplied query. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prediction_get_version_prediction_get**
> PredictionResponse prediction_get_version_prediction_get(app_id, version_id, query, verbose=verbose, show_all_intents=show_all_intents, log=log)



Gets the predictions for an application version.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.prediction_response import PredictionResponse
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The application ID.
    version_id = 'version_id_example' # str | The application version ID.
    query = 'query_example' # str | The query to predict.
    verbose = True # bool | Indicates whether to get extra metadata for the entities predictions or not. (optional)
    show_all_intents = True # bool | Indicates whether to return all the intents in the response or just the top intent. (optional)
    log = True # bool | Indicates whether to log the endpoint query or not. (optional)

    try:
        api_response = api_instance.prediction_get_version_prediction_get(app_id, version_id, query, verbose=verbose, show_all_intents=show_all_intents, log=log)
        print("The response of DefaultApi->prediction_get_version_prediction_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->prediction_get_version_prediction_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The application ID. | 
 **version_id** | **str**| The application version ID. | 
 **query** | **str**| The query to predict. | 
 **verbose** | **bool**| Indicates whether to get extra metadata for the entities predictions or not. | [optional] 
 **show_all_intents** | **bool**| Indicates whether to return all the intents in the response or just the top intent. | [optional] 
 **log** | **bool**| Indicates whether to log the endpoint query or not. | [optional] 

### Return type

[**PredictionResponse**](PredictionResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The prediction for the supplied query. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

