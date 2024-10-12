# InputConfigurationContainer

Configuration for the input of a meter (digital inputs)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Name of the Input | [optional] 
**number** | **int** | The number of the Input. (1 for Input 1) | [optional] 
**off_text** | **str** | The visualization text for an OFF action | [optional] 
**on_text** | **str** | The visualization text for an ON action | [optional] 
**type** | **str** | The Type of the output | [optional] 

## Example

```python
from openapi_client.models.input_configuration_container import InputConfigurationContainer

# TODO update the JSON string below
json = "{}"
# create an instance of InputConfigurationContainer from a JSON string
input_configuration_container_instance = InputConfigurationContainer.from_json(json)
# print the JSON string representation of the object
print(InputConfigurationContainer.to_json())

# convert the object into a dict
input_configuration_container_dict = input_configuration_container_instance.to_dict()
# create an instance of InputConfigurationContainer from a dict
input_configuration_container_from_dict = InputConfigurationContainer.from_dict(input_configuration_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


