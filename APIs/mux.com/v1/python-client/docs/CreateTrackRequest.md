# CreateTrackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_captions** | **bool** | Indicates the track provides Subtitles for the Deaf or Hard-of-hearing (SDH). | [optional] 
**language_code** | **str** | The language code value must be a valid BCP 47 specification compliant value. For example, en for English or en-US for the US version of English. | 
**name** | **str** | The name of the track containing a human-readable description. This value must be unique within each group of &#x60;text&#x60; or &#x60;audio&#x60; track types. The HLS manifest will associate the &#x60;text&#x60; or &#x60;audio&#x60; track with this value. For example, set the value to \&quot;English\&quot; for subtitles text track with &#x60;language_code&#x60; as en-US. If this parameter is not included, Mux will auto-populate a value based on the &#x60;language_code&#x60; value. | [optional] 
**passthrough** | **str** | Arbitrary user-supplied metadata set for the track either when creating the asset or track. | [optional] 
**text_type** | **str** |  | 
**type** | **str** |  | 
**url** | **str** | The URL of the file that Mux should download and use. * For &#x60;audio&#x60; tracks, the URL is the location of the audio file for Mux to download, for example an M4A, WAV, or MP3 file. Mux supports most audio file formats and codecs, but for fastest processing, you should [use standard inputs wherever possible](https://docs.mux.com/guides/video/minimize-processing-time). * For &#x60;text&#x60; tracks, the URL is the location of subtitle/captions file. Mux supports [SubRip Text (SRT)](https://en.wikipedia.org/wiki/SubRip) and [Web Video Text Tracks](https://www.w3.org/TR/webvtt1/) formats for ingesting Subtitles and Closed Captions.  | 

## Example

```python
from openapi_client.models.create_track_request import CreateTrackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTrackRequest from a JSON string
create_track_request_instance = CreateTrackRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTrackRequest.to_json())

# convert the object into a dict
create_track_request_dict = create_track_request_instance.to_dict()
# create an instance of CreateTrackRequest from a dict
create_track_request_from_dict = CreateTrackRequest.from_dict(create_track_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


