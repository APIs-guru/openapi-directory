# openapi_client.StatsApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_live_stats**](StatsApi.md#global_live_stats) | **GET** /api/live | Get global otoroshi stats
[**service_live_stats**](StatsApi.md#service_live_stats) | **GET** /api/live/{id} | Get live feed of otoroshi stats


# **global_live_stats**
> Stats global_live_stats()

Get global otoroshi stats

Get global otoroshi stats

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.stats import Stats
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsApi(api_client)

    try:
        # Get global otoroshi stats
        api_response = api_instance.global_live_stats()
        print("The response of StatsApi->global_live_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->global_live_stats: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**Stats**](Stats.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_live_stats**
> Stats service_live_stats(id)

Get live feed of otoroshi stats

Get live feed of global otoroshi stats (global) or for a service {id}

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.stats import Stats
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatsApi(api_client)
    id = 'id_example' # str | The service id or global for otoroshi stats

    try:
        # Get live feed of otoroshi stats
        api_response = api_instance.service_live_stats(id)
        print("The response of StatsApi->service_live_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->service_live_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The service id or global for otoroshi stats | 

### Return type

[**Stats**](Stats.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/event-stream

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

