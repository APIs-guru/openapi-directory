# UsersCountsErrorSchema

Schema for error response users.getPresence method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_counts_error_schema import UsersCountsErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersCountsErrorSchema from a JSON string
users_counts_error_schema_instance = UsersCountsErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsersCountsErrorSchema.to_json())

# convert the object into a dict
users_counts_error_schema_dict = users_counts_error_schema_instance.to_dict()
# create an instance of UsersCountsErrorSchema from a dict
users_counts_error_schema_from_dict = UsersCountsErrorSchema.from_dict(users_counts_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


