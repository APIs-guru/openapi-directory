# openapi_client.AuthorizationCategoriesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorization_categories_add_user**](AuthorizationCategoriesApi.md#authorization_categories_add_user) | **POST** /api/v2/AuthorizationCategories/{id}/Users/{userID} | Add a category that a user can see.
[**authorization_categories_delete**](AuthorizationCategoriesApi.md#authorization_categories_delete) | **DELETE** /api/v2/AuthorizationCategories/{id} | Remove an authorization category.
[**authorization_categories_get**](AuthorizationCategoriesApi.md#authorization_categories_get) | **GET** /api/v2/AuthorizationCategories | Get authorization categories.
[**authorization_categories_get_users**](AuthorizationCategoriesApi.md#authorization_categories_get_users) | **GET** /api/v2/AuthorizationCategories/Users | Returns a report of access that users have to Authorization Categories.
[**authorization_categories_post**](AuthorizationCategoriesApi.md#authorization_categories_post) | **POST** /api/v2/AuthorizationCategories | Add an authorization category.
[**authorization_categories_put**](AuthorizationCategoriesApi.md#authorization_categories_put) | **PUT** /api/v2/AuthorizationCategories/{id} | Update an authorization category.
[**authorization_categories_remove_user**](AuthorizationCategoriesApi.md#authorization_categories_remove_user) | **DELETE** /api/v2/AuthorizationCategories/{id}/Users/{userID} | Deletes a category a user could see.


# **authorization_categories_add_user**
> authorization_categories_add_user(id, user_id)

Add a category that a user can see.

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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    id = 'id_example' # str | 
    user_id = 56 # int | 

    try:
        # Add a category that a user can see.
        api_instance.authorization_categories_add_user(id, user_id)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_add_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user_id** | **int**|  | 

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

# **authorization_categories_delete**
> authorization_categories_delete(id)

Remove an authorization category.

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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    id = 'id_example' # str | The ID of the authorization category.

    try:
        # Remove an authorization category.
        api_instance.authorization_categories_delete(id)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the authorization category. | 

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

# **authorization_categories_get**
> APIIPagedResponseAuthorizationCodesSharedModelsCategory authorization_categories_get(limit=limit, offset=offset, user_id=user_id, definition_id=definition_id)

Get authorization categories.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_authorization_codes_shared_models_category import APIIPagedResponseAuthorizationCodesSharedModelsCategory
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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    limit = 56 # int | Optional. The page limit.  If not specified, the default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset.  If not specified, the default page offset is 0. (optional)
    user_id = 56 # int | Optional. Filter by categories visible to the provided user with the provided userID. (optional)
    definition_id = 'definition_id_example' # str | Optional. Filter by categories containing a definition with the provided ID. (optional)

    try:
        # Get authorization categories.
        api_response = api_instance.authorization_categories_get(limit=limit, offset=offset, user_id=user_id, definition_id=definition_id)
        print("The response of AuthorizationCategoriesApi->authorization_categories_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit.  If not specified, the default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset.  If not specified, the default page offset is 0. | [optional] 
 **user_id** | **int**| Optional. Filter by categories visible to the provided user with the provided userID. | [optional] 
 **definition_id** | **str**| Optional. Filter by categories containing a definition with the provided ID. | [optional] 

### Return type

[**APIIPagedResponseAuthorizationCodesSharedModelsCategory**](APIIPagedResponseAuthorizationCodesSharedModelsCategory.md)

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

# **authorization_categories_get_users**
> APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport authorization_categories_get_users(limit=limit, offset=offset, user_ids=user_ids, category_ids=category_ids, include_categories=include_categories, include_users=include_users, user_search=user_search)

Returns a report of access that users have to Authorization Categories.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_authorization_codes_shared_models_category_user_report import APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport
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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    limit = 56 # int | Optional. Defaults to 10. (optional)
    offset = 56 # int | Optional. Defaults to 0. (optional)
    user_ids = 'user_ids_example' # str | Optional. Includes only users with IDs on the provided comma-separated list. (optional)
    category_ids = 'category_ids_example' # str | Optional. Includes only users with categories with IDs on the provided comma-separated list. (optional)
    include_categories = True # bool | If true, include full Authorization Category detail. Defaults to false. (optional)
    include_users = True # bool | If true, include full User detail. Defaults to false. (optional)
    user_search = 'user_search_example' # str | Optional. Includes only users with a Name, Username, or Email containing the provided value. (optional)

    try:
        # Returns a report of access that users have to Authorization Categories.
        api_response = api_instance.authorization_categories_get_users(limit=limit, offset=offset, user_ids=user_ids, category_ids=category_ids, include_categories=include_categories, include_users=include_users, user_search=user_search)
        print("The response of AuthorizationCategoriesApi->authorization_categories_get_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. Defaults to 10. | [optional] 
 **offset** | **int**| Optional. Defaults to 0. | [optional] 
 **user_ids** | **str**| Optional. Includes only users with IDs on the provided comma-separated list. | [optional] 
 **category_ids** | **str**| Optional. Includes only users with categories with IDs on the provided comma-separated list. | [optional] 
 **include_categories** | **bool**| If true, include full Authorization Category detail. Defaults to false. | [optional] 
 **include_users** | **bool**| If true, include full User detail. Defaults to false. | [optional] 
 **user_search** | **str**| Optional. Includes only users with a Name, Username, or Email containing the provided value. | [optional] 

### Return type

[**APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport**](APIIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport.md)

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

# **authorization_categories_post**
> str authorization_categories_post(authorization_codes_shared_models_category)

Add an authorization category.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_category import AuthorizationCodesSharedModelsCategory
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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    authorization_codes_shared_models_category = openapi_client.AuthorizationCodesSharedModelsCategory() # AuthorizationCodesSharedModelsCategory | An authorization category.

    try:
        # Add an authorization category.
        api_response = api_instance.authorization_categories_post(authorization_codes_shared_models_category)
        print("The response of AuthorizationCategoriesApi->authorization_categories_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization_codes_shared_models_category** | [**AuthorizationCodesSharedModelsCategory**](AuthorizationCodesSharedModelsCategory.md)| An authorization category. | 

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

# **authorization_categories_put**
> authorization_categories_put(id, authorization_codes_shared_models_category)

Update an authorization category.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.authorization_codes_shared_models_category import AuthorizationCodesSharedModelsCategory
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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    id = 'id_example' # str | 
    authorization_codes_shared_models_category = openapi_client.AuthorizationCodesSharedModelsCategory() # AuthorizationCodesSharedModelsCategory | An authorization category.

    try:
        # Update an authorization category.
        api_instance.authorization_categories_put(id, authorization_codes_shared_models_category)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **authorization_codes_shared_models_category** | [**AuthorizationCodesSharedModelsCategory**](AuthorizationCodesSharedModelsCategory.md)| An authorization category. | 

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

# **authorization_categories_remove_user**
> authorization_categories_remove_user(id, user_id)

Deletes a category a user could see.

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
    api_instance = openapi_client.AuthorizationCategoriesApi(api_client)
    id = 'id_example' # str | 
    user_id = 56 # int | 

    try:
        # Deletes a category a user could see.
        api_instance.authorization_categories_remove_user(id, user_id)
    except Exception as e:
        print("Exception when calling AuthorizationCategoriesApi->authorization_categories_remove_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **user_id** | **int**|  | 

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

