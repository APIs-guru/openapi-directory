# ListTeachersResponse

Response when listing teachers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying the next page of results to return. If empty, no further results are available. | [optional] 
**teachers** | [**List[Teacher]**](Teacher.md) | Teachers who match the list request. | [optional] 

## Example

```python
from openapi_client.models.list_teachers_response import ListTeachersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTeachersResponse from a JSON string
list_teachers_response_instance = ListTeachersResponse.from_json(json)
# print the JSON string representation of the object
print(ListTeachersResponse.to_json())

# convert the object into a dict
list_teachers_response_dict = list_teachers_response_instance.to_dict()
# create an instance of ListTeachersResponse from a dict
list_teachers_response_from_dict = ListTeachersResponse.from_dict(list_teachers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


