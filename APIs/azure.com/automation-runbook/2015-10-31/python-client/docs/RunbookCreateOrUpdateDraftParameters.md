# RunbookCreateOrUpdateDraftParameters

The parameters supplied to the create or update runbook operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runbook_content** | **str** | Content of the Runbook. | 

## Example

```python
from openapi_client.models.runbook_create_or_update_draft_parameters import RunbookCreateOrUpdateDraftParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookCreateOrUpdateDraftParameters from a JSON string
runbook_create_or_update_draft_parameters_instance = RunbookCreateOrUpdateDraftParameters.from_json(json)
# print the JSON string representation of the object
print(RunbookCreateOrUpdateDraftParameters.to_json())

# convert the object into a dict
runbook_create_or_update_draft_parameters_dict = runbook_create_or_update_draft_parameters_instance.to_dict()
# create an instance of RunbookCreateOrUpdateDraftParameters from a dict
runbook_create_or_update_draft_parameters_from_dict = RunbookCreateOrUpdateDraftParameters.from_dict(runbook_create_or_update_draft_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


