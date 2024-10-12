# openapi_client.QuoteOfTheDayApi

All URIs are relative to *https://quotes.rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**qod_categories_get**](QuoteOfTheDayApi.md#qod_categories_get) | **GET** /qod/categories | 
[**qod_get**](QuoteOfTheDayApi.md#qod_get) | **GET** /qod | 
[**qod_languages_get**](QuoteOfTheDayApi.md#qod_languages_get) | **GET** /qod/languages | 


# **qod_categories_get**
> qod_categories_get(language=language, detailed=detailed)



Gets a list of `Quote of the Day` Categories. 

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteOfTheDayApi(api_client)
    language = 'en' # str | Language of the QOD category. The language must be supported in our QOD system. (optional) (default to 'en')
    detailed = False # bool | Return detailed information of the categories. Note the data format changes between the two values of this switch. (optional) (default to False)

    try:
        api_instance.qod_categories_get(language=language, detailed=detailed)
    except Exception as e:
        print("Exception when calling QuoteOfTheDayApi->qod_categories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| Language of the QOD category. The language must be supported in our QOD system. | [optional] [default to &#39;en&#39;]
 **detailed** | **bool**| Return detailed information of the categories. Note the data format changes between the two values of this switch. | [optional] [default to False]

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**400** | 400  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **qod_get**
> QODResponse qod_get(category=category, language=language, id=id)



Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day 

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.models.qod_response import QODResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteOfTheDayApi(api_client)
    category = 'category_example' # str | QOD Category (Used in public QOD only) (optional)
    language = 'en' # str | Language of the QOD. The language must be supported in our QOD system. (optional) (default to 'en')
    id = 'id_example' # str | QOD defition id (Used in private QOD only) (optional)

    try:
        api_response = api_instance.qod_get(category=category, language=language, id=id)
        print("The response of QuoteOfTheDayApi->qod_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QuoteOfTheDayApi->qod_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**| QOD Category (Used in public QOD only) | [optional] 
 **language** | **str**| Language of the QOD. The language must be supported in our QOD system. | [optional] [default to &#39;en&#39;]
 **id** | **str**| QOD defition id (Used in private QOD only) | [optional] 

### Return type

[**QODResponse**](QODResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |
**400** | 400  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **qod_languages_get**
> qod_languages_get()



Gets a list of supported languages for `Quote of the Day`.  

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://quotes.rest
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://quotes.rest"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (bearer token): BearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.QuoteOfTheDayApi(api_client)

    try:
        api_instance.qod_languages_get()
    except Exception as e:
        print("Exception when calling QuoteOfTheDayApi->qod_languages_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200  response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

