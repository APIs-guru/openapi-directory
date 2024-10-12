# openapi_client.DefaultApi

All URIs are relative to *http://etherpad.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**append_text_using_get**](DefaultApi.md#append_text_using_get) | **GET** /appendText | 
[**append_text_using_post**](DefaultApi.md#append_text_using_post) | **POST** /appendText | 
[**copy_pad_using_get**](DefaultApi.md#copy_pad_using_get) | **GET** /copyPad | 
[**copy_pad_using_post**](DefaultApi.md#copy_pad_using_post) | **POST** /copyPad | 
[**copy_pad_without_history_using_get**](DefaultApi.md#copy_pad_without_history_using_get) | **GET** /copyPadWithoutHistory | 
[**copy_pad_without_history_using_post**](DefaultApi.md#copy_pad_without_history_using_post) | **POST** /copyPadWithoutHistory | 
[**get_attribute_pool_using_get**](DefaultApi.md#get_attribute_pool_using_get) | **GET** /getAttributePool | 
[**get_attribute_pool_using_post**](DefaultApi.md#get_attribute_pool_using_post) | **POST** /getAttributePool | 
[**get_pad_id_using_get**](DefaultApi.md#get_pad_id_using_get) | **GET** /getPadID | 
[**get_pad_id_using_post**](DefaultApi.md#get_pad_id_using_post) | **POST** /getPadID | 
[**get_revision_changeset_using_get**](DefaultApi.md#get_revision_changeset_using_get) | **GET** /getRevisionChangeset | 
[**get_revision_changeset_using_post**](DefaultApi.md#get_revision_changeset_using_post) | **POST** /getRevisionChangeset | 
[**get_saved_revisions_count_using_get**](DefaultApi.md#get_saved_revisions_count_using_get) | **GET** /getSavedRevisionsCount | 
[**get_saved_revisions_count_using_post**](DefaultApi.md#get_saved_revisions_count_using_post) | **POST** /getSavedRevisionsCount | 
[**get_stats_using_get**](DefaultApi.md#get_stats_using_get) | **GET** /getStats | 
[**get_stats_using_post**](DefaultApi.md#get_stats_using_post) | **POST** /getStats | 
[**list_saved_revisions_using_get**](DefaultApi.md#list_saved_revisions_using_get) | **GET** /listSavedRevisions | 
[**list_saved_revisions_using_post**](DefaultApi.md#list_saved_revisions_using_post) | **POST** /listSavedRevisions | 
[**move_pad_using_get**](DefaultApi.md#move_pad_using_get) | **GET** /movePad | 
[**move_pad_using_post**](DefaultApi.md#move_pad_using_post) | **POST** /movePad | 
[**restore_revision_using_get**](DefaultApi.md#restore_revision_using_get) | **GET** /restoreRevision | 
[**restore_revision_using_post**](DefaultApi.md#restore_revision_using_post) | **POST** /restoreRevision | 
[**save_revision_using_get**](DefaultApi.md#save_revision_using_get) | **GET** /saveRevision | 
[**save_revision_using_post**](DefaultApi.md#save_revision_using_post) | **POST** /saveRevision | 


# **append_text_using_get**
> AppendChatMessageUsingGET200Response append_text_using_get(pad_id=pad_id, text=text)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        api_response = api_instance.append_text_using_get(pad_id=pad_id, text=text)
        print("The response of DefaultApi->append_text_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->append_text_using_get: %s\n" % e)
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

# **append_text_using_post**
> AppendChatMessageUsingGET200Response append_text_using_post(pad_id=pad_id, text=text)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        api_response = api_instance.append_text_using_post(pad_id=pad_id, text=text)
        print("The response of DefaultApi->append_text_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->append_text_using_post: %s\n" % e)
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

# **copy_pad_using_get**
> AppendChatMessageUsingGET200Response copy_pad_using_get(source_id=source_id, destination_id=destination_id, force=force)



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
    api_instance = openapi_client.DefaultApi(api_client)
    source_id = 'source_id_example' # str |  (optional)
    destination_id = 'destination_id_example' # str |  (optional)
    force = 'force_example' # str |  (optional)

    try:
        api_response = api_instance.copy_pad_using_get(source_id=source_id, destination_id=destination_id, force=force)
        print("The response of DefaultApi->copy_pad_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->copy_pad_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**|  | [optional] 
 **destination_id** | **str**|  | [optional] 
 **force** | **str**|  | [optional] 

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

# **copy_pad_using_post**
> AppendChatMessageUsingGET200Response copy_pad_using_post(source_id=source_id, destination_id=destination_id, force=force)



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
    api_instance = openapi_client.DefaultApi(api_client)
    source_id = 'source_id_example' # str |  (optional)
    destination_id = 'destination_id_example' # str |  (optional)
    force = 'force_example' # str |  (optional)

    try:
        api_response = api_instance.copy_pad_using_post(source_id=source_id, destination_id=destination_id, force=force)
        print("The response of DefaultApi->copy_pad_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->copy_pad_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**|  | [optional] 
 **destination_id** | **str**|  | [optional] 
 **force** | **str**|  | [optional] 

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

# **copy_pad_without_history_using_get**
> AppendChatMessageUsingGET200Response copy_pad_without_history_using_get(source_id=source_id, destination_id=destination_id, force=force)



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
    api_instance = openapi_client.DefaultApi(api_client)
    source_id = 'source_id_example' # str |  (optional)
    destination_id = 'destination_id_example' # str |  (optional)
    force = 'force_example' # str |  (optional)

    try:
        api_response = api_instance.copy_pad_without_history_using_get(source_id=source_id, destination_id=destination_id, force=force)
        print("The response of DefaultApi->copy_pad_without_history_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->copy_pad_without_history_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**|  | [optional] 
 **destination_id** | **str**|  | [optional] 
 **force** | **str**|  | [optional] 

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

# **copy_pad_without_history_using_post**
> AppendChatMessageUsingGET200Response copy_pad_without_history_using_post(source_id=source_id, destination_id=destination_id, force=force)



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
    api_instance = openapi_client.DefaultApi(api_client)
    source_id = 'source_id_example' # str |  (optional)
    destination_id = 'destination_id_example' # str |  (optional)
    force = 'force_example' # str |  (optional)

    try:
        api_response = api_instance.copy_pad_without_history_using_post(source_id=source_id, destination_id=destination_id, force=force)
        print("The response of DefaultApi->copy_pad_without_history_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->copy_pad_without_history_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**|  | [optional] 
 **destination_id** | **str**|  | [optional] 
 **force** | **str**|  | [optional] 

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

# **get_attribute_pool_using_get**
> AppendChatMessageUsingGET200Response get_attribute_pool_using_get(pad_id=pad_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_attribute_pool_using_get(pad_id=pad_id)
        print("The response of DefaultApi->get_attribute_pool_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_attribute_pool_using_get: %s\n" % e)
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

# **get_attribute_pool_using_post**
> AppendChatMessageUsingGET200Response get_attribute_pool_using_post(pad_id=pad_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_attribute_pool_using_post(pad_id=pad_id)
        print("The response of DefaultApi->get_attribute_pool_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_attribute_pool_using_post: %s\n" % e)
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

# **get_pad_id_using_get**
> AppendChatMessageUsingGET200Response get_pad_id_using_get(ro_id=ro_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    ro_id = 'ro_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_pad_id_using_get(ro_id=ro_id)
        print("The response of DefaultApi->get_pad_id_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_pad_id_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ro_id** | **str**|  | [optional] 

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

# **get_pad_id_using_post**
> AppendChatMessageUsingGET200Response get_pad_id_using_post(ro_id=ro_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    ro_id = 'ro_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_pad_id_using_post(ro_id=ro_id)
        print("The response of DefaultApi->get_pad_id_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_pad_id_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ro_id** | **str**|  | [optional] 

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

# **get_revision_changeset_using_get**
> AppendChatMessageUsingGET200Response get_revision_changeset_using_get(pad_id=pad_id, rev=rev)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        api_response = api_instance.get_revision_changeset_using_get(pad_id=pad_id, rev=rev)
        print("The response of DefaultApi->get_revision_changeset_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_revision_changeset_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

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

# **get_revision_changeset_using_post**
> AppendChatMessageUsingGET200Response get_revision_changeset_using_post(pad_id=pad_id, rev=rev)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        api_response = api_instance.get_revision_changeset_using_post(pad_id=pad_id, rev=rev)
        print("The response of DefaultApi->get_revision_changeset_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_revision_changeset_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

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

# **get_saved_revisions_count_using_get**
> AppendChatMessageUsingGET200Response get_saved_revisions_count_using_get(pad_id=pad_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_saved_revisions_count_using_get(pad_id=pad_id)
        print("The response of DefaultApi->get_saved_revisions_count_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_saved_revisions_count_using_get: %s\n" % e)
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

# **get_saved_revisions_count_using_post**
> AppendChatMessageUsingGET200Response get_saved_revisions_count_using_post(pad_id=pad_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        api_response = api_instance.get_saved_revisions_count_using_post(pad_id=pad_id)
        print("The response of DefaultApi->get_saved_revisions_count_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_saved_revisions_count_using_post: %s\n" % e)
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

# **get_stats_using_get**
> AppendChatMessageUsingGET200Response get_stats_using_get()



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
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.get_stats_using_get()
        print("The response of DefaultApi->get_stats_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_stats_using_get: %s\n" % e)
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

# **get_stats_using_post**
> AppendChatMessageUsingGET200Response get_stats_using_post()



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
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        api_response = api_instance.get_stats_using_post()
        print("The response of DefaultApi->get_stats_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_stats_using_post: %s\n" % e)
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

# **list_saved_revisions_using_get**
> AppendChatMessageUsingGET200Response list_saved_revisions_using_get(pad_id=pad_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        api_response = api_instance.list_saved_revisions_using_get(pad_id=pad_id)
        print("The response of DefaultApi->list_saved_revisions_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_saved_revisions_using_get: %s\n" % e)
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

# **list_saved_revisions_using_post**
> AppendChatMessageUsingGET200Response list_saved_revisions_using_post(pad_id=pad_id)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)

    try:
        api_response = api_instance.list_saved_revisions_using_post(pad_id=pad_id)
        print("The response of DefaultApi->list_saved_revisions_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_saved_revisions_using_post: %s\n" % e)
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

# **move_pad_using_get**
> AppendChatMessageUsingGET200Response move_pad_using_get(source_id=source_id, destination_id=destination_id, force=force)



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
    api_instance = openapi_client.DefaultApi(api_client)
    source_id = 'source_id_example' # str |  (optional)
    destination_id = 'destination_id_example' # str |  (optional)
    force = 'force_example' # str |  (optional)

    try:
        api_response = api_instance.move_pad_using_get(source_id=source_id, destination_id=destination_id, force=force)
        print("The response of DefaultApi->move_pad_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->move_pad_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**|  | [optional] 
 **destination_id** | **str**|  | [optional] 
 **force** | **str**|  | [optional] 

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

# **move_pad_using_post**
> AppendChatMessageUsingGET200Response move_pad_using_post(source_id=source_id, destination_id=destination_id, force=force)



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
    api_instance = openapi_client.DefaultApi(api_client)
    source_id = 'source_id_example' # str |  (optional)
    destination_id = 'destination_id_example' # str |  (optional)
    force = 'force_example' # str |  (optional)

    try:
        api_response = api_instance.move_pad_using_post(source_id=source_id, destination_id=destination_id, force=force)
        print("The response of DefaultApi->move_pad_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->move_pad_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_id** | **str**|  | [optional] 
 **destination_id** | **str**|  | [optional] 
 **force** | **str**|  | [optional] 

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

# **restore_revision_using_get**
> AppendChatMessageUsingGET200Response restore_revision_using_get(pad_id=pad_id, rev=rev)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        api_response = api_instance.restore_revision_using_get(pad_id=pad_id, rev=rev)
        print("The response of DefaultApi->restore_revision_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->restore_revision_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

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

# **restore_revision_using_post**
> AppendChatMessageUsingGET200Response restore_revision_using_post(pad_id=pad_id, rev=rev)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        api_response = api_instance.restore_revision_using_post(pad_id=pad_id, rev=rev)
        print("The response of DefaultApi->restore_revision_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->restore_revision_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

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

# **save_revision_using_get**
> AppendChatMessageUsingGET200Response save_revision_using_get(pad_id=pad_id, rev=rev)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        api_response = api_instance.save_revision_using_get(pad_id=pad_id, rev=rev)
        print("The response of DefaultApi->save_revision_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->save_revision_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

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

# **save_revision_using_post**
> AppendChatMessageUsingGET200Response save_revision_using_post(pad_id=pad_id, rev=rev)



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
    api_instance = openapi_client.DefaultApi(api_client)
    pad_id = 'pad_id_example' # str |  (optional)
    rev = 'rev_example' # str |  (optional)

    try:
        api_response = api_instance.save_revision_using_post(pad_id=pad_id, rev=rev)
        print("The response of DefaultApi->save_revision_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->save_revision_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pad_id** | **str**|  | [optional] 
 **rev** | **str**|  | [optional] 

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

