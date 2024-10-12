# BudgetSummary

Summarized information of an individual campaign budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_budget_id** | **str** | Corresponds to the external_budget_id of a campaign budget. If the value is not set in the campaign budget, this field will be empty. | [optional] 
**pre_tax_amount_micros** | **str** | The sum of charges made under this budget before taxes, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 
**prisma_cpe_code** | [**PrismaCpeCode**](PrismaCpeCode.md) |  | [optional] 
**tax_amount_micros** | **str** | The amount of tax applied to charges under this budget, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 
**total_amount_micros** | **str** | The total sum of charges made under this budget, including tax, in micros of the invoice&#39;s currency. For example, if currency_code is &#x60;USD&#x60;, then 1000000 represents one US dollar. | [optional] 

## Example

```python
from openapi_client.models.budget_summary import BudgetSummary

# TODO update the JSON string below
json = "{}"
# create an instance of BudgetSummary from a JSON string
budget_summary_instance = BudgetSummary.from_json(json)
# print the JSON string representation of the object
print(BudgetSummary.to_json())

# convert the object into a dict
budget_summary_dict = budget_summary_instance.to_dict()
# create an instance of BudgetSummary from a dict
budget_summary_from_dict = BudgetSummary.from_dict(budget_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


