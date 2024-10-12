# ModelUpdateObject

Object model for updating an intent classifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The entity&#39;s new name. | [optional] 

## Example

```python
from openapi_client.models.model_update_object import ModelUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ModelUpdateObject from a JSON string
model_update_object_instance = ModelUpdateObject.from_json(json)
# print the JSON string representation of the object
print(ModelUpdateObject.to_json())

# convert the object into a dict
model_update_object_dict = model_update_object_instance.to_dict()
# create an instance of ModelUpdateObject from a dict
model_update_object_from_dict = ModelUpdateObject.from_dict(model_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


