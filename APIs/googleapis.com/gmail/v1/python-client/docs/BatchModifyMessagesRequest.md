# BatchModifyMessagesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_label_ids** | **List[str]** | A list of label IDs to add to messages. | [optional] 
**ids** | **List[str]** | The IDs of the messages to modify. There is a limit of 1000 ids per request. | [optional] 
**remove_label_ids** | **List[str]** | A list of label IDs to remove from messages. | [optional] 

## Example

```python
from openapi_client.models.batch_modify_messages_request import BatchModifyMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchModifyMessagesRequest from a JSON string
batch_modify_messages_request_instance = BatchModifyMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchModifyMessagesRequest.to_json())

# convert the object into a dict
batch_modify_messages_request_dict = batch_modify_messages_request_instance.to_dict()
# create an instance of BatchModifyMessagesRequest from a dict
batch_modify_messages_request_from_dict = BatchModifyMessagesRequest.from_dict(batch_modify_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


