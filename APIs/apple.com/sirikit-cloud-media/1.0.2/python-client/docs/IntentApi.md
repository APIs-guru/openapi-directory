# openapi_client.IntentApi

All URIs are relative to *https://cloudextension-testservice.local/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_media_intent_handling**](IntentApi.md#add_media_intent_handling) | **POST** /intent/addMedia | addMedia
[**play_media_intent_handling**](IntentApi.md#play_media_intent_handling) | **POST** /intent/playMedia | playMedia
[**update_media_affinity_intent_handling**](IntentApi.md#update_media_affinity_intent_handling) | **POST** /intent/updateMediaAffinity | updateMediaAffinity


# **add_media_intent_handling**
> List[AddMediaIntentHandlingInvocationResponse] add_media_intent_handling(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, add_media_intent_handling_invocation=add_media_intent_handling_invocation)

addMedia

### Example


```python
import openapi_client
from openapi_client.models.add_media_intent_handling_invocation import AddMediaIntentHandlingInvocation
from openapi_client.models.add_media_intent_handling_invocation_response import AddMediaIntentHandlingInvocationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudextension-testservice.local/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudextension-testservice.local/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntentApi(api_client)
    x_applecloudextension_session_id = 'x_applecloudextension_session_id_example' # str | 
    request_timeout = 3.4 # float | 
    user_agent = 'user_agent_example' # str | 
    accept_language = 'accept_language_example' # str | 
    x_applecloudextension_retry_count = 3.4 # float |  (optional)
    add_media_intent_handling_invocation = [openapi_client.AddMediaIntentHandlingInvocation()] # List[AddMediaIntentHandlingInvocation] |  (optional)

    try:
        # addMedia
        api_response = api_instance.add_media_intent_handling(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, add_media_intent_handling_invocation=add_media_intent_handling_invocation)
        print("The response of IntentApi->add_media_intent_handling:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntentApi->add_media_intent_handling: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_applecloudextension_session_id** | **str**|  | 
 **request_timeout** | **float**|  | 
 **user_agent** | **str**|  | 
 **accept_language** | **str**|  | 
 **x_applecloudextension_retry_count** | **float**|  | [optional] 
 **add_media_intent_handling_invocation** | [**List[AddMediaIntentHandlingInvocation]**](AddMediaIntentHandlingInvocation.md)|  | [optional] 

### Return type

[**List[AddMediaIntentHandlingInvocationResponse]**](AddMediaIntentHandlingInvocationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * x-applecloudextension-session-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **play_media_intent_handling**
> List[PlayMediaIntentHandlingInvocationResponse] play_media_intent_handling(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, play_media_intent_handling_invocation=play_media_intent_handling_invocation)

playMedia

### Example


```python
import openapi_client
from openapi_client.models.play_media_intent_handling_invocation import PlayMediaIntentHandlingInvocation
from openapi_client.models.play_media_intent_handling_invocation_response import PlayMediaIntentHandlingInvocationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudextension-testservice.local/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudextension-testservice.local/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntentApi(api_client)
    x_applecloudextension_session_id = 'x_applecloudextension_session_id_example' # str | 
    request_timeout = 3.4 # float | 
    user_agent = 'user_agent_example' # str | 
    accept_language = 'accept_language_example' # str | 
    x_applecloudextension_retry_count = 3.4 # float |  (optional)
    play_media_intent_handling_invocation = [openapi_client.PlayMediaIntentHandlingInvocation()] # List[PlayMediaIntentHandlingInvocation] |  (optional)

    try:
        # playMedia
        api_response = api_instance.play_media_intent_handling(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, play_media_intent_handling_invocation=play_media_intent_handling_invocation)
        print("The response of IntentApi->play_media_intent_handling:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntentApi->play_media_intent_handling: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_applecloudextension_session_id** | **str**|  | 
 **request_timeout** | **float**|  | 
 **user_agent** | **str**|  | 
 **accept_language** | **str**|  | 
 **x_applecloudextension_retry_count** | **float**|  | [optional] 
 **play_media_intent_handling_invocation** | [**List[PlayMediaIntentHandlingInvocation]**](PlayMediaIntentHandlingInvocation.md)|  | [optional] 

### Return type

[**List[PlayMediaIntentHandlingInvocationResponse]**](PlayMediaIntentHandlingInvocationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * x-applecloudextension-session-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_media_affinity_intent_handling**
> List[UpdateMediaAffinityIntentHandlingInvocationResponse] update_media_affinity_intent_handling(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, update_media_affinity_intent_handling_invocation=update_media_affinity_intent_handling_invocation)

updateMediaAffinity

### Example


```python
import openapi_client
from openapi_client.models.update_media_affinity_intent_handling_invocation import UpdateMediaAffinityIntentHandlingInvocation
from openapi_client.models.update_media_affinity_intent_handling_invocation_response import UpdateMediaAffinityIntentHandlingInvocationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudextension-testservice.local/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudextension-testservice.local/api"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IntentApi(api_client)
    x_applecloudextension_session_id = 'x_applecloudextension_session_id_example' # str | 
    request_timeout = 3.4 # float | 
    user_agent = 'user_agent_example' # str | 
    accept_language = 'accept_language_example' # str | 
    x_applecloudextension_retry_count = 3.4 # float |  (optional)
    update_media_affinity_intent_handling_invocation = [openapi_client.UpdateMediaAffinityIntentHandlingInvocation()] # List[UpdateMediaAffinityIntentHandlingInvocation] |  (optional)

    try:
        # updateMediaAffinity
        api_response = api_instance.update_media_affinity_intent_handling(x_applecloudextension_session_id, request_timeout, user_agent, accept_language, x_applecloudextension_retry_count=x_applecloudextension_retry_count, update_media_affinity_intent_handling_invocation=update_media_affinity_intent_handling_invocation)
        print("The response of IntentApi->update_media_affinity_intent_handling:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntentApi->update_media_affinity_intent_handling: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_applecloudextension_session_id** | **str**|  | 
 **request_timeout** | **float**|  | 
 **user_agent** | **str**|  | 
 **accept_language** | **str**|  | 
 **x_applecloudextension_retry_count** | **float**|  | [optional] 
 **update_media_affinity_intent_handling_invocation** | [**List[UpdateMediaAffinityIntentHandlingInvocation]**](UpdateMediaAffinityIntentHandlingInvocation.md)|  | [optional] 

### Return type

[**List[UpdateMediaAffinityIntentHandlingInvocationResponse]**](UpdateMediaAffinityIntentHandlingInvocationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * x-applecloudextension-session-id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

