# openapi_client.EventsApi

All URIs are relative to *https://azure.local/personalizer/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_activate**](EventsApi.md#events_activate) | **POST** /events/{eventId}/activate | Activate Event.
[**events_reward**](EventsApi.md#events_reward) | **POST** /events/{eventId}/reward | Post Reward.


# **events_activate**
> events_activate(event_id)

Activate Event.

Report that the specified event was actually displayed to the user and a reward should be expected for it

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    event_id = 'event_id_example' # str | The event ID this activation applies to.

    try:
        # Activate Event.
        api_instance.events_activate(event_id)
    except Exception as e:
        print("Exception when calling EventsApi->events_activate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **str**| The event ID this activation applies to. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Invalid activate event request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_reward**
> events_reward(event_id, reward)

Post Reward.

Report reward that resulted from using the action specified in rewardActionId for the specified event.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.reward_request import RewardRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local/personalizer/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local/personalizer/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    event_id = 'event_id_example' # str | The event id this reward applies to.
    reward = openapi_client.RewardRequest() # RewardRequest | The reward should be a floating point number, typically between 0 and 1.

    try:
        # Post Reward.
        api_instance.events_reward(event_id, reward)
    except Exception as e:
        print("Exception when calling EventsApi->events_reward: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **str**| The event id this reward applies to. | 
 **reward** | [**RewardRequest**](RewardRequest.md)| The reward should be a floating point number, typically between 0 and 1. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Invalid reward request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

