# openapi_client.DistributeApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apple_mapping_create**](DistributeApi.md#apple_mapping_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/apple_mapping | 
[**apple_mapping_delete**](DistributeApi.md#apple_mapping_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/apple_mapping | 
[**apple_mapping_get**](DistributeApi.md#apple_mapping_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/apple_mapping | 
[**apple_mapping_test_flight_groups**](DistributeApi.md#apple_mapping_test_flight_groups) | **GET** /v0.1/apps/{owner_name}/{app_name}/apple_test_flight_groups | 
[**devices_device_details**](DistributeApi.md#devices_device_details) | **GET** /v0.1/user/devices/{device_udid} | 
[**devices_get_release_update_devices_status**](DistributeApi.md#devices_get_release_update_devices_status) | **GET** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/update_devices/{resign_id} | 
[**devices_list**](DistributeApi.md#devices_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/devices | 
[**devices_list_csv_format**](DistributeApi.md#devices_list_csv_format) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/devices/download_devices_list | 
[**devices_register_user_for_device**](DistributeApi.md#devices_register_user_for_device) | **POST** /v0.1/users/{user_id}/devices/register | 
[**devices_remove_user_device**](DistributeApi.md#devices_remove_user_device) | **DELETE** /v0.1/user/devices/{device_udid} | 
[**devices_user_devices_list**](DistributeApi.md#devices_user_devices_list) | **GET** /v0.1/user/devices | 
[**distibution_releases_install_analytics**](DistributeApi.md#distibution_releases_install_analytics) | **POST** /v0.1/public/apps/{owner_name}/{app_name}/install_analytics | 
[**provisioning_profile**](DistributeApi.md#provisioning_profile) | **GET** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/provisioning_profile | 
[**releases_add_distribution_group**](DistributeApi.md#releases_add_distribution_group) | **POST** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/groups | 
[**releases_add_store**](DistributeApi.md#releases_add_store) | **POST** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/stores | 
[**releases_add_testers**](DistributeApi.md#releases_add_testers) | **POST** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/testers | 
[**releases_available_to_tester**](DistributeApi.md#releases_available_to_tester) | **GET** /v0.1/apps/{owner_name}/{app_name}/releases/filter_by_tester | 
[**releases_create_release_upload**](DistributeApi.md#releases_create_release_upload) | **POST** /v0.1/apps/{owner_name}/{app_name}/uploads/releases | 
[**releases_delete**](DistributeApi.md#releases_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id} | 
[**releases_delete_distribution_group**](DistributeApi.md#releases_delete_distribution_group) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/groups/{group_id} | 
[**releases_delete_distribution_store**](DistributeApi.md#releases_delete_distribution_store) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/stores/{store_id} | 
[**releases_delete_distribution_tester**](DistributeApi.md#releases_delete_distribution_tester) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/testers/{tester_id} | 
[**releases_delete_tester_from_destinations**](DistributeApi.md#releases_delete_tester_from_destinations) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/testers/{tester_id} | 
[**releases_delete_with_distribution_group_id**](DistributeApi.md#releases_delete_with_distribution_group_id) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/releases/{release_id} | 
[**releases_get_ios_manifest**](DistributeApi.md#releases_get_ios_manifest) | **GET** /v0.1/public/apps/{app_id}/releases/{release_id}/ios_manifest | 
[**releases_get_latest_by_distribution_group**](DistributeApi.md#releases_get_latest_by_distribution_group) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/releases/{release_id} | 
[**releases_get_latest_by_hash**](DistributeApi.md#releases_get_latest_by_hash) | **GET** /v0.1/sdk/apps/{app_secret}/releases/{release_hash} | 
[**releases_get_latest_by_public_distribution_group**](DistributeApi.md#releases_get_latest_by_public_distribution_group) | **GET** /v0.1/public/sdk/apps/{app_secret}/distribution_groups/{distribution_group_id}/releases/latest | 
[**releases_get_latest_by_user**](DistributeApi.md#releases_get_latest_by_user) | **GET** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id} | 
[**releases_get_latest_private_release**](DistributeApi.md#releases_get_latest_private_release) | **GET** /v0.1/sdk/apps/{app_secret}/releases/private/latest | 
[**releases_get_latest_public_release**](DistributeApi.md#releases_get_latest_public_release) | **GET** /v0.1/public/sdk/apps/{app_secret}/releases/latest | 
[**releases_get_public_groups_for_release_by_hash**](DistributeApi.md#releases_get_public_groups_for_release_by_hash) | **GET** /v0.1/public/sdk/apps/{app_secret}/releases/{release_hash}/public_distribution_groups | 
[**releases_get_release_upload_status**](DistributeApi.md#releases_get_release_upload_status) | **GET** /v0.1/apps/{owner_name}/{app_name}/uploads/releases/{upload_id} | 
[**releases_get_sparkle_feed**](DistributeApi.md#releases_get_sparkle_feed) | **GET** /v0.1/public/sparkle/apps/{app_secret} | 
[**releases_list**](DistributeApi.md#releases_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/releases | 
[**releases_list_by_distribution_group**](DistributeApi.md#releases_list_by_distribution_group) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_groups/{distribution_group_name}/releases | 
[**releases_list_latest**](DistributeApi.md#releases_list_latest) | **GET** /v0.1/apps/{owner_name}/{app_name}/recent_releases | 
[**releases_put_distribution_group**](DistributeApi.md#releases_put_distribution_group) | **PUT** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/groups/{group_id} | 
[**releases_put_distribution_tester**](DistributeApi.md#releases_put_distribution_tester) | **PUT** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id}/testers/{tester_id} | 
[**releases_update**](DistributeApi.md#releases_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id} | 
[**releases_update_details**](DistributeApi.md#releases_update_details) | **PUT** /v0.1/apps/{owner_name}/{app_name}/releases/{release_id} | 
[**releases_update_release_upload_status**](DistributeApi.md#releases_update_release_upload_status) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/uploads/releases/{upload_id} | 
[**store_notifications_get_notification_by_app_id**](DistributeApi.md#store_notifications_get_notification_by_app_id) | **GET** /v0.1/apps/{owner_name}/{app_name}/store_service_status | 
[**store_release_publish_logs_get**](DistributeApi.md#store_release_publish_logs_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/releases/{release_id}/publish_logs | 
[**store_releases_delete**](DistributeApi.md#store_releases_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/releases/{release_id} | 
[**store_releases_get**](DistributeApi.md#store_releases_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/releases/{release_id} | 
[**store_releases_get_latest**](DistributeApi.md#store_releases_get_latest) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/latest_release | 
[**store_releases_get_publish_error**](DistributeApi.md#store_releases_get_publish_error) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/releases/{release_id}/publish_error_details | 
[**store_releases_get_real_time_status_by_release_id**](DistributeApi.md#store_releases_get_real_time_status_by_release_id) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/releases/{release_id}/realtimestatus | 
[**store_releases_list**](DistributeApi.md#store_releases_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}/releases | 
[**stores_create**](DistributeApi.md#stores_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/distribution_stores | 
[**stores_delete**](DistributeApi.md#stores_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name} | 
[**stores_get**](DistributeApi.md#stores_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name} | 
[**stores_list**](DistributeApi.md#stores_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/distribution_stores | 
[**stores_patch**](DistributeApi.md#stores_patch) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name} | 


# **apple_mapping_create**
> AppleMappingGet200Response apple_mapping_create(owner_name, app_name, apple_mapping_create_request)



Create a mapping for an existing app in apple store for the specified application.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apple_mapping_create_request import AppleMappingCreateRequest
from openapi_client.models.apple_mapping_get200_response import AppleMappingGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    apple_mapping_create_request = openapi_client.AppleMappingCreateRequest() # AppleMappingCreateRequest | The apple app mapping object

    try:
        api_response = api_instance.apple_mapping_create(owner_name, app_name, apple_mapping_create_request)
        print("The response of DistributeApi->apple_mapping_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->apple_mapping_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **apple_mapping_create_request** | [**AppleMappingCreateRequest**](AppleMappingCreateRequest.md)| The apple app mapping object | 

### Return type

[**AppleMappingGet200Response**](AppleMappingGet200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apple_mapping_delete**
> apple_mapping_delete(owner_name, app_name, body=body)



Delete mapping of apple app to an existing app in apple store.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = 'body_example' # str |  (optional)

    try:
        api_instance.apple_mapping_delete(owner_name, app_name, body=body)
    except Exception as e:
        print("Exception when calling DistributeApi->apple_mapping_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apple_mapping_get**
> AppleMappingGet200Response apple_mapping_get(owner_name, app_name)



Get mapping of apple app to an existing app in apple store.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apple_mapping_get200_response import AppleMappingGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.apple_mapping_get(owner_name, app_name)
        print("The response of DistributeApi->apple_mapping_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->apple_mapping_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AppleMappingGet200Response**](AppleMappingGet200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apple_mapping_test_flight_groups**
> List[AppleMappingTestFlightGroups200ResponseInner] apple_mapping_test_flight_groups(owner_name, app_name)



Fetch all apple test flight groups

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.apple_mapping_test_flight_groups200_response_inner import AppleMappingTestFlightGroups200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.apple_mapping_test_flight_groups(owner_name, app_name)
        print("The response of DistributeApi->apple_mapping_test_flight_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->apple_mapping_test_flight_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[AppleMappingTestFlightGroups200ResponseInner]**](AppleMappingTestFlightGroups200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_device_details**
> DevicesList200ResponseInner devices_device_details(device_udid)



Returns the device details.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.devices_list200_response_inner import DevicesList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    device_udid = 'device_udid_example' # str | The UDID of the device

    try:
        api_response = api_instance.devices_device_details(device_udid)
        print("The response of DistributeApi->devices_device_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_device_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_udid** | **str**| The UDID of the device | 

### Return type

[**DevicesList200ResponseInner**](DevicesList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | &lt;b&gt;bad_request&lt;/b&gt;: Devices information can only be requested for iOS apps.  |  -  |
**403** | &lt;b&gt;forbidden&lt;/b&gt;: The user is not allowed to view someone else&#39;s device.  |  -  |
**404** | &lt;b&gt;not_found&lt;/b&gt;: The user or device can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_release_update_devices_status**
> DevicesGetReleaseUpdateDevicesStatus200Response devices_get_release_update_devices_status(release_id, resign_id, owner_name, app_name, include_provisioning_profile=include_provisioning_profile)



Returns the resign status to the caller

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.devices_get_release_update_devices_status200_response import DevicesGetReleaseUpdateDevicesStatus200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 'release_id_example' # str | The ID of the release.
    resign_id = 'resign_id_example' # str | The ID of the resign operation.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    include_provisioning_profile = True # bool | A boolean value that indicates if the provisioning profile should be return in addition to the status. When set to true, the provisioning profile will be returned only when status is 'complete' or 'preparing_for_testers'. (optional)

    try:
        api_response = api_instance.devices_get_release_update_devices_status(release_id, resign_id, owner_name, app_name, include_provisioning_profile=include_provisioning_profile)
        print("The response of DistributeApi->devices_get_release_update_devices_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_get_release_update_devices_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **str**| The ID of the release. | 
 **resign_id** | **str**| The ID of the resign operation. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **include_provisioning_profile** | **bool**| A boolean value that indicates if the provisioning profile should be return in addition to the status. When set to true, the provisioning profile will be returned only when status is &#39;complete&#39; or &#39;preparing_for_testers&#39;. | [optional] 

### Return type

[**DevicesGetReleaseUpdateDevicesStatus200Response**](DevicesGetReleaseUpdateDevicesStatus200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |
**404** | &lt;b&gt;not_found&lt;/b&gt;: A distribution group can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list**
> List[DevicesList200ResponseInner] devices_list(distribution_group_name, owner_name, app_name, release_id=release_id)



Returns all devices associated with the given distribution group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.devices_list200_response_inner import DevicesList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    release_id = 3.4 # float | when provided, gets the provisioning state of the devices owned by users of this distribution group when compared to the provided release. (optional)

    try:
        api_response = api_instance.devices_list(distribution_group_name, owner_name, app_name, release_id=release_id)
        print("The response of DistributeApi->devices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_group_name** | **str**| The name of the distribution group. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **release_id** | **float**| when provided, gets the provisioning state of the devices owned by users of this distribution group when compared to the provided release. | [optional] 

### Return type

[**List[DevicesList200ResponseInner]**](DevicesList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | &lt;b&gt;bad_request&lt;/b&gt;: Devices information can only be requested for iOS apps.  |  -  |
**404** | &lt;b&gt;not_found&lt;/b&gt;: A distribution group can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_list_csv_format**
> devices_list_csv_format(distribution_group_name, owner_name, app_name, unprovisioned_only=unprovisioned_only, udids=udids)



Returns all devices associated with the given distribution group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    unprovisioned_only = False # bool | when true, filters out provisioned devices (optional) (default to False)
    udids = ['udids_example'] # List[str] | multiple UDIDs which should be part of the resulting CSV. (optional)

    try:
        api_instance.devices_list_csv_format(distribution_group_name, owner_name, app_name, unprovisioned_only=unprovisioned_only, udids=udids)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_list_csv_format: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_group_name** | **str**| The name of the distribution group. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **unprovisioned_only** | **bool**| when true, filters out provisioned devices | [optional] [default to False]
 **udids** | [**List[str]**](str.md)| multiple UDIDs which should be part of the resulting CSV. | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | &lt;b&gt;bad_request&lt;/b&gt;: Devices information can only be requested for iOS apps.  |  -  |
**404** | &lt;b&gt;not_found&lt;/b&gt;: A distribution group can&#39;t be found.  |  -  |
**500** | An internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_register_user_for_device**
> DevicesList200ResponseInner devices_register_user_for_device(user_id, devices_register_user_for_device_request)



Registers a user for an existing device

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.devices_list200_response_inner import DevicesList200ResponseInner
from openapi_client.models.devices_register_user_for_device_request import DevicesRegisterUserForDeviceRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    user_id = 'user_id_example' # str | The ID of the user
    devices_register_user_for_device_request = openapi_client.DevicesRegisterUserForDeviceRequest() # DevicesRegisterUserForDeviceRequest | The device info.

    try:
        api_response = api_instance.devices_register_user_for_device(user_id, devices_register_user_for_device_request)
        print("The response of DistributeApi->devices_register_user_for_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_register_user_for_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the user | 
 **devices_register_user_for_device_request** | [**DevicesRegisterUserForDeviceRequest**](DevicesRegisterUserForDeviceRequest.md)| The device info. | 

### Return type

[**DevicesList200ResponseInner**](DevicesList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | &lt;b&gt;not_found&lt;/b&gt;: The user or the device can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_remove_user_device**
> devices_remove_user_device(device_udid)



Removes an existing device from a user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    device_udid = 'device_udid_example' # str | The UDID of the device

    try:
        api_instance.devices_remove_user_device(device_udid)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_remove_user_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_udid** | **str**| The UDID of the device | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | &lt;b&gt;forbidden&lt;/b&gt;: The user is not allowed to delete someone else&#39;s device.  |  -  |
**404** | &lt;b&gt;not_found&lt;/b&gt;: The user or the device can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_user_devices_list**
> List[DevicesList200ResponseInner] devices_user_devices_list()



Returns all devices associated with the given user.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.devices_list200_response_inner import DevicesList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)

    try:
        api_response = api_instance.devices_user_devices_list()
        print("The response of DistributeApi->devices_user_devices_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->devices_user_devices_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DevicesList200ResponseInner]**](DevicesList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | &lt;b&gt;bad_request&lt;/b&gt;: Devices information can only be requested for iOS apps.  |  -  |
**403** | &lt;b&gt;forbidden&lt;/b&gt;: The user is not allowed to view someone else&#39;s devices.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **distibution_releases_install_analytics**
> distibution_releases_install_analytics(owner_name, app_name, distibution_releases_install_analytics_request)



Notify download(s) for the provided distribution release(s).

### Example


```python
import openapi_client
from openapi_client.models.distibution_releases_install_analytics_request import DistibutionReleasesInstallAnalyticsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the app owner
    app_name = 'app_name_example' # str | The name of the app
    distibution_releases_install_analytics_request = openapi_client.DistibutionReleasesInstallAnalyticsRequest() # DistibutionReleasesInstallAnalyticsRequest | The install analytics request payload

    try:
        api_instance.distibution_releases_install_analytics(owner_name, app_name, distibution_releases_install_analytics_request)
    except Exception as e:
        print("Exception when calling DistributeApi->distibution_releases_install_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the app owner | 
 **app_name** | **str**| The name of the app | 
 **distibution_releases_install_analytics_request** | [**DistibutionReleasesInstallAnalyticsRequest**](DistibutionReleasesInstallAnalyticsRequest.md)| The install analytics request payload | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Install Analytics Notification Sent Successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provisioning_profile**
> ProvisioningProfileResponse provisioning_profile(release_id, owner_name, app_name)



Return information about the provisioning profile. Only available for iOS.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.provisioning_profile_response import ProvisioningProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The release_id
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.provisioning_profile(release_id, owner_name, app_name)
        print("The response of DistributeApi->provisioning_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->provisioning_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The release_id | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ProvisioningProfileResponse**](ProvisioningProfileResponse.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | The app&#39;s OS is not iOS. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_add_distribution_group**
> ReleasesAddDistributionGroup201Response releases_add_distribution_group(release_id, owner_name, app_name, releases_add_distribution_group_request)



Distributes a release to a group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_add_distribution_group201_response import ReleasesAddDistributionGroup201Response
from openapi_client.models.releases_add_distribution_group_request import ReleasesAddDistributionGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_add_distribution_group_request = openapi_client.ReleasesAddDistributionGroupRequest() # ReleasesAddDistributionGroupRequest | The release information.

    try:
        api_response = api_instance.releases_add_distribution_group(release_id, owner_name, app_name, releases_add_distribution_group_request)
        print("The response of DistributeApi->releases_add_distribution_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_add_distribution_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_add_distribution_group_request** | [**ReleasesAddDistributionGroupRequest**](ReleasesAddDistributionGroupRequest.md)| The release information. | 

### Return type

[**ReleasesAddDistributionGroup201Response**](ReleasesAddDistributionGroup201Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Failure |  -  |
**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_add_store**
> ReleasesAddStore201Response releases_add_store(release_id, owner_name, app_name, releases_add_store_request)



Distributes a release to a store

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_add_store201_response import ReleasesAddStore201Response
from openapi_client.models.releases_add_store_request import ReleasesAddStoreRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_add_store_request = openapi_client.ReleasesAddStoreRequest() # ReleasesAddStoreRequest | The release information.

    try:
        api_response = api_instance.releases_add_store(release_id, owner_name, app_name, releases_add_store_request)
        print("The response of DistributeApi->releases_add_store:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_add_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_add_store_request** | [**ReleasesAddStoreRequest**](ReleasesAddStoreRequest.md)| The release information. | 

### Return type

[**ReleasesAddStore201Response**](ReleasesAddStore201Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Failure |  -  |
**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_add_testers**
> ReleasesAddDistributionGroup201Response releases_add_testers(release_id, owner_name, app_name, releases_add_testers_request)



Distributes a release to a user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_add_distribution_group201_response import ReleasesAddDistributionGroup201Response
from openapi_client.models.releases_add_testers_request import ReleasesAddTestersRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_add_testers_request = openapi_client.ReleasesAddTestersRequest() # ReleasesAddTestersRequest | The release information.

    try:
        api_response = api_instance.releases_add_testers(release_id, owner_name, app_name, releases_add_testers_request)
        print("The response of DistributeApi->releases_add_testers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_add_testers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_add_testers_request** | [**ReleasesAddTestersRequest**](ReleasesAddTestersRequest.md)| The release information. | 

### Return type

[**ReleasesAddDistributionGroup201Response**](ReleasesAddDistributionGroup201Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Failure |  -  |
**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_available_to_tester**
> List[ReleasesListLatest200ResponseInner] releases_available_to_tester(owner_name, app_name, published_only=published_only)



Return detailed information about releases avaiable to a tester.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_list_latest200_response_inner import ReleasesListLatest200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    published_only = True # bool | when *true*, filters out releases that were uploaded but were never distributed. Releases that under deleted distribution groups will not be filtered out. (optional)

    try:
        api_response = api_instance.releases_available_to_tester(owner_name, app_name, published_only=published_only)
        print("The response of DistributeApi->releases_available_to_tester:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_available_to_tester: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **published_only** | **bool**| when *true*, filters out releases that were uploaded but were never distributed. Releases that under deleted distribution groups will not be filtered out. | [optional] 

### Return type

[**List[ReleasesListLatest200ResponseInner]**](ReleasesListLatest200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_create_release_upload**
> ReleasesCreateReleaseUpload201Response releases_create_release_upload(owner_name, app_name, releases_create_release_upload_request=releases_create_release_upload_request)



Initiate a new release upload. This API is part of multi-step upload process.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_create_release_upload201_response import ReleasesCreateReleaseUpload201Response
from openapi_client.models.releases_create_release_upload_request import ReleasesCreateReleaseUploadRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_create_release_upload_request = openapi_client.ReleasesCreateReleaseUploadRequest() # ReleasesCreateReleaseUploadRequest | Optional parameters to create releases with user defined metadata (optional)

    try:
        api_response = api_instance.releases_create_release_upload(owner_name, app_name, releases_create_release_upload_request=releases_create_release_upload_request)
        print("The response of DistributeApi->releases_create_release_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_create_release_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_create_release_upload_request** | [**ReleasesCreateReleaseUploadRequest**](ReleasesCreateReleaseUploadRequest.md)| Optional parameters to create releases with user defined metadata | [optional] 

### Return type

[**ReleasesCreateReleaseUpload201Response**](ReleasesCreateReleaseUpload201Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | The request contained invalid properties. |  -  |
**404** | Error codes: - &#x60;not_found&#x60; - The app doesn&#39;t exist.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_delete**
> releases_delete(release_id, owner_name, app_name)



Deletes a release.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.releases_delete(release_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | An app or a release couldn&#39;t be found  |  -  |
**500** | An internal error. if delete has partially failed **partially_deleted** error_code will be returned. - &#x60;partially_deleted&#x60;: Release was removed from all distribution groups, but couldn&#39;t be deleted from App Center.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_delete_distribution_group**
> releases_delete_distribution_group(release_id, group_id, owner_name, app_name)



Delete the given distribution group from the release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    group_id = 'group_id_example' # str | The id of the distribution group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.releases_delete_distribution_group(release_id, group_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_delete_distribution_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **group_id** | **str**| The id of the distribution group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Distribution group destination can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_delete_distribution_store**
> releases_delete_distribution_store(release_id, store_id, owner_name, app_name)



Delete the given distribution store from the release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    store_id = 'store_id_example' # str | The id of the distribution store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.releases_delete_distribution_store(release_id, store_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_delete_distribution_store: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **store_id** | **str**| The id of the distribution store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Distribution store destination can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_delete_distribution_tester**
> releases_delete_distribution_tester(release_id, tester_id, owner_name, app_name)



Delete the given tester from the release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    tester_id = 'tester_id_example' # str | The id of the tester
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.releases_delete_distribution_tester(release_id, tester_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_delete_distribution_tester: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **tester_id** | **str**| The id of the tester | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Tester can&#39;t be found  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_delete_tester_from_destinations**
> releases_delete_tester_from_destinations(tester_id, owner_name, app_name)



Delete the given tester from the all releases

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    tester_id = 'tester_id_example' # str | The id of the tester
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.releases_delete_tester_from_destinations(tester_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_delete_tester_from_destinations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tester_id** | **str**| The id of the tester | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Tester can&#39;t be found  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_delete_with_distribution_group_id**
> releases_delete_with_distribution_group_id(owner_name, app_name, distribution_group_name, release_id)



Deletes a release with id 'release_id' in a given distribution group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the app owner
    app_name = 'app_name_example' # str | The name of the app
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group.
    release_id = 56 # int | The ID identifying the unique release.

    try:
        api_instance.releases_delete_with_distribution_group_id(owner_name, app_name, distribution_group_name, release_id)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_delete_with_distribution_group_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the app owner | 
 **app_name** | **str**| The name of the app | 
 **distribution_group_name** | **str**| The name of the distribution group. | 
 **release_id** | **int**| The ID identifying the unique release. | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Error codes: - &#x60;distribution_group_not_found&#x60; - Distribution group or the app doesn&#39;t exist. - &#x60;not_found&#x60; - release isn&#39;t found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_ios_manifest**
> releases_get_ios_manifest(app_id, release_id, token)



Returns the manifest.plist in XML format for installing the release on a device. Only available for iOS.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_id = 'app_id_example' # str | The ID of the application
    release_id = 56 # int | The release_id
    token = 'token_example' # str | A hash that authorizes the download if it matches the release info.

    try:
        api_instance.releases_get_ios_manifest(app_id, release_id, token)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_ios_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| The ID of the application | 
 **release_id** | **int**| The release_id | 
 **token** | **str**| A hash that authorizes the download if it matches the release info. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | The app&#39;s OS is not iOS. |  -  |
**403** | Forbidden - The token provided doesn&#39;t match the release&#39;s token. |  -  |
**404** | The app or release can&#39;t be found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_latest_by_distribution_group**
> ReleasesGetLatestByDistributionGroup200Response releases_get_latest_by_distribution_group(owner_name, app_name, distribution_group_name, release_id, is_install_page=is_install_page)



Return detailed information about a distributed release in a given distribution group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the app owner
    app_name = 'app_name_example' # str | The name of the app
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group.
    release_id = 'release_id_example' # str | Also supports the constant `latest`, which will return the latest release in the distribution group.
    is_install_page = True # bool | The check if the request is from Install page (optional)

    try:
        api_response = api_instance.releases_get_latest_by_distribution_group(owner_name, app_name, distribution_group_name, release_id, is_install_page=is_install_page)
        print("The response of DistributeApi->releases_get_latest_by_distribution_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_latest_by_distribution_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the app owner | 
 **app_name** | **str**| The name of the app | 
 **distribution_group_name** | **str**| The name of the distribution group. | 
 **release_id** | **str**| Also supports the constant &#x60;latest&#x60;, which will return the latest release in the distribution group. | 
 **is_install_page** | **bool**| The check if the request is from Install page | [optional] 

### Return type

[**ReleasesGetLatestByDistributionGroup200Response**](ReleasesGetLatestByDistributionGroup200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Error Codes: - &#x60;not_found&#x60; - Distribution group or the app doesn&#39;t exist - &#x60;no_releases_for_app&#x60; - App has no releases.  |  -  |
**501** | Requesting a specific release_id is not supported.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_latest_by_hash**
> ReleasesGetLatestByDistributionGroup200Response releases_get_latest_by_hash(app_secret, release_hash, udid=udid)



If 'latest' is not specified then it will return the specified release if it's enabled. If 'latest' is specified, regardless of whether a release hash is provided, the latest enabled release is returned.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_secret = 'app_secret_example' # str | The secret of the target application
    release_hash = 'release_hash_example' # str | The hash of the release or 'latest' to get the latest release from all the distribution groups assigned to the current user.
    udid = 'udid_example' # str | When passing `udid` in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms. (optional)

    try:
        api_response = api_instance.releases_get_latest_by_hash(app_secret, release_hash, udid=udid)
        print("The response of DistributeApi->releases_get_latest_by_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_latest_by_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_secret** | **str**| The secret of the target application | 
 **release_hash** | **str**| The hash of the release or &#39;latest&#39; to get the latest release from all the distribution groups assigned to the current user. | 
 **udid** | **str**| When passing &#x60;udid&#x60; in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms. | [optional] 

### Return type

[**ReleasesGetLatestByDistributionGroup200Response**](ReleasesGetLatestByDistributionGroup200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If called with a specific &#x60;release_hash&#x60; return the app&#39;s &#39;display_name&#39;&#39; and &#39;buildIdentifier&#39;. If &#39;release_hash&#39; is &#39;latest&#39; return the full release details of the latest release that was distributed to the current user (from all the distribution groups). |  -  |
**404** | Error codes: - &#x60;not_found&#x60; - A release or an app can&#39;t be found. - &#x60;no_releases_for_user&#x60; - No releases available for that user (will only be returned when &#x60;release_hash&#x60; is &#x60;latest&#x60;)  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_latest_by_public_distribution_group**
> ReleasesGetLatestByDistributionGroup200Response releases_get_latest_by_public_distribution_group(app_secret, distribution_group_id, is_install_page=is_install_page)



Get a release with 'latest' for the given public group.

### Example


```python
import openapi_client
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_secret = 'app_secret_example' # str | The secret of the target application
    distribution_group_id = 'distribution_group_id_example' # str | the id for destination
    is_install_page = True # bool | The check if the request is from Install page (optional)

    try:
        api_response = api_instance.releases_get_latest_by_public_distribution_group(app_secret, distribution_group_id, is_install_page=is_install_page)
        print("The response of DistributeApi->releases_get_latest_by_public_distribution_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_latest_by_public_distribution_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_secret** | **str**| The secret of the target application | 
 **distribution_group_id** | **str**| the id for destination | 
 **is_install_page** | **bool**| The check if the request is from Install page | [optional] 

### Return type

[**ReleasesGetLatestByDistributionGroup200Response**](ReleasesGetLatestByDistributionGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The full release details of the latest release that was distributed from the given public group. |  -  |
**403** | Error Codes: - &#x60;forbidden&#x60; - Unauthorized to access private distribution group  |  -  |
**404** | Error Codes: - &#x60;not_found&#x60; - Distribution group or the app doesn&#39;t exist - &#x60;no_releases_for_app&#x60; - App has no releases.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_latest_by_user**
> ReleasesGetLatestByDistributionGroup200Response releases_get_latest_by_user(release_id, owner_name, app_name, udid=udid, is_install_page=is_install_page)



Get a release with id `release_id`. If `release_id` is `latest`, return the latest release that was distributed to the current user (from all the distribution groups).

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 'release_id_example' # str | The ID of the release, or `latest` to get the latest release from all the distribution groups assigned to the current user.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    udid = 'udid_example' # str | when supplied, this call will also check if the given UDID is provisioned. Will be ignored for non-iOS platforms. The value will be returned in the property is_udid_provisioned. (optional)
    is_install_page = True # bool | The check if the request is from Install page (optional)

    try:
        api_response = api_instance.releases_get_latest_by_user(release_id, owner_name, app_name, udid=udid, is_install_page=is_install_page)
        print("The response of DistributeApi->releases_get_latest_by_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_latest_by_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **str**| The ID of the release, or &#x60;latest&#x60; to get the latest release from all the distribution groups assigned to the current user. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **udid** | **str**| when supplied, this call will also check if the given UDID is provisioned. Will be ignored for non-iOS platforms. The value will be returned in the property is_udid_provisioned. | [optional] 
 **is_install_page** | **bool**| The check if the request is from Install page | [optional] 

### Return type

[**ReleasesGetLatestByDistributionGroup200Response**](ReleasesGetLatestByDistributionGroup200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | &#x60;release_id&#x60; is not an integer or the string &#x60;latest&#x60;.  |  -  |
**404** | Error codes: - &#x60;not_found&#x60; - A release or an app can&#39;t be found. - &#x60;no_releases_for_user&#x60; - No releases available for that user (will only be returned when &#x60;release_id&#x60; is &#x60;latest&#x60;)  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_latest_private_release**
> ReleasesGetLatestByDistributionGroup200Response releases_get_latest_private_release(app_secret, udid=udid)



Get the latest release distributed to a private group the given user is a member of for the given app.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_secret = 'app_secret_example' # str | The secret of the target application
    udid = 'udid_example' # str | When passing `udid` in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms. (optional)

    try:
        api_response = api_instance.releases_get_latest_private_release(app_secret, udid=udid)
        print("The response of DistributeApi->releases_get_latest_private_release:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_latest_private_release: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_secret** | **str**| The secret of the target application | 
 **udid** | **str**| When passing &#x60;udid&#x60; in the query string, a provisioning check for the given device ID will be done. Will be ignored for non-iOS platforms. | [optional] 

### Return type

[**ReleasesGetLatestByDistributionGroup200Response**](ReleasesGetLatestByDistributionGroup200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the full release details of the latest release that was distributed to the current user (from all the private distribution groups). |  -  |
**404** | Error codes: - &#x60;not_found&#x60; - A release or an app can&#39;t be found. - &#x60;no_releases_for_user&#x60; - No releases available for that user.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_latest_public_release**
> ReleasesGetLatestByDistributionGroup200Response releases_get_latest_public_release(app_secret)



Get the latest public release for the given app.

### Example


```python
import openapi_client
from openapi_client.models.releases_get_latest_by_distribution_group200_response import ReleasesGetLatestByDistributionGroup200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_secret = 'app_secret_example' # str | The secret of the target application

    try:
        api_response = api_instance.releases_get_latest_public_release(app_secret)
        print("The response of DistributeApi->releases_get_latest_public_release:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_latest_public_release: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_secret** | **str**| The secret of the target application | 

### Return type

[**ReleasesGetLatestByDistributionGroup200Response**](ReleasesGetLatestByDistributionGroup200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The full release details of the latest release that was distributed to a public group. |  -  |
**404** | Error Codes: - &#x60;not_found&#x60; - The app doesn&#39;t exist - &#x60;no_releases_for_app&#x60; - The app has no public releases.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_public_groups_for_release_by_hash**
> List[ReleasesGetPublicGroupsForReleaseByHash200ResponseInner] releases_get_public_groups_for_release_by_hash(app_secret, release_hash)



Get all public distribution groups that a given release has been distributed to

### Example


```python
import openapi_client
from openapi_client.models.releases_get_public_groups_for_release_by_hash200_response_inner import ReleasesGetPublicGroupsForReleaseByHash200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_secret = 'app_secret_example' # str | The secret of the target application
    release_hash = 'release_hash_example' # str | The hash of the release

    try:
        api_response = api_instance.releases_get_public_groups_for_release_by_hash(app_secret, release_hash)
        print("The response of DistributeApi->releases_get_public_groups_for_release_by_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_public_groups_for_release_by_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_secret** | **str**| The secret of the target application | 
 **release_hash** | **str**| The hash of the release | 

### Return type

[**List[ReleasesGetPublicGroupsForReleaseByHash200ResponseInner]**](ReleasesGetPublicGroupsForReleaseByHash200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The public distribution groups that the release has been distributed to |  -  |
**404** | Error Codes: - &#x60;not_found&#x60; - The app doesn&#39;t exist  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_release_upload_status**
> ReleasesGetReleaseUploadStatus200Response releases_get_release_upload_status(upload_id, owner_name, app_name)



Get the current status of the release upload.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_get_release_upload_status200_response import ReleasesGetReleaseUploadStatus200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    upload_id = 'upload_id_example' # str | The ID of the release upload
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.releases_get_release_upload_status(upload_id, owner_name, app_name)
        print("The response of DistributeApi->releases_get_release_upload_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_release_upload_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **str**| The ID of the release upload | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ReleasesGetReleaseUploadStatus200Response**](ReleasesGetReleaseUploadStatus200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | The request contained invalid properties. |  -  |
**404** | Error codes: - &#x60;not_found&#x60; - The app or upload doesn&#39;t exist.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_get_sparkle_feed**
> releases_get_sparkle_feed(app_secret)



Gets the sparkle feed of the releases that are distributed to all the public distribution groups.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    app_secret = 'app_secret_example' # str | The secret of the application.

    try:
        api_instance.releases_get_sparkle_feed(app_secret)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_get_sparkle_feed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_secret** | **str**| The secret of the application. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The RSS feed of releases. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_list**
> List[ReleasesListLatest200ResponseInner] releases_list(owner_name, app_name, published_only=published_only, scope=scope, top=top, release_id=release_id)



Return basic information about releases.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_list_latest200_response_inner import ReleasesListLatest200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    published_only = True # bool | When *true*, filters out releases that were uploaded but were never distributed. Releases that under deleted distribution groups will not be filtered out. (optional)
    scope = 'scope_example' # str | When the scope is 'tester', only includes releases that have been distributed to groups that the user belongs to. (optional)
    top = 3.4 # float | The number of releases to return (optional)
    release_id = 3.4 # float | The id of a release (optional)

    try:
        api_response = api_instance.releases_list(owner_name, app_name, published_only=published_only, scope=scope, top=top, release_id=release_id)
        print("The response of DistributeApi->releases_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **published_only** | **bool**| When *true*, filters out releases that were uploaded but were never distributed. Releases that under deleted distribution groups will not be filtered out. | [optional] 
 **scope** | **str**| When the scope is &#39;tester&#39;, only includes releases that have been distributed to groups that the user belongs to. | [optional] 
 **top** | **float**| The number of releases to return | [optional] 
 **release_id** | **float**| The id of a release | [optional] 

### Return type

[**List[ReleasesListLatest200ResponseInner]**](ReleasesListLatest200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_list_by_distribution_group**
> List[ReleasesListByDistributionGroup200ResponseInner] releases_list_by_distribution_group(distribution_group_name, owner_name, app_name)



Return basic information about distributed releases in a given distribution group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_list_by_distribution_group200_response_inner import ReleasesListByDistributionGroup200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    distribution_group_name = 'distribution_group_name_example' # str | The name of the distribution group.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.releases_list_by_distribution_group(distribution_group_name, owner_name, app_name)
        print("The response of DistributeApi->releases_list_by_distribution_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_list_by_distribution_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **distribution_group_name** | **str**| The name of the distribution group. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[ReleasesListByDistributionGroup200ResponseInner]**](ReleasesListByDistributionGroup200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | A distribution group can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_list_latest**
> List[ReleasesListLatest200ResponseInner] releases_list_latest(owner_name, app_name)



Get the latest release from every distribution group associated with an application.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_list_latest200_response_inner import ReleasesListLatest200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.releases_list_latest(owner_name, app_name)
        print("The response of DistributeApi->releases_list_latest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_list_latest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[ReleasesListLatest200ResponseInner]**](ReleasesListLatest200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_put_distribution_group**
> releases_put_distribution_group(release_id, group_id, owner_name, app_name, releases_put_distribution_group_request=releases_put_distribution_group_request)



Update details about the specified distribution group associated with the release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_put_distribution_group_request import ReleasesPutDistributionGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    group_id = 'group_id_example' # str | The id of the releases destination
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_put_distribution_group_request = openapi_client.ReleasesPutDistributionGroupRequest() # ReleasesPutDistributionGroupRequest |  (optional)

    try:
        api_instance.releases_put_distribution_group(release_id, group_id, owner_name, app_name, releases_put_distribution_group_request=releases_put_distribution_group_request)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_put_distribution_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **group_id** | **str**| The id of the releases destination | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_put_distribution_group_request** | [**ReleasesPutDistributionGroupRequest**](ReleasesPutDistributionGroupRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | A destination can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_put_distribution_tester**
> releases_put_distribution_tester(release_id, tester_id, owner_name, app_name, releases_put_distribution_group_request=releases_put_distribution_group_request)



Update details about the specified tester associated with the release

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_put_distribution_group_request import ReleasesPutDistributionGroupRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    tester_id = 'tester_id_example' # str | The id of the tester
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_put_distribution_group_request = openapi_client.ReleasesPutDistributionGroupRequest() # ReleasesPutDistributionGroupRequest |  (optional)

    try:
        api_instance.releases_put_distribution_tester(release_id, tester_id, owner_name, app_name, releases_put_distribution_group_request=releases_put_distribution_group_request)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_put_distribution_tester: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **tester_id** | **str**| The id of the tester | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_put_distribution_group_request** | [**ReleasesPutDistributionGroupRequest**](ReleasesPutDistributionGroupRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | A destination can&#39;t be found.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_update**
> ReleasesUpdate200Response releases_update(release_id, owner_name, app_name, releases_update_request)



Updates a release.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_update200_response import ReleasesUpdate200Response
from openapi_client.models.releases_update_request import ReleasesUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_update_request = openapi_client.ReleasesUpdateRequest() # ReleasesUpdateRequest | The release information.

    try:
        api_response = api_instance.releases_update(release_id, owner_name, app_name, releases_update_request)
        print("The response of DistributeApi->releases_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_update_request** | [**ReleasesUpdateRequest**](ReleasesUpdateRequest.md)| The release information. | 

### Return type

[**ReleasesUpdate200Response**](ReleasesUpdate200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Failure |  -  |
**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_update_details**
> ReleasesUpdateDetails200Response releases_update_details(release_id, owner_name, app_name, releases_update_details_request)



Update details of a release.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_update_details200_response import ReleasesUpdateDetails200Response
from openapi_client.models.releases_update_details_request import ReleasesUpdateDetailsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    release_id = 56 # int | The ID of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_update_details_request = openapi_client.ReleasesUpdateDetailsRequest() # ReleasesUpdateDetailsRequest | The release information.

    try:
        api_response = api_instance.releases_update_details(release_id, owner_name, app_name, releases_update_details_request)
        print("The response of DistributeApi->releases_update_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_update_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **release_id** | **int**| The ID of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_update_details_request** | [**ReleasesUpdateDetailsRequest**](ReleasesUpdateDetailsRequest.md)| The release information. | 

### Return type

[**ReleasesUpdateDetails200Response**](ReleasesUpdateDetails200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Failure |  -  |
**404** | Release not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **releases_update_release_upload_status**
> ReleasesUpdateReleaseUploadStatus200Response releases_update_release_upload_status(upload_id, owner_name, app_name, releases_update_release_upload_status_request, extract=extract)



Update the current status of the release upload.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.releases_update_release_upload_status200_response import ReleasesUpdateReleaseUploadStatus200Response
from openapi_client.models.releases_update_release_upload_status_request import ReleasesUpdateReleaseUploadStatusRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    upload_id = 'upload_id_example' # str | The ID of the release upload
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    releases_update_release_upload_status_request = openapi_client.ReleasesUpdateReleaseUploadStatusRequest() # ReleasesUpdateReleaseUploadStatusRequest | The release upload status information.
    extract = True # bool | A flag that indicates to extract release or not, true by default (optional)

    try:
        api_response = api_instance.releases_update_release_upload_status(upload_id, owner_name, app_name, releases_update_release_upload_status_request, extract=extract)
        print("The response of DistributeApi->releases_update_release_upload_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->releases_update_release_upload_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upload_id** | **str**| The ID of the release upload | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **releases_update_release_upload_status_request** | [**ReleasesUpdateReleaseUploadStatusRequest**](ReleasesUpdateReleaseUploadStatusRequest.md)| The release upload status information. | 
 **extract** | **bool**| A flag that indicates to extract release or not, true by default | [optional] 

### Return type

[**ReleasesUpdateReleaseUploadStatus200Response**](ReleasesUpdateReleaseUploadStatus200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | The request contained invalid properties. |  -  |
**404** | Error codes: - &#x60;not_found&#x60; - The app or upload doesn&#39;t exist.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_notifications_get_notification_by_app_id**
> StoreNotificationsGetNotificationByAppId200Response store_notifications_get_notification_by_app_id(owner_name, app_name)



Application specific store service status

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.store_notifications_get_notification_by_app_id200_response import StoreNotificationsGetNotificationByAppId200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.store_notifications_get_notification_by_app_id(owner_name, app_name)
        print("The response of DistributeApi->store_notifications_get_notification_by_app_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->store_notifications_get_notification_by_app_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**StoreNotificationsGetNotificationByAppId200Response**](StoreNotificationsGetNotificationByAppId200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Availability for store service status is stored in response schema. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_release_publish_logs_get**
> store_release_publish_logs_get(store_name, release_id, owner_name, app_name)



Returns publish logs for a particular release published to a particular store

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    release_id = 'release_id_example' # str | The ID of the realease
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.store_release_publish_logs_get(store_name, release_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling DistributeApi->store_release_publish_logs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **release_id** | **str**| The ID of the realease | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_releases_delete**
> store_releases_delete(store_name, release_id, owner_name, app_name, body=body)



delete the release with release Id

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    release_id = 'release_id_example' # str | The id of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = 'body_example' # str |  (optional)

    try:
        api_instance.store_releases_delete(store_name, release_id, owner_name, app_name, body=body)
    except Exception as e:
        print("Exception when calling DistributeApi->store_releases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **release_id** | **str**| The id of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_releases_get**
> List[StoreReleasesGetLatest200ResponseInner] store_releases_get(store_name, release_id, owner_name, app_name)



Return releases published in a store for releaseId and storeId

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.store_releases_get_latest200_response_inner import StoreReleasesGetLatest200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    release_id = 'release_id_example' # str | The name of the store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.store_releases_get(store_name, release_id, owner_name, app_name)
        print("The response of DistributeApi->store_releases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->store_releases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **release_id** | **str**| The name of the store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[StoreReleasesGetLatest200ResponseInner]**](StoreReleasesGetLatest200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_releases_get_latest**
> List[StoreReleasesGetLatest200ResponseInner] store_releases_get_latest(store_name, owner_name, app_name)



Returns the latest release published in a store.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.store_releases_get_latest200_response_inner import StoreReleasesGetLatest200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.store_releases_get_latest(store_name, owner_name, app_name)
        print("The response of DistributeApi->store_releases_get_latest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->store_releases_get_latest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[StoreReleasesGetLatest200ResponseInner]**](StoreReleasesGetLatest200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_releases_get_publish_error**
> StoreReleasesGetPublishError200Response store_releases_get_publish_error(store_name, release_id, owner_name, app_name)



Return the Error Details of release which failed in publishing.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.store_releases_get_publish_error200_response import StoreReleasesGetPublishError200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    release_id = 3.4 # float | The id of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.store_releases_get_publish_error(store_name, release_id, owner_name, app_name)
        print("The response of DistributeApi->store_releases_get_publish_error:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->store_releases_get_publish_error: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **release_id** | **float**| The id of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**StoreReleasesGetPublishError200Response**](StoreReleasesGetPublishError200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_releases_get_real_time_status_by_release_id**
> StoreReleasesGetRealTimeStatusByReleaseId200Response store_releases_get_real_time_status_by_release_id(store_name, release_id, owner_name, app_name)



Return the Real time Status publishing of release from store.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.store_releases_get_real_time_status_by_release_id200_response import StoreReleasesGetRealTimeStatusByReleaseId200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    release_id = 3.4 # float | The id of the release
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.store_releases_get_real_time_status_by_release_id(store_name, release_id, owner_name, app_name)
        print("The response of DistributeApi->store_releases_get_real_time_status_by_release_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->store_releases_get_real_time_status_by_release_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **release_id** | **float**| The id of the release | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**StoreReleasesGetRealTimeStatusByReleaseId200Response**](StoreReleasesGetRealTimeStatusByReleaseId200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **store_releases_list**
> List[StoreReleasesList200ResponseInner] store_releases_list(store_name, owner_name, app_name)



Return all releases published  in a store

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.store_releases_list200_response_inner import StoreReleasesList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.store_releases_list(store_name, owner_name, app_name)
        print("The response of DistributeApi->store_releases_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->store_releases_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[StoreReleasesList200ResponseInner]**](StoreReleasesList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stores_create**
> StoresList200ResponseInner stores_create(owner_name, app_name, stores_create_request)



Create a new external store for the specified application.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.stores_create_request import StoresCreateRequest
from openapi_client.models.stores_list200_response_inner import StoresList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    stores_create_request = openapi_client.StoresCreateRequest() # StoresCreateRequest | The store request

    try:
        api_response = api_instance.stores_create(owner_name, app_name, stores_create_request)
        print("The response of DistributeApi->stores_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->stores_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **stores_create_request** | [**StoresCreateRequest**](StoresCreateRequest.md)| The store request | 

### Return type

[**StoresList200ResponseInner**](StoresList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stores_delete**
> stores_delete(store_name, owner_name, app_name, body=body)



delete the store based on specific store name.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    body = 'body_example' # str |  (optional)

    try:
        api_instance.stores_delete(store_name, owner_name, app_name, body=body)
    except Exception as e:
        print("Exception when calling DistributeApi->stores_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **body** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stores_get**
> StoresList200ResponseInner stores_get(store_name, owner_name, app_name)



Return the store details for specified store name.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.stores_list200_response_inner import StoresList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.stores_get(store_name, owner_name, app_name)
        print("The response of DistributeApi->stores_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->stores_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**StoresList200ResponseInner**](StoresList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stores_list**
> List[StoresList200ResponseInner] stores_list(owner_name, app_name)



Get all the store details from Storage store table for a particular application.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.stores_list200_response_inner import StoresList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.stores_list(owner_name, app_name)
        print("The response of DistributeApi->stores_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DistributeApi->stores_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[StoresList200ResponseInner]**](StoresList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stores_patch**
> stores_patch(store_name, owner_name, app_name, stores_patch_request)



Update the store.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.stores_patch_request import StoresPatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DistributeApi(api_client)
    store_name = 'store_name_example' # str | The name of the store
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    stores_patch_request = openapi_client.StoresPatchRequest() # StoresPatchRequest | Store update request

    try:
        api_instance.stores_patch(store_name, owner_name, app_name, stores_patch_request)
    except Exception as e:
        print("Exception when calling DistributeApi->stores_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **store_name** | **str**| The name of the store | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **stores_patch_request** | [**StoresPatchRequest**](StoresPatchRequest.md)| Store update request | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

