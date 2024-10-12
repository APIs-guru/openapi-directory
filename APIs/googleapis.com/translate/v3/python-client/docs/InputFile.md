# InputFile

An input file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsInputSource**](GcsInputSource.md) |  | [optional] 
**usage** | **str** | Optional. Usage of the file contents. Options are TRAIN|VALIDATION|TEST, or UNASSIGNED (by default) for auto split. | [optional] 

## Example

```python
from openapi_client.models.input_file import InputFile

# TODO update the JSON string below
json = "{}"
# create an instance of InputFile from a JSON string
input_file_instance = InputFile.from_json(json)
# print the JSON string representation of the object
print(InputFile.to_json())

# convert the object into a dict
input_file_dict = input_file_instance.to_dict()
# create an instance of InputFile from a dict
input_file_from_dict = InputFile.from_dict(input_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


