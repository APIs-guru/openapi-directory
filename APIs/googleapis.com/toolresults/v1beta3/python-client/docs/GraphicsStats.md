# GraphicsStats

Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buckets** | [**List[GraphicsStatsBucket]**](GraphicsStatsBucket.md) | Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity) | [optional] 
**high_input_latency_count** | **str** | Total \&quot;high input latency\&quot; events. | [optional] 
**janky_frames** | **str** | Total frames with slow render time. Should be &lt;&#x3D; total_frames. | [optional] 
**missed_vsync_count** | **str** | Total \&quot;missed vsync\&quot; events. | [optional] 
**p50_millis** | **str** | 50th percentile frame render time in milliseconds. | [optional] 
**p90_millis** | **str** | 90th percentile frame render time in milliseconds. | [optional] 
**p95_millis** | **str** | 95th percentile frame render time in milliseconds. | [optional] 
**p99_millis** | **str** | 99th percentile frame render time in milliseconds. | [optional] 
**slow_bitmap_upload_count** | **str** | Total \&quot;slow bitmap upload\&quot; events. | [optional] 
**slow_draw_count** | **str** | Total \&quot;slow draw\&quot; events. | [optional] 
**slow_ui_thread_count** | **str** | Total \&quot;slow UI thread\&quot; events. | [optional] 
**total_frames** | **str** | Total frames rendered by package. | [optional] 

## Example

```python
from openapi_client.models.graphics_stats import GraphicsStats

# TODO update the JSON string below
json = "{}"
# create an instance of GraphicsStats from a JSON string
graphics_stats_instance = GraphicsStats.from_json(json)
# print the JSON string representation of the object
print(GraphicsStats.to_json())

# convert the object into a dict
graphics_stats_dict = graphics_stats_instance.to_dict()
# create an instance of GraphicsStats from a dict
graphics_stats_from_dict = GraphicsStats.from_dict(graphics_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


