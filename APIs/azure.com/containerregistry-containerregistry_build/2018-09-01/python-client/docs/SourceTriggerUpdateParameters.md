# SourceTriggerUpdateParameters

The properties for updating a source based trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the trigger. | 
**source_repository** | [**SourceUpdateParameters**](SourceUpdateParameters.md) |  | [optional] 
**source_trigger_events** | **List[str]** | The source event corresponding to the trigger. | [optional] 
**status** | **str** | The current status of trigger. | [optional] [default to 'Enabled']

## Example

```python
from openapi_client.models.source_trigger_update_parameters import SourceTriggerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SourceTriggerUpdateParameters from a JSON string
source_trigger_update_parameters_instance = SourceTriggerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SourceTriggerUpdateParameters.to_json())

# convert the object into a dict
source_trigger_update_parameters_dict = source_trigger_update_parameters_instance.to_dict()
# create an instance of SourceTriggerUpdateParameters from a dict
source_trigger_update_parameters_from_dict = SourceTriggerUpdateParameters.from_dict(source_trigger_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


