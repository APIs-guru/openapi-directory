# ItemsItemsSubstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemsSubstatus]**](ItemsSubstatus.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_items_substatus import ItemsItemsSubstatus

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsItemsSubstatus from a JSON string
items_items_substatus_instance = ItemsItemsSubstatus.from_json(json)
# print the JSON string representation of the object
print(ItemsItemsSubstatus.to_json())

# convert the object into a dict
items_items_substatus_dict = items_items_substatus_instance.to_dict()
# create an instance of ItemsItemsSubstatus from a dict
items_items_substatus_from_dict = ItemsItemsSubstatus.from_dict(items_items_substatus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


