# openapi_client.AuthorizationCodeDefinitionsApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_authorization_code_definitions_id_get**](AuthorizationCodeDefinitionsApi.md#api_v2_authorization_code_definitions_id_get) | **GET** /api/v2/AuthorizationCodeDefinitions/{id} | Get an authorization code definition by its ID
[**authorization_code_definitions_add_category_to_definition**](AuthorizationCodeDefinitionsApi.md#authorization_code_definitions_add_category_to_definition) | **POST** /api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID} | Add a category to an authorizationCodeDefintion.
[**authorization_code_definitions_delete_authorization_code_definition**](AuthorizationCodeDefinitionsApi.md#authorization_code_definitions_delete_authorization_code_definition) | **DELETE** /api/v2/AuthorizationCodeDefinitions/{id} | Disable an authorization code definition
[**authorization_code_definitions_get_authorization_code_definition**](AuthorizationCodeDefinitionsApi.md#authorization_code_definitions_get_authorization_code_definition) | **GET** /api/v2/AuthorizationCodeDefinitions | Get authorization code definitions.
[**authorization_code_definitions_post_authorization_code_definition**](AuthorizationCodeDefinitionsApi.md#authorization_code_definitions_post_authorization_code_definition) | **POST** /api/v2/AuthorizationCodeDefinitions | Add an authorization code definition.
[**authorization_code_definitions_put_authorization_code_definition**](AuthorizationCodeDefinitionsApi.md#authorization_code_definitions_put_authorization_code_definition) | **PUT** /api/v2/AuthorizationCodeDefinitions/{id} | Update an authorization code definition
[**authorization_code_definitions_remove_category_from_definition**](AuthorizationCodeDefinitionsApi.md#authorization_code_definitions_remove_category_from_definition) | **DELETE** /api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID} | Deletes the category from the authorization code definition.


# **api_v2_authorization_code_definitions_id_get**
> AuthorizationCodesSharedModelsAuthorizationCodeDefinition api_v2_authorization_code_definitions_id_get(id)

Get an authorization code definition by its ID

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_code_definition import AuthorizationCodesSharedModelsAuthorizationCodeDefinition
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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    id = 'id_example' # str | The ID of the authorization code definition.

    try:
        # Get an authorization code definition by its ID
        api_response = api_instance.api_v2_authorization_code_definitions_id_get(id)
        print("The response of AuthorizationCodeDefinitionsApi->api_v2_authorization_code_definitions_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->api_v2_authorization_code_definitions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authorization code definition. | 

### Return type

[**AuthorizationCodesSharedModelsAuthorizationCodeDefinition**](AuthorizationCodesSharedModelsAuthorizationCodeDefinition.md)

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

# **authorization_code_definitions_add_category_to_definition**
> authorization_code_definitions_add_category_to_definition(id, category_id)

Add a category to an authorizationCodeDefintion.

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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    id = 'id_example' # str | 
    category_id = 'category_id_example' # str | A category ID, as a GUID.

    try:
        # Add a category to an authorizationCodeDefintion.
        api_instance.authorization_code_definitions_add_category_to_definition(id, category_id)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->authorization_code_definitions_add_category_to_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **category_id** | **str**| A category ID, as a GUID. | 

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

# **authorization_code_definitions_delete_authorization_code_definition**
> authorization_code_definitions_delete_authorization_code_definition(id)

Disable an authorization code definition

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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    id = 'id_example' # str | The ID of the authorization code definition.

    try:
        # Disable an authorization code definition
        api_instance.authorization_code_definitions_delete_authorization_code_definition(id)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->authorization_code_definitions_delete_authorization_code_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authorization code definition. | 

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

# **authorization_code_definitions_get_authorization_code_definition**
> APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition authorization_code_definitions_get_authorization_code_definition(limit=limit, offset=offset, name=name, created_by_user_id=created_by_user_id, deleted_by_user_id=deleted_by_user_id, include_deleted=include_deleted, category_id=category_id)

Get authorization code definitions.

Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_authorization_codes_shared_models_authorization_code_definition import APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition
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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    name = 'name_example' # str | Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported. (optional)
    created_by_user_id = 56 # int | Optional. If specified, filters definitions to those created by the given User ID. (optional)
    deleted_by_user_id = 56 # int | Optional. If specified, filters definitions to those deleted by the given User ID. (optional)
    include_deleted = True # bool | Optional. Whether to include deleted definitions. 'False' by default. (optional)
    category_id = 'category_id_example' # str | Optional. If specified, filters definitions with the designated categoryID. (optional)

    try:
        # Get authorization code definitions.
        api_response = api_instance.authorization_code_definitions_get_authorization_code_definition(limit=limit, offset=offset, name=name, created_by_user_id=created_by_user_id, deleted_by_user_id=deleted_by_user_id, include_deleted=include_deleted, category_id=category_id)
        print("The response of AuthorizationCodeDefinitionsApi->authorization_code_definitions_get_authorization_code_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->authorization_code_definitions_get_authorization_code_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **name** | **str**| Optional. If specified, filters definitions by name. Starting and ending wildcards (*) supported. | [optional] 
 **created_by_user_id** | **int**| Optional. If specified, filters definitions to those created by the given User ID. | [optional] 
 **deleted_by_user_id** | **int**| Optional. If specified, filters definitions to those deleted by the given User ID. | [optional] 
 **include_deleted** | **bool**| Optional. Whether to include deleted definitions. &#39;False&#39; by default. | [optional] 
 **category_id** | **str**| Optional. If specified, filters definitions with the designated categoryID. | [optional] 

### Return type

[**APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition**](APIIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition.md)

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

# **authorization_code_definitions_post_authorization_code_definition**
> str authorization_code_definitions_post_authorization_code_definition(authorization_codes_shared_models_authorization_code_definition)

Add an authorization code definition.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_code_definition import AuthorizationCodesSharedModelsAuthorizationCodeDefinition
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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    authorization_codes_shared_models_authorization_code_definition = openapi_client.AuthorizationCodesSharedModelsAuthorizationCodeDefinition() # AuthorizationCodesSharedModelsAuthorizationCodeDefinition | An authorization code definition.

    try:
        # Add an authorization code definition.
        api_response = api_instance.authorization_code_definitions_post_authorization_code_definition(authorization_codes_shared_models_authorization_code_definition)
        print("The response of AuthorizationCodeDefinitionsApi->authorization_code_definitions_post_authorization_code_definition:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->authorization_code_definitions_post_authorization_code_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_codes_shared_models_authorization_code_definition** | [**AuthorizationCodesSharedModelsAuthorizationCodeDefinition**](AuthorizationCodesSharedModelsAuthorizationCodeDefinition.md)| An authorization code definition. | 

### Return type

**str**

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

# **authorization_code_definitions_put_authorization_code_definition**
> authorization_code_definitions_put_authorization_code_definition(id, authorization_codes_shared_models_authorization_code_definition)

Update an authorization code definition

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_authorization_code_definition import AuthorizationCodesSharedModelsAuthorizationCodeDefinition
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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    id = 'id_example' # str | The ID of the authorization code definition.
    authorization_codes_shared_models_authorization_code_definition = openapi_client.AuthorizationCodesSharedModelsAuthorizationCodeDefinition() # AuthorizationCodesSharedModelsAuthorizationCodeDefinition | An authorization code definition.

    try:
        # Update an authorization code definition
        api_instance.authorization_code_definitions_put_authorization_code_definition(id, authorization_codes_shared_models_authorization_code_definition)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->authorization_code_definitions_put_authorization_code_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authorization code definition. | 
 **authorization_codes_shared_models_authorization_code_definition** | [**AuthorizationCodesSharedModelsAuthorizationCodeDefinition**](AuthorizationCodesSharedModelsAuthorizationCodeDefinition.md)| An authorization code definition. | 

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

# **authorization_code_definitions_remove_category_from_definition**
> authorization_code_definitions_remove_category_from_definition(id, category_id)

Deletes the category from the authorization code definition.

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
    api_instance = openapi_client.AuthorizationCodeDefinitionsApi(api_client)
    id = 'id_example' # str | 
    category_id = 'category_id_example' # str | A category ID, as a GUID.

    try:
        # Deletes the category from the authorization code definition.
        api_instance.authorization_code_definitions_remove_category_from_definition(id, category_id)
    except Exception as e:
        print("Exception when calling AuthorizationCodeDefinitionsApi->authorization_code_definitions_remove_category_from_definition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **category_id** | **str**| A category ID, as a GUID. | 

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

