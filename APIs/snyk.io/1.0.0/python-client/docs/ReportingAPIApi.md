# openapi_client.ReportingAPIApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_issue_counts**](ReportingAPIApi.md#get_issue_counts) | **POST** /reporting/counts/issues | Get issue counts
[**get_latest_issue_counts**](ReportingAPIApi.md#get_latest_issue_counts) | **POST** /reporting/counts/issues/latest | Get latest issue counts
[**get_latest_project_counts**](ReportingAPIApi.md#get_latest_project_counts) | **POST** /reporting/counts/projects/latest | Get latest project counts
[**get_list_of_issues**](ReportingAPIApi.md#get_list_of_issues) | **POST** /reporting/issues/ | Get list of issues
[**get_list_of_latest_issues**](ReportingAPIApi.md#get_list_of_latest_issues) | **POST** /reporting/issues/latest | Get list of latest issues
[**get_project_counts**](ReportingAPIApi.md#get_project_counts) | **POST** /reporting/counts/projects | Get project counts
[**get_test_counts**](ReportingAPIApi.md#get_test_counts) | **POST** /reporting/counts/tests | Get test counts


# **get_issue_counts**
> GetIssueCounts200Response get_issue_counts(var_from, to, group_by=group_by, get_issue_counts_request=get_issue_counts_request)

Get issue counts



### Example


```python
import openapi_client
from openapi_client.models.get_issue_counts200_response import GetIssueCounts200Response
from openapi_client.models.get_issue_counts_request import GetIssueCountsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    var_from = '2017-07-01' # str | The date you wish to fetch results from, in the format `YYYY-MM-DD`
    to = '2017-07-03' # str | The date you wish to fetch results until, in the format `YYYY-MM-DD`
    group_by = 'severity' # str | The field to group results by (optional)
    get_issue_counts_request = openapi_client.GetIssueCountsRequest() # GetIssueCountsRequest |  (optional)

    try:
        # Get issue counts
        api_response = api_instance.get_issue_counts(var_from, to, group_by=group_by, get_issue_counts_request=get_issue_counts_request)
        print("The response of ReportingAPIApi->get_issue_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_issue_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| The date you wish to fetch results from, in the format &#x60;YYYY-MM-DD&#x60; | 
 **to** | **str**| The date you wish to fetch results until, in the format &#x60;YYYY-MM-DD&#x60; | 
 **group_by** | **str**| The field to group results by | [optional] 
 **get_issue_counts_request** | [**GetIssueCountsRequest**](GetIssueCountsRequest.md)|  | [optional] 

### Return type

[**GetIssueCounts200Response**](GetIssueCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_issue_counts**
> GetIssueCounts200Response get_latest_issue_counts(group_by=group_by, get_issue_counts_request=get_issue_counts_request)

Get latest issue counts



### Example


```python
import openapi_client
from openapi_client.models.get_issue_counts200_response import GetIssueCounts200Response
from openapi_client.models.get_issue_counts_request import GetIssueCountsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    group_by = 'severity' # str | The field to group results by (optional)
    get_issue_counts_request = openapi_client.GetIssueCountsRequest() # GetIssueCountsRequest |  (optional)

    try:
        # Get latest issue counts
        api_response = api_instance.get_latest_issue_counts(group_by=group_by, get_issue_counts_request=get_issue_counts_request)
        print("The response of ReportingAPIApi->get_latest_issue_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_latest_issue_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_by** | **str**| The field to group results by | [optional] 
 **get_issue_counts_request** | [**GetIssueCountsRequest**](GetIssueCountsRequest.md)|  | [optional] 

### Return type

[**GetIssueCounts200Response**](GetIssueCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_latest_project_counts**
> GetProjectCounts200Response get_latest_project_counts(get_project_counts_request=get_project_counts_request)

Get latest project counts



### Example


```python
import openapi_client
from openapi_client.models.get_project_counts200_response import GetProjectCounts200Response
from openapi_client.models.get_project_counts_request import GetProjectCountsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    get_project_counts_request = openapi_client.GetProjectCountsRequest() # GetProjectCountsRequest |  (optional)

    try:
        # Get latest project counts
        api_response = api_instance.get_latest_project_counts(get_project_counts_request=get_project_counts_request)
        print("The response of ReportingAPIApi->get_latest_project_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_latest_project_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_project_counts_request** | [**GetProjectCountsRequest**](GetProjectCountsRequest.md)|  | [optional] 

### Return type

[**GetProjectCounts200Response**](GetProjectCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_list_of_issues**
> GetListOfIssues200Response get_list_of_issues(var_from, to, page=page, per_page=per_page, sort_by=sort_by, order=order, group_by=group_by, get_list_of_issues_request=get_list_of_issues_request)

Get list of issues



### Example


```python
import openapi_client
from openapi_client.models.get_list_of_issues200_response import GetListOfIssues200Response
from openapi_client.models.get_list_of_issues_request import GetListOfIssuesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    var_from = '2017-07-01' # str | The date you wish to fetch results from, in the format `YYYY-MM-DD`
    to = '2017-07-07' # str | The date you wish to fetch results until, in the format `YYYY-MM-DD`
    page = 1 # float | The page of results to request (optional)
    per_page = 100 # float | The number of results to return per page (Maximum: 1000) (optional)
    sort_by = 'issueTitle' # str | The key to sort results by (optional)
    order = 'asc' # str | The direction to sort results. (optional)
    group_by = 'issue' # str | Set to issue to group the same issue in multiple projects (optional)
    get_list_of_issues_request = openapi_client.GetListOfIssuesRequest() # GetListOfIssuesRequest |  (optional)

    try:
        # Get list of issues
        api_response = api_instance.get_list_of_issues(var_from, to, page=page, per_page=per_page, sort_by=sort_by, order=order, group_by=group_by, get_list_of_issues_request=get_list_of_issues_request)
        print("The response of ReportingAPIApi->get_list_of_issues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_list_of_issues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| The date you wish to fetch results from, in the format &#x60;YYYY-MM-DD&#x60; | 
 **to** | **str**| The date you wish to fetch results until, in the format &#x60;YYYY-MM-DD&#x60; | 
 **page** | **float**| The page of results to request | [optional] 
 **per_page** | **float**| The number of results to return per page (Maximum: 1000) | [optional] 
 **sort_by** | **str**| The key to sort results by | [optional] 
 **order** | **str**| The direction to sort results. | [optional] 
 **group_by** | **str**| Set to issue to group the same issue in multiple projects | [optional] 
 **get_list_of_issues_request** | [**GetListOfIssuesRequest**](GetListOfIssuesRequest.md)|  | [optional] 

### Return type

[**GetListOfIssues200Response**](GetListOfIssues200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_list_of_latest_issues**
> GetListOfIssues200Response get_list_of_latest_issues(page=page, per_page=per_page, sort_by=sort_by, order=order, group_by=group_by, get_list_of_issues_request=get_list_of_issues_request)

Get list of latest issues



### Example


```python
import openapi_client
from openapi_client.models.get_list_of_issues200_response import GetListOfIssues200Response
from openapi_client.models.get_list_of_issues_request import GetListOfIssuesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    page = 1 # float | The page of results to request (optional)
    per_page = 100 # float | The number of results to return per page (Maximum: 1000) (optional)
    sort_by = 'issueTitle' # str | The key to sort results by (optional)
    order = 'asc' # str | The direction to sort results. (optional)
    group_by = 'issue' # str | Set to issue to group the same issue in multiple projects (optional)
    get_list_of_issues_request = openapi_client.GetListOfIssuesRequest() # GetListOfIssuesRequest |  (optional)

    try:
        # Get list of latest issues
        api_response = api_instance.get_list_of_latest_issues(page=page, per_page=per_page, sort_by=sort_by, order=order, group_by=group_by, get_list_of_issues_request=get_list_of_issues_request)
        print("The response of ReportingAPIApi->get_list_of_latest_issues:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_list_of_latest_issues: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **float**| The page of results to request | [optional] 
 **per_page** | **float**| The number of results to return per page (Maximum: 1000) | [optional] 
 **sort_by** | **str**| The key to sort results by | [optional] 
 **order** | **str**| The direction to sort results. | [optional] 
 **group_by** | **str**| Set to issue to group the same issue in multiple projects | [optional] 
 **get_list_of_issues_request** | [**GetListOfIssuesRequest**](GetListOfIssuesRequest.md)|  | [optional] 

### Return type

[**GetListOfIssues200Response**](GetListOfIssues200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_counts**
> GetProjectCounts200Response get_project_counts(var_from, to, get_project_counts_request=get_project_counts_request)

Get project counts



### Example


```python
import openapi_client
from openapi_client.models.get_project_counts200_response import GetProjectCounts200Response
from openapi_client.models.get_project_counts_request import GetProjectCountsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    var_from = '2017-07-01' # str | The date you wish to fetch results from, in the format `YYYY-MM-DD`
    to = '2017-07-03' # str | The date you wish to fetch results until, in the format `YYYY-MM-DD`
    get_project_counts_request = openapi_client.GetProjectCountsRequest() # GetProjectCountsRequest |  (optional)

    try:
        # Get project counts
        api_response = api_instance.get_project_counts(var_from, to, get_project_counts_request=get_project_counts_request)
        print("The response of ReportingAPIApi->get_project_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_project_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| The date you wish to fetch results from, in the format &#x60;YYYY-MM-DD&#x60; | 
 **to** | **str**| The date you wish to fetch results until, in the format &#x60;YYYY-MM-DD&#x60; | 
 **get_project_counts_request** | [**GetProjectCountsRequest**](GetProjectCountsRequest.md)|  | [optional] 

### Return type

[**GetProjectCounts200Response**](GetProjectCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_test_counts**
> GetTestCounts200Response get_test_counts(var_from, to, group_by=group_by, get_test_counts_request=get_test_counts_request)

Get test counts



### Example


```python
import openapi_client
from openapi_client.models.get_test_counts200_response import GetTestCounts200Response
from openapi_client.models.get_test_counts_request import GetTestCountsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReportingAPIApi(api_client)
    var_from = '2017-07-01' # str | The date you wish to count tests from, in the format `YYYY-MM-DD`
    to = '2017-07-03' # str | The date you wish to count tests until, in the format `YYYY-MM-DD`
    group_by = 'isPrivate' # str | The field to group results by (optional)
    get_test_counts_request = openapi_client.GetTestCountsRequest() # GetTestCountsRequest |  (optional)

    try:
        # Get test counts
        api_response = api_instance.get_test_counts(var_from, to, group_by=group_by, get_test_counts_request=get_test_counts_request)
        print("The response of ReportingAPIApi->get_test_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportingAPIApi->get_test_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_from** | **str**| The date you wish to count tests from, in the format &#x60;YYYY-MM-DD&#x60; | 
 **to** | **str**| The date you wish to count tests until, in the format &#x60;YYYY-MM-DD&#x60; | 
 **group_by** | **str**| The field to group results by | [optional] 
 **get_test_counts_request** | [**GetTestCountsRequest**](GetTestCountsRequest.md)|  | [optional] 

### Return type

[**GetTestCounts200Response**](GetTestCounts200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

