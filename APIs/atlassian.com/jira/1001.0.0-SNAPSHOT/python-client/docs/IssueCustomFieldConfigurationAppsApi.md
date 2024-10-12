# openapi_client.IssueCustomFieldConfigurationAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_custom_field_configuration**](IssueCustomFieldConfigurationAppsApi.md#get_custom_field_configuration) | **GET** /rest/api/3/app/field/{fieldIdOrKey}/context/configuration | Get custom field configurations
[**update_custom_field_configuration**](IssueCustomFieldConfigurationAppsApi.md#update_custom_field_configuration) | **PUT** /rest/api/3/app/field/{fieldIdOrKey}/context/configuration | Update custom field configurations


# **get_custom_field_configuration**
> PageBeanContextualConfiguration get_custom_field_configuration(field_id_or_key, id=id, field_context_id=field_context_id, issue_id=issue_id, project_key_or_id=project_key_or_id, issue_type_id=issue_type_id, start_at=start_at, max_results=max_results)

Get custom field configurations

Returns a [paginated](#pagination) list of configurations for a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).  The result can be filtered by one of these criteria:   *  `id`.  *  `fieldContextId`.  *  `issueId`.  *  `projectKeyOrId` and `issueTypeId`.  Otherwise, all configurations are returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_contextual_configuration import PageBeanContextualConfiguration
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
    api_instance = openapi_client.IssueCustomFieldConfigurationAppsApi(api_client)
    field_id_or_key = 'field_id_or_key_example' # str | The ID or key of the custom field, for example `customfield_10000`.
    id = [56] # List[int] | The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: `id=10000&id=10001`. Can't be provided with `fieldContextId`, `issueId`, `projectKeyOrId`, or `issueTypeId`. (optional)
    field_context_id = [56] # List[int] | The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: `fieldContextId=10000&fieldContextId=10001`. Can't be provided with `id`, `issueId`, `projectKeyOrId`, or `issueTypeId`. (optional)
    issue_id = 56 # int | The ID of the issue to filter results by. If the issue doesn't exist, an empty list is returned. Can't be provided with `projectKeyOrId`, or `issueTypeId`. (optional)
    project_key_or_id = 'project_key_or_id_example' # str | The ID or key of the project to filter results by. Must be provided with `issueTypeId`. Can't be provided with `issueId`. (optional)
    issue_type_id = 'issue_type_id_example' # str | The ID of the issue type to filter results by. Must be provided with `projectKeyOrId`. Can't be provided with `issueId`. (optional)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 100 # int | The maximum number of items to return per page. (optional) (default to 100)

    try:
        # Get custom field configurations
        api_response = api_instance.get_custom_field_configuration(field_id_or_key, id=id, field_context_id=field_context_id, issue_id=issue_id, project_key_or_id=project_key_or_id, issue_type_id=issue_type_id, start_at=start_at, max_results=max_results)
        print("The response of IssueCustomFieldConfigurationAppsApi->get_custom_field_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldConfigurationAppsApi->get_custom_field_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id_or_key** | **str**| The ID or key of the custom field, for example &#x60;customfield_10000&#x60;. | 
 **id** | [**List[int]**](int.md)| The list of configuration IDs. To include multiple configurations, separate IDs with an ampersand: &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. Can&#39;t be provided with &#x60;fieldContextId&#x60;, &#x60;issueId&#x60;, &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [optional] 
 **field_context_id** | [**List[int]**](int.md)| The list of field context IDs. To include multiple field contexts, separate IDs with an ampersand: &#x60;fieldContextId&#x3D;10000&amp;fieldContextId&#x3D;10001&#x60;. Can&#39;t be provided with &#x60;id&#x60;, &#x60;issueId&#x60;, &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [optional] 
 **issue_id** | **int**| The ID of the issue to filter results by. If the issue doesn&#39;t exist, an empty list is returned. Can&#39;t be provided with &#x60;projectKeyOrId&#x60;, or &#x60;issueTypeId&#x60;. | [optional] 
 **project_key_or_id** | **str**| The ID or key of the project to filter results by. Must be provided with &#x60;issueTypeId&#x60;. Can&#39;t be provided with &#x60;issueId&#x60;. | [optional] 
 **issue_type_id** | **str**| The ID of the issue type to filter results by. Must be provided with &#x60;projectKeyOrId&#x60;. Can&#39;t be provided with &#x60;issueId&#x60;. | [optional] 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 100]

### Return type

[**PageBeanContextualConfiguration**](PageBeanContextualConfiguration.md)

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
**403** | Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_custom_field_configuration**
> object update_custom_field_configuration(field_id_or_key, custom_field_configurations)

Update custom field configurations

Update the configuration for contexts of a custom field created by a [Forge app](https://developer.atlassian.com/platform/forge/).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). Jira permissions are not required for the Forge app that created the custom field.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.custom_field_configurations import CustomFieldConfigurations
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
    api_instance = openapi_client.IssueCustomFieldConfigurationAppsApi(api_client)
    field_id_or_key = 'field_id_or_key_example' # str | The ID or key of the custom field, for example `customfield_10000`.
    custom_field_configurations = {"configurations":[{"id":"10000"},{"configuration":{"maxValue":10000,"minValue":0},"id":"10001","schema":{"properties":{"amount":{"type":"number"},"currency":{"type":"string"}},"required":["amount","currency"]}}]} # CustomFieldConfigurations | 

    try:
        # Update custom field configurations
        api_response = api_instance.update_custom_field_configuration(field_id_or_key, custom_field_configurations)
        print("The response of IssueCustomFieldConfigurationAppsApi->update_custom_field_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldConfigurationAppsApi->update_custom_field_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id_or_key** | **str**| The ID or key of the custom field, for example &#x60;customfield_10000&#x60;. | 
 **custom_field_configurations** | [**CustomFieldConfigurations**](CustomFieldConfigurations.md)|  | 

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
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user is not a Jira admin or the request is not authenticated as from the app that provided the field. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

