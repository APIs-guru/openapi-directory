# CompositeChildModel

Child entity in a LUIS Composite Entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of child entity. | 
**value** | **str** | Value extracted by LUIS. | 

## Example

```python
from openapi_client.models.composite_child_model import CompositeChildModel

# TODO update the JSON string below
json = "{}"
# create an instance of CompositeChildModel from a JSON string
composite_child_model_instance = CompositeChildModel.from_json(json)
# print the JSON string representation of the object
print(CompositeChildModel.to_json())

# convert the object into a dict
composite_child_model_dict = composite_child_model_instance.to_dict()
# create an instance of CompositeChildModel from a dict
composite_child_model_from_dict = CompositeChildModel.from_dict(composite_child_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


