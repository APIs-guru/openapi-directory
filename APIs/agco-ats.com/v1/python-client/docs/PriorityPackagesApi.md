# openapi_client.PriorityPackagesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**priority_packages_delete_priority_packages**](PriorityPackagesApi.md#priority_packages_delete_priority_packages) | **DELETE** /api/v2/PriorityPackages/{ID} | Delete a Priority Package for a Client.
[**priority_packages_get_priority_package**](PriorityPackagesApi.md#priority_packages_get_priority_package) | **GET** /api/v2/PriorityPackages/{ID} | Get a Priority Packages for a Client.
[**priority_packages_get_priority_packages**](PriorityPackagesApi.md#priority_packages_get_priority_packages) | **GET** /api/v2/PriorityPackages | Get a list of Priority Packages by Client.
[**priority_packages_post_priority_packages**](PriorityPackagesApi.md#priority_packages_post_priority_packages) | **POST** /api/v2/PriorityPackages | Add a Priority Package for a Client.


# **priority_packages_delete_priority_packages**
> priority_packages_delete_priority_packages(id)

Delete a Priority Package for a Client.

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
    api_instance = openapi_client.PriorityPackagesApi(api_client)
    id = 'id_example' # str | The Priority Package ID

    try:
        # Delete a Priority Package for a Client.
        api_instance.priority_packages_delete_priority_packages(id)
    except Exception as e:
        print("Exception when calling PriorityPackagesApi->priority_packages_delete_priority_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Priority Package ID | 

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

# **priority_packages_get_priority_package**
> UpdateSystemModelsPriorityPackage priority_packages_get_priority_package(id)

Get a Priority Packages for a Client.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_priority_package import UpdateSystemModelsPriorityPackage
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
    api_instance = openapi_client.PriorityPackagesApi(api_client)
    id = 'id_example' # str | The Priority Package ID

    try:
        # Get a Priority Packages for a Client.
        api_response = api_instance.priority_packages_get_priority_package(id)
        print("The response of PriorityPackagesApi->priority_packages_get_priority_package:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriorityPackagesApi->priority_packages_get_priority_package: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Priority Package ID | 

### Return type

[**UpdateSystemModelsPriorityPackage**](UpdateSystemModelsPriorityPackage.md)

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

# **priority_packages_get_priority_packages**
> APIPagedResponseUpdateSystemModelsPriorityPackage priority_packages_get_priority_packages(client_id=client_id, status=status, limit=limit, offset=offset)

Get a list of Priority Packages by Client.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_priority_package import APIPagedResponseUpdateSystemModelsPriorityPackage
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
    api_instance = openapi_client.PriorityPackagesApi(api_client)
    client_id = 'client_id_example' # str | Optional. Filter priority packages by ClientID. (optional)
    status = 'status_example' # str | Optional. Filter returned packages by status. By default only active packages will be returned. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a list of Priority Packages by Client.
        api_response = api_instance.priority_packages_get_priority_packages(client_id=client_id, status=status, limit=limit, offset=offset)
        print("The response of PriorityPackagesApi->priority_packages_get_priority_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriorityPackagesApi->priority_packages_get_priority_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Optional. Filter priority packages by ClientID. | [optional] 
 **status** | **str**| Optional. Filter returned packages by status. By default only active packages will be returned. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsPriorityPackage**](APIPagedResponseUpdateSystemModelsPriorityPackage.md)

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

# **priority_packages_post_priority_packages**
> str priority_packages_post_priority_packages(update_system_models_priority_package)

Add a Priority Package for a Client.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_priority_package import UpdateSystemModelsPriorityPackage
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
    api_instance = openapi_client.PriorityPackagesApi(api_client)
    update_system_models_priority_package = openapi_client.UpdateSystemModelsPriorityPackage() # UpdateSystemModelsPriorityPackage | The PriorityPackage to add

    try:
        # Add a Priority Package for a Client.
        api_response = api_instance.priority_packages_post_priority_packages(update_system_models_priority_package)
        print("The response of PriorityPackagesApi->priority_packages_post_priority_packages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PriorityPackagesApi->priority_packages_post_priority_packages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_priority_package** | [**UpdateSystemModelsPriorityPackage**](UpdateSystemModelsPriorityPackage.md)| The PriorityPackage to add | 

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

