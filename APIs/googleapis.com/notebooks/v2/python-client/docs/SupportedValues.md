# SupportedValues

SupportedValues represents the values supported by the configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_types** | **List[str]** | Output only. The accelerator types supported by WbI. | [optional] [readonly] 
**machine_types** | **List[str]** | Output only. The machine types supported by WbI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.supported_values import SupportedValues

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedValues from a JSON string
supported_values_instance = SupportedValues.from_json(json)
# print the JSON string representation of the object
print(SupportedValues.to_json())

# convert the object into a dict
supported_values_dict = supported_values_instance.to_dict()
# create an instance of SupportedValues from a dict
supported_values_from_dict = SupportedValues.from_dict(supported_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


