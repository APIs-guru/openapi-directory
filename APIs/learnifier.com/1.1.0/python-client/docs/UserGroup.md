# UserGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[UserGroup]**](UserGroup.md) | Children User Groups. | [optional] 
**global_id** | **int** | Global group ID if this group is based on a global group, otherwise null. | [optional] 
**group_id** | **int** | Unique identifier representing a User Group. Id numbers are never reused. | [optional] 
**name** | **str** | The name of the User Group. | 
**parent** | **int** | Unique identifier of the parent or *null* if there is no parent. | [optional] 
**user_group** | **int** | If of internal user group object that holds the members of this group. | [optional] 

## Example

```python
from openapi_client.models.user_group import UserGroup

# TODO update the JSON string below
json = "{}"
# create an instance of UserGroup from a JSON string
user_group_instance = UserGroup.from_json(json)
# print the JSON string representation of the object
print(UserGroup.to_json())

# convert the object into a dict
user_group_dict = user_group_instance.to_dict()
# create an instance of UserGroup from a dict
user_group_from_dict = UserGroup.from_dict(user_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


