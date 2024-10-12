# Trigger

A Trigger data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of synchronization | 
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.trigger import Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of Trigger from a JSON string
trigger_instance = Trigger.from_json(json)
# print the JSON string representation of the object
print(Trigger.to_json())

# convert the object into a dict
trigger_dict = trigger_instance.to_dict()
# create an instance of Trigger from a dict
trigger_from_dict = Trigger.from_dict(trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


