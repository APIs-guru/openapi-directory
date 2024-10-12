# openapi_client.AlterationsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alterations_get**](AlterationsApi.md#alterations_get) | **GET** /alterations | Download alterations from runtime.
[**alterations_replace**](AlterationsApi.md#alterations_replace) | **PUT** /alterations | Replace alterations data.


# **alterations_get**
> WordAlterationsDTO alterations_get()

Download alterations from runtime.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.word_alterations_dto import WordAlterationsDTO
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
    api_instance = openapi_client.AlterationsApi(api_client)

    try:
        # Download alterations from runtime.
        api_response = api_instance.alterations_get()
        print("The response of AlterationsApi->alterations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlterationsApi->alterations_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**WordAlterationsDTO**](WordAlterationsDTO.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Alterations data. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alterations_replace**
> alterations_replace(word_alterations)

Replace alterations data.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.word_alterations_dto import WordAlterationsDTO
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
    api_instance = openapi_client.AlterationsApi(api_client)
    word_alterations = openapi_client.WordAlterationsDTO() # WordAlterationsDTO | New alterations data.

    try:
        # Replace alterations data.
        api_instance.alterations_replace(word_alterations)
    except Exception as e:
        print("Exception when calling AlterationsApi->alterations_replace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **word_alterations** | [**WordAlterationsDTO**](WordAlterationsDTO.md)| New alterations data. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | HTTP 204 No Content. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

