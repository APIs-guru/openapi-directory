# openapi_client.IssueRemoteLinksApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_or_update_remote_issue_link**](IssueRemoteLinksApi.md#create_or_update_remote_issue_link) | **POST** /rest/api/3/issue/{issueIdOrKey}/remotelink | Create or update remote issue link
[**delete_remote_issue_link_by_global_id**](IssueRemoteLinksApi.md#delete_remote_issue_link_by_global_id) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/remotelink | Delete remote issue link by global ID
[**delete_remote_issue_link_by_id**](IssueRemoteLinksApi.md#delete_remote_issue_link_by_id) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Delete remote issue link by ID
[**get_remote_issue_link_by_id**](IssueRemoteLinksApi.md#get_remote_issue_link_by_id) | **GET** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Get remote issue link by ID
[**get_remote_issue_links**](IssueRemoteLinksApi.md#get_remote_issue_links) | **GET** /rest/api/3/issue/{issueIdOrKey}/remotelink | Get remote issue links
[**update_remote_issue_link**](IssueRemoteLinksApi.md#update_remote_issue_link) | **PUT** /rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId} | Update remote issue link by ID


# **create_or_update_remote_issue_link**
> RemoteIssueLinkIdentifies create_or_update_remote_issue_link(issue_id_or_key, remote_issue_link_request)

Create or update remote issue link

Creates or updates a remote issue link for an issue.  If a `globalId` is provided and a remote issue link with that global ID is found it is updated. Any fields without values in the request are set to null. Otherwise, the remote issue link is created.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.remote_issue_link_identifies import RemoteIssueLinkIdentifies
from openapi_client.models.remote_issue_link_request import RemoteIssueLinkRequest
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
    api_instance = openapi_client.IssueRemoteLinksApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key of the issue.
    remote_issue_link_request = {"application":{"name":"My Acme Tracker","type":"com.acme.tracker"},"globalId":"system=http://www.mycompany.com/support&id=1","object":{"icon":{"title":"Support Ticket","url16x16":"http://www.mycompany.com/support/ticket.png"},"status":{"icon":{"link":"http://www.mycompany.com/support?id=1&details=closed","title":"Case Closed","url16x16":"http://www.mycompany.com/support/resolved.png"},"resolved":true},"summary":"Customer support issue","title":"TSTSUP-111","url":"http://www.mycompany.com/support?id=1"},"relationship":"causes"} # RemoteIssueLinkRequest | 

    try:
        # Create or update remote issue link
        api_response = api_instance.create_or_update_remote_issue_link(issue_id_or_key, remote_issue_link_request)
        print("The response of IssueRemoteLinksApi->create_or_update_remote_issue_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueRemoteLinksApi->create_or_update_remote_issue_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **remote_issue_link_request** | [**RemoteIssueLinkRequest**](RemoteIssueLinkRequest.md)|  | 

### Return type

[**RemoteIssueLinkIdentifies**](RemoteIssueLinkIdentifies.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the remote issue link is updated. |  -  |
**201** | Returned if the remote issue link is created. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to link issues. |  -  |
**404** | Returned if the issue is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_remote_issue_link_by_global_id**
> delete_remote_issue_link_by_global_id(issue_id_or_key, global_id)

Delete remote issue link by global ID

Deletes the remote issue link from the issue using the link's global ID. Where the global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is implemented, issue-level security permission to view the issue.

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
    api_instance = openapi_client.IssueRemoteLinksApi(api_client)
    issue_id_or_key = '10000' # str | The ID or key of the issue.
    global_id = 'system=http://www.mycompany.com/support&id=1' # str | The global ID of a remote issue link.

    try:
        # Delete remote issue link by global ID
        api_instance.delete_remote_issue_link_by_global_id(issue_id_or_key, global_id)
    except Exception as e:
        print("Exception when calling IssueRemoteLinksApi->delete_remote_issue_link_by_global_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **global_id** | **str**| The global ID of a remote issue link. | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if a global ID isn&#39;t provided. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to link issues. |  -  |
**404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_remote_issue_link_by_id**
> delete_remote_issue_link_by_id(issue_id_or_key, link_id)

Delete remote issue link by ID

Deletes a remote issue link from an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects*, *Edit issues*, and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

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
    api_instance = openapi_client.IssueRemoteLinksApi(api_client)
    issue_id_or_key = '10000' # str | The ID or key of the issue.
    link_id = '10000' # str | The ID of a remote issue link.

    try:
        # Delete remote issue link by ID
        api_instance.delete_remote_issue_link_by_id(issue_id_or_key, link_id)
    except Exception as e:
        print("Exception when calling IssueRemoteLinksApi->delete_remote_issue_link_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **link_id** | **str**| The ID of a remote issue link. | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the link ID is invalid or the remote issue link does not belong to the issue. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to link issues. |  -  |
**404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_remote_issue_link_by_id**
> RemoteIssueLink get_remote_issue_link_by_id(issue_id_or_key, link_id)

Get remote issue link by ID

Returns a remote issue link for an issue.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.remote_issue_link import RemoteIssueLink
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
    api_instance = openapi_client.IssueRemoteLinksApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key of the issue.
    link_id = 'link_id_example' # str | The ID of the remote issue link.

    try:
        # Get remote issue link by ID
        api_response = api_instance.get_remote_issue_link_by_id(issue_id_or_key, link_id)
        print("The response of IssueRemoteLinksApi->get_remote_issue_link_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueRemoteLinksApi->get_remote_issue_link_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **link_id** | **str**| The ID of the remote issue link. | 

### Return type

[**RemoteIssueLink**](RemoteIssueLink.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the link ID is invalid or the remote issue link does not belong to the issue. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if issue linking is disabled. |  -  |
**404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_remote_issue_links**
> RemoteIssueLink get_remote_issue_links(issue_id_or_key, global_id=global_id)

Get remote issue links

Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned. Where a global ID includes reserved URL characters these must be escaped in the request. For example, pass `system=http://www.mycompany.com/support&id=1` as `system%3Dhttp%3A%2F%2Fwww.mycompany.com%2Fsupport%26id%3D1`.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.remote_issue_link import RemoteIssueLink
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
    api_instance = openapi_client.IssueRemoteLinksApi(api_client)
    issue_id_or_key = '10000' # str | The ID or key of the issue.
    global_id = 'global_id_example' # str | The global ID of the remote issue link. (optional)

    try:
        # Get remote issue links
        api_response = api_instance.get_remote_issue_links(issue_id_or_key, global_id=global_id)
        print("The response of IssueRemoteLinksApi->get_remote_issue_links:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueRemoteLinksApi->get_remote_issue_links: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **global_id** | **str**| The global ID of the remote issue link. | [optional] 

### Return type

[**RemoteIssueLink**](RemoteIssueLink.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if issue linking is disabled. |  -  |
**404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_remote_issue_link**
> object update_remote_issue_link(issue_id_or_key, link_id, remote_issue_link_request)

Update remote issue link by ID

Updates a remote issue link for an issue.  Note: Fields without values in the request are set to null.  This operation requires [issue linking to be active](https://confluence.atlassian.com/x/yoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Link issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.remote_issue_link_request import RemoteIssueLinkRequest
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
    api_instance = openapi_client.IssueRemoteLinksApi(api_client)
    issue_id_or_key = '10000' # str | The ID or key of the issue.
    link_id = '10000' # str | The ID of the remote issue link.
    remote_issue_link_request = {"application":{"name":"My Acme Tracker","type":"com.acme.tracker"},"globalId":"system=http://www.mycompany.com/support&id=1","object":{"icon":{"title":"Support Ticket","url16x16":"http://www.mycompany.com/support/ticket.png"},"status":{"icon":{"link":"http://www.mycompany.com/support?id=1&details=closed","title":"Case Closed","url16x16":"http://www.mycompany.com/support/resolved.png"},"resolved":true},"summary":"Customer support issue","title":"TSTSUP-111","url":"http://www.mycompany.com/support?id=1"},"relationship":"causes"} # RemoteIssueLinkRequest | 

    try:
        # Update remote issue link by ID
        api_response = api_instance.update_remote_issue_link(issue_id_or_key, link_id, remote_issue_link_request)
        print("The response of IssueRemoteLinksApi->update_remote_issue_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueRemoteLinksApi->update_remote_issue_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **link_id** | **str**| The ID of the remote issue link. | 
 **remote_issue_link_request** | [**RemoteIssueLinkRequest**](RemoteIssueLinkRequest.md)|  | 

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
**400** | Returned if:   *  the link ID is invalid.  *  the remote issue link does not belong to the issue.  *  the request body is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to link issues. |  -  |
**404** | Returned if the issue or remote issue link is not found or the user does not have permission to view the issue. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

