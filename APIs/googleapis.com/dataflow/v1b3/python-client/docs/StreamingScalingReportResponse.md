# StreamingScalingReportResponse

Contains per-user-worker streaming scaling recommendation from the backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_thread_count** | **int** | Maximum thread count limit; | [optional] 

## Example

```python
from openapi_client.models.streaming_scaling_report_response import StreamingScalingReportResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingScalingReportResponse from a JSON string
streaming_scaling_report_response_instance = StreamingScalingReportResponse.from_json(json)
# print the JSON string representation of the object
print(StreamingScalingReportResponse.to_json())

# convert the object into a dict
streaming_scaling_report_response_dict = streaming_scaling_report_response_instance.to_dict()
# create an instance of StreamingScalingReportResponse from a dict
streaming_scaling_report_response_from_dict = StreamingScalingReportResponse.from_dict(streaming_scaling_report_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


