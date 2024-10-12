# openapi_client.IssueNavigatorSettingsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_issue_navigator_default_columns**](IssueNavigatorSettingsApi.md#get_issue_navigator_default_columns) | **GET** /rest/api/3/settings/columns | Get issue navigator default columns
[**set_issue_navigator_default_columns**](IssueNavigatorSettingsApi.md#set_issue_navigator_default_columns) | **PUT** /rest/api/3/settings/columns | Set issue navigator default columns


# **get_issue_navigator_default_columns**
> List[ColumnItem] get_issue_navigator_default_columns()

Get issue navigator default columns

Returns the default issue navigator columns.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.column_item import ColumnItem
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

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueNavigatorSettingsApi(api_client)

    try:
        # Get issue navigator default columns
        api_response = api_instance.get_issue_navigator_default_columns()
        print("The response of IssueNavigatorSettingsApi->get_issue_navigator_default_columns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueNavigatorSettingsApi->get_issue_navigator_default_columns: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ColumnItem]**](ColumnItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_issue_navigator_default_columns**
> object set_issue_navigator_default_columns(request_body=request_body)

Set issue navigator default columns

Sets the default issue navigator columns.  The `columns` parameter accepts a navigable field value and is expressed as HTML form data. To specify multiple columns, pass multiple `columns` parameters. For example, in curl:  `curl -X PUT -d columns=summary -d columns=description https://your-domain.atlassian.net/rest/api/3/settings/columns`  If no column details are sent, then all default columns are removed.  A navigable field is one that can be used as a column on the issue navigator. Find details of navigable issue columns using [Get fields](#api-rest-api-3-field-get).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

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

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueNavigatorSettingsApi(api_client)
    request_body = ['request_body_example'] # List[str] | A navigable field value. (optional)

    try:
        # Set issue navigator default columns
        api_response = api_instance.set_issue_navigator_default_columns(request_body=request_body)
        print("The response of IssueNavigatorSettingsApi->set_issue_navigator_default_columns:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueNavigatorSettingsApi->set_issue_navigator_default_columns: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_body** | [**List[str]**](str.md)| A navigable field value. | [optional] 

### Return type

**object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if invalid parameters are passed. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if a navigable field value is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

