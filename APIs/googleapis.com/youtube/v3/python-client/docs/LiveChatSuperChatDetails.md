# LiveChatSuperChatDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_display_string** | **str** | A rendered string that displays the fund amount and currency to the user. | [optional] 
**amount_micros** | **str** | The amount purchased by the user, in micros (1,750,000 micros &#x3D; 1.75). | [optional] 
**currency** | **str** | The currency in which the purchase was made. | [optional] 
**tier** | **int** | The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. | [optional] 
**user_comment** | **str** | The comment added by the user to this Super Chat event. | [optional] 

## Example

```python
from openapi_client.models.live_chat_super_chat_details import LiveChatSuperChatDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatSuperChatDetails from a JSON string
live_chat_super_chat_details_instance = LiveChatSuperChatDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatSuperChatDetails.to_json())

# convert the object into a dict
live_chat_super_chat_details_dict = live_chat_super_chat_details_instance.to_dict()
# create an instance of LiveChatSuperChatDetails from a dict
live_chat_super_chat_details_from_dict = LiveChatSuperChatDetails.from_dict(live_chat_super_chat_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


