# PendingMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | [**Channel**](Channel.md) |  | [optional] 
**message** | [**Message**](Message.md) |  | [optional] 
**metadata** | **Dict[str, str]** | Additional data attached to the pending message. This data is discarded once the pending message is committed. | [optional] 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.pending_message import PendingMessage

# TODO update the JSON string below
json = "{}"
# create an instance of PendingMessage from a JSON string
pending_message_instance = PendingMessage.from_json(json)
# print the JSON string representation of the object
print(PendingMessage.to_json())

# convert the object into a dict
pending_message_dict = pending_message_instance.to_dict()
# create an instance of PendingMessage from a dict
pending_message_from_dict = PendingMessage.from_dict(pending_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


