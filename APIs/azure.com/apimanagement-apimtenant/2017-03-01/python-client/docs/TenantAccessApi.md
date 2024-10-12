# openapi_client.TenantAccessApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenant_access_get**](TenantAccessApi.md#tenant_access_get) | **GET** /tenant/{accessName} | 
[**tenant_access_regenerate_primary_key**](TenantAccessApi.md#tenant_access_regenerate_primary_key) | **POST** /tenant/{accessName}/regeneratePrimaryKey | 
[**tenant_access_regenerate_secondary_key**](TenantAccessApi.md#tenant_access_regenerate_secondary_key) | **POST** /tenant/{accessName}/regenerateSecondaryKey | 
[**tenant_access_update**](TenantAccessApi.md#tenant_access_update) | **PATCH** /tenant/{accessName} | 


# **tenant_access_get**
> AccessInformationContract tenant_access_get(api_version, access_name)



Get tenant access information details.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.access_information_contract import AccessInformationContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantAccessApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    access_name = 'access_name_example' # str | The identifier of the Access configuration.

    try:
        api_response = api_instance.tenant_access_get(api_version, access_name)
        print("The response of TenantAccessApi->tenant_access_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantAccessApi->tenant_access_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **access_name** | **str**| The identifier of the Access configuration. | 

### Return type

[**AccessInformationContract**](AccessInformationContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tenant Access information. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenant_access_regenerate_primary_key**
> tenant_access_regenerate_primary_key(api_version, access_name)



Regenerate primary access key.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantAccessApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    access_name = 'access_name_example' # str | The identifier of the Access configuration.

    try:
        api_instance.tenant_access_regenerate_primary_key(api_version, access_name)
    except Exception as e:
        print("Exception when calling TenantAccessApi->tenant_access_regenerate_primary_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **access_name** | **str**| The identifier of the Access configuration. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The primary key was successfully regenerated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenant_access_regenerate_secondary_key**
> tenant_access_regenerate_secondary_key(api_version, access_name)



Regenerate secondary access key.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantAccessApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    access_name = 'access_name_example' # str | The identifier of the Access configuration.

    try:
        api_instance.tenant_access_regenerate_secondary_key(api_version, access_name)
    except Exception as e:
        print("Exception when calling TenantAccessApi->tenant_access_regenerate_secondary_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **access_name** | **str**| The identifier of the Access configuration. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The secondary key was successfully regenerated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tenant_access_update**
> tenant_access_update(access_name, if_match, api_version, parameters)



Update tenant access information details.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.access_information_update_parameters import AccessInformationUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TenantAccessApi(api_client)
    access_name = 'access_name_example' # str | The identifier of the Access configuration.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the property to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.AccessInformationUpdateParameters() # AccessInformationUpdateParameters | Parameters supplied to retrieve the Tenant Access Information.

    try:
        api_instance.tenant_access_update(access_name, if_match, api_version, parameters)
    except Exception as e:
        print("Exception when calling TenantAccessApi->tenant_access_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_name** | **str**| The identifier of the Access configuration. | 
 **if_match** | **str**| The entity state (Etag) version of the property to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**AccessInformationUpdateParameters**](AccessInformationUpdateParameters.md)| Parameters supplied to retrieve the Tenant Access Information. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Tenant&#39;s access information updated successfully. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

