# RtcMoved


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_id** | **str** | ID of the conversation moved from or to. | [optional] 
**direction** | **str** | Moved from or to conversation. | [optional] 

## Example

```python
from openapi_client.models.rtc_moved import RtcMoved

# TODO update the JSON string below
json = "{}"
# create an instance of RtcMoved from a JSON string
rtc_moved_instance = RtcMoved.from_json(json)
# print the JSON string representation of the object
print(RtcMoved.to_json())

# convert the object into a dict
rtc_moved_dict = rtc_moved_instance.to_dict()
# create an instance of RtcMoved from a dict
rtc_moved_from_dict = RtcMoved.from_dict(rtc_moved_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


