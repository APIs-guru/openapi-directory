# IssueListByService200Response

Paged Issue list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[IssueListByService200ResponseValueInner]**](IssueListByService200ResponseValueInner.md) | Issue values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_list_by_service200_response import IssueListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IssueListByService200Response from a JSON string
issue_list_by_service200_response_instance = IssueListByService200Response.from_json(json)
# print the JSON string representation of the object
print(IssueListByService200Response.to_json())

# convert the object into a dict
issue_list_by_service200_response_dict = issue_list_by_service200_response_instance.to_dict()
# create an instance of IssueListByService200Response from a dict
issue_list_by_service200_response_from_dict = IssueListByService200Response.from_dict(issue_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


