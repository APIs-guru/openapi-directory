# openapi_client.IdfaDeclarationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**idfa_declarations_create_instance**](IdfaDeclarationsApi.md#idfa_declarations_create_instance) | **POST** /v1/idfaDeclarations | 
[**idfa_declarations_delete_instance**](IdfaDeclarationsApi.md#idfa_declarations_delete_instance) | **DELETE** /v1/idfaDeclarations/{id} | 
[**idfa_declarations_update_instance**](IdfaDeclarationsApi.md#idfa_declarations_update_instance) | **PATCH** /v1/idfaDeclarations/{id} | 


# **idfa_declarations_create_instance**
> IdfaDeclarationResponse idfa_declarations_create_instance(idfa_declaration_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.idfa_declaration_create_request import IdfaDeclarationCreateRequest
from openapi_client.models.idfa_declaration_response import IdfaDeclarationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IdfaDeclarationsApi(api_client)
    idfa_declaration_create_request = openapi_client.IdfaDeclarationCreateRequest() # IdfaDeclarationCreateRequest | IdfaDeclaration representation

    try:
        api_response = api_instance.idfa_declarations_create_instance(idfa_declaration_create_request)
        print("The response of IdfaDeclarationsApi->idfa_declarations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IdfaDeclarationsApi->idfa_declarations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idfa_declaration_create_request** | [**IdfaDeclarationCreateRequest**](IdfaDeclarationCreateRequest.md)| IdfaDeclaration representation | 

### Return type

[**IdfaDeclarationResponse**](IdfaDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single IdfaDeclaration |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **idfa_declarations_delete_instance**
> idfa_declarations_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IdfaDeclarationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.idfa_declarations_delete_instance(id)
    except Exception as e:
        print("Exception when calling IdfaDeclarationsApi->idfa_declarations_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **idfa_declarations_update_instance**
> IdfaDeclarationResponse idfa_declarations_update_instance(id, idfa_declaration_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.idfa_declaration_response import IdfaDeclarationResponse
from openapi_client.models.idfa_declaration_update_request import IdfaDeclarationUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IdfaDeclarationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    idfa_declaration_update_request = openapi_client.IdfaDeclarationUpdateRequest() # IdfaDeclarationUpdateRequest | IdfaDeclaration representation

    try:
        api_response = api_instance.idfa_declarations_update_instance(id, idfa_declaration_update_request)
        print("The response of IdfaDeclarationsApi->idfa_declarations_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IdfaDeclarationsApi->idfa_declarations_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **idfa_declaration_update_request** | [**IdfaDeclarationUpdateRequest**](IdfaDeclarationUpdateRequest.md)| IdfaDeclaration representation | 

### Return type

[**IdfaDeclarationResponse**](IdfaDeclarationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single IdfaDeclaration |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

