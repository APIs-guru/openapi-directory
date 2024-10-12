# MediaMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | [optional] 
**change_date** | **datetime** |  | [optional] 
**description** | **str** |  | [optional] 
**links** | [**MediaMetadataLinks**](MediaMetadataLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**size** | **float** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.media_metadata import MediaMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MediaMetadata from a JSON string
media_metadata_instance = MediaMetadata.from_json(json)
# print the JSON string representation of the object
print(MediaMetadata.to_json())

# convert the object into a dict
media_metadata_dict = media_metadata_instance.to_dict()
# create an instance of MediaMetadata from a dict
media_metadata_from_dict = MediaMetadata.from_dict(media_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


