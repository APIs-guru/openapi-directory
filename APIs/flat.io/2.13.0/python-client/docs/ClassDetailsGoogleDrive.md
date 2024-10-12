# ClassDetailsGoogleDrive

Google Drive course-related information provided by Google Classroom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**teacher_folder_alternate_link** | **str** | [Teachers only] The Drive URL of the teachers&#39; folder  | [optional] 
**teacher_folder_id** | **str** | [Teachers only] The Drive directory identifier of the teachers&#39; folder  | [optional] 

## Example

```python
from openapi_client.models.class_details_google_drive import ClassDetailsGoogleDrive

# TODO update the JSON string below
json = "{}"
# create an instance of ClassDetailsGoogleDrive from a JSON string
class_details_google_drive_instance = ClassDetailsGoogleDrive.from_json(json)
# print the JSON string representation of the object
print(ClassDetailsGoogleDrive.to_json())

# convert the object into a dict
class_details_google_drive_dict = class_details_google_drive_instance.to_dict()
# create an instance of ClassDetailsGoogleDrive from a dict
class_details_google_drive_from_dict = ClassDetailsGoogleDrive.from_dict(class_details_google_drive_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


