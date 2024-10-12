# openapi_client.AuthorApi

All URIs are relative to *http://etherpad.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_author_if_not_exists_for_using_get**](AuthorApi.md#create_author_if_not_exists_for_using_get) | **GET** /createAuthorIfNotExistsFor | this functions helps you to map your application author ids to Etherpad author ids
[**create_author_if_not_exists_for_using_post**](AuthorApi.md#create_author_if_not_exists_for_using_post) | **POST** /createAuthorIfNotExistsFor | this functions helps you to map your application author ids to Etherpad author ids
[**create_author_using_get**](AuthorApi.md#create_author_using_get) | **GET** /createAuthor | creates a new author
[**create_author_using_post**](AuthorApi.md#create_author_using_post) | **POST** /createAuthor | creates a new author
[**get_author_name_using_get**](AuthorApi.md#get_author_name_using_get) | **GET** /getAuthorName | Returns the Author Name of the author
[**get_author_name_using_post**](AuthorApi.md#get_author_name_using_post) | **POST** /getAuthorName | Returns the Author Name of the author
[**list_pads_of_author_using_get**](AuthorApi.md#list_pads_of_author_using_get) | **GET** /listPadsOfAuthor | returns an array of all pads this author contributed to
[**list_pads_of_author_using_post**](AuthorApi.md#list_pads_of_author_using_post) | **POST** /listPadsOfAuthor | returns an array of all pads this author contributed to
[**list_sessions_of_author_using_get**](AuthorApi.md#list_sessions_of_author_using_get) | **GET** /listSessionsOfAuthor | returns all sessions of an author
[**list_sessions_of_author_using_post**](AuthorApi.md#list_sessions_of_author_using_post) | **POST** /listSessionsOfAuthor | returns all sessions of an author


# **create_author_if_not_exists_for_using_get**
> CreateAuthorUsingGET200Response create_author_if_not_exists_for_using_get(author_mapper=author_mapper, name=name)

this functions helps you to map your application author ids to Etherpad author ids

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_author_using_get200_response import CreateAuthorUsingGET200Response
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
    api_instance = openapi_client.AuthorApi(api_client)
    author_mapper = 'author_mapper_example' # str |  (optional)
    name = 'name_example' # str |  (optional)

    try:
        # this functions helps you to map your application author ids to Etherpad author ids
        api_response = api_instance.create_author_if_not_exists_for_using_get(author_mapper=author_mapper, name=name)
        print("The response of AuthorApi->create_author_if_not_exists_for_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->create_author_if_not_exists_for_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_mapper** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 

### Return type

[**CreateAuthorUsingGET200Response**](CreateAuthorUsingGET200Response.md)

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

# **create_author_if_not_exists_for_using_post**
> CreateAuthorUsingGET200Response create_author_if_not_exists_for_using_post(author_mapper=author_mapper, name=name)

this functions helps you to map your application author ids to Etherpad author ids

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_author_using_get200_response import CreateAuthorUsingGET200Response
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
    api_instance = openapi_client.AuthorApi(api_client)
    author_mapper = 'author_mapper_example' # str |  (optional)
    name = 'name_example' # str |  (optional)

    try:
        # this functions helps you to map your application author ids to Etherpad author ids
        api_response = api_instance.create_author_if_not_exists_for_using_post(author_mapper=author_mapper, name=name)
        print("The response of AuthorApi->create_author_if_not_exists_for_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->create_author_if_not_exists_for_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_mapper** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 

### Return type

[**CreateAuthorUsingGET200Response**](CreateAuthorUsingGET200Response.md)

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

# **create_author_using_get**
> CreateAuthorUsingGET200Response create_author_using_get(name=name)

creates a new author

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_author_using_get200_response import CreateAuthorUsingGET200Response
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
    api_instance = openapi_client.AuthorApi(api_client)
    name = 'name_example' # str |  (optional)

    try:
        # creates a new author
        api_response = api_instance.create_author_using_get(name=name)
        print("The response of AuthorApi->create_author_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->create_author_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | [optional] 

### Return type

[**CreateAuthorUsingGET200Response**](CreateAuthorUsingGET200Response.md)

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

# **create_author_using_post**
> CreateAuthorUsingGET200Response create_author_using_post(name=name)

creates a new author

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.create_author_using_get200_response import CreateAuthorUsingGET200Response
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
    api_instance = openapi_client.AuthorApi(api_client)
    name = 'name_example' # str |  (optional)

    try:
        # creates a new author
        api_response = api_instance.create_author_using_post(name=name)
        print("The response of AuthorApi->create_author_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->create_author_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**|  | [optional] 

### Return type

[**CreateAuthorUsingGET200Response**](CreateAuthorUsingGET200Response.md)

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

# **get_author_name_using_get**
> GetAuthorNameUsingGET200Response get_author_name_using_get(author_id=author_id)

Returns the Author Name of the author

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_author_name_using_get200_response import GetAuthorNameUsingGET200Response
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
    api_instance = openapi_client.AuthorApi(api_client)
    author_id = 'author_id_example' # str |  (optional)

    try:
        # Returns the Author Name of the author
        api_response = api_instance.get_author_name_using_get(author_id=author_id)
        print("The response of AuthorApi->get_author_name_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->get_author_name_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**|  | [optional] 

### Return type

[**GetAuthorNameUsingGET200Response**](GetAuthorNameUsingGET200Response.md)

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

# **get_author_name_using_post**
> GetAuthorNameUsingGET200Response get_author_name_using_post(author_id=author_id)

Returns the Author Name of the author

### Example

* Api Key Authentication (ApiKey):

```python
import openapi_client
from openapi_client.models.get_author_name_using_get200_response import GetAuthorNameUsingGET200Response
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
    api_instance = openapi_client.AuthorApi(api_client)
    author_id = 'author_id_example' # str |  (optional)

    try:
        # Returns the Author Name of the author
        api_response = api_instance.get_author_name_using_post(author_id=author_id)
        print("The response of AuthorApi->get_author_name_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->get_author_name_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**|  | [optional] 

### Return type

[**GetAuthorNameUsingGET200Response**](GetAuthorNameUsingGET200Response.md)

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

# **list_pads_of_author_using_get**
> ListAllPadsUsingGET200Response list_pads_of_author_using_get(author_id=author_id)

returns an array of all pads this author contributed to

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
    api_instance = openapi_client.AuthorApi(api_client)
    author_id = 'author_id_example' # str |  (optional)

    try:
        # returns an array of all pads this author contributed to
        api_response = api_instance.list_pads_of_author_using_get(author_id=author_id)
        print("The response of AuthorApi->list_pads_of_author_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->list_pads_of_author_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**|  | [optional] 

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

# **list_pads_of_author_using_post**
> ListAllPadsUsingGET200Response list_pads_of_author_using_post(author_id=author_id)

returns an array of all pads this author contributed to

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
    api_instance = openapi_client.AuthorApi(api_client)
    author_id = 'author_id_example' # str |  (optional)

    try:
        # returns an array of all pads this author contributed to
        api_response = api_instance.list_pads_of_author_using_post(author_id=author_id)
        print("The response of AuthorApi->list_pads_of_author_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->list_pads_of_author_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**|  | [optional] 

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

# **list_sessions_of_author_using_get**
> ListSessionsOfAuthorUsingGET200Response list_sessions_of_author_using_get(author_id=author_id)

returns all sessions of an author

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
    api_instance = openapi_client.AuthorApi(api_client)
    author_id = 'author_id_example' # str |  (optional)

    try:
        # returns all sessions of an author
        api_response = api_instance.list_sessions_of_author_using_get(author_id=author_id)
        print("The response of AuthorApi->list_sessions_of_author_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->list_sessions_of_author_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**|  | [optional] 

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

# **list_sessions_of_author_using_post**
> ListSessionsOfAuthorUsingGET200Response list_sessions_of_author_using_post(author_id=author_id)

returns all sessions of an author

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
    api_instance = openapi_client.AuthorApi(api_client)
    author_id = 'author_id_example' # str |  (optional)

    try:
        # returns all sessions of an author
        api_response = api_instance.list_sessions_of_author_using_post(author_id=author_id)
        print("The response of AuthorApi->list_sessions_of_author_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorApi->list_sessions_of_author_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **author_id** | **str**|  | [optional] 

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

