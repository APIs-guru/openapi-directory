# openapi_client.DpsMessageApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_dps_message**](DpsMessageApi.md#delete_dps_message) | **DELETE** /Employer/{EmployerId}/DpsMessage/{DpsMessageId} | Deletes the DPS message
[**get_dps_message_from_employer**](DpsMessageApi.md#get_dps_message_from_employer) | **GET** /Employer/{EmployerId}/DpsMessage/{DpsMessageId} | Gets the DPS message
[**get_dps_messages_from_employer**](DpsMessageApi.md#get_dps_messages_from_employer) | **GET** /Employer/{EmployerId}/DpsMessages | Gets the DPS messages
[**patch_dps_message**](DpsMessageApi.md#patch_dps_message) | **PATCH** /Employer/{EmployerId}/DpsMessage/{DpsMessageId} | Patches the DPS message
[**post_dps_message**](DpsMessageApi.md#post_dps_message) | **POST** /Employer/{EmployerId}/DpsMessages | Posta the DPS message
[**put_dps_message**](DpsMessageApi.md#put_dps_message) | **PUT** /Employer/{EmployerId}/DpsMessage/{DpsMessageId} | Puts the DPS message


# **delete_dps_message**
> delete_dps_message(employer_id, dps_message_id, authorization, api_version)

Deletes the DPS message

Deletes the DPS message

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DpsMessageApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    dps_message_id = 'dps_message_id_example' # str | The DPS message unique identifier. E.g. DPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes the DPS message
        api_instance.delete_dps_message(employer_id, dps_message_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling DpsMessageApi->delete_dps_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **dps_message_id** | **str**| The DPS message unique identifier. E.g. DPS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dps_message_from_employer**
> DpsMessage get_dps_message_from_employer(employer_id, dps_message_id, authorization, api_version)

Gets the DPS message

Gets the DPS message

### Example


```python
import openapi_client
from openapi_client.models.dps_message import DpsMessage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DpsMessageApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    dps_message_id = 'dps_message_id_example' # str | The DPS message unique identifier. E.g. DPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the DPS message
        api_response = api_instance.get_dps_message_from_employer(employer_id, dps_message_id, authorization, api_version)
        print("The response of DpsMessageApi->get_dps_message_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DpsMessageApi->get_dps_message_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **dps_message_id** | **str**| The DPS message unique identifier. E.g. DPS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**DpsMessage**](DpsMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The dps message object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dps_messages_from_employer**
> LinkCollection get_dps_messages_from_employer(employer_id, authorization, api_version)

Gets the DPS messages

Gets the DPS message links

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DpsMessageApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the DPS messages
        api_response = api_instance.get_dps_messages_from_employer(employer_id, authorization, api_version)
        print("The response of DpsMessageApi->get_dps_messages_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DpsMessageApi->get_dps_messages_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_dps_message**
> DpsMessage patch_dps_message(employer_id, dps_message_id, authorization, api_version)

Patches the DPS message

Patches the specified DPS message with the supplied values

### Example


```python
import openapi_client
from openapi_client.models.dps_message import DpsMessage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DpsMessageApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    dps_message_id = 'dps_message_id_example' # str | The DPS message unique identifier. E.g. DPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Patches the DPS message
        api_response = api_instance.patch_dps_message(employer_id, dps_message_id, authorization, api_version)
        print("The response of DpsMessageApi->patch_dps_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DpsMessageApi->patch_dps_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **dps_message_id** | **str**| The DPS message unique identifier. E.g. DPS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**DpsMessage**](DpsMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The dps message object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_dps_message**
> Link post_dps_message(employer_id, authorization, api_version)

Posta the DPS message

Insert new DPS message

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DpsMessageApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Posta the DPS message
        api_response = api_instance.post_dps_message(employer_id, authorization, api_version)
        print("The response of DpsMessageApi->post_dps_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DpsMessageApi->post_dps_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_dps_message**
> DpsMessage put_dps_message(employer_id, dps_message_id, authorization, api_version)

Puts the DPS message

Puts the DPS message

### Example


```python
import openapi_client
from openapi_client.models.dps_message import DpsMessage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DpsMessageApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    dps_message_id = 'dps_message_id_example' # str | The DPS message unique identifier. E.g. DPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Puts the DPS message
        api_response = api_instance.put_dps_message(employer_id, dps_message_id, authorization, api_version)
        print("The response of DpsMessageApi->put_dps_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DpsMessageApi->put_dps_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **dps_message_id** | **str**| The DPS message unique identifier. E.g. DPS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**DpsMessage**](DpsMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The dps message object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

