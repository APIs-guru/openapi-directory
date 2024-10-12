# SearchedGroup

Models a single group from the result set returned when searching for groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** |  | 
**created_on** | **datetime** |  | 
**description** | **str** |  | 
**id** | **str** | An ID of a single artifact group. | 
**modified_by** | **str** |  | 
**modified_on** | **datetime** |  | 

## Example

```python
from openapi_client.models.searched_group import SearchedGroup

# TODO update the JSON string below
json = "{}"
# create an instance of SearchedGroup from a JSON string
searched_group_instance = SearchedGroup.from_json(json)
# print the JSON string representation of the object
print(SearchedGroup.to_json())

# convert the object into a dict
searched_group_dict = searched_group_instance.to_dict()
# create an instance of SearchedGroup from a dict
searched_group_from_dict = SearchedGroup.from_dict(searched_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


