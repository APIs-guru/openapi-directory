# SetStickerPositionInSetPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **int** | New sticker position in the set, zero-based | 
**sticker** | **str** | File identifier of the sticker | 

## Example

```python
from openapi_client.models.set_sticker_position_in_set_post_request import SetStickerPositionInSetPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetStickerPositionInSetPostRequest from a JSON string
set_sticker_position_in_set_post_request_instance = SetStickerPositionInSetPostRequest.from_json(json)
# print the JSON string representation of the object
print(SetStickerPositionInSetPostRequest.to_json())

# convert the object into a dict
set_sticker_position_in_set_post_request_dict = set_sticker_position_in_set_post_request_instance.to_dict()
# create an instance of SetStickerPositionInSetPostRequest from a dict
set_sticker_position_in_set_post_request_from_dict = SetStickerPositionInSetPostRequest.from_dict(set_sticker_position_in_set_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


