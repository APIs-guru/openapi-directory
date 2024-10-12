# RtcParticipant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the participant. | [optional] 
**fully_qualified_number** | **str** | missing documentation | [optional] 
**phone_number** | **str** | missing documentation | [optional] 
**resolved_user** | **object** | missing documentation | [optional] 
**type** | **str** | The RTC type of the participant. | [optional] 
**user_id** | **str** | The ID of the participant. | [optional] 

## Example

```python
from openapi_client.models.rtc_participant import RtcParticipant

# TODO update the JSON string below
json = "{}"
# create an instance of RtcParticipant from a JSON string
rtc_participant_instance = RtcParticipant.from_json(json)
# print the JSON string representation of the object
print(RtcParticipant.to_json())

# convert the object into a dict
rtc_participant_dict = rtc_participant_instance.to_dict()
# create an instance of RtcParticipant from a dict
rtc_participant_from_dict = RtcParticipant.from_dict(rtc_participant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


