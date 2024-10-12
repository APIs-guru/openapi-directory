# openapi_client.GenerateApi

All URIs are relative to *https://api.mineskin.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_upload_post**](GenerateApi.md#generate_upload_post) | **POST** /generate/upload | 
[**generate_url_post**](GenerateApi.md#generate_url_post) | **POST** /generate/url | 
[**generate_user_post**](GenerateApi.md#generate_user_post) | **POST** /generate/user | 


# **generate_upload_post**
> GenerateUploadPost200Response generate_upload_post(user_agent, model=model, name=name, variant=variant, visibility=visibility, file=file)



### Example

* Api Key Authentication (apiKey):
* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.generate_upload_post200_response import GenerateUploadPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GenerateApi(api_client)
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples
    model = steve # str |  (optional) (default to steve)
    name = 'name_example' # str |  (optional)
    variant = 'variant_example' # str | Skin variant - automatically determined based on the image if not specified (optional)
    visibility = 0 # int | Visibility of the generated skin. 0 for public, 1 for private (optional) (default to 0)
    file = None # bytearray |  (optional)

    try:
        api_response = api_instance.generate_upload_post(user_agent, model=model, name=name, variant=variant, visibility=visibility, file=file)
        print("The response of GenerateApi->generate_upload_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenerateApi->generate_upload_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 
 **model** | **str**|  | [optional] [default to steve]
 **name** | **str**|  | [optional] 
 **variant** | **str**| Skin variant - automatically determined based on the image if not specified | [optional] 
 **visibility** | **int**| Visibility of the generated skin. 0 for public, 1 for private | [optional] [default to 0]
 **file** | **bytearray**|  | [optional] 

### Return type

[**GenerateUploadPost200Response**](GenerateUploadPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully generated skin info |  -  |
**400** | Response if an error occured |  -  |
**429** | Response if the client sent a request too soon |  -  |
**500** | Response if an error occured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_url_post**
> GenerateUploadPost200Response generate_url_post(user_agent, generate_url_post_request)



### Example

* Api Key Authentication (apiKey):
* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.generate_upload_post200_response import GenerateUploadPost200Response
from openapi_client.models.generate_url_post_request import GenerateUrlPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GenerateApi(api_client)
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples
    generate_url_post_request = openapi_client.GenerateUrlPostRequest() # GenerateUrlPostRequest | 

    try:
        api_response = api_instance.generate_url_post(user_agent, generate_url_post_request)
        print("The response of GenerateApi->generate_url_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenerateApi->generate_url_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 
 **generate_url_post_request** | [**GenerateUrlPostRequest**](GenerateUrlPostRequest.md)|  | 

### Return type

[**GenerateUploadPost200Response**](GenerateUploadPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully generated skin info |  -  |
**400** | Response if an error occured |  -  |
**429** | Response if the client sent a request too soon |  -  |
**500** | Response if an error occured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_user_post**
> GenerateUploadPost200Response generate_user_post(user_agent, generate_user_post_request)



### Example

* Api Key Authentication (apiKey):
* Bearer Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.generate_upload_post200_response import GenerateUploadPost200Response
from openapi_client.models.generate_user_post_request import GenerateUserPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mineskin.org
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mineskin.org"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure Bearer authorization: bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GenerateApi(api_client)
    user_agent = 'ExampleApp/v1.0' # str | Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples
    generate_user_post_request = openapi_client.GenerateUserPostRequest() # GenerateUserPostRequest | 

    try:
        api_response = api_instance.generate_user_post(user_agent, generate_user_post_request)
        print("The response of GenerateApi->generate_user_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GenerateApi->generate_user_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_agent** | **str**| Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples | 
 **generate_user_post_request** | [**GenerateUserPostRequest**](GenerateUserPostRequest.md)|  | 

### Return type

[**GenerateUploadPost200Response**](GenerateUploadPost200Response.md)

### Authorization

[apiKey](../README.md#apiKey), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully generated skin info |  -  |
**400** | Response if an error occured |  -  |
**429** | Response if the client sent a request too soon |  -  |
**500** | Response if an error occured |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

