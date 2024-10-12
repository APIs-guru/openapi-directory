# openapi_client.BundlesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundles_delete_bundle**](BundlesApi.md#bundles_delete_bundle) | **DELETE** /api/v2/Bundles/{ID} | Delete a Bundle.
[**bundles_get_bundle**](BundlesApi.md#bundles_get_bundle) | **GET** /api/v2/Bundles/{ID} | Get a specific Bundle by ID.
[**bundles_get_bundles**](BundlesApi.md#bundles_get_bundles) | **GET** /api/v2/Bundles | Get the list of bundles.
[**bundles_post_bundle**](BundlesApi.md#bundles_post_bundle) | **POST** /api/v2/Bundles | Add a Bundle to the Update System.
[**bundles_put_bundle**](BundlesApi.md#bundles_put_bundle) | **PUT** /api/v2/Bundles/{ID} | Modify a Bundle in the Update System.


# **bundles_delete_bundle**
> bundles_delete_bundle(id)

Delete a Bundle.

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
    api_instance = openapi_client.BundlesApi(api_client)
    id = 'id_example' # str | The Bundle ID to Delete

    try:
        # Delete a Bundle.
        api_instance.bundles_delete_bundle(id)
    except Exception as e:
        print("Exception when calling BundlesApi->bundles_delete_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Bundle ID to Delete | 

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

# **bundles_get_bundle**
> UpdateSystemModelsBundle bundles_get_bundle(id)

Get a specific Bundle by ID.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_bundle import UpdateSystemModelsBundle
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
    api_instance = openapi_client.BundlesApi(api_client)
    id = 'id_example' # str | The Bundle ID

    try:
        # Get a specific Bundle by ID.
        api_response = api_instance.bundles_get_bundle(id)
        print("The response of BundlesApi->bundles_get_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundlesApi->bundles_get_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Bundle ID | 

### Return type

[**UpdateSystemModelsBundle**](UpdateSystemModelsBundle.md)

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

# **bundles_get_bundles**
> APIPagedResponseUpdateSystemModelsBundle bundles_get_bundles(update_group_id=update_group_id, active=active, limit=limit, offset=offset, bundle_number=bundle_number)

Get the list of bundles.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_bundle import APIPagedResponseUpdateSystemModelsBundle
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
    api_instance = openapi_client.BundlesApi(api_client)
    update_group_id = 'update_group_id_example' # str | Optional. Filter by UpdateGroup ID. (optional)
    active = True # bool | Optional. Filter by active status. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)
    bundle_number = 56 # int | Optional. If provided, filters by BundleNumber. (optional)

    try:
        # Get the list of bundles.
        api_response = api_instance.bundles_get_bundles(update_group_id=update_group_id, active=active, limit=limit, offset=offset, bundle_number=bundle_number)
        print("The response of BundlesApi->bundles_get_bundles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundlesApi->bundles_get_bundles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_group_id** | **str**| Optional. Filter by UpdateGroup ID. | [optional] 
 **active** | **bool**| Optional. Filter by active status. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 
 **bundle_number** | **int**| Optional. If provided, filters by BundleNumber. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsBundle**](APIPagedResponseUpdateSystemModelsBundle.md)

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

# **bundles_post_bundle**
> str bundles_post_bundle(update_system_models_bundle)

Add a Bundle to the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_bundle import UpdateSystemModelsBundle
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
    api_instance = openapi_client.BundlesApi(api_client)
    update_system_models_bundle = openapi_client.UpdateSystemModelsBundle() # UpdateSystemModelsBundle | The bundle to add

    try:
        # Add a Bundle to the Update System.
        api_response = api_instance.bundles_post_bundle(update_system_models_bundle)
        print("The response of BundlesApi->bundles_post_bundle:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundlesApi->bundles_post_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_bundle** | [**UpdateSystemModelsBundle**](UpdateSystemModelsBundle.md)| The bundle to add | 

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

# **bundles_put_bundle**
> bundles_put_bundle(id, update_system_models_bundle)

Modify a Bundle in the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_bundle import UpdateSystemModelsBundle
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
    api_instance = openapi_client.BundlesApi(api_client)
    id = 'id_example' # str | The unique ID of the Bundle
    update_system_models_bundle = openapi_client.UpdateSystemModelsBundle() # UpdateSystemModelsBundle | The bundle to modify

    try:
        # Modify a Bundle in the Update System.
        api_instance.bundles_put_bundle(id, update_system_models_bundle)
    except Exception as e:
        print("Exception when calling BundlesApi->bundles_put_bundle: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The unique ID of the Bundle | 
 **update_system_models_bundle** | [**UpdateSystemModelsBundle**](UpdateSystemModelsBundle.md)| The bundle to modify | 

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

