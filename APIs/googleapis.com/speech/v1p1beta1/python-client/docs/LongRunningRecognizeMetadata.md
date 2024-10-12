# LongRunningRecognizeMetadata

Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **str** | Time of the most recent processing update. | [optional] 
**output_config** | [**TranscriptOutputConfig**](TranscriptOutputConfig.md) |  | [optional] 
**progress_percent** | **int** | Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available. | [optional] 
**start_time** | **str** | Time when the request was received. | [optional] 
**uri** | **str** | Output only. The URI of the audio file being transcribed. Empty if the audio was sent as byte content. | [optional] [readonly] 

## Example

```python
from openapi_client.models.long_running_recognize_metadata import LongRunningRecognizeMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LongRunningRecognizeMetadata from a JSON string
long_running_recognize_metadata_instance = LongRunningRecognizeMetadata.from_json(json)
# print the JSON string representation of the object
print(LongRunningRecognizeMetadata.to_json())

# convert the object into a dict
long_running_recognize_metadata_dict = long_running_recognize_metadata_instance.to_dict()
# create an instance of LongRunningRecognizeMetadata from a dict
long_running_recognize_metadata_from_dict = LongRunningRecognizeMetadata.from_dict(long_running_recognize_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


