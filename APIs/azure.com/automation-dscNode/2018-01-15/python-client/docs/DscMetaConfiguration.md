# DscMetaConfiguration

Definition of the DSC Meta Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_after_reboot** | **str** | Gets or sets the ActionAfterReboot value of the meta configuration. | [optional] 
**allow_module_overwrite** | **bool** | Gets or sets the AllowModuleOverwrite value of the meta configuration. | [optional] 
**certificate_id** | **str** | Gets or sets the CertificateId value of the meta configuration. | [optional] 
**configuration_mode** | **str** | Gets or sets the ConfigurationMode value of the meta configuration. | [optional] 
**configuration_mode_frequency_mins** | **int** | Gets or sets the ConfigurationModeFrequencyMins value of the meta configuration. | [optional] 
**reboot_node_if_needed** | **bool** | Gets or sets the RebootNodeIfNeeded value of the meta configuration. | [optional] 
**refresh_frequency_mins** | **int** | Gets or sets the RefreshFrequencyMins value of the meta configuration. | [optional] 

## Example

```python
from openapi_client.models.dsc_meta_configuration import DscMetaConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DscMetaConfiguration from a JSON string
dsc_meta_configuration_instance = DscMetaConfiguration.from_json(json)
# print the JSON string representation of the object
print(DscMetaConfiguration.to_json())

# convert the object into a dict
dsc_meta_configuration_dict = dsc_meta_configuration_instance.to_dict()
# create an instance of DscMetaConfiguration from a dict
dsc_meta_configuration_from_dict = DscMetaConfiguration.from_dict(dsc_meta_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


