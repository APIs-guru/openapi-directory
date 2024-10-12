# openapi_client.JwtVerifiersApi

All URIs are relative to *http://otoroshi-api.oto.tools*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_global_jwt_verifier**](JwtVerifiersApi.md#create_global_jwt_verifier) | **POST** /api/verifiers | Create one global JWT verifiers
[**delete_global_jwt_verifier**](JwtVerifiersApi.md#delete_global_jwt_verifier) | **DELETE** /api/verifiers/{verifierId} | Delete one global JWT verifiers
[**find_all_global_jwt_verifiers**](JwtVerifiersApi.md#find_all_global_jwt_verifiers) | **GET** /api/verifiers | Get all global JWT verifiers
[**find_global_jwt_verifiers_by_id**](JwtVerifiersApi.md#find_global_jwt_verifiers_by_id) | **GET** /api/verifiers/{verifierId} | Get one global JWT verifiers
[**patch_global_jwt_verifier**](JwtVerifiersApi.md#patch_global_jwt_verifier) | **PATCH** /api/verifiers/{verifierId} | Update one global JWT verifiers
[**update_global_jwt_verifier**](JwtVerifiersApi.md#update_global_jwt_verifier) | **PUT** /api/verifiers/{verifierId} | Update one global JWT verifiers


# **create_global_jwt_verifier**
> GlobalJwtVerifier create_global_jwt_verifier(global_jwt_verifier=global_jwt_verifier)

Create one global JWT verifiers

Create one global JWT verifiers

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_jwt_verifier import GlobalJwtVerifier
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
    api_instance = openapi_client.JwtVerifiersApi(api_client)
    global_jwt_verifier = openapi_client.GlobalJwtVerifier() # GlobalJwtVerifier |  (optional)

    try:
        # Create one global JWT verifiers
        api_response = api_instance.create_global_jwt_verifier(global_jwt_verifier=global_jwt_verifier)
        print("The response of JwtVerifiersApi->create_global_jwt_verifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JwtVerifiersApi->create_global_jwt_verifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_jwt_verifier** | [**GlobalJwtVerifier**](GlobalJwtVerifier.md)|  | [optional] 

### Return type

[**GlobalJwtVerifier**](GlobalJwtVerifier.md)

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

# **delete_global_jwt_verifier**
> Deleted delete_global_jwt_verifier(verifier_id)

Delete one global JWT verifiers

Delete one global JWT verifiers

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
    api_instance = openapi_client.JwtVerifiersApi(api_client)
    verifier_id = 'verifier_id_example' # str | The jwt verifier id

    try:
        # Delete one global JWT verifiers
        api_response = api_instance.delete_global_jwt_verifier(verifier_id)
        print("The response of JwtVerifiersApi->delete_global_jwt_verifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JwtVerifiersApi->delete_global_jwt_verifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifier_id** | **str**| The jwt verifier id | 

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

# **find_all_global_jwt_verifiers**
> List[GlobalJwtVerifier] find_all_global_jwt_verifiers()

Get all global JWT verifiers

Get all global JWT verifiers

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_jwt_verifier import GlobalJwtVerifier
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
    api_instance = openapi_client.JwtVerifiersApi(api_client)

    try:
        # Get all global JWT verifiers
        api_response = api_instance.find_all_global_jwt_verifiers()
        print("The response of JwtVerifiersApi->find_all_global_jwt_verifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JwtVerifiersApi->find_all_global_jwt_verifiers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[GlobalJwtVerifier]**](GlobalJwtVerifier.md)

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

# **find_global_jwt_verifiers_by_id**
> GlobalJwtVerifier find_global_jwt_verifiers_by_id(verifier_id)

Get one global JWT verifiers

Get one global JWT verifiers

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_jwt_verifier import GlobalJwtVerifier
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
    api_instance = openapi_client.JwtVerifiersApi(api_client)
    verifier_id = 'verifier_id_example' # str | The jwt verifier id

    try:
        # Get one global JWT verifiers
        api_response = api_instance.find_global_jwt_verifiers_by_id(verifier_id)
        print("The response of JwtVerifiersApi->find_global_jwt_verifiers_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JwtVerifiersApi->find_global_jwt_verifiers_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifier_id** | **str**| The jwt verifier id | 

### Return type

[**GlobalJwtVerifier**](GlobalJwtVerifier.md)

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

# **patch_global_jwt_verifier**
> GlobalJwtVerifier patch_global_jwt_verifier(verifier_id, patch_inner=patch_inner)

Update one global JWT verifiers

Update one global JWT verifiers

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_jwt_verifier import GlobalJwtVerifier
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
    api_instance = openapi_client.JwtVerifiersApi(api_client)
    verifier_id = 'verifier_id_example' # str | The jwt verifier id
    patch_inner = [openapi_client.PatchInner()] # List[PatchInner] |  (optional)

    try:
        # Update one global JWT verifiers
        api_response = api_instance.patch_global_jwt_verifier(verifier_id, patch_inner=patch_inner)
        print("The response of JwtVerifiersApi->patch_global_jwt_verifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JwtVerifiersApi->patch_global_jwt_verifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifier_id** | **str**| The jwt verifier id | 
 **patch_inner** | [**List[PatchInner]**](PatchInner.md)|  | [optional] 

### Return type

[**GlobalJwtVerifier**](GlobalJwtVerifier.md)

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

# **update_global_jwt_verifier**
> GlobalJwtVerifier update_global_jwt_verifier(verifier_id, global_jwt_verifier=global_jwt_verifier)

Update one global JWT verifiers

Update one global JWT verifiers

### Example

* Basic Authentication (otoroshi_auth):

```python
import openapi_client
from openapi_client.models.global_jwt_verifier import GlobalJwtVerifier
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
    api_instance = openapi_client.JwtVerifiersApi(api_client)
    verifier_id = 'verifier_id_example' # str | The jwt verifier id
    global_jwt_verifier = openapi_client.GlobalJwtVerifier() # GlobalJwtVerifier |  (optional)

    try:
        # Update one global JWT verifiers
        api_response = api_instance.update_global_jwt_verifier(verifier_id, global_jwt_verifier=global_jwt_verifier)
        print("The response of JwtVerifiersApi->update_global_jwt_verifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JwtVerifiersApi->update_global_jwt_verifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verifier_id** | **str**| The jwt verifier id | 
 **global_jwt_verifier** | [**GlobalJwtVerifier**](GlobalJwtVerifier.md)|  | [optional] 

### Return type

[**GlobalJwtVerifier**](GlobalJwtVerifier.md)

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

