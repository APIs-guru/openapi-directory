# BuildArgument

Properties of a build argument.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_secret** | **bool** | Flag to indicate whether the argument represents a secret and want to be removed from build logs. | [optional] [default to False]
**name** | **str** | The name of the argument. | 
**type** | **str** | The type of the argument. | 
**value** | **str** | The value of the argument. | 

## Example

```python
from openapi_client.models.build_argument import BuildArgument

# TODO update the JSON string below
json = "{}"
# create an instance of BuildArgument from a JSON string
build_argument_instance = BuildArgument.from_json(json)
# print the JSON string representation of the object
print(BuildArgument.to_json())

# convert the object into a dict
build_argument_dict = build_argument_instance.to_dict()
# create an instance of BuildArgument from a dict
build_argument_from_dict = BuildArgument.from_dict(build_argument_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


