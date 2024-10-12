# Format

Base class for output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**filename_pattern** | **str** | The pattern of the file names for the generated output files. The following macros are supported in the file name: {Basename} - The base name of the input video {Extension} - The appropriate extension for this format. {Label} - The label assigned to the codec/layer. {Index} - A unique index for thumbnails. Only applicable to thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to thumbnails. {Codec} - The type of the audio/video codec. Any unsubstituted macros will be collapsed and removed from the filename. | [optional] 

## Example

```python
from openapi_client.models.format import Format

# TODO update the JSON string below
json = "{}"
# create an instance of Format from a JSON string
format_instance = Format.from_json(json)
# print the JSON string representation of the object
print(Format.to_json())

# convert the object into a dict
format_dict = format_instance.to_dict()
# create an instance of Format from a dict
format_from_dict = Format.from_dict(format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


