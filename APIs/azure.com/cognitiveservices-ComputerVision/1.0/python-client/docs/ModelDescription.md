# ModelDescription

An object describing supported model by name and categories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.model_description import ModelDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDescription from a JSON string
model_description_instance = ModelDescription.from_json(json)
# print the JSON string representation of the object
print(ModelDescription.to_json())

# convert the object into a dict
model_description_dict = model_description_instance.to_dict()
# create an instance of ModelDescription from a dict
model_description_from_dict = ModelDescription.from_dict(model_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


