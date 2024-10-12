# FileShare

The File Share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FileShareProperties**](FileShareProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_share import FileShare

# TODO update the JSON string below
json = "{}"
# create an instance of FileShare from a JSON string
file_share_instance = FileShare.from_json(json)
# print the JSON string representation of the object
print(FileShare.to_json())

# convert the object into a dict
file_share_dict = file_share_instance.to_dict()
# create an instance of FileShare from a dict
file_share_from_dict = FileShare.from_dict(file_share_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


