# FileReference

A reference to a file, used for user inputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_path** | **str** | A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding) | [optional] 

## Example

```python
from openapi_client.models.file_reference import FileReference

# TODO update the JSON string below
json = "{}"
# create an instance of FileReference from a JSON string
file_reference_instance = FileReference.from_json(json)
# print the JSON string representation of the object
print(FileReference.to_json())

# convert the object into a dict
file_reference_dict = file_reference_instance.to_dict()
# create an instance of FileReference from a dict
file_reference_from_dict = FileReference.from_dict(file_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


