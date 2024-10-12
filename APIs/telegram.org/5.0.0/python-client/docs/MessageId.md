# MessageId

This object represents a unique message identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_id** | **int** | Unique message identifier | 

## Example

```python
from openapi_client.models.message_id import MessageId

# TODO update the JSON string below
json = "{}"
# create an instance of MessageId from a JSON string
message_id_instance = MessageId.from_json(json)
# print the JSON string representation of the object
print(MessageId.to_json())

# convert the object into a dict
message_id_dict = message_id_instance.to_dict()
# create an instance of MessageId from a dict
message_id_from_dict = MessageId.from_dict(message_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


