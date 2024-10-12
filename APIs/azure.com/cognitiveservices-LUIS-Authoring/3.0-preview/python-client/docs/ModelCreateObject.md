# ModelCreateObject

Object model for creating a new entity extractor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the new entity extractor. | [optional] 

## Example

```python
from openapi_client.models.model_create_object import ModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ModelCreateObject from a JSON string
model_create_object_instance = ModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(ModelCreateObject.to_json())

# convert the object into a dict
model_create_object_dict = model_create_object_instance.to_dict()
# create an instance of ModelCreateObject from a dict
model_create_object_from_dict = ModelCreateObject.from_dict(model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


