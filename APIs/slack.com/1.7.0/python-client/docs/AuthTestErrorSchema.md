# AuthTestErrorSchema

Schema for error response auth.test method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.auth_test_error_schema import AuthTestErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AuthTestErrorSchema from a JSON string
auth_test_error_schema_instance = AuthTestErrorSchema.from_json(json)
# print the JSON string representation of the object
print(AuthTestErrorSchema.to_json())

# convert the object into a dict
auth_test_error_schema_dict = auth_test_error_schema_instance.to_dict()
# create an instance of AuthTestErrorSchema from a dict
auth_test_error_schema_from_dict = AuthTestErrorSchema.from_dict(auth_test_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


