# XcodeArchiveProject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_target_id** | **str** | The Id of the target to archive | 
**project_name** | **str** | The project to archive container name | 
**project_path** | **str** | Full path of the target project | [optional] 

## Example

```python
from openapi_client.models.xcode_archive_project import XcodeArchiveProject

# TODO update the JSON string below
json = "{}"
# create an instance of XcodeArchiveProject from a JSON string
xcode_archive_project_instance = XcodeArchiveProject.from_json(json)
# print the JSON string representation of the object
print(XcodeArchiveProject.to_json())

# convert the object into a dict
xcode_archive_project_dict = xcode_archive_project_instance.to_dict()
# create an instance of XcodeArchiveProject from a dict
xcode_archive_project_from_dict = XcodeArchiveProject.from_dict(xcode_archive_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


