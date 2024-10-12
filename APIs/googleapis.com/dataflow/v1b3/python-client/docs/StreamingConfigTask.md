# StreamingConfigTask

A task that carries configuration information for streaming computations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commit_stream_chunk_size_bytes** | **str** | Chunk size for commit streams from the harness to windmill. | [optional] 
**get_data_stream_chunk_size_bytes** | **str** | Chunk size for get data streams from the harness to windmill. | [optional] 
**max_work_item_commit_bytes** | **str** | Maximum size for work item commit supported windmill storage layer. | [optional] 
**streaming_computation_configs** | [**List[StreamingComputationConfig]**](StreamingComputationConfig.md) | Set of computation configuration information. | [optional] 
**user_step_to_state_family_name_map** | **Dict[str, str]** | Map from user step names to state families. | [optional] 
**windmill_service_endpoint** | **str** | If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using. | [optional] 
**windmill_service_port** | **str** | If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified. | [optional] 

## Example

```python
from openapi_client.models.streaming_config_task import StreamingConfigTask

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingConfigTask from a JSON string
streaming_config_task_instance = StreamingConfigTask.from_json(json)
# print the JSON string representation of the object
print(StreamingConfigTask.to_json())

# convert the object into a dict
streaming_config_task_dict = streaming_config_task_instance.to_dict()
# create an instance of StreamingConfigTask from a dict
streaming_config_task_from_dict = StreamingConfigTask.from_dict(streaming_config_task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


