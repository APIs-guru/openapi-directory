# openapi_client.StandardOperationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](StandardOperationApi.md#operations_list) | **GET** /providers/Microsoft.DataMigration/operations | Get available resource provider actions (operations)
[**projects_create_or_update_0**](StandardOperationApi.md#projects_create_or_update_0) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Create or update project
[**projects_delete_0**](StandardOperationApi.md#projects_delete_0) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Delete project
[**projects_get_0**](StandardOperationApi.md#projects_get_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Get project information
[**projects_list_0**](StandardOperationApi.md#projects_list_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects | Get projects in a service
[**projects_update_0**](StandardOperationApi.md#projects_update_0) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName} | Update project
[**resource_skus_list_skus**](StandardOperationApi.md#resource_skus_list_skus) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/skus | Get supported SKUs
[**services_check_name_availability**](StandardOperationApi.md#services_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/checkNameAvailability | Check name validity and availability
[**services_create_or_update_0**](StandardOperationApi.md#services_create_or_update_0) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Create or update DMS Instance
[**services_delete_0**](StandardOperationApi.md#services_delete_0) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Delete DMS Service Instance
[**services_get_0**](StandardOperationApi.md#services_get_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Get DMS Service Instance
[**services_list_0**](StandardOperationApi.md#services_list_0) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/services | Get services in subscription
[**services_list_by_resource_group_0**](StandardOperationApi.md#services_list_by_resource_group_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services | Get services in resource group
[**services_list_skus_0**](StandardOperationApi.md#services_list_skus_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/skus | Get compatible SKUs
[**services_update_0**](StandardOperationApi.md#services_update_0) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName} | Create or update DMS Service Instance
[**tasks_create_or_update_0**](StandardOperationApi.md#tasks_create_or_update_0) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Create or update task
[**tasks_delete_0**](StandardOperationApi.md#tasks_delete_0) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Delete task
[**tasks_get_0**](StandardOperationApi.md#tasks_get_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Get task information
[**tasks_list_0**](StandardOperationApi.md#tasks_list_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks | Get tasks in a service
[**tasks_update_0**](StandardOperationApi.md#tasks_update_0) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName} | Create or update task
[**usages_list**](StandardOperationApi.md#usages_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataMigration/locations/{location}/usages | Get resource quotas and usage information


# **operations_list**
> OperationsList200Response operations_list(api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get available resource provider actions (operations)
        api_response = api_instance.operations_list(api_version)
        print("The response of StandardOperationApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->operations_list: %s\n" % e)
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

# **projects_create_or_update_0**
> ProjectsGet200Response projects_create_or_update_0(subscription_id, group_name, service_name, project_name, api_version, parameters)

Create or update project

The project resource is a nested resource representing a stored migration project. The PUT method creates a new project or updates an existing one.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ProjectsGet200Response() # ProjectsGet200Response | Information about the project

    try:
        # Create or update project
        api_response = api_instance.projects_create_or_update_0(subscription_id, group_name, service_name, project_name, api_version, parameters)
        print("The response of StandardOperationApi->projects_create_or_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->projects_create_or_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ProjectsGet200Response**](ProjectsGet200Response.md)| Information about the project | 

### Return type

[**ProjectsGet200Response**](ProjectsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project updated |  -  |
**201** | Project created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_delete_0**
> projects_delete_0(subscription_id, group_name, service_name, project_name, api_version, delete_running_tasks=delete_running_tasks)

Delete project

The project resource is a nested resource representing a stored migration project. The DELETE method deletes a project.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete project
        api_instance.projects_delete_0(subscription_id, group_name, service_name, project_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling StandardOperationApi->projects_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Project resource deleted |  -  |
**204** | Not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_get_0**
> ProjectsGet200Response projects_get_0(subscription_id, group_name, service_name, project_name, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get project information
        api_response = api_instance.projects_get_0(subscription_id, group_name, service_name, project_name, api_version)
        print("The response of StandardOperationApi->projects_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->projects_get_0: %s\n" % e)
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

# **projects_list_0**
> ProjectsList200Response projects_list_0(subscription_id, group_name, service_name, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get projects in a service
        api_response = api_instance.projects_list_0(subscription_id, group_name, service_name, api_version)
        print("The response of StandardOperationApi->projects_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->projects_list_0: %s\n" % e)
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

# **projects_update_0**
> ProjectsGet200Response projects_update_0(subscription_id, group_name, service_name, project_name, api_version, parameters)

Update project

The project resource is a nested resource representing a stored migration project. The PATCH method updates an existing project.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ProjectsGet200Response() # ProjectsGet200Response | Information about the project

    try:
        # Update project
        api_response = api_instance.projects_update_0(subscription_id, group_name, service_name, project_name, api_version, parameters)
        print("The response of StandardOperationApi->projects_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->projects_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **project_name** | **str**| Name of the project | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ProjectsGet200Response**](ProjectsGet200Response.md)| Information about the project | 

### Return type

[**ProjectsGet200Response**](ProjectsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project resource updated |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resource_skus_list_skus**
> ResourceSkusListSkus200Response resource_skus_list_skus(subscription_id, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get supported SKUs
        api_response = api_instance.resource_skus_list_skus(subscription_id, api_version)
        print("The response of StandardOperationApi->resource_skus_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->resource_skus_list_skus: %s\n" % e)
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

# **services_check_name_availability**
> ServicesCheckNameAvailability200Response services_check_name_availability(subscription_id, api_version, location, parameters)

Check name validity and availability

This method checks whether a proposed top-level resource name is valid and available.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.services_check_name_availability200_response import ServicesCheckNameAvailability200Response
from openapi_client.models.services_check_name_availability_request import ServicesCheckNameAvailabilityRequest
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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API
    location = 'location_example' # str | The Azure region of the operation
    parameters = openapi_client.ServicesCheckNameAvailabilityRequest() # ServicesCheckNameAvailabilityRequest | Requested name to validate

    try:
        # Check name validity and availability
        api_response = api_instance.services_check_name_availability(subscription_id, api_version, location, parameters)
        print("The response of StandardOperationApi->services_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **api_version** | **str**| Version of the API | 
 **location** | **str**| The Azure region of the operation | 
 **parameters** | [**ServicesCheckNameAvailabilityRequest**](ServicesCheckNameAvailabilityRequest.md)| Requested name to validate | 

### Return type

[**ServicesCheckNameAvailability200Response**](ServicesCheckNameAvailability200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Name checked |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_create_or_update_0**
> ServicesGet200Response services_create_or_update_0(subscription_id, group_name, service_name, api_version, parameters)

Create or update DMS Instance

The services resource is the top-level resource that represents the Data Migration Service. The PUT method creates a new service or updates an existing one. When a service is updated, existing child resources (i.e. tasks) are unaffected. Services currently support a single kind, \"vm\", which refers to a VM-based service, although other kinds may be added in the future. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request (\"ServiceIsBusy\"). The provider will reply when successful with 200 OK or 201 Created. Long-running operations use the provisioningState property.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ServicesGet200Response() # ServicesGet200Response | Information about the service

    try:
        # Create or update DMS Instance
        api_response = api_instance.services_create_or_update_0(subscription_id, group_name, service_name, api_version, parameters)
        print("The response of StandardOperationApi->services_create_or_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_create_or_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ServicesGet200Response**](ServicesGet200Response.md)| Information about the service | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service updated |  -  |
**201** | Service created (use provisioningState) |  -  |
**202** | Update accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_delete_0**
> services_delete_0(subscription_id, group_name, service_name, api_version, delete_running_tasks=delete_running_tasks)

Delete DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The DELETE method deletes a service. Any running tasks will be canceled.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete DMS Service Instance
        api_instance.services_delete_0(subscription_id, group_name, service_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Service resource deleted |  -  |
**202** | Deletion accepted |  -  |
**204** | Service not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get_0**
> ServicesGet200Response services_get_0(subscription_id, group_name, service_name, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get DMS Service Instance
        api_response = api_instance.services_get_0(subscription_id, group_name, service_name, api_version)
        print("The response of StandardOperationApi->services_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_get_0: %s\n" % e)
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

# **services_list_0**
> ServicesList200Response services_list_0(subscription_id, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get services in subscription
        api_response = api_instance.services_list_0(subscription_id, api_version)
        print("The response of StandardOperationApi->services_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_list_0: %s\n" % e)
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

# **services_list_by_resource_group_0**
> ServicesList200Response services_list_by_resource_group_0(subscription_id, group_name, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get services in resource group
        api_response = api_instance.services_list_by_resource_group_0(subscription_id, group_name, api_version)
        print("The response of StandardOperationApi->services_list_by_resource_group_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_list_by_resource_group_0: %s\n" % e)
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

# **services_list_skus_0**
> ServicesListSkus200Response services_list_skus_0(subscription_id, group_name, service_name, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get compatible SKUs
        api_response = api_instance.services_list_skus_0(subscription_id, group_name, service_name, api_version)
        print("The response of StandardOperationApi->services_list_skus_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_list_skus_0: %s\n" % e)
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

# **services_update_0**
> ServicesGet200Response services_update_0(subscription_id, group_name, service_name, api_version, parameters)

Create or update DMS Service Instance

The services resource is the top-level resource that represents the Data Migration Service. The PATCH method updates an existing service. This method can change the kind, SKU, and network of the service, but if tasks are currently running (i.e. the service is busy), this will fail with 400 Bad Request (\"ServiceIsBusy\").

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.ServicesGet200Response() # ServicesGet200Response | Information about the service

    try:
        # Create or update DMS Service Instance
        api_response = api_instance.services_update_0(subscription_id, group_name, service_name, api_version, parameters)
        print("The response of StandardOperationApi->services_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->services_update_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of the subscription | 
 **group_name** | **str**| Name of the resource group | 
 **service_name** | **str**| Name of the service | 
 **api_version** | **str**| Version of the API | 
 **parameters** | [**ServicesGet200Response**](ServicesGet200Response.md)| Information about the service | 

### Return type

[**ServicesGet200Response**](ServicesGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Service resource updated |  -  |
**202** | Update accepted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_create_or_update_0**
> TasksGet200Response tasks_create_or_update_0(subscription_id, group_name, service_name, project_name, task_name, api_version, parameters)

Create or update task

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PUT method creates a new task or updates an existing one, although since tasks have no mutable custom properties, there is little reason to update an exising one.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.TasksGet200Response() # TasksGet200Response | Information about the task

    try:
        # Create or update task
        api_response = api_instance.tasks_create_or_update_0(subscription_id, group_name, service_name, project_name, task_name, api_version, parameters)
        print("The response of StandardOperationApi->tasks_create_or_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->tasks_create_or_update_0: %s\n" % e)
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
 **parameters** | [**TasksGet200Response**](TasksGet200Response.md)| Information about the task | 

### Return type

[**TasksGet200Response**](TasksGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task updated |  -  |
**201** | Task created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_delete_0**
> tasks_delete_0(subscription_id, group_name, service_name, project_name, task_name, api_version, delete_running_tasks=delete_running_tasks)

Delete task

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The DELETE method deletes a task, canceling it first if it's running.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    delete_running_tasks = True # bool | Delete the resource even if it contains running tasks (optional)

    try:
        # Delete task
        api_instance.tasks_delete_0(subscription_id, group_name, service_name, project_name, task_name, api_version, delete_running_tasks=delete_running_tasks)
    except Exception as e:
        print("Exception when calling StandardOperationApi->tasks_delete_0: %s\n" % e)
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
 **delete_running_tasks** | **bool**| Delete the resource even if it contains running tasks | [optional] 

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
**200** | Task resource deleted |  -  |
**204** | Not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tasks_get_0**
> TasksGet200Response tasks_get_0(subscription_id, group_name, service_name, project_name, task_name, api_version, expand=expand)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    expand = 'expand_example' # str | Expand the response (optional)

    try:
        # Get task information
        api_response = api_instance.tasks_get_0(subscription_id, group_name, service_name, project_name, task_name, api_version, expand=expand)
        print("The response of StandardOperationApi->tasks_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->tasks_get_0: %s\n" % e)
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

# **tasks_list_0**
> TasksList200Response tasks_list_0(subscription_id, group_name, service_name, project_name, api_version, task_type=task_type)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    api_version = 'api_version_example' # str | Version of the API
    task_type = 'task_type_example' # str | Filter tasks by task type (optional)

    try:
        # Get tasks in a service
        api_response = api_instance.tasks_list_0(subscription_id, group_name, service_name, project_name, api_version, task_type=task_type)
        print("The response of StandardOperationApi->tasks_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->tasks_list_0: %s\n" % e)
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

# **tasks_update_0**
> TasksGet200Response tasks_update_0(subscription_id, group_name, service_name, project_name, task_name, api_version, parameters)

Create or update task

The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance. The PATCH method updates an existing task, but since tasks have no mutable custom properties, there is little reason to do so.

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    group_name = 'group_name_example' # str | Name of the resource group
    service_name = 'service_name_example' # str | Name of the service
    project_name = 'project_name_example' # str | Name of the project
    task_name = 'task_name_example' # str | Name of the Task
    api_version = 'api_version_example' # str | Version of the API
    parameters = openapi_client.TasksGet200Response() # TasksGet200Response | Information about the task

    try:
        # Create or update task
        api_response = api_instance.tasks_update_0(subscription_id, group_name, service_name, project_name, task_name, api_version, parameters)
        print("The response of StandardOperationApi->tasks_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->tasks_update_0: %s\n" % e)
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
 **parameters** | [**TasksGet200Response**](TasksGet200Response.md)| Information about the task | 

### Return type

[**TasksGet200Response**](TasksGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task resource updated |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usages_list**
> UsagesList200Response usages_list(subscription_id, location, api_version)

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
    api_instance = openapi_client.StandardOperationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of the subscription
    location = 'location_example' # str | The Azure region of the operation
    api_version = 'api_version_example' # str | Version of the API

    try:
        # Get resource quotas and usage information
        api_response = api_instance.usages_list(subscription_id, location, api_version)
        print("The response of StandardOperationApi->usages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StandardOperationApi->usages_list: %s\n" % e)
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

