# JitRequestDefinitionListResult

List of JIT requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[JitRequestDefinition]**](JitRequestDefinition.md) | The array of Jit request definition. | [optional] 

## Example

```python
from openapi_client.models.jit_request_definition_list_result import JitRequestDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JitRequestDefinitionListResult from a JSON string
jit_request_definition_list_result_instance = JitRequestDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(JitRequestDefinitionListResult.to_json())

# convert the object into a dict
jit_request_definition_list_result_dict = jit_request_definition_list_result_instance.to_dict()
# create an instance of JitRequestDefinitionListResult from a dict
jit_request_definition_list_result_from_dict = JitRequestDefinitionListResult.from_dict(jit_request_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


