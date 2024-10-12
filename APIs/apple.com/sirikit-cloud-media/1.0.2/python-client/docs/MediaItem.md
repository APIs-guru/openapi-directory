# MediaItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artist** | **str** |  | [optional] [readonly] 
**identifier** | **str** |  | 
**title** | **str** |  | [optional] [readonly] 
**type** | [**MediaItemType**](MediaItemType.md) |  | 

## Example

```python
from openapi_client.models.media_item import MediaItem

# TODO update the JSON string below
json = "{}"
# create an instance of MediaItem from a JSON string
media_item_instance = MediaItem.from_json(json)
# print the JSON string representation of the object
print(MediaItem.to_json())

# convert the object into a dict
media_item_dict = media_item_instance.to_dict()
# create an instance of MediaItem from a dict
media_item_from_dict = MediaItem.from_dict(media_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


