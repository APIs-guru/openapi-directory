# openapi_client.ApplicationTypeApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_types_create_or_update**](ApplicationTypeApi.md#application_types_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName} | Creates or updates a Service Fabric application type name resource.
[**application_types_delete**](ApplicationTypeApi.md#application_types_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName} | Deletes a Service Fabric application type name resource.
[**application_types_get**](ApplicationTypeApi.md#application_types_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName} | Gets a Service Fabric application type name resource.
[**application_types_list**](ApplicationTypeApi.md#application_types_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes | Gets the list of application type name resources created in the specified Service Fabric cluster resource.


# **application_types_create_or_update**
> ApplicationTypeResource application_types_create_or_update(subscription_id, resource_group_name, cluster_name, application_type_name, api_version, parameters)

Creates or updates a Service Fabric application type name resource.

Create or update a Service Fabric application type name resource with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_type_resource import ApplicationTypeResource
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
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)
    parameters = openapi_client.ApplicationTypeResource() # ApplicationTypeResource | The application type name resource.

    try:
        # Creates or updates a Service Fabric application type name resource.
        api_response = api_instance.application_types_create_or_update(subscription_id, resource_group_name, cluster_name, application_type_name, api_version, parameters)
        print("The response of ApplicationTypeApi->application_types_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->application_types_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **application_type_name** | **str**| The name of the application type name resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-03-01\&quot; for this specification. | [default to 2019-03-01]
 **parameters** | [**ApplicationTypeResource**](ApplicationTypeResource.md)| The application type name resource. | 

### Return type

[**ApplicationTypeResource**](ApplicationTypeResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_types_delete**
> application_types_delete(subscription_id, resource_group_name, cluster_name, application_type_name, api_version)

Deletes a Service Fabric application type name resource.

Delete a Service Fabric application type name resource with the specified name.

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
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)

    try:
        # Deletes a Service Fabric application type name resource.
        api_instance.application_types_delete(subscription_id, resource_group_name, cluster_name, application_type_name, api_version)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->application_types_delete: %s\n" % e)
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

# **application_types_get**
> ApplicationTypeResource application_types_get(subscription_id, resource_group_name, cluster_name, application_type_name, api_version)

Gets a Service Fabric application type name resource.

Get a Service Fabric application type name resource created or in the process of being created in the Service Fabric cluster resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_type_resource import ApplicationTypeResource
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
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    application_type_name = 'application_type_name_example' # str | The name of the application type name resource.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)

    try:
        # Gets a Service Fabric application type name resource.
        api_response = api_instance.application_types_get(subscription_id, resource_group_name, cluster_name, application_type_name, api_version)
        print("The response of ApplicationTypeApi->application_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->application_types_get: %s\n" % e)
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

[**ApplicationTypeResource**](ApplicationTypeResource.md)

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

# **application_types_list**
> ApplicationTypeResourceList application_types_list(subscription_id, resource_group_name, cluster_name, api_version)

Gets the list of application type name resources created in the specified Service Fabric cluster resource.

Gets all application type name resources created or in the process of being created in the Service Fabric cluster resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_type_resource_list import ApplicationTypeResourceList
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
    api_instance = openapi_client.ApplicationTypeApi(api_client)
    subscription_id = 'subscription_id_example' # str | The customer subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    cluster_name = 'cluster_name_example' # str | The name of the cluster resource.
    api_version = 2019-03-01 # str | The version of the Service Fabric resource provider API. This is a required parameter and it's value must be \"2019-03-01\" for this specification. (default to 2019-03-01)

    try:
        # Gets the list of application type name resources created in the specified Service Fabric cluster resource.
        api_response = api_instance.application_types_list(subscription_id, resource_group_name, cluster_name, api_version)
        print("The response of ApplicationTypeApi->application_types_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationTypeApi->application_types_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The customer subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **cluster_name** | **str**| The name of the cluster resource. | 
 **api_version** | **str**| The version of the Service Fabric resource provider API. This is a required parameter and it&#39;s value must be \&quot;2019-03-01\&quot; for this specification. | [default to 2019-03-01]

### Return type

[**ApplicationTypeResourceList**](ApplicationTypeResourceList.md)

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

