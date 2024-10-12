# BatchGetMessagesResponse

Gets multiple messages in a specified HL7v2 store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[Message]**](Message.md) | The returned Messages. See &#x60;MessageView&#x60; for populated fields. | [optional] 

## Example

```python
from openapi_client.models.batch_get_messages_response import BatchGetMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetMessagesResponse from a JSON string
batch_get_messages_response_instance = BatchGetMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetMessagesResponse.to_json())

# convert the object into a dict
batch_get_messages_response_dict = batch_get_messages_response_instance.to_dict()
# create an instance of BatchGetMessagesResponse from a dict
batch_get_messages_response_from_dict = BatchGetMessagesResponse.from_dict(batch_get_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


