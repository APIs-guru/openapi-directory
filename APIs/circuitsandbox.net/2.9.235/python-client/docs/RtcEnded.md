# RtcEnded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **float** | The duration of the call. | [optional] 
**max_number_of_attendees** | **float** | The maximum number of attendees during a call. | [optional] 
**pick_from_participant** | **str** | UserID of the pick from participant. | [optional] 

## Example

```python
from openapi_client.models.rtc_ended import RtcEnded

# TODO update the JSON string below
json = "{}"
# create an instance of RtcEnded from a JSON string
rtc_ended_instance = RtcEnded.from_json(json)
# print the JSON string representation of the object
print(RtcEnded.to_json())

# convert the object into a dict
rtc_ended_dict = rtc_ended_instance.to_dict()
# create an instance of RtcEnded from a dict
rtc_ended_from_dict = RtcEnded.from_dict(rtc_ended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


