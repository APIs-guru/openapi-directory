# DeprecatedWorkflow

Details about a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **bool** |  | [optional] 
**description** | **str** | The description of the workflow. | [optional] [readonly] 
**last_modified_date** | **str** | The datetime the workflow was last modified. | [optional] [readonly] 
**last_modified_user** | **str** | This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] [readonly] 
**last_modified_user_account_id** | **str** | The account ID of the user that last modified the workflow. | [optional] [readonly] 
**name** | **str** | The name of the workflow. | [optional] [readonly] 
**scope** | [**Scope**](Scope.md) | The scope where this workflow applies | [optional] [readonly] 
**steps** | **int** | The number of steps included in the workflow. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deprecated_workflow import DeprecatedWorkflow

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecatedWorkflow from a JSON string
deprecated_workflow_instance = DeprecatedWorkflow.from_json(json)
# print the JSON string representation of the object
print(DeprecatedWorkflow.to_json())

# convert the object into a dict
deprecated_workflow_dict = deprecated_workflow_instance.to_dict()
# create an instance of DeprecatedWorkflow from a dict
deprecated_workflow_from_dict = DeprecatedWorkflow.from_dict(deprecated_workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


