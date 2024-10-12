# openapi_client.SessionApi

All URIs are relative to *http://etherpad.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_session_using_get**](SessionApi.md#create_session_using_get) | **GET** /createSession | creates a new session. validUntil is an unix timestamp in seconds
[**create_session_using_post**](SessionApi.md#create_session_using_post) | **POST** /createSession | creates a new session. validUntil is an unix timestamp in seconds
[**delete_session_using_get**](SessionApi.md#delete_session_using_get) | **GET** /deleteSession | deletes a session
[**delete_session_using_post**](SessionApi.md#delete_session_using_post) | **POST** /deleteSession | deletes a session
[**get_session_info_using_get**](SessionApi.md#get_session_info_using_get) | **GET** /getSessionInfo | returns informations about a session
[**get_session_info_using_post**](SessionApi.md#get_session_info_using_post) | **POST** /getSessionInfo | returns informations about a session


# **create_session_using_get**
> CreateSessionUsingGET200Response create_session_using_get(group_id=group_id, author_id=author_id, valid_until=valid_until)

creates a new session. validUntil is an unix timestamp in seconds

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_session_using_get200_response import CreateSessionUsingGET200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etherpad.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etherpad.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionApi(api_client)
    group_id = 'group_id_example' # str |  (optional)
    author_id = 'author_id_example' # str |  (optional)
    valid_until = 'valid_until_example' # str |  (optional)

    try:
        # creates a new session. validUntil is an unix timestamp in seconds
        api_response = api_instance.create_session_using_get(group_id=group_id, author_id=author_id, valid_until=valid_until)
        print("The response of SessionApi->create_session_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->create_session_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 
 **author_id** | **str**|  | [optional] 
 **valid_until** | **str**|  | [optional] 

### Return type

[**CreateSessionUsingGET200Response**](CreateSessionUsingGET200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok (code 0) |  -  |
**400** | generic api error (code 1) |  -  |
**401** | no or wrong API key (code 4) |  -  |
**500** | internal api error (code 2) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_session_using_post**
> CreateSessionUsingGET200Response create_session_using_post(group_id=group_id, author_id=author_id, valid_until=valid_until)

creates a new session. validUntil is an unix timestamp in seconds

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_session_using_get200_response import CreateSessionUsingGET200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etherpad.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etherpad.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionApi(api_client)
    group_id = 'group_id_example' # str |  (optional)
    author_id = 'author_id_example' # str |  (optional)
    valid_until = 'valid_until_example' # str |  (optional)

    try:
        # creates a new session. validUntil is an unix timestamp in seconds
        api_response = api_instance.create_session_using_post(group_id=group_id, author_id=author_id, valid_until=valid_until)
        print("The response of SessionApi->create_session_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->create_session_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 
 **author_id** | **str**|  | [optional] 
 **valid_until** | **str**|  | [optional] 

### Return type

[**CreateSessionUsingGET200Response**](CreateSessionUsingGET200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok (code 0) |  -  |
**400** | generic api error (code 1) |  -  |
**401** | no or wrong API key (code 4) |  -  |
**500** | internal api error (code 2) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_session_using_get**
> AppendChatMessageUsingGET200Response delete_session_using_get(session_id=session_id)

deletes a session

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.append_chat_message_using_get200_response import AppendChatMessageUsingGET200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etherpad.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etherpad.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionApi(api_client)
    session_id = 'session_id_example' # str |  (optional)

    try:
        # deletes a session
        api_response = api_instance.delete_session_using_get(session_id=session_id)
        print("The response of SessionApi->delete_session_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->delete_session_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | [optional] 

### Return type

[**AppendChatMessageUsingGET200Response**](AppendChatMessageUsingGET200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok (code 0) |  -  |
**400** | generic api error (code 1) |  -  |
**401** | no or wrong API key (code 4) |  -  |
**500** | internal api error (code 2) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_session_using_post**
> AppendChatMessageUsingGET200Response delete_session_using_post(session_id=session_id)

deletes a session

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.append_chat_message_using_get200_response import AppendChatMessageUsingGET200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etherpad.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etherpad.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionApi(api_client)
    session_id = 'session_id_example' # str |  (optional)

    try:
        # deletes a session
        api_response = api_instance.delete_session_using_post(session_id=session_id)
        print("The response of SessionApi->delete_session_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->delete_session_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | [optional] 

### Return type

[**AppendChatMessageUsingGET200Response**](AppendChatMessageUsingGET200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok (code 0) |  -  |
**400** | generic api error (code 1) |  -  |
**401** | no or wrong API key (code 4) |  -  |
**500** | internal api error (code 2) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_session_info_using_get**
> GetSessionInfoUsingGET200Response get_session_info_using_get(session_id=session_id)

returns informations about a session

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_session_info_using_get200_response import GetSessionInfoUsingGET200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etherpad.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etherpad.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionApi(api_client)
    session_id = 'session_id_example' # str |  (optional)

    try:
        # returns informations about a session
        api_response = api_instance.get_session_info_using_get(session_id=session_id)
        print("The response of SessionApi->get_session_info_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->get_session_info_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | [optional] 

### Return type

[**GetSessionInfoUsingGET200Response**](GetSessionInfoUsingGET200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok (code 0) |  -  |
**400** | generic api error (code 1) |  -  |
**401** | no or wrong API key (code 4) |  -  |
**500** | internal api error (code 2) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_session_info_using_post**
> GetSessionInfoUsingGET200Response get_session_info_using_post(session_id=session_id)

returns informations about a session

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_session_info_using_get200_response import GetSessionInfoUsingGET200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etherpad.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etherpad.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SessionApi(api_client)
    session_id = 'session_id_example' # str |  (optional)

    try:
        # returns informations about a session
        api_response = api_instance.get_session_info_using_post(session_id=session_id)
        print("The response of SessionApi->get_session_info_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SessionApi->get_session_info_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **session_id** | **str**|  | [optional] 

### Return type

[**GetSessionInfoUsingGET200Response**](GetSessionInfoUsingGET200Response.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ok (code 0) |  -  |
**400** | generic api error (code 1) |  -  |
**401** | no or wrong API key (code 4) |  -  |
**500** | internal api error (code 2) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

