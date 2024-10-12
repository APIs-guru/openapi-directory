# openapi_client.ServiceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**services_create**](ServiceApi.md#services_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName} | Creates or updates a Service Fabric service resource.
[**services_delete**](ServiceApi.md#services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName} | Deletes a Service Fabric service resource.
[**services_get**](ServiceApi.md#services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName} | Gets a Service Fabric service resource.
[**services_list**](ServiceApi.md#services_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services | Gets the list of service resources created in the specified Service Fabric application resource.
[**services_update**](ServiceApi.md#services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applications/{applicationName}/services/{serviceName} | Updates a Service Fabric service resource.


# **services_create**
> ServiceResource services_create(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version, parameters)

Creates or updates a Service Fabric service resource.

Create or update a Service Fabric service resource with the specified name.

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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    service_name = 'service_name_example' # str | The name of the service resource in the format of {applicationName}~{serviceName}.
    api_version = 2017-07-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2017-07-01-preview\" for this specification. (default to 2017-07-01-preview)
    parameters = openapi_client.ServiceResource() # ServiceResource | The service resource.

    try:
        # Creates or updates a Service Fabric service resource.
        api_response = api_instance.services_create(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version, parameters)
        print("The response of ServiceApi->services_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **service_name** | **str**| The name of the service resource in the format of {applicationName}~{serviceName}. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2017-07-01-preview\&quot; for this specification. | [default to 2017-07-01-preview]
 **parameters** | [**ServiceResource**](ServiceResource.md)| The service resource. | 

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
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete**
> services_delete(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version)

Deletes a Service Fabric service resource.

Delete a Service Fabric service resource with the specified name.

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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    service_name = 'service_name_example' # str | The name of the service resource in the format of {applicationName}~{serviceName}.
    api_version = 2017-07-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2017-07-01-preview\" for this specification. (default to 2017-07-01-preview)

    try:
        # Deletes a Service Fabric service resource.
        api_instance.services_delete(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version)
    except Exception as e:
        print("Exception when calling ServiceApi->services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **service_name** | **str**| The name of the service resource in the format of {applicationName}~{serviceName}. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2017-07-01-preview\&quot; for this specification. | [default to 2017-07-01-preview]

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

# **services_get**
> ServiceResource services_get(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version)

Gets a Service Fabric service resource.

Get a Service Fabric service resource created or in the process of being created in the Service Fabric application resource.

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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    service_name = 'service_name_example' # str | The name of the service resource in the format of {applicationName}~{serviceName}.
    api_version = 2017-07-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2017-07-01-preview\" for this specification. (default to 2017-07-01-preview)

    try:
        # Gets a Service Fabric service resource.
        api_response = api_instance.services_get(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version)
        print("The response of ServiceApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **service_name** | **str**| The name of the service resource in the format of {applicationName}~{serviceName}. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2017-07-01-preview\&quot; for this specification. | [default to 2017-07-01-preview]

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
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> ServiceResourceList services_list(subscription_id, resource_group_name, cluster_name, application_name, api_version)

Gets the list of service resources created in the specified Service Fabric application resource.

Gets all service resources created or in the process of being created in the Service Fabric application resource.

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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    api_version = 2017-07-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2017-07-01-preview\" for this specification. (default to 2017-07-01-preview)

    try:
        # Gets the list of service resources created in the specified Service Fabric application resource.
        api_response = api_instance.services_list(subscription_id, resource_group_name, cluster_name, application_name, api_version)
        print("The response of ServiceApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2017-07-01-preview\&quot; for this specification. | [default to 2017-07-01-preview]

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
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update**
> ServiceResource services_update(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version, parameters)

Updates a Service Fabric service resource.

Update a Service Fabric service resource with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.service_resource import ServiceResource
from openapi_client.models.service_resource_update import ServiceResourceUpdate
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_name = 'application_name_example' # str | The name of the application resource.
    service_name = 'service_name_example' # str | The name of the service resource in the format of {applicationName}~{serviceName}.
    api_version = 2017-07-01-preview # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2017-07-01-preview\" for this specification. (default to 2017-07-01-preview)
    parameters = openapi_client.ServiceResourceUpdate() # ServiceResourceUpdate | The service resource for patch operations.

    try:
        # Updates a Service Fabric service resource.
        api_response = api_instance.services_update(subscription_id, resource_group_name, cluster_name, application_name, service_name, api_version, parameters)
        print("The response of ServiceApi->services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_name** | **str**| The name of the application resource. | 
 **service_name** | **str**| The name of the service resource in the format of {applicationName}~{serviceName}. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2017-07-01-preview\&quot; for this specification. | [default to 2017-07-01-preview]
 **parameters** | [**ServiceResourceUpdate**](ServiceResourceUpdate.md)| The service resource for patch operations. | 

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
**202** | The request was accepted and the operation will complete asynchronously. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

