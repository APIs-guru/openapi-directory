# CourseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_image_url** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**id** | **str** |  | [optional] 
**metadata** | [**CourseResponseMetadata**](CourseResponseMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.course_response import CourseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CourseResponse from a JSON string
course_response_instance = CourseResponse.from_json(json)
# print the JSON string representation of the object
print(CourseResponse.to_json())

# convert the object into a dict
course_response_dict = course_response_instance.to_dict()
# create an instance of CourseResponse from a dict
course_response_from_dict = CourseResponse.from_dict(course_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


