# RuntimeActionSchema

Schema of a runtime action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Output only. Name of the action. | [optional] [readonly] 
**description** | **str** | Output only. Brief Description of action | [optional] [readonly] 
**display_name** | **str** | Output only. Display Name of action to be shown on client side | [optional] [readonly] 
**input_json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**input_parameters** | [**List[InputParameter]**](InputParameter.md) | Output only. List of input parameter metadata for the action. | [optional] [readonly] 
**result_json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**result_metadata** | [**List[ResultMetadata]**](ResultMetadata.md) | Output only. List of result field metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runtime_action_schema import RuntimeActionSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeActionSchema from a JSON string
runtime_action_schema_instance = RuntimeActionSchema.from_json(json)
# print the JSON string representation of the object
print(RuntimeActionSchema.to_json())

# convert the object into a dict
runtime_action_schema_dict = runtime_action_schema_instance.to_dict()
# create an instance of RuntimeActionSchema from a dict
runtime_action_schema_from_dict = RuntimeActionSchema.from_dict(runtime_action_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


