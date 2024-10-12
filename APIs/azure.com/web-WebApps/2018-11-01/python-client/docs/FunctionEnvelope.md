# FunctionEnvelope

Web Job Information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | FunctionEnvelope resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.function_envelope import FunctionEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of FunctionEnvelope from a JSON string
function_envelope_instance = FunctionEnvelope.from_json(json)
# print the JSON string representation of the object
print(FunctionEnvelope.to_json())

# convert the object into a dict
function_envelope_dict = function_envelope_instance.to_dict()
# create an instance of FunctionEnvelope from a dict
function_envelope_from_dict = FunctionEnvelope.from_dict(function_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


