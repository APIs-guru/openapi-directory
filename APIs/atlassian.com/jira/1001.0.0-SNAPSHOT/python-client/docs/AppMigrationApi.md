# openapi_client.AppMigrationApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_issue_field_value_update_resource_update_issue_fields_put**](AppMigrationApi.md#app_issue_field_value_update_resource_update_issue_fields_put) | **PUT** /rest/atlassian-connect/1/migration/field | Bulk update custom field value
[**migration_resource_update_entity_properties_value_put**](AppMigrationApi.md#migration_resource_update_entity_properties_value_put) | **PUT** /rest/atlassian-connect/1/migration/properties/{entityType} | Bulk update entity properties
[**migration_resource_workflow_rule_search_post**](AppMigrationApi.md#migration_resource_workflow_rule_search_post) | **POST** /rest/atlassian-connect/1/migration/workflow/rule/search | Get workflow transition rule configurations


# **app_issue_field_value_update_resource_update_issue_fields_put**
> object app_issue_field_value_update_resource_update_issue_fields_put(atlassian_transfer_id, connect_custom_field_values)

Bulk update custom field value

Updates the value of a custom field added by Connect apps on one or more issues. The values of up to 200 custom fields can be updated.  **[Permissions](#permissions) required:** Only Connect apps can make this request.

### Example


```python
import openapi_client
from openapi_client.models.connect_custom_field_values import ConnectCustomFieldValues
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppMigrationApi(api_client)
    atlassian_transfer_id = 'atlassian_transfer_id_example' # str | The ID of the transfer.
    connect_custom_field_values = {"updateValueList":[{"_type":"StringIssueField","fieldID":10076,"issueID":10001,"string":"new string value"},{"_type":"TextIssueField","fieldID":10077,"issueID":10002,"text":"new text value"},{"_type":"SingleSelectIssueField","fieldID":10078,"issueID":10003,"optionID":"1"},{"_type":"MultiSelectIssueField","fieldID":10079,"issueID":10004,"optionID":"2"},{"_type":"RichTextIssueField","fieldID":10080,"issueID":10005,"richText":"new rich text value"},{"_type":"NumberIssueField","fieldID":10082,"issueID":10006,"number":54}]} # ConnectCustomFieldValues | 

    try:
        # Bulk update custom field value
        api_response = api_instance.app_issue_field_value_update_resource_update_issue_fields_put(atlassian_transfer_id, connect_custom_field_values)
        print("The response of AppMigrationApi->app_issue_field_value_update_resource_update_issue_fields_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppMigrationApi->app_issue_field_value_update_resource_update_issue_fields_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **atlassian_transfer_id** | **str**| The ID of the transfer. | 
 **connect_custom_field_values** | [**ConnectCustomFieldValues**](ConnectCustomFieldValues.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is invalid. |  -  |
**403** | Returned if: * the transfer ID is not found. * the authorisation credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **migration_resource_update_entity_properties_value_put**
> migration_resource_update_entity_properties_value_put(atlassian_transfer_id, entity_type, entity_property_details)

Bulk update entity properties

Updates the values of multiple entity properties for an object, up to 50 updates per request. This operation is for use by Connect apps during app migration.

### Example


```python
import openapi_client
from openapi_client.models.entity_property_details import EntityPropertyDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppMigrationApi(api_client)
    atlassian_transfer_id = 'atlassian_transfer_id_example' # str | The app migration transfer ID.
    entity_type = 'entity_type_example' # str | The type indicating the object that contains the entity properties.
    entity_property_details = [openapi_client.EntityPropertyDetails()] # List[EntityPropertyDetails] | 

    try:
        # Bulk update entity properties
        api_instance.migration_resource_update_entity_properties_value_put(atlassian_transfer_id, entity_type, entity_property_details)
    except Exception as e:
        print("Exception when calling AppMigrationApi->migration_resource_update_entity_properties_value_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **atlassian_transfer_id** | **str**| The app migration transfer ID. | 
 **entity_type** | **str**| The type indicating the object that contains the entity properties. | 
 **entity_property_details** | [**List[EntityPropertyDetails]**](EntityPropertyDetails.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**403** | Returned if the authorisation credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **migration_resource_workflow_rule_search_post**
> WorkflowRulesSearchDetails migration_resource_workflow_rule_search_post(atlassian_transfer_id, workflow_rules_search)

Get workflow transition rule configurations

Returns configurations for workflow transition rules migrated from server to cloud and owned by the calling Connect app.

### Example


```python
import openapi_client
from openapi_client.models.workflow_rules_search import WorkflowRulesSearch
from openapi_client.models.workflow_rules_search_details import WorkflowRulesSearchDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppMigrationApi(api_client)
    atlassian_transfer_id = 'atlassian_transfer_id_example' # str | The app migration transfer ID.
    workflow_rules_search = openapi_client.WorkflowRulesSearch() # WorkflowRulesSearch | 

    try:
        # Get workflow transition rule configurations
        api_response = api_instance.migration_resource_workflow_rule_search_post(atlassian_transfer_id, workflow_rules_search)
        print("The response of AppMigrationApi->migration_resource_workflow_rule_search_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppMigrationApi->migration_resource_workflow_rule_search_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **atlassian_transfer_id** | **str**| The app migration transfer ID. | 
 **workflow_rules_search** | [**WorkflowRulesSearch**](WorkflowRulesSearch.md)|  | 

### Return type

[**WorkflowRulesSearchDetails**](WorkflowRulesSearchDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request is not valid. |  -  |
**403** | Returned if the authorisation credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

