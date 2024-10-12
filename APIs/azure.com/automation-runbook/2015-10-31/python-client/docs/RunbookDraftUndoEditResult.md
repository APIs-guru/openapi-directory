# RunbookDraftUndoEditResult

The response model for the undo edit runbook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** |  | [optional] 
**status_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.runbook_draft_undo_edit_result import RunbookDraftUndoEditResult

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookDraftUndoEditResult from a JSON string
runbook_draft_undo_edit_result_instance = RunbookDraftUndoEditResult.from_json(json)
# print the JSON string representation of the object
print(RunbookDraftUndoEditResult.to_json())

# convert the object into a dict
runbook_draft_undo_edit_result_dict = runbook_draft_undo_edit_result_instance.to_dict()
# create an instance of RunbookDraftUndoEditResult from a dict
runbook_draft_undo_edit_result_from_dict = RunbookDraftUndoEditResult.from_dict(runbook_draft_undo_edit_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


