# ItemPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**Errors**](Errors.md) |  | [optional] 
**identifier** | **str** |  | [optional] 
**identifier_type** | **str** |  | [optional] 
**object** | [**Point**](Point.md) |  | [optional] 

## Example

```python
from openapi_client.models.item_point import ItemPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ItemPoint from a JSON string
item_point_instance = ItemPoint.from_json(json)
# print the JSON string representation of the object
print(ItemPoint.to_json())

# convert the object into a dict
item_point_dict = item_point_instance.to_dict()
# create an instance of ItemPoint from a dict
item_point_from_dict = ItemPoint.from_dict(item_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


