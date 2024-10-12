# InputParameter

Metadata of an input parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | The data type of the Parameter. | [optional] 
**default_value** | **object** | The following field specifies the default value of the Parameter provided by the external system if a value is not provided. | [optional] 
**description** | **str** | A brief description of the Parameter. | [optional] 
**json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**nullable** | **bool** | Specifies whether a null value is allowed. | [optional] 
**parameter** | **str** | Name of the Parameter. | [optional] 

## Example

```python
from openapi_client.models.input_parameter import InputParameter

# TODO update the JSON string below
json = "{}"
# create an instance of InputParameter from a JSON string
input_parameter_instance = InputParameter.from_json(json)
# print the JSON string representation of the object
print(InputParameter.to_json())

# convert the object into a dict
input_parameter_dict = input_parameter_instance.to_dict()
# create an instance of InputParameter from a dict
input_parameter_from_dict = InputParameter.from_dict(input_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


