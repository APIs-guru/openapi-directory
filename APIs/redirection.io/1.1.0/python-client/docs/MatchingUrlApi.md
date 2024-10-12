# openapi_client.MatchingUrlApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_matching_url_item**](MatchingUrlApi.md#get_matching_url_item) | **GET** /matching-urls/{id} | Retrieves a MatchingUrl resource.
[**post_matching_url_collection**](MatchingUrlApi.md#post_matching_url_collection) | **POST** /matching-urls | Creates a MatchingUrl resource.


# **get_matching_url_item**
> MatchingUrlRead get_matching_url_item(id)

Retrieves a MatchingUrl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.matching_url_read import MatchingUrlRead
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
    api_instance = openapi_client.MatchingUrlApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a MatchingUrl resource.
        api_response = api_instance.get_matching_url_item(id)
        print("The response of MatchingUrlApi->get_matching_url_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatchingUrlApi->get_matching_url_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**MatchingUrlRead**](MatchingUrlRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | MatchingUrl resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_matching_url_collection**
> MatchingUrlRead post_matching_url_collection(matching_url=matching_url)

Creates a MatchingUrl resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.matching_url_read import MatchingUrlRead
from openapi_client.models.matching_url_write import MatchingUrlWrite
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
    api_instance = openapi_client.MatchingUrlApi(api_client)
    matching_url = openapi_client.MatchingUrlWrite() # MatchingUrlWrite | The new MatchingUrl resource (optional)

    try:
        # Creates a MatchingUrl resource.
        api_response = api_instance.post_matching_url_collection(matching_url=matching_url)
        print("The response of MatchingUrlApi->post_matching_url_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MatchingUrlApi->post_matching_url_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matching_url** | [**MatchingUrlWrite**](MatchingUrlWrite.md)| The new MatchingUrl resource | [optional] 

### Return type

[**MatchingUrlRead**](MatchingUrlRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | MatchingUrl resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

