# openapi_client.PackagesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**packages_delete_package**](PackagesApi.md#packages_delete_package) | **DELETE** /api/v2/Packages/{ID} | Delete a Package.
[**packages_get_package**](PackagesApi.md#packages_get_package) | **GET** /api/v2/Packages/{ID} | Find a Package.
[**packages_get_packages**](PackagesApi.md#packages_get_packages) | **GET** /api/v2/Packages | List Packages.
[**packages_post_package**](PackagesApi.md#packages_post_package) | **POST** /api/v2/Packages | Add a Package to the Update System.
[**packages_put_package**](PackagesApi.md#packages_put_package) | **PUT** /api/v2/Packages/{ID} | Modify a Packge to the Update System.


# **packages_delete_package**
> packages_delete_package(id)

Delete a Package.

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
    api_instance = openapi_client.PackagesApi(api_client)
    id = 'id_example' # str | The Package ID to Delete

    try:
        # Delete a Package.
        api_instance.packages_delete_package(id)
    except Exception as e:
        print("Exception when calling PackagesApi->packages_delete_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Package ID to Delete | 

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

# **packages_get_package**
> UpdateSystemModelsPackage packages_get_package(id)

Find a Package.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package import UpdateSystemModelsPackage
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
    api_instance = openapi_client.PackagesApi(api_client)
    id = 'id_example' # str | The Package ID to Search for

    try:
        # Find a Package.
        api_response = api_instance.packages_get_package(id)
        print("The response of PackagesApi->packages_get_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagesApi->packages_get_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Package ID to Search for | 

### Return type

[**UpdateSystemModelsPackage**](UpdateSystemModelsPackage.md)

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

# **packages_get_packages**
> APIPagedResponseUpdateSystemModelsPackage packages_get_packages(limit=limit, offset=offset, package_type_id=package_type_id, version=version, released=released)

List Packages.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_package import APIPagedResponseUpdateSystemModelsPackage
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
    api_instance = openapi_client.PackagesApi(api_client)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    package_type_id = 'package_type_id_example' # str | Optional. If provided, filters by PackageTypeID. (optional)
    version = 56 # int | Optional. If provided, filters by Version. (optional)
    released = True # bool | Optional. If provided, filters by Released. (optional)

    try:
        # List Packages.
        api_response = api_instance.packages_get_packages(limit=limit, offset=offset, package_type_id=package_type_id, version=version, released=released)
        print("The response of PackagesApi->packages_get_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagesApi->packages_get_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **package_type_id** | **str**| Optional. If provided, filters by PackageTypeID. | [optional] 
 **version** | **int**| Optional. If provided, filters by Version. | [optional] 
 **released** | **bool**| Optional. If provided, filters by Released. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsPackage**](APIPagedResponseUpdateSystemModelsPackage.md)

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

# **packages_post_package**
> str packages_post_package(update_system_models_package)

Add a Package to the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package import UpdateSystemModelsPackage
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
    api_instance = openapi_client.PackagesApi(api_client)
    update_system_models_package = openapi_client.UpdateSystemModelsPackage() # UpdateSystemModelsPackage | The package to add.

    try:
        # Add a Package to the Update System.
        api_response = api_instance.packages_post_package(update_system_models_package)
        print("The response of PackagesApi->packages_post_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackagesApi->packages_post_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_package** | [**UpdateSystemModelsPackage**](UpdateSystemModelsPackage.md)| The package to add. | 

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

# **packages_put_package**
> packages_put_package(id, update_system_models_package)

Modify a Packge to the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package import UpdateSystemModelsPackage
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
    api_instance = openapi_client.PackagesApi(api_client)
    id = 'id_example' # str | The unique ID of the Package
    update_system_models_package = openapi_client.UpdateSystemModelsPackage() # UpdateSystemModelsPackage | The package to update.

    try:
        # Modify a Packge to the Update System.
        api_instance.packages_put_package(id, update_system_models_package)
    except Exception as e:
        print("Exception when calling PackagesApi->packages_put_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID of the Package | 
 **update_system_models_package** | [**UpdateSystemModelsPackage**](UpdateSystemModelsPackage.md)| The package to update. | 

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

