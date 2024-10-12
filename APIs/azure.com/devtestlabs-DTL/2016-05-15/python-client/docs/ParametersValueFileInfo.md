# ParametersValueFileInfo

A file containing a set of parameter values for an ARM template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | File name. | [optional] 
**parameters_value_info** | **object** | Contents of the file. | [optional] 

## Example

```python
from openapi_client.models.parameters_value_file_info import ParametersValueFileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ParametersValueFileInfo from a JSON string
parameters_value_file_info_instance = ParametersValueFileInfo.from_json(json)
# print the JSON string representation of the object
print(ParametersValueFileInfo.to_json())

# convert the object into a dict
parameters_value_file_info_dict = parameters_value_file_info_instance.to_dict()
# create an instance of ParametersValueFileInfo from a dict
parameters_value_file_info_from_dict = ParametersValueFileInfo.from_dict(parameters_value_file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


