# LineItemBudget

Settings that control how budget is allocated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_allocation_type** | **str** | Required. The type of the budget allocation. &#x60;LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC&#x60; is only applicable when automatic budget allocation is enabled for the parent insertion order. | [optional] 
**budget_unit** | **str** | Output only. The budget unit specifies whether the budget is currency based or impression based. This value is inherited from the parent insertion order. | [optional] [readonly] 
**max_amount** | **str** | The maximum budget amount the line item will spend. Must be greater than 0. When budget_allocation_type is: * &#x60;LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC&#x60;, this field is immutable and is set by the system. * &#x60;LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED&#x60;, if budget_unit is: - &#x60;BUDGET_UNIT_CURRENCY&#x60;, this field represents maximum budget amount to spend, in micros of the advertiser&#39;s currency. For example, 1500000 represents 1.5 standard units of the currency. - &#x60;BUDGET_UNIT_IMPRESSIONS&#x60;, this field represents the maximum number of impressions to serve. * &#x60;LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED&#x60;, this field is not applicable and will be ignored by the system. | [optional] 

## Example

```python
from openapi_client.models.line_item_budget import LineItemBudget

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemBudget from a JSON string
line_item_budget_instance = LineItemBudget.from_json(json)
# print the JSON string representation of the object
print(LineItemBudget.to_json())

# convert the object into a dict
line_item_budget_dict = line_item_budget_instance.to_dict()
# create an instance of LineItemBudget from a dict
line_item_budget_from_dict = LineItemBudget.from_dict(line_item_budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


