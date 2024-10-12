# openapi_client.ModelSettingsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**model_settings_get**](ModelSettingsApi.md#model_settings_get) | **GET** /timeseries/modelSettings | 
[**model_settings_update**](ModelSettingsApi.md#model_settings_update) | **PATCH** /timeseries/modelSettings | 


# **model_settings_get**
> ModelSettingsResponse model_settings_get(api_version, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Returns the model settings which includes model display name, Time Series ID properties and default type ID. Every pay-as-you-go environment has a model that is automatically created.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.model_settings_response import ModelSettingsResponse
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelSettingsApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.model_settings_get(api_version, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of ModelSettingsApi->model_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelSettingsApi->model_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**ModelSettingsResponse**](ModelSettingsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |
**0** | Unexpected error. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **model_settings_update**
> ModelSettingsResponse model_settings_update(api_version, parameters, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)



Updates time series model settings - either the model name or default type ID.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.model_settings_response import ModelSettingsResponse
from openapi_client.models.update_model_settings_request import UpdateModelSettingsRequest
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

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ModelSettingsApi(api_client)
    api_version = '2018-11-01-preview' # str | Version of the API to be used with the client request. Currently supported version is \"2018-11-01-preview\". (default to '2018-11-01-preview')
    parameters = openapi_client.UpdateModelSettingsRequest() # UpdateModelSettingsRequest | Model settings update request body.
    x_ms_client_request_id = 'x_ms_client_request_id_example' # str | Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. (optional)
    x_ms_client_session_id = 'x_ms_client_session_id_example' # str | Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. (optional)

    try:
        api_response = api_instance.model_settings_update(api_version, parameters, x_ms_client_request_id=x_ms_client_request_id, x_ms_client_session_id=x_ms_client_session_id)
        print("The response of ModelSettingsApi->model_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ModelSettingsApi->model_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Currently supported version is \&quot;2018-11-01-preview\&quot;. | [default to &#39;2018-11-01-preview&#39;]
 **parameters** | [**UpdateModelSettingsRequest**](UpdateModelSettingsRequest.md)| Model settings update request body. | 
 **x_ms_client_request_id** | **str**| Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request. | [optional] 
 **x_ms_client_session_id** | **str**| Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests. | [optional] 

### Return type

[**ModelSettingsResponse**](ModelSettingsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation returns new full model settings. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |
**0** | Unexpected error. |  * x-ms-request-id - Server-generated request ID. Can be used to contact support to investigate a request. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

