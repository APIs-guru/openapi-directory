# openapi_client.ConsumersApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumer_request_counts_all**](ConsumersApi.md#consumer_request_counts_all) | **GET** /vault/consumers/{consumer_id}/stats | Consumer request counts
[**consumers_add**](ConsumersApi.md#consumers_add) | **POST** /vault/consumers | Create consumer
[**consumers_all**](ConsumersApi.md#consumers_all) | **GET** /vault/consumers | Get all consumers
[**consumers_delete**](ConsumersApi.md#consumers_delete) | **DELETE** /vault/consumers/{consumer_id} | Delete consumer
[**consumers_one**](ConsumersApi.md#consumers_one) | **GET** /vault/consumers/{consumer_id} | Get consumer
[**consumers_update**](ConsumersApi.md#consumers_update) | **PATCH** /vault/consumers/{consumer_id} | Update consumer


# **consumer_request_counts_all**
> ConsumerRequestCountsInDateRangeResponse consumer_request_counts_all(x_apideck_app_id, consumer_id, start_datetime, end_datetime)

Consumer request counts

Get consumer request counts within a given datetime range. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.consumer_request_counts_in_date_range_response import ConsumerRequestCountsInDateRangeResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
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
    api_instance = openapi_client.ConsumersApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    consumer_id = 'test_user_id' # str | ID of the consumer to return
    start_datetime = '2021-05-01T12:00:00.000Z' # str | Scopes results to requests that happened after datetime
    end_datetime = '2021-05-30T12:00:00.000Z' # str | Scopes results to requests that happened before datetime

    try:
        # Consumer request counts
        api_response = api_instance.consumer_request_counts_all(x_apideck_app_id, consumer_id, start_datetime, end_datetime)
        print("The response of ConsumersApi->consumer_request_counts_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumersApi->consumer_request_counts_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **consumer_id** | **str**| ID of the consumer to return | 
 **start_datetime** | **str**| Scopes results to requests that happened after datetime | 
 **end_datetime** | **str**| Scopes results to requests that happened before datetime | 

### Return type

[**ConsumerRequestCountsInDateRangeResponse**](ConsumerRequestCountsInDateRangeResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumers Request Counts within Date Range |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumers_add**
> CreateConsumerResponse consumers_add(x_apideck_app_id, consumer)

Create consumer

Create a consumer

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.consumer import Consumer
from openapi_client.models.create_consumer_response import CreateConsumerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
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
    api_instance = openapi_client.ConsumersApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    consumer = openapi_client.Consumer() # Consumer | 

    try:
        # Create consumer
        api_response = api_instance.consumers_add(x_apideck_app_id, consumer)
        print("The response of ConsumersApi->consumers_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumersApi->consumers_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **consumer** | [**Consumer**](Consumer.md)|  | 

### Return type

[**CreateConsumerResponse**](CreateConsumerResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumer created |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumers_all**
> GetConsumersResponse consumers_all(x_apideck_app_id, cursor=cursor, limit=limit)

Get all consumers

This endpoint includes all application consumers, along with an aggregated count of requests made. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_consumers_response import GetConsumersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
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
    api_instance = openapi_client.ConsumersApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)

    try:
        # Get all consumers
        api_response = api_instance.consumers_all(x_apideck_app_id, cursor=cursor, limit=limit)
        print("The response of ConsumersApi->consumers_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumersApi->consumers_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]

### Return type

[**GetConsumersResponse**](GetConsumersResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumers |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumers_delete**
> DeleteConsumerResponse consumers_delete(x_apideck_app_id, consumer_id)

Delete consumer

Delete consumer and all their connections, including credentials.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.delete_consumer_response import DeleteConsumerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
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
    api_instance = openapi_client.ConsumersApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    consumer_id = 'test_user_id' # str | ID of the consumer to return

    try:
        # Delete consumer
        api_response = api_instance.consumers_delete(x_apideck_app_id, consumer_id)
        print("The response of ConsumersApi->consumers_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumersApi->consumers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **consumer_id** | **str**| ID of the consumer to return | 

### Return type

[**DeleteConsumerResponse**](DeleteConsumerResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumer deleted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumers_one**
> GetConsumerResponse consumers_one(x_apideck_app_id, consumer_id)

Get consumer

Consumer detail including their aggregated counts with the connections they have authorized. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_consumer_response import GetConsumerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
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
    api_instance = openapi_client.ConsumersApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    consumer_id = 'test_user_id' # str | ID of the consumer to return

    try:
        # Get consumer
        api_response = api_instance.consumers_one(x_apideck_app_id, consumer_id)
        print("The response of ConsumersApi->consumers_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumersApi->consumers_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **consumer_id** | **str**| ID of the consumer to return | 

### Return type

[**GetConsumerResponse**](GetConsumerResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumer |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **consumers_update**
> UpdateConsumerResponse consumers_update(x_apideck_app_id, consumer_id, update_consumer_request)

Update consumer

Update consumer metadata such as name and email.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.update_consumer_request import UpdateConsumerRequest
from openapi_client.models.update_consumer_response import UpdateConsumerResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
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
    api_instance = openapi_client.ConsumersApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    consumer_id = 'test_user_id' # str | ID of the consumer to return
    update_consumer_request = openapi_client.UpdateConsumerRequest() # UpdateConsumerRequest | 

    try:
        # Update consumer
        api_response = api_instance.consumers_update(x_apideck_app_id, consumer_id, update_consumer_request)
        print("The response of ConsumersApi->consumers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConsumersApi->consumers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **consumer_id** | **str**| ID of the consumer to return | 
 **update_consumer_request** | [**UpdateConsumerRequest**](UpdateConsumerRequest.md)|  | 

### Return type

[**UpdateConsumerResponse**](UpdateConsumerResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Consumer updated |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

