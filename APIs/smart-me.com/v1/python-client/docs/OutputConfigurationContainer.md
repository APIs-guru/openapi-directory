# OutputConfigurationContainer

Configuration for the outputs of a meter (analog/digital outputs)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digital_output_no_connection_action** | **str** | The Action when the device has lost the connection | [optional] 
**name** | **str** | The Name of the Output | [optional] 
**number** | **int** | The number of the Output. (1 for Output 1, 2 for Output 2) | [optional] 
**s0_pulse_value** | **str** | The S0 Pulse Value | [optional] 
**type** | **str** | The Type of the output | [optional] 

## Example

```python
from openapi_client.models.output_configuration_container import OutputConfigurationContainer

# TODO update the JSON string below
json = "{}"
# create an instance of OutputConfigurationContainer from a JSON string
output_configuration_container_instance = OutputConfigurationContainer.from_json(json)
# print the JSON string representation of the object
print(OutputConfigurationContainer.to_json())

# convert the object into a dict
output_configuration_container_dict = output_configuration_container_instance.to_dict()
# create an instance of OutputConfigurationContainer from a dict
output_configuration_container_from_dict = OutputConfigurationContainer.from_dict(output_configuration_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


