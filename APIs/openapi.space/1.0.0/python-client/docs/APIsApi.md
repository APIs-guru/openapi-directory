# openapi_client.APIsApi

All URIs are relative to *https://openapi.space/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_api**](APIsApi.md#delete_api) | **DELETE** /apis/{owner}/{api} | Deletes the specified API
[**delete_api_version**](APIsApi.md#delete_api_version) | **DELETE** /apis/{owner}/{api}/{version} | Deletes a particular version of the specified API
[**get_api_versions**](APIsApi.md#get_api_versions) | **GET** /apis/{owner}/{api} | Retrieves an API meta listing for all API versions for this owner and API
[**get_json_definition**](APIsApi.md#get_json_definition) | **GET** /apis/{owner}/{api}/{version}/swagger.json | Retrieves the Swagger definition for the specified API and version in JSON format
[**get_owner_apis**](APIsApi.md#get_owner_apis) | **GET** /apis/{owner} | Retrieves an API meta listing of all APIs defined for this owner
[**get_yaml_definition**](APIsApi.md#get_yaml_definition) | **GET** /apis/{owner}/{api}/{version}/swagger.yaml | Retrieves the Swagger definition for the specified API and version in YAML format
[**publish_api_version**](APIsApi.md#publish_api_version) | **POST** /apis/{owner}/{api}/{version} | Publish a particular version of the specified API
[**save_definition**](APIsApi.md#save_definition) | **POST** /apis/{owner}/{api} | Saves the provided Swagger definition
[**search_apis**](APIsApi.md#search_apis) | **GET** /apis | Retrieves a list of currently defined APIs in API meta list format.


# **delete_api**
> List[APIMeta] delete_api(owner, api)

Deletes the specified API

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.api_meta import APIMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier

    try:
        # Deletes the specified API
        api_response = api_instance.delete_api(owner, api)
        print("The response of APIsApi->delete_api:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->delete_api: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 

### Return type

[**List[APIMeta]**](APIMeta.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the API was successfully deleted |  -  |
**403** | access denied |  -  |
**404** | specified API not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_version**
> APIMeta delete_api_version(owner, api, version)

Deletes a particular version of the specified API

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.api_meta import APIMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier
    version = 'version_example' # str | version identifier

    try:
        # Deletes a particular version of the specified API
        api_response = api_instance.delete_api_version(owner, api, version)
        print("The response of APIsApi->delete_api_version:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->delete_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 
 **version** | **str**| version identifier | 

### Return type

[**APIMeta**](APIMeta.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the API version was successfully deleted |  -  |
**403** | access denied |  -  |
**404** | specified API not found |  -  |
**409** | the API version is the only version of this API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_api_versions**
> List[APIMeta] get_api_versions(owner, api)

Retrieves an API meta listing for all API versions for this owner and API

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.api_meta import APIMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier

    try:
        # Retrieves an API meta listing for all API versions for this owner and API
        api_response = api_instance.get_api_versions(owner, api)
        print("The response of APIsApi->get_api_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_api_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 

### Return type

[**List[APIMeta]**](APIMeta.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of API versions in API meta format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_json_definition**
> object get_json_definition(owner, api, version)

Retrieves the Swagger definition for the specified API and version in JSON format

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier
    version = 'version_example' # str | version identifier

    try:
        # Retrieves the Swagger definition for the specified API and version in JSON format
        api_response = api_instance.get_json_definition(owner, api, version)
        print("The response of APIsApi->get_json_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_json_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 
 **version** | **str**| version identifier | 

### Return type

**object**

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the Swagger API in JSON format |  -  |
**403** | access denied: api is private |  -  |
**404** | specified API not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_owner_apis**
> List[APIMeta] get_owner_apis(owner, sort=sort, order=order)

Retrieves an API meta listing of all APIs defined for this owner

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.api_meta import APIMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    sort = NAME # str | sort criteria or result set * NAME - * UPATED * CREATED * OWNER  (optional) (default to NAME)
    order = ASC # str | sort order (optional) (default to ASC)

    try:
        # Retrieves an API meta listing of all APIs defined for this owner
        api_response = api_instance.get_owner_apis(owner, sort=sort, order=order)
        print("The response of APIsApi->get_owner_apis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_owner_apis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **sort** | **str**| sort criteria or result set * NAME - * UPATED * CREATED * OWNER  | [optional] [default to NAME]
 **order** | **str**| sort order | [optional] [default to ASC]

### Return type

[**List[APIMeta]**](APIMeta.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of APIs in API meta list format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_yaml_definition**
> object get_yaml_definition(owner, api, version)

Retrieves the Swagger definition for the specified API and version in YAML format

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier
    version = 'version_example' # str | version identifier

    try:
        # Retrieves the Swagger definition for the specified API and version in YAML format
        api_response = api_instance.get_yaml_definition(owner, api, version)
        print("The response of APIsApi->get_yaml_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->get_yaml_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 
 **version** | **str**| version identifier | 

### Return type

**object**

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/vnd.yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the Swagger API in YAML format |  -  |
**403** | access denied: api is private |  -  |
**404** | specified API not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publish_api_version**
> publish_api_version(owner, api, version)

Publish a particular version of the specified API

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier
    version = 'version_example' # str | version identifier

    try:
        # Publish a particular version of the specified API
        api_instance.publish_api_version(owner, api, version)
    except Exception as e:
        print("Exception when calling APIsApi->publish_api_version: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 
 **version** | **str**| version identifier | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the API version was successfully published |  -  |
**403** | access denied |  -  |
**404** | specified API not found |  -  |
**409** | the API version is already published |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_definition**
> APIMeta save_definition(owner, api, definition, private=private, force=force)

Saves the provided Swagger definition

Saves the provided Swagger definition; the owner must match the token owner. The version will be extracted from the Swagger definitions itself.

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.api_meta import APIMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    owner = 'owner_example' # str | API owner identifier
    api = 'api_example' # str | API identifier
    definition = None # object | the Swagger definition of this API
    private = False # bool | Defines whether the API has to be private (optional) (default to False)
    force = False # bool | force update (optional) (default to False)

    try:
        # Saves the provided Swagger definition
        api_response = api_instance.save_definition(owner, api, definition, private=private, force=force)
        print("The response of APIsApi->save_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->save_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **str**| API owner identifier | 
 **api** | **str**| API identifier | 
 **definition** | **object**| the Swagger definition of this API | 
 **private** | **bool**| Defines whether the API has to be private | [optional] [default to False]
 **force** | **bool**| force update | [optional] [default to False]

### Return type

[**APIMeta**](APIMeta.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the API was successfully saved |  -  |
**201** | new API was successfully saved |  -  |
**400** | the Swagger definition was invalid |  -  |
**403** | the API is not owned by the user |  -  |
**409** | can not overwrite a published API version without force&#x3D;true |  -  |
**415** | invalid content type |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_apis**
> List[APIMeta] search_apis(query=query, limit=limit, offset=offset, sort=sort, order=order)

Retrieves a list of currently defined APIs in API meta list format.

### Example

* Api Key Authentication (AuthToken):

```python
import openapi_client
from openapi_client.models.api_meta import APIMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://openapi.space/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://openapi.space/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: AuthToken
configuration.api_key['AuthToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['AuthToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.APIsApi(api_client)
    query = 'query_example' # str | free text query to match (optional)
    limit = 10 # int | the maximum number of APIs to return (optional) (default to 10)
    offset = 0 # int | the offset where to start from when fetching a limited number of APIs (optional) (default to 0)
    sort = NAME # str | sort criteria or result set * NAME - * UPATED * CREATED * OWNER  (optional) (default to NAME)
    order = ASC # str | sort order (optional) (default to ASC)

    try:
        # Retrieves a list of currently defined APIs in API meta list format.
        api_response = api_instance.search_apis(query=query, limit=limit, offset=offset, sort=sort, order=order)
        print("The response of APIsApi->search_apis:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling APIsApi->search_apis: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| free text query to match | [optional] 
 **limit** | **int**| the maximum number of APIs to return | [optional] [default to 10]
 **offset** | **int**| the offset where to start from when fetching a limited number of APIs | [optional] [default to 0]
 **sort** | **str**| sort criteria or result set * NAME - * UPATED * CREATED * OWNER  | [optional] [default to NAME]
 **order** | **str**| sort order | [optional] [default to ASC]

### Return type

[**List[APIMeta]**](APIMeta.md)

### Authorization

[AuthToken](../README.md#AuthToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | a list of APIs in API meta list format |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

