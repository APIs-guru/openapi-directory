# ListAssignmentsResponse

The response for ReservationService.ListAssignments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignments** | [**List[Assignment]**](Assignment.md) | List of assignments visible to the user. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_assignments_response import ListAssignmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAssignmentsResponse from a JSON string
list_assignments_response_instance = ListAssignmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAssignmentsResponse.to_json())

# convert the object into a dict
list_assignments_response_dict = list_assignments_response_instance.to_dict()
# create an instance of ListAssignmentsResponse from a dict
list_assignments_response_from_dict = ListAssignmentsResponse.from_dict(list_assignments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


