# CourseMaterialSet

A set of materials that appears on the \"About\" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**materials** | [**List[CourseMaterial]**](CourseMaterial.md) | Materials attached to this set. | [optional] 
**title** | **str** | Title for this set. | [optional] 

## Example

```python
from openapi_client.models.course_material_set import CourseMaterialSet

# TODO update the JSON string below
json = "{}"
# create an instance of CourseMaterialSet from a JSON string
course_material_set_instance = CourseMaterialSet.from_json(json)
# print the JSON string representation of the object
print(CourseMaterialSet.to_json())

# convert the object into a dict
course_material_set_dict = course_material_set_instance.to_dict()
# create an instance of CourseMaterialSet from a dict
course_material_set_from_dict = CourseMaterialSet.from_dict(course_material_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


