# ProductViewItemIssueItemIssueSeverity

Severity of an issue per destination in a region, and aggregated severity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_severity** | **str** | Severity of an issue aggregated for destination. | [optional] 
**severity_per_destination** | [**List[ProductViewItemIssueIssueSeverityPerDestination]**](ProductViewItemIssueIssueSeverityPerDestination.md) | Item issue severity for every destination. | [optional] 

## Example

```python
from openapi_client.models.product_view_item_issue_item_issue_severity import ProductViewItemIssueItemIssueSeverity

# TODO update the JSON string below
json = "{}"
# create an instance of ProductViewItemIssueItemIssueSeverity from a JSON string
product_view_item_issue_item_issue_severity_instance = ProductViewItemIssueItemIssueSeverity.from_json(json)
# print the JSON string representation of the object
print(ProductViewItemIssueItemIssueSeverity.to_json())

# convert the object into a dict
product_view_item_issue_item_issue_severity_dict = product_view_item_issue_item_issue_severity_instance.to_dict()
# create an instance of ProductViewItemIssueItemIssueSeverity from a dict
product_view_item_issue_item_issue_severity_from_dict = ProductViewItemIssueItemIssueSeverity.from_dict(product_view_item_issue_item_issue_severity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


