# openapi_client.QualityRetentionProfilesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_camera_quality_retention_profile_1**](QualityRetentionProfilesApi.md#create_network_camera_quality_retention_profile_1) | **POST** /networks/{networkId}/camera/qualityRetentionProfiles | Creates new quality retention profile for this network.
[**delete_network_camera_quality_retention_profile_1**](QualityRetentionProfilesApi.md#delete_network_camera_quality_retention_profile_1) | **DELETE** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Delete an existing quality retention profile for this network.
[**get_network_camera_quality_retention_profile_1**](QualityRetentionProfilesApi.md#get_network_camera_quality_retention_profile_1) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Retrieve a single quality retention profile
[**get_network_camera_quality_retention_profiles_1**](QualityRetentionProfilesApi.md#get_network_camera_quality_retention_profiles_1) | **GET** /networks/{networkId}/camera/qualityRetentionProfiles | List the quality retention profiles for this network
[**update_network_camera_quality_retention_profile_1**](QualityRetentionProfilesApi.md#update_network_camera_quality_retention_profile_1) | **PUT** /networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId} | Update an existing quality retention profile for this network.


# **create_network_camera_quality_retention_profile_1**
> object create_network_camera_quality_retention_profile_1(network_id, create_network_camera_quality_retention_profile_request)

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
    api_instance = openapi_client.QualityRetentionProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_camera_quality_retention_profile_request = openapi_client.CreateNetworkCameraQualityRetentionProfileRequest() # CreateNetworkCameraQualityRetentionProfileRequest | 

    try:
        # Creates new quality retention profile for this network.
        api_response = api_instance.create_network_camera_quality_retention_profile_1(network_id, create_network_camera_quality_retention_profile_request)
        print("The response of QualityRetentionProfilesApi->create_network_camera_quality_retention_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QualityRetentionProfilesApi->create_network_camera_quality_retention_profile_1: %s\n" % e)
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

# **delete_network_camera_quality_retention_profile_1**
> delete_network_camera_quality_retention_profile_1(network_id, quality_retention_profile_id)

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
    api_instance = openapi_client.QualityRetentionProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    quality_retention_profile_id = 'quality_retention_profile_id_example' # str | 

    try:
        # Delete an existing quality retention profile for this network.
        api_instance.delete_network_camera_quality_retention_profile_1(network_id, quality_retention_profile_id)
    except Exception as e:
        print("Exception when calling QualityRetentionProfilesApi->delete_network_camera_quality_retention_profile_1: %s\n" % e)
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

# **get_network_camera_quality_retention_profile_1**
> object get_network_camera_quality_retention_profile_1(network_id, quality_retention_profile_id)

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
    api_instance = openapi_client.QualityRetentionProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    quality_retention_profile_id = 'quality_retention_profile_id_example' # str | 

    try:
        # Retrieve a single quality retention profile
        api_response = api_instance.get_network_camera_quality_retention_profile_1(network_id, quality_retention_profile_id)
        print("The response of QualityRetentionProfilesApi->get_network_camera_quality_retention_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QualityRetentionProfilesApi->get_network_camera_quality_retention_profile_1: %s\n" % e)
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

# **get_network_camera_quality_retention_profiles_1**
> List[object] get_network_camera_quality_retention_profiles_1(network_id)

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
    api_instance = openapi_client.QualityRetentionProfilesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the quality retention profiles for this network
        api_response = api_instance.get_network_camera_quality_retention_profiles_1(network_id)
        print("The response of QualityRetentionProfilesApi->get_network_camera_quality_retention_profiles_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QualityRetentionProfilesApi->get_network_camera_quality_retention_profiles_1: %s\n" % e)
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

# **update_network_camera_quality_retention_profile_1**
> object update_network_camera_quality_retention_profile_1(network_id, quality_retention_profile_id, update_network_camera_quality_retention_profile_request=update_network_camera_quality_retention_profile_request)

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
    api_instance = openapi_client.QualityRetentionProfilesApi(api_client)
    network_id = 'network_id_example' # str | 
    quality_retention_profile_id = 'quality_retention_profile_id_example' # str | 
    update_network_camera_quality_retention_profile_request = openapi_client.UpdateNetworkCameraQualityRetentionProfileRequest() # UpdateNetworkCameraQualityRetentionProfileRequest |  (optional)

    try:
        # Update an existing quality retention profile for this network.
        api_response = api_instance.update_network_camera_quality_retention_profile_1(network_id, quality_retention_profile_id, update_network_camera_quality_retention_profile_request=update_network_camera_quality_retention_profile_request)
        print("The response of QualityRetentionProfilesApi->update_network_camera_quality_retention_profile_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling QualityRetentionProfilesApi->update_network_camera_quality_retention_profile_1: %s\n" % e)
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

