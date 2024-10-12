# UsergroupsCreateSchema

Schema for successful response from usergroups.create method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**usergroup** | [**ObjsSubteam**](ObjsSubteam.md) |  | 

## Example

```python
from openapi_client.models.usergroups_create_schema import UsergroupsCreateSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsCreateSchema from a JSON string
usergroups_create_schema_instance = UsergroupsCreateSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsCreateSchema.to_json())

# convert the object into a dict
usergroups_create_schema_dict = usergroups_create_schema_instance.to_dict()
# create an instance of UsergroupsCreateSchema from a dict
usergroups_create_schema_from_dict = UsergroupsCreateSchema.from_dict(usergroups_create_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


