# ActionShortResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** |  | [optional] 
**created_date** | **str** | The date the action was created | [optional] 
**description** | **str** | Action description | [optional] 
**function_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**modified_date** | **str** | The date the action was modified | [optional] 
**name** | **str** | Action name | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_short_response import ActionShortResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActionShortResponse from a JSON string
action_short_response_instance = ActionShortResponse.from_json(json)
# print the JSON string representation of the object
print(ActionShortResponse.to_json())

# convert the object into a dict
action_short_response_dict = action_short_response_instance.to_dict()
# create an instance of ActionShortResponse from a dict
action_short_response_from_dict = ActionShortResponse.from_dict(action_short_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


