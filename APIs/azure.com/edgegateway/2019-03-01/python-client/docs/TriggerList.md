# TriggerList

Collection of all trigger on the data box edge device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] [readonly] 
**value** | [**List[Trigger]**](Trigger.md) | The list of triggers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trigger_list import TriggerList

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerList from a JSON string
trigger_list_instance = TriggerList.from_json(json)
# print the JSON string representation of the object
print(TriggerList.to_json())

# convert the object into a dict
trigger_list_dict = trigger_list_instance.to_dict()
# create an instance of TriggerList from a dict
trigger_list_from_dict = TriggerList.from_dict(trigger_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


