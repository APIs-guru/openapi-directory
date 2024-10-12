# openapi_client.SnsApi

All URIs are relative to *http://botschaft.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sns_get_sns_get**](SnsApi.md#sns_get_sns_get) | **GET** /sns | Sns Get
[**sns_post_sns_post**](SnsApi.md#sns_post_sns_post) | **POST** /sns | Sns Post


# **sns_get_sns_get**
> object sns_get_sns_get(message=message, base64_message=base64_message, authorization=authorization)

Sns Get

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://botschaft.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://botschaft.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnsApi(api_client)
    message = 'message_example' # str |  (optional)
    base64_message = 'base64_message_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Sns Get
        api_response = api_instance.sns_get_sns_get(message=message, base64_message=base64_message, authorization=authorization)
        print("The response of SnsApi->sns_get_sns_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnsApi->sns_get_sns_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **str**|  | [optional] 
 **base64_message** | **str**|  | [optional] 
 **authorization** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sns_post_sns_post**
> object sns_post_sns_post(sns_message_request, authorization=authorization)

Sns Post

### Example


```python
import openapi_client
from openapi_client.models.sns_message_request import SnsMessageRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://botschaft.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://botschaft.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SnsApi(api_client)
    sns_message_request = openapi_client.SnsMessageRequest() # SnsMessageRequest | 
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Sns Post
        api_response = api_instance.sns_post_sns_post(sns_message_request, authorization=authorization)
        print("The response of SnsApi->sns_post_sns_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SnsApi->sns_post_sns_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sns_message_request** | [**SnsMessageRequest**](SnsMessageRequest.md)|  | 
 **authorization** | **str**|  | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

