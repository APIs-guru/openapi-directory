# ProductViewItemIssue

Item issue associated with the product.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_type** | [**ProductViewItemIssueItemIssueType**](ProductViewItemIssueItemIssueType.md) |  | [optional] 
**resolution** | **str** | Item issue resolution. | [optional] 
**severity** | [**ProductViewItemIssueItemIssueSeverity**](ProductViewItemIssueItemIssueSeverity.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_view_item_issue import ProductViewItemIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ProductViewItemIssue from a JSON string
product_view_item_issue_instance = ProductViewItemIssue.from_json(json)
# print the JSON string representation of the object
print(ProductViewItemIssue.to_json())

# convert the object into a dict
product_view_item_issue_dict = product_view_item_issue_instance.to_dict()
# create an instance of ProductViewItemIssue from a dict
product_view_item_issue_from_dict = ProductViewItemIssue.from_dict(product_view_item_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


