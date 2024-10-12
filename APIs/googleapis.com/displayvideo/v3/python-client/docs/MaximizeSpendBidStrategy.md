# MaximizeSpendBidStrategy

A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_bidding_algorithm_id** | **str** | The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to &#x60;BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO&#x60;. | [optional] 
**max_average_cpm_bid_amount_micros** | **str** | The maximum average CPM that may be bid, in micros of the advertiser&#39;s currency. Must be greater than or equal to a billable unit of the given currency. For example, 1500000 represents 1.5 standard units of the currency. | [optional] 
**performance_goal_type** | **str** | Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. &#x60;BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM&#x60; is not supported for this strategy. | [optional] 
**raise_bid_for_deals** | **bool** | Whether the strategy takes deal floor prices into account. | [optional] 

## Example

```python
from openapi_client.models.maximize_spend_bid_strategy import MaximizeSpendBidStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of MaximizeSpendBidStrategy from a JSON string
maximize_spend_bid_strategy_instance = MaximizeSpendBidStrategy.from_json(json)
# print the JSON string representation of the object
print(MaximizeSpendBidStrategy.to_json())

# convert the object into a dict
maximize_spend_bid_strategy_dict = maximize_spend_bid_strategy_instance.to_dict()
# create an instance of MaximizeSpendBidStrategy from a dict
maximize_spend_bid_strategy_from_dict = MaximizeSpendBidStrategy.from_dict(maximize_spend_bid_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


