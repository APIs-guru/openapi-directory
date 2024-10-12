# StreamingStragglerInfo

Information useful for streaming straggler identification and debugging.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_watermark_lag** | **str** | The event-time watermark lag at the time of the straggler detection. | [optional] 
**end_time** | **str** | End time of this straggler. | [optional] 
**start_time** | **str** | Start time of this straggler. | [optional] 
**system_watermark_lag** | **str** | The system watermark lag at the time of the straggler detection. | [optional] 
**worker_name** | **str** | Name of the worker where the straggler was detected. | [optional] 

## Example

```python
from openapi_client.models.streaming_straggler_info import StreamingStragglerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingStragglerInfo from a JSON string
streaming_straggler_info_instance = StreamingStragglerInfo.from_json(json)
# print the JSON string representation of the object
print(StreamingStragglerInfo.to_json())

# convert the object into a dict
streaming_straggler_info_dict = streaming_straggler_info_instance.to_dict()
# create an instance of StreamingStragglerInfo from a dict
streaming_straggler_info_from_dict = StreamingStragglerInfo.from_dict(streaming_straggler_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


