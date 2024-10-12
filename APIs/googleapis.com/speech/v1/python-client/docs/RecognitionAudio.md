# RecognitionAudio

Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | The audio data bytes encoded as specified in &#x60;RecognitionConfig&#x60;. Note: as with all bytes fields, proto buffers use a pure binary representation, whereas JSON representations use base64. | [optional] 
**uri** | **str** | URI that points to a file that contains audio data bytes as specified in &#x60;RecognitionConfig&#x60;. The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: &#x60;gs://bucket_name/object_name&#x60; (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris). | [optional] 

## Example

```python
from openapi_client.models.recognition_audio import RecognitionAudio

# TODO update the JSON string below
json = "{}"
# create an instance of RecognitionAudio from a JSON string
recognition_audio_instance = RecognitionAudio.from_json(json)
# print the JSON string representation of the object
print(RecognitionAudio.to_json())

# convert the object into a dict
recognition_audio_dict = recognition_audio_instance.to_dict()
# create an instance of RecognitionAudio from a dict
recognition_audio_from_dict = RecognitionAudio.from_dict(recognition_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


