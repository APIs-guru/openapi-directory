# openapi_client.CameraApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_camera_quality_retention_profile**](CameraApi.md#create_network_camera_quality_retention_profile) | **POST** /networks/{networkId}/camera/qualityRetentionProfiles | Creates new quality retention profile for this network.
[**create_network_camera_wireless_profile**](CameraApi.md#create_network_camera_wireless_profile) | **POST** /networks/{networkId}/camera/wirelessProfiles | Creates a new camera wireless profile for this network.
[**create_organization_camera_custom_analytics_artifact**](CameraApi.md#create_organization_camera_custom_analytics_artifact) | **POST** /organizations/{organizationId}/camera/customAnalytics/artifacts | Create custom analytics artifact
[**delete_network_camera_quality_retention_profile**](CameraApi.md#delete_network_camera_quality_retention_profile) | **DELETE** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Delete an existing quality retention profile for this network.
[**delete_network_camera_wireless_profile**](CameraApi.md#delete_network_camera_wireless_profile) | **DELETE** /networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId} | Delete an existing camera wireless profile for this network.
[**delete_organization_camera_custom_analytics_artifact**](CameraApi.md#delete_organization_camera_custom_analytics_artifact) | **DELETE** /organizations/{organizationId}/camera/customAnalytics/artifacts/{artifactId} | Delete Custom Analytics Artifact
[**generate_device_camera_snapshot**](CameraApi.md#generate_device_camera_snapshot) | **POST** /devices/{serial}/camera/generateSnapshot | Generate a snapshot of what the camera sees at the specified time and return a link to that image.
[**get_device_camera_analytics_live**](CameraApi.md#get_device_camera_analytics_live) | **GET** /devices/{serial}/camera/analytics/live | Returns live state from camera of analytics zones
[**get_device_camera_analytics_overview**](CameraApi.md#get_device_camera_analytics_overview) | **GET** /devices/{serial}/camera/analytics/overview | Returns an overview of aggregate analytics data for a timespan
[**get_device_camera_analytics_recent**](CameraApi.md#get_device_camera_analytics_recent) | **GET** /devices/{serial}/camera/analytics/recent | Returns most recent record for analytics zones
[**get_device_camera_analytics_zone_history**](CameraApi.md#get_device_camera_analytics_zone_history) | **GET** /devices/{serial}/camera/analytics/zones/{zoneId}/history | Return historical records for analytic zones
[**get_device_camera_analytics_zones**](CameraApi.md#get_device_camera_analytics_zones) | **GET** /devices/{serial}/camera/analytics/zones | Returns all configured analytic zones for this camera
[**get_device_camera_custom_analytics**](CameraApi.md#get_device_camera_custom_analytics) | **GET** /devices/{serial}/camera/customAnalytics | Return custom analytics settings for a camera
[**get_device_camera_quality_and_retention**](CameraApi.md#get_device_camera_quality_and_retention) | **GET** /devices/{serial}/camera/qualityAndRetention | Returns quality and retention settings for the given camera
[**get_device_camera_sense**](CameraApi.md#get_device_camera_sense) | **GET** /devices/{serial}/camera/sense | Returns sense settings for a given camera
[**get_device_camera_sense_object_detection_models**](CameraApi.md#get_device_camera_sense_object_detection_models) | **GET** /devices/{serial}/camera/sense/objectDetectionModels | Returns the MV Sense object detection model list for the given camera
[**get_device_camera_video_link**](CameraApi.md#get_device_camera_video_link) | **GET** /devices/{serial}/camera/videoLink | Returns video link to the specified camera
[**get_device_camera_video_settings**](CameraApi.md#get_device_camera_video_settings) | **GET** /devices/{serial}/camera/video/settings | Returns video settings for the given camera
[**get_device_camera_wireless_profiles**](CameraApi.md#get_device_camera_wireless_profiles) | **GET** /devices/{serial}/camera/wirelessProfiles | Returns wireless profile assigned to the given camera
[**get_network_camera_quality_retention_profile**](CameraApi.md#get_network_camera_quality_retention_profile) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Retrieve a single quality retention profile
[**get_network_camera_quality_retention_profiles**](CameraApi.md#get_network_camera_quality_retention_profiles) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles | List the quality retention profiles for this network
[**get_network_camera_schedules**](CameraApi.md#get_network_camera_schedules) | **GET** /networks/{networkId}/camera/schedules | Returns a list of all camera recording schedules.
[**get_network_camera_wireless_profile**](CameraApi.md#get_network_camera_wireless_profile) | **GET** /networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId} | Retrieve a single camera wireless profile.
[**get_network_camera_wireless_profiles**](CameraApi.md#get_network_camera_wireless_profiles) | **GET** /networks/{networkId}/camera/wirelessProfiles | List the camera wireless profiles for this network.
[**get_organization_camera_custom_analytics_artifact**](CameraApi.md#get_organization_camera_custom_analytics_artifact) | **GET** /organizations/{organizationId}/camera/customAnalytics/artifacts/{artifactId} | Get Custom Analytics Artifact
[**get_organization_camera_custom_analytics_artifacts**](CameraApi.md#get_organization_camera_custom_analytics_artifacts) | **GET** /organizations/{organizationId}/camera/customAnalytics/artifacts | List Custom Analytics Artifacts
[**get_organization_camera_onboarding_statuses**](CameraApi.md#get_organization_camera_onboarding_statuses) | **GET** /organizations/{organizationId}/camera/onboarding/statuses | Fetch onboarding status of cameras
[**update_device_camera_custom_analytics**](CameraApi.md#update_device_camera_custom_analytics) | **PUT** /devices/{serial}/camera/customAnalytics | Update custom analytics settings for a camera
[**update_device_camera_quality_and_retention**](CameraApi.md#update_device_camera_quality_and_retention) | **PUT** /devices/{serial}/camera/qualityAndRetention | Update quality and retention settings for the given camera
[**update_device_camera_sense**](CameraApi.md#update_device_camera_sense) | **PUT** /devices/{serial}/camera/sense | Update sense settings for the given camera
[**update_device_camera_video_settings**](CameraApi.md#update_device_camera_video_settings) | **PUT** /devices/{serial}/camera/video/settings | Update video settings for the given camera
[**update_device_camera_wireless_profiles**](CameraApi.md#update_device_camera_wireless_profiles) | **PUT** /devices/{serial}/camera/wirelessProfiles | Assign wireless profiles to the given camera
[**update_network_camera_quality_retention_profile**](CameraApi.md#update_network_camera_quality_retention_profile) | **PUT** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Update an existing quality retention profile for this network.
[**update_network_camera_wireless_profile**](CameraApi.md#update_network_camera_wireless_profile) | **PUT** /networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId} | Update an existing camera wireless profile in this network.
[**update_organization_camera_onboarding_statuses**](CameraApi.md#update_organization_camera_onboarding_statuses) | **PUT** /organizations/{organizationId}/camera/onboarding/statuses | Notify that credential handoff to camera has completed


# **create_network_camera_quality_retention_profile**
> object create_network_camera_quality_retention_profile(network_id, create_network_camera_quality_retention_profile_request)

Creates new quality retention profile for this network.

Creates new quality retention profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_camera_quality_retention_profile_request import CreateNetworkCameraQualityRetentionProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_camera_quality_retention_profile_request = openapi_client.CreateNetworkCameraQualityRetentionProfileRequest() # CreateNetworkCameraQualityRetentionProfileRequest | 

    try:
        # Creates new quality retention profile for this network.
        api_response = api_instance.create_network_camera_quality_retention_profile(network_id, create_network_camera_quality_retention_profile_request)
        print("The response of CameraApi->create_network_camera_quality_retention_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->create_network_camera_quality_retention_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_camera_quality_retention_profile_request** | [**CreateNetworkCameraQualityRetentionProfileRequest**](CreateNetworkCameraQualityRetentionProfileRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_camera_wireless_profile**
> object create_network_camera_wireless_profile(network_id, create_network_camera_wireless_profile_request)

Creates a new camera wireless profile for this network.

Creates a new camera wireless profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_camera_wireless_profile_request import CreateNetworkCameraWirelessProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_camera_wireless_profile_request = openapi_client.CreateNetworkCameraWirelessProfileRequest() # CreateNetworkCameraWirelessProfileRequest | 

    try:
        # Creates a new camera wireless profile for this network.
        api_response = api_instance.create_network_camera_wireless_profile(network_id, create_network_camera_wireless_profile_request)
        print("The response of CameraApi->create_network_camera_wireless_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->create_network_camera_wireless_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_camera_wireless_profile_request** | [**CreateNetworkCameraWirelessProfileRequest**](CreateNetworkCameraWirelessProfileRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_organization_camera_custom_analytics_artifact**
> object create_organization_camera_custom_analytics_artifact(organization_id, create_organization_camera_custom_analytics_artifact_request=create_organization_camera_custom_analytics_artifact_request)

Create custom analytics artifact

Create custom analytics artifact. Returns an artifact upload URL with expiry time. Upload the artifact file with a put request to the returned upload URL before its expiry.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_camera_custom_analytics_artifact_request import CreateOrganizationCameraCustomAnalyticsArtifactRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_camera_custom_analytics_artifact_request = openapi_client.CreateOrganizationCameraCustomAnalyticsArtifactRequest() # CreateOrganizationCameraCustomAnalyticsArtifactRequest |  (optional)

    try:
        # Create custom analytics artifact
        api_response = api_instance.create_organization_camera_custom_analytics_artifact(organization_id, create_organization_camera_custom_analytics_artifact_request=create_organization_camera_custom_analytics_artifact_request)
        print("The response of CameraApi->create_organization_camera_custom_analytics_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->create_organization_camera_custom_analytics_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_camera_custom_analytics_artifact_request** | [**CreateOrganizationCameraCustomAnalyticsArtifactRequest**](CreateOrganizationCameraCustomAnalyticsArtifactRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_camera_quality_retention_profile**
> delete_network_camera_quality_retention_profile(network_id, quality_retention_profile_id)

Delete an existing quality retention profile for this network.

Delete an existing quality retention profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    quality_retention_profile_id = 'quality_retention_profile_id_example' # str | 

    try:
        # Delete an existing quality retention profile for this network.
        api_instance.delete_network_camera_quality_retention_profile(network_id, quality_retention_profile_id)
    except Exception as e:
        print("Exception when calling CameraApi->delete_network_camera_quality_retention_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **quality_retention_profile_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_camera_wireless_profile**
> delete_network_camera_wireless_profile(network_id, wireless_profile_id)

Delete an existing camera wireless profile for this network.

Delete an existing camera wireless profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    wireless_profile_id = 'wireless_profile_id_example' # str | 

    try:
        # Delete an existing camera wireless profile for this network.
        api_instance.delete_network_camera_wireless_profile(network_id, wireless_profile_id)
    except Exception as e:
        print("Exception when calling CameraApi->delete_network_camera_wireless_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wireless_profile_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_organization_camera_custom_analytics_artifact**
> delete_organization_camera_custom_analytics_artifact(organization_id, artifact_id)

Delete Custom Analytics Artifact

Delete Custom Analytics Artifact

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    organization_id = 'organization_id_example' # str | 
    artifact_id = 'artifact_id_example' # str | 

    try:
        # Delete Custom Analytics Artifact
        api_instance.delete_organization_camera_custom_analytics_artifact(organization_id, artifact_id)
    except Exception as e:
        print("Exception when calling CameraApi->delete_organization_camera_custom_analytics_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **artifact_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_device_camera_snapshot**
> object generate_device_camera_snapshot(serial, generate_device_camera_snapshot_request=generate_device_camera_snapshot_request)

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

Generate a snapshot of what the camera sees at the specified time and return a link to that image.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.generate_device_camera_snapshot_request import GenerateDeviceCameraSnapshotRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    generate_device_camera_snapshot_request = openapi_client.GenerateDeviceCameraSnapshotRequest() # GenerateDeviceCameraSnapshotRequest |  (optional)

    try:
        # Generate a snapshot of what the camera sees at the specified time and return a link to that image.
        api_response = api_instance.generate_device_camera_snapshot(serial, generate_device_camera_snapshot_request=generate_device_camera_snapshot_request)
        print("The response of CameraApi->generate_device_camera_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->generate_device_camera_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **generate_device_camera_snapshot_request** | [**GenerateDeviceCameraSnapshotRequest**](GenerateDeviceCameraSnapshotRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_live**
> object get_device_camera_analytics_live(serial)

Returns live state from camera of analytics zones

Returns live state from camera of analytics zones

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns live state from camera of analytics zones
        api_response = api_instance.get_device_camera_analytics_live(serial)
        print("The response of CameraApi->get_device_camera_analytics_live:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_analytics_live: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_overview**
> List[object] get_device_camera_analytics_overview(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)

Returns an overview of aggregate analytics data for a timespan

Returns an overview of aggregate analytics data for a timespan

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns an overview of aggregate analytics data for a timespan
        api_response = api_instance.get_device_camera_analytics_overview(serial, t0=t0, t1=t1, timespan=timespan, object_type=object_type)
        print("The response of CameraApi->get_device_camera_analytics_overview:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_analytics_overview: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 7 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_recent**
> List[object] get_device_camera_analytics_recent(serial, object_type=object_type)

Returns most recent record for analytics zones

Returns most recent record for analytics zones

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Returns most recent record for analytics zones
        api_response = api_instance.get_device_camera_analytics_recent(serial, object_type=object_type)
        print("The response of CameraApi->get_device_camera_analytics_recent:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_analytics_recent: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_zone_history**
> List[object] get_device_camera_analytics_zone_history(serial, zone_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, object_type=object_type)

Return historical records for analytic zones

Return historical records for analytic zones

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    zone_id = 'zone_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. (optional)
    resolution = 56 # int | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. (optional)
    object_type = 'object_type_example' # str | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. (optional)

    try:
        # Return historical records for analytic zones
        api_response = api_instance.get_device_camera_analytics_zone_history(serial, zone_id, t0=t0, t1=t1, timespan=timespan, resolution=resolution, object_type=object_type)
        print("The response of CameraApi->get_device_camera_analytics_zone_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_analytics_zone_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **zone_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. | [optional] 
 **resolution** | **int**| The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. | [optional] 
 **object_type** | **str**| [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_analytics_zones**
> List[object] get_device_camera_analytics_zones(serial)

Returns all configured analytic zones for this camera

Returns all configured analytic zones for this camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns all configured analytic zones for this camera
        api_response = api_instance.get_device_camera_analytics_zones(serial)
        print("The response of CameraApi->get_device_camera_analytics_zones:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_analytics_zones: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_custom_analytics**
> object get_device_camera_custom_analytics(serial)

Return custom analytics settings for a camera

Return custom analytics settings for a camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return custom analytics settings for a camera
        api_response = api_instance.get_device_camera_custom_analytics(serial)
        print("The response of CameraApi->get_device_camera_custom_analytics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_custom_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_quality_and_retention**
> object get_device_camera_quality_and_retention(serial)

Returns quality and retention settings for the given camera

Returns quality and retention settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns quality and retention settings for the given camera
        api_response = api_instance.get_device_camera_quality_and_retention(serial)
        print("The response of CameraApi->get_device_camera_quality_and_retention:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_quality_and_retention: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_sense**
> object get_device_camera_sense(serial)

Returns sense settings for a given camera

Returns sense settings for a given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns sense settings for a given camera
        api_response = api_instance.get_device_camera_sense(serial)
        print("The response of CameraApi->get_device_camera_sense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_sense: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_sense_object_detection_models**
> List[object] get_device_camera_sense_object_detection_models(serial)

Returns the MV Sense object detection model list for the given camera

Returns the MV Sense object detection model list for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns the MV Sense object detection model list for the given camera
        api_response = api_instance.get_device_camera_sense_object_detection_models(serial)
        print("The response of CameraApi->get_device_camera_sense_object_detection_models:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_sense_object_detection_models: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_video_link**
> object get_device_camera_video_link(serial, timestamp=timestamp)

Returns video link to the specified camera

Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time. (optional)

    try:
        # Returns video link to the specified camera
        api_response = api_instance.get_device_camera_video_link(serial, timestamp=timestamp)
        print("The response of CameraApi->get_device_camera_video_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_video_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **timestamp** | **datetime**| [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_video_settings**
> object get_device_camera_video_settings(serial)

Returns video settings for the given camera

Returns video settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns video settings for the given camera
        api_response = api_instance.get_device_camera_video_settings(serial)
        print("The response of CameraApi->get_device_camera_video_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_video_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_device_camera_wireless_profiles**
> object get_device_camera_wireless_profiles(serial)

Returns wireless profile assigned to the given camera

Returns wireless profile assigned to the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Returns wireless profile assigned to the given camera
        api_response = api_instance.get_device_camera_wireless_profiles(serial)
        print("The response of CameraApi->get_device_camera_wireless_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_device_camera_wireless_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_quality_retention_profile**
> object get_network_camera_quality_retention_profile(network_id, quality_retention_profile_id)

Retrieve a single quality retention profile

Retrieve a single quality retention profile

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    quality_retention_profile_id = 'quality_retention_profile_id_example' # str | 

    try:
        # Retrieve a single quality retention profile
        api_response = api_instance.get_network_camera_quality_retention_profile(network_id, quality_retention_profile_id)
        print("The response of CameraApi->get_network_camera_quality_retention_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_network_camera_quality_retention_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **quality_retention_profile_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_quality_retention_profiles**
> List[object] get_network_camera_quality_retention_profiles(network_id)

List the quality retention profiles for this network

List the quality retention profiles for this network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the quality retention profiles for this network
        api_response = api_instance.get_network_camera_quality_retention_profiles(network_id)
        print("The response of CameraApi->get_network_camera_quality_retention_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_network_camera_quality_retention_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_schedules**
> List[object] get_network_camera_schedules(network_id)

Returns a list of all camera recording schedules.

Returns a list of all camera recording schedules.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Returns a list of all camera recording schedules.
        api_response = api_instance.get_network_camera_schedules(network_id)
        print("The response of CameraApi->get_network_camera_schedules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_network_camera_schedules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_wireless_profile**
> object get_network_camera_wireless_profile(network_id, wireless_profile_id)

Retrieve a single camera wireless profile.

Retrieve a single camera wireless profile.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    wireless_profile_id = 'wireless_profile_id_example' # str | 

    try:
        # Retrieve a single camera wireless profile.
        api_response = api_instance.get_network_camera_wireless_profile(network_id, wireless_profile_id)
        print("The response of CameraApi->get_network_camera_wireless_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_network_camera_wireless_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wireless_profile_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_camera_wireless_profiles**
> List[object] get_network_camera_wireless_profiles(network_id)

List the camera wireless profiles for this network.

List the camera wireless profiles for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the camera wireless profiles for this network.
        api_response = api_instance.get_network_camera_wireless_profiles(network_id)
        print("The response of CameraApi->get_network_camera_wireless_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_network_camera_wireless_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_camera_custom_analytics_artifact**
> object get_organization_camera_custom_analytics_artifact(organization_id, artifact_id)

Get Custom Analytics Artifact

Get Custom Analytics Artifact

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    organization_id = 'organization_id_example' # str | 
    artifact_id = 'artifact_id_example' # str | 

    try:
        # Get Custom Analytics Artifact
        api_response = api_instance.get_organization_camera_custom_analytics_artifact(organization_id, artifact_id)
        print("The response of CameraApi->get_organization_camera_custom_analytics_artifact:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_organization_camera_custom_analytics_artifact: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **artifact_id** | **str**|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_camera_custom_analytics_artifacts**
> List[object] get_organization_camera_custom_analytics_artifacts(organization_id)

List Custom Analytics Artifacts

List Custom Analytics Artifacts

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List Custom Analytics Artifacts
        api_response = api_instance.get_organization_camera_custom_analytics_artifacts(organization_id)
        print("The response of CameraApi->get_organization_camera_custom_analytics_artifacts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_organization_camera_custom_analytics_artifacts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_camera_onboarding_statuses**
> List[object] get_organization_camera_onboarding_statuses(organization_id, serials=serials, network_ids=network_ids)

Fetch onboarding status of cameras

Fetch onboarding status of cameras

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    organization_id = 'organization_id_example' # str | 
    serials = ['serials_example'] # List[str] | A list of serial numbers. The returned cameras will be filtered to only include these serials. (optional)
    network_ids = ['network_ids_example'] # List[str] | A list of network IDs. The returned cameras will be filtered to only include these networks. (optional)

    try:
        # Fetch onboarding status of cameras
        api_response = api_instance.get_organization_camera_onboarding_statuses(organization_id, serials=serials, network_ids=network_ids)
        print("The response of CameraApi->get_organization_camera_onboarding_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->get_organization_camera_onboarding_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **serials** | [**List[str]**](str.md)| A list of serial numbers. The returned cameras will be filtered to only include these serials. | [optional] 
 **network_ids** | [**List[str]**](str.md)| A list of network IDs. The returned cameras will be filtered to only include these networks. | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_camera_custom_analytics**
> object update_device_camera_custom_analytics(serial, update_device_camera_custom_analytics_request=update_device_camera_custom_analytics_request)

Update custom analytics settings for a camera

Update custom analytics settings for a camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_custom_analytics_request import UpdateDeviceCameraCustomAnalyticsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_custom_analytics_request = openapi_client.UpdateDeviceCameraCustomAnalyticsRequest() # UpdateDeviceCameraCustomAnalyticsRequest |  (optional)

    try:
        # Update custom analytics settings for a camera
        api_response = api_instance.update_device_camera_custom_analytics(serial, update_device_camera_custom_analytics_request=update_device_camera_custom_analytics_request)
        print("The response of CameraApi->update_device_camera_custom_analytics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_device_camera_custom_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_custom_analytics_request** | [**UpdateDeviceCameraCustomAnalyticsRequest**](UpdateDeviceCameraCustomAnalyticsRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_camera_quality_and_retention**
> object update_device_camera_quality_and_retention(serial, update_device_camera_quality_and_retention_request=update_device_camera_quality_and_retention_request)

Update quality and retention settings for the given camera

Update quality and retention settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_quality_and_retention_request import UpdateDeviceCameraQualityAndRetentionRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_quality_and_retention_request = openapi_client.UpdateDeviceCameraQualityAndRetentionRequest() # UpdateDeviceCameraQualityAndRetentionRequest |  (optional)

    try:
        # Update quality and retention settings for the given camera
        api_response = api_instance.update_device_camera_quality_and_retention(serial, update_device_camera_quality_and_retention_request=update_device_camera_quality_and_retention_request)
        print("The response of CameraApi->update_device_camera_quality_and_retention:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_device_camera_quality_and_retention: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_quality_and_retention_request** | [**UpdateDeviceCameraQualityAndRetentionRequest**](UpdateDeviceCameraQualityAndRetentionRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_camera_sense**
> object update_device_camera_sense(serial, update_device_camera_sense_request=update_device_camera_sense_request)

Update sense settings for the given camera

Update sense settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_sense_request import UpdateDeviceCameraSenseRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_sense_request = openapi_client.UpdateDeviceCameraSenseRequest() # UpdateDeviceCameraSenseRequest |  (optional)

    try:
        # Update sense settings for the given camera
        api_response = api_instance.update_device_camera_sense(serial, update_device_camera_sense_request=update_device_camera_sense_request)
        print("The response of CameraApi->update_device_camera_sense:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_device_camera_sense: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_sense_request** | [**UpdateDeviceCameraSenseRequest**](UpdateDeviceCameraSenseRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_camera_video_settings**
> object update_device_camera_video_settings(serial, update_device_camera_video_settings_request=update_device_camera_video_settings_request)

Update video settings for the given camera

Update video settings for the given camera

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_video_settings_request import UpdateDeviceCameraVideoSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_video_settings_request = openapi_client.UpdateDeviceCameraVideoSettingsRequest() # UpdateDeviceCameraVideoSettingsRequest |  (optional)

    try:
        # Update video settings for the given camera
        api_response = api_instance.update_device_camera_video_settings(serial, update_device_camera_video_settings_request=update_device_camera_video_settings_request)
        print("The response of CameraApi->update_device_camera_video_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_device_camera_video_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_video_settings_request** | [**UpdateDeviceCameraVideoSettingsRequest**](UpdateDeviceCameraVideoSettingsRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_device_camera_wireless_profiles**
> object update_device_camera_wireless_profiles(serial, update_device_camera_wireless_profiles_request)

Assign wireless profiles to the given camera

Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_device_camera_wireless_profiles_request import UpdateDeviceCameraWirelessProfilesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_wireless_profiles_request = openapi_client.UpdateDeviceCameraWirelessProfilesRequest() # UpdateDeviceCameraWirelessProfilesRequest | 

    try:
        # Assign wireless profiles to the given camera
        api_response = api_instance.update_device_camera_wireless_profiles(serial, update_device_camera_wireless_profiles_request)
        print("The response of CameraApi->update_device_camera_wireless_profiles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_device_camera_wireless_profiles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 
 **update_device_camera_wireless_profiles_request** | [**UpdateDeviceCameraWirelessProfilesRequest**](UpdateDeviceCameraWirelessProfilesRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_camera_quality_retention_profile**
> object update_network_camera_quality_retention_profile(network_id, quality_retention_profile_id, update_network_camera_quality_retention_profile_request=update_network_camera_quality_retention_profile_request)

Update an existing quality retention profile for this network.

Update an existing quality retention profile for this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_camera_quality_retention_profile_request import UpdateNetworkCameraQualityRetentionProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    quality_retention_profile_id = 'quality_retention_profile_id_example' # str | 
    update_network_camera_quality_retention_profile_request = openapi_client.UpdateNetworkCameraQualityRetentionProfileRequest() # UpdateNetworkCameraQualityRetentionProfileRequest |  (optional)

    try:
        # Update an existing quality retention profile for this network.
        api_response = api_instance.update_network_camera_quality_retention_profile(network_id, quality_retention_profile_id, update_network_camera_quality_retention_profile_request=update_network_camera_quality_retention_profile_request)
        print("The response of CameraApi->update_network_camera_quality_retention_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_network_camera_quality_retention_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **quality_retention_profile_id** | **str**|  | 
 **update_network_camera_quality_retention_profile_request** | [**UpdateNetworkCameraQualityRetentionProfileRequest**](UpdateNetworkCameraQualityRetentionProfileRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_camera_wireless_profile**
> object update_network_camera_wireless_profile(network_id, wireless_profile_id, update_network_camera_wireless_profile_request=update_network_camera_wireless_profile_request)

Update an existing camera wireless profile in this network.

Update an existing camera wireless profile in this network.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_camera_wireless_profile_request import UpdateNetworkCameraWirelessProfileRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    network_id = 'network_id_example' # str | 
    wireless_profile_id = 'wireless_profile_id_example' # str | 
    update_network_camera_wireless_profile_request = openapi_client.UpdateNetworkCameraWirelessProfileRequest() # UpdateNetworkCameraWirelessProfileRequest |  (optional)

    try:
        # Update an existing camera wireless profile in this network.
        api_response = api_instance.update_network_camera_wireless_profile(network_id, wireless_profile_id, update_network_camera_wireless_profile_request=update_network_camera_wireless_profile_request)
        print("The response of CameraApi->update_network_camera_wireless_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_network_camera_wireless_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **wireless_profile_id** | **str**|  | 
 **update_network_camera_wireless_profile_request** | [**UpdateNetworkCameraWirelessProfileRequest**](UpdateNetworkCameraWirelessProfileRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_organization_camera_onboarding_statuses**
> object update_organization_camera_onboarding_statuses(organization_id, update_organization_camera_onboarding_statuses_request=update_organization_camera_onboarding_statuses_request)

Notify that credential handoff to camera has completed

Notify that credential handoff to camera has completed

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_camera_onboarding_statuses_request import UpdateOrganizationCameraOnboardingStatusesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CameraApi(api_client)
    organization_id = 'organization_id_example' # str | 
    update_organization_camera_onboarding_statuses_request = openapi_client.UpdateOrganizationCameraOnboardingStatusesRequest() # UpdateOrganizationCameraOnboardingStatusesRequest |  (optional)

    try:
        # Notify that credential handoff to camera has completed
        api_response = api_instance.update_organization_camera_onboarding_statuses(organization_id, update_organization_camera_onboarding_statuses_request=update_organization_camera_onboarding_statuses_request)
        print("The response of CameraApi->update_organization_camera_onboarding_statuses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CameraApi->update_organization_camera_onboarding_statuses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **update_organization_camera_onboarding_statuses_request** | [**UpdateOrganizationCameraOnboardingStatusesRequest**](UpdateOrganizationCameraOnboardingStatusesRequest.md)|  | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

