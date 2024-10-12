# openapi_client.WorkflowTransitionPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workflow_transition_property**](WorkflowTransitionPropertiesApi.md#create_workflow_transition_property) | **POST** /rest/api/3/workflow/transitions/{transitionId}/properties | Create workflow transition property
[**delete_workflow_transition_property**](WorkflowTransitionPropertiesApi.md#delete_workflow_transition_property) | **DELETE** /rest/api/3/workflow/transitions/{transitionId}/properties | Delete workflow transition property
[**get_workflow_transition_properties**](WorkflowTransitionPropertiesApi.md#get_workflow_transition_properties) | **GET** /rest/api/3/workflow/transitions/{transitionId}/properties | Get workflow transition properties
[**update_workflow_transition_property**](WorkflowTransitionPropertiesApi.md#update_workflow_transition_property) | **PUT** /rest/api/3/workflow/transitions/{transitionId}/properties | Update workflow transition property


# **create_workflow_transition_property**
> WorkflowTransitionProperty create_workflow_transition_property(transition_id, key, workflow_name, workflow_transition_property, workflow_mode=workflow_mode)

Create workflow transition property

Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_transition_property import WorkflowTransitionProperty
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
    api_instance = openapi_client.WorkflowTransitionPropertiesApi(api_client)
    transition_id = 56 # int | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    key = 'key_example' # str | The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
    workflow_name = 'workflow_name_example' # str | The name of the workflow that the transition belongs to.
    workflow_transition_property = {"value":"createissue"} # WorkflowTransitionProperty | 
    workflow_mode = live # str | The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. (optional) (default to live)

    try:
        # Create workflow transition property
        api_response = api_instance.create_workflow_transition_property(transition_id, key, workflow_name, workflow_transition_property, workflow_mode=workflow_mode)
        print("The response of WorkflowTransitionPropertiesApi->create_workflow_transition_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTransitionPropertiesApi->create_workflow_transition_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transition_id** | **int**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | 
 **key** | **str**| The key of the property being added, also known as the name of the property. Set this to the same value as the &#x60;key&#x60; defined in the request body. | 
 **workflow_name** | **str**| The name of the workflow that the transition belongs to. | 
 **workflow_transition_property** | [**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)|  | 
 **workflow_mode** | **str**| The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. | [optional] [default to live]

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**400** | Returned if a workflow property with the same key is present on the transition. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the workflow transition is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_workflow_transition_property**
> delete_workflow_transition_property(transition_id, key, workflow_name, workflow_mode=workflow_mode)

Delete workflow transition property

Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

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
    api_instance = openapi_client.WorkflowTransitionPropertiesApi(api_client)
    transition_id = 56 # int | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    key = 'key_example' # str | The name of the transition property to delete, also known as the name of the property.
    workflow_name = 'workflow_name_example' # str | The name of the workflow that the transition belongs to.
    workflow_mode = 'workflow_mode_example' # str | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited. (optional)

    try:
        # Delete workflow transition property
        api_instance.delete_workflow_transition_property(transition_id, key, workflow_name, workflow_mode=workflow_mode)
    except Exception as e:
        print("Exception when calling WorkflowTransitionPropertiesApi->delete_workflow_transition_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transition_id** | **int**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | 
 **key** | **str**| The name of the transition property to delete, also known as the name of the property. | 
 **workflow_name** | **str**| The name of the workflow that the transition belongs to. | 
 **workflow_mode** | **str**| The workflow status. Set to &#x60;live&#x60; for inactive workflows or &#x60;draft&#x60; for draft workflows. Active workflows cannot be edited. | [optional] 

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
**200** | 200 response |  -  |
**304** | Returned if no changes were made by the request. For example, trying to delete a property that cannot be found. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the workflow transition is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_workflow_transition_properties**
> WorkflowTransitionProperty get_workflow_transition_properties(transition_id, workflow_name, include_reserved_keys=include_reserved_keys, key=key, workflow_mode=workflow_mode)

Get workflow transition properties

Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_transition_property import WorkflowTransitionProperty
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
    api_instance = openapi_client.WorkflowTransitionPropertiesApi(api_client)
    transition_id = 56 # int | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
    workflow_name = 'workflow_name_example' # str | The name of the workflow that the transition belongs to.
    include_reserved_keys = False # bool | Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. (optional) (default to False)
    key = 'key_example' # str | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned. (optional)
    workflow_mode = live # str | The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. (optional) (default to live)

    try:
        # Get workflow transition properties
        api_response = api_instance.get_workflow_transition_properties(transition_id, workflow_name, include_reserved_keys=include_reserved_keys, key=key, workflow_mode=workflow_mode)
        print("The response of WorkflowTransitionPropertiesApi->get_workflow_transition_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTransitionPropertiesApi->get_workflow_transition_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transition_id** | **int**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition. | 
 **workflow_name** | **str**| The name of the workflow that the transition belongs to. | 
 **include_reserved_keys** | **bool**| Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. | [optional] [default to False]
 **key** | **str**| The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned. | [optional] 
 **workflow_mode** | **str**| The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. | [optional] [default to live]

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have admin permission |  -  |
**404** | Returned if the workflow transition or property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_workflow_transition_property**
> WorkflowTransitionProperty update_workflow_transition_property(transition_id, key, workflow_name, workflow_transition_property, workflow_mode=workflow_mode)

Update workflow transition property

Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see [Transition properties](https://confluence.atlassian.com/x/zIhKLg#Advancedworkflowconfiguration-transitionproperties) and [Workflow properties](https://confluence.atlassian.com/x/JYlKLg).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.workflow_transition_property import WorkflowTransitionProperty
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
    api_instance = openapi_client.WorkflowTransitionPropertiesApi(api_client)
    transition_id = 56 # int | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    key = 'key_example' # str | The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
    workflow_name = 'workflow_name_example' # str | The name of the workflow that the transition belongs to.
    workflow_transition_property = {"value":"createissue"} # WorkflowTransitionProperty | 
    workflow_mode = 'workflow_mode_example' # str | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited. (optional)

    try:
        # Update workflow transition property
        api_response = api_instance.update_workflow_transition_property(transition_id, key, workflow_name, workflow_transition_property, workflow_mode=workflow_mode)
        print("The response of WorkflowTransitionPropertiesApi->update_workflow_transition_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowTransitionPropertiesApi->update_workflow_transition_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transition_id** | **int**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | 
 **key** | **str**| The key of the property being updated, also known as the name of the property. Set this to the same value as the &#x60;key&#x60; defined in the request body. | 
 **workflow_name** | **str**| The name of the workflow that the transition belongs to. | 
 **workflow_transition_property** | [**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)|  | 
 **workflow_mode** | **str**| The workflow status. Set to &#x60;live&#x60; for inactive workflows or &#x60;draft&#x60; for draft workflows. Active workflows cannot be edited. | [optional] 

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | 200 response |  -  |
**304** | Returned if no changes were made by the request. For example, attempting to update a property with its current value. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if the workflow transition is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

