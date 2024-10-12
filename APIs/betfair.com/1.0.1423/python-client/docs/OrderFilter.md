# OrderFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ids** | **List[int]** | Internal use only &amp; should not be set on your filter (your subscription is already locked to your account). If set subscription will fail. | [optional] 
**customer_strategy_refs** | **List[str]** | Restricts to specified customerStrategyRefs; this will filter orders and StrategyMatchChanges accordingly (Note: overall postition is not filtered) | [optional] 
**include_overall_position** | **bool** | Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default&#x3D;true | [optional] 
**partition_matched_by_strategy_ref** | **bool** | Returns strategy positions (See: OrderRunnerChange.smc&#x3D;Map&lt;customerStrategyRef, StrategyMatchChange&gt;) - these are sent in delta format as per overall position. Default&#x3D;false | [optional] 

## Example

```python
from openapi_client.models.order_filter import OrderFilter

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFilter from a JSON string
order_filter_instance = OrderFilter.from_json(json)
# print the JSON string representation of the object
print(OrderFilter.to_json())

# convert the object into a dict
order_filter_dict = order_filter_instance.to_dict()
# create an instance of OrderFilter from a dict
order_filter_from_dict = OrderFilter.from_dict(order_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


