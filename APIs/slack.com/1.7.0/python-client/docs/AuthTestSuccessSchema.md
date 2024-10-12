# AuthTestSuccessSchema

Schema for successful response auth.test method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_id** | **str** |  | [optional] 
**is_enterprise_install** | **bool** |  | [optional] 
**ok** | **bool** |  | 
**team** | **str** |  | 
**team_id** | **str** |  | 
**url** | **str** |  | 
**user** | **str** |  | 
**user_id** | **str** |  | 

## Example

```python
from openapi_client.models.auth_test_success_schema import AuthTestSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of AuthTestSuccessSchema from a JSON string
auth_test_success_schema_instance = AuthTestSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(AuthTestSuccessSchema.to_json())

# convert the object into a dict
auth_test_success_schema_dict = auth_test_success_schema_instance.to_dict()
# create an instance of AuthTestSuccessSchema from a dict
auth_test_success_schema_from_dict = AuthTestSuccessSchema.from_dict(auth_test_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


