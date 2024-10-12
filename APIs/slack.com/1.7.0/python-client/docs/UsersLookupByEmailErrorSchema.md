# UsersLookupByEmailErrorSchema

Schema for error response from users.lookupByEmail method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.users_lookup_by_email_error_schema import UsersLookupByEmailErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersLookupByEmailErrorSchema from a JSON string
users_lookup_by_email_error_schema_instance = UsersLookupByEmailErrorSchema.from_json(json)
# print the JSON string representation of the object
print(UsersLookupByEmailErrorSchema.to_json())

# convert the object into a dict
users_lookup_by_email_error_schema_dict = users_lookup_by_email_error_schema_instance.to_dict()
# create an instance of UsersLookupByEmailErrorSchema from a dict
users_lookup_by_email_error_schema_from_dict = UsersLookupByEmailErrorSchema.from_dict(users_lookup_by_email_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


