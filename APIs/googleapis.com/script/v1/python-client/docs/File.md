# File

An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project. | [optional] 
**function_set** | [**GoogleAppsScriptTypeFunctionSet**](GoogleAppsScriptTypeFunctionSet.md) |  | [optional] 
**last_modify_user** | [**GoogleAppsScriptTypeUser**](GoogleAppsScriptTypeUser.md) |  | [optional] 
**name** | **str** | The name of the file. The file extension is not part of the file name, which can be identified from the type field. | [optional] 
**source** | **str** | The file content. | [optional] 
**type** | **str** | The type of the file. | [optional] 
**update_time** | **str** | Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project. | [optional] 

## Example

```python
from openapi_client.models.file import File

# TODO update the JSON string below
json = "{}"
# create an instance of File from a JSON string
file_instance = File.from_json(json)
# print the JSON string representation of the object
print(File.to_json())

# convert the object into a dict
file_dict = file_instance.to_dict()
# create an instance of File from a dict
file_from_dict = File.from_dict(file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


