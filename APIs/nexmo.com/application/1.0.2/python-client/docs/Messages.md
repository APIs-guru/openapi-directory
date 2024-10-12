# Messages

The Nexmo product that you access with this application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhooks** | [**List[MessagesWebhooksInner]**](MessagesWebhooksInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.messages import Messages

# TODO update the JSON string below
json = "{}"
# create an instance of Messages from a JSON string
messages_instance = Messages.from_json(json)
# print the JSON string representation of the object
print(Messages.to_json())

# convert the object into a dict
messages_dict = messages_instance.to_dict()
# create an instance of Messages from a dict
messages_from_dict = Messages.from_dict(messages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


