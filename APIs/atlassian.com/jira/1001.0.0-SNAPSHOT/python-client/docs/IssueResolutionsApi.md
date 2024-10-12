# openapi_client.IssueResolutionsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_resolution**](IssueResolutionsApi.md#create_resolution) | **POST** /rest/api/3/resolution | Create resolution
[**delete_resolution**](IssueResolutionsApi.md#delete_resolution) | **DELETE** /rest/api/3/resolution/{id} | Delete resolution
[**get_resolution**](IssueResolutionsApi.md#get_resolution) | **GET** /rest/api/3/resolution/{id} | Get resolution
[**get_resolutions**](IssueResolutionsApi.md#get_resolutions) | **GET** /rest/api/3/resolution | Get resolutions
[**move_resolutions**](IssueResolutionsApi.md#move_resolutions) | **PUT** /rest/api/3/resolution/move | Move resolutions
[**search_resolutions**](IssueResolutionsApi.md#search_resolutions) | **GET** /rest/api/3/resolution/search | Search resolutions
[**set_default_resolution**](IssueResolutionsApi.md#set_default_resolution) | **PUT** /rest/api/3/resolution/default | Set default resolution
[**update_resolution**](IssueResolutionsApi.md#update_resolution) | **PUT** /rest/api/3/resolution/{id} | Update resolution


# **create_resolution**
> ResolutionId create_resolution(create_resolution_details)

Create resolution

Creates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_resolution_details import CreateResolutionDetails
from openapi_client.models.resolution_id import ResolutionId
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    create_resolution_details = {"description":"My resolution description","name":"My new resolution"} # CreateResolutionDetails | 

    try:
        # Create resolution
        api_response = api_instance.create_resolution(create_resolution_details)
        print("The response of IssueResolutionsApi->create_resolution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->create_resolution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_resolution_details** | [**CreateResolutionDetails**](CreateResolutionDetails.md)|  | 

### Return type

[**ResolutionId**](ResolutionId.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the request is successful. |  -  |
**400** | Returned if the request isn&#39;t valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user doesn&#39;t have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_resolution**
> delete_resolution(id, replace_with)

Delete resolution

Deletes an issue resolution.  This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    id = 'id_example' # str | The ID of the issue resolution.
    replace_with = 'replace_with_example' # str | The ID of the issue resolution that will replace the currently selected resolution.

    try:
        # Delete resolution
        api_instance.delete_resolution(id, replace_with)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->delete_resolution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the issue resolution. | 
 **replace_with** | **str**| The ID of the issue resolution that will replace the currently selected resolution. | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**303** | Returned if the request is successful. |  -  |
**400** | Returned if the request isn&#39;t valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user doesn&#39;t have the necessary permission. |  -  |
**404** | Returned if the issue resolution isn&#39;t found. |  -  |
**409** | Returned if a task to delete the issue resolution is already running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_resolution**
> Resolution get_resolution(id)

Get resolution

Returns an issue resolution value.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.resolution import Resolution
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    id = 'id_example' # str | The ID of the issue resolution value.

    try:
        # Get resolution
        api_response = api_instance.get_resolution(id)
        print("The response of IssueResolutionsApi->get_resolution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->get_resolution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the issue resolution value. | 

### Return type

[**Resolution**](Resolution.md)

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
**404** | Returned if the issue resolution value is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_resolutions**
> List[Resolution] get_resolutions()

Get resolutions

Returns a list of all issue resolution values.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.resolution import Resolution
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)

    try:
        # Get resolutions
        api_response = api_instance.get_resolutions()
        print("The response of IssueResolutionsApi->get_resolutions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->get_resolutions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Resolution]**](Resolution.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_resolutions**
> object move_resolutions(reorder_issue_resolutions_request)

Move resolutions

Changes the order of issue resolutions.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.reorder_issue_resolutions_request import ReorderIssueResolutionsRequest
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    reorder_issue_resolutions_request = {"after":"10002","ids":["10000","10001"]} # ReorderIssueResolutionsRequest | 

    try:
        # Move resolutions
        api_response = api_instance.move_resolutions(reorder_issue_resolutions_request)
        print("The response of IssueResolutionsApi->move_resolutions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->move_resolutions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reorder_issue_resolutions_request** | [**ReorderIssueResolutionsRequest**](ReorderIssueResolutionsRequest.md)|  | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request isn&#39;t valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user doesn&#39;t have the necessary permission. |  -  |
**404** | Returned if the issue resolution isn&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_resolutions**
> PageBeanResolutionJsonBean search_resolutions(start_at=start_at, max_results=max_results, id=id, only_default=only_default)

Search resolutions

Returns a [paginated](#pagination) list of resolutions. The list can contain all resolutions or a subset determined by any combination of these criteria:   *  a list of resolutions IDs.  *  whether the field configuration is a default. This returns resolutions from company-managed (classic) projects only, as there is no concept of default resolutions in team-managed projects.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_resolution_json_bean import PageBeanResolutionJsonBean
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    start_at = '0' # str | The index of the first item to return in a page of results (page offset). (optional) (default to '0')
    max_results = '50' # str | The maximum number of items to return per page. (optional) (default to '50')
    id = ['id_example'] # List[str] | The list of resolutions IDs to be filtered out (optional)
    only_default = False # bool | When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false (optional) (default to False)

    try:
        # Search resolutions
        api_response = api_instance.search_resolutions(start_at=start_at, max_results=max_results, id=id, only_default=only_default)
        print("The response of IssueResolutionsApi->search_resolutions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->search_resolutions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **str**| The index of the first item to return in a page of results (page offset). | [optional] [default to &#39;0&#39;]
 **max_results** | **str**| The maximum number of items to return per page. | [optional] [default to &#39;50&#39;]
 **id** | [**List[str]**](str.md)| The list of resolutions IDs to be filtered out | [optional] 
 **only_default** | **bool**| When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false | [optional] [default to False]

### Return type

[**PageBeanResolutionJsonBean**](PageBeanResolutionJsonBean.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_default_resolution**
> object set_default_resolution(set_default_resolution_request)

Set default resolution

Sets default issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.set_default_resolution_request import SetDefaultResolutionRequest
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    set_default_resolution_request = {"id":"3"} # SetDefaultResolutionRequest | 

    try:
        # Set default resolution
        api_response = api_instance.set_default_resolution(set_default_resolution_request)
        print("The response of IssueResolutionsApi->set_default_resolution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->set_default_resolution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_default_resolution_request** | [**SetDefaultResolutionRequest**](SetDefaultResolutionRequest.md)|  | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request isn&#39;t valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user doesn&#39;t have the necessary permission. |  -  |
**404** | Returned if the issue resolution isn&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_resolution**
> object update_resolution(id, update_resolution_details)

Update resolution

Updates an issue resolution.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.update_resolution_details import UpdateResolutionDetails
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
    api_instance = openapi_client.IssueResolutionsApi(api_client)
    id = 'id_example' # str | The ID of the issue resolution.
    update_resolution_details = {"description":"My updated resolution description","name":"My updated resolution"} # UpdateResolutionDetails | 

    try:
        # Update resolution
        api_response = api_instance.update_resolution(id, update_resolution_details)
        print("The response of IssueResolutionsApi->update_resolution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueResolutionsApi->update_resolution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the issue resolution. | 
 **update_resolution_details** | [**UpdateResolutionDetails**](UpdateResolutionDetails.md)|  | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request isn&#39;t valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user doesn&#39;t have the necessary permission. |  -  |
**404** | Returned if the issue resolution isn&#39;t found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

