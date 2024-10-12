# AttachmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[ActionRequest]**](ActionRequest.md) |  | [optional] 
**asset_url** | **str** |  | [optional] 
**author_icon** | **str** |  | [optional] 
**author_link** | **str** |  | [optional] 
**author_name** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**fallback** | **str** |  | [optional] 
**fields** | [**List[FieldRequest]**](FieldRequest.md) |  | [optional] 
**footer** | **str** |  | [optional] 
**footer_icon** | **str** |  | [optional] 
**giphy** | [**ImagesRequest**](ImagesRequest.md) |  | [optional] 
**image_url** | **str** |  | [optional] 
**og_scrape_url** | **str** |  | [optional] 
**original_height** | **int** |  | [optional] 
**original_width** | **int** |  | [optional] 
**pretext** | **str** |  | [optional] 
**text** | **str** |  | [optional] 
**thumb_url** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**title_link** | **str** |  | [optional] 
**type** | **str** | Attachment type (e.g. image, video, url) | [optional] 

## Example

```python
from openapi_client.models.attachment_request import AttachmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentRequest from a JSON string
attachment_request_instance = AttachmentRequest.from_json(json)
# print the JSON string representation of the object
print(AttachmentRequest.to_json())

# convert the object into a dict
attachment_request_dict = attachment_request_instance.to_dict()
# create an instance of AttachmentRequest from a dict
attachment_request_from_dict = AttachmentRequest.from_dict(attachment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


