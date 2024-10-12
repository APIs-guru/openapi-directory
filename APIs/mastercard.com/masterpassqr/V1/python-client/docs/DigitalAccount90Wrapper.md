# DigitalAccount90Wrapper

Response details for a retrieve digital account reference number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digital_account** | [**DigitalAccount90**](DigitalAccount90.md) |  | [optional] 

## Example

```python
from openapi_client.models.digital_account90_wrapper import DigitalAccount90Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccount90Wrapper from a JSON string
digital_account90_wrapper_instance = DigitalAccount90Wrapper.from_json(json)
# print the JSON string representation of the object
print(DigitalAccount90Wrapper.to_json())

# convert the object into a dict
digital_account90_wrapper_dict = digital_account90_wrapper_instance.to_dict()
# create an instance of DigitalAccount90Wrapper from a dict
digital_account90_wrapper_from_dict = DigitalAccount90Wrapper.from_dict(digital_account90_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


