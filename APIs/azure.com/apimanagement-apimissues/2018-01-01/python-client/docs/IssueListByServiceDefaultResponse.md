# IssueListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**IssueListByServiceDefaultResponseError**](IssueListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.issue_list_by_service_default_response import IssueListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IssueListByServiceDefaultResponse from a JSON string
issue_list_by_service_default_response_instance = IssueListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(IssueListByServiceDefaultResponse.to_json())

# convert the object into a dict
issue_list_by_service_default_response_dict = issue_list_by_service_default_response_instance.to_dict()
# create an instance of IssueListByServiceDefaultResponse from a dict
issue_list_by_service_default_response_from_dict = IssueListByServiceDefaultResponse.from_dict(issue_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


