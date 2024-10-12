# Argument

The properties of a run argument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_secret** | **bool** | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | [optional] [default to False]
**name** | **str** | The name of the argument. | 
**value** | **str** | The value of the argument. | 

## Example

```python
from openapi_client.models.argument import Argument

# TODO update the JSON string below
json = "{}"
# create an instance of Argument from a JSON string
argument_instance = Argument.from_json(json)
# print the JSON string representation of the object
print(Argument.to_json())

# convert the object into a dict
argument_dict = argument_instance.to_dict()
# create an instance of Argument from a dict
argument_from_dict = Argument.from_dict(argument_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


