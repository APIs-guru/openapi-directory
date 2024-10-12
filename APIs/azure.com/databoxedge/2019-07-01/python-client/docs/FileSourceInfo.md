# FileSourceInfo

File source details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**share_id** | **str** | File share ID. | 

## Example

```python
from openapi_client.models.file_source_info import FileSourceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FileSourceInfo from a JSON string
file_source_info_instance = FileSourceInfo.from_json(json)
# print the JSON string representation of the object
print(FileSourceInfo.to_json())

# convert the object into a dict
file_source_info_dict = file_source_info_instance.to_dict()
# create an instance of FileSourceInfo from a dict
file_source_info_from_dict = FileSourceInfo.from_dict(file_source_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


