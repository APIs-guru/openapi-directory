# ItemElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exception** | [**Errors**](Errors.md) |  | [optional] 
**identifier** | **str** |  | [optional] 
**identifier_type** | **str** |  | [optional] 
**object** | [**Element**](Element.md) |  | [optional] 

## Example

```python
from openapi_client.models.item_element import ItemElement

# TODO update the JSON string below
json = "{}"
# create an instance of ItemElement from a JSON string
item_element_instance = ItemElement.from_json(json)
# print the JSON string representation of the object
print(ItemElement.to_json())

# convert the object into a dict
item_element_dict = item_element_instance.to_dict()
# create an instance of ItemElement from a dict
item_element_from_dict = ItemElement.from_dict(item_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


