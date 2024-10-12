# PlaybackUrl1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the playback URL: &lt;strong&gt;source&lt;/strong&gt;, &lt;strong&gt;passthrough&lt;/strong&gt;, or the output rendition&#39;s resolution. | [optional] 
**output_id** | **str** | Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition. | [optional] 
**url** | **str** | The playback URL for the source or output rendition. | [optional] 

## Example

```python
from openapi_client.models.playback_url1 import PlaybackUrl1

# TODO update the JSON string below
json = "{}"
# create an instance of PlaybackUrl1 from a JSON string
playback_url1_instance = PlaybackUrl1.from_json(json)
# print the JSON string representation of the object
print(PlaybackUrl1.to_json())

# convert the object into a dict
playback_url1_dict = playback_url1_instance.to_dict()
# create an instance of PlaybackUrl1 from a dict
playback_url1_from_dict = PlaybackUrl1.from_dict(playback_url1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


