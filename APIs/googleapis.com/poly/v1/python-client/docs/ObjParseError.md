# ObjParseError

Details of an error resulting from parsing an OBJ file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The type of problem found (required). | [optional] 
**end_index** | **int** | The ending character index at which the problem was found. | [optional] 
**file_path** | **str** | The file path in which the problem was found. | [optional] 
**line** | **str** | The text of the line. Note that this may be truncated if the line was very long. This may not include the error if it occurs after line truncation. | [optional] 
**line_number** | **int** | Line number at which the problem was found. | [optional] 
**start_index** | **int** | The starting character index at which the problem was found. | [optional] 

## Example

```python
from openapi_client.models.obj_parse_error import ObjParseError

# TODO update the JSON string below
json = "{}"
# create an instance of ObjParseError from a JSON string
obj_parse_error_instance = ObjParseError.from_json(json)
# print the JSON string representation of the object
print(ObjParseError.to_json())

# convert the object into a dict
obj_parse_error_dict = obj_parse_error_instance.to_dict()
# create an instance of ObjParseError from a dict
obj_parse_error_from_dict = ObjParseError.from_dict(obj_parse_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


