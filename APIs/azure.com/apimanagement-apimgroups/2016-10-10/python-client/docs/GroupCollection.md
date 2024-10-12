# GroupCollection

Paged Group list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[GroupContract]**](GroupContract.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.group_collection import GroupCollection

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCollection from a JSON string
group_collection_instance = GroupCollection.from_json(json)
# print the JSON string representation of the object
print(GroupCollection.to_json())

# convert the object into a dict
group_collection_dict = group_collection_instance.to_dict()
# create an instance of GroupCollection from a dict
group_collection_from_dict = GroupCollection.from_dict(group_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


