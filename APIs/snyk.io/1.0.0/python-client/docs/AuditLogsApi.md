# openapi_client.AuditLogsApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_group_level_audit_logs**](AuditLogsApi.md#get_group_level_audit_logs) | **POST** /group/{groupId}/audit | Get group level audit logs
[**get_organization_level_audit_logs**](AuditLogsApi.md#get_organization_level_audit_logs) | **POST** /org/{orgId}/audit | Get organization level audit logs


# **get_group_level_audit_logs**
> get_group_level_audit_logs(group_id, var_from=var_from, to=to, page=page, sort_order=sort_order, get_group_level_audit_logs_request=get_group_level_audit_logs_request)

Get group level audit logs



### Example


```python
import openapi_client
from openapi_client.models.get_group_level_audit_logs_request import GetGroupLevelAuditLogsRequest
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
    api_instance = openapi_client.AuditLogsApi(api_client)
    group_id = '4a18d42f-0706-4ad0-b127-24078731fbea' # str | The group ID. The `API_KEY` must have access to this group.
    var_from = '2019-07-01' # str | The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months. (optional)
    to = '2019-07-07' # str | The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months. (optional)
    page = 1 # float | The page of results to request. Audit logs are returned in page sizes of 100 (optional)
    sort_order = 'ASC' # str | The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`. (optional)
    get_group_level_audit_logs_request = openapi_client.GetGroupLevelAuditLogsRequest() # GetGroupLevelAuditLogsRequest |  (optional)

    try:
        # Get group level audit logs
        api_instance.get_group_level_audit_logs(group_id, var_from=var_from, to=to, page=page, sort_order=sort_order, get_group_level_audit_logs_request=get_group_level_audit_logs_request)
    except Exception as e:
        print("Exception when calling AuditLogsApi->get_group_level_audit_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_id** | **str**| The group ID. The &#x60;API_KEY&#x60; must have access to this group. | 
 **var_from** | **str**| The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months. | [optional] 
 **to** | **str**| The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months. | [optional] 
 **page** | **float**| The page of results to request. Audit logs are returned in page sizes of 100 | [optional] 
 **sort_order** | **str**| The sort order of the returned audit logs by date. Values: &#x60;ASC&#x60;, &#x60;DESC&#x60;. Default: &#x60;DESC&#x60;. | [optional] 
 **get_group_level_audit_logs_request** | [**GetGroupLevelAuditLogsRequest**](GetGroupLevelAuditLogsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_level_audit_logs**
> get_organization_level_audit_logs(org_id, var_from=var_from, to=to, page=page, sort_order=sort_order, get_organization_level_audit_logs_request=get_organization_level_audit_logs_request)

Get organization level audit logs



### Example


```python
import openapi_client
from openapi_client.models.get_organization_level_audit_logs_request import GetOrganizationLevelAuditLogsRequest
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
    api_instance = openapi_client.AuditLogsApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbea' # str | The organization ID. The `API_KEY` must have access to this organization.
    var_from = '2019-07-01' # str | The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months. (optional)
    to = '2019-07-07' # str | The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months. (optional)
    page = 1 # float | The page of results to request. Audit logs are returned in page sizes of 100. (optional)
    sort_order = 'ASC' # str | The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`. (optional)
    get_organization_level_audit_logs_request = openapi_client.GetOrganizationLevelAuditLogsRequest() # GetOrganizationLevelAuditLogsRequest |  (optional)

    try:
        # Get organization level audit logs
        api_instance.get_organization_level_audit_logs(org_id, var_from=var_from, to=to, page=page, sort_order=sort_order, get_organization_level_audit_logs_request=get_organization_level_audit_logs_request)
    except Exception as e:
        print("Exception when calling AuditLogsApi->get_organization_level_audit_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **var_from** | **str**| The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months. | [optional] 
 **to** | **str**| The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months. | [optional] 
 **page** | **float**| The page of results to request. Audit logs are returned in page sizes of 100. | [optional] 
 **sort_order** | **str**| The sort order of the returned audit logs by date. Values: &#x60;ASC&#x60;, &#x60;DESC&#x60;. Default: &#x60;DESC&#x60;. | [optional] 
 **get_organization_level_audit_logs_request** | [**GetOrganizationLevelAuditLogsRequest**](GetOrganizationLevelAuditLogsRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * Link -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

