# MediaSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_name** | **str** |  | [optional] 
**artist_name** | **str** |  | [optional] 
**genre_names** | **List[str]** |  | [optional] 
**media_identifier** | **str** |  | [optional] 
**media_name** | **str** |  | [optional] 
**media_type** | [**MediaItemType**](MediaItemType.md) |  | [optional] 
**mood_names** | **List[str]** |  | [optional] 
**reference** | [**MediaReference**](MediaReference.md) |  | [optional] 
**release_date** | [**DateComponentsRange**](DateComponentsRange.md) |  | [optional] 
**sort_order** | [**MediaSortOrder**](MediaSortOrder.md) |  | [optional] 

## Example

```python
from openapi_client.models.media_search import MediaSearch

# TODO update the JSON string below
json = "{}"
# create an instance of MediaSearch from a JSON string
media_search_instance = MediaSearch.from_json(json)
# print the JSON string representation of the object
print(MediaSearch.to_json())

# convert the object into a dict
media_search_dict = media_search_instance.to_dict()
# create an instance of MediaSearch from a dict
media_search_from_dict = MediaSearch.from_dict(media_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


