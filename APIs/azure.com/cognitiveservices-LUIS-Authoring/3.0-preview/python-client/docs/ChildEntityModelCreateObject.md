# ChildEntityModelCreateObject

A child entity extractor create object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[ChildEntityModelCreateObject]**](ChildEntityModelCreateObject.md) | Child entities. | [optional] 
**instance_of** | **str** | The instance of model name | [optional] 
**name** | **str** | Entity name. | [optional] 

## Example

```python
from openapi_client.models.child_entity_model_create_object import ChildEntityModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ChildEntityModelCreateObject from a JSON string
child_entity_model_create_object_instance = ChildEntityModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(ChildEntityModelCreateObject.to_json())

# convert the object into a dict
child_entity_model_create_object_dict = child_entity_model_create_object_instance.to_dict()
# create an instance of ChildEntityModelCreateObject from a dict
child_entity_model_create_object_from_dict = ChildEntityModelCreateObject.from_dict(child_entity_model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


