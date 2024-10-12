# openapi_client.DefaultApi

All URIs are relative to *http://botschaft.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**config_config_get**](DefaultApi.md#config_config_get) | **GET** /config | Config
[**topic_topic_topic_name_get**](DefaultApi.md#topic_topic_topic_name_get) | **GET** /topic/{topic_name} | Topic


# **config_config_get**
> Config config_config_get(authorization=authorization)

Config

### Example


```python
import openapi_client
from openapi_client.models.config import Config
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
    api_instance = openapi_client.DefaultApi(api_client)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Config
        api_response = api_instance.config_config_get(authorization=authorization)
        print("The response of DefaultApi->config_config_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->config_config_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**|  | [optional] 

### Return type

[**Config**](Config.md)

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

# **topic_topic_topic_name_get**
> object topic_topic_topic_name_get(topic_name, message=message, base64_message=base64_message, authorization=authorization)

Topic

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
    api_instance = openapi_client.DefaultApi(api_client)
    topic_name = 'topic_name_example' # str | 
    message = 'message_example' # str |  (optional)
    base64_message = 'base64_message_example' # str |  (optional)
    authorization = 'authorization_example' # str |  (optional)

    try:
        # Topic
        api_response = api_instance.topic_topic_topic_name_get(topic_name, message=message, base64_message=base64_message, authorization=authorization)
        print("The response of DefaultApi->topic_topic_topic_name_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->topic_topic_topic_name_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topic_name** | **str**|  | 
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

