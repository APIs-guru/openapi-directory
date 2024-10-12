# RegenerateKeyInput

The request body for a RegenerateKey API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **str** | The keyType indicating which key you want to regenerate, Primary or Secondary. | 

## Example

```python
from openapi_client.models.regenerate_key_input import RegenerateKeyInput

# TODO update the JSON string below
json = "{}"
# create an instance of RegenerateKeyInput from a JSON string
regenerate_key_input_instance = RegenerateKeyInput.from_json(json)
# print the JSON string representation of the object
print(RegenerateKeyInput.to_json())

# convert the object into a dict
regenerate_key_input_dict = regenerate_key_input_instance.to_dict()
# create an instance of RegenerateKeyInput from a dict
regenerate_key_input_from_dict = RegenerateKeyInput.from_dict(regenerate_key_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


