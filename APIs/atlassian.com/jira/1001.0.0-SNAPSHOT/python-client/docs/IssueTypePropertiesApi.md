# openapi_client.IssueTypePropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_issue_type_property**](IssueTypePropertiesApi.md#delete_issue_type_property) | **DELETE** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Delete issue type property
[**get_issue_type_property**](IssueTypePropertiesApi.md#get_issue_type_property) | **GET** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Get issue type property
[**get_issue_type_property_keys**](IssueTypePropertiesApi.md#get_issue_type_property_keys) | **GET** /rest/api/3/issuetype/{issueTypeId}/properties | Get issue type property keys
[**set_issue_type_property**](IssueTypePropertiesApi.md#set_issue_type_property) | **PUT** /rest/api/3/issuetype/{issueTypeId}/properties/{propertyKey} | Set issue type property


# **delete_issue_type_property**
> delete_issue_type_property(issue_type_id, property_key)

Delete issue type property

Deletes the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueTypePropertiesApi(api_client)
    issue_type_id = 'issue_type_id_example' # str | The ID of the issue type.
    property_key = 'property_key_example' # str | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.

    try:
        # Delete issue type property
        api_instance.delete_issue_type_property(issue_type_id, property_key)
    except Exception as e:
        print("Exception when calling IssueTypePropertiesApi->delete_issue_type_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_id** | **str**| The ID of the issue type. | 
 **property_key** | **str**| The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the issue type property is deleted. |  -  |
**400** | Returned if the issue type ID is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the issue type or property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_issue_type_property**
> EntityProperty get_issue_type_property(issue_type_id, property_key)

Get issue type property

Returns the key and value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the details of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the details of any issue types associated with the projects the user has permission to browse.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.entity_property import EntityProperty
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
    api_instance = openapi_client.IssueTypePropertiesApi(api_client)
    issue_type_id = 'issue_type_id_example' # str | The ID of the issue type.
    property_key = 'property_key_example' # str | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.

    try:
        # Get issue type property
        api_response = api_instance.get_issue_type_property(issue_type_id, property_key)
        print("The response of IssueTypePropertiesApi->get_issue_type_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypePropertiesApi->get_issue_type_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_id** | **str**| The ID of the issue type. | 
 **property_key** | **str**| The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the issue type ID is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if the issue type or property is not found or the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_issue_type_property_keys**
> PropertyKeys get_issue_type_property_keys(issue_type_id)

Get issue type property keys

Returns all the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties) keys of the issue type.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) to get the property keys of any issue type.  *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) to get the property keys of any issue types associated with the projects the user has permission to browse.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.property_keys import PropertyKeys
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
    api_instance = openapi_client.IssueTypePropertiesApi(api_client)
    issue_type_id = 'issue_type_id_example' # str | The ID of the issue type.

    try:
        # Get issue type property keys
        api_response = api_instance.get_issue_type_property_keys(issue_type_id)
        print("The response of IssueTypePropertiesApi->get_issue_type_property_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypePropertiesApi->get_issue_type_property_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_id** | **str**| The ID of the issue type. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the issue type ID is invalid. |  -  |
**404** | Returned if:   *  the issue type is not found.  *  the user does not have the required permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_issue_type_property**
> object set_issue_type_property(issue_type_id, property_key, body)

Set issue type property

Creates or updates the value of the [issue type property](https://developer.atlassian.com/cloud/jira/platform/storing-data-without-a-database/#a-id-jira-entity-properties-a-jira-entity-properties). Use this resource to store and update data against an issue type.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueTypePropertiesApi(api_client)
    issue_type_id = 'issue_type_id_example' # str | The ID of the issue type.
    property_key = 'property_key_example' # str | The key of the issue type property. The maximum length is 255 characters.
    body = {"number":5,"string":"string-value"} # object | 

    try:
        # Set issue type property
        api_response = api_instance.set_issue_type_property(issue_type_id, property_key, body)
        print("The response of IssueTypePropertiesApi->set_issue_type_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueTypePropertiesApi->set_issue_type_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_type_id** | **str**| The ID of the issue type. | 
 **property_key** | **str**| The key of the issue type property. The maximum length is 255 characters. | 
 **body** | **object**|  | 

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
**200** | Returned if the issue type property is updated. |  -  |
**201** | Returned if the issue type property is created. |  -  |
**400** | Returned if:   *  the issue type ID is invalid.  *  a property value is not provided.  *  the property value JSON content is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have permission to modify the issue type. |  -  |
**404** | Returned if:   *  the issue type is not found.  *  the user does not have the permission view the issue type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

