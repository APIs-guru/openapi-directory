# UsergroupsListErrorSchema

Schema for error response from usergroups.list method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.usergroups_list_error_schema import UsergroupsListErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsListErrorSchema from a JSON string
usergroups_list_error_schema_instance = UsergroupsListErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsListErrorSchema.to_json())

# convert the object into a dict
usergroups_list_error_schema_dict = usergroups_list_error_schema_instance.to_dict()
# create an instance of UsergroupsListErrorSchema from a dict
usergroups_list_error_schema_from_dict = UsergroupsListErrorSchema.from_dict(usergroups_list_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


