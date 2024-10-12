# ListCoursesResponse

Response when listing courses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courses** | [**List[Course]**](Course.md) | Courses that match the list request. | [optional] 
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 

## Example

```python
from openapi_client.models.list_courses_response import ListCoursesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCoursesResponse from a JSON string
list_courses_response_instance = ListCoursesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCoursesResponse.to_json())

# convert the object into a dict
list_courses_response_dict = list_courses_response_instance.to_dict()
# create an instance of ListCoursesResponse from a dict
list_courses_response_from_dict = ListCoursesResponse.from_dict(list_courses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


