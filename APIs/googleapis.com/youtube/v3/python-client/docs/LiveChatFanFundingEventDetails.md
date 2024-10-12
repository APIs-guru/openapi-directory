# LiveChatFanFundingEventDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_display_string** | **str** | A rendered string that displays the fund amount and currency to the user. | [optional] 
**amount_micros** | **str** | The amount of the fund. | [optional] 
**currency** | **str** | The currency in which the fund was made. | [optional] 
**user_comment** | **str** | The comment added by the user to this fan funding event. | [optional] 

## Example

```python
from openapi_client.models.live_chat_fan_funding_event_details import LiveChatFanFundingEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatFanFundingEventDetails from a JSON string
live_chat_fan_funding_event_details_instance = LiveChatFanFundingEventDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatFanFundingEventDetails.to_json())

# convert the object into a dict
live_chat_fan_funding_event_details_dict = live_chat_fan_funding_event_details_instance.to_dict()
# create an instance of LiveChatFanFundingEventDetails from a dict
live_chat_fan_funding_event_details_from_dict = LiveChatFanFundingEventDetails.from_dict(live_chat_fan_funding_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


