# ModelDefinitionModelOptions

Deprecated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[str]** |  | [optional] 
**loss_type** | **str** |  | [optional] 
**model_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_definition_model_options import ModelDefinitionModelOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDefinitionModelOptions from a JSON string
model_definition_model_options_instance = ModelDefinitionModelOptions.from_json(json)
# print the JSON string representation of the object
print(ModelDefinitionModelOptions.to_json())

# convert the object into a dict
model_definition_model_options_dict = model_definition_model_options_instance.to_dict()
# create an instance of ModelDefinitionModelOptions from a dict
model_definition_model_options_from_dict = ModelDefinitionModelOptions.from_dict(model_definition_model_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


