# ProductViewItemIssueIssueSeverityPerDestination

Issue severity for all affected regions in a destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**demoted_countries** | **List[str]** | List of demoted countries in the destination. | [optional] 
**destination** | **str** | Issue destination. | [optional] 
**disapproved_countries** | **List[str]** | List of disapproved countries in the destination. | [optional] 

## Example

```python
from openapi_client.models.product_view_item_issue_issue_severity_per_destination import ProductViewItemIssueIssueSeverityPerDestination

# TODO update the JSON string below
json = "{}"
# create an instance of ProductViewItemIssueIssueSeverityPerDestination from a JSON string
product_view_item_issue_issue_severity_per_destination_instance = ProductViewItemIssueIssueSeverityPerDestination.from_json(json)
# print the JSON string representation of the object
print(ProductViewItemIssueIssueSeverityPerDestination.to_json())

# convert the object into a dict
product_view_item_issue_issue_severity_per_destination_dict = product_view_item_issue_issue_severity_per_destination_instance.to_dict()
# create an instance of ProductViewItemIssueIssueSeverityPerDestination from a dict
product_view_item_issue_issue_severity_per_destination_from_dict = ProductViewItemIssueIssueSeverityPerDestination.from_dict(product_view_item_issue_issue_severity_per_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


