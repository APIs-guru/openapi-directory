# SpeechAdaptationInfo

Information on speech adaptation use in results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptation_timeout** | **bool** | Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response transcript. | [optional] 
**timeout_message** | **str** | If set, returns a message specifying which part of the speech adaptation request timed out. | [optional] 

## Example

```python
from openapi_client.models.speech_adaptation_info import SpeechAdaptationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SpeechAdaptationInfo from a JSON string
speech_adaptation_info_instance = SpeechAdaptationInfo.from_json(json)
# print the JSON string representation of the object
print(SpeechAdaptationInfo.to_json())

# convert the object into a dict
speech_adaptation_info_dict = speech_adaptation_info_instance.to_dict()
# create an instance of SpeechAdaptationInfo from a dict
speech_adaptation_info_from_dict = SpeechAdaptationInfo.from_dict(speech_adaptation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


