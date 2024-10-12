# EditMessageCaptionPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**EditMessageCaptionPost200ResponseResult**](EditMessageCaptionPost200ResponseResult.md) |  | 

## Example

```python
from openapi_client.models.edit_message_caption_post200_response import EditMessageCaptionPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of EditMessageCaptionPost200Response from a JSON string
edit_message_caption_post200_response_instance = EditMessageCaptionPost200Response.from_json(json)
# print the JSON string representation of the object
print(EditMessageCaptionPost200Response.to_json())

# convert the object into a dict
edit_message_caption_post200_response_dict = edit_message_caption_post200_response_instance.to_dict()
# create an instance of EditMessageCaptionPost200Response from a dict
edit_message_caption_post200_response_from_dict = EditMessageCaptionPost200Response.from_dict(edit_message_caption_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


