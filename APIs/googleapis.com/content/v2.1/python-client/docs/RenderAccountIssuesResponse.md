# RenderAccountIssuesResponse

Response containing support content and actions for listed account issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_dispute_resolution** | [**AlternateDisputeResolution**](AlternateDisputeResolution.md) |  | [optional] 
**issues** | [**List[AccountIssue]**](AccountIssue.md) | List of account issues for a given account. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered. | [optional] 

## Example

```python
from openapi_client.models.render_account_issues_response import RenderAccountIssuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RenderAccountIssuesResponse from a JSON string
render_account_issues_response_instance = RenderAccountIssuesResponse.from_json(json)
# print the JSON string representation of the object
print(RenderAccountIssuesResponse.to_json())

# convert the object into a dict
render_account_issues_response_dict = render_account_issues_response_instance.to_dict()
# create an instance of RenderAccountIssuesResponse from a dict
render_account_issues_response_from_dict = RenderAccountIssuesResponse.from_dict(render_account_issues_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


