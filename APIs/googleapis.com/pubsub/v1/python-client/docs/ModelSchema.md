# ModelSchema

A schema resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | **str** | The definition of the schema. This should contain a string representing the full definition of the schema that is a valid schema definition of the type specified in &#x60;type&#x60;. | [optional] 
**name** | **str** | Required. Name of the schema. Format is &#x60;projects/{project}/schemas/{schema}&#x60;. | [optional] 
**revision_create_time** | **str** | Output only. The timestamp that the revision was created. | [optional] [readonly] 
**revision_id** | **str** | Output only. Immutable. The revision ID of the schema. | [optional] [readonly] 
**type** | **str** | The type of the schema definition. | [optional] 

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


