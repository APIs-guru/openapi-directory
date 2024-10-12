# EventFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged_by** | **str** |  | [optional] 
**acknowledged_date** | **datetime** |  | [optional] 
**are_values_captured** | **bool** |  | [optional] 
**can_be_acknowledged** | **bool** |  | [optional] 
**category_names** | **List[str]** |  | [optional] 
**description** | **str** |  | [optional] 
**end_time** | **datetime** |  | [optional] 
**extended_properties** | [**Dict[str, Value]**](Value.md) |  | [optional] 
**has_children** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**is_acknowledged** | **bool** |  | [optional] 
**is_annotated** | **bool** |  | [optional] 
**is_locked** | **bool** |  | [optional] 
**links** | [**EventFrameLinks**](EventFrameLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**ref_element_web_ids** | **List[str]** |  | [optional] 
**security** | [**Security**](Security.md) |  | [optional] 
**severity** | **str** |  | [optional] 
**start_time** | **datetime** |  | [optional] 
**template_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.event_frame import EventFrame

# TODO update the JSON string below
json = "{}"
# create an instance of EventFrame from a JSON string
event_frame_instance = EventFrame.from_json(json)
# print the JSON string representation of the object
print(EventFrame.to_json())

# convert the object into a dict
event_frame_dict = event_frame_instance.to_dict()
# create an instance of EventFrame from a dict
event_frame_from_dict = EventFrame.from_dict(event_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


