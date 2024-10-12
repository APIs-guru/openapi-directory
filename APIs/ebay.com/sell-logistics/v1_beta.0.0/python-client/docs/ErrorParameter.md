# ErrorParameter

Container for an error parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the entity that threw the error. | [optional] 
**value** | **str** | A description of the error. | [optional] 

## Example

```python
from openapi_client.models.error_parameter import ErrorParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorParameter from a JSON string
error_parameter_instance = ErrorParameter.from_json(json)
# print the JSON string representation of the object
print(ErrorParameter.to_json())

# convert the object into a dict
error_parameter_dict = error_parameter_instance.to_dict()
# create an instance of ErrorParameter from a dict
error_parameter_from_dict = ErrorParameter.from_dict(error_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


