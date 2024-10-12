# StreamTargetMetrics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_bytes_in** | **float** | The average number of bytes transfered to the origin server by the source. | [optional] 
**average_total_connections** | **float** | The total number of current connections. | [optional] 
**created_at** | **datetime** | The date and time, in UTC, that the metrics were recorded. | [optional] 
**dropped_connections** | **int** | The total number of dropped connections since the last interval. | [optional] 
**maximum_total_connections** | **int** | The maximum number of connections during the interval. | [optional] 
**minimum_total_connections** | **int** | The minimum number of connections during the interval. | [optional] 
**new_connections** | **int** | The total number of new connections since the last interval. | [optional] 

## Example

```python
from openapi_client.models.stream_target_metrics import StreamTargetMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of StreamTargetMetrics from a JSON string
stream_target_metrics_instance = StreamTargetMetrics.from_json(json)
# print the JSON string representation of the object
print(StreamTargetMetrics.to_json())

# convert the object into a dict
stream_target_metrics_dict = stream_target_metrics_instance.to_dict()
# create an instance of StreamTargetMetrics from a dict
stream_target_metrics_from_dict = StreamTargetMetrics.from_dict(stream_target_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


