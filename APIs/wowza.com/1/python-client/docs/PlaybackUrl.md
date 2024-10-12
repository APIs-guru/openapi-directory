# PlaybackUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the playback URL: &lt;strong&gt;source&lt;/strong&gt;, &lt;strong&gt;default&lt;/strong&gt;, &lt;strong&gt;passthrough&lt;/strong&gt;, or the output rendition&#39;s resolution. | [optional] 
**output_id** | **str** | Only for output rendition-based playback URLs, not source playback URLs. The unique alphanumeric string that identifies the output rendition. | [optional] 
**url** | **str** | The playback URL for the source or output rendition. | [optional] 

## Example

```python
from openapi_client.models.playback_url import PlaybackUrl

# TODO update the JSON string below
json = "{}"
# create an instance of PlaybackUrl from a JSON string
playback_url_instance = PlaybackUrl.from_json(json)
# print the JSON string representation of the object
print(PlaybackUrl.to_json())

# convert the object into a dict
playback_url_dict = playback_url_instance.to_dict()
# create an instance of PlaybackUrl from a dict
playback_url_from_dict = PlaybackUrl.from_dict(playback_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


