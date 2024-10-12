# UsergroupsDisableErrorSchema

Schema for error response from usergroups.disable method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.usergroups_disable_error_schema import UsergroupsDisableErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsergroupsDisableErrorSchema from a JSON string
usergroups_disable_error_schema_instance = UsergroupsDisableErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsergroupsDisableErrorSchema.to_json())

# convert the object into a dict
usergroups_disable_error_schema_dict = usergroups_disable_error_schema_instance.to_dict()
# create an instance of UsergroupsDisableErrorSchema from a dict
usergroups_disable_error_schema_from_dict = UsergroupsDisableErrorSchema.from_dict(usergroups_disable_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


