# openapi_client.IssueWorklogsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_worklog**](IssueWorklogsApi.md#add_worklog) | **POST** /rest/api/3/issue/{issueIdOrKey}/worklog | Add worklog
[**delete_worklog**](IssueWorklogsApi.md#delete_worklog) | **DELETE** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Delete worklog
[**get_ids_of_worklogs_deleted_since**](IssueWorklogsApi.md#get_ids_of_worklogs_deleted_since) | **GET** /rest/api/3/worklog/deleted | Get IDs of deleted worklogs
[**get_ids_of_worklogs_modified_since**](IssueWorklogsApi.md#get_ids_of_worklogs_modified_since) | **GET** /rest/api/3/worklog/updated | Get IDs of updated worklogs
[**get_issue_worklog**](IssueWorklogsApi.md#get_issue_worklog) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog | Get issue worklogs
[**get_worklog**](IssueWorklogsApi.md#get_worklog) | **GET** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Get worklog
[**get_worklogs_for_ids**](IssueWorklogsApi.md#get_worklogs_for_ids) | **POST** /rest/api/3/worklog/list | Get worklogs
[**update_worklog**](IssueWorklogsApi.md#update_worklog) | **PUT** /rest/api/3/issue/{issueIdOrKey}/worklog/{id} | Update worklog


# **add_worklog**
> Worklog add_worklog(issue_id_or_key, worklog, notify_users=notify_users, adjust_estimate=adjust_estimate, new_estimate=new_estimate, reduce_by=reduce_by, expand=expand, override_editable_flag=override_editable_flag)

Add worklog

Adds a worklog to an issue.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* and *Work on issues* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.worklog import Worklog
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key the issue.
    worklog = {"comment":{"content":[{"content":[{"text":"I did some work here.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"started":"2021-01-17T12:34:00.000+0000","timeSpentSeconds":12000,"visibility":{"identifier":"276f955c-63d7-42c8-9520-92d01dca0625","type":"group"}} # Worklog | 
    notify_users = True # bool | Whether users watching the issue are notified by email. (optional) (default to True)
    adjust_estimate = auto # str | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Reduces the estimate by amount specified in `reduceBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. (optional) (default to auto)
    new_estimate = 'new_estimate_example' # str | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`. (optional)
    reduce_by = 'reduce_by_example' # str | The amount to reduce the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when `adjustEstimate` is `manual`. (optional)
    expand = '' # str | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties. (optional) (default to '')
    override_editable_flag = False # bool | Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. (optional) (default to False)

    try:
        # Add worklog
        api_response = api_instance.add_worklog(issue_id_or_key, worklog, notify_users=notify_users, adjust_estimate=adjust_estimate, new_estimate=new_estimate, reduce_by=reduce_by, expand=expand, override_editable_flag=override_editable_flag)
        print("The response of IssueWorklogsApi->add_worklog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->add_worklog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key the issue. | 
 **worklog** | [**Worklog**](Worklog.md)|  | 
 **notify_users** | **bool**| Whether users watching the issue are notified by email. | [optional] [default to True]
 **adjust_estimate** | **str**| Defines how to update the issue&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;manual&#x60; Reduces the estimate by amount specified in &#x60;reduceBy&#x60;.  *  &#x60;auto&#x60; Reduces the estimate by the value of &#x60;timeSpent&#x60; in the worklog. | [optional] [default to auto]
 **new_estimate** | **str**| The value to set as the issue&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [optional] 
 **reduce_by** | **str**| The amount to reduce the issue&#39;s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;manual&#x60;. | [optional] 
 **expand** | **str**| Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts &#x60;properties&#x60;, which returns worklog properties. | [optional] [default to &#39;&#39;]
 **override_editable_flag** | **bool**| Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. | [optional] [default to False]

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the request is successful. |  -  |
**400** | Returned if:   *  &#x60;adjustEstimate&#x60; is set to &#x60;new&#x60; but &#x60;newEstimate&#x60; is not provided or is invalid.  *  &#x60;adjustEstimate&#x60; is set to &#x60;manual&#x60; but &#x60;reduceBy&#x60; is not provided or is invalid.  *  the user does not have permission to add the worklog.  *  the request JSON is malformed. |  -  |
**401** | Returned if the authentication credentials are incorrect. |  -  |
**404** | Returned if the issue is not found or the user does not have permission to view it. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_worklog**
> delete_worklog(issue_id_or_key, id, notify_users=notify_users, adjust_estimate=adjust_estimate, new_estimate=new_estimate, increase_by=increase_by, override_editable_flag=override_editable_flag)

Delete worklog

Deletes a worklog from an issue.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Delete all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to delete any worklog or *Delete own worklogs* to delete worklogs created by the user,  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key of the issue.
    id = 'id_example' # str | The ID of the worklog.
    notify_users = True # bool | Whether users watching the issue are notified by email. (optional) (default to True)
    adjust_estimate = auto # str | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Increases the estimate by amount specified in `increaseBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. (optional) (default to auto)
    new_estimate = 'new_estimate_example' # str | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`. (optional)
    increase_by = 'increase_by_example' # str | The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`. (optional)
    override_editable_flag = False # bool | Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. (optional) (default to False)

    try:
        # Delete worklog
        api_instance.delete_worklog(issue_id_or_key, id, notify_users=notify_users, adjust_estimate=adjust_estimate, new_estimate=new_estimate, increase_by=increase_by, override_editable_flag=override_editable_flag)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->delete_worklog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **id** | **str**| The ID of the worklog. | 
 **notify_users** | **bool**| Whether users watching the issue are notified by email. | [optional] [default to True]
 **adjust_estimate** | **str**| Defines how to update the issue&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;manual&#x60; Increases the estimate by amount specified in &#x60;increaseBy&#x60;.  *  &#x60;auto&#x60; Reduces the estimate by the value of &#x60;timeSpent&#x60; in the worklog. | [optional] [default to auto]
 **new_estimate** | **str**| The value to set as the issue&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [optional] 
 **increase_by** | **str**| The amount to increase the issue&#39;s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;manual&#x60;. | [optional] 
 **override_editable_flag** | **bool**| Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Connect and Forge app users with admin permission can use this flag. | [optional] [default to False]

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
**400** | Returned if:   *  &#x60;adjustEstimate&#x60; is set to &#x60;new&#x60; but &#x60;newEstimate&#x60; is not provided or is invalid.  *  &#x60;adjustEstimate&#x60; is set to &#x60;manual&#x60; but &#x60;reduceBy&#x60; is not provided or is invalid.  *  the user does not have permission to delete the worklog. |  -  |
**401** | Returned if the authentication credentials are incorrect. |  -  |
**404** | Returned if:   *  the issue is not found or user does not have permission to view the issue.  *  the worklog is not found or the user does not have permission to view it.  *  time tracking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ids_of_worklogs_deleted_since**
> ChangedWorklogs get_ids_of_worklogs_deleted_since(since=since)

Get IDs of deleted worklogs

Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.  This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs.  This resource does not return worklogs deleted during the minute preceding the request.  **[Permissions](#permissions) required:** Permission to access Jira.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.changed_worklogs import ChangedWorklogs
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    since = 0 # int | The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. (optional) (default to 0)

    try:
        # Get IDs of deleted worklogs
        api_response = api_instance.get_ids_of_worklogs_deleted_since(since=since)
        print("The response of IssueWorklogsApi->get_ids_of_worklogs_deleted_since:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->get_ids_of_worklogs_deleted_since: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **int**| The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. | [optional] [default to 0]

### Return type

[**ChangedWorklogs**](ChangedWorklogs.md)

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

# **get_ids_of_worklogs_modified_since**
> ChangedWorklogs get_ids_of_worklogs_modified_since(since=since, expand=expand)

Get IDs of updated worklogs

Returns a list of IDs and update timestamps for worklogs updated after a date and time.  This resource is paginated, with a limit of 1000 worklogs per page. Each page lists worklogs from oldest to youngest. If the number of items in the date range exceeds 1000, `until` indicates the timestamp of the youngest item on the page. Also, `nextPage` provides the URL for the next page of worklogs. The `lastPage` parameter is set to true on the last page of worklogs.  This resource does not return worklogs updated during the minute preceding the request.  **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:   *  the worklog is set as *Viewable by All Users*.  *  the user is a member of a project role or group with permission to view the worklog.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.changed_worklogs import ChangedWorklogs
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    since = 0 # int | The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. (optional) (default to 0)
    expand = '' # str | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. (optional) (default to '')

    try:
        # Get IDs of updated worklogs
        api_response = api_instance.get_ids_of_worklogs_modified_since(since=since, expand=expand)
        print("The response of IssueWorklogsApi->get_ids_of_worklogs_modified_since:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->get_ids_of_worklogs_modified_since: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **since** | **int**| The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. | [optional] [default to 0]
 **expand** | **str**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60; that returns the properties of each worklog. | [optional] [default to &#39;&#39;]

### Return type

[**ChangedWorklogs**](ChangedWorklogs.md)

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

# **get_issue_worklog**
> PageOfWorklogs get_issue_worklog(issue_id_or_key, start_at=start_at, max_results=max_results, started_after=started_after, started_before=started_before, expand=expand)

Get issue worklogs

Returns worklogs for an issue, starting from the oldest worklog or from the worklog started on or after a date and time.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** Workloads are only returned where the user has:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_of_worklogs import PageOfWorklogs
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key of the issue.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 5000 # int | The maximum number of items to return per page. (optional) (default to 5000)
    started_after = 56 # int | The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. (optional)
    started_before = 56 # int | The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned. (optional)
    expand = '' # str | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties. (optional) (default to '')

    try:
        # Get issue worklogs
        api_response = api_instance.get_issue_worklog(issue_id_or_key, start_at=start_at, max_results=max_results, started_after=started_after, started_before=started_before, expand=expand)
        print("The response of IssueWorklogsApi->get_issue_worklog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->get_issue_worklog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 5000]
 **started_after** | **int**| The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. | [optional] 
 **started_before** | **int**| The worklog start date and time, as a UNIX timestamp in milliseconds, before which worklogs are returned. | [optional] 
 **expand** | **str**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts&#x60;properties&#x60;, which returns worklog properties. | [optional] [default to &#39;&#39;]

### Return type

[**PageOfWorklogs**](PageOfWorklogs.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if:   *  the issue is not found or the user does not have permission to view the issue.  *  &#x60;startAt&#x60; or &#x60;maxResults&#x60; has non-numeric values.  *  time tracking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_worklog**
> Worklog get_worklog(issue_id_or_key, id, expand=expand)

Get worklog

Returns a worklog.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.worklog import Worklog
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key of the issue.
    id = 'id_example' # str | The ID of the worklog.
    expand = '' # str | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  `properties`, which returns worklog properties. (optional) (default to '')

    try:
        # Get worklog
        api_response = api_instance.get_worklog(issue_id_or_key, id, expand=expand)
        print("The response of IssueWorklogsApi->get_worklog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->get_worklog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue. | 
 **id** | **str**| The ID of the worklog. | 
 **expand** | **str**| Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  &#x60;properties&#x60;, which returns worklog properties. | [optional] [default to &#39;&#39;]

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect. |  -  |
**404** | Returned if:   *  the issue is not found or the user does not have permission to view it.  *  the worklog is not found or the user does not have permission to view it.  *  time tracking is disabled.  . |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_worklogs_for_ids**
> List[Worklog] get_worklogs_for_ids(worklog_ids_request_bean, expand=expand)

Get worklogs

Returns worklog details for a list of worklog IDs.  The returned list of worklogs is limited to 1000 items.  **[Permissions](#permissions) required:** Permission to access Jira, however, worklogs are only returned where either of the following is true:   *  the worklog is set as *Viewable by All Users*.  *  the user is a member of a project role or group with permission to view the worklog.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.worklog import Worklog
from openapi_client.models.worklog_ids_request_bean import WorklogIdsRequestBean
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    worklog_ids_request_bean = {"ids":[1,2,5,10]} # WorklogIdsRequestBean | A JSON object containing a list of worklog IDs.
    expand = '' # str | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog. (optional) (default to '')

    try:
        # Get worklogs
        api_response = api_instance.get_worklogs_for_ids(worklog_ids_request_bean, expand=expand)
        print("The response of IssueWorklogsApi->get_worklogs_for_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->get_worklogs_for_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **worklog_ids_request_bean** | [**WorklogIdsRequestBean**](WorklogIdsRequestBean.md)| A JSON object containing a list of worklog IDs. | 
 **expand** | **str**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60; that returns the properties of each worklog. | [optional] [default to &#39;&#39;]

### Return type

[**List[Worklog]**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request contains more than 1000 worklog IDs or is empty. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_worklog**
> Worklog update_worklog(issue_id_or_key, id, worklog, notify_users=notify_users, adjust_estimate=adjust_estimate, new_estimate=new_estimate, expand=expand, override_editable_flag=override_editable_flag)

Update worklog

Updates a worklog.  Time tracking must be enabled in Jira, otherwise this operation returns an error. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.  *  *Edit all worklogs*[ project permission](https://confluence.atlassian.com/x/yodKLg) to update any worklog or *Edit own worklogs* to update worklogs created by the user.  *  If the worklog has visibility restrictions, belongs to the group or has the role visibility is restricted to.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.worklog import Worklog
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
    api_instance = openapi_client.IssueWorklogsApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key the issue.
    id = 'id_example' # str | The ID of the worklog.
    worklog = {"comment":{"content":[{"content":[{"text":"I did some work here.","type":"text"}],"type":"paragraph"}],"type":"doc","version":1},"started":"2021-01-17T12:34:00.000+0000","timeSpentSeconds":12000,"visibility":{"identifier":"276f955c-63d7-42c8-9520-92d01dca0625","type":"group"}} # Worklog | 
    notify_users = True # bool | Whether users watching the issue are notified by email. (optional) (default to True)
    adjust_estimate = auto # str | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`. (optional) (default to auto)
    new_estimate = 'new_estimate_example' # str | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`. (optional)
    expand = '' # str | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties. (optional) (default to '')
    override_editable_flag = False # bool | Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. (optional) (default to False)

    try:
        # Update worklog
        api_response = api_instance.update_worklog(issue_id_or_key, id, worklog, notify_users=notify_users, adjust_estimate=adjust_estimate, new_estimate=new_estimate, expand=expand, override_editable_flag=override_editable_flag)
        print("The response of IssueWorklogsApi->update_worklog:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueWorklogsApi->update_worklog: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key the issue. | 
 **id** | **str**| The ID of the worklog. | 
 **worklog** | [**Worklog**](Worklog.md)|  | 
 **notify_users** | **bool**| Whether users watching the issue are notified by email. | [optional] [default to True]
 **adjust_estimate** | **str**| Defines how to update the issue&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;auto&#x60; Updates the estimate by the difference between the original and updated value of &#x60;timeSpent&#x60; or &#x60;timeSpentSeconds&#x60;. | [optional] [default to auto]
 **new_estimate** | **str**| The value to set as the issue&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [optional] 
 **expand** | **str**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60;, which returns worklog properties. | [optional] [default to &#39;&#39;]
 **override_editable_flag** | **bool**| Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Connect and Forge app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) can use this flag. | [optional] [default to False]

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful |  -  |
**400** | Returned if:   *  &#x60;adjustEstimate&#x60; is set to &#x60;new&#x60; but &#x60;newEstimate&#x60; is not provided or is invalid.  *  the user does not have permission to update the worklog.  *  the request JSON is malformed. |  -  |
**401** | Returned if the authentication credentials are incorrect. |  -  |
**404** | Returned if:   *  the issue is not found or user does not have permission to view the issue.  *  the worklog is not found or the user does not have permission to view it.  *  time tracking is disabled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

