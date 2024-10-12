# Queue

Specifies the configuration for a Queue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of queue, must be unique. | 

## Example

```python
from openapi_client.models.queue import Queue

# TODO update the JSON string below
json = "{}"
# create an instance of Queue from a JSON string
queue_instance = Queue.from_json(json)
# print the JSON string representation of the object
print(Queue.to_json())

# convert the object into a dict
queue_dict = queue_instance.to_dict()
# create an instance of Queue from a dict
queue_from_dict = Queue.from_dict(queue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


