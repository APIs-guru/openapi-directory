# openapi_client.GroupApi

All URIs are relative to *http://etherpad.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_group_if_not_exists_for_using_get**](GroupApi.md#create_group_if_not_exists_for_using_get) | **GET** /createGroupIfNotExistsFor | this functions helps you to map your application group ids to Etherpad group ids
[**create_group_if_not_exists_for_using_post**](GroupApi.md#create_group_if_not_exists_for_using_post) | **POST** /createGroupIfNotExistsFor | this functions helps you to map your application group ids to Etherpad group ids
[**create_group_pad_using_get**](GroupApi.md#create_group_pad_using_get) | **GET** /createGroupPad | creates a new pad in this group
[**create_group_pad_using_post**](GroupApi.md#create_group_pad_using_post) | **POST** /createGroupPad | creates a new pad in this group
[**create_group_using_get**](GroupApi.md#create_group_using_get) | **GET** /createGroup | creates a new group
[**create_group_using_post**](GroupApi.md#create_group_using_post) | **POST** /createGroup | creates a new group
[**delete_group_using_get**](GroupApi.md#delete_group_using_get) | **GET** /deleteGroup | deletes a group
[**delete_group_using_post**](GroupApi.md#delete_group_using_post) | **POST** /deleteGroup | deletes a group
[**list_all_groups_using_get**](GroupApi.md#list_all_groups_using_get) | **GET** /listAllGroups | 
[**list_all_groups_using_post**](GroupApi.md#list_all_groups_using_post) | **POST** /listAllGroups | 
[**list_pads_using_get**](GroupApi.md#list_pads_using_get) | **GET** /listPads | returns all pads of this group
[**list_pads_using_post**](GroupApi.md#list_pads_using_post) | **POST** /listPads | returns all pads of this group
[**list_sessions_of_group_using_get**](GroupApi.md#list_sessions_of_group_using_get) | **GET** /listSessionsOfGroup | 
[**list_sessions_of_group_using_post**](GroupApi.md#list_sessions_of_group_using_post) | **POST** /listSessionsOfGroup | 


# **create_group_if_not_exists_for_using_get**
> CreateGroupUsingGET200Response create_group_if_not_exists_for_using_get(group_mapper=group_mapper)

this functions helps you to map your application group ids to Etherpad group ids

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_group_using_get200_response import CreateGroupUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)
    group_mapper = 'group_mapper_example' # str |  (optional)

    try:
        # this functions helps you to map your application group ids to Etherpad group ids
        api_response = api_instance.create_group_if_not_exists_for_using_get(group_mapper=group_mapper)
        print("The response of GroupApi->create_group_if_not_exists_for_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group_if_not_exists_for_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_mapper** | **str**|  | [optional] 

### Return type

[**CreateGroupUsingGET200Response**](CreateGroupUsingGET200Response.md)

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

# **create_group_if_not_exists_for_using_post**
> CreateGroupUsingGET200Response create_group_if_not_exists_for_using_post(group_mapper=group_mapper)

this functions helps you to map your application group ids to Etherpad group ids

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_group_using_get200_response import CreateGroupUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)
    group_mapper = 'group_mapper_example' # str |  (optional)

    try:
        # this functions helps you to map your application group ids to Etherpad group ids
        api_response = api_instance.create_group_if_not_exists_for_using_post(group_mapper=group_mapper)
        print("The response of GroupApi->create_group_if_not_exists_for_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group_if_not_exists_for_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_mapper** | **str**|  | [optional] 

### Return type

[**CreateGroupUsingGET200Response**](CreateGroupUsingGET200Response.md)

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

# **create_group_pad_using_get**
> AppendChatMessageUsingGET200Response create_group_pad_using_get(group_id=group_id, pad_name=pad_name, text=text)

creates a new pad in this group

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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)
    pad_name = 'pad_name_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        # creates a new pad in this group
        api_response = api_instance.create_group_pad_using_get(group_id=group_id, pad_name=pad_name, text=text)
        print("The response of GroupApi->create_group_pad_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group_pad_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 
 **pad_name** | **str**|  | [optional] 
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

# **create_group_pad_using_post**
> AppendChatMessageUsingGET200Response create_group_pad_using_post(group_id=group_id, pad_name=pad_name, text=text)

creates a new pad in this group

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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)
    pad_name = 'pad_name_example' # str |  (optional)
    text = 'text_example' # str |  (optional)

    try:
        # creates a new pad in this group
        api_response = api_instance.create_group_pad_using_post(group_id=group_id, pad_name=pad_name, text=text)
        print("The response of GroupApi->create_group_pad_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group_pad_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 
 **pad_name** | **str**|  | [optional] 
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

# **create_group_using_get**
> CreateGroupUsingGET200Response create_group_using_get()

creates a new group

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_group_using_get200_response import CreateGroupUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)

    try:
        # creates a new group
        api_response = api_instance.create_group_using_get()
        print("The response of GroupApi->create_group_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CreateGroupUsingGET200Response**](CreateGroupUsingGET200Response.md)

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

# **create_group_using_post**
> CreateGroupUsingGET200Response create_group_using_post()

creates a new group

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_group_using_get200_response import CreateGroupUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)

    try:
        # creates a new group
        api_response = api_instance.create_group_using_post()
        print("The response of GroupApi->create_group_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->create_group_using_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**CreateGroupUsingGET200Response**](CreateGroupUsingGET200Response.md)

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

# **delete_group_using_get**
> AppendChatMessageUsingGET200Response delete_group_using_get(group_id=group_id)

deletes a group

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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)

    try:
        # deletes a group
        api_response = api_instance.delete_group_using_get(group_id=group_id)
        print("The response of GroupApi->delete_group_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->delete_group_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 

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

# **delete_group_using_post**
> AppendChatMessageUsingGET200Response delete_group_using_post(group_id=group_id)

deletes a group

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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)

    try:
        # deletes a group
        api_response = api_instance.delete_group_using_post(group_id=group_id)
        print("The response of GroupApi->delete_group_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->delete_group_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 

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

# **list_all_groups_using_get**
> ListAllGroupsUsingGET200Response list_all_groups_using_get()



### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_all_groups_using_get200_response import ListAllGroupsUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)

    try:
        # 
        api_response = api_instance.list_all_groups_using_get()
        print("The response of GroupApi->list_all_groups_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_all_groups_using_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAllGroupsUsingGET200Response**](ListAllGroupsUsingGET200Response.md)

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

# **list_all_groups_using_post**
> ListAllGroupsUsingGET200Response list_all_groups_using_post()



### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_all_groups_using_get200_response import ListAllGroupsUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)

    try:
        # 
        api_response = api_instance.list_all_groups_using_post()
        print("The response of GroupApi->list_all_groups_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_all_groups_using_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListAllGroupsUsingGET200Response**](ListAllGroupsUsingGET200Response.md)

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

# **list_pads_using_get**
> ListAllPadsUsingGET200Response list_pads_using_get(group_id=group_id)

returns all pads of this group

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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)

    try:
        # returns all pads of this group
        api_response = api_instance.list_pads_using_get(group_id=group_id)
        print("The response of GroupApi->list_pads_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_pads_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 

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

# **list_pads_using_post**
> ListAllPadsUsingGET200Response list_pads_using_post(group_id=group_id)

returns all pads of this group

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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)

    try:
        # returns all pads of this group
        api_response = api_instance.list_pads_using_post(group_id=group_id)
        print("The response of GroupApi->list_pads_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_pads_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 

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

# **list_sessions_of_group_using_get**
> ListSessionsOfAuthorUsingGET200Response list_sessions_of_group_using_get(group_id=group_id)



### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_sessions_of_author_using_get200_response import ListSessionsOfAuthorUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)

    try:
        # 
        api_response = api_instance.list_sessions_of_group_using_get(group_id=group_id)
        print("The response of GroupApi->list_sessions_of_group_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_sessions_of_group_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 

### Return type

[**ListSessionsOfAuthorUsingGET200Response**](ListSessionsOfAuthorUsingGET200Response.md)

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

# **list_sessions_of_group_using_post**
> ListSessionsOfAuthorUsingGET200Response list_sessions_of_group_using_post(group_id=group_id)



### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.list_sessions_of_author_using_get200_response import ListSessionsOfAuthorUsingGET200Response
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
    api_instance = openapi_client.GroupApi(api_client)
    group_id = 'group_id_example' # str |  (optional)

    try:
        # 
        api_response = api_instance.list_sessions_of_group_using_post(group_id=group_id)
        print("The response of GroupApi->list_sessions_of_group_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupApi->list_sessions_of_group_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**|  | [optional] 

### Return type

[**ListSessionsOfAuthorUsingGET200Response**](ListSessionsOfAuthorUsingGET200Response.md)

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

