# ActionFullResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **int** |  | [optional] 
**codes** | **object** |  | [optional] 
**created_date** | **str** | The date the action was created | [optional] 
**description** | **str** | Action description | [optional] 
**function_id** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**modified_date** | **str** | The date the action was modified | [optional] 
**name** | **str** | Action name | [optional] 
**parameters** | **object** |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_full_response import ActionFullResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActionFullResponse from a JSON string
action_full_response_instance = ActionFullResponse.from_json(json)
# print the JSON string representation of the object
print(ActionFullResponse.to_json())

# convert the object into a dict
action_full_response_dict = action_full_response_instance.to_dict()
# create an instance of ActionFullResponse from a dict
action_full_response_from_dict = ActionFullResponse.from_dict(action_full_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


