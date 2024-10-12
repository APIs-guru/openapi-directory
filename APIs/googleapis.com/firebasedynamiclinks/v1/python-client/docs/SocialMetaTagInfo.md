# SocialMetaTagInfo

Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**social_description** | **str** | A short description of the link. Optional. | [optional] 
**social_image_link** | **str** | An image url string. Optional. | [optional] 
**social_title** | **str** | Title to be displayed. Optional. | [optional] 

## Example

```python
from openapi_client.models.social_meta_tag_info import SocialMetaTagInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SocialMetaTagInfo from a JSON string
social_meta_tag_info_instance = SocialMetaTagInfo.from_json(json)
# print the JSON string representation of the object
print(SocialMetaTagInfo.to_json())

# convert the object into a dict
social_meta_tag_info_dict = social_meta_tag_info_instance.to_dict()
# create an instance of SocialMetaTagInfo from a dict
social_meta_tag_info_from_dict = SocialMetaTagInfo.from_dict(social_meta_tag_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


