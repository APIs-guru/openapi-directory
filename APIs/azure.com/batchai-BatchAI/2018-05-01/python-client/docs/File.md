# File

Properties of the file or directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_url** | **str** | URL to download the corresponding file. The downloadUrl is not returned for directories. | [optional] [readonly] 
**file_type** | **str** | Type of the file. Possible values are file and directory. | [optional] [readonly] 
**name** | **str** | Name of the file. | [optional] [readonly] 
**properties** | [**FileProperties**](FileProperties.md) |  | [optional] 

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


