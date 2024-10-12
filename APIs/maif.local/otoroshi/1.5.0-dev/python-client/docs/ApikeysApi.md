# openapi_client.ApikeysApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**all_api_keys**](ApikeysApi.md#all_api_keys) | **GET** /api/apikeys | Get all api keys
[**api_key**](ApikeysApi.md#api_key) | **GET** /api/services/{serviceId}/apikeys/{clientId} | Get an api key
[**api_key_from_group**](ApikeysApi.md#api_key_from_group) | **GET** /api/groups/{groupId}/apikeys/{clientId} | Get an api key
[**api_key_from_group_quotas**](ApikeysApi.md#api_key_from_group_quotas) | **GET** /api/groups/{groupId}/apikeys/{clientId}/quotas | Get the quota state of an api key
[**api_key_group**](ApikeysApi.md#api_key_group) | **GET** /api/services/{serviceId}/apikeys/{clientId}/group | Get the group of an api key
[**api_key_quotas**](ApikeysApi.md#api_key_quotas) | **GET** /api/services/{serviceId}/apikeys/{clientId}/quotas | Get the quota state of an api key
[**api_keys**](ApikeysApi.md#api_keys) | **GET** /api/services/{serviceId}/apikeys | Get all api keys for the group of a service
[**api_keys_from_group**](ApikeysApi.md#api_keys_from_group) | **GET** /api/groups/{groupId}/apikeys | Get all api keys for the group of a service
[**create_api_key**](ApikeysApi.md#create_api_key) | **POST** /api/services/{serviceId}/apikeys | Create a new api key for a service
[**create_api_key_from_group**](ApikeysApi.md#create_api_key_from_group) | **POST** /api/groups/{groupId}/apikeys | Create a new api key for a group
[**delete_api_key**](ApikeysApi.md#delete_api_key) | **DELETE** /api/services/{serviceId}/apikeys/{clientId} | Delete an api key
[**delete_api_key_from_group**](ApikeysApi.md#delete_api_key_from_group) | **DELETE** /api/groups/{groupId}/apikeys/{clientId} | Delete an api key
[**patch_api_key**](ApikeysApi.md#patch_api_key) | **PATCH** /api/services/{serviceId}/apikeys/{clientId} | Update an api key with a diff
[**patch_api_key_from_group**](ApikeysApi.md#patch_api_key_from_group) | **PATCH** /api/groups/{groupId}/apikeys/{clientId} | Update an api key with a diff
[**reset_api_key_from_group_quotas**](ApikeysApi.md#reset_api_key_from_group_quotas) | **DELETE** /api/groups/{groupId}/apikeys/{clientId}/quotas | Reset the quota state of an api key
[**reset_api_key_quotas**](ApikeysApi.md#reset_api_key_quotas) | **DELETE** /api/services/{serviceId}/apikeys/{clientId}/quotas | Reset the quota state of an api key
[**update_api_key**](ApikeysApi.md#update_api_key) | **PUT** /api/services/{serviceId}/apikeys/{clientId} | Update an api key
[**update_api_key_from_group**](ApikeysApi.md#update_api_key_from_group) | **PUT** /api/groups/{groupId}/apikeys/{clientId} | Update an api key


# **all_api_keys**
> List[ApiKey] all_api_keys()

Get all api keys

Get all api keys

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)

    try:
        # Get all api keys
        api_response = api_instance.all_api_keys()
        print("The response of ApikeysApi->all_api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->all_api_keys: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ApiKey]**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_key**
> ApiKey api_key(service_id, client_id)

Get an api key

Get an api key for a specified service descriptor

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Get an api key
        api_response = api_instance.api_key(service_id, client_id)
        print("The response of ApikeysApi->api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_key_from_group**
> ApiKey api_key_from_group(group_id, client_id)

Get an api key

Get an api key for a specified service group

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Get an api key
        api_response = api_instance.api_key_from_group(group_id, client_id)
        print("The response of ApikeysApi->api_key_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_key_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **client_id** | **str**| the api key id | 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_key_from_group_quotas**
> Quotas api_key_from_group_quotas(group_id, client_id)

Get the quota state of an api key

Get the quota state of an api key

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.quotas import Quotas
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Get the quota state of an api key
        api_response = api_instance.api_key_from_group_quotas(group_id, client_id)
        print("The response of ApikeysApi->api_key_from_group_quotas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_key_from_group_quotas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Quotas**](Quotas.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_key_group**
> Group api_key_group(service_id, client_id)

Get the group of an api key

Get the group of an api key

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Get the group of an api key
        api_response = api_instance.api_key_group(service_id, client_id)
        print("The response of ApikeysApi->api_key_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_key_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Group**](Group.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_key_quotas**
> Quotas api_key_quotas(service_id, client_id)

Get the quota state of an api key

Get the quota state of an api key

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.quotas import Quotas
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Get the quota state of an api key
        api_response = api_instance.api_key_quotas(service_id, client_id)
        print("The response of ApikeysApi->api_key_quotas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_key_quotas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Quotas**](Quotas.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_keys**
> List[ApiKey] api_keys(service_id)

Get all api keys for the group of a service

Get all api keys for the group of a service

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id

    try:
        # Get all api keys for the group of a service
        api_response = api_instance.api_keys(service_id)
        print("The response of ApikeysApi->api_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 

### Return type

[**List[ApiKey]**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_keys_from_group**
> List[ApiKey] api_keys_from_group(group_id)

Get all api keys for the group of a service

Get all api keys for the group of a service

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id

    try:
        # Get all api keys for the group of a service
        api_response = api_instance.api_keys_from_group(group_id)
        print("The response of ApikeysApi->api_keys_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->api_keys_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 

### Return type

[**List[ApiKey]**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_api_key**
> ApiKey create_api_key(service_id, api_key=api_key)

Create a new api key for a service



### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    api_key = openapi_client.ApiKey() # ApiKey |  (optional)

    try:
        # Create a new api key for a service
        api_response = api_instance.create_api_key(service_id, api_key=api_key)
        print("The response of ApikeysApi->create_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->create_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **api_key** | [**ApiKey**](ApiKey.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_api_key_from_group**
> ApiKey create_api_key_from_group(group_id, api_key=api_key)

Create a new api key for a group

Create a new api key for a group

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    api_key = openapi_client.ApiKey() # ApiKey |  (optional)

    try:
        # Create a new api key for a group
        api_response = api_instance.create_api_key_from_group(group_id, api_key=api_key)
        print("The response of ApikeysApi->create_api_key_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->create_api_key_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **api_key** | [**ApiKey**](ApiKey.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_key**
> Deleted delete_api_key(service_id, client_id)

Delete an api key

Delete an api key for a specified service descriptor

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.deleted import Deleted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Delete an api key
        api_response = api_instance.delete_api_key(service_id, client_id)
        print("The response of ApikeysApi->delete_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->delete_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Deleted**](Deleted.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_api_key_from_group**
> Deleted delete_api_key_from_group(group_id, client_id)

Delete an api key

Delete an api key for a specified service group

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.deleted import Deleted
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Delete an api key
        api_response = api_instance.delete_api_key_from_group(group_id, client_id)
        print("The response of ApikeysApi->delete_api_key_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->delete_api_key_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Deleted**](Deleted.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_api_key**
> ApiKey patch_api_key(service_id, client_id, patch_inner=patch_inner)

Update an api key with a diff

Update an api key for a specified service descriptor with a diff

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.models.patch_inner import PatchInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update an api key with a diff
        api_response = api_instance.patch_api_key(service_id, client_id, patch_inner=patch_inner)
        print("The response of ApikeysApi->patch_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->patch_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_api_key_from_group**
> ApiKey patch_api_key_from_group(group_id, client_id, patch_inner=patch_inner)

Update an api key with a diff

Update an api key for a specified service descriptor with a diff

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.models.patch_inner import PatchInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    client_id = 'client_id_example' # str | the api key id
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update an api key with a diff
        api_response = api_instance.patch_api_key_from_group(group_id, client_id, patch_inner=patch_inner)
        print("The response of ApikeysApi->patch_api_key_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->patch_api_key_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **client_id** | **str**| the api key id | 
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_api_key_from_group_quotas**
> Quotas reset_api_key_from_group_quotas(group_id, client_id)

Reset the quota state of an api key

Reset the quota state of an api key

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.quotas import Quotas
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Reset the quota state of an api key
        api_response = api_instance.reset_api_key_from_group_quotas(group_id, client_id)
        print("The response of ApikeysApi->reset_api_key_from_group_quotas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->reset_api_key_from_group_quotas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Quotas**](Quotas.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_api_key_quotas**
> Quotas reset_api_key_quotas(service_id, client_id)

Reset the quota state of an api key

Reset the quota state of an api key

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.quotas import Quotas
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id

    try:
        # Reset the quota state of an api key
        api_response = api_instance.reset_api_key_quotas(service_id, client_id)
        print("The response of ApikeysApi->reset_api_key_quotas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->reset_api_key_quotas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 

### Return type

[**Quotas**](Quotas.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_api_key**
> ApiKey update_api_key(service_id, client_id, api_key=api_key)

Update an api key

Update an api key for a specified service descriptor

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    service_id = 'service_id_example' # str | The api key service id
    client_id = 'client_id_example' # str | the api key id
    api_key = openapi_client.ApiKey() # ApiKey |  (optional)

    try:
        # Update an api key
        api_response = api_instance.update_api_key(service_id, client_id, api_key=api_key)
        print("The response of ApikeysApi->update_api_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->update_api_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_id** | **str**| The api key service id | 
 **client_id** | **str**| the api key id | 
 **api_key** | [**ApiKey**](ApiKey.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_api_key_from_group**
> ApiKey update_api_key_from_group(group_id, client_id, api_key=api_key)

Update an api key

Update an api key for a specified service group

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.api_key import ApiKey
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://otoroshi-api.oto.tools
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://otoroshi-api.oto.tools"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: otoroshi_auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ApikeysApi(api_client)
    group_id = 'group_id_example' # str | The api key group id
    client_id = 'client_id_example' # str | the api key id
    api_key = openapi_client.ApiKey() # ApiKey |  (optional)

    try:
        # Update an api key
        api_response = api_instance.update_api_key_from_group(group_id, client_id, api_key=api_key)
        print("The response of ApikeysApi->update_api_key_from_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApikeysApi->update_api_key_from_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The api key group id | 
 **client_id** | **str**| the api key id | 
 **api_key** | [**ApiKey**](ApiKey.md)|  | [optional] 

### Return type

[**ApiKey**](ApiKey.md)

### Authorization

[otoroshi_auth](../README.md#otoroshi_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**400** | Bad resource format. Take another look to the swagger, or open an issue :) |  -  |
**401** | You have to provide an Api Key. Api Key can be passed with &#39;Otoroshi-Client-Id&#39; and &#39;Otoroshi-Client-Secret&#39; headers, or use basic http authentication |  -  |
**404** | Resource not found or does not exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

