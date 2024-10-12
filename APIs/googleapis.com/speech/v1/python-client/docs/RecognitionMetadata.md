# RecognitionMetadata

Description of audio data to be recognized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_topic** | **str** | Description of the content. Eg. \&quot;Recordings of federal supreme court hearings from 2012\&quot;. | [optional] 
**industry_naics_code_of_audio** | **int** | The industry vertical to which this speech recognition request most closely applies. This is most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/. | [optional] 
**interaction_type** | **str** | The use case most closely describing the audio content to be recognized. | [optional] 
**microphone_distance** | **str** | The audio type that most closely describes the audio being recognized. | [optional] 
**original_media_type** | **str** | The original media the speech was recorded on. | [optional] 
**original_mime_type** | **str** | Mime type of the original audio file. For example &#x60;audio/m4a&#x60;, &#x60;audio/x-alaw-basic&#x60;, &#x60;audio/mp3&#x60;, &#x60;audio/3gpp&#x60;. A list of possible audio mime types is maintained at http://www.iana.org/assignments/media-types/media-types.xhtml#audio | [optional] 
**recording_device_name** | **str** | The device used to make the recording. Examples &#39;Nexus 5X&#39; or &#39;Polycom SoundStation IP 6000&#39; or &#39;POTS&#39; or &#39;VoIP&#39; or &#39;Cardioid Microphone&#39;. | [optional] 
**recording_device_type** | **str** | The type of device the speech was recorded with. | [optional] 

## Example

```python
from openapi_client.models.recognition_metadata import RecognitionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of RecognitionMetadata from a JSON string
recognition_metadata_instance = RecognitionMetadata.from_json(json)
# print the JSON string representation of the object
print(RecognitionMetadata.to_json())

# convert the object into a dict
recognition_metadata_dict = recognition_metadata_instance.to_dict()
# create an instance of RecognitionMetadata from a dict
recognition_metadata_from_dict = RecognitionMetadata.from_dict(recognition_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


