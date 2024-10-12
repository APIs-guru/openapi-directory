# GlobalUserGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | Timestamp when group was created. | 
**created_by** | **str** | UUID of the user that created this group. | [optional] 
**id** | **int** | The id of the group. | 
**name** | **str** | The name of the group. | [optional] 
**parent** | **int** | Id of parent group, null if group has no parent. | [optional] 
**softi_id** | **str** | Alternative unique ID for the group. | [optional] 
**updated** | **datetime** | Timestamp when group was last modified. | [optional] 
**updated_by** | **str** | UUID of the user that last updated this group. | [optional] 

## Example

```python
from openapi_client.models.global_user_group import GlobalUserGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalUserGroup from a JSON string
global_user_group_instance = GlobalUserGroup.from_json(json)
# print the JSON string representation of the object
print(GlobalUserGroup.to_json())

# convert the object into a dict
global_user_group_dict = global_user_group_instance.to_dict()
# create an instance of GlobalUserGroup from a dict
global_user_group_from_dict = GlobalUserGroup.from_dict(global_user_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


