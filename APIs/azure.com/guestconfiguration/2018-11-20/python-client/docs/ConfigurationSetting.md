# ConfigurationSetting

Configuration setting of LCM (Local Configuration Manager).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_after_reboot** | **str** | Specifies what happens after a reboot during the application of a configuration. The possible values are ContinueConfiguration and StopConfiguration | [optional] [readonly] 
**allow_module_overwrite** | **str** | If true - new configurations downloaded from the pull service are allowed to overwrite the old ones on the target node. Otherwise, false | [optional] 
**configuration_mode** | **str** | Specifies how the LCM(Local Configuration Manager) actually applies the configuration to the target nodes. Possible values are ApplyOnly, ApplyAndMonitor, and ApplyAndAutoCorrect. | [optional] [readonly] 
**configuration_mode_frequency_mins** | **float** | How often, in minutes, the current configuration is checked and applied. This property is ignored if the ConfigurationMode property is set to ApplyOnly. The default value is 15. | [optional] [readonly] 
**reboot_if_needed** | **str** | Set this to true to automatically reboot the node after a configuration that requires reboot is applied. Otherwise, you will have to manually reboot the node for any configuration that requires it. The default value is false. To use this setting when a reboot condition is enacted by something other than DSC (such as Windows Installer), combine this setting with the xPendingReboot module. | [optional] [readonly] [default to 'False']
**refresh_frequency_mins** | **float** | The time interval, in minutes, at which the LCM checks a pull service to get updated configurations. This value is ignored if the LCM is not configured in pull mode. The default value is 30. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration_setting import ConfigurationSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationSetting from a JSON string
configuration_setting_instance = ConfigurationSetting.from_json(json)
# print the JSON string representation of the object
print(ConfigurationSetting.to_json())

# convert the object into a dict
configuration_setting_dict = configuration_setting_instance.to_dict()
# create an instance of ConfigurationSetting from a dict
configuration_setting_from_dict = ConfigurationSetting.from_dict(configuration_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


