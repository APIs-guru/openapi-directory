# ParameterArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | [**List[Parameter]**](Parameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.parameter_array import ParameterArray

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterArray from a JSON string
parameter_array_instance = ParameterArray.from_json(json)
# print the JSON string representation of the object
print(ParameterArray.to_json())

# convert the object into a dict
parameter_array_dict = parameter_array_instance.to_dict()
# create an instance of ParameterArray from a dict
parameter_array_from_dict = ParameterArray.from_dict(parameter_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


