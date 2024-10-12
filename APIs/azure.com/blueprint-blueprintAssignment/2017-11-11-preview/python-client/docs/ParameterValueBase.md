# ParameterValueBase

Base class for ParameterValue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional property, just to establish ParameterValueBase as a BaseClass. | [optional] 

## Example

```python
from openapi_client.models.parameter_value_base import ParameterValueBase

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterValueBase from a JSON string
parameter_value_base_instance = ParameterValueBase.from_json(json)
# print the JSON string representation of the object
print(ParameterValueBase.to_json())

# convert the object into a dict
parameter_value_base_dict = parameter_value_base_instance.to_dict()
# create an instance of ParameterValueBase from a dict
parameter_value_base_from_dict = ParameterValueBase.from_dict(parameter_value_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


