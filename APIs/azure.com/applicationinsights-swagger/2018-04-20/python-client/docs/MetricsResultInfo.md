# MetricsResultInfo

A metric result data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Start time of the metric. | [optional] 
**interval** | **str** | The interval used to segment the metric data. | [optional] 
**segments** | [**List[MetricsSegmentInfo]**](MetricsSegmentInfo.md) | Segmented metric data (if segmented). | [optional] 
**start** | **str** | Start time of the metric. | [optional] 

## Example

```python
from openapi_client.models.metrics_result_info import MetricsResultInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsResultInfo from a JSON string
metrics_result_info_instance = MetricsResultInfo.from_json(json)
# print the JSON string representation of the object
print(MetricsResultInfo.to_json())

# convert the object into a dict
metrics_result_info_dict = metrics_result_info_instance.to_dict()
# create an instance of MetricsResultInfo from a dict
metrics_result_info_from_dict = MetricsResultInfo.from_dict(metrics_result_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


