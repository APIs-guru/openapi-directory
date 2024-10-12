# EntityModelUpdateObject

An entity extractor update object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_of** | **str** | The instance of model name | [optional] 
**name** | **str** | Entity name. | [optional] 

## Example

```python
from openapi_client.models.entity_model_update_object import EntityModelUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityModelUpdateObject from a JSON string
entity_model_update_object_instance = EntityModelUpdateObject.from_json(json)
# print the JSON string representation of the object
print(EntityModelUpdateObject.to_json())

# convert the object into a dict
entity_model_update_object_dict = entity_model_update_object_instance.to_dict()
# create an instance of EntityModelUpdateObject from a dict
entity_model_update_object_from_dict = EntityModelUpdateObject.from_dict(entity_model_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


