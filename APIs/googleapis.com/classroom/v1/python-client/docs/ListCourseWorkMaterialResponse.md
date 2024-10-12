# ListCourseWorkMaterialResponse

Response when listing course work material.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**course_work_material** | [**List[CourseWorkMaterial]**](CourseWorkMaterial.md) | Course work material items that match the request. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

## Example

```python
from openapi_client.models.list_course_work_material_response import ListCourseWorkMaterialResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCourseWorkMaterialResponse from a JSON string
list_course_work_material_response_instance = ListCourseWorkMaterialResponse.from_json(json)
# print the JSON string representation of the object
print(ListCourseWorkMaterialResponse.to_json())

# convert the object into a dict
list_course_work_material_response_dict = list_course_work_material_response_instance.to_dict()
# create an instance of ListCourseWorkMaterialResponse from a dict
list_course_work_material_response_from_dict = ListCourseWorkMaterialResponse.from_dict(list_course_work_material_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


