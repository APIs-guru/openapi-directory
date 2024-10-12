# UpdateSchemaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**var_schema** | [**ModelSchema**](ModelSchema.md) |  | [optional] 
**validate_only** | **bool** | If true, the schema will be checked for validity, but will not be registered with the data source, even if valid. | [optional] 

## Example

```python
from openapi_client.models.update_schema_request import UpdateSchemaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSchemaRequest from a JSON string
update_schema_request_instance = UpdateSchemaRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSchemaRequest.to_json())

# convert the object into a dict
update_schema_request_dict = update_schema_request_instance.to_dict()
# create an instance of UpdateSchemaRequest from a dict
update_schema_request_from_dict = UpdateSchemaRequest.from_dict(update_schema_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


