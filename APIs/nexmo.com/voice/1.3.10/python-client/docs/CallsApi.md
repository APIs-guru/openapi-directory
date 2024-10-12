# openapi_client.CallsApi

All URIs are relative to *https://api.nexmo.com/v1/calls*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_call**](CallsApi.md#create_call) | **POST** / | Create an outbound call
[**get_call**](CallsApi.md#get_call) | **GET** /{uuid} | Get detail of a specific call
[**get_calls**](CallsApi.md#get_calls) | **GET** / | Get details of your calls
[**update_call**](CallsApi.md#update_call) | **PUT** /{uuid} | Modify an in progress call


# **create_call**
> CreateCallResponse create_call(create_call_request=create_call_request)

Create an outbound call

Create an outbound Call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.create_call_request import CreateCallRequest
from openapi_client.models.create_call_response import CreateCallResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/calls
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/calls"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CallsApi(api_client)
    create_call_request = openapi_client.CreateCallRequest() # CreateCallRequest | Call Details (optional)

    try:
        # Create an outbound call
        api_response = api_instance.create_call(create_call_request=create_call_request)
        print("The response of CallsApi->create_call:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->create_call: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_call_request** | [**CreateCallRequest**](CreateCallRequest.md)| Call Details | [optional] 

### Return type

[**CreateCallResponse**](CreateCallResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_call**
> GetCallResponse get_call(uuid)

Get detail of a specific call

Get detail of a specific call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_call_response import GetCallResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/calls
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/calls"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CallsApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call

    try:
        # Get detail of a specific call
        api_response = api_instance.get_call(uuid)
        print("The response of CallsApi->get_call:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->get_call: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call | 

### Return type

[**GetCallResponse**](GetCallResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_calls**
> GetCallsResponse get_calls(status=status, date_start=date_start, date_end=date_end, page_size=page_size, record_index=record_index, order=order, conversation_uuid=conversation_uuid)

Get details of your calls

Get details of your calls

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.get_calls_response import GetCallsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/calls
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/calls"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CallsApi(api_client)
    status = 'started' # str | Filter by call status (optional)
    date_start = '2016-11-14T07:45:14Z' # datetime | Return the records that occurred after this point in time (optional)
    date_end = '2016-11-14T07:45:14Z' # datetime | Return the records that occurred before this point in time (optional)
    page_size = 10 # int | Return this amount of records in the response (optional) (default to 10)
    record_index = 0 # int | Return calls from this index in the response (optional) (default to 0)
    order = asc # str | Either ascending or  descending order. (optional) (default to asc)
    conversation_uuid = 'conversation_uuid_example' # str | Return all the records associated with a specific conversation. (optional)

    try:
        # Get details of your calls
        api_response = api_instance.get_calls(status=status, date_start=date_start, date_end=date_end, page_size=page_size, record_index=record_index, order=order, conversation_uuid=conversation_uuid)
        print("The response of CallsApi->get_calls:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->get_calls: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**| Filter by call status | [optional] 
 **date_start** | **datetime**| Return the records that occurred after this point in time | [optional] 
 **date_end** | **datetime**| Return the records that occurred before this point in time | [optional] 
 **page_size** | **int**| Return this amount of records in the response | [optional] [default to 10]
 **record_index** | **int**| Return calls from this index in the response | [optional] [default to 0]
 **order** | **str**| Either ascending or  descending order. | [optional] [default to asc]
 **conversation_uuid** | **str**| Return all the records associated with a specific conversation. | [optional] 

### Return type

[**GetCallsResponse**](GetCallsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_call**
> update_call(uuid, update_call_request)

Modify an in progress call

Modify an in progress call

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import openapi_client
from openapi_client.models.update_call_request import UpdateCallRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v1/calls
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v1/calls"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CallsApi(api_client)
    uuid = '63f61863-4a51-4f6b-86e1-46edebcf9356' # str | UUID of the Call
    update_call_request = openapi_client.UpdateCallRequest() # UpdateCallRequest | 

    try:
        # Modify an in progress call
        api_instance.update_call(uuid, update_call_request)
    except Exception as e:
        print("Exception when calling CallsApi->update_call: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **str**| UUID of the Call | 
 **update_call_request** | [**UpdateCallRequest**](UpdateCallRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

