# openapi_client.ApiIssuesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_issue_create_or_update**](ApiIssuesApi.md#api_issue_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId} | 
[**api_issue_delete**](ApiIssuesApi.md#api_issue_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId} | 
[**api_issue_get**](ApiIssuesApi.md#api_issue_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId} | 
[**api_issue_head**](ApiIssuesApi.md#api_issue_head) | **HEAD** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId} | 
[**api_issues_list_by_service**](ApiIssuesApi.md#api_issues_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues | 


# **api_issue_create_or_update**
> IssueContract api_issue_create_or_update(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id, parameters, if_match=if_match)



Creates a new Issue for an API or updates an existing one.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.issue_contract import IssueContract
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
    api_instance = openapi_client.ApiIssuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.IssueContract() # IssueContract | Create parameters.
    if_match = 'if_match_example' # str | ETag of the Issue Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. (optional)

    try:
        api_response = api_instance.api_issue_create_or_update(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of ApiIssuesApi->api_issue_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiIssuesApi->api_issue_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**IssueContract**](IssueContract.md)| Create parameters. | 
 **if_match** | **str**| ETag of the Issue Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | [optional] 

### Return type

[**IssueContract**](IssueContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Issue was successfully updated. |  -  |
**201** | Issue was successfully created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_delete**
> api_issue_delete(resource_group_name, service_name, api_id, issue_id, if_match, api_version, subscription_id)



Deletes the specified Issue from an API.

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
    api_instance = openapi_client.ApiIssuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | ETag of the Issue Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_issue_delete(resource_group_name, service_name, api_id, issue_id, if_match, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiIssuesApi->api_issue_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| ETag of the Issue Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**204** | The Issue was successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_get**
> IssueContract api_issue_get(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id)



Gets the details of the Issue for an API specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.issue_contract import IssueContract
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
    api_instance = openapi_client.ApiIssuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.api_issue_get(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id)
        print("The response of ApiIssuesApi->api_issue_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiIssuesApi->api_issue_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**IssueContract**](IssueContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified Issue entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issue_head**
> api_issue_head(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id)



Gets the entity state (Etag) version of the Issue for an API specified by its identifier.

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
    api_instance = openapi_client.ApiIssuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    issue_id = 'issue_id_example' # str | Issue identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.api_issue_head(resource_group_name, service_name, api_id, issue_id, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ApiIssuesApi->api_issue_head: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **issue_id** | **str**| Issue identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | Operation completed successfully. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_issues_list_by_service**
> IssueCollection api_issues_list_by_service(resource_group_name, service_name, api_id, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists all issues associated with the specified API.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.issue_collection import IssueCollection
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
    api_instance = openapi_client.ApiIssuesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_id = 'api_id_example' # str | API identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith | | state        | eq                     |                                   | | userId          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.api_issues_list_by_service(resource_group_name, service_name, api_id, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of ApiIssuesApi->api_issues_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApiIssuesApi->api_issues_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_id** | **str**| API identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions               | |-------------|------------------------|-----------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith | | state        | eq                     |                                   | | userId          | ge, le, eq, ne, gt, lt | substringof, startswith, endswith | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**IssueCollection**](IssueCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paged Result response of issues for the API. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

