# AddUserGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of group. | 
**parent** | **int** | Optional ID of parent group. | [optional] 

## Example

```python
from openapi_client.models.add_user_group import AddUserGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AddUserGroup from a JSON string
add_user_group_instance = AddUserGroup.from_json(json)
# print the JSON string representation of the object
print(AddUserGroup.to_json())

# convert the object into a dict
add_user_group_dict = add_user_group_instance.to_dict()
# create an instance of AddUserGroup from a dict
add_user_group_from_dict = AddUserGroup.from_dict(add_user_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


