# ItemsItemEventFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemEventFrame]**](ItemEventFrame.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_item_event_frame import ItemsItemEventFrame

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsItemEventFrame from a JSON string
items_item_event_frame_instance = ItemsItemEventFrame.from_json(json)
# print the JSON string representation of the object
print(ItemsItemEventFrame.to_json())

# convert the object into a dict
items_item_event_frame_dict = items_item_event_frame_instance.to_dict()
# create an instance of ItemsItemEventFrame from a dict
items_item_event_frame_from_dict = ItemsItemEventFrame.from_dict(items_item_event_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


