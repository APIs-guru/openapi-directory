# FileInputSource

An inlined file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Required. The file&#39;s byte contents. | [optional] 
**display_name** | **str** | Required. The file&#39;s display name. | [optional] 
**mime_type** | **str** | Required. The file&#39;s mime type. | [optional] 

## Example

```python
from openapi_client.models.file_input_source import FileInputSource

# TODO update the JSON string below
json = "{}"
# create an instance of FileInputSource from a JSON string
file_input_source_instance = FileInputSource.from_json(json)
# print the JSON string representation of the object
print(FileInputSource.to_json())

# convert the object into a dict
file_input_source_dict = file_input_source_instance.to_dict()
# create an instance of FileInputSource from a dict
file_input_source_from_dict = FileInputSource.from_dict(file_input_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


