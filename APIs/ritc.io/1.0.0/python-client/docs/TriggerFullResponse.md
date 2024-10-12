# TriggerFullResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **int** |  | [optional] 
**codes** | **object** |  | [optional] 
**created_date** | **str** | The date the trigger was created | [optional] 
**description** | **str** | Trigger description | [optional] 
**function_id** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**modified_date** | **str** | The date the trigger was modified | [optional] 
**name** | **str** | Trigger name | [optional] 
**parameters** | **object** |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.trigger_full_response import TriggerFullResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerFullResponse from a JSON string
trigger_full_response_instance = TriggerFullResponse.from_json(json)
# print the JSON string representation of the object
print(TriggerFullResponse.to_json())

# convert the object into a dict
trigger_full_response_dict = trigger_full_response_instance.to_dict()
# create an instance of TriggerFullResponse from a dict
trigger_full_response_from_dict = TriggerFullResponse.from_dict(trigger_full_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


