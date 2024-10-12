# HierarchicalEntityModel

A Hierarchical Entity Extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | **List[str]** | Child entities. | [optional] 
**name** | **str** | Entity name. | [optional] 

## Example

```python
from openapi_client.models.hierarchical_entity_model import HierarchicalEntityModel

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchicalEntityModel from a JSON string
hierarchical_entity_model_instance = HierarchicalEntityModel.from_json(json)
# print the JSON string representation of the object
print(HierarchicalEntityModel.to_json())

# convert the object into a dict
hierarchical_entity_model_dict = hierarchical_entity_model_instance.to_dict()
# create an instance of HierarchicalEntityModel from a dict
hierarchical_entity_model_from_dict = HierarchicalEntityModel.from_dict(hierarchical_entity_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


