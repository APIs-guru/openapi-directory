# openapi_client.BundleIdCapabilitiesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bundle_id_capabilities_create_instance**](BundleIdCapabilitiesApi.md#bundle_id_capabilities_create_instance) | **POST** /v1/bundleIdCapabilities | 
[**bundle_id_capabilities_delete_instance**](BundleIdCapabilitiesApi.md#bundle_id_capabilities_delete_instance) | **DELETE** /v1/bundleIdCapabilities/{id} | 
[**bundle_id_capabilities_update_instance**](BundleIdCapabilitiesApi.md#bundle_id_capabilities_update_instance) | **PATCH** /v1/bundleIdCapabilities/{id} | 


# **bundle_id_capabilities_create_instance**
> BundleIdCapabilityResponse bundle_id_capabilities_create_instance(bundle_id_capability_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_id_capability_create_request import BundleIdCapabilityCreateRequest
from openapi_client.models.bundle_id_capability_response import BundleIdCapabilityResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BundleIdCapabilitiesApi(api_client)
    bundle_id_capability_create_request = openapi_client.BundleIdCapabilityCreateRequest() # BundleIdCapabilityCreateRequest | BundleIdCapability representation

    try:
        api_response = api_instance.bundle_id_capabilities_create_instance(bundle_id_capability_create_request)
        print("The response of BundleIdCapabilitiesApi->bundle_id_capabilities_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdCapabilitiesApi->bundle_id_capabilities_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bundle_id_capability_create_request** | [**BundleIdCapabilityCreateRequest**](BundleIdCapabilityCreateRequest.md)| BundleIdCapability representation | 

### Return type

[**BundleIdCapabilityResponse**](BundleIdCapabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single BundleIdCapability |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bundle_id_capabilities_delete_instance**
> bundle_id_capabilities_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BundleIdCapabilitiesApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.bundle_id_capabilities_delete_instance(id)
    except Exception as e:
        print("Exception when calling BundleIdCapabilitiesApi->bundle_id_capabilities_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bundle_id_capabilities_update_instance**
> BundleIdCapabilityResponse bundle_id_capabilities_update_instance(id, bundle_id_capability_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.bundle_id_capability_response import BundleIdCapabilityResponse
from openapi_client.models.bundle_id_capability_update_request import BundleIdCapabilityUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BundleIdCapabilitiesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    bundle_id_capability_update_request = openapi_client.BundleIdCapabilityUpdateRequest() # BundleIdCapabilityUpdateRequest | BundleIdCapability representation

    try:
        api_response = api_instance.bundle_id_capabilities_update_instance(id, bundle_id_capability_update_request)
        print("The response of BundleIdCapabilitiesApi->bundle_id_capabilities_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundleIdCapabilitiesApi->bundle_id_capabilities_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **bundle_id_capability_update_request** | [**BundleIdCapabilityUpdateRequest**](BundleIdCapabilityUpdateRequest.md)| BundleIdCapability representation | 

### Return type

[**BundleIdCapabilityResponse**](BundleIdCapabilityResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single BundleIdCapability |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

