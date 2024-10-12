# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assessed_machines_get**](DefaultApi.md#assessed_machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName} | Get an assessed machine.
[**assessed_machines_list_by_assessment**](DefaultApi.md#assessed_machines_list_by_assessment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines | Get assessed machines for assessment.
[**assessments_create**](DefaultApi.md#assessments_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName} | Create or Update assessment.
[**assessments_delete**](DefaultApi.md#assessments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName} | Deletes an assessment from the project.
[**assessments_get**](DefaultApi.md#assessments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName} | Get an assessment.
[**assessments_get_report_download_url**](DefaultApi.md#assessments_get_report_download_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments/{assessmentName}/downloadUrl | Get download URL for the assessment report.
[**assessments_list_by_group**](DefaultApi.md#assessments_list_by_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/assessments | Get all assessments created for the specified group.
[**assessments_list_by_project**](DefaultApi.md#assessments_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessments | Get all assessments created in the project.
[**groups_create**](DefaultApi.md#groups_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName} | Create a new group with specified settings.
[**groups_delete**](DefaultApi.md#groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName} | Delete the group
[**groups_get**](DefaultApi.md#groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName} | Get a specific group.
[**groups_list_by_project**](DefaultApi.md#groups_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups | Get all groups
[**groups_update_machines**](DefaultApi.md#groups_update_machines) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/updateMachines | Update machines in group.
[**hyper_v_collectors_create**](DefaultApi.md#hyper_v_collectors_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName} | Create or Update Hyper-V collector.
[**hyper_v_collectors_delete**](DefaultApi.md#hyper_v_collectors_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName} | Deletes Hyper-V collector from the project.
[**hyper_v_collectors_get**](DefaultApi.md#hyper_v_collectors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors/{hyperVCollectorName} | Get a Hyper-V collector.
[**hyper_v_collectors_list_by_project**](DefaultApi.md#hyper_v_collectors_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/hypervcollectors | Get a list of Hyper-V collector.
[**machines_get**](DefaultApi.md#machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName} | Get a specific machine.
[**machines_list_by_project**](DefaultApi.md#machines_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines | Get all machines in the project
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.Migrate/operations | Get list of operations supported in the API.
[**project_assessment_options**](DefaultApi.md#project_assessment_options) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessmentOptions/{assessmentOptionsName} | Get all available options for the properties of an assessment on a project.
[**project_assessment_options_list**](DefaultApi.md#project_assessment_options_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/assessmentOptions | Gets list of all available options for the properties of an assessment on a project.
[**projects_create**](DefaultApi.md#projects_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName} | Create or update project.
[**projects_delete**](DefaultApi.md#projects_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName} | Delete the project
[**projects_get**](DefaultApi.md#projects_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName} | Get the specified project.
[**projects_list**](DefaultApi.md#projects_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects | Get all projects.
[**projects_list_by_subscription**](DefaultApi.md#projects_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Migrate/assessmentProjects | Get all projects.
[**projects_update**](DefaultApi.md#projects_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName} | Update project.
[**v_mware_collectors_create**](DefaultApi.md#v_mware_collectors_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName} | Create or Update VMware collector.
[**v_mware_collectors_delete**](DefaultApi.md#v_mware_collectors_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName} | Deletes VMware collector from the project.
[**v_mware_collectors_get**](DefaultApi.md#v_mware_collectors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName} | Get a VMware collector.
[**v_mware_collectors_list_by_project**](DefaultApi.md#v_mware_collectors_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors | Get a list of VMware collector.


# **assessed_machines_get**
> AssessedMachine assessed_machines_get(subscription_id, resource_group_name, project_name, group_name, assessment_name, assessed_machine_name, api_version, accept_language=accept_language)

Get an assessed machine.

Get an assessed machine with its size & cost estimate that was evaluated in the specified assessment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessed_machine import AssessedMachine
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    assessment_name = 'assessment_name_example' # str | Unique name of an assessment within a project.
    assessed_machine_name = 'assessed_machine_name_example' # str | Unique name of an assessed machine evaluated as part of an assessment.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get an assessed machine.
        api_response = api_instance.assessed_machines_get(subscription_id, resource_group_name, project_name, group_name, assessment_name, assessed_machine_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessed_machines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessed_machines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **assessment_name** | **str**| Unique name of an assessment within a project. | 
 **assessed_machine_name** | **str**| Unique name of an assessed machine evaluated as part of an assessment. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**AssessedMachine**](AssessedMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns a specific assessed machine. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessed_machines_list_by_assessment**
> AssessedMachineResultList assessed_machines_list_by_assessment(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)

Get assessed machines for assessment.

Get list of machines that assessed as part of the specified assessment. Returns a json array of objects of type 'assessedMachine' as specified in the Models section.  Whenever an assessment is created or updated, it goes under computation. During this phase, the 'status' field of Assessment object reports 'Computing'. During the period when the assessment is under computation, the list of assessed machines is empty and no assessed machines are returned by this call. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessed_machine_result_list import AssessedMachineResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    assessment_name = 'assessment_name_example' # str | Unique name of an assessment within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get assessed machines for assessment.
        api_response = api_instance.assessed_machines_list_by_assessment(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessed_machines_list_by_assessment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessed_machines_list_by_assessment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **assessment_name** | **str**| Unique name of an assessment within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**AssessedMachineResultList**](AssessedMachineResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of machines with their assessment data in the assessment. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_create**
> Assessment assessments_create(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language, assessment=assessment)

Create or Update assessment.

Create a new assessment with the given name and the specified settings. Since name of an assessment in a project is a unique identifier, if an assessment with the name provided already exists, then the existing assessment is updated.  Any PUT operation, resulting in either create or update on an assessment, will cause the assessment to go in a \"InProgress\" state. This will be indicated by the field 'computationState' on the Assessment object. During this time no other PUT operation will be allowed on that assessment object, nor will a Delete operation. Once the computation for the assessment is complete, the field 'computationState' will be updated to 'Ready', and then other PUT or DELETE operations can happen on the assessment.  When assessment is under computation, any PUT will lead to a 400 - Bad Request error. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessment import Assessment
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    assessment_name = 'assessment_name_example' # str | Unique name of an assessment within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    assessment = openapi_client.Assessment() # Assessment | New or Updated Assessment object. (optional)

    try:
        # Create or Update assessment.
        api_response = api_instance.assessments_create(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language, assessment=assessment)
        print("The response of DefaultApi->assessments_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessments_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **assessment_name** | **str**| Unique name of an assessment within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **assessment** | [**Assessment**](Assessment.md)| New or Updated Assessment object. | [optional] 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing assessment updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**201** | Created. New assessment was created. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_delete**
> assessments_delete(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)

Deletes an assessment from the project.

Delete an assessment from the project. The machines remain in the assessment. Deleting a non-existent assessment results in a no-operation.  When an assessment is under computation, as indicated by the 'computationState' field, it cannot be deleted. Any such attempt will return a 400 - Bad Request. 

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    assessment_name = 'assessment_name_example' # str | Unique name of an assessment within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Deletes an assessment from the project.
        api_instance.assessments_delete(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling DefaultApi->assessments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **assessment_name** | **str**| Unique name of an assessment within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

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
**200** | OK. Deleted the assessment. |  * x-ms-request-id - Service generated Request ID. <br>  |
**204** | No content. No assessment with specified name was found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_get**
> Assessment assessments_get(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)

Get an assessment.

Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessment import Assessment
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    assessment_name = 'assessment_name_example' # str | Unique name of an assessment within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get an assessment.
        api_response = api_instance.assessments_get(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **assessment_name** | **str**| Unique name of an assessment within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns Assessment object. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_get_report_download_url**
> DownloadUrl assessments_get_report_download_url(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)

Get download URL for the assessment report.

Get the URL for downloading the assessment in a report format.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.download_url import DownloadUrl
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    assessment_name = 'assessment_name_example' # str | Unique name of an assessment within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get download URL for the assessment report.
        api_response = api_instance.assessments_get_report_download_url(subscription_id, resource_group_name, project_name, group_name, assessment_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessments_get_report_download_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessments_get_report_download_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **assessment_name** | **str**| Unique name of an assessment within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**DownloadUrl**](DownloadUrl.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_list_by_group**
> AssessmentResultList assessments_list_by_group(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language)

Get all assessments created for the specified group.

Get all assessments created for the specified group.  Returns a json array of objects of type 'assessment' as specified in Models section. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessment_result_list import AssessmentResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all assessments created for the specified group.
        api_response = api_instance.assessments_list_by_group(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessments_list_by_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessments_list_by_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**AssessmentResultList**](AssessmentResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of Assessment objects. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **assessments_list_by_project**
> AssessmentResultList assessments_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get all assessments created in the project.

Get all assessments created in the project.  Returns a json array of objects of type 'assessment' as specified in Models section. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessment_result_list import AssessmentResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all assessments created in the project.
        api_response = api_instance.assessments_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessments_list_by_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessments_list_by_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**AssessmentResultList**](AssessmentResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of Assessment objects. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groups_create**
> Group groups_create(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language, group=group)

Create a new group with specified settings.

Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique.  This operation is Idempotent. 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.group import Group
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    group = openapi_client.Group() # Group | New or Updated Group object. (optional)

    try:
        # Create a new group with specified settings.
        api_response = api_instance.groups_create(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language, group=group)
        print("The response of DefaultApi->groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **group** | [**Group**](Group.md)| New or Updated Group object. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing group updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**201** | Created. New group was created. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groups_delete**
> groups_delete(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language)

Delete the group

Delete the group from the project. The machines remain in the project. Deleting a non-existent group results in a no-operation.  A group is an aggregation mechanism for machines in a project. Therefore, deleting group does not delete machines in it. 

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Delete the group
        api_instance.groups_delete(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling DefaultApi->groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

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
**200** | OK. Deleted the group. |  * x-ms-request-id - Service generated Request ID. <br>  |
**204** | No content. No group with specified name was found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groups_get**
> Group groups_get(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language)

Get a specific group.

Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.group import Group
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get a specific group.
        api_response = api_instance.groups_get(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the group with the specified name. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groups_list_by_project**
> GroupResultList groups_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get all groups

Get all groups created in the project. Returns a json array of objects of type 'group' as specified in the Models section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.group_result_list import GroupResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all groups
        api_response = api_instance.groups_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->groups_list_by_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->groups_list_by_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**GroupResultList**](GroupResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of groups. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **groups_update_machines**
> Group groups_update_machines(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language, group_update_properties=group_update_properties)

Update machines in group.

Update machines in group by adding or removing machines.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.group import Group
from openapi_client.models.update_group_body import UpdateGroupBody
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    group_name = 'group_name_example' # str | Unique name of a group within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    group_update_properties = openapi_client.UpdateGroupBody() # UpdateGroupBody | Machines list to be added or removed from group. (optional)

    try:
        # Update machines in group.
        api_response = api_instance.groups_update_machines(subscription_id, resource_group_name, project_name, group_name, api_version, accept_language=accept_language, group_update_properties=group_update_properties)
        print("The response of DefaultApi->groups_update_machines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->groups_update_machines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **group_name** | **str**| Unique name of a group within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **group_update_properties** | [**UpdateGroupBody**](UpdateGroupBody.md)| Machines list to be added or removed from group. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing group updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hyper_v_collectors_create**
> HyperVCollector hyper_v_collectors_create(subscription_id, resource_group_name, project_name, hyper_v_collector_name, api_version, accept_language=accept_language, collector_body=collector_body)

Create or Update Hyper-V collector.

Create or Update Hyper-V collector

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hyper_v_collector import HyperVCollector
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    hyper_v_collector_name = 'hyper_v_collector_name_example' # str | Unique name of a Hyper-V collector within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    collector_body = openapi_client.HyperVCollector() # HyperVCollector | New or Updated Hyper-V collector. (optional)

    try:
        # Create or Update Hyper-V collector.
        api_response = api_instance.hyper_v_collectors_create(subscription_id, resource_group_name, project_name, hyper_v_collector_name, api_version, accept_language=accept_language, collector_body=collector_body)
        print("The response of DefaultApi->hyper_v_collectors_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->hyper_v_collectors_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **hyper_v_collector_name** | **str**| Unique name of a Hyper-V collector within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **collector_body** | [**HyperVCollector**](HyperVCollector.md)| New or Updated Hyper-V collector. | [optional] 

### Return type

[**HyperVCollector**](HyperVCollector.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing Hyper-V collector. |  * x-ms-request-id - Service generated Request ID. <br>  |
**201** | Created. New Hyper-V collector was created. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hyper_v_collectors_delete**
> hyper_v_collectors_delete(subscription_id, resource_group_name, project_name, hyper_v_collector_name, api_version, accept_language=accept_language)

Deletes Hyper-V collector from the project.

Delete a Hyper-V collector from the project.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    hyper_v_collector_name = 'hyper_v_collector_name_example' # str | Unique name of a Hyper-V collector within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Deletes Hyper-V collector from the project.
        api_instance.hyper_v_collectors_delete(subscription_id, resource_group_name, project_name, hyper_v_collector_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling DefaultApi->hyper_v_collectors_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **hyper_v_collector_name** | **str**| Unique name of a Hyper-V collector within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

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
**200** | OK. Deleted the Hyper-V collector. |  * x-ms-request-id - Service generated Request ID. <br>  |
**204** | No content. No Hyper-V collector with specified name was found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hyper_v_collectors_get**
> HyperVCollector hyper_v_collectors_get(subscription_id, resource_group_name, project_name, hyper_v_collector_name, api_version, accept_language=accept_language)

Get a Hyper-V collector.

Get a Hyper-V collector.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hyper_v_collector import HyperVCollector
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    hyper_v_collector_name = 'hyper_v_collector_name_example' # str | Unique name of a Hyper-V collector within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get a Hyper-V collector.
        api_response = api_instance.hyper_v_collectors_get(subscription_id, resource_group_name, project_name, hyper_v_collector_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->hyper_v_collectors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->hyper_v_collectors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **hyper_v_collector_name** | **str**| Unique name of a Hyper-V collector within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**HyperVCollector**](HyperVCollector.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the specific Hyper-V collector. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hyper_v_collectors_list_by_project**
> HyperVCollectorList hyper_v_collectors_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get a list of Hyper-V collector.

Get a list of Hyper-V collector.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hyper_v_collector_list import HyperVCollectorList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get a list of Hyper-V collector.
        api_response = api_instance.hyper_v_collectors_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->hyper_v_collectors_list_by_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->hyper_v_collectors_list_by_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**HyperVCollectorList**](HyperVCollectorList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of Hyper-V collectors. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machines_get**
> Machine machines_get(subscription_id, resource_group_name, project_name, machine_name, api_version, accept_language=accept_language)

Get a specific machine.

Get the machine with the specified name. Returns a json object of type 'machine' defined in Models section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine import Machine
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    machine_name = 'machine_name_example' # str | Unique name of a machine in private datacenter.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get a specific machine.
        api_response = api_instance.machines_get(subscription_id, resource_group_name, project_name, machine_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->machines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->machines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **machine_name** | **str**| Unique name of a machine in private datacenter. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**Machine**](Machine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the machine with the specified name. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machines_list_by_project**
> MachineResultList machines_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get all machines in the project

Get data of all the machines available in the project. Returns a json array of objects of type 'machine' defined in Models section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_result_list import MachineResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all machines in the project
        api_response = api_instance.machines_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->machines_list_by_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->machines_list_by_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**MachineResultList**](MachineResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of all machine objects. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationResultList operations_list()

Get list of operations supported in the API.

Get a list of REST API supported by Microsoft.Migrate provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_result_list import OperationResultList
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
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get list of operations supported in the API.
        api_response = api_instance.operations_list()
        print("The response of DefaultApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**OperationResultList**](OperationResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of operations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_assessment_options**
> AssessmentOptions project_assessment_options(subscription_id, resource_group_name, project_name, assessment_options_name, api_version, accept_language=accept_language)

Get all available options for the properties of an assessment on a project.

Get all available options for the properties of an assessment on a project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessment_options import AssessmentOptions
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    assessment_options_name = 'assessment_options_name_example' # str | Name of the assessment options. The only name accepted in default.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all available options for the properties of an assessment on a project.
        api_response = api_instance.project_assessment_options(subscription_id, resource_group_name, project_name, assessment_options_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->project_assessment_options:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_assessment_options: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **assessment_options_name** | **str**| Name of the assessment options. The only name accepted in default. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**AssessmentOptions**](AssessmentOptions.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project_assessment_options_list**
> AssessmentOptionsResultList project_assessment_options_list(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Gets list of all available options for the properties of an assessment on a project.

Gets list of all available options for the properties of an assessment on a project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.assessment_options_result_list import AssessmentOptionsResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Gets list of all available options for the properties of an assessment on a project.
        api_response = api_instance.project_assessment_options_list(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->project_assessment_options_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->project_assessment_options_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**AssessmentOptionsResultList**](AssessmentOptionsResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_create**
> Project projects_create(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language, project=project)

Create or update project.

Create a project with specified name. If a project already exists, update it.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project import Project
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    project = openapi_client.Project() # Project | New or Updated project object. (optional)

    try:
        # Create or update project.
        api_response = api_instance.projects_create(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language, project=project)
        print("The response of DefaultApi->projects_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **project** | [**Project**](Project.md)| New or Updated project object. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing project updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**201** | Created. New project was created. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_delete**
> projects_delete(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Delete the project

Delete the project. Deleting non-existent project is a no-operation.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Delete the project
        api_instance.projects_delete(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

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
**200** | OK. Deleted the group. |  * x-ms-request-id - Service generated Request ID. <br>  |
**204** | No content. No project with specified name was found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_get**
> Project projects_get(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get the specified project.

Get the project with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project import Project
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get the specified project.
        api_response = api_instance.projects_get(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_list**
> ProjectResultList projects_list(subscription_id, resource_group_name, api_version, accept_language=accept_language)

Get all projects.

Get all the projects in the resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_result_list import ProjectResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all projects.
        api_response = api_instance.projects_list(subscription_id, resource_group_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->projects_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**ProjectResultList**](ProjectResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_list_by_subscription**
> ProjectResultList projects_list_by_subscription(subscription_id, api_version, accept_language=accept_language)

Get all projects.

Get all the projects in the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_result_list import ProjectResultList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get all projects.
        api_response = api_instance.projects_list_by_subscription(subscription_id, api_version, accept_language=accept_language)
        print("The response of DefaultApi->projects_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**ProjectResultList**](ProjectResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projects_update**
> Project projects_update(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language, project=project)

Update project.

Update a project with specified name. Supports partial updates, for example only tags can be provided.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project import Project
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    project = openapi_client.Project() # Project | Updated project object. (optional)

    try:
        # Update project.
        api_response = api_instance.projects_update(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language, project=project)
        print("The response of DefaultApi->projects_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **project** | [**Project**](Project.md)| Updated project object. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing project updated. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v_mware_collectors_create**
> VMwareCollector v_mware_collectors_create(subscription_id, resource_group_name, project_name, vm_ware_collector_name, api_version, accept_language=accept_language, collector_body=collector_body)

Create or Update VMware collector.

Create or Update VMware collector

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.v_mware_collector import VMwareCollector
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    vm_ware_collector_name = 'vm_ware_collector_name_example' # str | Unique name of a VMware collector within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)
    collector_body = openapi_client.VMwareCollector() # VMwareCollector | New or Updated VMware collector. (optional)

    try:
        # Create or Update VMware collector.
        api_response = api_instance.v_mware_collectors_create(subscription_id, resource_group_name, project_name, vm_ware_collector_name, api_version, accept_language=accept_language, collector_body=collector_body)
        print("The response of DefaultApi->v_mware_collectors_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->v_mware_collectors_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **vm_ware_collector_name** | **str**| Unique name of a VMware collector within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 
 **collector_body** | [**VMwareCollector**](VMwareCollector.md)| New or Updated VMware collector. | [optional] 

### Return type

[**VMwareCollector**](VMwareCollector.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Existing VMware collector. |  * x-ms-request-id - Service generated Request ID. <br>  |
**201** | Created. New VMware collector was created. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v_mware_collectors_delete**
> v_mware_collectors_delete(subscription_id, resource_group_name, project_name, vm_ware_collector_name, api_version, accept_language=accept_language)

Deletes VMware collector from the project.

Delete a VMware collector from the project.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    vm_ware_collector_name = 'vm_ware_collector_name_example' # str | Unique name of a VMware collector within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Deletes VMware collector from the project.
        api_instance.v_mware_collectors_delete(subscription_id, resource_group_name, project_name, vm_ware_collector_name, api_version, accept_language=accept_language)
    except Exception as e:
        print("Exception when calling DefaultApi->v_mware_collectors_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **vm_ware_collector_name** | **str**| Unique name of a VMware collector within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

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
**200** | OK. Deleted the VMware collector. |  * x-ms-request-id - Service generated Request ID. <br>  |
**204** | No content. No VMware collector with specified name was found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v_mware_collectors_get**
> VMwareCollector v_mware_collectors_get(subscription_id, resource_group_name, project_name, vm_ware_collector_name, api_version, accept_language=accept_language)

Get a VMware collector.

Get a VMware collector.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.v_mware_collector import VMwareCollector
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    vm_ware_collector_name = 'vm_ware_collector_name_example' # str | Unique name of a VMware collector within a project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get a VMware collector.
        api_response = api_instance.v_mware_collectors_get(subscription_id, resource_group_name, project_name, vm_ware_collector_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->v_mware_collectors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->v_mware_collectors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **vm_ware_collector_name** | **str**| Unique name of a VMware collector within a project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**VMwareCollector**](VMwareCollector.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns the specific VMware collector. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v_mware_collectors_list_by_project**
> VMwareCollectorList v_mware_collectors_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get a list of VMware collector.

Get a list of VMware collector.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.v_mware_collector_list import VMwareCollectorList
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    resource_group_name = 'resource_group_name_example' # str | Name of the Azure Resource Group that project is part of.
    project_name = 'project_name_example' # str | Name of the Azure Migrate project.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get a list of VMware collector.
        api_response = api_instance.v_mware_collectors_list_by_project(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->v_mware_collectors_list_by_project:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->v_mware_collectors_list_by_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **resource_group_name** | **str**| Name of the Azure Resource Group that project is part of. | 
 **project_name** | **str**| Name of the Azure Migrate project. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **accept_language** | **str**| Standard request header. Used by service to respond to client in appropriate language. | [optional] 

### Return type

[**VMwareCollectorList**](VMwareCollectorList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns list of VMware collectors. |  * x-ms-request-id - Service generated Request ID. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

