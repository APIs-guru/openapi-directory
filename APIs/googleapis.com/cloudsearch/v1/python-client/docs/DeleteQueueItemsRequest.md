# DeleteQueueItemsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_name** | **str** | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} | [optional] 
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**queue** | **str** | The name of a queue to delete items from. | [optional] 

## Example

```python
from openapi_client.models.delete_queue_items_request import DeleteQueueItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteQueueItemsRequest from a JSON string
delete_queue_items_request_instance = DeleteQueueItemsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteQueueItemsRequest.to_json())

# convert the object into a dict
delete_queue_items_request_dict = delete_queue_items_request_instance.to_dict()
# create an instance of DeleteQueueItemsRequest from a dict
delete_queue_items_request_from_dict = DeleteQueueItemsRequest.from_dict(delete_queue_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


