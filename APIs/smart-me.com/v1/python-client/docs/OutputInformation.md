# OutputInformation

Informations about the Outputs of a Meter or Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_type** | **str** | The type of the Output | [optional] 
**name** | **str** | The Name of the Output | [optional] 
**number** | **int** | The Number of this Output. Use this as ID to switch it on or off. | [optional] 
**obis_code** | **str** | The Obis Code for this Output | [optional] 

## Example

```python
from openapi_client.models.output_information import OutputInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OutputInformation from a JSON string
output_information_instance = OutputInformation.from_json(json)
# print the JSON string representation of the object
print(OutputInformation.to_json())

# convert the object into a dict
output_information_dict = output_information_instance.to_dict()
# create an instance of OutputInformation from a dict
output_information_from_dict = OutputInformation.from_dict(output_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


