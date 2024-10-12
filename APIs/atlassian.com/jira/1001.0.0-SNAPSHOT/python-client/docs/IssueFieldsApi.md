# openapi_client.IssueFieldsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_custom_field**](IssueFieldsApi.md#create_custom_field) | **POST** /rest/api/3/field | Create custom field
[**delete_custom_field**](IssueFieldsApi.md#delete_custom_field) | **DELETE** /rest/api/3/field/{id} | Delete custom field
[**get_contexts_for_field_deprecated**](IssueFieldsApi.md#get_contexts_for_field_deprecated) | **GET** /rest/api/3/field/{fieldId}/contexts | Get contexts for a field
[**get_fields**](IssueFieldsApi.md#get_fields) | **GET** /rest/api/3/field | Get fields
[**get_fields_paginated**](IssueFieldsApi.md#get_fields_paginated) | **GET** /rest/api/3/field/search | Get fields paginated
[**get_trashed_fields_paginated**](IssueFieldsApi.md#get_trashed_fields_paginated) | **GET** /rest/api/3/field/search/trashed | Get fields in trash paginated
[**restore_custom_field**](IssueFieldsApi.md#restore_custom_field) | **POST** /rest/api/3/field/{id}/restore | Restore custom field from trash
[**trash_custom_field**](IssueFieldsApi.md#trash_custom_field) | **POST** /rest/api/3/field/{id}/trash | Move custom field to trash
[**update_custom_field**](IssueFieldsApi.md#update_custom_field) | **PUT** /rest/api/3/field/{fieldId} | Update custom field


# **create_custom_field**
> FieldDetails create_custom_field(custom_field_definition_json_bean)

Create custom field

Creates a custom field.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.custom_field_definition_json_bean import CustomFieldDefinitionJsonBean
from openapi_client.models.field_details import FieldDetails
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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    custom_field_definition_json_bean = {"description":"Custom field for picking groups","name":"New custom field","searcherKey":"com.atlassian.jira.plugin.system.customfieldtypes:grouppickersearcher","type":"com.atlassian.jira.plugin.system.customfieldtypes:grouppicker"} # CustomFieldDefinitionJsonBean | Definition of the custom field to be created

    try:
        # Create custom field
        api_response = api_instance.create_custom_field(custom_field_definition_json_bean)
        print("The response of IssueFieldsApi->create_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->create_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **custom_field_definition_json_bean** | [**CustomFieldDefinitionJsonBean**](CustomFieldDefinitionJsonBean.md)| Definition of the custom field to be created | 

### Return type

[**FieldDetails**](FieldDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returned if the custom field is created. |  -  |
**400** | Returned if:   *  the user does not have permission to create custom fields.  *  any of the request object properties have invalid or missing values. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_custom_field**
> delete_custom_field(id)

Delete custom field

Deletes a custom field. The custom field is deleted whether it is in the trash or not. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.  This operation is [asynchronous](#async). Follow the `location` link in the response to determine the status of the task and use [Get task](#api-rest-api-3-task-taskId-get) to obtain subsequent updates.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    id = 'id_example' # str | The ID of a custom field.

    try:
        # Delete custom field
        api_instance.delete_custom_field(id)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->delete_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of a custom field. | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**303** | Returned if the request is successful. |  -  |
**400** | Returned if any of these are true:   *  The custom field is locked.  *  The custom field is used in a issue security scheme or a permission scheme.  *  The custom field ID format is incorrect. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the custom field is not found. |  -  |
**409** | Returned if a task to delete the custom field is running. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_contexts_for_field_deprecated**
> PageBeanContext get_contexts_for_field_deprecated(field_id, start_at=start_at, max_results=max_results)

Get contexts for a field

Returns a [paginated](#pagination) list of the contexts a field is used in. Deprecated, use [ Get custom field contexts](#api-rest-api-3-field-fieldId-context-get).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_context import PageBeanContext
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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the field to return contexts for.
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 20 # int | The maximum number of items to return per page. (optional) (default to 20)

    try:
        # Get contexts for a field
        api_response = api_instance.get_contexts_for_field_deprecated(field_id, start_at=start_at, max_results=max_results)
        print("The response of IssueFieldsApi->get_contexts_for_field_deprecated:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->get_contexts_for_field_deprecated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the field to return contexts for. | 
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 20]

### Return type

[**PageBeanContext**](PageBeanContext.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

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

# **get_fields**
> List[FieldDetails] get_fields()

Get fields

Returns system and custom issue fields according to the following rules:   *  Fields that cannot be added to the issue navigator are always returned.  *  Fields that cannot be placed on an issue screen are always returned.  *  Fields that depend on global Jira settings are only returned if the setting is enabled. That is, timetracking fields, subtasks, votes, and watches.  *  For all other fields, this operation only returns the fields that the user has permission to view (that is, the field is used in at least one project that the user has *Browse Projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for.)  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.field_details import FieldDetails
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
    api_instance = openapi_client.IssueFieldsApi(api_client)

    try:
        # Get fields
        api_response = api_instance.get_fields()
        print("The response of IssueFieldsApi->get_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->get_fields: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[FieldDetails]**](FieldDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_fields_paginated**
> PageBeanField get_fields_paginated(start_at=start_at, max_results=max_results, type=type, id=id, query=query, order_by=order_by, expand=expand)

Get fields paginated

Returns a [paginated](#pagination) list of fields for Classic Jira projects. The list can include:   *  all fields  *  specific fields, by defining `id`  *  fields that contain a string in the field name or description, by defining `query`  *  specific fields that contain a string in the field name or description, by defining `id` and `query`  Only custom fields can be queried, `type` must be set to `custom`.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field import PageBeanField
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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    type = ['type_example'] # List[str] | The type of fields to search. (optional)
    id = ['id_example'] # List[str] | The IDs of the custom fields to return or, where `query` is specified, filter. (optional)
    query = 'query_example' # str | String used to perform a case-insensitive partial match with field names or descriptions. (optional)
    order_by = 'order_by_example' # str | [Order](#ordering) the results by a field:   *  `contextsCount` sorts by the number of contexts related to a field  *  `lastUsed` sorts by the date when the value of the field last changed  *  `name` sorts by the field name  *  `screensCount` sorts by the number of screens related to a field (optional)
    expand = 'expand_example' # str | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `key` returns the key for each field  *  `lastUsed` returns the date when the value of the field last changed  *  `screensCount` returns the number of screens related to a field  *  `contextsCount` returns the number of contexts related to a field  *  `isLocked` returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og)  *  `searcherKey` returns the searcher key for each custom field (optional)

    try:
        # Get fields paginated
        api_response = api_instance.get_fields_paginated(start_at=start_at, max_results=max_results, type=type, id=id, query=query, order_by=order_by, expand=expand)
        print("The response of IssueFieldsApi->get_fields_paginated:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->get_fields_paginated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **type** | [**List[str]**](str.md)| The type of fields to search. | [optional] 
 **id** | [**List[str]**](str.md)| The IDs of the custom fields to return or, where &#x60;query&#x60; is specified, filter. | [optional] 
 **query** | **str**| String used to perform a case-insensitive partial match with field names or descriptions. | [optional] 
 **order_by** | **str**| [Order](#ordering) the results by a field:   *  &#x60;contextsCount&#x60; sorts by the number of contexts related to a field  *  &#x60;lastUsed&#x60; sorts by the date when the value of the field last changed  *  &#x60;name&#x60; sorts by the field name  *  &#x60;screensCount&#x60; sorts by the number of screens related to a field | [optional] 
 **expand** | **str**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;key&#x60; returns the key for each field  *  &#x60;lastUsed&#x60; returns the date when the value of the field last changed  *  &#x60;screensCount&#x60; returns the number of screens related to a field  *  &#x60;contextsCount&#x60; returns the number of contexts related to a field  *  &#x60;isLocked&#x60; returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og)  *  &#x60;searcherKey&#x60; returns the searcher key for each custom field | [optional] 

### Return type

[**PageBeanField**](PageBeanField.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_trashed_fields_paginated**
> PageBeanField get_trashed_fields_paginated(start_at=start_at, max_results=max_results, id=id, query=query, expand=expand, order_by=order_by)

Get fields in trash paginated

Returns a [paginated](#pagination) list of fields in the trash. The list may be restricted to fields whose field name or description partially match a string.  Only custom fields can be queried, `type` must be set to `custom`.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.page_bean_field import PageBeanField
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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    start_at = 0 # int | The index of the first item to return in a page of results (page offset). (optional) (default to 0)
    max_results = 50 # int | The maximum number of items to return per page. (optional) (default to 50)
    id = ['id_example'] # List[str] |  (optional)
    query = 'query_example' # str | String used to perform a case-insensitive partial match with field names or descriptions. (optional)
    expand = 'expand_example' # str |  (optional)
    order_by = 'order_by_example' # str | [Order](#ordering) the results by a field:   *  `name` sorts by the field name  *  `trashDate` sorts by the date the field was moved to the trash  *  `plannedDeletionDate` sorts by the planned deletion date (optional)

    try:
        # Get fields in trash paginated
        api_response = api_instance.get_trashed_fields_paginated(start_at=start_at, max_results=max_results, id=id, query=query, expand=expand, order_by=order_by)
        print("The response of IssueFieldsApi->get_trashed_fields_paginated:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->get_trashed_fields_paginated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_at** | **int**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **max_results** | **int**| The maximum number of items to return per page. | [optional] [default to 50]
 **id** | [**List[str]**](str.md)|  | [optional] 
 **query** | **str**| String used to perform a case-insensitive partial match with field names or descriptions. | [optional] 
 **expand** | **str**|  | [optional] 
 **order_by** | **str**| [Order](#ordering) the results by a field:   *  &#x60;name&#x60; sorts by the field name  *  &#x60;trashDate&#x60; sorts by the date the field was moved to the trash  *  &#x60;plannedDeletionDate&#x60; sorts by the planned deletion date | [optional] 

### Return type

[**PageBeanField**](PageBeanField.md)

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
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **restore_custom_field**
> object restore_custom_field(id)

Restore custom field from trash

Restores a custom field from trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    id = 'id_example' # str | The ID of a custom field.

    try:
        # Restore custom field from trash
        api_response = api_instance.restore_custom_field(id)
        print("The response of IssueFieldsApi->restore_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->restore_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of a custom field. | 

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
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trash_custom_field**
> object trash_custom_field(id)

Move custom field to trash

Moves a custom field to trash. See [Edit or delete a custom field](https://confluence.atlassian.com/x/Z44fOw) for more information on trashing and deleting custom fields.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    id = 'id_example' # str | The ID of a custom field.

    try:
        # Move custom field to trash
        api_response = api_instance.trash_custom_field(id)
        print("The response of IssueFieldsApi->trash_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->trash_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of a custom field. | 

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
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_custom_field**
> object update_custom_field(field_id, update_custom_field_details)

Update custom field

Updates a custom field.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.update_custom_field_details import UpdateCustomFieldDetails
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
    api_instance = openapi_client.IssueFieldsApi(api_client)
    field_id = 'field_id_example' # str | The ID of the custom field.
    update_custom_field_details = {"description":"Select the manager and the corresponding employee.","name":"Managers and employees list","searcherKey":"com.atlassian.jira.plugin.system.customfieldtypes:cascadingselectsearcher"} # UpdateCustomFieldDetails | The custom field update details.

    try:
        # Update custom field
        api_response = api_instance.update_custom_field(field_id, update_custom_field_details)
        print("The response of IssueFieldsApi->update_custom_field:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueFieldsApi->update_custom_field: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **field_id** | **str**| The ID of the custom field. | 
 **update_custom_field_details** | [**UpdateCustomFieldDetails**](UpdateCustomFieldDetails.md)| The custom field update details. | 

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
**400** | Returned if the request is not valid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the required permissions. |  -  |
**404** | Returned if the custom field is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

