# SpriteSheet

Sprite sheet configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_count** | **int** | The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit. | [optional] 
**end_time_offset** | **str** | End time in seconds, relative to the output file timeline. When &#x60;end_time_offset&#x60; is not specified, the sprites are generated until the end of the output file. | [optional] 
**file_prefix** | **str** | Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as &#x60;\&quot;sprite_sheet0000000123.jpeg\&quot;&#x60;. | [optional] 
**format** | **str** | Format type. The default is &#x60;\&quot;jpeg\&quot;&#x60;. Supported formats: - &#39;jpeg&#39; | [optional] 
**interval** | **str** | Starting from &#x60;0s&#x60;, create sprites at regular intervals. Specify the interval value in seconds. | [optional] 
**quality** | **int** | The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio. | [optional] 
**row_count** | **int** | The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit. | [optional] 
**sprite_height_pixels** | **int** | Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field). | [optional] 
**sprite_width_pixels** | **int** | Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field). | [optional] 
**start_time_offset** | **str** | Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is &#x60;0s&#x60;. | [optional] 
**total_count** | **int** | Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100. | [optional] 

## Example

```python
from openapi_client.models.sprite_sheet import SpriteSheet

# TODO update the JSON string below
json = "{}"
# create an instance of SpriteSheet from a JSON string
sprite_sheet_instance = SpriteSheet.from_json(json)
# print the JSON string representation of the object
print(SpriteSheet.to_json())

# convert the object into a dict
sprite_sheet_dict = sprite_sheet_instance.to_dict()
# create an instance of SpriteSheet from a dict
sprite_sheet_from_dict = SpriteSheet.from_dict(sprite_sheet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


