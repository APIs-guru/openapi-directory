# CreateWorkflowTransitionRulesDetails

The details of a workflow transition rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**CreateWorkflowCondition**](CreateWorkflowCondition.md) | The workflow conditions. | [optional] 
**post_functions** | [**List[CreateWorkflowTransitionRule]**](CreateWorkflowTransitionRule.md) | The workflow post functions.  **Note:** The default post functions are always added to the *initial* transition, as in:      \&quot;postFunctions\&quot;: [         {             \&quot;type\&quot;: \&quot;IssueCreateFunction\&quot;         },         {             \&quot;type\&quot;: \&quot;IssueReindexFunction\&quot;         },         {             \&quot;type\&quot;: \&quot;FireIssueEventFunction\&quot;,             \&quot;configuration\&quot;: {                 \&quot;event\&quot;: {                     \&quot;id\&quot;: \&quot;1\&quot;,                     \&quot;name\&quot;: \&quot;issue_created\&quot;                 }             }         }     ]  **Note:** The default post functions are always added to the *global* and *directed* transitions, as in:      \&quot;postFunctions\&quot;: [         {             \&quot;type\&quot;: \&quot;UpdateIssueStatusFunction\&quot;         },         {             \&quot;type\&quot;: \&quot;CreateCommentFunction\&quot;         },         {             \&quot;type\&quot;: \&quot;GenerateChangeHistoryFunction\&quot;         },         {             \&quot;type\&quot;: \&quot;IssueReindexFunction\&quot;         },         {             \&quot;type\&quot;: \&quot;FireIssueEventFunction\&quot;,             \&quot;configuration\&quot;: {                 \&quot;event\&quot;: {                     \&quot;id\&quot;: \&quot;13\&quot;,                     \&quot;name\&quot;: \&quot;issue_generic\&quot;                 }             }         }     ] | [optional] 
**validators** | [**List[CreateWorkflowTransitionRule]**](CreateWorkflowTransitionRule.md) | The workflow validators.  **Note:** The default permission validator is always added to the *initial* transition, as in:      \&quot;validators\&quot;: [         {             \&quot;type\&quot;: \&quot;PermissionValidator\&quot;,             \&quot;configuration\&quot;: {                 \&quot;permissionKey\&quot;: \&quot;CREATE_ISSUES\&quot;             }         }     ] | [optional] 

## Example

```python
from openapi_client.models.create_workflow_transition_rules_details import CreateWorkflowTransitionRulesDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowTransitionRulesDetails from a JSON string
create_workflow_transition_rules_details_instance = CreateWorkflowTransitionRulesDetails.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowTransitionRulesDetails.to_json())

# convert the object into a dict
create_workflow_transition_rules_details_dict = create_workflow_transition_rules_details_instance.to_dict()
# create an instance of CreateWorkflowTransitionRulesDetails from a dict
create_workflow_transition_rules_details_from_dict = CreateWorkflowTransitionRulesDetails.from_dict(create_workflow_transition_rules_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


