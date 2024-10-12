# GetStickerSetPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**StickerSet**](StickerSet.md) |  | 

## Example

```python
from openapi_client.models.get_sticker_set_post200_response import GetStickerSetPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetStickerSetPost200Response from a JSON string
get_sticker_set_post200_response_instance = GetStickerSetPost200Response.from_json(json)
# print the JSON string representation of the object
print(GetStickerSetPost200Response.to_json())

# convert the object into a dict
get_sticker_set_post200_response_dict = get_sticker_set_post200_response_instance.to_dict()
# create an instance of GetStickerSetPost200Response from a dict
get_sticker_set_post200_response_from_dict = GetStickerSetPost200Response.from_dict(get_sticker_set_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


