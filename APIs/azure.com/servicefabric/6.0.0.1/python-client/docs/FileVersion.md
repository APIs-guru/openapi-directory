# FileVersion

Information about the version of image store file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epoch_data_loss_number** | **str** | The epoch data loss number of image store file is used to indicate the status of data loss. | [optional] 
**version_number** | **str** | The current iamge store version number for the file is used in image store for checking whether it need to be updated. | [optional] 

## Example

```python
from openapi_client.models.file_version import FileVersion

# TODO update the JSON string below
json = "{}"
# create an instance of FileVersion from a JSON string
file_version_instance = FileVersion.from_json(json)
# print the JSON string representation of the object
print(FileVersion.to_json())

# convert the object into a dict
file_version_dict = file_version_instance.to_dict()
# create an instance of FileVersion from a dict
file_version_from_dict = FileVersion.from_dict(file_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


