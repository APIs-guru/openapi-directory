# BiddingStrategy

Settings that control the bid strategy. Bid strategy determines the bid price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_bid** | [**FixedBidStrategy**](FixedBidStrategy.md) |  | [optional] 
**maximize_spend_auto_bid** | [**MaximizeSpendBidStrategy**](MaximizeSpendBidStrategy.md) |  | [optional] 
**performance_goal_auto_bid** | [**PerformanceGoalBidStrategy**](PerformanceGoalBidStrategy.md) |  | [optional] 
**youtube_and_partners_bid** | [**YoutubeAndPartnersBiddingStrategy**](YoutubeAndPartnersBiddingStrategy.md) |  | [optional] 

## Example

```python
from openapi_client.models.bidding_strategy import BiddingStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of BiddingStrategy from a JSON string
bidding_strategy_instance = BiddingStrategy.from_json(json)
# print the JSON string representation of the object
print(BiddingStrategy.to_json())

# convert the object into a dict
bidding_strategy_dict = bidding_strategy_instance.to_dict()
# create an instance of BiddingStrategy from a dict
bidding_strategy_from_dict = BiddingStrategy.from_dict(bidding_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


