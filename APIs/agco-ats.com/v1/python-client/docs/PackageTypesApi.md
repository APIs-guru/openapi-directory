# openapi_client.PackageTypesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_package_types_id_get**](PackageTypesApi.md#api_v2_package_types_id_get) | **GET** /api/v2/PackageTypes/{ID} | Get a specific Package Type.
[**package_types_add_package_type_user**](PackageTypesApi.md#package_types_add_package_type_user) | **POST** /api/v2/PackageTypes/{id}/Users/{userID} | Add a package type that a user can see.
[**package_types_delete**](PackageTypesApi.md#package_types_delete) | **DELETE** /api/v2/PackageTypes/{ID} | Delete a Package Type.
[**package_types_get**](PackageTypesApi.md#package_types_get) | **GET** /api/v2/PackageTypes | Get all of the Package Types.
[**package_types_post**](PackageTypesApi.md#package_types_post) | **POST** /api/v2/PackageTypes | Add a Package Type.
[**package_types_put**](PackageTypesApi.md#package_types_put) | **PUT** /api/v2/PackageTypes/{ID} | Modify a Package Type.
[**package_types_remove_package_type_user**](PackageTypesApi.md#package_types_remove_package_type_user) | **DELETE** /api/v2/PackageTypes/{id}/Users/{userID} | Deletes a package type a user could see.


# **api_v2_package_types_id_get**
> UpdateSystemModelsPackageType api_v2_package_types_id_get(id)

Get a specific Package Type.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_type import UpdateSystemModelsPackageType
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    id = 'id_example' # str | The Package Type ID

    try:
        # Get a specific Package Type.
        api_response = api_instance.api_v2_package_types_id_get(id)
        print("The response of PackageTypesApi->api_v2_package_types_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->api_v2_package_types_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Package Type ID | 

### Return type

[**UpdateSystemModelsPackageType**](UpdateSystemModelsPackageType.md)

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

# **package_types_add_package_type_user**
> package_types_add_package_type_user(id, user_id)

Add a package type that a user can see.

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
    api_instance = openapi_client.PackageTypesApi(api_client)
    id = 'id_example' # str | The ID of the Package Type
    user_id = 56 # int | The userID to link to the package type

    try:
        # Add a package type that a user can see.
        api_instance.package_types_add_package_type_user(id, user_id)
    except Exception as e:
        print("Exception when calling PackageTypesApi->package_types_add_package_type_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Package Type | 
 **user_id** | **int**| The userID to link to the package type | 

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

# **package_types_delete**
> package_types_delete(id)

Delete a Package Type.

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
    api_instance = openapi_client.PackageTypesApi(api_client)
    id = 'id_example' # str | The Package Type ID

    try:
        # Delete a Package Type.
        api_instance.package_types_delete(id)
    except Exception as e:
        print("Exception when calling PackageTypesApi->package_types_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Package Type ID | 

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

# **package_types_get**
> APIPagedResponseUpdateSystemModelsPackageType package_types_get(limit=limit, offset=offset, user_id=user_id)

Get all of the Package Types.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_package_type import APIPagedResponseUpdateSystemModelsPackageType
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    user_id = 56 # int | Optional. The user ID to sort packageTypes by the user's access (optional)

    try:
        # Get all of the Package Types.
        api_response = api_instance.package_types_get(limit=limit, offset=offset, user_id=user_id)
        print("The response of PackageTypesApi->package_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->package_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **user_id** | **int**| Optional. The user ID to sort packageTypes by the user&#39;s access | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsPackageType**](APIPagedResponseUpdateSystemModelsPackageType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **package_types_post**
> str package_types_post(update_system_models_package_type)

Add a Package Type.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_type import UpdateSystemModelsPackageType
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    update_system_models_package_type = openapi_client.UpdateSystemModelsPackageType() # UpdateSystemModelsPackageType | The Package Type to add

    try:
        # Add a Package Type.
        api_response = api_instance.package_types_post(update_system_models_package_type)
        print("The response of PackageTypesApi->package_types_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypesApi->package_types_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_package_type** | [**UpdateSystemModelsPackageType**](UpdateSystemModelsPackageType.md)| The Package Type to add | 

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

# **package_types_put**
> package_types_put(id, update_system_models_package_type)

Modify a Package Type.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_type import UpdateSystemModelsPackageType
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
    api_instance = openapi_client.PackageTypesApi(api_client)
    id = 'id_example' # str | The ID of the Package Type
    update_system_models_package_type = openapi_client.UpdateSystemModelsPackageType() # UpdateSystemModelsPackageType | The Package Type to update

    try:
        # Modify a Package Type.
        api_instance.package_types_put(id, update_system_models_package_type)
    except Exception as e:
        print("Exception when calling PackageTypesApi->package_types_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Package Type | 
 **update_system_models_package_type** | [**UpdateSystemModelsPackageType**](UpdateSystemModelsPackageType.md)| The Package Type to update | 

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

# **package_types_remove_package_type_user**
> package_types_remove_package_type_user(id, user_id)

Deletes a package type a user could see.

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
    api_instance = openapi_client.PackageTypesApi(api_client)
    id = 'id_example' # str | The ID of the Package Type
    user_id = 56 # int | The userID to link to the package type

    try:
        # Deletes a package type a user could see.
        api_instance.package_types_remove_package_type_user(id, user_id)
    except Exception as e:
        print("Exception when calling PackageTypesApi->package_types_remove_package_type_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the Package Type | 
 **user_id** | **int**| The userID to link to the package type | 

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

