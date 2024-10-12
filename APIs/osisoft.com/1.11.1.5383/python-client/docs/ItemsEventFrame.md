# ItemsEventFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[EventFrame]**](EventFrame.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_event_frame import ItemsEventFrame

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsEventFrame from a JSON string
items_event_frame_instance = ItemsEventFrame.from_json(json)
# print the JSON string representation of the object
print(ItemsEventFrame.to_json())

# convert the object into a dict
items_event_frame_dict = items_event_frame_instance.to_dict()
# create an instance of ItemsEventFrame from a dict
items_event_frame_from_dict = ItemsEventFrame.from_dict(items_event_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


