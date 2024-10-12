# SegmentSettings

Segment settings for `\"ts\"`, `\"fmp4\"` and `\"vtt\"`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**individual_segments** | **bool** | Required. Create an individual segment file. The default is &#x60;false&#x60;. | [optional] 
**segment_duration** | **str** | Duration of the segments in seconds. The default is &#x60;\&quot;6.0s\&quot;&#x60;. Note that &#x60;segmentDuration&#x60; must be greater than or equal to [&#x60;gopDuration&#x60;](#videostream), and &#x60;segmentDuration&#x60; must be divisible by [&#x60;gopDuration&#x60;](#videostream). | [optional] 

## Example

```python
from openapi_client.models.segment_settings import SegmentSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentSettings from a JSON string
segment_settings_instance = SegmentSettings.from_json(json)
# print the JSON string representation of the object
print(SegmentSettings.to_json())

# convert the object into a dict
segment_settings_dict = segment_settings_instance.to_dict()
# create an instance of SegmentSettings from a dict
segment_settings_from_dict = SegmentSettings.from_dict(segment_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


