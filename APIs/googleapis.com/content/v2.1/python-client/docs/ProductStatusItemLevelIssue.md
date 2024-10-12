# ProductStatusItemLevelIssue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_countries** | **List[str]** | List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer. | [optional] 
**attribute_name** | **str** | The attribute&#39;s name, if the issue is caused by a single attribute. | [optional] 
**code** | **str** | The error code of the issue. | [optional] 
**description** | **str** | A short issue description in English. | [optional] 
**destination** | **str** | The destination the issue applies to. | [optional] 
**detail** | **str** | A detailed issue description in English. | [optional] 
**documentation** | **str** | The URL of a web page to help with resolving this issue. | [optional] 
**resolution** | **str** | Whether the issue can be resolved by the merchant. | [optional] 
**servability** | **str** | How this issue affects serving of the offer. | [optional] 

## Example

```python
from openapi_client.models.product_status_item_level_issue import ProductStatusItemLevelIssue

# TODO update the JSON string below
json = "{}"
# create an instance of ProductStatusItemLevelIssue from a JSON string
product_status_item_level_issue_instance = ProductStatusItemLevelIssue.from_json(json)
# print the JSON string representation of the object
print(ProductStatusItemLevelIssue.to_json())

# convert the object into a dict
product_status_item_level_issue_dict = product_status_item_level_issue_instance.to_dict()
# create an instance of ProductStatusItemLevelIssue from a dict
product_status_item_level_issue_from_dict = ProductStatusItemLevelIssue.from_dict(product_status_item_level_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


