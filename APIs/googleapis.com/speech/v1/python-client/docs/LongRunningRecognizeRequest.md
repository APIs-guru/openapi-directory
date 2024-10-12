# LongRunningRecognizeRequest

The top-level message sent by the client for the `LongRunningRecognize` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio** | [**RecognitionAudio**](RecognitionAudio.md) |  | [optional] 
**config** | [**RecognitionConfig**](RecognitionConfig.md) |  | [optional] 
**output_config** | [**TranscriptOutputConfig**](TranscriptOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.long_running_recognize_request import LongRunningRecognizeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LongRunningRecognizeRequest from a JSON string
long_running_recognize_request_instance = LongRunningRecognizeRequest.from_json(json)
# print the JSON string representation of the object
print(LongRunningRecognizeRequest.to_json())

# convert the object into a dict
long_running_recognize_request_dict = long_running_recognize_request_instance.to_dict()
# create an instance of LongRunningRecognizeRequest from a dict
long_running_recognize_request_from_dict = LongRunningRecognizeRequest.from_dict(long_running_recognize_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


