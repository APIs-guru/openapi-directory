# SourceTrigger

The properties of a source based trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the trigger. | 
**source_repository** | [**SourceProperties**](SourceProperties.md) |  | 
**source_trigger_events** | **List[str]** | The source event corresponding to the trigger. | 
**status** | **str** | The current status of trigger. | [optional] [default to 'Enabled']

## Example

```python
from openapi_client.models.source_trigger import SourceTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of SourceTrigger from a JSON string
source_trigger_instance = SourceTrigger.from_json(json)
# print the JSON string representation of the object
print(SourceTrigger.to_json())

# convert the object into a dict
source_trigger_dict = source_trigger_instance.to_dict()
# create an instance of SourceTrigger from a dict
source_trigger_from_dict = SourceTrigger.from_dict(source_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


