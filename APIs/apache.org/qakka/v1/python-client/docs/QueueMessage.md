# QueueMessage

A Queue Message

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Content-type of data associated with QueueMessage. | [optional] 
**create_date** | **int** | Date that message was received by system. | [optional] 
**data** | **str** | Embedded JSON to be sent with Queue Message. | [optional] 
**href** | **str** | URL of data associated with Queue Message (if not embedded JSON) | [optional] 
**message_id** | **str** | UUID of Message Data associated with this Queue Message | [optional] 
**queue_message_id** | **str** | UUID of Queue Message in local region. | [optional] 
**queue_name** | **str** | Name of Queue for message. | 
**receiving_region** | **str** | Regions to which message will be sent | [optional] 
**sending_region** | **str** | Region from which was sent | [optional] 

## Example

```python
from openapi_client.models.queue_message import QueueMessage

# TODO update the JSON string below
json = "{}"
# create an instance of QueueMessage from a JSON string
queue_message_instance = QueueMessage.from_json(json)
# print the JSON string representation of the object
print(QueueMessage.to_json())

# convert the object into a dict
queue_message_dict = queue_message_instance.to_dict()
# create an instance of QueueMessage from a dict
queue_message_from_dict = QueueMessage.from_dict(queue_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


