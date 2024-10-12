# List

A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_properties** | [**ListProperties**](ListProperties.md) |  | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this list. | [optional] 
**suggested_insertion_id** | **str** | The suggested insertion ID. If empty, then this is not a suggested insertion. | [optional] 
**suggested_list_properties_changes** | [**Dict[str, SuggestedListProperties]**](SuggestedListProperties.md) | The suggested changes to the list properties, keyed by suggestion ID. | [optional] 

## Example

```python
from openapi_client.models.list import List

# TODO update the JSON string below
json = "{}"
# create an instance of List from a JSON string
list_instance = List.from_json(json)
# print the JSON string representation of the object
print(List.to_json())

# convert the object into a dict
list_dict = list_instance.to_dict()
# create an instance of List from a dict
list_from_dict = List.from_dict(list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


