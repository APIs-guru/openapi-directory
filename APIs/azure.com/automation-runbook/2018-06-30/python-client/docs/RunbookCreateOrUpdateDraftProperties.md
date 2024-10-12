# RunbookCreateOrUpdateDraftProperties

The parameters supplied to the create or update draft runbook properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the runbook. | [optional] 
**draft** | [**RunbookDraft**](RunbookDraft.md) |  | 
**log_activity_trace** | **int** | Gets or sets the activity-level tracing options of the runbook. | [optional] 
**log_progress** | **bool** | Gets or sets progress log option. | [optional] 
**log_verbose** | **bool** | Gets or sets verbose log option. | [optional] 
**runbook_type** | **str** | Gets or sets the type of the runbook. | 

## Example

```python
from openapi_client.models.runbook_create_or_update_draft_properties import RunbookCreateOrUpdateDraftProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookCreateOrUpdateDraftProperties from a JSON string
runbook_create_or_update_draft_properties_instance = RunbookCreateOrUpdateDraftProperties.from_json(json)
# print the JSON string representation of the object
print(RunbookCreateOrUpdateDraftProperties.to_json())

# convert the object into a dict
runbook_create_or_update_draft_properties_dict = runbook_create_or_update_draft_properties_instance.to_dict()
# create an instance of RunbookCreateOrUpdateDraftProperties from a dict
runbook_create_or_update_draft_properties_from_dict = RunbookCreateOrUpdateDraftProperties.from_dict(runbook_create_or_update_draft_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


