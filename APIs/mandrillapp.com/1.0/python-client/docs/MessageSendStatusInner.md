# MessageSendStatusInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**reject_reason** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.message_send_status_inner import MessageSendStatusInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessageSendStatusInner from a JSON string
message_send_status_inner_instance = MessageSendStatusInner.from_json(json)
# print the JSON string representation of the object
print(MessageSendStatusInner.to_json())

# convert the object into a dict
message_send_status_inner_dict = message_send_status_inner_instance.to_dict()
# create an instance of MessageSendStatusInner from a dict
message_send_status_inner_from_dict = MessageSendStatusInner.from_dict(message_send_status_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


