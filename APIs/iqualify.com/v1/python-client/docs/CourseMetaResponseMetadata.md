# CourseMetaResponseMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**learning_outcomes** | [**List[LearningOutcomes]**](LearningOutcomes.md) |  | [optional] 
**level** | **str** |  | [optional] 
**root_content_id** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**topic** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.course_meta_response_metadata import CourseMetaResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CourseMetaResponseMetadata from a JSON string
course_meta_response_metadata_instance = CourseMetaResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(CourseMetaResponseMetadata.to_json())

# convert the object into a dict
course_meta_response_metadata_dict = course_meta_response_metadata_instance.to_dict()
# create an instance of CourseMetaResponseMetadata from a dict
course_meta_response_metadata_from_dict = CourseMetaResponseMetadata.from_dict(course_meta_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


