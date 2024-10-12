# EventEditable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**ends_at** | **datetime** |  | [optional] 
**lat** | **float** |  | [optional] 
**lon** | **float** |  | [optional] 
**picture** | **str** |  | [optional] 
**starts_at** | **datetime** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.event_editable import EventEditable

# TODO update the JSON string below
json = "{}"
# create an instance of EventEditable from a JSON string
event_editable_instance = EventEditable.from_json(json)
# print the JSON string representation of the object
print(EventEditable.to_json())

# convert the object into a dict
event_editable_dict = event_editable_instance.to_dict()
# create an instance of EventEditable from a dict
event_editable_from_dict = EventEditable.from_dict(event_editable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


