# ParameterInfo

Information about an artifact's parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the artifact parameter. | [optional] 
**value** | **str** | The value of the artifact parameter. | [optional] 

## Example

```python
from openapi_client.models.parameter_info import ParameterInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterInfo from a JSON string
parameter_info_instance = ParameterInfo.from_json(json)
# print the JSON string representation of the object
print(ParameterInfo.to_json())

# convert the object into a dict
parameter_info_dict = parameter_info_instance.to_dict()
# create an instance of ParameterInfo from a dict
parameter_info_from_dict = ParameterInfo.from_dict(parameter_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


