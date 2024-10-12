# OperatingSystemConfiguration

Describes the configuration of the operating system of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitness** | [**Bitness**](Bitness.md) |  | 
**family** | [**OperatingSystemFamily**](OperatingSystemFamily.md) |  | 
**full_name** | **str** | Operating system full name. | 

## Example

```python
from openapi_client.models.operating_system_configuration import OperatingSystemConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of OperatingSystemConfiguration from a JSON string
operating_system_configuration_instance = OperatingSystemConfiguration.from_json(json)
# print the JSON string representation of the object
print(OperatingSystemConfiguration.to_json())

# convert the object into a dict
operating_system_configuration_dict = operating_system_configuration_instance.to_dict()
# create an instance of OperatingSystemConfiguration from a dict
operating_system_configuration_from_dict = OperatingSystemConfiguration.from_dict(operating_system_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


