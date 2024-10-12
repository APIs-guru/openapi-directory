# ComputeMessageStatsResponse

Response containing stats for messages in the requested topic and partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message_bytes** | **str** | The number of quota bytes accounted to these messages. | [optional] 
**message_count** | **str** | The count of messages. | [optional] 
**minimum_event_time** | **str** | The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages. | [optional] 
**minimum_publish_time** | **str** | The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages. | [optional] 

## Example

```python
from openapi_client.models.compute_message_stats_response import ComputeMessageStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeMessageStatsResponse from a JSON string
compute_message_stats_response_instance = ComputeMessageStatsResponse.from_json(json)
# print the JSON string representation of the object
print(ComputeMessageStatsResponse.to_json())

# convert the object into a dict
compute_message_stats_response_dict = compute_message_stats_response_instance.to_dict()
# create an instance of ComputeMessageStatsResponse from a dict
compute_message_stats_response_from_dict = ComputeMessageStatsResponse.from_dict(compute_message_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


