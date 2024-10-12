# RenderProductIssuesResponse

Response containing support content and actions for listed product issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_dispute_resolution** | [**AlternateDisputeResolution**](AlternateDisputeResolution.md) |  | [optional] 
**issues** | [**List[ProductIssue]**](ProductIssue.md) | List of issues for a given product. This list can be shown with compressed, expandable items. In the compressed form, the title and impact should be shown for each issue. Once the issue is expanded, the detailed content and available actions should be rendered. | [optional] 

## Example

```python
from openapi_client.models.render_product_issues_response import RenderProductIssuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RenderProductIssuesResponse from a JSON string
render_product_issues_response_instance = RenderProductIssuesResponse.from_json(json)
# print the JSON string representation of the object
print(RenderProductIssuesResponse.to_json())

# convert the object into a dict
render_product_issues_response_dict = render_product_issues_response_instance.to_dict()
# create an instance of RenderProductIssuesResponse from a dict
render_product_issues_response_from_dict = RenderProductIssuesResponse.from_dict(render_product_issues_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


