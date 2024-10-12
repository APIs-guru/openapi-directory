# openapi_client.ApplicationTypeVersionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_type_versions_create_or_update**](ApplicationTypeVersionApi.md#application_type_versions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version} | Creates or updates a Service Fabric application type version resource.
[**application_type_versions_delete**](ApplicationTypeVersionApi.md#application_type_versions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version} | Deletes a Service Fabric application type version resource.
[**application_type_versions_get**](ApplicationTypeVersionApi.md#application_type_versions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions/{version} | Gets a Service Fabric application type version resource.
[**application_type_versions_list**](ApplicationTypeVersionApi.md#application_type_versions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}/versions | Gets the list of application type version resources created in the specified Service Fabric application type name resource.


# **application_type_versions_create_or_update**
> ApplicationTypeVersionResource application_type_versions_create_or_update(subscription_id, resource_group_name, cluster_name, application_type_name, version, api_version, parameters)

Creates or updates a Service Fabric application type version resource.

Create or update a Service Fabric application type version resource with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_type_version_resource import ApplicationTypeVersionResource
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
    api_instance = openapi_client.ApplicationTypeVersionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    version = 'version_example' # str | The application type version.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)
    parameters = openapi_client.ApplicationTypeVersionResource() # ApplicationTypeVersionResource | The application type version resource.

    try:
        # Creates or updates a Service Fabric application type version resource.
        api_response = api_instance.application_type_versions_create_or_update(subscription_id, resource_group_name, cluster_name, application_type_name, version, api_version, parameters)
        print("The response of ApplicationTypeVersionApi->application_type_versions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeVersionApi->application_type_versions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_type_name** | **str**| The name of the application type name resource. | 
 **version** | **str**| The application type version. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-03-01\&quot; for this specification. | [default to 2019-03-01]
 **parameters** | [**ApplicationTypeVersionResource**](ApplicationTypeVersionResource.md)| The application type version resource. | 

### Return type

[**ApplicationTypeVersionResource**](ApplicationTypeVersionResource.md)

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

# **application_type_versions_delete**
> application_type_versions_delete(subscription_id, resource_group_name, cluster_name, application_type_name, version, api_version)

Deletes a Service Fabric application type version resource.

Delete a Service Fabric application type version resource with the specified name.

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
    api_instance = openapi_client.ApplicationTypeVersionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    version = 'version_example' # str | The application type version.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)

    try:
        # Deletes a Service Fabric application type version resource.
        api_instance.application_type_versions_delete(subscription_id, resource_group_name, cluster_name, application_type_name, version, api_version)
    except Exception as e:
        print("Exception when calling ApplicationTypeVersionApi->application_type_versions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_type_name** | **str**| The name of the application type name resource. | 
 **version** | **str**| The application type version. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-03-01\&quot; for this specification. | [default to 2019-03-01]

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

# **application_type_versions_get**
> ApplicationTypeVersionResource application_type_versions_get(subscription_id, resource_group_name, cluster_name, application_type_name, version, api_version)

Gets a Service Fabric application type version resource.

Get a Service Fabric application type version resource created or in the process of being created in the Service Fabric application type name resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_type_version_resource import ApplicationTypeVersionResource
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
    api_instance = openapi_client.ApplicationTypeVersionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    version = 'version_example' # str | The application type version.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)

    try:
        # Gets a Service Fabric application type version resource.
        api_response = api_instance.application_type_versions_get(subscription_id, resource_group_name, cluster_name, application_type_name, version, api_version)
        print("The response of ApplicationTypeVersionApi->application_type_versions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeVersionApi->application_type_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_type_name** | **str**| The name of the application type name resource. | 
 **version** | **str**| The application type version. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-03-01\&quot; for this specification. | [default to 2019-03-01]

### Return type

[**ApplicationTypeVersionResource**](ApplicationTypeVersionResource.md)

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

# **application_type_versions_list**
> ApplicationTypeVersionResourceList application_type_versions_list(subscription_id, resource_group_name, cluster_name, application_type_name, api_version)

Gets the list of application type version resources created in the specified Service Fabric application type name resource.

Gets all application type version resources created or in the process of being created in the Service Fabric application type name resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_type_version_resource_list import ApplicationTypeVersionResourceList
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
    api_instance = openapi_client.ApplicationTypeVersionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)

    try:
        # Gets the list of application type version resources created in the specified Service Fabric application type name resource.
        api_response = api_instance.application_type_versions_list(subscription_id, resource_group_name, cluster_name, application_type_name, api_version)
        print("The response of ApplicationTypeVersionApi->application_type_versions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeVersionApi->application_type_versions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_type_name** | **str**| The name of the application type name resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-03-01\&quot; for this specification. | [default to 2019-03-01]

### Return type

[**ApplicationTypeVersionResourceList**](ApplicationTypeVersionResourceList.md)

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

