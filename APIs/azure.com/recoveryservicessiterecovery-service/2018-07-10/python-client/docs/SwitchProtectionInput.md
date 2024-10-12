# SwitchProtectionInput

Switch protection input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SwitchProtectionInputProperties**](SwitchProtectionInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.switch_protection_input import SwitchProtectionInput

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchProtectionInput from a JSON string
switch_protection_input_instance = SwitchProtectionInput.from_json(json)
# print the JSON string representation of the object
print(SwitchProtectionInput.to_json())

# convert the object into a dict
switch_protection_input_dict = switch_protection_input_instance.to_dict()
# create an instance of SwitchProtectionInput from a dict
switch_protection_input_from_dict = SwitchProtectionInput.from_dict(switch_protection_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


