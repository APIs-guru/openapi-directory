# UsersLookupByEmailSuccessSchema

Schema for successful response from users.lookupByEmail method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**user** | [**List[ObjsUserInner]**](ObjsUserInner.md) |  | 

## Example

```python
from openapi_client.models.users_lookup_by_email_success_schema import UsersLookupByEmailSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of UsersLookupByEmailSuccessSchema from a JSON string
users_lookup_by_email_success_schema_instance = UsersLookupByEmailSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(UsersLookupByEmailSuccessSchema.to_json())

# convert the object into a dict
users_lookup_by_email_success_schema_dict = users_lookup_by_email_success_schema_instance.to_dict()
# create an instance of UsersLookupByEmailSuccessSchema from a dict
users_lookup_by_email_success_schema_from_dict = UsersLookupByEmailSuccessSchema.from_dict(users_lookup_by_email_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


