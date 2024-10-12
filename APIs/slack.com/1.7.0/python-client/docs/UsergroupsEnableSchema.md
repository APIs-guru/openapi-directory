# UsergroupsEnableSchema

Schema for successful response from usergroups.enable method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**usergroup** | [**ObjsSubteam**](ObjsSubteam.md) |  | 

## Example

```python
from openapi_client.models.usergroups_enable_schema import UsergroupsEnableSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsEnableSchema from a JSON string
usergroups_enable_schema_instance = UsergroupsEnableSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsEnableSchema.to_json())

# convert the object into a dict
usergroups_enable_schema_dict = usergroups_enable_schema_instance.to_dict()
# create an instance of UsergroupsEnableSchema from a dict
usergroups_enable_schema_from_dict = UsergroupsEnableSchema.from_dict(usergroups_enable_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


