# ParameterMetadata

Metadata for a specific parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_metadata** | **Dict[str, str]** | Optional. Additional metadata for describing this parameter. | [optional] 
**default_value** | **str** | Optional. The default values will pre-populate the parameter with the given value from the proto. If default_value is left empty, the parameter will be populated with a default of the relevant type, e.g. false for a boolean. | [optional] 
**enum_options** | [**List[ParameterMetadataEnumOption]**](ParameterMetadataEnumOption.md) | Optional. The options shown when ENUM ParameterType is specified. | [optional] 
**group_name** | **str** | Optional. Specifies a group name for this parameter to be rendered under. Group header text will be rendered exactly as specified in this field. Only considered when parent_name is NOT provided. | [optional] 
**help_text** | **str** | Required. The help text to display for the parameter. | [optional] 
**hidden_ui** | **bool** | Optional. Whether the parameter should be hidden in the UI. | [optional] 
**is_optional** | **bool** | Optional. Whether the parameter is optional. Defaults to false. | [optional] 
**label** | **str** | Required. The label to display for the parameter. | [optional] 
**name** | **str** | Required. The name of the parameter. | [optional] 
**param_type** | **str** | Optional. The type of the parameter. Used for selecting input picker. | [optional] 
**parent_name** | **str** | Optional. Specifies the name of the parent parameter. Used in conjunction with &#39;parent_trigger_values&#39; to make this parameter conditional (will only be rendered conditionally). Should be mappable to a ParameterMetadata.name field. | [optional] 
**parent_trigger_values** | **List[str]** | Optional. The value(s) of the &#39;parent_name&#39; parameter which will trigger this parameter to be shown. If left empty, ANY non-empty value in parent_name will trigger this parameter to be shown. Only considered when this parameter is conditional (when &#39;parent_name&#39; has been provided). | [optional] 
**regexes** | **List[str]** | Optional. Regexes that the parameter must match. | [optional] 

## Example

```python
from openapi_client.models.parameter_metadata import ParameterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterMetadata from a JSON string
parameter_metadata_instance = ParameterMetadata.from_json(json)
# print the JSON string representation of the object
print(ParameterMetadata.to_json())

# convert the object into a dict
parameter_metadata_dict = parameter_metadata_instance.to_dict()
# create an instance of ParameterMetadata from a dict
parameter_metadata_from_dict = ParameterMetadata.from_dict(parameter_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


