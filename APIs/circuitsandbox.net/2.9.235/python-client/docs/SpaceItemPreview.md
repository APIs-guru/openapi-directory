# SpaceItemPreview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this preview | [optional] 
**html** | **str** | Html code | [optional] 
**image_uri** | **str** | The URI of the image | [optional] 
**provider** | **str** | the provider | [optional] 
**src_url** | **str** | The URL of the source | [optional] 
**title** | **str** | The title of this preview | [optional] 
**type** | **str** | The type of this preview | [optional] 

## Example

```python
from openapi_client.models.space_item_preview import SpaceItemPreview

# TODO update the JSON string below
json = "{}"
# create an instance of SpaceItemPreview from a JSON string
space_item_preview_instance = SpaceItemPreview.from_json(json)
# print the JSON string representation of the object
print(SpaceItemPreview.to_json())

# convert the object into a dict
space_item_preview_dict = space_item_preview_instance.to_dict()
# create an instance of SpaceItemPreview from a dict
space_item_preview_from_dict = SpaceItemPreview.from_dict(space_item_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


