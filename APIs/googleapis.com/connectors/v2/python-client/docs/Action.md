# Action

Action message contains metadata information about a single action present in the external system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Brief Description of action | [optional] 
**display_name** | **str** | Display Name of action to be shown on client side | [optional] 
**input_json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**input_parameters** | [**List[InputParameter]**](InputParameter.md) | List containing input parameter metadata. | [optional] 
**name** | **str** | Name of the action. | [optional] 
**result_json_schema** | [**JsonSchema**](JsonSchema.md) |  | [optional] 
**result_metadata** | [**List[ResultMetadata]**](ResultMetadata.md) | List containing the metadata of result fields. | [optional] 

## Example

```python
from openapi_client.models.action import Action

# TODO update the JSON string below
json = "{}"
# create an instance of Action from a JSON string
action_instance = Action.from_json(json)
# print the JSON string representation of the object
print(Action.to_json())

# convert the object into a dict
action_dict = action_instance.to_dict()
# create an instance of Action from a dict
action_from_dict = Action.from_dict(action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


