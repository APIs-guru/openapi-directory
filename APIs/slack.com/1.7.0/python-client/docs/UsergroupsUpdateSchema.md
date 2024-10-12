# UsergroupsUpdateSchema

Schema for successful response from usergroups.update method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**usergroup** | [**ObjsSubteam**](ObjsSubteam.md) |  | 

## Example

```python
from openapi_client.models.usergroups_update_schema import UsergroupsUpdateSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsUpdateSchema from a JSON string
usergroups_update_schema_instance = UsergroupsUpdateSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsUpdateSchema.to_json())

# convert the object into a dict
usergroups_update_schema_dict = usergroups_update_schema_instance.to_dict()
# create an instance of UsergroupsUpdateSchema from a dict
usergroups_update_schema_from_dict = UsergroupsUpdateSchema.from_dict(usergroups_update_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


