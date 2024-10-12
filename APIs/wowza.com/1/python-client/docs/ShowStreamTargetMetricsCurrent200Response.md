# ShowStreamTargetMetricsCurrent200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**metrics** | [**StreamTargetMetrics**](StreamTargetMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.show_stream_target_metrics_current200_response import ShowStreamTargetMetricsCurrent200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ShowStreamTargetMetricsCurrent200Response from a JSON string
show_stream_target_metrics_current200_response_instance = ShowStreamTargetMetricsCurrent200Response.from_json(json)
# print the JSON string representation of the object
print(ShowStreamTargetMetricsCurrent200Response.to_json())

# convert the object into a dict
show_stream_target_metrics_current200_response_dict = show_stream_target_metrics_current200_response_instance.to_dict()
# create an instance of ShowStreamTargetMetricsCurrent200Response from a dict
show_stream_target_metrics_current200_response_from_dict = ShowStreamTargetMetricsCurrent200Response.from_dict(show_stream_target_metrics_current200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


