# LiveChatSuperStickerDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_display_string** | **str** | A rendered string that displays the fund amount and currency to the user. | [optional] 
**amount_micros** | **str** | The amount purchased by the user, in micros (1,750,000 micros &#x3D; 1.75). | [optional] 
**currency** | **str** | The currency in which the purchase was made. | [optional] 
**super_sticker_metadata** | [**SuperStickerMetadata**](SuperStickerMetadata.md) |  | [optional] 
**tier** | **int** | The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1. | [optional] 

## Example

```python
from openapi_client.models.live_chat_super_sticker_details import LiveChatSuperStickerDetails

# TODO update the JSON string below
json = "{}"
# create an instance of LiveChatSuperStickerDetails from a JSON string
live_chat_super_sticker_details_instance = LiveChatSuperStickerDetails.from_json(json)
# print the JSON string representation of the object
print(LiveChatSuperStickerDetails.to_json())

# convert the object into a dict
live_chat_super_sticker_details_dict = live_chat_super_sticker_details_instance.to_dict()
# create an instance of LiveChatSuperStickerDetails from a dict
live_chat_super_sticker_details_from_dict = LiveChatSuperStickerDetails.from_dict(live_chat_super_sticker_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


