# openapi_client.DefaultApi

All URIs are relative to *https://azure.local/luis/v2.0/apps*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prediction_resolve**](DefaultApi.md#prediction_resolve) | **POST** /{appId} | 
[**prediction_resolve2**](DefaultApi.md#prediction_resolve2) | **GET** /{appId} | 


# **prediction_resolve**
> LuisResult prediction_resolve(app_id, q, timezone_offset=timezone_offset, verbose=verbose, staging=staging, spell_check=spell_check, bing_spell_check_subscription_key=bing_spell_check_subscription_key, log=log)



Gets predictions for a given utterance, in the form of intents and entities. The current maximum query size is 500 characters.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_result import LuisResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/v2.0/apps
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/v2.0/apps"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The LUIS application ID (Guid).
    q = 'q_example' # str | The utterance to predict.
    timezone_offset = 3.4 # float | The timezone offset for the location of the request. (optional)
    verbose = True # bool | If true, return all intents instead of just the top scoring intent. (optional)
    staging = True # bool | Use the staging endpoint slot. (optional)
    spell_check = True # bool | Enable spell checking. (optional)
    bing_spell_check_subscription_key = 'bing_spell_check_subscription_key_example' # str | The subscription key to use when enabling bing spell check (optional)
    log = True # bool | Log query (default is true) (optional)

    try:
        api_response = api_instance.prediction_resolve(app_id, q, timezone_offset=timezone_offset, verbose=verbose, staging=staging, spell_check=spell_check, bing_spell_check_subscription_key=bing_spell_check_subscription_key, log=log)
        print("The response of DefaultApi->prediction_resolve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->prediction_resolve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The LUIS application ID (Guid). | 
 **q** | **str**| The utterance to predict. | 
 **timezone_offset** | **float**| The timezone offset for the location of the request. | [optional] 
 **verbose** | **bool**| If true, return all intents instead of just the top scoring intent. | [optional] 
 **staging** | **bool**| Use the staging endpoint slot. | [optional] 
 **spell_check** | **bool**| Enable spell checking. | [optional] 
 **bing_spell_check_subscription_key** | **str**| The subscription key to use when enabling bing spell check | [optional] 
 **log** | **bool**| Log query (default is true) | [optional] 

### Return type

[**LuisResult**](LuisResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prediction, based on the input query, containing intent(s) and entities. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prediction_resolve2**
> LuisResult prediction_resolve2(app_id, q, timezone_offset=timezone_offset, verbose=verbose, staging=staging, spell_check=spell_check, bing_spell_check_subscription_key=bing_spell_check_subscription_key, log=log)



Gets predictions for a given utterance, in the form of intents and entities. The current maximum query size is 500 characters.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.luis_result import LuisResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/luis/v2.0/apps
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/luis/v2.0/apps"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    app_id = 'app_id_example' # str | The LUIS application ID (guid).
    q = 'q_example' # str | The utterance to predict.
    timezone_offset = 3.4 # float | The timezone offset for the location of the request. (optional)
    verbose = True # bool | If true, return all intents instead of just the top scoring intent. (optional)
    staging = True # bool | Use the staging endpoint slot. (optional)
    spell_check = True # bool | Enable spell checking. (optional)
    bing_spell_check_subscription_key = 'bing_spell_check_subscription_key_example' # str | The subscription key to use when enabling bing spell check (optional)
    log = True # bool | Log query (default is true) (optional)

    try:
        api_response = api_instance.prediction_resolve2(app_id, q, timezone_offset=timezone_offset, verbose=verbose, staging=staging, spell_check=spell_check, bing_spell_check_subscription_key=bing_spell_check_subscription_key, log=log)
        print("The response of DefaultApi->prediction_resolve2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->prediction_resolve2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The LUIS application ID (guid). | 
 **q** | **str**| The utterance to predict. | 
 **timezone_offset** | **float**| The timezone offset for the location of the request. | [optional] 
 **verbose** | **bool**| If true, return all intents instead of just the top scoring intent. | [optional] 
 **staging** | **bool**| Use the staging endpoint slot. | [optional] 
 **spell_check** | **bool**| Enable spell checking. | [optional] 
 **bing_spell_check_subscription_key** | **str**| The subscription key to use when enabling bing spell check | [optional] 
 **log** | **bool**| Log query (default is true) | [optional] 

### Return type

[**LuisResult**](LuisResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Prediction, based on the input query, containing intent(s) and entities. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

