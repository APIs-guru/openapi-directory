# ModelField

Represents a profile field as a name-value pair with optional verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The key of a given field&#39;s key-value pair. | [optional] 
**value** | **str** | The value associated with the &#x60;name&#x60; key. | [optional] 
**verified_at** | **datetime** | Timestamp of when the server verified a URL value for a rel&#x3D;\&quot;me” link. If &#x60;value&#x60; is a verified URL. Otherwise, null | [optional] 

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


