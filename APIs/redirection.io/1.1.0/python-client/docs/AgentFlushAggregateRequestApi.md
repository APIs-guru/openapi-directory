# openapi_client.AgentFlushAggregateRequestApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_agent_flush_aggregate_request_collection**](AgentFlushAggregateRequestApi.md#post_agent_flush_aggregate_request_collection) | **POST** /agent-flush-aggregate-requests | Creates a AgentFlushAggregateRequest resource.


# **post_agent_flush_aggregate_request_collection**
> AgentFlushAggregateRequest post_agent_flush_aggregate_request_collection(agent_flush_aggregate_request=agent_flush_aggregate_request)

Creates a AgentFlushAggregateRequest resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.agent_flush_aggregate_request import AgentFlushAggregateRequest
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
    api_instance = openapi_client.AgentFlushAggregateRequestApi(api_client)
    agent_flush_aggregate_request = openapi_client.AgentFlushAggregateRequest() # AgentFlushAggregateRequest | The new AgentFlushAggregateRequest resource (optional)

    try:
        # Creates a AgentFlushAggregateRequest resource.
        api_response = api_instance.post_agent_flush_aggregate_request_collection(agent_flush_aggregate_request=agent_flush_aggregate_request)
        print("The response of AgentFlushAggregateRequestApi->post_agent_flush_aggregate_request_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentFlushAggregateRequestApi->post_agent_flush_aggregate_request_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_flush_aggregate_request** | [**AgentFlushAggregateRequest**](AgentFlushAggregateRequest.md)| The new AgentFlushAggregateRequest resource | [optional] 

### Return type

[**AgentFlushAggregateRequest**](AgentFlushAggregateRequest.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | AgentFlushAggregateRequest resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

