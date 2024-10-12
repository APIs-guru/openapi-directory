# ActionSend


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**ActionSendConfig**](ActionSendConfig.md) |  | 
**created_at** | **datetime** |  | 
**created_by** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**output** | **str** |  | 
**owner** | **str** |  | 

## Example

```python
from openapi_client.models.action_send import ActionSend

# TODO update the JSON string below
json = "{}"
# create an instance of ActionSend from a JSON string
action_send_instance = ActionSend.from_json(json)
# print the JSON string representation of the object
print(ActionSend.to_json())

# convert the object into a dict
action_send_dict = action_send_instance.to_dict()
# create an instance of ActionSend from a dict
action_send_from_dict = ActionSend.from_dict(action_send_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


