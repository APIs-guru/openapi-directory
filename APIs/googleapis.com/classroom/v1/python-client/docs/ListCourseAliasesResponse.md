# ListCourseAliasesResponse

Response when listing course aliases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | [**List[CourseAlias]**](CourseAlias.md) | The course aliases. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

## Example

```python
from openapi_client.models.list_course_aliases_response import ListCourseAliasesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCourseAliasesResponse from a JSON string
list_course_aliases_response_instance = ListCourseAliasesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCourseAliasesResponse.to_json())

# convert the object into a dict
list_course_aliases_response_dict = list_course_aliases_response_instance.to_dict()
# create an instance of ListCourseAliasesResponse from a dict
list_course_aliases_response_from_dict = ListCourseAliasesResponse.from_dict(list_course_aliases_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


