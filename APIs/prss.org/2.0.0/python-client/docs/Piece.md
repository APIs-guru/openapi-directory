# Piece

The metadata about a \"piece\" which may be a story, song, report, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contributor** | **str** | The artist or contributor name. | [optional] 
**created_date** | **datetime** | The date the piece was created. Generated at creation. | [optional] [readonly] 
**description** | **str** | The short description of the piece. | [optional] 
**episode_id** | **int** | The ID of the episode that owns the piece. | 
**full_description** | **str** | The long description of the piece. | [optional] 
**id** | **int** | The unique ID of the piece. Generated at creation. | [optional] [readonly] 
**image_cd_drive_uri** | **str** | The URI to the piece image content in CD Drive. Format should be &#39;cddrive:id:{value}&#39; or &#39;cddrive://{path}&#39;. This property is only used on modification and is not returned. | [optional] 
**image_file_name** | **str** | The name of the piece image file. Generated at creation. | [optional] 
**image_file_size** | **int** | The size of the piece image file in bytes. Generated at creation. | [optional] 
**image_original_file_name** | **str** | The user&#39;s original name of the piece image file. | [optional] 
**last_modified_date** | **datetime** | The date the piece was last modified/updated. Automatically updated on any write operation. | [optional] [readonly] 
**relative_end_time** | **int** | Seconds relative to the start of the episode. | 
**relative_start_time** | **int** | Seconds relative to the start of the episode. | 
**segment_number** | **int** | The number of the segment that this piece is in, starting with 1. This is an optional field but it can be used to provide more detail by linking the piece to a specific audio segment. | [optional] 
**title** | **str** | The human readable title of the piece that is normally displayed on an end user&#39;s device. | 

## Example

```python
from openapi_client.models.piece import Piece

# TODO update the JSON string below
json = "{}"
# create an instance of Piece from a JSON string
piece_instance = Piece.from_json(json)
# print the JSON string representation of the object
print(Piece.to_json())

# convert the object into a dict
piece_dict = piece_instance.to_dict()
# create an instance of Piece from a dict
piece_from_dict = Piece.from_dict(piece_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


