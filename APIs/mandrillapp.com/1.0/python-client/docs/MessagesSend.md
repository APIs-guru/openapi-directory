# MessagesSend


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_async** | **bool** |  | [optional] 
**ip_pool** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**message** | [**MessagesSendMessage**](MessagesSendMessage.md) |  | [optional] 
**send_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_send import MessagesSend

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSend from a JSON string
messages_send_instance = MessagesSend.from_json(json)
# print the JSON string representation of the object
print(MessagesSend.to_json())

# convert the object into a dict
messages_send_dict = messages_send_instance.to_dict()
# create an instance of MessagesSend from a dict
messages_send_from_dict = MessagesSend.from_dict(messages_send_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


