# Attachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[Action]**](Action.md) |  | [optional] 
**asset_url** | **str** |  | [optional] 
**author_icon** | **str** |  | [optional] 
**author_link** | **str** |  | [optional] 
**author_name** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**fallback** | **str** |  | [optional] 
**fields** | [**List[ModelField]**](ModelField.md) |  | [optional] 
**footer** | **str** |  | [optional] 
**footer_icon** | **str** |  | [optional] 
**giphy** | [**Images**](Images.md) |  | [optional] 
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
from openapi_client.models.attachment import Attachment

# TODO update the JSON string below
json = "{}"
# create an instance of Attachment from a JSON string
attachment_instance = Attachment.from_json(json)
# print the JSON string representation of the object
print(Attachment.to_json())

# convert the object into a dict
attachment_dict = attachment_instance.to_dict()
# create an instance of Attachment from a dict
attachment_from_dict = Attachment.from_dict(attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


