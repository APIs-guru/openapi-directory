# JitRequestDefinition

Information about JIT request definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JitRequestProperties**](JitRequestProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.jit_request_definition import JitRequestDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of JitRequestDefinition from a JSON string
jit_request_definition_instance = JitRequestDefinition.from_json(json)
# print the JSON string representation of the object
print(JitRequestDefinition.to_json())

# convert the object into a dict
jit_request_definition_dict = jit_request_definition_instance.to_dict()
# create an instance of JitRequestDefinition from a dict
jit_request_definition_from_dict = JitRequestDefinition.from_dict(jit_request_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


