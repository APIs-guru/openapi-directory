# Queue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[Content]**](Content.md) |  | 
**content_items_count** | **int** |  | [optional] 
**controls** | [**QueueControlMapping**](QueueControlMapping.md) |  | [optional] 
**identifier** | **str** |  | 
**insert_pointer** | [**QueueInsertPointer**](QueueInsertPointer.md) |  | [optional] 
**next_content_url** | **str** |  | [optional] 
**play_pointer** | [**QueuePlayPointer**](QueuePlayPointer.md) |  | [optional] 
**preroll_seconds** | **float** |  | [optional] 
**previous_content_url** | **str** |  | [optional] 
**skips_remaining** | **int** |  | [optional] 
**version** | **str** |  | 

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


