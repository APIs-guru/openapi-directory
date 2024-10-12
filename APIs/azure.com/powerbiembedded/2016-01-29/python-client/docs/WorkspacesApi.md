# openapi_client.WorkspacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspaces_list**](WorkspacesApi.md#workspaces_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBI/workspaceCollections/{workspaceCollectionName}/workspaces | 


# **workspaces_list**
> WorkspaceList workspaces_list(subscription_id, resource_group_name, workspace_collection_name, api_version)



Retrieves all existing Power BI workspaces in the specified workspace collection.

### Example


```python
import openapi_client
from openapi_client.models.workspace_list import WorkspaceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Azure resource group
    workspace_collection_name = 'workspace_collection_name_example' # str | Power BI Embedded Workspace Collection name
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.workspaces_list(subscription_id, resource_group_name, workspace_collection_name, api_version)
        print("The response of WorkspacesApi->workspaces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->workspaces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Azure resource group | 
 **workspace_collection_name** | **str**| Power BI Embedded Workspace Collection name | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**WorkspaceList**](WorkspaceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get workspaces completed successfully |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

