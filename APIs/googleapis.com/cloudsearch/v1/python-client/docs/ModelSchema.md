# ModelSchema

The schema definition for a data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_definitions** | [**List[ObjectDefinition]**](ObjectDefinition.md) | The list of top-level objects for the data source. The maximum number of elements is 10. | [optional] 
**operation_ids** | **List[str]** | IDs of the Long Running Operations (LROs) currently running for this schema. After modifying the schema, wait for operations to complete before indexing additional content. | [optional] 

## Example

```python
from openapi_client.models.model_schema import ModelSchema

# TODO update the JSON string below
json = "{}"
# create an instance of ModelSchema from a JSON string
model_schema_instance = ModelSchema.from_json(json)
# print the JSON string representation of the object
print(ModelSchema.to_json())

# convert the object into a dict
model_schema_dict = model_schema_instance.to_dict()
# create an instance of ModelSchema from a dict
model_schema_from_dict = ModelSchema.from_dict(model_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


