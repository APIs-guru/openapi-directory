# ApiTestSuccessSchema

Schema for successful response api.test method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.api_test_success_schema import ApiTestSuccessSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTestSuccessSchema from a JSON string
api_test_success_schema_instance = ApiTestSuccessSchema.from_json(json)
# print the JSON string representation of the object
print(ApiTestSuccessSchema.to_json())

# convert the object into a dict
api_test_success_schema_dict = api_test_success_schema_instance.to_dict()
# create an instance of ApiTestSuccessSchema from a dict
api_test_success_schema_from_dict = ApiTestSuccessSchema.from_dict(api_test_success_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


