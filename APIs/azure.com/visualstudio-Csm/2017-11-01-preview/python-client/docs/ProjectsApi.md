# openapi_client.ProjectsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**project_list_by_account_resource**](ProjectsApi.md#project_list_by_account_resource) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project | Projects_ListByAccountResource
[**projects_create**](ProjectsApi.md#projects_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName} | Projects_Create
[**projects_get**](ProjectsApi.md#projects_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName} | Projects_Get
[**projects_update**](ProjectsApi.md#projects_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.visualstudio/account/{rootResourceName}/project/{resourceName} | Projects_Update


# **project_list_by_account_resource**
> ProjectResourceListResult project_list_by_account_resource(resource_group_name, subscription_id, api_version, root_resource_name)

Projects_ListByAccountResource

Gets all Visual Studio Team Services project resources created in the specified Team Services account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_resource_list_result import ProjectResourceListResult
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
    api_instance = openapi_client.ProjectsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    root_resource_name = 'root_resource_name_example' # str | Name of the Team Services account.

    try:
        # Projects_ListByAccountResource
        api_response = api_instance.project_list_by_account_resource(resource_group_name, subscription_id, api_version, root_resource_name)
        print("The response of ProjectsApi->project_list_by_account_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->project_list_by_account_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **root_resource_name** | **str**| Name of the Team Services account. | 

### Return type

[**ProjectResourceListResult**](ProjectResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the details of the Visual Studio Team Services project resources created in the specified Team Services account. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_create**
> ProjectResource projects_create(resource_group_name, subscription_id, api_version, root_resource_name, resource_name, body, validating=validating)

Projects_Create

Creates a Team Services project in the collection with the specified name. 'VersionControlOption' and 'ProcessTemplateId' must be specified in the resource properties. Valid values for VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId: 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC, 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process templates).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_resource import ProjectResource
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
    api_instance = openapi_client.ProjectsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    root_resource_name = 'root_resource_name_example' # str | Name of the Team Services account.
    resource_name = 'resource_name_example' # str | Name of the Team Services project.
    body = openapi_client.ProjectResource() # ProjectResource | The request data.
    validating = 'validating_example' # str | This parameter is ignored and should be set to an empty string. (optional)

    try:
        # Projects_Create
        api_response = api_instance.projects_create(resource_group_name, subscription_id, api_version, root_resource_name, resource_name, body, validating=validating)
        print("The response of ProjectsApi->projects_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **root_resource_name** | **str**| Name of the Team Services account. | 
 **resource_name** | **str**| Name of the Team Services project. | 
 **body** | [**ProjectResource**](ProjectResource.md)| The request data. | 
 **validating** | **str**| This parameter is ignored and should be set to an empty string. | [optional] 

### Return type

[**ProjectResource**](ProjectResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the details of the created or updated team project resource. |  -  |
**202** | The operation succeeded. A job to create the team project resource has been queued. The URI to monitor the status of the job is provided in the &#39;location&#39; header. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_get**
> ProjectResource projects_get(resource_group_name, subscription_id, api_version, root_resource_name, resource_name)

Projects_Get

Gets the details of a Team Services project resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_resource import ProjectResource
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
    api_instance = openapi_client.ProjectsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    root_resource_name = 'root_resource_name_example' # str | Name of the Team Services account.
    resource_name = 'resource_name_example' # str | Name of the Team Services project.

    try:
        # Projects_Get
        api_response = api_instance.projects_get(resource_group_name, subscription_id, api_version, root_resource_name, resource_name)
        print("The response of ProjectsApi->projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **root_resource_name** | **str**| Name of the Team Services account. | 
 **resource_name** | **str**| Name of the Team Services project. | 

### Return type

[**ProjectResource**](ProjectResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the details of the updated team project resource. |  -  |
**404** | The project or Azure subscription was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_update**
> ProjectResource projects_update(resource_group_name, subscription_id, api_version, root_resource_name, resource_name, body)

Projects_Update

Updates the tags of the specified Team Services project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_resource import ProjectResource
from openapi_client.models.project_resource_update_parameters import ProjectResourceUpdateParameters
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
    api_instance = openapi_client.ProjectsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group within the Azure subscription.
    subscription_id = 'subscription_id_example' # str | The Azure subscription identifier.
    api_version = 'api_version_example' # str | API Version
    root_resource_name = 'root_resource_name_example' # str | Name of the Team Services account.
    resource_name = 'resource_name_example' # str | Name of the Team Services project.
    body = openapi_client.ProjectResourceUpdateParameters() # ProjectResourceUpdateParameters | The request data.

    try:
        # Projects_Update
        api_response = api_instance.projects_update(resource_group_name, subscription_id, api_version, root_resource_name, resource_name, body)
        print("The response of ProjectsApi->projects_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->projects_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group within the Azure subscription. | 
 **subscription_id** | **str**| The Azure subscription identifier. | 
 **api_version** | **str**| API Version | 
 **root_resource_name** | **str**| Name of the Team Services account. | 
 **resource_name** | **str**| Name of the Team Services project. | 
 **body** | [**ProjectResourceUpdateParameters**](ProjectResourceUpdateParameters.md)| The request data. | 

### Return type

[**ProjectResource**](ProjectResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation succeeded. The response contains the details of the updated team project resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

