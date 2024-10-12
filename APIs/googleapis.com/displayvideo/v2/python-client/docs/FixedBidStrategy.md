# FixedBidStrategy

A strategy that uses a fixed bidding price.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_amount_micros** | **str** | The fixed bid amount, in micros of the advertiser&#39;s currency. For insertion order entity, bid_amount_micros should be set as 0. For line item entity, bid_amount_micros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000. For example, 1500000 represents 1.5 standard units of the currency. | [optional] 

## Example

```python
from openapi_client.models.fixed_bid_strategy import FixedBidStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of FixedBidStrategy from a JSON string
fixed_bid_strategy_instance = FixedBidStrategy.from_json(json)
# print the JSON string representation of the object
print(FixedBidStrategy.to_json())

# convert the object into a dict
fixed_bid_strategy_dict = fixed_bid_strategy_instance.to_dict()
# create an instance of FixedBidStrategy from a dict
fixed_bid_strategy_from_dict = FixedBidStrategy.from_dict(fixed_bid_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


