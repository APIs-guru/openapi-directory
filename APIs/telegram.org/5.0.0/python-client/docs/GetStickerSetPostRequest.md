# GetStickerSetPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the sticker set | 

## Example

```python
from openapi_client.models.get_sticker_set_post_request import GetStickerSetPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetStickerSetPostRequest from a JSON string
get_sticker_set_post_request_instance = GetStickerSetPostRequest.from_json(json)
# print the JSON string representation of the object
print(GetStickerSetPostRequest.to_json())

# convert the object into a dict
get_sticker_set_post_request_dict = get_sticker_set_post_request_instance.to_dict()
# create an instance of GetStickerSetPostRequest from a dict
get_sticker_set_post_request_from_dict = GetStickerSetPostRequest.from_dict(get_sticker_set_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


