# VideoMetadata

Video metadata for a creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | The duration of the ad. Can be used to filter the response of the creatives.list method. | [optional] 
**is_valid_vast** | **bool** | Is this a valid VAST ad? Can be used to filter the response of the creatives.list method. | [optional] 
**is_vpaid** | **bool** | Is this a VPAID ad? Can be used to filter the response of the creatives.list method. | [optional] 
**media_files** | [**List[MediaFile]**](MediaFile.md) | The list of all media files declared in the VAST. If there are multiple VASTs in a wrapper chain, this includes the media files from the deepest one in the chain. | [optional] 
**skip_offset** | **str** | The minimum duration that the user has to watch before being able to skip this ad. If the field is not set, the ad is not skippable. If the field is set, the ad is skippable. Can be used to filter the response of the creatives.list method. | [optional] 
**vast_version** | **str** | The maximum VAST version across all wrapped VAST documents. Can be used to filter the response of the creatives.list method. | [optional] 

## Example

```python
from openapi_client.models.video_metadata import VideoMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of VideoMetadata from a JSON string
video_metadata_instance = VideoMetadata.from_json(json)
# print the JSON string representation of the object
print(VideoMetadata.to_json())

# convert the object into a dict
video_metadata_dict = video_metadata_instance.to_dict()
# create an instance of VideoMetadata from a dict
video_metadata_from_dict = VideoMetadata.from_dict(video_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


