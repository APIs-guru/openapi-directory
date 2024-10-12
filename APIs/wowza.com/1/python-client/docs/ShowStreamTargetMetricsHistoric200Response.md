# ShowStreamTargetMetricsHistoric200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique alphanumeric string that identifies the stream target. | [optional] 
**interval** | **str** | The length of time for a block of metrics. The default is **10m** (10 minutes). | [optional] 
**metrics** | [**List[StreamTargetMetrics]**](StreamTargetMetrics.md) |  | [optional] 

## Example

```python
from openapi_client.models.show_stream_target_metrics_historic200_response import ShowStreamTargetMetricsHistoric200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ShowStreamTargetMetricsHistoric200Response from a JSON string
show_stream_target_metrics_historic200_response_instance = ShowStreamTargetMetricsHistoric200Response.from_json(json)
# print the JSON string representation of the object
print(ShowStreamTargetMetricsHistoric200Response.to_json())

# convert the object into a dict
show_stream_target_metrics_historic200_response_dict = show_stream_target_metrics_historic200_response_instance.to_dict()
# create an instance of ShowStreamTargetMetricsHistoric200Response from a dict
show_stream_target_metrics_historic200_response_from_dict = ShowStreamTargetMetricsHistoric200Response.from_dict(show_stream_target_metrics_historic200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


