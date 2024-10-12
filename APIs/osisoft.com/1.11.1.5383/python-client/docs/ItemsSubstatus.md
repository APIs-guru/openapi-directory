# ItemsSubstatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Substatus]**](Substatus.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_substatus import ItemsSubstatus

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsSubstatus from a JSON string
items_substatus_instance = ItemsSubstatus.from_json(json)
# print the JSON string representation of the object
print(ItemsSubstatus.to_json())

# convert the object into a dict
items_substatus_dict = items_substatus_instance.to_dict()
# create an instance of ItemsSubstatus from a dict
items_substatus_from_dict = ItemsSubstatus.from_dict(items_substatus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


