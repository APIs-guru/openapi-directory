# GroupsCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[GroupItem]**](GroupItem.md) |  | 

## Example

```python
from openapi_client.models.groups_collection import GroupsCollection

# TODO update the JSON string below
json = "{}"
# create an instance of GroupsCollection from a JSON string
groups_collection_instance = GroupsCollection.from_json(json)
# print the JSON string representation of the object
print(GroupsCollection.to_json())

# convert the object into a dict
groups_collection_dict = groups_collection_instance.to_dict()
# create an instance of GroupsCollection from a dict
groups_collection_from_dict = GroupsCollection.from_dict(groups_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


