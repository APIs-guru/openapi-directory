# openapi_client.AgentFlushRequestApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agent_flush_requests_post**](AgentFlushRequestApi.md#agent_flush_requests_post) | **POST** /agent-flush-requests | Creates a AgentFlushRequest resource.
[**post_logs_post**](AgentFlushRequestApi.md#post_logs_post) | **POST** /post-logs | Creates a AgentFlushRequest resource.


# **agent_flush_requests_post**
> AgentFlushRequest agent_flush_requests_post(agent_flush_request=agent_flush_request)

Creates a AgentFlushRequest resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.agent_flush_request import AgentFlushRequest
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
    api_instance = openapi_client.AgentFlushRequestApi(api_client)
    agent_flush_request = openapi_client.AgentFlushRequest() # AgentFlushRequest | The new AgentFlushRequest resource (optional)

    try:
        # Creates a AgentFlushRequest resource.
        api_response = api_instance.agent_flush_requests_post(agent_flush_request=agent_flush_request)
        print("The response of AgentFlushRequestApi->agent_flush_requests_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentFlushRequestApi->agent_flush_requests_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_flush_request** | [**AgentFlushRequest**](AgentFlushRequest.md)| The new AgentFlushRequest resource | [optional] 

### Return type

[**AgentFlushRequest**](AgentFlushRequest.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AgentFlushRequest resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_logs_post**
> AgentFlushRequest post_logs_post(agent_flush_request=agent_flush_request)

Creates a AgentFlushRequest resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.agent_flush_request import AgentFlushRequest
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
    api_instance = openapi_client.AgentFlushRequestApi(api_client)
    agent_flush_request = openapi_client.AgentFlushRequest() # AgentFlushRequest | The new AgentFlushRequest resource (optional)

    try:
        # Creates a AgentFlushRequest resource.
        api_response = api_instance.post_logs_post(agent_flush_request=agent_flush_request)
        print("The response of AgentFlushRequestApi->post_logs_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentFlushRequestApi->post_logs_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_flush_request** | [**AgentFlushRequest**](AgentFlushRequest.md)| The new AgentFlushRequest resource | [optional] 

### Return type

[**AgentFlushRequest**](AgentFlushRequest.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AgentFlushRequest resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

