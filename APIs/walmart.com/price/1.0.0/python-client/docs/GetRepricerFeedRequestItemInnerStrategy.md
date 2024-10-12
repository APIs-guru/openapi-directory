# GetRepricerFeedRequestItemInnerStrategy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_seller_allowed_price** | **float** |  | [optional] 
**minimum_seller_allowed_price** | **float** |  | [optional] 
**repricer_strategy** | **str** |  | [optional] 
**sku** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_repricer_feed_request_item_inner_strategy import GetRepricerFeedRequestItemInnerStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of GetRepricerFeedRequestItemInnerStrategy from a JSON string
get_repricer_feed_request_item_inner_strategy_instance = GetRepricerFeedRequestItemInnerStrategy.from_json(json)
# print the JSON string representation of the object
print(GetRepricerFeedRequestItemInnerStrategy.to_json())

# convert the object into a dict
get_repricer_feed_request_item_inner_strategy_dict = get_repricer_feed_request_item_inner_strategy_instance.to_dict()
# create an instance of GetRepricerFeedRequestItemInnerStrategy from a dict
get_repricer_feed_request_item_inner_strategy_from_dict = GetRepricerFeedRequestItemInnerStrategy.from_dict(get_repricer_feed_request_item_inner_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


