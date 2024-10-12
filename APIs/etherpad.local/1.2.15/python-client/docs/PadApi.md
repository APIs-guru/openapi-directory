# openapi_client.PadApi

All URIs are relative to *http://etherpad.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**append_chat_message_using_get**](PadApi.md#append_chat_message_using_get) | **GET** /appendChatMessage | appends a chat message
[**append_chat_message_using_post**](PadApi.md#append_chat_message_using_post) | **POST** /appendChatMessage | appends a chat message
[**check_token_using_get**](PadApi.md#check_token_using_get) | **GET** /checkToken | returns ok when the current api token is valid
[**check_token_using_post**](PadApi.md#check_token_using_post) | **POST** /checkToken | returns ok when the current api token is valid
[**create_diff_html_using_get**](PadApi.md#create_diff_html_using_get) | **GET** /createDiffHTML | 
[**create_diff_html_using_post**](PadApi.md#create_diff_html_using_post) | **POST** /createDiffHTML | 
[**create_pad_using_get**](PadApi.md#create_pad_using_get) | **GET** /createPad | 
[**create_pad_using_post**](PadApi.md#create_pad_using_post) | **POST** /createPad | 
[**delete_pad_using_get**](PadApi.md#delete_pad_using_get) | **GET** /deletePad | deletes a pad
[**delete_pad_using_post**](PadApi.md#delete_pad_using_post) | **POST** /deletePad | deletes a pad
[**get_chat_head_using_get**](PadApi.md#get_chat_head_using_get) | **GET** /getChatHead | returns the chatHead (chat-message) of the pad
[**get_chat_head_using_post**](PadApi.md#get_chat_head_using_post) | **POST** /getChatHead | returns the chatHead (chat-message) of the pad
[**get_chat_history_using_get**](PadApi.md#get_chat_history_using_get) | **GET** /getChatHistory | returns the chat history
[**get_chat_history_using_post**](PadApi.md#get_chat_history_using_post) | **POST** /getChatHistory | returns the chat history
[**get_html_using_get**](PadApi.md#get_html_using_get) | **GET** /getHTML | returns the text of a pad formatted as HTML
[**get_html_using_post**](PadApi.md#get_html_using_post) | **POST** /getHTML | returns the text of a pad formatted as HTML
[**get_last_edited_using_get**](PadApi.md#get_last_edited_using_get) | **GET** /getLastEdited | returns the timestamp of the last revision of the pad
[**get_last_edited_using_post**](PadApi.md#get_last_edited_using_post) | **POST** /getLastEdited | returns the timestamp of the last revision of the pad
[**get_public_status_using_get**](PadApi.md#get_public_status_using_get) | **GET** /getPublicStatus | return true of false
[**get_public_status_using_post**](PadApi.md#get_public_status_using_post) | **POST** /getPublicStatus | return true of false
[**get_read_only_id_using_get**](PadApi.md#get_read_only_id_using_get) | **GET** /getReadOnlyID | returns the read only link of a pad
[**get_read_only_id_using_post**](PadApi.md#get_read_only_id_using_post) | **POST** /getReadOnlyID | returns the read only link of a pad
[**get_revisions_count_using_get**](PadApi.md#get_revisions_count_using_get) | **GET** /getRevisionsCount | returns the number of revisions of this pad
[**get_revisions_count_using_post**](PadApi.md#get_revisions_count_using_post) | **POST** /getRevisionsCount | returns the number of revisions of this pad
[**get_text_using_get**](PadApi.md#get_text_using_get) | **GET** /getText | returns the text of a pad
[**get_text_using_post**](PadApi.md#get_text_using_post) | **POST** /getText | returns the text of a pad
[**list_all_pads_using_get**](PadApi.md#list_all_pads_using_get) | **GET** /listAllPads | list all the pads
[**list_all_pads_using_post**](PadApi.md#list_all_pads_using_post) | **POST** /listAllPads | list all the pads
[**list_authors_of_pad_using_get**](PadApi.md#list_authors_of_pad_using_get) | **GET** /listAuthorsOfPad | returns an array of authors who contributed to this pad
[**list_authors_of_pad_using_post**](PadApi.md#list_authors_of_pad_using_post) | **POST** /listAuthorsOfPad | returns an array of authors who contributed to this pad
[**pad_users_count_using_get**](PadApi.md#pad_users_count_using_get) | **GET** /padUsersCount | returns the number of user that are currently editing this pad
[**pad_users_count_using_post**](PadApi.md#pad_users_count_using_post) | **POST** /padUsersCount | returns the number of user that are currently editing this pad
[**pad_users_using_get**](PadApi.md#pad_users_using_get) | **GET** /padUsers | returns the list of users that are currently editing this pad
[**pad_users_using_post**](PadApi.md#pad_users_using_post) | **POST** /padUsers | returns the list of users that are currently editing this pad
[**send_clients_message_using_get**](PadApi.md#send_clients_message_using_get) | **GET** /sendClientsMessage | sends a custom message of type msg to the pad
[**send_clients_message_using_post**](PadApi.md#send_clients_message_using_post) | **POST** /sendClientsMessage | sends a custom message of type msg to the pad
[**set_html_using_get**](PadApi.md#set_html_using_get) | **GET** /setHTML | sets the text of a pad with HTML
[**set_html_using_post**](PadApi.md#set_html_using_post) | **POST** /setHTML | sets the text of a pad with HTML
[**set_public_status_using_get**](PadApi.md#set_public_status_using_get) | **GET** /setPublicStatus | sets a boolean for the public status of a pad
[**set_public_status_using_post**](PadApi.md#set_public_status_using_post) | **POST** /setPublicStatus | sets a boolean for the public status of a pad
[**set_text_using_get**](PadApi.md#set_text_using_get) | **GET** /setText | sets the text of a pad
[**set_text_using_post**](PadApi.md#set_text_using_post) | **POST** /setText | sets the text of a pad


# **append_chat_message_using_get**
> AppendChatMessageUsingGET200Response append_chat_message_using_get(pad_id=pad_id, text=text, author_id=author_id, time=time)

appends a chat message

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)
    author_id = 'author_id_example' # str |  (optional)
    time = 'time_example' # str |  (optional)

    try:
        # appends a chat message
        api_response = api_instance.append_chat_message_using_get(pad_id=pad_id, text=text, author_id=author_id, time=time)
        print("The response of PadApi->append_chat_message_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->append_chat_message_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **text** | **str**|  | [optional] 
 **author_id** | **str**|  | [optional] 
 **time** | **str**|  | [optional] 

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

# **append_chat_message_using_post**
> AppendChatMessageUsingGET200Response append_chat_message_using_post(pad_id=pad_id, text=text, author_id=author_id, time=time)

appends a chat message

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)
    author_id = 'author_id_example' # str |  (optional)
    time = 'time_example' # str |  (optional)

    try:
        # appends a chat message
        api_response = api_instance.append_chat_message_using_post(pad_id=pad_id, text=text, author_id=author_id, time=time)
        print("The response of PadApi->append_chat_message_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->append_chat_message_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **text** | **str**|  | [optional] 
 **author_id** | **str**|  | [optional] 
 **time** | **str**|  | [optional] 

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

# **check_token_using_get**
> AppendChatMessageUsingGET200Response check_token_using_get()

returns ok when the current api token is valid

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
    api_instance = openapi_client.PadApi(api_client)

    try:
        # returns ok when the current api token is valid
        api_response = api_instance.check_token_using_get()
        print("The response of PadApi->check_token_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->check_token_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **check_token_using_post**
> AppendChatMessageUsingGET200Response check_token_using_post()

returns ok when the current api token is valid

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
    api_instance = openapi_client.PadApi(api_client)

    try:
        # returns ok when the current api token is valid
        api_response = api_instance.check_token_using_post()
        print("The response of PadApi->check_token_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->check_token_using_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

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

# **create_diff_html_using_get**
> CreateDiffHTMLUsingGET200Response create_diff_html_using_get(pad_id=pad_id, start_rev=start_rev, end_rev=end_rev)



### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_diff_html_using_get200_response import CreateDiffHTMLUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    start_rev = 'start_rev_example' # str |  (optional)
    end_rev = 'end_rev_example' # str |  (optional)

    try:
        # 
        api_response = api_instance.create_diff_html_using_get(pad_id=pad_id, start_rev=start_rev, end_rev=end_rev)
        print("The response of PadApi->create_diff_html_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->create_diff_html_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **start_rev** | **str**|  | [optional] 
 **end_rev** | **str**|  | [optional] 

### Return type

[**CreateDiffHTMLUsingGET200Response**](CreateDiffHTMLUsingGET200Response.md)

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

# **create_diff_html_using_post**
> CreateDiffHTMLUsingGET200Response create_diff_html_using_post(pad_id=pad_id, start_rev=start_rev, end_rev=end_rev)



### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_diff_html_using_get200_response import CreateDiffHTMLUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    start_rev = 'start_rev_example' # str |  (optional)
    end_rev = 'end_rev_example' # str |  (optional)

    try:
        # 
        api_response = api_instance.create_diff_html_using_post(pad_id=pad_id, start_rev=start_rev, end_rev=end_rev)
        print("The response of PadApi->create_diff_html_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->create_diff_html_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **start_rev** | **str**|  | [optional] 
 **end_rev** | **str**|  | [optional] 

### Return type

[**CreateDiffHTMLUsingGET200Response**](CreateDiffHTMLUsingGET200Response.md)

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

# **create_pad_using_get**
> AppendChatMessageUsingGET200Response create_pad_using_get(pad_id=pad_id, text=text)



creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        api_response = api_instance.create_pad_using_get(pad_id=pad_id, text=text)
        print("The response of PadApi->create_pad_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->create_pad_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **text** | **str**|  | [optional] 

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

# **create_pad_using_post**
> AppendChatMessageUsingGET200Response create_pad_using_post(pad_id=pad_id, text=text)



creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        api_response = api_instance.create_pad_using_post(pad_id=pad_id, text=text)
        print("The response of PadApi->create_pad_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->create_pad_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **text** | **str**|  | [optional] 

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

# **delete_pad_using_get**
> AppendChatMessageUsingGET200Response delete_pad_using_get(pad_id=pad_id)

deletes a pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # deletes a pad
        api_response = api_instance.delete_pad_using_get(pad_id=pad_id)
        print("The response of PadApi->delete_pad_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->delete_pad_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

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

# **delete_pad_using_post**
> AppendChatMessageUsingGET200Response delete_pad_using_post(pad_id=pad_id)

deletes a pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # deletes a pad
        api_response = api_instance.delete_pad_using_post(pad_id=pad_id)
        print("The response of PadApi->delete_pad_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->delete_pad_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

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

# **get_chat_head_using_get**
> GetChatHeadUsingGET200Response get_chat_head_using_get(pad_id=pad_id)

returns the chatHead (chat-message) of the pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_chat_head_using_get200_response import GetChatHeadUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the chatHead (chat-message) of the pad
        api_response = api_instance.get_chat_head_using_get(pad_id=pad_id)
        print("The response of PadApi->get_chat_head_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_chat_head_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetChatHeadUsingGET200Response**](GetChatHeadUsingGET200Response.md)

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

# **get_chat_head_using_post**
> GetChatHeadUsingGET200Response get_chat_head_using_post(pad_id=pad_id)

returns the chatHead (chat-message) of the pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_chat_head_using_get200_response import GetChatHeadUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the chatHead (chat-message) of the pad
        api_response = api_instance.get_chat_head_using_post(pad_id=pad_id)
        print("The response of PadApi->get_chat_head_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_chat_head_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetChatHeadUsingGET200Response**](GetChatHeadUsingGET200Response.md)

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

# **get_chat_history_using_get**
> GetChatHistoryUsingGET200Response get_chat_history_using_get(pad_id=pad_id, start=start, end=end)

returns the chat history

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_chat_history_using_get200_response import GetChatHistoryUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    start = 'start_example' # str |  (optional)
    end = 'end_example' # str |  (optional)

    try:
        # returns the chat history
        api_response = api_instance.get_chat_history_using_get(pad_id=pad_id, start=start, end=end)
        print("The response of PadApi->get_chat_history_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_chat_history_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **start** | **str**|  | [optional] 
 **end** | **str**|  | [optional] 

### Return type

[**GetChatHistoryUsingGET200Response**](GetChatHistoryUsingGET200Response.md)

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

# **get_chat_history_using_post**
> GetChatHistoryUsingGET200Response get_chat_history_using_post(pad_id=pad_id, start=start, end=end)

returns the chat history

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_chat_history_using_get200_response import GetChatHistoryUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    start = 'start_example' # str |  (optional)
    end = 'end_example' # str |  (optional)

    try:
        # returns the chat history
        api_response = api_instance.get_chat_history_using_post(pad_id=pad_id, start=start, end=end)
        print("The response of PadApi->get_chat_history_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_chat_history_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **start** | **str**|  | [optional] 
 **end** | **str**|  | [optional] 

### Return type

[**GetChatHistoryUsingGET200Response**](GetChatHistoryUsingGET200Response.md)

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

# **get_html_using_get**
> GetHTMLUsingGET200Response get_html_using_get(pad_id=pad_id, rev=rev)

returns the text of a pad formatted as HTML

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_html_using_get200_response import GetHTMLUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        # returns the text of a pad formatted as HTML
        api_response = api_instance.get_html_using_get(pad_id=pad_id, rev=rev)
        print("The response of PadApi->get_html_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_html_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

### Return type

[**GetHTMLUsingGET200Response**](GetHTMLUsingGET200Response.md)

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

# **get_html_using_post**
> GetHTMLUsingGET200Response get_html_using_post(pad_id=pad_id, rev=rev)

returns the text of a pad formatted as HTML

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_html_using_get200_response import GetHTMLUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        # returns the text of a pad formatted as HTML
        api_response = api_instance.get_html_using_post(pad_id=pad_id, rev=rev)
        print("The response of PadApi->get_html_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_html_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

### Return type

[**GetHTMLUsingGET200Response**](GetHTMLUsingGET200Response.md)

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

# **get_last_edited_using_get**
> GetLastEditedUsingGET200Response get_last_edited_using_get(pad_id=pad_id)

returns the timestamp of the last revision of the pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_last_edited_using_get200_response import GetLastEditedUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the timestamp of the last revision of the pad
        api_response = api_instance.get_last_edited_using_get(pad_id=pad_id)
        print("The response of PadApi->get_last_edited_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_last_edited_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetLastEditedUsingGET200Response**](GetLastEditedUsingGET200Response.md)

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

# **get_last_edited_using_post**
> GetLastEditedUsingGET200Response get_last_edited_using_post(pad_id=pad_id)

returns the timestamp of the last revision of the pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_last_edited_using_get200_response import GetLastEditedUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the timestamp of the last revision of the pad
        api_response = api_instance.get_last_edited_using_post(pad_id=pad_id)
        print("The response of PadApi->get_last_edited_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_last_edited_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetLastEditedUsingGET200Response**](GetLastEditedUsingGET200Response.md)

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

# **get_public_status_using_get**
> GetPublicStatusUsingGET200Response get_public_status_using_get(pad_id=pad_id)

return true of false

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_public_status_using_get200_response import GetPublicStatusUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # return true of false
        api_response = api_instance.get_public_status_using_get(pad_id=pad_id)
        print("The response of PadApi->get_public_status_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_public_status_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetPublicStatusUsingGET200Response**](GetPublicStatusUsingGET200Response.md)

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

# **get_public_status_using_post**
> GetPublicStatusUsingGET200Response get_public_status_using_post(pad_id=pad_id)

return true of false

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_public_status_using_get200_response import GetPublicStatusUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # return true of false
        api_response = api_instance.get_public_status_using_post(pad_id=pad_id)
        print("The response of PadApi->get_public_status_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_public_status_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetPublicStatusUsingGET200Response**](GetPublicStatusUsingGET200Response.md)

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

# **get_read_only_id_using_get**
> GetReadOnlyIDUsingGET200Response get_read_only_id_using_get(pad_id=pad_id)

returns the read only link of a pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_read_only_id_using_get200_response import GetReadOnlyIDUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the read only link of a pad
        api_response = api_instance.get_read_only_id_using_get(pad_id=pad_id)
        print("The response of PadApi->get_read_only_id_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_read_only_id_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetReadOnlyIDUsingGET200Response**](GetReadOnlyIDUsingGET200Response.md)

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

# **get_read_only_id_using_post**
> GetReadOnlyIDUsingGET200Response get_read_only_id_using_post(pad_id=pad_id)

returns the read only link of a pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_read_only_id_using_get200_response import GetReadOnlyIDUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the read only link of a pad
        api_response = api_instance.get_read_only_id_using_post(pad_id=pad_id)
        print("The response of PadApi->get_read_only_id_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_read_only_id_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetReadOnlyIDUsingGET200Response**](GetReadOnlyIDUsingGET200Response.md)

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

# **get_revisions_count_using_get**
> GetRevisionsCountUsingGET200Response get_revisions_count_using_get(pad_id=pad_id)

returns the number of revisions of this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_revisions_count_using_get200_response import GetRevisionsCountUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the number of revisions of this pad
        api_response = api_instance.get_revisions_count_using_get(pad_id=pad_id)
        print("The response of PadApi->get_revisions_count_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_revisions_count_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetRevisionsCountUsingGET200Response**](GetRevisionsCountUsingGET200Response.md)

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

# **get_revisions_count_using_post**
> GetRevisionsCountUsingGET200Response get_revisions_count_using_post(pad_id=pad_id)

returns the number of revisions of this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_revisions_count_using_get200_response import GetRevisionsCountUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the number of revisions of this pad
        api_response = api_instance.get_revisions_count_using_post(pad_id=pad_id)
        print("The response of PadApi->get_revisions_count_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_revisions_count_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**GetRevisionsCountUsingGET200Response**](GetRevisionsCountUsingGET200Response.md)

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

# **get_text_using_get**
> GetTextUsingGET200Response get_text_using_get(pad_id=pad_id, rev=rev)

returns the text of a pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_text_using_get200_response import GetTextUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        # returns the text of a pad
        api_response = api_instance.get_text_using_get(pad_id=pad_id, rev=rev)
        print("The response of PadApi->get_text_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_text_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

### Return type

[**GetTextUsingGET200Response**](GetTextUsingGET200Response.md)

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

# **get_text_using_post**
> GetTextUsingGET200Response get_text_using_post(pad_id=pad_id, rev=rev)

returns the text of a pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_text_using_get200_response import GetTextUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        # returns the text of a pad
        api_response = api_instance.get_text_using_post(pad_id=pad_id, rev=rev)
        print("The response of PadApi->get_text_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->get_text_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

### Return type

[**GetTextUsingGET200Response**](GetTextUsingGET200Response.md)

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

# **list_all_pads_using_get**
> ListAllPadsUsingGET200Response list_all_pads_using_get()

list all the pads

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_all_pads_using_get200_response import ListAllPadsUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)

    try:
        # list all the pads
        api_response = api_instance.list_all_pads_using_get()
        print("The response of PadApi->list_all_pads_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->list_all_pads_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAllPadsUsingGET200Response**](ListAllPadsUsingGET200Response.md)

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

# **list_all_pads_using_post**
> ListAllPadsUsingGET200Response list_all_pads_using_post()

list all the pads

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_all_pads_using_get200_response import ListAllPadsUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)

    try:
        # list all the pads
        api_response = api_instance.list_all_pads_using_post()
        print("The response of PadApi->list_all_pads_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->list_all_pads_using_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAllPadsUsingGET200Response**](ListAllPadsUsingGET200Response.md)

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

# **list_authors_of_pad_using_get**
> ListAuthorsOfPadUsingGET200Response list_authors_of_pad_using_get(pad_id=pad_id)

returns an array of authors who contributed to this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_authors_of_pad_using_get200_response import ListAuthorsOfPadUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns an array of authors who contributed to this pad
        api_response = api_instance.list_authors_of_pad_using_get(pad_id=pad_id)
        print("The response of PadApi->list_authors_of_pad_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->list_authors_of_pad_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**ListAuthorsOfPadUsingGET200Response**](ListAuthorsOfPadUsingGET200Response.md)

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

# **list_authors_of_pad_using_post**
> ListAuthorsOfPadUsingGET200Response list_authors_of_pad_using_post(pad_id=pad_id)

returns an array of authors who contributed to this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_authors_of_pad_using_get200_response import ListAuthorsOfPadUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns an array of authors who contributed to this pad
        api_response = api_instance.list_authors_of_pad_using_post(pad_id=pad_id)
        print("The response of PadApi->list_authors_of_pad_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->list_authors_of_pad_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**ListAuthorsOfPadUsingGET200Response**](ListAuthorsOfPadUsingGET200Response.md)

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

# **pad_users_count_using_get**
> PadUsersCountUsingGET200Response pad_users_count_using_get(pad_id=pad_id)

returns the number of user that are currently editing this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.pad_users_count_using_get200_response import PadUsersCountUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the number of user that are currently editing this pad
        api_response = api_instance.pad_users_count_using_get(pad_id=pad_id)
        print("The response of PadApi->pad_users_count_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->pad_users_count_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**PadUsersCountUsingGET200Response**](PadUsersCountUsingGET200Response.md)

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

# **pad_users_count_using_post**
> PadUsersCountUsingGET200Response pad_users_count_using_post(pad_id=pad_id)

returns the number of user that are currently editing this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.pad_users_count_using_get200_response import PadUsersCountUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the number of user that are currently editing this pad
        api_response = api_instance.pad_users_count_using_post(pad_id=pad_id)
        print("The response of PadApi->pad_users_count_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->pad_users_count_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**PadUsersCountUsingGET200Response**](PadUsersCountUsingGET200Response.md)

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

# **pad_users_using_get**
> PadUsersUsingGET200Response pad_users_using_get(pad_id=pad_id)

returns the list of users that are currently editing this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.pad_users_using_get200_response import PadUsersUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the list of users that are currently editing this pad
        api_response = api_instance.pad_users_using_get(pad_id=pad_id)
        print("The response of PadApi->pad_users_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->pad_users_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**PadUsersUsingGET200Response**](PadUsersUsingGET200Response.md)

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

# **pad_users_using_post**
> PadUsersUsingGET200Response pad_users_using_post(pad_id=pad_id)

returns the list of users that are currently editing this pad

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.pad_users_using_get200_response import PadUsersUsingGET200Response
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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        # returns the list of users that are currently editing this pad
        api_response = api_instance.pad_users_using_post(pad_id=pad_id)
        print("The response of PadApi->pad_users_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->pad_users_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 

### Return type

[**PadUsersUsingGET200Response**](PadUsersUsingGET200Response.md)

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

# **send_clients_message_using_get**
> AppendChatMessageUsingGET200Response send_clients_message_using_get(pad_id=pad_id, msg=msg)

sends a custom message of type msg to the pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    msg = 'msg_example' # str |  (optional)

    try:
        # sends a custom message of type msg to the pad
        api_response = api_instance.send_clients_message_using_get(pad_id=pad_id, msg=msg)
        print("The response of PadApi->send_clients_message_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->send_clients_message_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **msg** | **str**|  | [optional] 

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

# **send_clients_message_using_post**
> AppendChatMessageUsingGET200Response send_clients_message_using_post(pad_id=pad_id, msg=msg)

sends a custom message of type msg to the pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    msg = 'msg_example' # str |  (optional)

    try:
        # sends a custom message of type msg to the pad
        api_response = api_instance.send_clients_message_using_post(pad_id=pad_id, msg=msg)
        print("The response of PadApi->send_clients_message_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->send_clients_message_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **msg** | **str**|  | [optional] 

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

# **set_html_using_get**
> AppendChatMessageUsingGET200Response set_html_using_get(pad_id=pad_id, html=html)

sets the text of a pad with HTML

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    html = 'html_example' # str |  (optional)

    try:
        # sets the text of a pad with HTML
        api_response = api_instance.set_html_using_get(pad_id=pad_id, html=html)
        print("The response of PadApi->set_html_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->set_html_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **html** | **str**|  | [optional] 

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

# **set_html_using_post**
> AppendChatMessageUsingGET200Response set_html_using_post(pad_id=pad_id, html=html)

sets the text of a pad with HTML

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    html = 'html_example' # str |  (optional)

    try:
        # sets the text of a pad with HTML
        api_response = api_instance.set_html_using_post(pad_id=pad_id, html=html)
        print("The response of PadApi->set_html_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->set_html_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **html** | **str**|  | [optional] 

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

# **set_public_status_using_get**
> AppendChatMessageUsingGET200Response set_public_status_using_get(pad_id=pad_id, public_status=public_status)

sets a boolean for the public status of a pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    public_status = 'public_status_example' # str |  (optional)

    try:
        # sets a boolean for the public status of a pad
        api_response = api_instance.set_public_status_using_get(pad_id=pad_id, public_status=public_status)
        print("The response of PadApi->set_public_status_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->set_public_status_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **public_status** | **str**|  | [optional] 

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

# **set_public_status_using_post**
> AppendChatMessageUsingGET200Response set_public_status_using_post(pad_id=pad_id, public_status=public_status)

sets a boolean for the public status of a pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    public_status = 'public_status_example' # str |  (optional)

    try:
        # sets a boolean for the public status of a pad
        api_response = api_instance.set_public_status_using_post(pad_id=pad_id, public_status=public_status)
        print("The response of PadApi->set_public_status_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->set_public_status_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **public_status** | **str**|  | [optional] 

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

# **set_text_using_get**
> AppendChatMessageUsingGET200Response set_text_using_get(pad_id=pad_id, text=text)

sets the text of a pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        # sets the text of a pad
        api_response = api_instance.set_text_using_get(pad_id=pad_id, text=text)
        print("The response of PadApi->set_text_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->set_text_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **text** | **str**|  | [optional] 

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

# **set_text_using_post**
> AppendChatMessageUsingGET200Response set_text_using_post(pad_id=pad_id, text=text)

sets the text of a pad

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
    api_instance = openapi_client.PadApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        # sets the text of a pad
        api_response = api_instance.set_text_using_post(pad_id=pad_id, text=text)
        print("The response of PadApi->set_text_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PadApi->set_text_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **text** | **str**|  | [optional] 

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

