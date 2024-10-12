# ImageAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**image** | **str** |  | [optional] [readonly] 
**image_height** | **int** |  | 
**image_width** | **int** |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | [optional] 
**object_id** | **int** |  | 
**parent** | **object** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_attachment import ImageAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of ImageAttachment from a JSON string
image_attachment_instance = ImageAttachment.from_json(json)
# print the JSON string representation of the object
print(ImageAttachment.to_json())

# convert the object into a dict
image_attachment_dict = image_attachment_instance.to_dict()
# create an instance of ImageAttachment from a dict
image_attachment_from_dict = ImageAttachment.from_dict(image_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


