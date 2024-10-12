# MultiBitrateFormat

Describes the properties for producing a collection of GOP aligned multi-bitrate files. The default behavior is to produce one output file for each video layer which is muxed together with all the audios. The exact output files produced can be controlled by specifying the outputFiles collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_files** | [**List[OutputFile]**](OutputFile.md) | The list of output files to produce.  Each entry in the list is a set of audio and video layer labels to be muxed together . | [optional] 

## Example

```python
from openapi_client.models.multi_bitrate_format import MultiBitrateFormat

# TODO update the JSON string below
json = "{}"
# create an instance of MultiBitrateFormat from a JSON string
multi_bitrate_format_instance = MultiBitrateFormat.from_json(json)
# print the JSON string representation of the object
print(MultiBitrateFormat.to_json())

# convert the object into a dict
multi_bitrate_format_dict = multi_bitrate_format_instance.to_dict()
# create an instance of MultiBitrateFormat from a dict
multi_bitrate_format_from_dict = MultiBitrateFormat.from_dict(multi_bitrate_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


