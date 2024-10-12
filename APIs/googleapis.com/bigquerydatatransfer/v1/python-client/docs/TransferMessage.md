# TransferMessage

Represents a user facing message for a particular data transfer run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_text** | **str** | Message text. | [optional] 
**message_time** | **str** | Time when message was logged. | [optional] 
**severity** | **str** | Message severity. | [optional] 

## Example

```python
from openapi_client.models.transfer_message import TransferMessage

# TODO update the JSON string below
json = "{}"
# create an instance of TransferMessage from a JSON string
transfer_message_instance = TransferMessage.from_json(json)
# print the JSON string representation of the object
print(TransferMessage.to_json())

# convert the object into a dict
transfer_message_dict = transfer_message_instance.to_dict()
# create an instance of TransferMessage from a dict
transfer_message_from_dict = TransferMessage.from_dict(transfer_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


