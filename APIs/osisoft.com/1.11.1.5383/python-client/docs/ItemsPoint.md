# ItemsPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Point]**](Point.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_point import ItemsPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsPoint from a JSON string
items_point_instance = ItemsPoint.from_json(json)
# print the JSON string representation of the object
print(ItemsPoint.to_json())

# convert the object into a dict
items_point_dict = items_point_instance.to_dict()
# create an instance of ItemsPoint from a dict
items_point_from_dict = ItemsPoint.from_dict(items_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


