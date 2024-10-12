# openapi_client.IssueCustomFieldValuesAppsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_custom_field_value**](IssueCustomFieldValuesAppsApi.md#update_custom_field_value) | **PUT** /rest/api/3/app/field/{fieldIdOrKey}/value | Update custom field value
[**update_multiple_custom_field_values**](IssueCustomFieldValuesAppsApi.md#update_multiple_custom_field_values) | **POST** /rest/api/3/app/field/value | Update custom fields


# **update_custom_field_value**
> object update_custom_field_value(field_id_or_key, custom_field_value_update_details, generate_changelog=generate_changelog)

Update custom field value

Updates the value of a custom field on one or more issues. Custom fields can only be updated by the Forge app that created them.  **[Permissions](#permissions) required:** Only the app that created the custom field can update its values with this operation.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.custom_field_value_update_details import CustomFieldValueUpdateDetails
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
    api_instance = openapi_client.IssueCustomFieldValuesAppsApi(api_client)
    field_id_or_key = 'field_id_or_key_example' # str | The ID or key of the custom field. For example, `customfield_10010`.
    custom_field_value_update_details = {"updates":[{"issueIds":[10010],"value":"new value"}]} # CustomFieldValueUpdateDetails | 
    generate_changelog = True # bool | Whether to generate a changelog for this update. (optional) (default to True)

    try:
        # Update custom field value
        api_response = api_instance.update_custom_field_value(field_id_or_key, custom_field_value_update_details, generate_changelog=generate_changelog)
        print("The response of IssueCustomFieldValuesAppsApi->update_custom_field_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldValuesAppsApi->update_custom_field_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id_or_key** | **str**| The ID or key of the custom field. For example, &#x60;customfield_10010&#x60;. | 
 **custom_field_value_update_details** | [**CustomFieldValueUpdateDetails**](CustomFieldValueUpdateDetails.md)|  | 
 **generate_changelog** | **bool**| Whether to generate a changelog for this update. | [optional] [default to True]

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if the request is not authenticated as the app that provided the field. |  -  |
**404** | Returned if the field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_multiple_custom_field_values**
> object update_multiple_custom_field_values(multiple_custom_field_values_update_details, generate_changelog=generate_changelog)

Update custom fields

Updates the value of one or more custom fields on one or more issues. Combinations of custom field and issue should be unique within the request. Custom fields can only be updated by the Forge app that created them.  **[Permissions](#permissions) required:** Only the app that created the custom field can update its values with this operation.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.multiple_custom_field_values_update_details import MultipleCustomFieldValuesUpdateDetails
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
    api_instance = openapi_client.IssueCustomFieldValuesAppsApi(api_client)
    multiple_custom_field_values_update_details = {"updates":[{"customField":"customfield_10010","issueIds":[10010,10011],"value":"new value"},{"customField":"customfield_10011","issueIds":[10010],"value":1000}]} # MultipleCustomFieldValuesUpdateDetails | 
    generate_changelog = True # bool | Whether to generate a changelog for this update. (optional) (default to True)

    try:
        # Update custom fields
        api_response = api_instance.update_multiple_custom_field_values(multiple_custom_field_values_update_details, generate_changelog=generate_changelog)
        print("The response of IssueCustomFieldValuesAppsApi->update_multiple_custom_field_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueCustomFieldValuesAppsApi->update_multiple_custom_field_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiple_custom_field_values_update_details** | [**MultipleCustomFieldValuesUpdateDetails**](MultipleCustomFieldValuesUpdateDetails.md)|  | 
 **generate_changelog** | **bool**| Whether to generate a changelog for this update. | [optional] [default to True]

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if the request is not authenticated as the app that provided all the fields. |  -  |
**404** | Returned if any field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

