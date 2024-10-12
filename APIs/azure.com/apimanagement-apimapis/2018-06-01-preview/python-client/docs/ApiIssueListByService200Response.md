# ApiIssueListByService200Response

Paged Issue list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiIssueListByService200ResponseValueInner]**](ApiIssueListByService200ResponseValueInner.md) | Issue values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_issue_list_by_service200_response import ApiIssueListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueListByService200Response from a JSON string
api_issue_list_by_service200_response_instance = ApiIssueListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiIssueListByService200Response.to_json())

# convert the object into a dict
api_issue_list_by_service200_response_dict = api_issue_list_by_service200_response_instance.to_dict()
# create an instance of ApiIssueListByService200Response from a dict
api_issue_list_by_service200_response_from_dict = ApiIssueListByService200Response.from_dict(api_issue_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


