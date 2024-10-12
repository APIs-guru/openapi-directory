# Variable

Full representation of Variable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the variable.  *New in version 2.4.0*  | [optional] 
**key** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.variable import Variable

# TODO update the JSON string below
json = "{}"
# create an instance of Variable from a JSON string
variable_instance = Variable.from_json(json)
# print the JSON string representation of the object
print(Variable.to_json())

# convert the object into a dict
variable_dict = variable_instance.to_dict()
# create an instance of Variable from a dict
variable_from_dict = Variable.from_dict(variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


