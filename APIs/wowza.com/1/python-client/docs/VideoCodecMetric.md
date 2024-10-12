# VideoCodecMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the current key. Possible values are &lt;strong&gt;normal&lt;/strong&gt; (everything is fine), &lt;strong&gt;warning&lt;/strong&gt; (something may be misconfigured), and &lt;strong&gt;no_data&lt;/strong&gt; (no data was returned, perhaps because the instance isn&#39;t running). | [optional] 
**text** | **str** | A message related to the value and status of the current key. Usually blank unless there&#39;s a warning status. | [optional] 
**units** | **str** | The unit of the returned value, such as &lt;strong&gt;Kbps&lt;/strong&gt;, &lt;strong&gt;bps&lt;/strong&gt;, &lt;strong&gt;%&lt;/strong&gt;, &lt;strong&gt;FPS&lt;/strong&gt;, or &lt;strong&gt;GOP&lt;/strong&gt;. | [optional] 
**value** | **str** | The value of the associated key. | [optional] 

## Example

```python
from openapi_client.models.video_codec_metric import VideoCodecMetric

# TODO update the JSON string below
json = "{}"
# create an instance of VideoCodecMetric from a JSON string
video_codec_metric_instance = VideoCodecMetric.from_json(json)
# print the JSON string representation of the object
print(VideoCodecMetric.to_json())

# convert the object into a dict
video_codec_metric_dict = video_codec_metric_instance.to_dict()
# create an instance of VideoCodecMetric from a dict
video_codec_metric_from_dict = VideoCodecMetric.from_dict(video_codec_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


