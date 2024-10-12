# ItemGroup

The type that defines the fields for the item details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_descriptions** | [**List[CommonDescriptions]**](CommonDescriptions.md) | An array of containers for a description and the item IDs of all the items that have this exact description. Often the item variations within an item group all have the same description. Instead of repeating this description in the item details of each item, a description that is shared by at least one other item is returned in this container. If the description is unique, it is returned in the items.description field. | [optional] 
**items** | [**List[Item]**](Item.md) | An array of containers for all the item variation details, excluding the description. | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of warning messages. These types of errors do not prevent the method from executing but should be checked. | [optional] 

## Example

```python
from openapi_client.models.item_group import ItemGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ItemGroup from a JSON string
item_group_instance = ItemGroup.from_json(json)
# print the JSON string representation of the object
print(ItemGroup.to_json())

# convert the object into a dict
item_group_dict = item_group_instance.to_dict()
# create an instance of ItemGroup from a dict
item_group_from_dict = ItemGroup.from_dict(item_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


