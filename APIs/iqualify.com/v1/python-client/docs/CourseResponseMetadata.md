# CourseResponseMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**learning_outcomes** | [**List[LearningOutcomes]**](LearningOutcomes.md) |  | [optional] 

## Example

```python
from openapi_client.models.course_response_metadata import CourseResponseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CourseResponseMetadata from a JSON string
course_response_metadata_instance = CourseResponseMetadata.from_json(json)
# print the JSON string representation of the object
print(CourseResponseMetadata.to_json())

# convert the object into a dict
course_response_metadata_dict = course_response_metadata_instance.to_dict()
# create an instance of CourseResponseMetadata from a dict
course_response_metadata_from_dict = CourseResponseMetadata.from_dict(course_response_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


