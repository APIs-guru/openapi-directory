# FileLabels

A group of labels for the file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden** | **bool** | Output only. Deprecated. | [optional] 
**modified** | **bool** | Output only. Whether the file has been modified by this user. | [optional] 
**restricted** | **bool** | Output only. Deprecated: Use &#x60;copyRequiresWriterPermission&#x60; instead. | [optional] 
**starred** | **bool** | Whether this file is starred by the user. | [optional] 
**trashed** | **bool** | Whether this file has been trashed. This label applies to all users accessing the file; however, only owners are allowed to see and untrash files. | [optional] 
**viewed** | **bool** | Whether this file has been viewed by this user. | [optional] 

## Example

```python
from openapi_client.models.file_labels import FileLabels

# TODO update the JSON string below
json = "{}"
# create an instance of FileLabels from a JSON string
file_labels_instance = FileLabels.from_json(json)
# print the JSON string representation of the object
print(FileLabels.to_json())

# convert the object into a dict
file_labels_dict = file_labels_instance.to_dict()
# create an instance of FileLabels from a dict
file_labels_from_dict = FileLabels.from_dict(file_labels_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


