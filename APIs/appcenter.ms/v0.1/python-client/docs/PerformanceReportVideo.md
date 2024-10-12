# PerformanceReportVideo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_metadata** | [**PerformanceReportVideoVideoMetadata**](PerformanceReportVideoVideoMetadata.md) |  | 
**video_url** | **str** |  | 

## Example

```python
from openapi_client.models.performance_report_video import PerformanceReportVideo

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceReportVideo from a JSON string
performance_report_video_instance = PerformanceReportVideo.from_json(json)
# print the JSON string representation of the object
print(PerformanceReportVideo.to_json())

# convert the object into a dict
performance_report_video_dict = performance_report_video_instance.to_dict()
# create an instance of PerformanceReportVideo from a dict
performance_report_video_from_dict = PerformanceReportVideo.from_dict(performance_report_video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


