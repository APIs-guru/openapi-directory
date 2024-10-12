# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assessed_machines_get**](DefaultApi.md#assessed_machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName} | Get an assessed machine.
[**assessed_machines_list_by_assessment**](DefaultApi.md#assessed_machines_list_by_assessment) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines | Get assessed machines for assessment.
[**assessment_options_get**](DefaultApi.md#assessment_options_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Migrate/locations/{locationName}/assessmentOptions | Get the assessment options.
[**assessments_create**](DefaultApi.md#assessments_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName} | Create or Update assessment.
[**assessments_delete**](DefaultApi.md#assessments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName} | Deletes an assessment from the project.
[**assessments_get**](DefaultApi.md#assessments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName} | Get an assessment.
[**assessments_get_report_download_url**](DefaultApi.md#assessments_get_report_download_url) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/downloadUrl | Get download URL for the assessment report.
[**assessments_list_by_group**](DefaultApi.md#assessments_list_by_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments | Get all assessments created for the specified group.
[**assessments_list_by_project**](DefaultApi.md#assessments_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/assessments | Get all assessments created in the project.
[**groups_create**](DefaultApi.md#groups_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName} | Create a new group with specified settings. If group with the name provided already exists, then the existing group is updated.
[**groups_delete**](DefaultApi.md#groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName} | Delete the group
[**groups_get**](DefaultApi.md#groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName} | Get a specific group.
[**groups_list_by_project**](DefaultApi.md#groups_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups | Get all groups
[**location_check_name_availability**](DefaultApi.md#location_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Migrate/locations/{locationName}/checkNameAvailability | 
[**machines_get**](DefaultApi.md#machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/machines/{machineName} | Get a specific machine.
[**machines_list_by_project**](DefaultApi.md#machines_list_by_project) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/machines | Get all machines in the project
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.Migrate/operations | Get list of operations supported in the API.
[**projects_create**](DefaultApi.md#projects_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName} | Create or update project.
[**projects_delete**](DefaultApi.md#projects_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName} | Delete the project
[**projects_get**](DefaultApi.md#projects_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName} | Get the specified project.
[**projects_get_keys**](DefaultApi.md#projects_get_keys) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/keys | Get shared keys for the project.
[**projects_list_by_resource_group**](DefaultApi.md#projects_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects | Get all projects.
[**projects_list_by_subscription**](DefaultApi.md#projects_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Migrate/projects | Get all projects.
[**projects_update**](DefaultApi.md#projects_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName} | Update project.


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

# **assessment_options_get**
> AssessmentOptionsResultList assessment_options_get(subscription_id, location_name, api_version, accept_language=accept_language)

Get the assessment options.

Get the available options for the properties of an assessment.

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
    location_name = 'location_name_example' # str | Azure region in which the project is created.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    accept_language = 'accept_language_example' # str | Standard request header. Used by service to respond to client in appropriate language. (optional)

    try:
        # Get the assessment options.
        api_response = api_instance.assessment_options_get(subscription_id, location_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->assessment_options_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->assessment_options_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **location_name** | **str**| Azure region in which the project is created. | 
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
**200** | OK. Returns assessment options. |  -  |
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

Create a new group with specified settings. If group with the name provided already exists, then the existing group is updated.

Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique. Labels can be applied on a group as part of creation.  If a group with the groupName specified in the URL already exists, then this call acts as an update.  This operation is Idempotent. 

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
        # Create a new group with specified settings. If group with the name provided already exists, then the existing group is updated.
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

# **location_check_name_availability**
> CheckNameAvailabilityResult location_check_name_availability(location_name, api_version, subscription_id, parameters)



Checks whether the project name is available in the specified region.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_parameters import CheckNameAvailabilityParameters
from openapi_client.models.check_name_availability_result import CheckNameAvailabilityResult
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
    location_name = 'location_name_example' # str | The desired region for the name check.
    api_version = 'api_version_example' # str | Standard request header. Used by service to identify API version used by client.
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id in which project was created.
    parameters = openapi_client.CheckNameAvailabilityParameters() # CheckNameAvailabilityParameters | Properties needed to check the availability of a name.

    try:
        api_response = api_instance.location_check_name_availability(location_name, api_version, subscription_id, parameters)
        print("The response of DefaultApi->location_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->location_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The desired region for the name check. | 
 **api_version** | **str**| Standard request header. Used by service to identify API version used by client. | 
 **subscription_id** | **str**| Azure Subscription Id in which project was created. | 
 **parameters** | [**CheckNameAvailabilityParameters**](CheckNameAvailabilityParameters.md)| Properties needed to check the availability of a name. | 

### Return type

[**CheckNameAvailabilityResult**](CheckNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. Returns details about whether a project name is available. |  -  |
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

# **projects_get_keys**
> ProjectKey projects_get_keys(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)

Get shared keys for the project.

Gets the Log Analytics Workspace ID and Primary Key for the specified project.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.project_key import ProjectKey
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
        # Get shared keys for the project.
        api_response = api_instance.projects_get_keys(subscription_id, resource_group_name, project_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->projects_get_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_get_keys: %s\n" % e)
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

[**ProjectKey**](ProjectKey.md)

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

# **projects_list_by_resource_group**
> ProjectResultList projects_list_by_resource_group(subscription_id, resource_group_name, api_version, accept_language=accept_language)

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
        api_response = api_instance.projects_list_by_resource_group(subscription_id, resource_group_name, api_version, accept_language=accept_language)
        print("The response of DefaultApi->projects_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->projects_list_by_resource_group: %s\n" % e)
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

