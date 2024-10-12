# openapi_client.AppPlatformApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_create_or_update**](AppPlatformApi.md#apps_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName} | 
[**apps_delete**](AppPlatformApi.md#apps_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName} | 
[**apps_get**](AppPlatformApi.md#apps_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName} | 
[**apps_get_resource_upload_url**](AppPlatformApi.md#apps_get_resource_upload_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/getResourceUploadUrl | 
[**apps_list**](AppPlatformApi.md#apps_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps | 
[**apps_update**](AppPlatformApi.md#apps_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName} | 
[**bindings_create_or_update**](AppPlatformApi.md#bindings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName} | 
[**bindings_delete**](AppPlatformApi.md#bindings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName} | 
[**bindings_get**](AppPlatformApi.md#bindings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName} | 
[**bindings_list**](AppPlatformApi.md#bindings_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings | 
[**bindings_update**](AppPlatformApi.md#bindings_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/bindings/{bindingName} | 
[**deployments_create_or_update**](AppPlatformApi.md#deployments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName} | 
[**deployments_delete**](AppPlatformApi.md#deployments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName} | 
[**deployments_get**](AppPlatformApi.md#deployments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName} | 
[**deployments_get_log_file_url**](AppPlatformApi.md#deployments_get_log_file_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/getLogFileUrl | 
[**deployments_list**](AppPlatformApi.md#deployments_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments | 
[**deployments_list_cluster_all_deployments**](AppPlatformApi.md#deployments_list_cluster_all_deployments) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/deployments | 
[**deployments_restart**](AppPlatformApi.md#deployments_restart) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/restart | 
[**deployments_start**](AppPlatformApi.md#deployments_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/start | 
[**deployments_stop**](AppPlatformApi.md#deployments_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName}/stop | 
[**deployments_update**](AppPlatformApi.md#deployments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/apps/{appName}/deployments/{deploymentName} | 
[**operations_list**](AppPlatformApi.md#operations_list) | **GET** /providers/Microsoft.AppPlatform/operations | 
[**services_check_name_availability**](AppPlatformApi.md#services_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/locations/{location}/checkNameAvailability | 
[**services_create_or_update**](AppPlatformApi.md#services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName} | 
[**services_delete**](AppPlatformApi.md#services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName} | 
[**services_disable_test_endpoint**](AppPlatformApi.md#services_disable_test_endpoint) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/disableTestEndpoint | 
[**services_enable_test_endpoint**](AppPlatformApi.md#services_enable_test_endpoint) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/enableTestEndpoint | 
[**services_get**](AppPlatformApi.md#services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName} | 
[**services_list**](AppPlatformApi.md#services_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring | 
[**services_list_by_subscription**](AppPlatformApi.md#services_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AppPlatform/Spring | 
[**services_list_test_keys**](AppPlatformApi.md#services_list_test_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/listTestKeys | 
[**services_regenerate_test_key**](AppPlatformApi.md#services_regenerate_test_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/regenerateTestKey | 
[**services_update**](AppPlatformApi.md#services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName} | 


# **apps_create_or_update**
> AppResource apps_create_or_update(api_version, subscription_id, resource_group_name, service_name, app_name, app_resource)



Create a new App or update an exiting App.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_resource import AppResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    app_resource = openapi_client.AppResource() # AppResource | Parameters for the create or update operation

    try:
        api_response = api_instance.apps_create_or_update(api_version, subscription_id, resource_group_name, service_name, app_name, app_resource)
        print("The response of AppPlatformApi->apps_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->apps_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **app_resource** | [**AppResource**](AppResource.md)| Parameters for the create or update operation | 

### Return type

[**AppResource**](AppResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated App. |  -  |
**201** | Created. The response describes the new App and contains a Location header to query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_delete**
> apps_delete(api_version, subscription_id, resource_group_name, service_name, app_name)



Operation to delete an App.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.

    try:
        api_instance.apps_delete(api_version, subscription_id, resource_group_name, service_name, app_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->apps_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 

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
**200** | Success. The response indicates the resource is deleted. |  -  |
**204** | Success. The response indicates the resource doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get**
> AppResource apps_get(api_version, subscription_id, resource_group_name, service_name, app_name, sync_status=sync_status)



Get an App and its properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_resource import AppResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    sync_status = 'sync_status_example' # str | Indicates whether sync status (optional)

    try:
        api_response = api_instance.apps_get(api_version, subscription_id, resource_group_name, service_name, app_name, sync_status=sync_status)
        print("The response of AppPlatformApi->apps_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->apps_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **sync_status** | **str**| Indicates whether sync status | [optional] 

### Return type

[**AppResource**](AppResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the corresponding App. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_get_resource_upload_url**
> ResourceUploadDefinition apps_get_resource_upload_url(api_version, subscription_id, resource_group_name, service_name, app_name)



Get an resource upload URL for an App, which may be artifacts or source archive.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_upload_definition import ResourceUploadDefinition
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.

    try:
        api_response = api_instance.apps_get_resource_upload_url(api_version, subscription_id, resource_group_name, service_name, app_name)
        print("The response of AppPlatformApi->apps_get_resource_upload_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->apps_get_resource_upload_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 

### Return type

[**ResourceUploadDefinition**](ResourceUploadDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the resource upload URL. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_list**
> AppResourceCollection apps_list(api_version, subscription_id, resource_group_name, service_name)



Handles requests to list all resources in a Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_resource_collection import AppResourceCollection
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.

    try:
        api_response = api_instance.apps_list(api_version, subscription_id, resource_group_name, service_name)
        print("The response of AppPlatformApi->apps_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->apps_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 

### Return type

[**AppResourceCollection**](AppResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of Apps in the Service. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_update**
> AppResource apps_update(api_version, subscription_id, resource_group_name, service_name, app_name, app_resource)



Operation to update an exiting App.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.app_resource import AppResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    app_resource = openapi_client.AppResource() # AppResource | Parameters for the update operation

    try:
        api_response = api_instance.apps_update(api_version, subscription_id, resource_group_name, service_name, app_name, app_resource)
        print("The response of AppPlatformApi->apps_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->apps_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **app_resource** | [**AppResource**](AppResource.md)| Parameters for the update operation | 

### Return type

[**AppResource**](AppResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated App. |  -  |
**202** | Accepted. The response indicates the exiting App is now updating and contains a Location header to query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bindings_create_or_update**
> BindingResource bindings_create_or_update(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name, binding_resource)



Create a new Binding or update an exiting Binding.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.binding_resource import BindingResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    binding_name = 'binding_name_example' # str | The name of the Binding resource.
    binding_resource = openapi_client.BindingResource() # BindingResource | Parameters for the create or update operation

    try:
        api_response = api_instance.bindings_create_or_update(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name, binding_resource)
        print("The response of AppPlatformApi->bindings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->bindings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **binding_name** | **str**| The name of the Binding resource. | 
 **binding_resource** | [**BindingResource**](BindingResource.md)| Parameters for the create or update operation | 

### Return type

[**BindingResource**](BindingResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the created or updated Binding. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bindings_delete**
> bindings_delete(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name)



Operation to delete a Binding.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    binding_name = 'binding_name_example' # str | The name of the Binding resource.

    try:
        api_instance.bindings_delete(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->bindings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **binding_name** | **str**| The name of the Binding resource. | 

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
**200** | Success. The response indicates the resource is deleted. |  -  |
**204** | Success. The response indicates the resource doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bindings_get**
> BindingResource bindings_get(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name)



Get a Binding and its properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.binding_resource import BindingResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    binding_name = 'binding_name_example' # str | The name of the Binding resource.

    try:
        api_response = api_instance.bindings_get(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name)
        print("The response of AppPlatformApi->bindings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->bindings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **binding_name** | **str**| The name of the Binding resource. | 

### Return type

[**BindingResource**](BindingResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the corresponding Binding. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bindings_list**
> BindingResourceCollection bindings_list(api_version, subscription_id, resource_group_name, service_name, app_name)



Handles requests to list all resources in an App.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.binding_resource_collection import BindingResourceCollection
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.

    try:
        api_response = api_instance.bindings_list(api_version, subscription_id, resource_group_name, service_name, app_name)
        print("The response of AppPlatformApi->bindings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->bindings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 

### Return type

[**BindingResourceCollection**](BindingResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of Bindings in the App. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bindings_update**
> BindingResource bindings_update(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name, binding_resource)



Operation to update an exiting Binding.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.binding_resource import BindingResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    binding_name = 'binding_name_example' # str | The name of the Binding resource.
    binding_resource = openapi_client.BindingResource() # BindingResource | Parameters for the update operation

    try:
        api_response = api_instance.bindings_update(api_version, subscription_id, resource_group_name, service_name, app_name, binding_name, binding_resource)
        print("The response of AppPlatformApi->bindings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->bindings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **binding_name** | **str**| The name of the Binding resource. | 
 **binding_resource** | [**BindingResource**](BindingResource.md)| Parameters for the update operation | 

### Return type

[**BindingResource**](BindingResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated Binding. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_create_or_update**
> DeploymentResource deployments_create_or_update(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name, deployment_resource)



Create a new Deployment or update an exiting Deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_resource import DeploymentResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.
    deployment_resource = openapi_client.DeploymentResource() # DeploymentResource | Parameters for the create or update operation

    try:
        api_response = api_instance.deployments_create_or_update(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name, deployment_resource)
        print("The response of AppPlatformApi->deployments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 
 **deployment_resource** | [**DeploymentResource**](DeploymentResource.md)| Parameters for the create or update operation | 

### Return type

[**DeploymentResource**](DeploymentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated Deployment. |  -  |
**201** | Created. The response describes the new Deployment and contains a Location header to query the  operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_delete**
> deployments_delete(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)



Operation to delete a Deployment.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.

    try:
        api_instance.deployments_delete(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 

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
**200** | Success. The response indicates the resource is deleted. |  -  |
**204** | Success. The response indicates the resource doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get**
> DeploymentResource deployments_get(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)



Get a Deployment and its properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_resource import DeploymentResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.

    try:
        api_response = api_instance.deployments_get(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)
        print("The response of AppPlatformApi->deployments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 

### Return type

[**DeploymentResource**](DeploymentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the corresponding Deployment. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_get_log_file_url**
> LogFileUrlResponse deployments_get_log_file_url(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)



Get deployment log file URL

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_file_url_response import LogFileUrlResponse
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.

    try:
        api_response = api_instance.deployments_get_log_file_url(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)
        print("The response of AppPlatformApi->deployments_get_log_file_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_get_log_file_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 

### Return type

[**LogFileUrlResponse**](LogFileUrlResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response contains the log file URL. |  -  |
**204** | Success. The deployment does not have log file. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list**
> DeploymentResourceCollection deployments_list(api_version, subscription_id, resource_group_name, service_name, app_name, version=version)



Handles requests to list all resources in an App.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_resource_collection import DeploymentResourceCollection
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    version = ['version_example'] # List[str] | Version of the deployments to be listed (optional)

    try:
        api_response = api_instance.deployments_list(api_version, subscription_id, resource_group_name, service_name, app_name, version=version)
        print("The response of AppPlatformApi->deployments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **version** | [**List[str]**](str.md)| Version of the deployments to be listed | [optional] 

### Return type

[**DeploymentResourceCollection**](DeploymentResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of Deployments in the App. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_list_cluster_all_deployments**
> DeploymentResourceCollection deployments_list_cluster_all_deployments(api_version, subscription_id, resource_group_name, service_name, version=version)



List deployments for a certain service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_resource_collection import DeploymentResourceCollection
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    version = ['version_example'] # List[str] | Version of the deployments to be listed (optional)

    try:
        api_response = api_instance.deployments_list_cluster_all_deployments(api_version, subscription_id, resource_group_name, service_name, version=version)
        print("The response of AppPlatformApi->deployments_list_cluster_all_deployments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_list_cluster_all_deployments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **version** | [**List[str]**](str.md)| Version of the deployments to be listed | [optional] 

### Return type

[**DeploymentResourceCollection**](DeploymentResourceCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_restart**
> deployments_restart(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)



Restart the deployment.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.

    try:
        api_instance.deployments_restart(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 

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
**200** | Success. |  -  |
**202** | Accepted. The response indicates the Deployment is now restarting and contains a Location header  to query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_start**
> deployments_start(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)



Start the deployment.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.

    try:
        api_instance.deployments_start(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 

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
**200** | Success. |  -  |
**202** | Accepted. The response indicates the Deployment is now starting and contains a Location header to  query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_stop**
> deployments_stop(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)



Stop the deployment.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.

    try:
        api_instance.deployments_stop(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 

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
**200** | Success. |  -  |
**202** | Accepted. The response indicates the Deployment is now stopping and contains a Location header to  query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployments_update**
> DeploymentResource deployments_update(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name, deployment_resource)



Operation to update an exiting Deployment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.deployment_resource import DeploymentResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    app_name = 'app_name_example' # str | The name of the App resource.
    deployment_name = 'deployment_name_example' # str | The name of the Deployment resource.
    deployment_resource = openapi_client.DeploymentResource() # DeploymentResource | Parameters for the update operation

    try:
        api_response = api_instance.deployments_update(api_version, subscription_id, resource_group_name, service_name, app_name, deployment_name, deployment_resource)
        print("The response of AppPlatformApi->deployments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->deployments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **app_name** | **str**| The name of the App resource. | 
 **deployment_name** | **str**| The name of the Deployment resource. | 
 **deployment_resource** | [**DeploymentResource**](DeploymentResource.md)| Parameters for the update operation | 

### Return type

[**DeploymentResource**](DeploymentResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated Deployment. |  -  |
**202** | Accepted. The response indicates the exiting Deployment is now updating and contains a Location  header to query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> AvailableOperations operations_list(api_version)



Lists all of the available REST API operations of the Microsoft.AppPlatform provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_operations import AvailableOperations
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of AppPlatformApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**AvailableOperations**](AvailableOperations.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of operations. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_check_name_availability**
> NameAvailability services_check_name_availability(location, api_version, subscription_id, availability_parameters)



Checks that the resource name is valid and is not already in use.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.name_availability import NameAvailability
from openapi_client.models.name_availability_parameters import NameAvailabilityParameters
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    location = 'location_example' # str | the region
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    availability_parameters = openapi_client.NameAvailabilityParameters() # NameAvailabilityParameters | Parameters supplied to the operation.

    try:
        api_response = api_instance.services_check_name_availability(location, api_version, subscription_id, availability_parameters)
        print("The response of AppPlatformApi->services_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| the region | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **availability_parameters** | [**NameAvailabilityParameters**](NameAvailabilityParameters.md)| Parameters supplied to the operation. | 

### Return type

[**NameAvailability**](NameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the name availability. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_create_or_update**
> ServiceResource services_create_or_update(api_version, subscription_id, resource_group_name, service_name, resource)



Create a new Service or update an exiting Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource import ServiceResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    resource = openapi_client.ServiceResource() # ServiceResource | Parameters for the create or update operation

    try:
        api_response = api_instance.services_create_or_update(api_version, subscription_id, resource_group_name, service_name, resource)
        print("The response of AppPlatformApi->services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **resource** | [**ServiceResource**](ServiceResource.md)| Parameters for the create or update operation | 

### Return type

[**ServiceResource**](ServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated Service. |  -  |
**201** | Created. The response describes the new Service and contains a Location header to query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete**
> services_delete(api_version, subscription_id, resource_group_name, service_name)



Operation to delete a Service.

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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.

    try:
        api_instance.services_delete(api_version, subscription_id, resource_group_name, service_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 

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
**202** | Accepted. The response indicates the delete operation is performed in the background. |  -  |
**204** | Success. The response indicates the resource is already deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_disable_test_endpoint**
> services_disable_test_endpoint(api_version, subscription_id, resource_group_name, service_name)



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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.

    try:
        api_instance.services_disable_test_endpoint(api_version, subscription_id, resource_group_name, service_name)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_disable_test_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 

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
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_enable_test_endpoint**
> TestKeys services_enable_test_endpoint(api_version, subscription_id, resource_group_name, service_name)



### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.test_keys import TestKeys
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.

    try:
        api_response = api_instance.services_enable_test_endpoint(api_version, subscription_id, resource_group_name, service_name)
        print("The response of AppPlatformApi->services_enable_test_endpoint:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_enable_test_endpoint: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 

### Return type

[**TestKeys**](TestKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get**
> ServiceResource services_get(api_version, subscription_id, resource_group_name, service_name)



Get a Service and its properties.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource import ServiceResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.

    try:
        api_response = api_instance.services_get(api_version, subscription_id, resource_group_name, service_name)
        print("The response of AppPlatformApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 

### Return type

[**ServiceResource**](ServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the corresponding Service. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> ServiceResourceList services_list(api_version, subscription_id, resource_group_name)



Handles requests to list all resources in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource_list import ServiceResourceList
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

    try:
        api_response = api_instance.services_list(api_version, subscription_id, resource_group_name)
        print("The response of AppPlatformApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 

### Return type

[**ServiceResourceList**](ServiceResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of Services in the resource group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_by_subscription**
> ServiceResourceList services_list_by_subscription(api_version, subscription_id)



Handles requests to list all resources in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource_list import ServiceResourceList
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.services_list_by_subscription(api_version, subscription_id)
        print("The response of AppPlatformApi->services_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ServiceResourceList**](ServiceResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the list of Services in the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_test_keys**
> TestKeys services_list_test_keys(api_version, subscription_id, resource_group_name, service_name)



List test keys for a Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.test_keys import TestKeys
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.

    try:
        api_response = api_instance.services_list_test_keys(api_version, subscription_id, resource_group_name, service_name)
        print("The response of AppPlatformApi->services_list_test_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_list_test_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 

### Return type

[**TestKeys**](TestKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the test keys. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_regenerate_test_key**
> TestKeys services_regenerate_test_key(api_version, subscription_id, resource_group_name, service_name, regenerate_test_key_request)



Regenerate a test key for a Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.regenerate_test_key_request_payload import RegenerateTestKeyRequestPayload
from openapi_client.models.test_keys import TestKeys
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    regenerate_test_key_request = openapi_client.RegenerateTestKeyRequestPayload() # RegenerateTestKeyRequestPayload | Parameters for the operation

    try:
        api_response = api_instance.services_regenerate_test_key(api_version, subscription_id, resource_group_name, service_name, regenerate_test_key_request)
        print("The response of AppPlatformApi->services_regenerate_test_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_regenerate_test_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **regenerate_test_key_request** | [**RegenerateTestKeyRequestPayload**](RegenerateTestKeyRequestPayload.md)| Parameters for the operation | 

### Return type

[**TestKeys**](TestKeys.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update**
> ServiceResource services_update(api_version, subscription_id, resource_group_name, service_name, resource)



Operation to update an exiting Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource import ServiceResource
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
    api_instance = openapi_client.AppPlatformApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    service_name = 'service_name_example' # str | The name of the Service resource.
    resource = openapi_client.ServiceResource() # ServiceResource | Parameters for the update operation

    try:
        api_response = api_instance.services_update(api_version, subscription_id, resource_group_name, service_name, resource)
        print("The response of AppPlatformApi->services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPlatformApi->services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription ID which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **service_name** | **str**| The name of the Service resource. | 
 **resource** | [**ServiceResource**](ServiceResource.md)| Parameters for the update operation | 

### Return type

[**ServiceResource**](ServiceResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. The response describes the updated Service. |  -  |
**202** | Accepted. The response indicates the exiting Service is now updating and contains a Location header to query the operation result. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

