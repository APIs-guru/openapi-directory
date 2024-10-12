# ModelSchema

The type of API resource. For Schema resources, this is always `admin#directory#schema`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name for the schema. | [optional] 
**etag** | **str** | The ETag of the resource. | [optional] 
**fields** | [**List[SchemaFieldSpec]**](SchemaFieldSpec.md) | A list of fields in the schema. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#schema']
**schema_id** | **str** | The unique identifier of the schema (Read-only) | [optional] 
**schema_name** | **str** | The schema&#39;s name. Each &#x60;schema_name&#x60; must be unique within a customer. Reusing a name results in a &#x60;409: Entity already exists&#x60; error. | [optional] 

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


