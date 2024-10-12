# openapi_client.PackageTypetoBundlesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**package_typeto_bundles_delete**](PackageTypetoBundlesApi.md#package_typeto_bundles_delete) | **DELETE** /api/v2/PackageTypetoBundles | Delete a Package Type to Bundle Relationship.
[**package_typeto_bundles_get**](PackageTypetoBundlesApi.md#package_typeto_bundles_get) | **GET** /api/v2/PackageTypetoBundles | Get all of the Package Type to Bundle Relationships.
[**package_typeto_bundles_post**](PackageTypetoBundlesApi.md#package_typeto_bundles_post) | **POST** /api/v2/PackageTypetoBundles | Add a new Package Type ID to Bundle Relationship.
[**package_typeto_bundles_put**](PackageTypetoBundlesApi.md#package_typeto_bundles_put) | **PUT** /api/v2/PackageTypetoBundles | Update a Package Type ID to Bundle Relationship.


# **package_typeto_bundles_delete**
> package_typeto_bundles_delete(bundle_id, package_type_id)

Delete a Package Type to Bundle Relationship.

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
    api_instance = openapi_client.PackageTypetoBundlesApi(api_client)
    bundle_id = 'bundle_id_example' # str | The BundleID
    package_type_id = 'package_type_id_example' # str | The PackageTypeID

    try:
        # Delete a Package Type to Bundle Relationship.
        api_instance.package_typeto_bundles_delete(bundle_id, package_type_id)
    except Exception as e:
        print("Exception when calling PackageTypetoBundlesApi->package_typeto_bundles_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundle_id** | **str**| The BundleID | 
 **package_type_id** | **str**| The PackageTypeID | 

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

# **package_typeto_bundles_get**
> APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle package_typeto_bundles_get(bundle_id=bundle_id, limit=limit, offset=offset)

Get all of the Package Type to Bundle Relationships.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.api_paged_response_update_system_models_package_type_i_dto_bundle import APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle
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
    api_instance = openapi_client.PackageTypetoBundlesApi(api_client)
    bundle_id = 'bundle_id_example' # str | Optional. Filter by BundleID. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get all of the Package Type to Bundle Relationships.
        api_response = api_instance.package_typeto_bundles_get(bundle_id=bundle_id, limit=limit, offset=offset)
        print("The response of PackageTypetoBundlesApi->package_typeto_bundles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PackageTypetoBundlesApi->package_typeto_bundles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundle_id** | **str**| Optional. Filter by BundleID. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle**](APIPagedResponseUpdateSystemModelsPackageTypeIDtoBundle.md)

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

# **package_typeto_bundles_post**
> package_typeto_bundles_post(update_system_models_package_type_i_dto_bundle)

Add a new Package Type ID to Bundle Relationship.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_type_i_dto_bundle import UpdateSystemModelsPackageTypeIDtoBundle
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
    api_instance = openapi_client.PackageTypetoBundlesApi(api_client)
    update_system_models_package_type_i_dto_bundle = openapi_client.UpdateSystemModelsPackageTypeIDtoBundle() # UpdateSystemModelsPackageTypeIDtoBundle | The PackageTypeToBundle to add.

    try:
        # Add a new Package Type ID to Bundle Relationship.
        api_instance.package_typeto_bundles_post(update_system_models_package_type_i_dto_bundle)
    except Exception as e:
        print("Exception when calling PackageTypetoBundlesApi->package_typeto_bundles_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_package_type_i_dto_bundle** | [**UpdateSystemModelsPackageTypeIDtoBundle**](UpdateSystemModelsPackageTypeIDtoBundle.md)| The PackageTypeToBundle to add. | 

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

# **package_typeto_bundles_put**
> package_typeto_bundles_put(update_system_models_package_type_i_dto_bundle)

Update a Package Type ID to Bundle Relationship.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_package_type_i_dto_bundle import UpdateSystemModelsPackageTypeIDtoBundle
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
    api_instance = openapi_client.PackageTypetoBundlesApi(api_client)
    update_system_models_package_type_i_dto_bundle = openapi_client.UpdateSystemModelsPackageTypeIDtoBundle() # UpdateSystemModelsPackageTypeIDtoBundle | The PackageTypeToBundle to update.

    try:
        # Update a Package Type ID to Bundle Relationship.
        api_instance.package_typeto_bundles_put(update_system_models_package_type_i_dto_bundle)
    except Exception as e:
        print("Exception when calling PackageTypetoBundlesApi->package_typeto_bundles_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **update_system_models_package_type_i_dto_bundle** | [**UpdateSystemModelsPackageTypeIDtoBundle**](UpdateSystemModelsPackageTypeIDtoBundle.md)| The PackageTypeToBundle to update. | 

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

