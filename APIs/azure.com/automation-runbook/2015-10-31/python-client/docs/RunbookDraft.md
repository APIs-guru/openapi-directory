# RunbookDraft


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time of the runbook draft. | [optional] 
**draft_content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**in_edit** | **bool** | Gets or sets whether runbook is in edit mode. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time of the runbook draft. | [optional] 
**output_types** | **List[str]** | Gets or sets the runbook output types. | [optional] 
**parameters** | [**Dict[str, RunbookParameter]**](RunbookParameter.md) | Gets or sets the runbook draft parameters. | [optional] 

## Example

```python
from openapi_client.models.runbook_draft import RunbookDraft

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookDraft from a JSON string
runbook_draft_instance = RunbookDraft.from_json(json)
# print the JSON string representation of the object
print(RunbookDraft.to_json())

# convert the object into a dict
runbook_draft_dict = runbook_draft_instance.to_dict()
# create an instance of RunbookDraft from a dict
runbook_draft_from_dict = RunbookDraft.from_dict(runbook_draft_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


