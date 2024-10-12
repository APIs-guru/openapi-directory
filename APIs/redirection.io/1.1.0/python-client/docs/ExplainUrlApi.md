# openapi_client.ExplainUrlApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_explain_url_item**](ExplainUrlApi.md#get_explain_url_item) | **GET** /explain-urls/{id} | Retrieves a ExplainUrl resource.
[**post_explain_url_collection**](ExplainUrlApi.md#post_explain_url_collection) | **POST** /explain-urls | Creates a ExplainUrl resource.


# **get_explain_url_item**
> ExplainUrl get_explain_url_item(id)

Retrieves a ExplainUrl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.explain_url import ExplainUrl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExplainUrlApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a ExplainUrl resource.
        api_response = api_instance.get_explain_url_item(id)
        print("The response of ExplainUrlApi->get_explain_url_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExplainUrlApi->get_explain_url_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ExplainUrl**](ExplainUrl.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ExplainUrl resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_explain_url_collection**
> ExplainUrl post_explain_url_collection(explain_url=explain_url)

Creates a ExplainUrl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.explain_url import ExplainUrl
from openapi_client.models.explain_url_write import ExplainUrlWrite
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExplainUrlApi(api_client)
    explain_url = openapi_client.ExplainUrlWrite() # ExplainUrlWrite | The new ExplainUrl resource (optional)

    try:
        # Creates a ExplainUrl resource.
        api_response = api_instance.post_explain_url_collection(explain_url=explain_url)
        print("The response of ExplainUrlApi->post_explain_url_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExplainUrlApi->post_explain_url_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **explain_url** | [**ExplainUrlWrite**](ExplainUrlWrite.md)| The new ExplainUrl resource | [optional] 

### Return type

[**ExplainUrl**](ExplainUrl.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | ExplainUrl resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

