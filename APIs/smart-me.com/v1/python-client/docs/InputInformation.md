# InputInformation

Informations about the Inputs of a Meter or Folder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The Name of the Input | [optional] 
**number** | **int** | The Number of this Input. Use this as ID to switch it on or off. | [optional] 

## Example

```python
from openapi_client.models.input_information import InputInformation

# TODO update the JSON string below
json = "{}"
# create an instance of InputInformation from a JSON string
input_information_instance = InputInformation.from_json(json)
# print the JSON string representation of the object
print(InputInformation.to_json())

# convert the object into a dict
input_information_dict = input_information_instance.to_dict()
# create an instance of InputInformation from a dict
input_information_from_dict = InputInformation.from_dict(input_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


