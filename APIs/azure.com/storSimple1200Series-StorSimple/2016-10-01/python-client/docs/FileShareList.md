# FileShareList

Collection of file shares

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FileShare]**](FileShare.md) | The value. | 

## Example

```python
from openapi_client.models.file_share_list import FileShareList

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareList from a JSON string
file_share_list_instance = FileShareList.from_json(json)
# print the JSON string representation of the object
print(FileShareList.to_json())

# convert the object into a dict
file_share_list_dict = file_share_list_instance.to_dict()
# create an instance of FileShareList from a dict
file_share_list_from_dict = FileShareList.from_dict(file_share_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


