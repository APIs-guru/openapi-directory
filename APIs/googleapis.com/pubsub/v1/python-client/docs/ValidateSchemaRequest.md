# ValidateSchemaRequest

Request for the `ValidateSchema` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**ModelSchema**](ModelSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.validate_schema_request import ValidateSchemaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ValidateSchemaRequest from a JSON string
validate_schema_request_instance = ValidateSchemaRequest.from_json(json)
# print the JSON string representation of the object
print(ValidateSchemaRequest.to_json())

# convert the object into a dict
validate_schema_request_dict = validate_schema_request_instance.to_dict()
# create an instance of ValidateSchemaRequest from a dict
validate_schema_request_from_dict = ValidateSchemaRequest.from_dict(validate_schema_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


