# StreamingScalingReport

Contains per-user worker telemetry used in streaming autoscaling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_bundle_count** | **int** |  | [optional] 
**active_thread_count** | **int** | Current acive thread count. | [optional] 
**maximum_bundle_count** | **int** | Maximum bundle count. | [optional] 
**maximum_bytes** | **str** | Maximum bytes. | [optional] 
**maximum_bytes_count** | **int** |  | [optional] 
**maximum_thread_count** | **int** | Maximum thread count limit. | [optional] 
**outstanding_bundle_count** | **int** | Current outstanding bundle count. | [optional] 
**outstanding_bytes** | **str** | Current outstanding bytes. | [optional] 
**outstanding_bytes_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.streaming_scaling_report import StreamingScalingReport

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingScalingReport from a JSON string
streaming_scaling_report_instance = StreamingScalingReport.from_json(json)
# print the JSON string representation of the object
print(StreamingScalingReport.to_json())

# convert the object into a dict
streaming_scaling_report_dict = streaming_scaling_report_instance.to_dict()
# create an instance of StreamingScalingReport from a dict
streaming_scaling_report_from_dict = StreamingScalingReport.from_dict(streaming_scaling_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


