# ErrorSchema

An error response from the Azure Container Registry service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_schema import ErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorSchema from a JSON string
error_schema_instance = ErrorSchema.from_json(json)
# print the JSON string representation of the object
print(ErrorSchema.to_json())

# convert the object into a dict
error_schema_dict = error_schema_instance.to_dict()
# create an instance of ErrorSchema from a dict
error_schema_from_dict = ErrorSchema.from_dict(error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


