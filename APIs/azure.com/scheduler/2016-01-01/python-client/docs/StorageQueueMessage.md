# StorageQueueMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Gets or sets the message. | [optional] 
**queue_name** | **str** | Gets or sets the queue name. | [optional] 
**sas_token** | **str** | Gets or sets the SAS key. | [optional] 
**storage_account** | **str** | Gets or sets the storage account name. | [optional] 

## Example

```python
from openapi_client.models.storage_queue_message import StorageQueueMessage

# TODO update the JSON string below
json = "{}"
# create an instance of StorageQueueMessage from a JSON string
storage_queue_message_instance = StorageQueueMessage.from_json(json)
# print the JSON string representation of the object
print(StorageQueueMessage.to_json())

# convert the object into a dict
storage_queue_message_dict = storage_queue_message_instance.to_dict()
# create an instance of StorageQueueMessage from a dict
storage_queue_message_from_dict = StorageQueueMessage.from_dict(storage_queue_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


