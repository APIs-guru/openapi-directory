# ModelField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Alias overrides the field name in the returned response.  Applies only if type is &#x60;func&#x60; | [optional] 
**args** | [**List[ModelField]**](ModelField.md) | Args are the arguments to the function | [optional] 
**type** | **str** | &#x60;type&#x60; describes the field type. &#x60;func&#x60; is a function. &#x60;field&#x60; is a field reference. | [optional] 
**value** | **str** | value is the value of the field.  Meaning of the value is implied by the &#x60;type&#x60; key | [optional] 

## Example

```python
from openapi_client.models.model_field import ModelField

# TODO update the JSON string below
json = "{}"
# create an instance of ModelField from a JSON string
model_field_instance = ModelField.from_json(json)
# print the JSON string representation of the object
print(ModelField.to_json())

# convert the object into a dict
model_field_dict = model_field_instance.to_dict()
# create an instance of ModelField from a dict
model_field_from_dict = ModelField.from_dict(model_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


