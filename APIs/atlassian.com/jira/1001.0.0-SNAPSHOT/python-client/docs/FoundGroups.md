# FoundGroups

The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[FoundGroup]**](FoundGroup.md) |  | [optional] 
**header** | **str** | Header text indicating the number of groups in the response and the total number of groups found in the search. | [optional] 
**total** | **int** | The total number of groups found in the search. | [optional] 

## Example

```python
from openapi_client.models.found_groups import FoundGroups

# TODO update the JSON string below
json = "{}"
# create an instance of FoundGroups from a JSON string
found_groups_instance = FoundGroups.from_json(json)
# print the JSON string representation of the object
print(FoundGroups.to_json())

# convert the object into a dict
found_groups_dict = found_groups_instance.to_dict()
# create an instance of FoundGroups from a dict
found_groups_from_dict = FoundGroups.from_dict(found_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


