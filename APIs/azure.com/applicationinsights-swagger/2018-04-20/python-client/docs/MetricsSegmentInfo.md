# MetricsSegmentInfo

A metric segment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Start time of the metric segment (only when an interval was specified). | [optional] 
**segments** | [**List[MetricsSegmentInfo]**](MetricsSegmentInfo.md) | Segmented metric data (if further segmented). | [optional] 
**start** | **str** | Start time of the metric segment (only when an interval was specified). | [optional] 

## Example

```python
from openapi_client.models.metrics_segment_info import MetricsSegmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsSegmentInfo from a JSON string
metrics_segment_info_instance = MetricsSegmentInfo.from_json(json)
# print the JSON string representation of the object
print(MetricsSegmentInfo.to_json())

# convert the object into a dict
metrics_segment_info_dict = metrics_segment_info_instance.to_dict()
# create an instance of MetricsSegmentInfo from a dict
metrics_segment_info_from_dict = MetricsSegmentInfo.from_dict(metrics_segment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


