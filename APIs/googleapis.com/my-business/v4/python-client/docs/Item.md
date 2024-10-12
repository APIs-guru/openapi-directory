# Item

A single list item. Each variation of an item in the price list should have its own Item with its own price data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** | Required. ID for the item. Price list, section, and item IDs cannot be duplicated within this Location. | [optional] 
**labels** | [**List[Label]**](Label.md) | Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. At least one set of labels is required. | [optional] 
**price** | [**Money**](Money.md) |  | [optional] 

## Example

```python
from openapi_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


