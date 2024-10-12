# CourseMetaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_image_url** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**id** | **str** |  | [optional] 
**metadata** | [**CourseMetaResponseMetadata**](CourseMetaResponseMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**tasks_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.course_meta_response import CourseMetaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CourseMetaResponse from a JSON string
course_meta_response_instance = CourseMetaResponse.from_json(json)
# print the JSON string representation of the object
print(CourseMetaResponse.to_json())

# convert the object into a dict
course_meta_response_dict = course_meta_response_instance.to_dict()
# create an instance of CourseMetaResponse from a dict
course_meta_response_from_dict = CourseMetaResponse.from_dict(course_meta_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


