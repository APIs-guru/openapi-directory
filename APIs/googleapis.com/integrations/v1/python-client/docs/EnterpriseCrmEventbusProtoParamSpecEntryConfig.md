# EnterpriseCrmEventbusProtoParamSpecEntryConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptive_phrase** | **str** | A short phrase to describe what this parameter contains. | [optional] 
**help_text** | **str** | Detailed help text for this parameter containing information not provided elsewhere. For example, instructions on how to migrate from a deprecated parameter. | [optional] 
**hide_default_value** | **bool** | Whether the default value is hidden in the UI. | [optional] 
**input_display_option** | **str** |  | [optional] 
**is_hidden** | **bool** | Whether this field is hidden in the UI. | [optional] 
**label** | **str** | A user-friendly label for the parameter. | [optional] 
**parameter_name_option** | **str** |  | [optional] 
**sub_section_label** | **str** | A user-friendly label for subSection under which the parameter will be displayed. | [optional] 
**ui_placeholder_text** | **str** | Placeholder text which will appear in the UI input form for this parameter. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_param_spec_entry_config import EnterpriseCrmEventbusProtoParamSpecEntryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParamSpecEntryConfig from a JSON string
enterprise_crm_eventbus_proto_param_spec_entry_config_instance = EnterpriseCrmEventbusProtoParamSpecEntryConfig.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParamSpecEntryConfig.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_param_spec_entry_config_dict = enterprise_crm_eventbus_proto_param_spec_entry_config_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParamSpecEntryConfig from a dict
enterprise_crm_eventbus_proto_param_spec_entry_config_from_dict = EnterpriseCrmEventbusProtoParamSpecEntryConfig.from_dict(enterprise_crm_eventbus_proto_param_spec_entry_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


