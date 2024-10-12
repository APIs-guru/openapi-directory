# PerfPowerMetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[PerfPowerMetric]**](PerfPowerMetric.md) |  | 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.perf_power_metrics_response import PerfPowerMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PerfPowerMetricsResponse from a JSON string
perf_power_metrics_response_instance = PerfPowerMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(PerfPowerMetricsResponse.to_json())

# convert the object into a dict
perf_power_metrics_response_dict = perf_power_metrics_response_instance.to_dict()
# create an instance of PerfPowerMetricsResponse from a dict
perf_power_metrics_response_from_dict = PerfPowerMetricsResponse.from_dict(perf_power_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


