# TimeSeriesRatio

A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad_service_filter** | **str** | A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying bad service, either demanded service that was not provided or demanded service that was of inadequate quality. Must have ValueType &#x3D; DOUBLE or ValueType &#x3D; INT64 and must have MetricKind &#x3D; DELTA or MetricKind &#x3D; CUMULATIVE. | [optional] 
**good_service_filter** | **str** | A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying good service provided. Must have ValueType &#x3D; DOUBLE or ValueType &#x3D; INT64 and must have MetricKind &#x3D; DELTA or MetricKind &#x3D; CUMULATIVE. | [optional] 
**total_service_filter** | **str** | A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries quantifying total demanded service. Must have ValueType &#x3D; DOUBLE or ValueType &#x3D; INT64 and must have MetricKind &#x3D; DELTA or MetricKind &#x3D; CUMULATIVE. | [optional] 

## Example

```python
from openapi_client.models.time_series_ratio import TimeSeriesRatio

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesRatio from a JSON string
time_series_ratio_instance = TimeSeriesRatio.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesRatio.to_json())

# convert the object into a dict
time_series_ratio_dict = time_series_ratio_instance.to_dict()
# create an instance of TimeSeriesRatio from a dict
time_series_ratio_from_dict = TimeSeriesRatio.from_dict(time_series_ratio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


