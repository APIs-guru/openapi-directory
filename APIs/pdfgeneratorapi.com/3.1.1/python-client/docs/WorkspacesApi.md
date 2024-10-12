# openapi_client.WorkspacesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_workspace**](WorkspacesApi.md#delete_workspace) | **DELETE** /workspaces/workspaceId | Delete workspace
[**get_workspace**](WorkspacesApi.md#get_workspace) | **GET** /workspaces/workspaceId | Get workspace


# **delete_workspace**
> DeleteTemplate200Response delete_workspace(workspace_id)

Delete workspace

Deletes the workspace

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.delete_template200_response import DeleteTemplate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    workspace_id = 'demo.example@actualreports.com' # str | Workspace identifier

    try:
        # Delete workspace
        api_response = api_instance.delete_workspace(workspace_id)
        print("The response of WorkspacesApi->delete_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->delete_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace identifier | 

### Return type

[**DeleteTemplate200Response**](DeleteTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successfully executed. |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workspace**
> GetWorkspace200Response get_workspace(workspace_id)

Get workspace

Returns workspace information

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.get_workspace200_response import GetWorkspace200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspacesApi(api_client)
    workspace_id = 'demo.example@actualreports.com' # str | Workspace identifier

    try:
        # Get workspace
        api_response = api_instance.get_workspace(workspace_id)
        print("The response of WorkspacesApi->get_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspacesApi->get_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace identifier | 

### Return type

[**GetWorkspace200Response**](GetWorkspace200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workspace information |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

