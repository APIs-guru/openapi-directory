# QueuePlayPointer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_identifier** | **str** |  | [optional] 
**offset_in_millis** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.queue_play_pointer import QueuePlayPointer

# TODO update the JSON string below
json = "{}"
# create an instance of QueuePlayPointer from a JSON string
queue_play_pointer_instance = QueuePlayPointer.from_json(json)
# print the JSON string representation of the object
print(QueuePlayPointer.to_json())

# convert the object into a dict
queue_play_pointer_dict = queue_play_pointer_instance.to_dict()
# create an instance of QueuePlayPointer from a dict
queue_play_pointer_from_dict = QueuePlayPointer.from_dict(queue_play_pointer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


