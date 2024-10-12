# GroupRoles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **str** |  | [optional] 
**member** | **str** |  | [optional] 
**moderator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.group_roles import GroupRoles

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRoles from a JSON string
group_roles_instance = GroupRoles.from_json(json)
# print the JSON string representation of the object
print(GroupRoles.to_json())

# convert the object into a dict
group_roles_dict = group_roles_instance.to_dict()
# create an instance of GroupRoles from a dict
group_roles_from_dict = GroupRoles.from_dict(group_roles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


