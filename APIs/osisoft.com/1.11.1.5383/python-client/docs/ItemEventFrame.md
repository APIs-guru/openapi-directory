# ItemEventFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**Errors**](Errors.md) |  | [optional] 
**identifier** | **str** |  | [optional] 
**identifier_type** | **str** |  | [optional] 
**object** | [**EventFrame**](EventFrame.md) |  | [optional] 

## Example

```python
from openapi_client.models.item_event_frame import ItemEventFrame

# TODO update the JSON string below
json = "{}"
# create an instance of ItemEventFrame from a JSON string
item_event_frame_instance = ItemEventFrame.from_json(json)
# print the JSON string representation of the object
print(ItemEventFrame.to_json())

# convert the object into a dict
item_event_frame_dict = item_event_frame_instance.to_dict()
# create an instance of ItemEventFrame from a dict
item_event_frame_from_dict = ItemEventFrame.from_dict(item_event_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


