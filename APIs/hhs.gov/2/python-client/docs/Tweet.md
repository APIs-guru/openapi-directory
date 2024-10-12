# Tweet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **object** |  | [optional] 
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
**media_url** | **str** |  | [optional] 
**message_text** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**source_url** | **str** |  | [optional] 
**target_url** | **str** |  | [optional] 
**tweet_date** | **date** |  | [optional] 
**tweet_id** | **int** |  | [optional] 
**video_variant_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tweet import Tweet

# TODO update the JSON string below
json = "{}"
# create an instance of Tweet from a JSON string
tweet_instance = Tweet.from_json(json)
# print the JSON string representation of the object
print(Tweet.to_json())

# convert the object into a dict
tweet_dict = tweet_instance.to_dict()
# create an instance of Tweet from a dict
tweet_from_dict = Tweet.from_dict(tweet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


