# ItemsStreamValues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[StreamValues]**](StreamValues.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_stream_values import ItemsStreamValues

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsStreamValues from a JSON string
items_stream_values_instance = ItemsStreamValues.from_json(json)
# print the JSON string representation of the object
print(ItemsStreamValues.to_json())

# convert the object into a dict
items_stream_values_dict = items_stream_values_instance.to_dict()
# create an instance of ItemsStreamValues from a dict
items_stream_values_from_dict = ItemsStreamValues.from_dict(items_stream_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


