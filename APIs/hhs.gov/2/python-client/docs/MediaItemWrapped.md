# MediaItemWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[MediaItem]**](MediaItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.media_item_wrapped import MediaItemWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of MediaItemWrapped from a JSON string
media_item_wrapped_instance = MediaItemWrapped.from_json(json)
# print the JSON string representation of the object
print(MediaItemWrapped.to_json())

# convert the object into a dict
media_item_wrapped_dict = media_item_wrapped_instance.to_dict()
# create an instance of MediaItemWrapped from a dict
media_item_wrapped_from_dict = MediaItemWrapped.from_dict(media_item_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


