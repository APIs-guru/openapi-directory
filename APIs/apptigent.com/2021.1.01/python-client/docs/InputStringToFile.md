# InputStringToFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** | File extension | [default to 'TXT']
**filename** | **str** | Name of file (without extension) | 
**input** | **str** | Text string (body of file) | 

## Example

```python
from openapi_client.models.input_string_to_file import InputStringToFile

# TODO update the JSON string below
json = "{}"
# create an instance of InputStringToFile from a JSON string
input_string_to_file_instance = InputStringToFile.from_json(json)
# print the JSON string representation of the object
print(InputStringToFile.to_json())

# convert the object into a dict
input_string_to_file_dict = input_string_to_file_instance.to_dict()
# create an instance of InputStringToFile from a dict
input_string_to_file_from_dict = InputStringToFile.from_dict(input_string_to_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


