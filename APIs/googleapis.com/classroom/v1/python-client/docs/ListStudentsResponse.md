# ListStudentsResponse

Response when listing students.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 
**students** | [**List[Student]**](Student.md) | Students who match the list request. | [optional] 

## Example

```python
from openapi_client.models.list_students_response import ListStudentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStudentsResponse from a JSON string
list_students_response_instance = ListStudentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStudentsResponse.to_json())

# convert the object into a dict
list_students_response_dict = list_students_response_instance.to_dict()
# create an instance of ListStudentsResponse from a dict
list_students_response_from_dict = ListStudentsResponse.from_dict(list_students_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


