# FileServerCreateParameters

File Server creation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FileServerBaseProperties**](FileServerBaseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.file_server_create_parameters import FileServerCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FileServerCreateParameters from a JSON string
file_server_create_parameters_instance = FileServerCreateParameters.from_json(json)
# print the JSON string representation of the object
print(FileServerCreateParameters.to_json())

# convert the object into a dict
file_server_create_parameters_dict = file_server_create_parameters_instance.to_dict()
# create an instance of FileServerCreateParameters from a dict
file_server_create_parameters_from_dict = FileServerCreateParameters.from_dict(file_server_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


