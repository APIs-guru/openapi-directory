# ItemsStreamUpdatesRegister


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[StreamUpdatesRegister]**](StreamUpdatesRegister.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_stream_updates_register import ItemsStreamUpdatesRegister

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsStreamUpdatesRegister from a JSON string
items_stream_updates_register_instance = ItemsStreamUpdatesRegister.from_json(json)
# print the JSON string representation of the object
print(ItemsStreamUpdatesRegister.to_json())

# convert the object into a dict
items_stream_updates_register_dict = items_stream_updates_register_instance.to_dict()
# create an instance of ItemsStreamUpdatesRegister from a dict
items_stream_updates_register_from_dict = ItemsStreamUpdatesRegister.from_dict(items_stream_updates_register_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


