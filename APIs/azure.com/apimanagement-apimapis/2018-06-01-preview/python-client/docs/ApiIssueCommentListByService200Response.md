# ApiIssueCommentListByService200Response

Paged Issue Comment list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[ApiIssueCommentListByService200ResponseValueInner]**](ApiIssueCommentListByService200ResponseValueInner.md) | Issue Comment values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.api_issue_comment_list_by_service200_response import ApiIssueCommentListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueCommentListByService200Response from a JSON string
api_issue_comment_list_by_service200_response_instance = ApiIssueCommentListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ApiIssueCommentListByService200Response.to_json())

# convert the object into a dict
api_issue_comment_list_by_service200_response_dict = api_issue_comment_list_by_service200_response_instance.to_dict()
# create an instance of ApiIssueCommentListByService200Response from a dict
api_issue_comment_list_by_service200_response_from_dict = ApiIssueCommentListByService200Response.from_dict(api_issue_comment_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


