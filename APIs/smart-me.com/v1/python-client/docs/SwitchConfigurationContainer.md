# SwitchConfigurationContainer

The configuration for a phase switch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_switch_off** | **bool** | Flag if the switch can be turned off or is always on. | [optional] 
**number** | **int** | The number of the phase. (e.g. 1 for Phase L1) | [optional] 

## Example

```python
from openapi_client.models.switch_configuration_container import SwitchConfigurationContainer

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchConfigurationContainer from a JSON string
switch_configuration_container_instance = SwitchConfigurationContainer.from_json(json)
# print the JSON string representation of the object
print(SwitchConfigurationContainer.to_json())

# convert the object into a dict
switch_configuration_container_dict = switch_configuration_container_instance.to_dict()
# create an instance of SwitchConfigurationContainer from a dict
switch_configuration_container_from_dict = SwitchConfigurationContainer.from_dict(switch_configuration_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


