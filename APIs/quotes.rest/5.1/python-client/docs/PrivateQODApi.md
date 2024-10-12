# openapi_client.PrivateQODApi

All URIs are relative to *https://quotes.rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**qod_get_0**](PrivateQODApi.md#qod_get_0) | **GET** /qod | 
[**qod_patch**](PrivateQODApi.md#qod_patch) | **PATCH** /qod | 
[**qod_put**](PrivateQODApi.md#qod_put) | **PUT** /qod | 


# **qod_get_0**
> QODResponse qod_get_0(category=category, language=language, id=id)



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
    api_instance = openapi_client.PrivateQODApi(api_client)
    category = 'category_example' # str | QOD Category (Used in public QOD only) (optional)
    language = 'en' # str | Language of the QOD. The language must be supported in our QOD system. (optional) (default to 'en')
    id = 'id_example' # str | QOD defition id (Used in private QOD only) (optional)

    try:
        api_response = api_instance.qod_get_0(category=category, language=language, id=id)
        print("The response of PrivateQODApi->qod_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateQODApi->qod_get_0: %s\n" % e)
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

# **qod_patch**
> QuoteResponse qod_patch(title, repeat_after=repeat_after, authors=authors, private=private, language=language, sfw=sfw)



Update an existing private `Quote of the Day` definition. 

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.models.quote_response import QuoteResponse
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
    api_instance = openapi_client.PrivateQODApi(api_client)
    title = 'title_example' # str | Title of the Quote of the day category
    repeat_after = 30 # int | How many days after the quotes can repeat? If you are setting this up from your private collection make sure you have more quotes that meet the filter conditions than the days you specify here. (optional) (default to 30)
    authors = None # List | Comma seperated author names. Quotes will be chosen from one of these authors. (optional)
    private = False # bool | Should apply the filters to the private collection. Default is public quotes in the platform. (optional) (default to False)
    language = 'en' # str | Quotes language. (optional) (default to 'en')
    sfw = False # bool | Consider only quotes marked as \"sfw\" (Safe for work). (optional) (default to False)

    try:
        api_response = api_instance.qod_patch(title, repeat_after=repeat_after, authors=authors, private=private, language=language, sfw=sfw)
        print("The response of PrivateQODApi->qod_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateQODApi->qod_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| Title of the Quote of the day category | 
 **repeat_after** | **int**| How many days after the quotes can repeat? If you are setting this up from your private collection make sure you have more quotes that meet the filter conditions than the days you specify here. | [optional] [default to 30]
 **authors** | **List**| Comma seperated author names. Quotes will be chosen from one of these authors. | [optional] 
 **private** | **bool**| Should apply the filters to the private collection. Default is public quotes in the platform. | [optional] [default to False]
 **language** | **str**| Quotes language. | [optional] [default to &#39;en&#39;]
 **sfw** | **bool**| Consider only quotes marked as \&quot;sfw\&quot; (Safe for work). | [optional] [default to False]

### Return type

[**QuoteResponse**](QuoteResponse.md)

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
**403** | 403  No access response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **qod_put**
> SuccessResponse qod_put(title, repeat_after=repeat_after, authors=authors, private=private, language=language, sfw=sfw)



Create a private `Quote of the Day` service.  

### Example

* Bearer (bearer token) Authentication (BearerAuth):

```python
import openapi_client
from openapi_client.models.success_response import SuccessResponse
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
    api_instance = openapi_client.PrivateQODApi(api_client)
    title = 'title_example' # str | Title of the Quote of the day category
    repeat_after = 30 # int | How many days after the quotes can repeat? If you are setting this up from your private collection make sure you have more quotes that meet the filter conditions than the days you specify here. (optional) (default to 30)
    authors = None # List | Comma seperated author names. Quotes will be chosen from one of these authors. (optional)
    private = False # bool | Should apply the filters to the private collection. Default is public quotes in the platform. (optional) (default to False)
    language = 'en' # str | Quotes language. (optional) (default to 'en')
    sfw = False # bool | Consider only quotes marked as \"sfw\" (Safe for work). (optional) (default to False)

    try:
        api_response = api_instance.qod_put(title, repeat_after=repeat_after, authors=authors, private=private, language=language, sfw=sfw)
        print("The response of PrivateQODApi->qod_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrivateQODApi->qod_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **str**| Title of the Quote of the day category | 
 **repeat_after** | **int**| How many days after the quotes can repeat? If you are setting this up from your private collection make sure you have more quotes that meet the filter conditions than the days you specify here. | [optional] [default to 30]
 **authors** | **List**| Comma seperated author names. Quotes will be chosen from one of these authors. | [optional] 
 **private** | **bool**| Should apply the filters to the private collection. Default is public quotes in the platform. | [optional] [default to False]
 **language** | **str**| Quotes language. | [optional] [default to &#39;en&#39;]
 **sfw** | **bool**| Consider only quotes marked as \&quot;sfw\&quot; (Safe for work). | [optional] [default to False]

### Return type

[**SuccessResponse**](SuccessResponse.md)

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
**403** | 403  No access response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

