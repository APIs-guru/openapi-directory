# JsonFileFormat

JSON file format configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression** | **str** | Compression of the loaded JSON file. | [optional] 
**schema_file_format** | **str** | The schema file format along JSON data files. | [optional] 

## Example

```python
from openapi_client.models.json_file_format import JsonFileFormat

# TODO update the JSON string below
json = "{}"
# create an instance of JsonFileFormat from a JSON string
json_file_format_instance = JsonFileFormat.from_json(json)
# print the JSON string representation of the object
print(JsonFileFormat.to_json())

# convert the object into a dict
json_file_format_dict = json_file_format_instance.to_dict()
# create an instance of JsonFileFormat from a dict
json_file_format_from_dict = JsonFileFormat.from_dict(json_file_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


