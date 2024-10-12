# openapi_client.ApplicationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applications_create**](ApplicationApi.md#applications_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName} | Creates or updates a Service Fabric application resource.
[**applications_delete**](ApplicationApi.md#applications_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName} | Deletes a Service Fabric application resource.
[**applications_get**](ApplicationApi.md#applications_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName} | Gets a Service Fabric application resource.
[**applications_list**](ApplicationApi.md#applications_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications | Gets the list of application resources created in the specified Service Fabric cluster resource.
[**applications_update**](ApplicationApi.md#applications_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName} | Updates a Service Fabric application resource.


# **applications_create**
> ApplicationResource applications_create(subscription_id, resource_group_name, cluster_name, application_name, api_version, parameters)

Creates or updates a Service Fabric application resource.

Create or update a Service Fabric application resource with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource import ApplicationResource
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
    api_instance = openapi_client.ApplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    parameters = openapi_client.ApplicationResource() # ApplicationResource | The application resource.

    try:
        # Creates or updates a Service Fabric application resource.
        api_response = api_instance.applications_create(subscription_id, resource_group_name, cluster_name, application_name, api_version, parameters)
        print("The response of ApplicationApi->applications_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->applications_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **parameters** | [**ApplicationResource**](ApplicationResource.md)| The application resource. | 

### Return type

[**ApplicationResource**](ApplicationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_delete**
> applications_delete(subscription_id, resource_group_name, cluster_name, application_name, api_version)

Deletes a Service Fabric application resource.

Delete a Service Fabric application resource with the specified name.

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
    api_instance = openapi_client.ApplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)

    try:
        # Deletes a Service Fabric application resource.
        api_instance.applications_delete(subscription_id, resource_group_name, cluster_name, application_name, api_version)
    except Exception as e:
        print("Exception when calling ApplicationApi->applications_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]

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
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**204** | The resource was not found. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_get**
> ApplicationResource applications_get(subscription_id, resource_group_name, cluster_name, application_name, api_version)

Gets a Service Fabric application resource.

Get a Service Fabric application resource created or in the process of being created in the Service Fabric cluster resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource import ApplicationResource
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
    api_instance = openapi_client.ApplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)

    try:
        # Gets a Service Fabric application resource.
        api_response = api_instance.applications_get(subscription_id, resource_group_name, cluster_name, application_name, api_version)
        print("The response of ApplicationApi->applications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->applications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]

### Return type

[**ApplicationResource**](ApplicationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_list**
> ApplicationResourceList applications_list(subscription_id, resource_group_name, cluster_name, api_version)

Gets the list of application resources created in the specified Service Fabric cluster resource.

Gets all application resources created or in the process of being created in the Service Fabric cluster resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource_list import ApplicationResourceList
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
    api_instance = openapi_client.ApplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)

    try:
        # Gets the list of application resources created in the specified Service Fabric cluster resource.
        api_response = api_instance.applications_list(subscription_id, resource_group_name, cluster_name, api_version)
        print("The response of ApplicationApi->applications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->applications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]

### Return type

[**ApplicationResourceList**](ApplicationResourceList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_update**
> ApplicationResource applications_update(subscription_id, resource_group_name, cluster_name, application_name, api_version, parameters)

Updates a Service Fabric application resource.

Update a Service Fabric application resource with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_resource import ApplicationResource
from openapi_client.models.application_resource_update import ApplicationResourceUpdate
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
    api_instance = openapi_client.ApplicationApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    api_version = 2019-06-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-06-01-preview\" for this specification. (default to 2019-06-01-preview)
    parameters = openapi_client.ApplicationResourceUpdate() # ApplicationResourceUpdate | The application resource for patch operations.

    try:
        # Updates a Service Fabric application resource.
        api_response = api_instance.applications_update(subscription_id, resource_group_name, cluster_name, application_name, api_version, parameters)
        print("The response of ApplicationApi->applications_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationApi->applications_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-06-01-preview\&quot; for this specification. | [default to 2019-06-01-preview]
 **parameters** | [**ApplicationResourceUpdate**](ApplicationResourceUpdate.md)| The application resource for patch operations. | 

### Return type

[**ApplicationResource**](ApplicationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

