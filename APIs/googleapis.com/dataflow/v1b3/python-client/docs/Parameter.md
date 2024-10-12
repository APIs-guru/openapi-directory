# Parameter

Structured data associated with this message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key or name for this parameter. | [optional] 
**value** | **object** | Value for this parameter. | [optional] 

## Example

```python
from openapi_client.models.parameter import Parameter

# TODO update the JSON string below
json = "{}"
# create an instance of Parameter from a JSON string
parameter_instance = Parameter.from_json(json)
# print the JSON string representation of the object
print(Parameter.to_json())

# convert the object into a dict
parameter_dict = parameter_instance.to_dict()
# create an instance of Parameter from a dict
parameter_from_dict = Parameter.from_dict(parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


