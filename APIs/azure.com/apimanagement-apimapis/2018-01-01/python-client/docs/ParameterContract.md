# ParameterContract

Operation parameters details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | Default parameter value. | [optional] 
**description** | **str** | Parameter description. | [optional] 
**name** | **str** | Parameter name. | 
**required** | **bool** | whether parameter is required or not. | [optional] 
**type** | **str** | Parameter type. | 
**values** | **List[str]** | Parameter values. | [optional] 

## Example

```python
from openapi_client.models.parameter_contract import ParameterContract

# TODO update the JSON string below
json = "{}"
# create an instance of ParameterContract from a JSON string
parameter_contract_instance = ParameterContract.from_json(json)
# print the JSON string representation of the object
print(ParameterContract.to_json())

# convert the object into a dict
parameter_contract_dict = parameter_contract_instance.to_dict()
# create an instance of ParameterContract from a dict
parameter_contract_from_dict = ParameterContract.from_dict(parameter_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


