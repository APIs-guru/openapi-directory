# BatchDeleteMessagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The IDs of the messages to delete. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_messages_request import BatchDeleteMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteMessagesRequest from a JSON string
batch_delete_messages_request_instance = BatchDeleteMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteMessagesRequest.to_json())

# convert the object into a dict
batch_delete_messages_request_dict = batch_delete_messages_request_instance.to_dict()
# create an instance of BatchDeleteMessagesRequest from a dict
batch_delete_messages_request_from_dict = BatchDeleteMessagesRequest.from_dict(batch_delete_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


