# QueueInsertPointer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after_identifier** | **str** |  | [optional] 
**replace** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.queue_insert_pointer import QueueInsertPointer

# TODO update the JSON string below
json = "{}"
# create an instance of QueueInsertPointer from a JSON string
queue_insert_pointer_instance = QueueInsertPointer.from_json(json)
# print the JSON string representation of the object
print(QueueInsertPointer.to_json())

# convert the object into a dict
queue_insert_pointer_dict = queue_insert_pointer_instance.to_dict()
# create an instance of QueueInsertPointer from a dict
queue_insert_pointer_from_dict = QueueInsertPointer.from_dict(queue_insert_pointer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


