# InsertionOrderBudgetSegment

Settings that control the budget of a single budget segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_amount_micros** | **str** | Required. The budget amount the insertion order will spend for the given date_range. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. | [optional] 
**campaign_budget_id** | **str** | The budget_id of the campaign budget that this insertion order budget segment is a part of. | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**description** | **str** | The budget segment description. It can be used to enter Purchase Order information for each budget segment and have that information printed on the invoices. Must be UTF-8 encoded. | [optional] 

## Example

```python
from openapi_client.models.insertion_order_budget_segment import InsertionOrderBudgetSegment

# TODO update the JSON string below
json = "{}"
# create an instance of InsertionOrderBudgetSegment from a JSON string
insertion_order_budget_segment_instance = InsertionOrderBudgetSegment.from_json(json)
# print the JSON string representation of the object
print(InsertionOrderBudgetSegment.to_json())

# convert the object into a dict
insertion_order_budget_segment_dict = insertion_order_budget_segment_instance.to_dict()
# create an instance of InsertionOrderBudgetSegment from a dict
insertion_order_budget_segment_from_dict = InsertionOrderBudgetSegment.from_dict(insertion_order_budget_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


