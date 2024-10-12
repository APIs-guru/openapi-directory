# List

A Twitter List is a curated group of accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**follower_count** | **int** |  | [optional] 
**id** | **str** | The unique identifier of this List. | 
**member_count** | **int** |  | [optional] 
**name** | **str** | The name of this List. | 
**owner_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**private** | **bool** |  | [optional] 

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


