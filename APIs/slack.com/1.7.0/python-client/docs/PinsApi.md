# openapi_client.PinsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pins_add**](PinsApi.md#pins_add) | **POST** /pins.add | 
[**pins_list**](PinsApi.md#pins_list) | **GET** /pins.list | 
[**pins_remove**](PinsApi.md#pins_remove) | **POST** /pins.remove | 


# **pins_add**
> PinsAddSchema pins_add(token, channel, timestamp=timestamp)



Pins an item to a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.pins_add_schema import PinsAddSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PinsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `pins:write`
    channel = 'channel_example' # str | Channel to pin the item in.
    timestamp = 'timestamp_example' # str | Timestamp of the message to pin. (optional)

    try:
        api_response = api_instance.pins_add(token, channel, timestamp=timestamp)
        print("The response of PinsApi->pins_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PinsApi->pins_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;pins:write&#x60; | 
 **channel** | **str**| Channel to pin the item in. | 
 **timestamp** | **str**| Timestamp of the message to pin. | [optional] 

### Return type

[**PinsAddSchema**](PinsAddSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pins_list**
> List[PinsListSuccessSchemaInner] pins_list(token, channel)



Lists items pinned to a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.pins_list_success_schema_inner import PinsListSuccessSchemaInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PinsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `pins:read`
    channel = 'channel_example' # str | Channel to get pinned items for.

    try:
        api_response = api_instance.pins_list(token, channel)
        print("The response of PinsApi->pins_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PinsApi->pins_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;pins:read&#x60; | 
 **channel** | **str**| Channel to get pinned items for. | 

### Return type

[**List[PinsListSuccessSchemaInner]**](PinsListSuccessSchemaInner.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pins_remove**
> PinsRemoveSchema pins_remove(token, channel, timestamp=timestamp)



Un-pins an item from a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.pins_remove_schema import PinsRemoveSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PinsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `pins:write`
    channel = 'channel_example' # str | Channel where the item is pinned to.
    timestamp = 'timestamp_example' # str | Timestamp of the message to un-pin. (optional)

    try:
        api_response = api_instance.pins_remove(token, channel, timestamp=timestamp)
        print("The response of PinsApi->pins_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PinsApi->pins_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;pins:write&#x60; | 
 **channel** | **str**| Channel where the item is pinned to. | 
 **timestamp** | **str**| Timestamp of the message to un-pin. | [optional] 

### Return type

[**PinsRemoveSchema**](PinsRemoveSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

