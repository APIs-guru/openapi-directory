# CourseMaterial

A material attached to a course as part of a material set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drive_file** | [**DriveFile**](DriveFile.md) |  | [optional] 
**form** | [**Form**](Form.md) |  | [optional] 
**link** | [**Link**](Link.md) |  | [optional] 
**you_tube_video** | [**YouTubeVideo**](YouTubeVideo.md) |  | [optional] 

## Example

```python
from openapi_client.models.course_material import CourseMaterial

# TODO update the JSON string below
json = "{}"
# create an instance of CourseMaterial from a JSON string
course_material_instance = CourseMaterial.from_json(json)
# print the JSON string representation of the object
print(CourseMaterial.to_json())

# convert the object into a dict
course_material_dict = course_material_instance.to_dict()
# create an instance of CourseMaterial from a dict
course_material_from_dict = CourseMaterial.from_dict(course_material_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


