# openapi_client.GETApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list_0**](GETApi.md#operations_list_0) | **GET** /providers/Microsoft.DataMigration/operations | Get available resource provider actions (operations)
[**projects_get_1**](GETApi.md#projects_get_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Get project information
[**projects_list_1**](GETApi.md#projects_list_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects | Get projects in a service
[**resource_skus_list_skus_0**](GETApi.md#resource_skus_list_skus_0) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/skus | Get supported SKUs
[**services_get_1**](GETApi.md#services_get_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Get DMS Service Instance
[**services_list_1**](GETApi.md#services_list_1) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/services | Get services in subscription
[**services_list_by_resource_group_1**](GETApi.md#services_list_by_resource_group_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services | Get services in resource group
[**services_list_skus_1**](GETApi.md#services_list_skus_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/skus | Get compatible SKUs
[**tasks_get_1**](GETApi.md#tasks_get_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Get task information
[**tasks_list_1**](GETApi.md#tasks_list_1) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks | Get tasks in a service
[**usages_list_0**](GETApi.md#usages_list_0) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/usages | Get resource quotas and usage information


# **operations_list_0**
> OperationsList200Response operations_list_0(api_version)

Get available resource provider actions (operations)

Lists all available actions exposed by the Data Migration Service resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operations_list200_response import OperationsList200Response
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
    api_instance = openapi_client.GETApi(api_client)
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get available resource provider actions (operations)
        api_response = api_instance.operations_list_0(api_version)
        print("The response of GETApi->operations_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->operations_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API | 

### Return type

[**OperationsList200Response**](OperationsList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got action list |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_get_1**
> ProjectsGet200Response projects_get_1(subscription_id, group_name, service_name, project_name, api_version)

Get project information

The project resource is a nested resource representing a stored migration project. The GET method retrieves information about a project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.projects_get200_response import ProjectsGet200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get project information
        api_response = api_instance.projects_get_1(subscription_id, group_name, service_name, project_name, api_version)
        print("The response of GETApi->projects_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->projects_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ProjectsGet200Response**](ProjectsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A project resource |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_list_1**
> ProjectsList200Response projects_list_1(subscription_id, group_name, service_name, api_version)

Get projects in a service

The project resource is a nested resource representing a stored migration project. This method returns a list of projects owned by a service resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.projects_list200_response import ProjectsList200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get projects in a service
        api_response = api_instance.projects_list_1(subscription_id, group_name, service_name, api_version)
        print("The response of GETApi->projects_list_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->projects_list_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ProjectsList200Response**](ProjectsList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of projects |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_skus_list_skus_0**
> ResourceSkusListSkus200Response resource_skus_list_skus_0(subscription_id, api_version)

Get supported SKUs

The skus action returns the list of SKUs that DMS supports.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_skus_list_skus200_response import ResourceSkusListSkus200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get supported SKUs
        api_response = api_instance.resource_skus_list_skus_0(subscription_id, api_version)
        print("The response of GETApi->resource_skus_list_skus_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->resource_skus_list_skus_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ResourceSkusListSkus200Response**](ResourceSkusListSkus200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got SKUs |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_1**
> ServicesGet200Response services_get_1(subscription_id, group_name, service_name, api_version)

Get DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The GET method retrieves information about a service instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_get200_response import ServicesGet200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get DMS Service Instance
        api_response = api_instance.services_get_1(subscription_id, group_name, service_name, api_version)
        print("The response of GETApi->services_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->services_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A service instance resource |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_1**
> ServicesList200Response services_list_1(subscription_id, api_version)

Get services in subscription

The services resource is the top-level resource that represents the Data Migration Service. This method returns a list of service resources in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list200_response import ServicesList200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get services in subscription
        api_response = api_instance.services_list_1(subscription_id, api_version)
        print("The response of GETApi->services_list_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->services_list_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesList200Response**](ServicesList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got services |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_by_resource_group_1**
> ServicesList200Response services_list_by_resource_group_1(subscription_id, group_name, api_version)

Get services in resource group

The Services resource is the top-level resource that represents the Data Migration Service. This method returns a list of service resources in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list200_response import ServicesList200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get services in resource group
        api_response = api_instance.services_list_by_resource_group_1(subscription_id, group_name, api_version)
        print("The response of GETApi->services_list_by_resource_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->services_list_by_resource_group_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesList200Response**](ServicesList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got services |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list_skus_1**
> ServicesListSkus200Response services_list_skus_1(subscription_id, group_name, service_name, api_version)

Get compatible SKUs

The services resource is the top-level resource that represents the Data Migration Service. The skus action returns the list of SKUs that a service resource can be updated to.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_list_skus200_response import ServicesListSkus200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get compatible SKUs
        api_response = api_instance.services_list_skus_1(subscription_id, group_name, service_name, api_version)
        print("The response of GETApi->services_list_skus_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->services_list_skus_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 

### Return type

[**ServicesListSkus200Response**](ServicesListSkus200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got SKUs |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_get_1**
> TasksGet200Response tasks_get_1(subscription_id, group_name, service_name, project_name, task_name, api_version, expand=expand)

Get task information

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The GET method retrieves information about a task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tasks_get200_response import TasksGet200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    expand = 'expand_example' # str | Expand the response (optional)

    try:
        # Get task information
        api_response = api_instance.tasks_get_1(subscription_id, group_name, service_name, project_name, task_name, api_version, expand=expand)
        print("The response of GETApi->tasks_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->tasks_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **task_name** | **str**| Name of the Task | 
 **api_version** | **str**| Version of the API | 
 **expand** | **str**| Expand the response | [optional] 

### Return type

[**TasksGet200Response**](TasksGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A task resource |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_list_1**
> TasksList200Response tasks_list_1(subscription_id, group_name, service_name, project_name, api_version, task_type=task_type)

Get tasks in a service

The services resource is the top-level resource that represents the Data Migration Service. This method returns a list of tasks owned by a service resource. Some tasks may have a status of Unknown, which indicates that an error occurred while querying the status of that task.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tasks_list200_response import TasksList200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    task_type = 'task_type_example' # str | Filter tasks by task type (optional)

    try:
        # Get tasks in a service
        api_response = api_instance.tasks_list_1(subscription_id, group_name, service_name, project_name, api_version, task_type=task_type)
        print("The response of GETApi->tasks_list_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->tasks_list_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **task_type** | **str**| Filter tasks by task type | [optional] 

### Return type

[**TasksList200Response**](TasksList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Got tasks |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usages_list_0**
> UsagesList200Response usages_list_0(subscription_id, location, api_version)

Get resource quotas and usage information

This method returns region-specific quotas and resource usage information for the Data Migration Service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usages_list200_response import UsagesList200Response
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    location = 'location_example' # str | The Azure region of the operation
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get resource quotas and usage information
        api_response = api_instance.usages_list_0(subscription_id, location, api_version)
        print("The response of GETApi->usages_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->usages_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **location** | **str**| The Azure region of the operation | 
 **api_version** | **str**| Version of the API | 

### Return type

[**UsagesList200Response**](UsagesList200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quotas returned |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

