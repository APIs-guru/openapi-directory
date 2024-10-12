# openapi_client.UIModificationsAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_ui_modification**](UIModificationsAppsApi.md#create_ui_modification) | **POST** /rest/api/3/uiModifications | Create UI modification
[**delete_ui_modification**](UIModificationsAppsApi.md#delete_ui_modification) | **DELETE** /rest/api/3/uiModifications/{uiModificationId} | Delete UI modification
[**get_ui_modifications**](UIModificationsAppsApi.md#get_ui_modifications) | **GET** /rest/api/3/uiModifications | Get UI modifications
[**update_ui_modification**](UIModificationsAppsApi.md#update_ui_modification) | **PUT** /rest/api/3/uiModifications/{uiModificationId} | Update UI modification


# **create_ui_modification**
> UiModificationIdentifiers create_ui_modification(create_ui_modification_details)

Create UI modification

Creates a UI modification. UI modification can only be created by Forge apps.  Each app can define up to 100 UI modifications. Each UI modification can define up to 1000 contexts.  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.create_ui_modification_details import CreateUiModificationDetails
from openapi_client.models.ui_modification_identifiers import UiModificationIdentifiers
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
    api_instance = openapi_client.UIModificationsAppsApi(api_client)
    create_ui_modification_details = {"contexts":[{"issueTypeId":"10000","projectId":"10000","viewType":"GIC"},{"issueTypeId":"10001","projectId":"10000","viewType":"GIC"}],"data":"{field: 'Story Points', config: {hidden: false}}","description":"Reveals Story Points field when any Sprint is selected.","name":"Reveal Story Points"} # CreateUiModificationDetails | Details of the UI modification.

    try:
        # Create UI modification
        api_response = api_instance.create_ui_modification(create_ui_modification_details)
        print("The response of UIModificationsAppsApi->create_ui_modification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UIModificationsAppsApi->create_ui_modification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_ui_modification_details** | [**CreateUiModificationDetails**](CreateUiModificationDetails.md)| Details of the UI modification. | 

### Return type

[**UiModificationIdentifiers**](UiModificationIdentifiers.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the UI modification is created. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the request is not from a Forge app. |  -  |
**404** | Returned if a project or an issue type in the context are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_ui_modification**
> object delete_ui_modification(ui_modification_id)

Delete UI modification

Deletes a UI modification. All the contexts that belong to the UI modification are deleted too. UI modification can only be deleted by Forge apps.  **[Permissions](#permissions) required:** None.

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
    api_instance = openapi_client.UIModificationsAppsApi(api_client)
    ui_modification_id = 'ui_modification_id_example' # str | The ID of the UI modification.

    try:
        # Delete UI modification
        api_response = api_instance.delete_ui_modification(ui_modification_id)
        print("The response of UIModificationsAppsApi->delete_ui_modification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UIModificationsAppsApi->delete_ui_modification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ui_modification_id** | **str**| The ID of the UI modification. | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the UI modification is deleted. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the request is not from a Forge app. |  -  |
**404** | Returned if the UI modification is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_ui_modifications**
> PageBeanUiModificationDetails get_ui_modifications(start_at=start_at, max_results=max_results, expand=expand)

Get UI modifications

Gets UI modifications. UI modifications can only be retrieved by Forge apps.  **[Permissions](#permissions) required:** None.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_ui_modification_details import PageBeanUiModificationDetails
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
    api_instance = openapi_client.UIModificationsAppsApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    expand = 'expand_example' # str | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `data` Returns UI modification data.  *  `contexts` Returns UI modification contexts. (optional)

    try:
        # Get UI modifications
        api_response = api_instance.get_ui_modifications(start_at=start_at, max_results=max_results, expand=expand)
        print("The response of UIModificationsAppsApi->get_ui_modifications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UIModificationsAppsApi->get_ui_modifications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **expand** | **str**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;data&#x60; Returns UI modification data.  *  &#x60;contexts&#x60; Returns UI modification contexts. | [optional] 

### Return type

[**PageBeanUiModificationDetails**](PageBeanUiModificationDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the request is not from a Forge app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_ui_modification**
> object update_ui_modification(ui_modification_id, update_ui_modification_details)

Update UI modification

Updates a UI modification. UI modification can only be updated by Forge apps.  Each UI modification can define up to 1000 contexts.  **[Permissions](#permissions) required:**   *  *None* if the UI modification is created without contexts.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for one or more projects, if the UI modification is created with contexts.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.update_ui_modification_details import UpdateUiModificationDetails
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
    api_instance = openapi_client.UIModificationsAppsApi(api_client)
    ui_modification_id = 'ui_modification_id_example' # str | The ID of the UI modification.
    update_ui_modification_details = {"contexts":[{"issueTypeId":"10000","projectId":"10000","viewType":"GIC"},{"issueTypeId":"10001","projectId":"10000","viewType":"GIC"}],"data":"{field: 'Story Points', config: {hidden: true}}","name":"Updated Reveal Story Points"} # UpdateUiModificationDetails | Details of the UI modification.

    try:
        # Update UI modification
        api_response = api_instance.update_ui_modification(ui_modification_id, update_ui_modification_details)
        print("The response of UIModificationsAppsApi->update_ui_modification:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UIModificationsAppsApi->update_ui_modification: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ui_modification_id** | **str**| The ID of the UI modification. | 
 **update_ui_modification_details** | [**UpdateUiModificationDetails**](UpdateUiModificationDetails.md)| Details of the UI modification. | 

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
**204** | Returned if the UI modification is updated. |  -  |
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the request is not from a Forge app. |  -  |
**404** | Returned if the UI modification, a project or an issue type in the context are not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

