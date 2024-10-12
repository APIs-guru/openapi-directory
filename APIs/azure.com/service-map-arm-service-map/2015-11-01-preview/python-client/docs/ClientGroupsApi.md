# openapi_client.ClientGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client_groups_get**](ClientGroupsApi.md#client_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/clientGroups/{clientGroupName} | 
[**client_groups_get_members_count**](ClientGroupsApi.md#client_groups_get_members_count) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/clientGroups/{clientGroupName}/membersCount | 
[**client_groups_list_members**](ClientGroupsApi.md#client_groups_list_members) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/clientGroups/{clientGroupName}/members | 


# **client_groups_get**
> ClientGroup client_groups_get(subscription_id, resource_group_name, workspace_name, api_version, client_group_name, start_time=start_time, end_time=end_time)



Retrieves the specified client group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.client_group import ClientGroup
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
    api_instance = openapi_client.ClientGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    client_group_name = 'client_group_name_example' # str | Client Group resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.client_groups_get(subscription_id, resource_group_name, workspace_name, api_version, client_group_name, start_time=start_time, end_time=end_time)
        print("The response of ClientGroupsApi->client_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientGroupsApi->client_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **client_group_name** | **str**| Client Group resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

### Return type

[**ClientGroup**](ClientGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_groups_get_members_count**
> ClientGroupMembersCount client_groups_get_members_count(subscription_id, resource_group_name, workspace_name, api_version, client_group_name, start_time=start_time, end_time=end_time)



Returns the approximate number of members in the client group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.client_group_members_count import ClientGroupMembersCount
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
    api_instance = openapi_client.ClientGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    client_group_name = 'client_group_name_example' # str | Client Group resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.client_groups_get_members_count(subscription_id, resource_group_name, workspace_name, api_version, client_group_name, start_time=start_time, end_time=end_time)
        print("The response of ClientGroupsApi->client_groups_get_members_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientGroupsApi->client_groups_get_members_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **client_group_name** | **str**| Client Group resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

### Return type

[**ClientGroupMembersCount**](ClientGroupMembersCount.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_groups_list_members**
> ClientGroupMembersCollection client_groups_list_members(subscription_id, resource_group_name, workspace_name, api_version, client_group_name, start_time=start_time, end_time=end_time, top=top)



Returns the members of the client group during the specified time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.client_group_members_collection import ClientGroupMembersCollection
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
    api_instance = openapi_client.ClientGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    client_group_name = 'client_group_name_example' # str | Client Group resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)
    top = 56 # int | Page size to use. When not specified, the default page size is 100 records. (optional)

    try:
        api_response = api_instance.client_groups_list_members(subscription_id, resource_group_name, workspace_name, api_version, client_group_name, start_time=start_time, end_time=end_time, top=top)
        print("The response of ClientGroupsApi->client_groups_list_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientGroupsApi->client_groups_list_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **client_group_name** | **str**| Client Group resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 
 **top** | **int**| Page size to use. When not specified, the default page size is 100 records. | [optional] 

### Return type

[**ClientGroupMembersCollection**](ClientGroupMembersCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

