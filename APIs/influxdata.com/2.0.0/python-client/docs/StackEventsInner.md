# StackEventsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**event_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**resources** | [**List[StackEventsInnerResourcesInner]**](StackEventsInnerResourcesInner.md) |  | [optional] 
**sources** | **List[str]** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**urls** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.stack_events_inner import StackEventsInner

# TODO update the JSON string below
json = "{}"
# create an instance of StackEventsInner from a JSON string
stack_events_inner_instance = StackEventsInner.from_json(json)
# print the JSON string representation of the object
print(StackEventsInner.to_json())

# convert the object into a dict
stack_events_inner_dict = stack_events_inner_instance.to_dict()
# create an instance of StackEventsInner from a dict
stack_events_inner_from_dict = StackEventsInner.from_dict(stack_events_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


