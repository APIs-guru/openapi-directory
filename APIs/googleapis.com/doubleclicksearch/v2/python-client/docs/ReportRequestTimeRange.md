# ReportRequestTimeRange

If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_attributes_since_timestamp** | **str** | Inclusive UTC timestamp in RFC format, e.g., &#x60;2013-07-16T10:16:23.555Z&#x60;. See additional references on how changed attribute reports work. | [optional] 
**changed_metrics_since_timestamp** | **str** | Inclusive UTC timestamp in RFC format, e.g., &#x60;2013-07-16T10:16:23.555Z&#x60;. See additional references on how changed metrics reports work. | [optional] 
**end_date** | **str** | Inclusive date in YYYY-MM-DD format. | [optional] 
**start_date** | **str** | Inclusive date in YYYY-MM-DD format. | [optional] 

## Example

```python
from openapi_client.models.report_request_time_range import ReportRequestTimeRange

# TODO update the JSON string below
json = "{}"
# create an instance of ReportRequestTimeRange from a JSON string
report_request_time_range_instance = ReportRequestTimeRange.from_json(json)
# print the JSON string representation of the object
print(ReportRequestTimeRange.to_json())

# convert the object into a dict
report_request_time_range_dict = report_request_time_range_instance.to_dict()
# create an instance of ReportRequestTimeRange from a dict
report_request_time_range_from_dict = ReportRequestTimeRange.from_dict(report_request_time_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


