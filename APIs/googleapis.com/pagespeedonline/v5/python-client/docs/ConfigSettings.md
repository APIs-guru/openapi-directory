# ConfigSettings

Message containing the configuration settings for the Lighthouse run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | How Lighthouse was run, e.g. from the Chrome extension or from the npm module. | [optional] 
**emulated_form_factor** | **str** | The form factor the emulation should use. This field is deprecated, form_factor should be used instead. | [optional] 
**form_factor** | **str** | How Lighthouse should interpret this run in regards to scoring performance metrics and skipping mobile-only tests in desktop. | [optional] 
**locale** | **str** | The locale setting. | [optional] 
**only_categories** | **object** | List of categories of audits the run should conduct. | [optional] 

## Example

```python
from openapi_client.models.config_settings import ConfigSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigSettings from a JSON string
config_settings_instance = ConfigSettings.from_json(json)
# print the JSON string representation of the object
print(ConfigSettings.to_json())

# convert the object into a dict
config_settings_dict = config_settings_instance.to_dict()
# create an instance of ConfigSettings from a dict
config_settings_from_dict = ConfigSettings.from_dict(config_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


