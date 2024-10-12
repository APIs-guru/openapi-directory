# FileEventTrigger

Trigger details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**properties** | [**FileTriggerProperties**](FileTriggerProperties.md) |  | 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 
**kind** | **str** | Trigger Kind. | 

## Example

```python
from openapi_client.models.file_event_trigger import FileEventTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of FileEventTrigger from a JSON string
file_event_trigger_instance = FileEventTrigger.from_json(json)
# print the JSON string representation of the object
print(FileEventTrigger.to_json())

# convert the object into a dict
file_event_trigger_dict = file_event_trigger_instance.to_dict()
# create an instance of FileEventTrigger from a dict
file_event_trigger_from_dict = FileEventTrigger.from_dict(file_event_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


