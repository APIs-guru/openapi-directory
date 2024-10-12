# openapi_client.DedicatedCloudServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_cloud_services_create_or_update**](DedicatedCloudServicesApi.md#dedicated_cloud_services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName} | Implements dedicated cloud service PUT method
[**dedicated_cloud_services_delete**](DedicatedCloudServicesApi.md#dedicated_cloud_services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName} | Implements dedicatedCloudService DELETE method
[**dedicated_cloud_services_get**](DedicatedCloudServicesApi.md#dedicated_cloud_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName} | Implements dedicatedCloudService GET method
[**dedicated_cloud_services_list_by_resource_group**](DedicatedCloudServicesApi.md#dedicated_cloud_services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices | Implements list of dedicatedCloudService objects within RG method
[**dedicated_cloud_services_list_by_subscription**](DedicatedCloudServicesApi.md#dedicated_cloud_services_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices | Implements list of dedicatedCloudService objects within subscription method
[**dedicated_cloud_services_update**](DedicatedCloudServicesApi.md#dedicated_cloud_services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName} | Implements dedicatedCloudService PATCH method


# **dedicated_cloud_services_create_or_update**
> DedicatedCloudService dedicated_cloud_services_create_or_update(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version, dedicated_cloud_service_request)

Implements dedicated cloud service PUT method

Create dedicate cloud service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_service import DedicatedCloudService
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DedicatedCloudServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_service_name = 'dedicated_cloud_service_name_example' # str | dedicated cloud Service name
    api_version = 'api_version_example' # str | Client API version.
    dedicated_cloud_service_request = openapi_client.DedicatedCloudService() # DedicatedCloudService | Create Dedicated Cloud Service request

    try:
        # Implements dedicated cloud service PUT method
        api_response = api_instance.dedicated_cloud_services_create_or_update(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version, dedicated_cloud_service_request)
        print("The response of DedicatedCloudServicesApi->dedicated_cloud_services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudServicesApi->dedicated_cloud_services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_service_name** | **str**| dedicated cloud Service name | 
 **api_version** | **str**| Client API version. | 
 **dedicated_cloud_service_request** | [**DedicatedCloudService**](DedicatedCloudService.md)| Create Dedicated Cloud Service request | 

### Return type

[**DedicatedCloudService**](DedicatedCloudService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created or updated successfully, 200 should be returned |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_services_delete**
> dedicated_cloud_services_delete(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version)

Implements dedicatedCloudService DELETE method

Delete dedicate cloud service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DedicatedCloudServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_service_name = 'dedicated_cloud_service_name_example' # str | dedicated cloud service name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements dedicatedCloudService DELETE method
        api_instance.dedicated_cloud_services_delete(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version)
    except Exception as e:
        print("Exception when calling DedicatedCloudServicesApi->dedicated_cloud_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_service_name** | **str**| dedicated cloud service name | 
 **api_version** | **str**| Client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | no content. resource does not exist and the request is well formed |  -  |
**0** | General Error |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_services_get**
> DedicatedCloudService dedicated_cloud_services_get(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version)

Implements dedicatedCloudService GET method

Returns Dedicate Cloud Service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_service import DedicatedCloudService
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DedicatedCloudServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_service_name = 'dedicated_cloud_service_name_example' # str | dedicated cloud Service name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements dedicatedCloudService GET method
        api_response = api_instance.dedicated_cloud_services_get(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version)
        print("The response of DedicatedCloudServicesApi->dedicated_cloud_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudServicesApi->dedicated_cloud_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_service_name** | **str**| dedicated cloud Service name | 
 **api_version** | **str**| Client API version. | 

### Return type

[**DedicatedCloudService**](DedicatedCloudService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_services_list_by_resource_group**
> DedicatedCloudServiceListResponse dedicated_cloud_services_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip_token=skip_token)

Implements list of dedicatedCloudService objects within RG method

Returns list of dedicated cloud services within a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_service_list_response import DedicatedCloudServiceListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DedicatedCloudServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation (optional)
    top = 56 # int | The maximum number of record sets to return (optional)
    skip_token = 'skip_token_example' # str | to be used by nextLink implementation (optional)

    try:
        # Implements list of dedicatedCloudService objects within RG method
        api_response = api_instance.dedicated_cloud_services_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of DedicatedCloudServicesApi->dedicated_cloud_services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudServicesApi->dedicated_cloud_services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation | [optional] 
 **top** | **int**| The maximum number of record sets to return | [optional] 
 **skip_token** | **str**| to be used by nextLink implementation | [optional] 

### Return type

[**DedicatedCloudServiceListResponse**](DedicatedCloudServiceListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_services_list_by_subscription**
> DedicatedCloudServiceListResponse dedicated_cloud_services_list_by_subscription(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)

Implements list of dedicatedCloudService objects within subscription method

Returns list of dedicated cloud services within a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_service_list_response import DedicatedCloudServiceListResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DedicatedCloudServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation (optional)
    top = 56 # int | The maximum number of record sets to return (optional)
    skip_token = 'skip_token_example' # str | to be used by nextLink implementation (optional)

    try:
        # Implements list of dedicatedCloudService objects within subscription method
        api_response = api_instance.dedicated_cloud_services_list_by_subscription(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of DedicatedCloudServicesApi->dedicated_cloud_services_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudServicesApi->dedicated_cloud_services_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation | [optional] 
 **top** | **int**| The maximum number of record sets to return | [optional] 
 **skip_token** | **str**| to be used by nextLink implementation | [optional] 

### Return type

[**DedicatedCloudServiceListResponse**](DedicatedCloudServiceListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_cloud_services_update**
> DedicatedCloudService dedicated_cloud_services_update(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version, dedicated_cloud_service_request)

Implements dedicatedCloudService PATCH method

Patch dedicated cloud service's properties

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_cloud_service import DedicatedCloudService
from openapi_client.models.patch_payload import PatchPayload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DedicatedCloudServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    dedicated_cloud_service_name = 'dedicated_cloud_service_name_example' # str | dedicated cloud service name
    api_version = 'api_version_example' # str | Client API version.
    dedicated_cloud_service_request = openapi_client.PatchPayload() # PatchPayload | Patch Dedicated Cloud Service request

    try:
        # Implements dedicatedCloudService PATCH method
        api_response = api_instance.dedicated_cloud_services_update(subscription_id, resource_group_name, dedicated_cloud_service_name, api_version, dedicated_cloud_service_request)
        print("The response of DedicatedCloudServicesApi->dedicated_cloud_services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedCloudServicesApi->dedicated_cloud_services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **dedicated_cloud_service_name** | **str**| dedicated cloud service name | 
 **api_version** | **str**| Client API version. | 
 **dedicated_cloud_service_request** | [**PatchPayload**](PatchPayload.md)| Patch Dedicated Cloud Service request | 

### Return type

[**DedicatedCloudService**](DedicatedCloudService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created or updated successfully, 200 should be returned |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

