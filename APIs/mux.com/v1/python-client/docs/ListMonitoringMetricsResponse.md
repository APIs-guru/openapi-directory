# ListMonitoringMetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ListMonitoringDimensionsResponseDataInner]**](ListMonitoringDimensionsResponseDataInner.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_monitoring_metrics_response import ListMonitoringMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMonitoringMetricsResponse from a JSON string
list_monitoring_metrics_response_instance = ListMonitoringMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMonitoringMetricsResponse.to_json())

# convert the object into a dict
list_monitoring_metrics_response_dict = list_monitoring_metrics_response_instance.to_dict()
# create an instance of ListMonitoringMetricsResponse from a dict
list_monitoring_metrics_response_from_dict = ListMonitoringMetricsResponse.from_dict(list_monitoring_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


