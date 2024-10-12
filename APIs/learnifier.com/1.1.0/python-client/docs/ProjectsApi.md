# openapi_client.ProjectsApi

All URIs are relative to *http://learnifier.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**extproject_get**](ProjectsApi.md#extproject_get) | **GET** /extproject | Gets Organization Unit by external id
[**orgunits_orgid_projects_get**](ProjectsApi.md#orgunits_orgid_projects_get) | **GET** /orgunits/{orgid}/projects | Organization Unit Projects
[**orgunits_orgid_projects_post**](ProjectsApi.md#orgunits_orgid_projects_post) | **POST** /orgunits/{orgid}/projects | Create project
[**orgunits_orgid_projects_projectid_delete**](ProjectsApi.md#orgunits_orgid_projects_projectid_delete) | **DELETE** /orgunits/{orgid}/projects/{projectid} | Deletes the project
[**orgunits_orgid_projects_projectid_get**](ProjectsApi.md#orgunits_orgid_projects_projectid_get) | **GET** /orgunits/{orgid}/projects/{projectid} | Project information
[**orgunits_orgid_projects_projectid_participants_get**](ProjectsApi.md#orgunits_orgid_projects_projectid_participants_get) | **GET** /orgunits/{orgid}/projects/{projectid}/participants | Project participants
[**orgunits_orgid_projects_projectid_participants_participant_id_activate_post**](ProjectsApi.md#orgunits_orgid_projects_projectid_participants_participant_id_activate_post) | **POST** /orgunits/{orgid}/projects/{projectid}/participants/${participantId}/activate | Activate participant
[**orgunits_orgid_projects_projectid_participants_participant_id_delete**](ProjectsApi.md#orgunits_orgid_projects_projectid_participants_participant_id_delete) | **DELETE** /orgunits/{orgid}/projects/{projectid}/participants/${participantId} | Deletes a participant
[**orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post**](ProjectsApi.md#orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post) | **POST** /orgunits/{orgid}/projects/{projectid}/participants/${participantId}/loginlink | Participant login link
[**orgunits_orgid_projects_projectid_participants_post**](ProjectsApi.md#orgunits_orgid_projects_projectid_participants_post) | **POST** /orgunits/{orgid}/projects/{projectid}/participants | Add participant
[**orgunits_orgid_projects_projectid_patch**](ProjectsApi.md#orgunits_orgid_projects_projectid_patch) | **PATCH** /orgunits/{orgid}/projects/{projectid} | Update project information
[**orgunits_orgid_projects_projectid_teammembers_get**](ProjectsApi.md#orgunits_orgid_projects_projectid_teammembers_get) | **GET** /orgunits/{orgid}/projects/{projectid}/teammembers | Project team members


# **extproject_get**
> Project extproject_get(extid)

Gets Organization Unit by external id

Gets an Organization Unit by external id

### Example


```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    extid = 'extid_example' # str | The external id of the organization unit

    try:
        # Gets Organization Unit by external id
        api_response = api_instance.extproject_get(extid)
        print("The response of ProjectsApi->extproject_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->extproject_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **extid** | **str**| The external id of the organization unit | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The matching project |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_get**
> List[Project] orgunits_orgid_projects_get(orgid)

Organization Unit Projects

Returns the available projects for the organization unit 

### Example


```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 3.4 # float | Id of the organization unit

    try:
        # Organization Unit Projects
        api_response = api_instance.orgunits_orgid_projects_get(orgid)
        print("The response of ProjectsApi->orgunits_orgid_projects_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **float**| Id of the organization unit | 

### Return type

[**List[Project]**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list with projects |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_post**
> Project orgunits_orgid_projects_post(orgid, body)

Create project

Creates a new project 

### Example


```python
import openapi_client
from openapi_client.models.add_project import AddProject
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    body = openapi_client.AddProject() # AddProject | 

    try:
        # Create project
        api_response = api_instance.orgunits_orgid_projects_post(orgid, body)
        print("The response of ProjectsApi->orgunits_orgid_projects_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **body** | [**AddProject**](AddProject.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The project was succesfully created created. |  * location - Location to the added participant <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_delete**
> orgunits_orgid_projects_projectid_delete(orgid, projectid)

Deletes the project

Deletes the project. The project can only be deleted if the project do not contain any participants. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project

    try:
        # Deletes the project
        api_instance.orgunits_orgid_projects_projectid_delete(orgid, projectid)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The project was deleted |  -  |
**404** | The project could not be found |  -  |
**406** | The project could not be delted due to constraints |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_get**
> Project orgunits_orgid_projects_projectid_get(orgid, projectid)

Project information

Returns project information 

### Example


```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project

    try:
        # Project information
        api_response = api_instance.orgunits_orgid_projects_projectid_get(orgid, projectid)
        print("The response of ProjectsApi->orgunits_orgid_projects_projectid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project information |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_participants_get**
> List[Participation] orgunits_orgid_projects_projectid_participants_get(orgid, projectid)

Project participants

Returns project participants 

### Example


```python
import openapi_client
from openapi_client.models.participation import Participation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project

    try:
        # Project participants
        api_response = api_instance.orgunits_orgid_projects_projectid_participants_get(orgid, projectid)
        print("The response of ProjectsApi->orgunits_orgid_projects_projectid_participants_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_participants_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 

### Return type

[**List[Participation]**](Participation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project information |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_participants_participant_id_activate_post**
> orgunits_orgid_projects_projectid_participants_participant_id_activate_post(orgid, projectid, participant_id)

Activate participant

Activates a participant so that it can be used 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project
    participant_id = 56 # int | Id of the participant

    try:
        # Activate participant
        api_instance.orgunits_orgid_projects_projectid_participants_participant_id_activate_post(orgid, projectid, participant_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_participants_participant_id_activate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 
 **participant_id** | **int**| Id of the participant | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Participant is activated |  -  |
**406** | The participant could not be activated |  -  |
**422** | The participant could not be activated due to invalid project state |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_participants_participant_id_delete**
> orgunits_orgid_projects_projectid_participants_participant_id_delete(orgid, projectid, participant_id)

Deletes a participant

Deletes a participant. The user itself will still remain but any state related to the project will be deleted. It might not be possible due to constraints from the products in the project to delete the participant. However this can only be determined at the time of the delete. If a delete fails the participant will have their inError flag set. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project
    participant_id = 56 # int | Participant id

    try:
        # Deletes a participant
        api_instance.orgunits_orgid_projects_projectid_participants_participant_id_delete(orgid, projectid, participant_id)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_participants_participant_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 
 **participant_id** | **int**| Participant id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Participant is deleted |  -  |
**409** | The delete failed due to internal constraints |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post**
> LoginLink orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post(orgid, projectid, participant_id)

Participant login link

Returns a single sign on link for the participant. The link is only usable once and should be used directly. The link expires after a few minutes.  This operation requires the *login link* permission. 

### Example


```python
import openapi_client
from openapi_client.models.login_link import LoginLink
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project
    participant_id = 56 # int | Id of the participant

    try:
        # Participant login link
        api_response = api_instance.orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post(orgid, projectid, participant_id)
        print("The response of ProjectsApi->orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_participants_participant_id_loginlink_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 
 **participant_id** | **int**| Id of the participant | 

### Return type

[**LoginLink**](LoginLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A generated one time use login link |  -  |
**422** | The participant is not in a state where a loginlink is possible to get |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_participants_post**
> orgunits_orgid_projects_projectid_participants_post(orgid, projectid, body)

Add participant

Add a user to the project. Participant information is created for the user. In the body object, only one of either email or userid must be specified. The participant needs to be activated before it the user can access it. 

### Example


```python
import openapi_client
from openapi_client.models.add_participant import AddParticipant
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project
    body = openapi_client.AddParticipant() # AddParticipant | 

    try:
        # Add participant
        api_instance.orgunits_orgid_projects_projectid_participants_post(orgid, projectid, body)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_participants_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 
 **body** | [**AddParticipant**](AddParticipant.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Participant was created |  * location - Location to the added participant <br>  |
**409** | Participant with the same email already existed. Location header contains the url to the already existing participant. |  * location - Location to the added participant <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_patch**
> Project orgunits_orgid_projects_projectid_patch(orgid, projectid, body)

Update project information

Updates information about a project. Values are only updated if the fields are specified in the input 

### Example


```python
import openapi_client
from openapi_client.models.project import Project
from openapi_client.models.update_project import UpdateProject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project
    body = openapi_client.UpdateProject() # UpdateProject | 

    try:
        # Update project information
        api_response = api_instance.orgunits_orgid_projects_projectid_patch(orgid, projectid, body)
        print("The response of ProjectsApi->orgunits_orgid_projects_projectid_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 
 **body** | [**UpdateProject**](UpdateProject.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The project was succesfully updated |  * location - Location to the added participant <br>  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orgunits_orgid_projects_projectid_teammembers_get**
> List[ProjectTeamMember] orgunits_orgid_projects_projectid_teammembers_get(orgid, projectid)

Project team members

Returns the project team members. A team member is a .... 

### Example


```python
import openapi_client
from openapi_client.models.project_team_member import ProjectTeamMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://learnifier.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://learnifier.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectsApi(api_client)
    orgid = 56 # int | Id of the organization unit
    projectid = 56 # int | Id of the project

    try:
        # Project team members
        api_response = api_instance.orgunits_orgid_projects_projectid_teammembers_get(orgid, projectid)
        print("The response of ProjectsApi->orgunits_orgid_projects_projectid_teammembers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->orgunits_orgid_projects_projectid_teammembers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orgid** | **int**| Id of the organization unit | 
 **projectid** | **int**| Id of the project | 

### Return type

[**List[ProjectTeamMember]**](ProjectTeamMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project information |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

