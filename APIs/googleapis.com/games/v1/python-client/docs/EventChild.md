# EventChild

An event child relationship resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_id** | **str** | The ID of the child event. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#eventChild&#x60;. | [optional] 

## Example

```python
from openapi_client.models.event_child import EventChild

# TODO update the JSON string below
json = "{}"
# create an instance of EventChild from a JSON string
event_child_instance = EventChild.from_json(json)
# print the JSON string representation of the object
print(EventChild.to_json())

# convert the object into a dict
event_child_dict = event_child_instance.to_dict()
# create an instance of EventChild from a dict
event_child_from_dict = EventChild.from_dict(event_child_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


