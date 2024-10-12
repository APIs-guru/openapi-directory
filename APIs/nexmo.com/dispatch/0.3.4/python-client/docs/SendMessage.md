# SendMessage

Send Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**FromProperty**](FromProperty.md) |  | 
**message** | [**MessageProperty**](MessageProperty.md) |  | 
**to** | [**ToProperty**](ToProperty.md) |  | 

## Example

```python
from openapi_client.models.send_message import SendMessage

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessage from a JSON string
send_message_instance = SendMessage.from_json(json)
# print the JSON string representation of the object
print(SendMessage.to_json())

# convert the object into a dict
send_message_dict = send_message_instance.to_dict()
# create an instance of SendMessage from a dict
send_message_from_dict = SendMessage.from_dict(send_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


