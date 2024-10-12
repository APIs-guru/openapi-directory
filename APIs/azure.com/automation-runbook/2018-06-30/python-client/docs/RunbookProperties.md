# RunbookProperties

Definition of the runbook property type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**draft** | [**RunbookDraft**](RunbookDraft.md) |  | [optional] 
**job_count** | **int** | Gets or sets the job count of the runbook. | [optional] 
**last_modified_by** | **str** | Gets or sets the last modified by. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**log_activity_trace** | **int** | Gets or sets the option to log activity trace of the runbook. | [optional] 
**log_progress** | **bool** | Gets or sets progress log option. | [optional] 
**log_verbose** | **bool** | Gets or sets verbose log option. | [optional] 
**output_types** | **List[str]** | Gets or sets the runbook output types. | [optional] 
**parameters** | [**Dict[str, RunbookParameter]**](RunbookParameter.md) | Gets or sets the runbook parameters. | [optional] 
**provisioning_state** | **str** | Gets or sets the provisioning state of the runbook. | [optional] 
**publish_content_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**runbook_type** | **str** | Gets or sets the type of the runbook. | [optional] 
**state** | **str** | Gets or sets the state of the runbook. | [optional] 

## Example

```python
from openapi_client.models.runbook_properties import RunbookProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RunbookProperties from a JSON string
runbook_properties_instance = RunbookProperties.from_json(json)
# print the JSON string representation of the object
print(RunbookProperties.to_json())

# convert the object into a dict
runbook_properties_dict = runbook_properties_instance.to_dict()
# create an instance of RunbookProperties from a dict
runbook_properties_from_dict = RunbookProperties.from_dict(runbook_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


