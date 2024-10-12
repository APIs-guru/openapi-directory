# UsergroupsListSchema

Schema for successful response from usergroups.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**usergroups** | [**List[ObjsSubteam]**](ObjsSubteam.md) |  | 

## Example

```python
from openapi_client.models.usergroups_list_schema import UsergroupsListSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsListSchema from a JSON string
usergroups_list_schema_instance = UsergroupsListSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsListSchema.to_json())

# convert the object into a dict
usergroups_list_schema_dict = usergroups_list_schema_instance.to_dict()
# create an instance of UsergroupsListSchema from a dict
usergroups_list_schema_from_dict = UsergroupsListSchema.from_dict(usergroups_list_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


