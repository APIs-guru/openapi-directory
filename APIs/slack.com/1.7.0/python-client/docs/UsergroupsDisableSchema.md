# UsergroupsDisableSchema

Schema for successful response from usergroups.disable method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**usergroup** | [**ObjsSubteam**](ObjsSubteam.md) |  | 

## Example

```python
from openapi_client.models.usergroups_disable_schema import UsergroupsDisableSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsDisableSchema from a JSON string
usergroups_disable_schema_instance = UsergroupsDisableSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsDisableSchema.to_json())

# convert the object into a dict
usergroups_disable_schema_dict = usergroups_disable_schema_instance.to_dict()
# create an instance of UsergroupsDisableSchema from a dict
usergroups_disable_schema_from_dict = UsergroupsDisableSchema.from_dict(usergroups_disable_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


