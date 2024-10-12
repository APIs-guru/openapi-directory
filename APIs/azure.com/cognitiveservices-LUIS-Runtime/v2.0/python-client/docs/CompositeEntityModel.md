# CompositeEntityModel

LUIS Composite Entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[CompositeChildModel]**](CompositeChildModel.md) | Child entities. | 
**parent_type** | **str** | Type/name of parent entity. | 
**value** | **str** | Value for composite entity extracted by LUIS. | 

## Example

```python
from openapi_client.models.composite_entity_model import CompositeEntityModel

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeEntityModel from a JSON string
composite_entity_model_instance = CompositeEntityModel.from_json(json)
# print the JSON string representation of the object
print(CompositeEntityModel.to_json())

# convert the object into a dict
composite_entity_model_dict = composite_entity_model_instance.to_dict()
# create an instance of CompositeEntityModel from a dict
composite_entity_model_from_dict = CompositeEntityModel.from_dict(composite_entity_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


