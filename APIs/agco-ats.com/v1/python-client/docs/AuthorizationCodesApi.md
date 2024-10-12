# openapi_client.AuthorizationCodesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization_codes_delete_authorization_code**](AuthorizationCodesApi.md#authorization_codes_delete_authorization_code) | **DELETE** /api/v2/AuthorizationCodes/{id} | Hide an authorization code.
[**authorization_codes_get_authorization_code**](AuthorizationCodesApi.md#authorization_codes_get_authorization_code) | **GET** /api/v2/AuthorizationCodes/{id} | Get an authorization code by its ID.
[**authorization_codes_get_authorization_codes**](AuthorizationCodesApi.md#authorization_codes_get_authorization_codes) | **GET** /api/v2/AuthorizationCodes | Get authorization codes.
[**authorization_codes_get_contact_information**](AuthorizationCodesApi.md#authorization_codes_get_contact_information) | **GET** /api/v2/AuthorizationCodes/{id}/ContactInformation | Get contact information for an authorization code.
[**authorization_codes_post_authorization_code**](AuthorizationCodesApi.md#authorization_codes_post_authorization_code) | **POST** /api/v2/AuthorizationCodes | Generates an authorization code using the provided definition and parameters.
[**authorization_codes_put_authorization_code**](AuthorizationCodesApi.md#authorization_codes_put_authorization_code) | **PUT** /api/v2/AuthorizationCodes/{id} | Update an authorization code.
[**authorization_codes_validate_authorization_code**](AuthorizationCodesApi.md#authorization_codes_validate_authorization_code) | **GET** /api/v2/AuthorizationCodes/{id}/Validate | No Documentation Found.


# **authorization_codes_delete_authorization_code**
> authorization_codes_delete_authorization_code(id)

Hide an authorization code.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    id = 56 # int | The id of the authorization code.

    try:
        # Hide an authorization code.
        api_instance.authorization_codes_delete_authorization_code(id)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_delete_authorization_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the authorization code. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_codes_get_authorization_code**
> AuthorizationCodesSharedModelsAuthorizationCode authorization_codes_get_authorization_code(id)

Get an authorization code by its ID.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_code import AuthorizationCodesSharedModelsAuthorizationCode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    id = 56 # int | The id of the authorization code.

    try:
        # Get an authorization code by its ID.
        api_response = api_instance.authorization_codes_get_authorization_code(id)
        print("The response of AuthorizationCodesApi->authorization_codes_get_authorization_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_get_authorization_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the authorization code. | 

### Return type

[**AuthorizationCodesSharedModelsAuthorizationCode**](AuthorizationCodesSharedModelsAuthorizationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_codes_get_authorization_codes**
> APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode authorization_codes_get_authorization_codes(code=code, limit=limit, offset=offset, definition_id=definition_id, created_by_user_id=created_by_user_id, deleted_by_user_id=deleted_by_user_id, include_deleted=include_deleted)

Get authorization codes.

Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_authorization_codes_shared_models_authorization_code import APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    code = 'code_example' # str | Optional. If provided, searches for entities with the provided authorization code. (optional)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    definition_id = 'definition_id_example' # str | Optional. If specified, filters codes by definition id. (optional)
    created_by_user_id = 56 # int | Optional. If specified, filters codes to those created by the given User ID. (optional)
    deleted_by_user_id = 56 # int | Optional. If specified, filters codes to those deleted by the given User ID. (optional)
    include_deleted = True # bool | Optional. Whether to include deleted codes. 'False' by default. (optional)

    try:
        # Get authorization codes.
        api_response = api_instance.authorization_codes_get_authorization_codes(code=code, limit=limit, offset=offset, definition_id=definition_id, created_by_user_id=created_by_user_id, deleted_by_user_id=deleted_by_user_id, include_deleted=include_deleted)
        print("The response of AuthorizationCodesApi->authorization_codes_get_authorization_codes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_get_authorization_codes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Optional. If provided, searches for entities with the provided authorization code. | [optional] 
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **definition_id** | **str**| Optional. If specified, filters codes by definition id. | [optional] 
 **created_by_user_id** | **int**| Optional. If specified, filters codes to those created by the given User ID. | [optional] 
 **deleted_by_user_id** | **int**| Optional. If specified, filters codes to those deleted by the given User ID. | [optional] 
 **include_deleted** | **bool**| Optional. Whether to include deleted codes. &#39;False&#39; by default. | [optional] 

### Return type

[**APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode**](APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_codes_get_contact_information**
> AuthorizationCodesSharedModelsAuthorizationContactInformation authorization_codes_get_contact_information(id)

Get contact information for an authorization code.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_contact_information import AuthorizationCodesSharedModelsAuthorizationContactInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    id = 56 # int | The id of the authorization code.

    try:
        # Get contact information for an authorization code.
        api_response = api_instance.authorization_codes_get_contact_information(id)
        print("The response of AuthorizationCodesApi->authorization_codes_get_contact_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_get_contact_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the authorization code. | 

### Return type

[**AuthorizationCodesSharedModelsAuthorizationContactInformation**](AuthorizationCodesSharedModelsAuthorizationContactInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_codes_post_authorization_code**
> int authorization_codes_post_authorization_code(authorization_codes_shared_models_authorization_code)

Generates an authorization code using the provided definition and parameters.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_code import AuthorizationCodesSharedModelsAuthorizationCode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    authorization_codes_shared_models_authorization_code = openapi_client.AuthorizationCodesSharedModelsAuthorizationCode() # AuthorizationCodesSharedModelsAuthorizationCode | The model from which to generate an authorization code.

    try:
        # Generates an authorization code using the provided definition and parameters.
        api_response = api_instance.authorization_codes_post_authorization_code(authorization_codes_shared_models_authorization_code)
        print("The response of AuthorizationCodesApi->authorization_codes_post_authorization_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_post_authorization_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_codes_shared_models_authorization_code** | [**AuthorizationCodesSharedModelsAuthorizationCode**](AuthorizationCodesSharedModelsAuthorizationCode.md)| The model from which to generate an authorization code. | 

### Return type

**int**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_codes_put_authorization_code**
> authorization_codes_put_authorization_code(id, authorization_codes_shared_models_authorization_code)

Update an authorization code.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_code import AuthorizationCodesSharedModelsAuthorizationCode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    id = 56 # int | The id of the authorization code.
    authorization_codes_shared_models_authorization_code = openapi_client.AuthorizationCodesSharedModelsAuthorizationCode() # AuthorizationCodesSharedModelsAuthorizationCode | The model from which to update an authorization code.

    try:
        # Update an authorization code.
        api_instance.authorization_codes_put_authorization_code(id, authorization_codes_shared_models_authorization_code)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_put_authorization_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the authorization code. | 
 **authorization_codes_shared_models_authorization_code** | [**AuthorizationCodesSharedModelsAuthorizationCode**](AuthorizationCodesSharedModelsAuthorizationCode.md)| The model from which to update an authorization code. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorization_codes_validate_authorization_code**
> AuthorizationCodesSharedModelsCodeValidationModel authorization_codes_validate_authorization_code(id)

No Documentation Found.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_code_validation_model import AuthorizationCodesSharedModelsCodeValidationModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuthorizationCodesApi(api_client)
    id = 56 # int | 

    try:
        # No Documentation Found.
        api_response = api_instance.authorization_codes_validate_authorization_code(id)
        print("The response of AuthorizationCodesApi->authorization_codes_validate_authorization_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodesApi->authorization_codes_validate_authorization_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**AuthorizationCodesSharedModelsCodeValidationModel**](AuthorizationCodesSharedModelsCodeValidationModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

