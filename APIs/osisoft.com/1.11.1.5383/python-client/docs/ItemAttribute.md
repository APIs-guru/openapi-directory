# ItemAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**Errors**](Errors.md) |  | [optional] 
**identifier** | **str** |  | [optional] 
**identifier_type** | **str** |  | [optional] 
**object** | [**Attribute**](Attribute.md) |  | [optional] 

## Example

```python
from openapi_client.models.item_attribute import ItemAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of ItemAttribute from a JSON string
item_attribute_instance = ItemAttribute.from_json(json)
# print the JSON string representation of the object
print(ItemAttribute.to_json())

# convert the object into a dict
item_attribute_dict = item_attribute_instance.to_dict()
# create an instance of ItemAttribute from a dict
item_attribute_from_dict = ItemAttribute.from_dict(item_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


