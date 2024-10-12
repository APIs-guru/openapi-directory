# CustomToolkitSettings

Specifies the settings for a custom tool kit job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.custom_toolkit_settings import CustomToolkitSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CustomToolkitSettings from a JSON string
custom_toolkit_settings_instance = CustomToolkitSettings.from_json(json)
# print the JSON string representation of the object
print(CustomToolkitSettings.to_json())

# convert the object into a dict
custom_toolkit_settings_dict = custom_toolkit_settings_instance.to_dict()
# create an instance of CustomToolkitSettings from a dict
custom_toolkit_settings_from_dict = CustomToolkitSettings.from_dict(custom_toolkit_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


