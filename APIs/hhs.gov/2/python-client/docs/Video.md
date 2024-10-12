# Video


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaigns** | [**List[Campaign]**](Campaign.md) |  | [optional] 
**created_by** | **str** |  | [optional] 
**custom_attribution_url** | **str** |  | [optional] 
**custom_preview_url** | **str** |  | [optional] 
**custom_thumbnail_url** | **str** |  | [optional] 
**date_content_authored** | **date** |  | [optional] 
**date_content_published** | **date** |  | [optional] 
**date_content_reviewed** | **date** |  | [optional] 
**date_content_updated** | **date** |  | [optional] 
**date_syndication_captured** | **date** |  | [optional] 
**date_syndication_updated** | **date** |  | [optional] 
**date_syndication_visible** | **date** |  | [optional] 
**description** | **str** |  | [optional] 
**extended_attributes** | [**List[ExtendedAttribute]**](ExtendedAttribute.md) |  | [optional] 
**external_guid** | **str** |  | [optional] 
**foreign_syndication_api_url** | **str** |  | [optional] 
**hash** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**media_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**source_url** | **str** |  | [optional] 
**target_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.video import Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video from a JSON string
video_instance = Video.from_json(json)
# print the JSON string representation of the object
print(Video.to_json())

# convert the object into a dict
video_dict = video_instance.to_dict()
# create an instance of Video from a dict
video_from_dict = Video.from_dict(video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


