# VersionFile

A static content file that is part of a version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **str** | The SHA256 content hash of the file. | [optional] 
**path** | **str** | The URI at which the file&#39;s content should display. | [optional] 
**status** | **str** | Output only. The current status of a particular file in the specified version. The value will be either &#x60;pending upload&#x60; or &#x60;uploaded&#x60;. | [optional] 

## Example

```python
from openapi_client.models.version_file import VersionFile

# TODO update the JSON string below
json = "{}"
# create an instance of VersionFile from a JSON string
version_file_instance = VersionFile.from_json(json)
# print the JSON string representation of the object
print(VersionFile.to_json())

# convert the object into a dict
version_file_dict = version_file_instance.to_dict()
# create an instance of VersionFile from a dict
version_file_from_dict = VersionFile.from_dict(version_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


