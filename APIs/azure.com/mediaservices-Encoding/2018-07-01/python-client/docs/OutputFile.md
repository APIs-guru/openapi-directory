# OutputFile

Represents an output file produced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[str]** | The list of labels that describe how the encoder should multiplex video and audio into an output file. For example, if the encoder is producing two video layers with labels v1 and v2, and one audio layer with label a1, then an array like &#39;[v1, a1]&#39; tells the encoder to produce an output file with the video track represented by v1 and the audio track represented by a1. | 

## Example

```python
from openapi_client.models.output_file import OutputFile

# TODO update the JSON string below
json = "{}"
# create an instance of OutputFile from a JSON string
output_file_instance = OutputFile.from_json(json)
# print the JSON string representation of the object
print(OutputFile.to_json())

# convert the object into a dict
output_file_dict = output_file_instance.to_dict()
# create an instance of OutputFile from a dict
output_file_from_dict = OutputFile.from_dict(output_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


