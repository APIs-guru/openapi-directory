# ParameterMetadataEnumOption

ParameterMetadataEnumOption specifies the option shown in the enum form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. The description to display for the enum option. | [optional] 
**label** | **str** | Optional. The label to display for the enum option. | [optional] 
**value** | **str** | Required. The value of the enum option. | [optional] 

## Example

```python
from openapi_client.models.parameter_metadata_enum_option import ParameterMetadataEnumOption

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterMetadataEnumOption from a JSON string
parameter_metadata_enum_option_instance = ParameterMetadataEnumOption.from_json(json)
# print the JSON string representation of the object
print(ParameterMetadataEnumOption.to_json())

# convert the object into a dict
parameter_metadata_enum_option_dict = parameter_metadata_enum_option_instance.to_dict()
# create an instance of ParameterMetadataEnumOption from a dict
parameter_metadata_enum_option_from_dict = ParameterMetadataEnumOption.from_dict(parameter_metadata_enum_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


