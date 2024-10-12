# openapi_client.ArtifactsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_organization_camera_custom_analytics_artifact_2**](ArtifactsApi.md#create_organization_camera_custom_analytics_artifact_2) | **POST** /organizations/{organizationId}/camera/customAnalytics/artifacts | Create custom analytics artifact
[**delete_organization_camera_custom_analytics_artifact_2**](ArtifactsApi.md#delete_organization_camera_custom_analytics_artifact_2) | **DELETE** /organizations/{organizationId}/camera/customAnalytics/artifacts/{artifactId} | Delete Custom Analytics Artifact
[**get_organization_camera_custom_analytics_artifact_2**](ArtifactsApi.md#get_organization_camera_custom_analytics_artifact_2) | **GET** /organizations/{organizationId}/camera/customAnalytics/artifacts/{artifactId} | Get Custom Analytics Artifact
[**get_organization_camera_custom_analytics_artifacts_2**](ArtifactsApi.md#get_organization_camera_custom_analytics_artifacts_2) | **GET** /organizations/{organizationId}/camera/customAnalytics/artifacts | List Custom Analytics Artifacts


# **create_organization_camera_custom_analytics_artifact_2**
> object create_organization_camera_custom_analytics_artifact_2(organization_id, create_organization_camera_custom_analytics_artifact_request=create_organization_camera_custom_analytics_artifact_request)

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_camera_custom_analytics_artifact_request = openapi_client.CreateOrganizationCameraCustomAnalyticsArtifactRequest() # CreateOrganizationCameraCustomAnalyticsArtifactRequest |  (optional)

    try:
        # Create custom analytics artifact
        api_response = api_instance.create_organization_camera_custom_analytics_artifact_2(organization_id, create_organization_camera_custom_analytics_artifact_request=create_organization_camera_custom_analytics_artifact_request)
        print("The response of ArtifactsApi->create_organization_camera_custom_analytics_artifact_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->create_organization_camera_custom_analytics_artifact_2: %s\n" % e)
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

# **delete_organization_camera_custom_analytics_artifact_2**
> delete_organization_camera_custom_analytics_artifact_2(organization_id, artifact_id)

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    artifact_id = 'artifact_id_example' # str | 

    try:
        # Delete Custom Analytics Artifact
        api_instance.delete_organization_camera_custom_analytics_artifact_2(organization_id, artifact_id)
    except Exception as e:
        print("Exception when calling ArtifactsApi->delete_organization_camera_custom_analytics_artifact_2: %s\n" % e)
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

# **get_organization_camera_custom_analytics_artifact_2**
> object get_organization_camera_custom_analytics_artifact_2(organization_id, artifact_id)

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    artifact_id = 'artifact_id_example' # str | 

    try:
        # Get Custom Analytics Artifact
        api_response = api_instance.get_organization_camera_custom_analytics_artifact_2(organization_id, artifact_id)
        print("The response of ArtifactsApi->get_organization_camera_custom_analytics_artifact_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_organization_camera_custom_analytics_artifact_2: %s\n" % e)
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

# **get_organization_camera_custom_analytics_artifacts_2**
> List[object] get_organization_camera_custom_analytics_artifacts_2(organization_id)

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
    api_instance = openapi_client.ArtifactsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List Custom Analytics Artifacts
        api_response = api_instance.get_organization_camera_custom_analytics_artifacts_2(organization_id)
        print("The response of ArtifactsApi->get_organization_camera_custom_analytics_artifacts_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ArtifactsApi->get_organization_camera_custom_analytics_artifacts_2: %s\n" % e)
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

