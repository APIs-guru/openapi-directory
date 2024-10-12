# openapi_client.HyperparameterManagementApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hyperparameter_get**](HyperparameterManagementApi.md#hyperparameter_get) | **GET** /hyperparameter | Get hyperparameters
[**hyperparameter_post**](HyperparameterManagementApi.md#hyperparameter_post) | **POST** /hyperparameter | Set hyperparameters


# **hyperparameter_get**
> HyperparameterModel hyperparameter_get(token=token)

Get hyperparameters

Get entity global hyperparameters.

### Example


```python
import openapi_client
from openapi_client.models.hyperparameter_model import HyperparameterModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HyperparameterManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Get hyperparameters
        api_response = api_instance.hyperparameter_get(token=token)
        print("The response of HyperparameterManagementApi->hyperparameter_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HyperparameterManagementApi->hyperparameter_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 

### Return type

[**HyperparameterModel**](HyperparameterModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hyperparameter_post**
> hyperparameter_post(token=token, hyperparameter_model=hyperparameter_model)

Set hyperparameters

Set entity global hyperparameters. Hyperparameters can be overwritten by user and planning level (add to JSON body).

### Example


```python
import openapi_client
from openapi_client.models.hyperparameter_model import HyperparameterModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HyperparameterManagementApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    hyperparameter_model = openapi_client.HyperparameterModel() # HyperparameterModel |  (optional)

    try:
        # Set hyperparameters
        api_instance.hyperparameter_post(token=token, hyperparameter_model=hyperparameter_model)
    except Exception as e:
        print("Exception when calling HyperparameterManagementApi->hyperparameter_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **hyperparameter_model** | [**HyperparameterModel**](HyperparameterModel.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

