# openapi_client.ReactionsApi

All URIs are relative to *https://dev.to/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_reactions_post**](ReactionsApi.md#api_reactions_post) | **POST** /api/reactions | create reaction
[**api_reactions_toggle_post**](ReactionsApi.md#api_reactions_toggle_post) | **POST** /api/reactions/toggle | toggle reaction


# **api_reactions_post**
> api_reactions_post(category, reactable_id, reactable_type)

create reaction

This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:         * \"Like\"ing an Article will create a new \"like\" Reaction from the user for that Articles         * \"Like\"ing that Article a second time will return the previous \"like\"

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReactionsApi(api_client)
    category = 'category_example' # str | 
    reactable_id = 56 # int | 
    reactable_type = 'reactable_type_example' # str | 

    try:
        # create reaction
        api_instance.api_reactions_post(category, reactable_id, reactable_type)
    except Exception as e:
        print("Exception when calling ReactionsApi->api_reactions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**|  | 
 **reactable_id** | **int**|  | 
 **reactable_type** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_reactions_toggle_post**
> api_reactions_toggle_post(category, reactable_id, reactable_type)

toggle reaction

This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:         * \"Like\"ing an Article will create a new \"like\" Reaction from the user for that Articles         * \"Like\"ing that Article a second time will remove the \"like\" from the user

### Example

* Api Key Authentication (api-key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dev.to/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dev.to/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReactionsApi(api_client)
    category = 'category_example' # str | 
    reactable_id = 56 # int | 
    reactable_type = 'reactable_type_example' # str | 

    try:
        # toggle reaction
        api_instance.api_reactions_toggle_post(category, reactable_id, reactable_type)
    except Exception as e:
        print("Exception when calling ReactionsApi->api_reactions_toggle_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**|  | 
 **reactable_id** | **int**|  | 
 **reactable_type** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[api-key](../README.md#api-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful |  -  |
**401** | unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

