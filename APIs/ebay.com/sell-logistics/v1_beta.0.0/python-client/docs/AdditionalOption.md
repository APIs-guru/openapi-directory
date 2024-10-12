# AdditionalOption

This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_cost** | [**Amount**](Amount.md) |  | [optional] 
**option_type** | **str** | The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate. | [optional] 

## Example

```python
from openapi_client.models.additional_option import AdditionalOption

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalOption from a JSON string
additional_option_instance = AdditionalOption.from_json(json)
# print the JSON string representation of the object
print(AdditionalOption.to_json())

# convert the object into a dict
additional_option_dict = additional_option_instance.to_dict()
# create an instance of AdditionalOption from a dict
additional_option_from_dict = AdditionalOption.from_dict(additional_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


