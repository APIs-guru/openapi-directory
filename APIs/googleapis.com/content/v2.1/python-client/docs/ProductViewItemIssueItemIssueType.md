# ProductViewItemIssueItemIssueType

Type of the item issue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_attribute** | **str** | Canonical attribute name for attribute-specific issues. | [optional] 
**code** | **str** | Error code of the issue. | [optional] 

## Example

```python
from openapi_client.models.product_view_item_issue_item_issue_type import ProductViewItemIssueItemIssueType

# TODO update the JSON string below
json = "{}"
# create an instance of ProductViewItemIssueItemIssueType from a JSON string
product_view_item_issue_item_issue_type_instance = ProductViewItemIssueItemIssueType.from_json(json)
# print the JSON string representation of the object
print(ProductViewItemIssueItemIssueType.to_json())

# convert the object into a dict
product_view_item_issue_item_issue_type_dict = product_view_item_issue_item_issue_type_instance.to_dict()
# create an instance of ProductViewItemIssueItemIssueType from a dict
product_view_item_issue_item_issue_type_from_dict = ProductViewItemIssueItemIssueType.from_dict(product_view_item_issue_item_issue_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


