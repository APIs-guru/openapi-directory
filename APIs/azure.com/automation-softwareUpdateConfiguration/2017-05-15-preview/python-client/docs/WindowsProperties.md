# WindowsProperties

Windows specific update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_kb_numbers** | **List[str]** | KB numbers excluded from the software update configuration. | [optional] 
**included_kb_numbers** | **List[str]** | KB numbers included from the software update configuration. | [optional] 
**included_update_classifications** | **str** | Update classification included in the software update configuration. A comma separated string with required values | [optional] 
**reboot_setting** | **str** | Reboot setting for the software update configuration. | [optional] 

## Example

```python
from openapi_client.models.windows_properties import WindowsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WindowsProperties from a JSON string
windows_properties_instance = WindowsProperties.from_json(json)
# print the JSON string representation of the object
print(WindowsProperties.to_json())

# convert the object into a dict
windows_properties_dict = windows_properties_instance.to_dict()
# create an instance of WindowsProperties from a dict
windows_properties_from_dict = WindowsProperties.from_dict(windows_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


