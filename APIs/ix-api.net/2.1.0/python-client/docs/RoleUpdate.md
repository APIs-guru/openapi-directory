# RoleUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the role.  | 
**required_fields** | **List[str]** | A list of required field names.  | 

## Example

```python
from openapi_client.models.role_update import RoleUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of RoleUpdate from a JSON string
role_update_instance = RoleUpdate.from_json(json)
# print the JSON string representation of the object
print(RoleUpdate.to_json())

# convert the object into a dict
role_update_dict = role_update_instance.to_dict()
# create an instance of RoleUpdate from a dict
role_update_from_dict = RoleUpdate.from_dict(role_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


