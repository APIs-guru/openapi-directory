# RtcItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ended** | [**RtcEnded**](RtcEnded.md) |  | [optional] 
**missed** | **str** | Indicates a missed call. | [optional] 
**moved** | [**RtcMoved**](RtcMoved.md) |  | [optional] 
**rtc_participants** | [**List[RtcParticipant]**](RtcParticipant.md) | Participants of the call. | [optional] 
**type** | **str** | The type of the RTC item. | [optional] 

## Example

```python
from openapi_client.models.rtc_item import RtcItem

# TODO update the JSON string below
json = "{}"
# create an instance of RtcItem from a JSON string
rtc_item_instance = RtcItem.from_json(json)
# print the JSON string representation of the object
print(RtcItem.to_json())

# convert the object into a dict
rtc_item_dict = rtc_item_instance.to_dict()
# create an instance of RtcItem from a dict
rtc_item_from_dict = RtcItem.from_dict(rtc_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


