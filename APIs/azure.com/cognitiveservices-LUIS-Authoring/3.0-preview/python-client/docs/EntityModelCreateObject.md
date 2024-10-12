# EntityModelCreateObject

An entity extractor create object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ChildEntityModelCreateObject]**](ChildEntityModelCreateObject.md) | Child entities. | [optional] 
**name** | **str** | Entity name. | [optional] 

## Example

```python
from openapi_client.models.entity_model_create_object import EntityModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntityModelCreateObject from a JSON string
entity_model_create_object_instance = EntityModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(EntityModelCreateObject.to_json())

# convert the object into a dict
entity_model_create_object_dict = entity_model_create_object_instance.to_dict()
# create an instance of EntityModelCreateObject from a dict
entity_model_create_object_from_dict = EntityModelCreateObject.from_dict(entity_model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


