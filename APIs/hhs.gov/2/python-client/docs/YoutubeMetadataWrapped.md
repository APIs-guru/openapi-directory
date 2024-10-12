# YoutubeMetadataWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.youtube_metadata_wrapped import YoutubeMetadataWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeMetadataWrapped from a JSON string
youtube_metadata_wrapped_instance = YoutubeMetadataWrapped.from_json(json)
# print the JSON string representation of the object
print(YoutubeMetadataWrapped.to_json())

# convert the object into a dict
youtube_metadata_wrapped_dict = youtube_metadata_wrapped_instance.to_dict()
# create an instance of YoutubeMetadataWrapped from a dict
youtube_metadata_wrapped_from_dict = YoutubeMetadataWrapped.from_dict(youtube_metadata_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


