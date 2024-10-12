# openapi_client.CustomResourceProviderApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_resource_provider_create_or_update**](CustomResourceProviderApi.md#custom_resource_provider_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName} | 
[**custom_resource_provider_delete**](CustomResourceProviderApi.md#custom_resource_provider_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName} | 
[**custom_resource_provider_get**](CustomResourceProviderApi.md#custom_resource_provider_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName} | 
[**custom_resource_provider_list_by_resource_group**](CustomResourceProviderApi.md#custom_resource_provider_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders | 
[**custom_resource_provider_list_by_subscription**](CustomResourceProviderApi.md#custom_resource_provider_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.CustomProviders/resourceProviders | 
[**custom_resource_provider_update**](CustomResourceProviderApi.md#custom_resource_provider_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName} | 


# **custom_resource_provider_create_or_update**
> CustomRPManifest custom_resource_provider_create_or_update(subscription_id, resource_group_name, resource_provider_name, api_version, resource_provider)



Creates or updates the custom resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_rp_manifest import CustomRPManifest
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
    api_instance = openapi_client.CustomResourceProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_name = 'resource_provider_name_example' # str | The name of the resource provider.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    resource_provider = openapi_client.CustomRPManifest() # CustomRPManifest | The parameters required to create or update a custom resource provider definition.

    try:
        api_response = api_instance.custom_resource_provider_create_or_update(subscription_id, resource_group_name, resource_provider_name, api_version, resource_provider)
        print("The response of CustomResourceProviderApi->custom_resource_provider_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomResourceProviderApi->custom_resource_provider_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_name** | **str**| The name of the resource provider. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **resource_provider** | [**CustomRPManifest**](CustomRPManifest.md)| The parameters required to create or update a custom resource provider definition. | 

### Return type

[**CustomRPManifest**](CustomRPManifest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. Resource already exists and the changes have been accepted |  -  |
**201** | Created response definition. Resource has been created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_resource_provider_delete**
> custom_resource_provider_delete(subscription_id, resource_group_name, resource_provider_name, api_version)



Deletes the custom resource provider.

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
    api_instance = openapi_client.CustomResourceProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_name = 'resource_provider_name_example' # str | The name of the resource provider.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_instance.custom_resource_provider_delete(subscription_id, resource_group_name, resource_provider_name, api_version)
    except Exception as e:
        print("Exception when calling CustomResourceProviderApi->custom_resource_provider_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_name** | **str**| The name of the resource provider. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

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
**200** | OK resource deleted |  -  |
**202** | OK resource delete has been accepted. |  -  |
**204** | OK resource was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_resource_provider_get**
> CustomRPManifest custom_resource_provider_get(subscription_id, resource_group_name, resource_provider_name, api_version)



Gets the custom resource provider manifest.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_rp_manifest import CustomRPManifest
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
    api_instance = openapi_client.CustomResourceProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_name = 'resource_provider_name_example' # str | The name of the resource provider.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.custom_resource_provider_get(subscription_id, resource_group_name, resource_provider_name, api_version)
        print("The response of CustomResourceProviderApi->custom_resource_provider_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomResourceProviderApi->custom_resource_provider_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_name** | **str**| The name of the resource provider. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**CustomRPManifest**](CustomRPManifest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition with the existing resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_resource_provider_list_by_resource_group**
> ListByCustomRPManifest custom_resource_provider_list_by_resource_group(subscription_id, resource_group_name, api_version)



Gets all the custom resource providers within a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_by_custom_rp_manifest import ListByCustomRPManifest
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
    api_instance = openapi_client.CustomResourceProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.custom_resource_provider_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of CustomResourceProviderApi->custom_resource_provider_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomResourceProviderApi->custom_resource_provider_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**ListByCustomRPManifest**](ListByCustomRPManifest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of custom resource providers. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_resource_provider_list_by_subscription**
> ListByCustomRPManifest custom_resource_provider_list_by_subscription(subscription_id, api_version)



Gets all the custom resource providers within a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.list_by_custom_rp_manifest import ListByCustomRPManifest
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
    api_instance = openapi_client.CustomResourceProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.custom_resource_provider_list_by_subscription(subscription_id, api_version)
        print("The response of CustomResourceProviderApi->custom_resource_provider_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomResourceProviderApi->custom_resource_provider_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**ListByCustomRPManifest**](ListByCustomRPManifest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of custom resource providers. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_resource_provider_update**
> CustomRPManifest custom_resource_provider_update(subscription_id, resource_group_name, resource_provider_name, api_version, patchable_resource)



Updates an existing custom resource provider. The only value that can be updated via PATCH currently is the tags.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_rp_manifest import CustomRPManifest
from openapi_client.models.resource_providers_update import ResourceProvidersUpdate
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
    api_instance = openapi_client.CustomResourceProviderApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    resource_provider_name = 'resource_provider_name_example' # str | The name of the resource provider.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    patchable_resource = openapi_client.ResourceProvidersUpdate() # ResourceProvidersUpdate | The updatable fields of a custom resource provider.

    try:
        api_response = api_instance.custom_resource_provider_update(subscription_id, resource_group_name, resource_provider_name, api_version, patchable_resource)
        print("The response of CustomResourceProviderApi->custom_resource_provider_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomResourceProviderApi->custom_resource_provider_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000) | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **resource_provider_name** | **str**| The name of the resource provider. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **patchable_resource** | [**ResourceProvidersUpdate**](ResourceProvidersUpdate.md)| The updatable fields of a custom resource provider. | 

### Return type

[**CustomRPManifest**](CustomRPManifest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response. The resource has been updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

