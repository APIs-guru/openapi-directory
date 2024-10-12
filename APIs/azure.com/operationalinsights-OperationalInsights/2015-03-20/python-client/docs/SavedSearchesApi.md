# openapi_client.SavedSearchesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**saved_searches_create_or_update**](SavedSearchesApi.md#saved_searches_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId} | 
[**saved_searches_delete**](SavedSearchesApi.md#saved_searches_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId} | 
[**saved_searches_get**](SavedSearchesApi.md#saved_searches_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId} | 
[**saved_searches_list_by_workspace**](SavedSearchesApi.md#saved_searches_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches | 


# **saved_searches_create_or_update**
> SavedSearch saved_searches_create_or_update(subscription_id, resource_group_name, workspace_name, saved_search_id, api_version, parameters)



Creates or updates a saved search for a given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.saved_search import SavedSearch
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
    api_instance = openapi_client.SavedSearchesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    saved_search_id = 'saved_search_id_example' # str | The id of the saved search.
    api_version = 'api_version_example' # str | The client API version.
    parameters = openapi_client.SavedSearch() # SavedSearch | The parameters required to save a search.

    try:
        api_response = api_instance.saved_searches_create_or_update(subscription_id, resource_group_name, workspace_name, saved_search_id, api_version, parameters)
        print("The response of SavedSearchesApi->saved_searches_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SavedSearchesApi->saved_searches_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription ID. | 
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **saved_search_id** | **str**| The id of the saved search. | 
 **api_version** | **str**| The client API version. | 
 **parameters** | [**SavedSearch**](SavedSearch.md)| The parameters required to save a search. | 

### Return type

[**SavedSearch**](SavedSearch.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saved_searches_delete**
> saved_searches_delete(subscription_id, resource_group_name, workspace_name, saved_search_id, api_version)



Deletes the specified saved search in a given workspace.

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
    api_instance = openapi_client.SavedSearchesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    saved_search_id = 'saved_search_id_example' # str | The id of the saved search.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.saved_searches_delete(subscription_id, resource_group_name, workspace_name, saved_search_id, api_version)
    except Exception as e:
        print("Exception when calling SavedSearchesApi->saved_searches_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription ID. | 
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **saved_search_id** | **str**| The id of the saved search. | 
 **api_version** | **str**| The client API version. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saved_searches_get**
> SavedSearch saved_searches_get(subscription_id, resource_group_name, workspace_name, saved_search_id, api_version)



Gets the specified saved search for a given workspace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.saved_search import SavedSearch
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
    api_instance = openapi_client.SavedSearchesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    saved_search_id = 'saved_search_id_example' # str | The id of the saved search.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.saved_searches_get(subscription_id, resource_group_name, workspace_name, saved_search_id, api_version)
        print("The response of SavedSearchesApi->saved_searches_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SavedSearchesApi->saved_searches_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription ID. | 
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **saved_search_id** | **str**| The id of the saved search. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**SavedSearch**](SavedSearch.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK response definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saved_searches_list_by_workspace**
> SavedSearchesListResult saved_searches_list_by_workspace(resource_group_name, workspace_name, api_version, subscription_id)



Gets the saved searches for a given Log Analytics Workspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.saved_searches_list_result import SavedSearchesListResult
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
    api_instance = openapi_client.SavedSearchesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The Resource Group name.
    workspace_name = 'workspace_name_example' # str | The Log Analytics Workspace name.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | The Subscription ID.

    try:
        api_response = api_instance.saved_searches_list_by_workspace(resource_group_name, workspace_name, api_version, subscription_id)
        print("The response of SavedSearchesApi->saved_searches_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SavedSearchesApi->saved_searches_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The Resource Group name. | 
 **workspace_name** | **str**| The Log Analytics Workspace name. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| The Subscription ID. | 

### Return type

[**SavedSearchesListResult**](SavedSearchesListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the list of saved searches for the given Log Analytics Workspace. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

