# LinuxProperties

Linux specific update configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_package_name_masks** | **List[str]** | packages excluded from the software update configuration. | [optional] 
**included_package_classifications** | **str** | Update classifications included in the software update configuration. | [optional] 
**included_package_name_masks** | **List[str]** | packages included from the software update configuration. | [optional] 
**reboot_setting** | **str** | Reboot setting for the software update configuration. | [optional] 

## Example

```python
from openapi_client.models.linux_properties import LinuxProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LinuxProperties from a JSON string
linux_properties_instance = LinuxProperties.from_json(json)
# print the JSON string representation of the object
print(LinuxProperties.to_json())

# convert the object into a dict
linux_properties_dict = linux_properties_instance.to_dict()
# create an instance of LinuxProperties from a dict
linux_properties_from_dict = LinuxProperties.from_dict(linux_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


