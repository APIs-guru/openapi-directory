# ListStudentSubmissionsResponse

Response when listing student submissions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 
**student_submissions** | [**List[StudentSubmission]**](StudentSubmission.md) | Student work that matches the request. | [optional] 

## Example

```python
from openapi_client.models.list_student_submissions_response import ListStudentSubmissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStudentSubmissionsResponse from a JSON string
list_student_submissions_response_instance = ListStudentSubmissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStudentSubmissionsResponse.to_json())

# convert the object into a dict
list_student_submissions_response_dict = list_student_submissions_response_instance.to_dict()
# create an instance of ListStudentSubmissionsResponse from a dict
list_student_submissions_response_from_dict = ListStudentSubmissionsResponse.from_dict(list_student_submissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


