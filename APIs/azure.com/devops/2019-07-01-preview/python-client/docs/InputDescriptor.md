# InputDescriptor

Representation of a pipeline template input parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the input parameter. | [optional] 
**id** | **str** | Identifier of the input parameter. | 
**possible_values** | [**List[InputValue]**](InputValue.md) | List of possible values for the input parameter. | [optional] 
**type** | **str** | Data type of the value of the input parameter. | 

## Example

```python
from openapi_client.models.input_descriptor import InputDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of InputDescriptor from a JSON string
input_descriptor_instance = InputDescriptor.from_json(json)
# print the JSON string representation of the object
print(InputDescriptor.to_json())

# convert the object into a dict
input_descriptor_dict = input_descriptor_instance.to_dict()
# create an instance of InputDescriptor from a dict
input_descriptor_from_dict = InputDescriptor.from_dict(input_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


