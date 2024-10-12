# ItemsStreamValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[StreamValue]**](StreamValue.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_stream_value import ItemsStreamValue

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsStreamValue from a JSON string
items_stream_value_instance = ItemsStreamValue.from_json(json)
# print the JSON string representation of the object
print(ItemsStreamValue.to_json())

# convert the object into a dict
items_stream_value_dict = items_stream_value_instance.to_dict()
# create an instance of ItemsStreamValue from a dict
items_stream_value_from_dict = ItemsStreamValue.from_dict(items_stream_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


