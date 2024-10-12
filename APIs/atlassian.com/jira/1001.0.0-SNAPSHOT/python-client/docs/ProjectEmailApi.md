# openapi_client.ProjectEmailApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_project_email**](ProjectEmailApi.md#get_project_email) | **GET** /rest/api/3/project/{projectId}/email | Get project&#39;s sender email
[**update_project_email**](ProjectEmailApi.md#update_project_email) | **PUT** /rest/api/3/project/{projectId}/email | Set project&#39;s sender email


# **get_project_email**
> ProjectEmailAddress get_project_email(project_id)

Get project's sender email

Returns the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_email_address import ProjectEmailAddress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectEmailApi(api_client)
    project_id = 56 # int | The project ID.

    try:
        # Get project's sender email
        api_response = api_instance.get_project_email(project_id)
        print("The response of ProjectEmailApi->get_project_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectEmailApi->get_project_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**| The project ID. | 

### Return type

[**ProjectEmailAddress**](ProjectEmailAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to read project. |  -  |
**404** | Returned if the project or project&#39;s sender email address is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_project_email**
> object update_project_email(project_id, project_email_address)

Set project's sender email

Sets the [project's sender email address](https://confluence.atlassian.com/x/dolKLg).  If `emailAddress` is an empty string, the default email address is restored.  **[Permissions](#permissions) required:** *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.project_email_address import ProjectEmailAddress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectEmailApi(api_client)
    project_id = 56 # int | The project ID.
    project_email_address = {"emailAddress":"jira@example.atlassian.net"} # ProjectEmailAddress | The project's sender email address to be set.

    try:
        # Set project's sender email
        api_response = api_instance.update_project_email(project_id, project_email_address)
        print("The response of ProjectEmailApi->update_project_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectEmailApi->update_project_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **int**| The project ID. | 
 **project_email_address** | [**ProjectEmailAddress**](ProjectEmailAddress.md)| The project&#39;s sender email address to be set. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the project&#39;s sender email address is successfully set. |  -  |
**400** | Returned if the request is not valid, if the email address is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to read project. |  -  |
**404** | Returned if the project is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

