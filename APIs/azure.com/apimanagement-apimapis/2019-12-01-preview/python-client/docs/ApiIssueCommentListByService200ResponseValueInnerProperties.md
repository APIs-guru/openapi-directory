# ApiIssueCommentListByService200ResponseValueInnerProperties

Issue Comment contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | Date and time when the comment was created. | [optional] 
**text** | **str** | Comment text. | 
**user_id** | **str** | A resource identifier for the user who left the comment. | 

## Example

```python
from openapi_client.models.api_issue_comment_list_by_service200_response_value_inner_properties import ApiIssueCommentListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueCommentListByService200ResponseValueInnerProperties from a JSON string
api_issue_comment_list_by_service200_response_value_inner_properties_instance = ApiIssueCommentListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiIssueCommentListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_issue_comment_list_by_service200_response_value_inner_properties_dict = api_issue_comment_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiIssueCommentListByService200ResponseValueInnerProperties from a dict
api_issue_comment_list_by_service200_response_value_inner_properties_from_dict = ApiIssueCommentListByService200ResponseValueInnerProperties.from_dict(api_issue_comment_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


