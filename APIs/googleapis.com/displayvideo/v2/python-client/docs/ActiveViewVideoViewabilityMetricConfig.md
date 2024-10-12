# ActiveViewVideoViewabilityMetricConfig

Configuration for custom Active View video viewability metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The display name of the custom metric. | [optional] 
**minimum_duration** | **str** | The minimum visible video duration required (in seconds) in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first). | [optional] 
**minimum_quartile** | **str** | The minimum visible video duration required, based on the video quartiles, in order for an impression to be recorded. You must specify minimum_duration, minimum_quartile or both. If both are specified, an impression meets the metric criteria if either requirement is met (whichever happens first). | [optional] 
**minimum_viewability** | **str** | Required. The minimum percentage of the video ad&#39;s pixels visible on the screen in order for an impression to be recorded. | [optional] 
**minimum_volume** | **str** | Required. The minimum percentage of the video ad&#39;s volume required in order for an impression to be recorded. | [optional] 

## Example

```python
from openapi_client.models.active_view_video_viewability_metric_config import ActiveViewVideoViewabilityMetricConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveViewVideoViewabilityMetricConfig from a JSON string
active_view_video_viewability_metric_config_instance = ActiveViewVideoViewabilityMetricConfig.from_json(json)
# print the JSON string representation of the object
print(ActiveViewVideoViewabilityMetricConfig.to_json())

# convert the object into a dict
active_view_video_viewability_metric_config_dict = active_view_video_viewability_metric_config_instance.to_dict()
# create an instance of ActiveViewVideoViewabilityMetricConfig from a dict
active_view_video_viewability_metric_config_from_dict = ActiveViewVideoViewabilityMetricConfig.from_dict(active_view_video_viewability_metric_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


