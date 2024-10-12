# ComputeMessageStatsRequest

Compute statistics about a range of messages in a given topic and partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_cursor** | [**Cursor**](Cursor.md) |  | [optional] 
**partition** | **str** | Required. The partition for which we should compute message stats. | [optional] 
**start_cursor** | [**Cursor**](Cursor.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_message_stats_request import ComputeMessageStatsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeMessageStatsRequest from a JSON string
compute_message_stats_request_instance = ComputeMessageStatsRequest.from_json(json)
# print the JSON string representation of the object
print(ComputeMessageStatsRequest.to_json())

# convert the object into a dict
compute_message_stats_request_dict = compute_message_stats_request_instance.to_dict()
# create an instance of ComputeMessageStatsRequest from a dict
compute_message_stats_request_from_dict = ComputeMessageStatsRequest.from_dict(compute_message_stats_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


