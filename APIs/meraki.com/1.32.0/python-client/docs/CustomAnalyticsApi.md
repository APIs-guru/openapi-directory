# openapi_client.CustomAnalyticsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_camera_custom_analytics_artifact_1**](CustomAnalyticsApi.md#create_organization_camera_custom_analytics_artifact_1) | **POST** /organizations/{organizationId}/camera/customAnalytics/artifacts | Create custom analytics artifact
[**delete_organization_camera_custom_analytics_artifact_1**](CustomAnalyticsApi.md#delete_organization_camera_custom_analytics_artifact_1) | **DELETE** /organizations/{organizationId}/camera/customAnalytics/artifacts/{artifactId} | Delete Custom Analytics Artifact
[**get_device_camera_custom_analytics_1**](CustomAnalyticsApi.md#get_device_camera_custom_analytics_1) | **GET** /devices/{serial}/camera/customAnalytics | Return custom analytics settings for a camera
[**get_organization_camera_custom_analytics_artifact_1**](CustomAnalyticsApi.md#get_organization_camera_custom_analytics_artifact_1) | **GET** /organizations/{organizationId}/camera/customAnalytics/artifacts/{artifactId} | Get Custom Analytics Artifact
[**get_organization_camera_custom_analytics_artifacts_1**](CustomAnalyticsApi.md#get_organization_camera_custom_analytics_artifacts_1) | **GET** /organizations/{organizationId}/camera/customAnalytics/artifacts | List Custom Analytics Artifacts
[**update_device_camera_custom_analytics_1**](CustomAnalyticsApi.md#update_device_camera_custom_analytics_1) | **PUT** /devices/{serial}/camera/customAnalytics | Update custom analytics settings for a camera


# **create_organization_camera_custom_analytics_artifact_1**
> object create_organization_camera_custom_analytics_artifact_1(organization_id, create_organization_camera_custom_analytics_artifact_request=create_organization_camera_custom_analytics_artifact_request)

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
    api_instance = openapi_client.CustomAnalyticsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_camera_custom_analytics_artifact_request = openapi_client.CreateOrganizationCameraCustomAnalyticsArtifactRequest() # CreateOrganizationCameraCustomAnalyticsArtifactRequest |  (optional)

    try:
        # Create custom analytics artifact
        api_response = api_instance.create_organization_camera_custom_analytics_artifact_1(organization_id, create_organization_camera_custom_analytics_artifact_request=create_organization_camera_custom_analytics_artifact_request)
        print("The response of CustomAnalyticsApi->create_organization_camera_custom_analytics_artifact_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAnalyticsApi->create_organization_camera_custom_analytics_artifact_1: %s\n" % e)
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

# **delete_organization_camera_custom_analytics_artifact_1**
> delete_organization_camera_custom_analytics_artifact_1(organization_id, artifact_id)

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
    api_instance = openapi_client.CustomAnalyticsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    artifact_id = 'artifact_id_example' # str | 

    try:
        # Delete Custom Analytics Artifact
        api_instance.delete_organization_camera_custom_analytics_artifact_1(organization_id, artifact_id)
    except Exception as e:
        print("Exception when calling CustomAnalyticsApi->delete_organization_camera_custom_analytics_artifact_1: %s\n" % e)
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

# **get_device_camera_custom_analytics_1**
> object get_device_camera_custom_analytics_1(serial)

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
    api_instance = openapi_client.CustomAnalyticsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return custom analytics settings for a camera
        api_response = api_instance.get_device_camera_custom_analytics_1(serial)
        print("The response of CustomAnalyticsApi->get_device_camera_custom_analytics_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAnalyticsApi->get_device_camera_custom_analytics_1: %s\n" % e)
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

# **get_organization_camera_custom_analytics_artifact_1**
> object get_organization_camera_custom_analytics_artifact_1(organization_id, artifact_id)

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
    api_instance = openapi_client.CustomAnalyticsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    artifact_id = 'artifact_id_example' # str | 

    try:
        # Get Custom Analytics Artifact
        api_response = api_instance.get_organization_camera_custom_analytics_artifact_1(organization_id, artifact_id)
        print("The response of CustomAnalyticsApi->get_organization_camera_custom_analytics_artifact_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAnalyticsApi->get_organization_camera_custom_analytics_artifact_1: %s\n" % e)
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

# **get_organization_camera_custom_analytics_artifacts_1**
> List[object] get_organization_camera_custom_analytics_artifacts_1(organization_id)

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
    api_instance = openapi_client.CustomAnalyticsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List Custom Analytics Artifacts
        api_response = api_instance.get_organization_camera_custom_analytics_artifacts_1(organization_id)
        print("The response of CustomAnalyticsApi->get_organization_camera_custom_analytics_artifacts_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAnalyticsApi->get_organization_camera_custom_analytics_artifacts_1: %s\n" % e)
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

# **update_device_camera_custom_analytics_1**
> object update_device_camera_custom_analytics_1(serial, update_device_camera_custom_analytics_request=update_device_camera_custom_analytics_request)

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
    api_instance = openapi_client.CustomAnalyticsApi(api_client)
    serial = 'serial_example' # str | 
    update_device_camera_custom_analytics_request = openapi_client.UpdateDeviceCameraCustomAnalyticsRequest() # UpdateDeviceCameraCustomAnalyticsRequest |  (optional)

    try:
        # Update custom analytics settings for a camera
        api_response = api_instance.update_device_camera_custom_analytics_1(serial, update_device_camera_custom_analytics_request=update_device_camera_custom_analytics_request)
        print("The response of CustomAnalyticsApi->update_device_camera_custom_analytics_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomAnalyticsApi->update_device_camera_custom_analytics_1: %s\n" % e)
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

