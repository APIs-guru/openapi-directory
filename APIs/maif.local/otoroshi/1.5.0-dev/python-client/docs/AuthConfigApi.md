# openapi_client.AuthConfigApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_global_auth_module**](AuthConfigApi.md#create_global_auth_module) | **POST** /api/auths | Create one global auth. module config
[**delete_global_auth_module**](AuthConfigApi.md#delete_global_auth_module) | **DELETE** /api/auths/{id} | Delete one global auth. module config
[**find_all_global_auth_modules**](AuthConfigApi.md#find_all_global_auth_modules) | **GET** /api/auths | Get all global auth. module configs
[**find_global_auth_module_by_id**](AuthConfigApi.md#find_global_auth_module_by_id) | **GET** /api/auths/{id} | Get one global auth. module configs
[**patch_global_auth_module**](AuthConfigApi.md#patch_global_auth_module) | **PATCH** /api/auths/{id} | Update one global auth. module config
[**update_global_auth_module**](AuthConfigApi.md#update_global_auth_module) | **PUT** /api/auths/{id} | Update one global auth. module config


# **create_global_auth_module**
> FindAllGlobalAuthModules200ResponseInner create_global_auth_module(find_all_global_auth_modules200_response_inner=find_all_global_auth_modules200_response_inner)

Create one global auth. module config

Create one global auth. module config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.find_all_global_auth_modules200_response_inner import FindAllGlobalAuthModules200ResponseInner
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
    api_instance = openapi_client.AuthConfigApi(api_client)
    find_all_global_auth_modules200_response_inner = openapi_client.FindAllGlobalAuthModules200ResponseInner() # FindAllGlobalAuthModules200ResponseInner |  (optional)

    try:
        # Create one global auth. module config
        api_response = api_instance.create_global_auth_module(find_all_global_auth_modules200_response_inner=find_all_global_auth_modules200_response_inner)
        print("The response of AuthConfigApi->create_global_auth_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConfigApi->create_global_auth_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **find_all_global_auth_modules200_response_inner** | [**FindAllGlobalAuthModules200ResponseInner**](FindAllGlobalAuthModules200ResponseInner.md)|  | [optional] 

### Return type

[**FindAllGlobalAuthModules200ResponseInner**](FindAllGlobalAuthModules200ResponseInner.md)

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

# **delete_global_auth_module**
> Deleted delete_global_auth_module(id)

Delete one global auth. module config

Delete one global auth. module config

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
    api_instance = openapi_client.AuthConfigApi(api_client)
    id = 'id_example' # str | The auth. config id id

    try:
        # Delete one global auth. module config
        api_response = api_instance.delete_global_auth_module(id)
        print("The response of AuthConfigApi->delete_global_auth_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConfigApi->delete_global_auth_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The auth. config id id | 

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

# **find_all_global_auth_modules**
> List[FindAllGlobalAuthModules200ResponseInner] find_all_global_auth_modules()

Get all global auth. module configs

Get all global auth. module configs

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.find_all_global_auth_modules200_response_inner import FindAllGlobalAuthModules200ResponseInner
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
    api_instance = openapi_client.AuthConfigApi(api_client)

    try:
        # Get all global auth. module configs
        api_response = api_instance.find_all_global_auth_modules()
        print("The response of AuthConfigApi->find_all_global_auth_modules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConfigApi->find_all_global_auth_modules: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[FindAllGlobalAuthModules200ResponseInner]**](FindAllGlobalAuthModules200ResponseInner.md)

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

# **find_global_auth_module_by_id**
> FindAllGlobalAuthModules200ResponseInner find_global_auth_module_by_id(id)

Get one global auth. module configs

Get one global auth. module configs

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.find_all_global_auth_modules200_response_inner import FindAllGlobalAuthModules200ResponseInner
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
    api_instance = openapi_client.AuthConfigApi(api_client)
    id = 'id_example' # str | The auth. config id

    try:
        # Get one global auth. module configs
        api_response = api_instance.find_global_auth_module_by_id(id)
        print("The response of AuthConfigApi->find_global_auth_module_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConfigApi->find_global_auth_module_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The auth. config id | 

### Return type

[**FindAllGlobalAuthModules200ResponseInner**](FindAllGlobalAuthModules200ResponseInner.md)

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

# **patch_global_auth_module**
> FindAllGlobalAuthModules200ResponseInner patch_global_auth_module(id, patch_inner=patch_inner)

Update one global auth. module config

Update one global auth. module config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.find_all_global_auth_modules200_response_inner import FindAllGlobalAuthModules200ResponseInner
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
    api_instance = openapi_client.AuthConfigApi(api_client)
    id = 'id_example' # str | The auth. config id
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update one global auth. module config
        api_response = api_instance.patch_global_auth_module(id, patch_inner=patch_inner)
        print("The response of AuthConfigApi->patch_global_auth_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConfigApi->patch_global_auth_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The auth. config id | 
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**FindAllGlobalAuthModules200ResponseInner**](FindAllGlobalAuthModules200ResponseInner.md)

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

# **update_global_auth_module**
> FindAllGlobalAuthModules200ResponseInner update_global_auth_module(id, find_all_global_auth_modules200_response_inner=find_all_global_auth_modules200_response_inner)

Update one global auth. module config

Update one global auth. module config

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.find_all_global_auth_modules200_response_inner import FindAllGlobalAuthModules200ResponseInner
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
    api_instance = openapi_client.AuthConfigApi(api_client)
    id = 'id_example' # str | The auth. config id
    find_all_global_auth_modules200_response_inner = openapi_client.FindAllGlobalAuthModules200ResponseInner() # FindAllGlobalAuthModules200ResponseInner |  (optional)

    try:
        # Update one global auth. module config
        api_response = api_instance.update_global_auth_module(id, find_all_global_auth_modules200_response_inner=find_all_global_auth_modules200_response_inner)
        print("The response of AuthConfigApi->update_global_auth_module:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthConfigApi->update_global_auth_module: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The auth. config id | 
 **find_all_global_auth_modules200_response_inner** | [**FindAllGlobalAuthModules200ResponseInner**](FindAllGlobalAuthModules200ResponseInner.md)|  | [optional] 

### Return type

[**FindAllGlobalAuthModules200ResponseInner**](FindAllGlobalAuthModules200ResponseInner.md)

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

