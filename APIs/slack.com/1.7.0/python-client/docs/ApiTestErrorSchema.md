# ApiTestErrorSchema

Schema for error response api.test method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.api_test_error_schema import ApiTestErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTestErrorSchema from a JSON string
api_test_error_schema_instance = ApiTestErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ApiTestErrorSchema.to_json())

# convert the object into a dict
api_test_error_schema_dict = api_test_error_schema_instance.to_dict()
# create an instance of ApiTestErrorSchema from a dict
api_test_error_schema_from_dict = ApiTestErrorSchema.from_dict(api_test_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


