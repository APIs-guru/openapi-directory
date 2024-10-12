# StoreStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_sold** | [**List[BestSold]**](BestSold.md) | Top 10 best sold products. | [optional] 
**conversions** | [**StoreStatsConversions**](StoreStatsConversions.md) |  | [optional] 
**currency** | **str** | Store currency. | [optional] 
**daily_visits** | [**List[DailyVisits]**](DailyVisits.md) | Visits per day. | [optional] 
**var_from** | **str** | Statistics start date. | [optional] 
**new_vs_returning_customers** | [**StoreStatsNewVsReturningCustomers**](StoreStatsNewVsReturningCustomers.md) |  | [optional] 
**new_vs_returning_orders** | [**StoreStatsNewVsReturningCustomers**](StoreStatsNewVsReturningCustomers.md) |  | [optional] 
**orders** | [**StoreStatsOrders**](StoreStatsOrders.md) |  | [optional] 
**payment_methods** | [**List[PaymentMethodFreq]**](PaymentMethodFreq.md) | Store payment methods and their frequency. | [optional] 
**referrers** | [**List[Referrer]**](Referrer.md) | Top 10 referrer sources and their frequency. | [optional] 
**region_orders** | [**StoreStatsRegionOrders**](StoreStatsRegionOrders.md) |  | [optional] 
**search_frequencies_all** | **List[object]** | Number of times each search was conducted under the form of an aggregation query. | [optional] 
**search_frequencies_without_results** | **List[object]** | Number of times each search with zero results was conducted under the form of an aggregation query. | [optional] 
**shipping_methods** | [**List[ShippingMethodFreq]**](ShippingMethodFreq.md) | Store shipping methods and their frequency. | [optional] 
**to** | **str** | Statistics end date. | [optional] 
**traffic_type** | [**List[TrafficType]**](TrafficType.md) | Type of store traffic and its frequency. | [optional] 
**visits** | **int** | Total number of visits. | [optional] 

## Example

```python
from openapi_client.models.store_stats import StoreStats

# TODO update the JSON string below
json = "{}"
# create an instance of StoreStats from a JSON string
store_stats_instance = StoreStats.from_json(json)
# print the JSON string representation of the object
print(StoreStats.to_json())

# convert the object into a dict
store_stats_dict = store_stats_instance.to_dict()
# create an instance of StoreStats from a dict
store_stats_from_dict = StoreStats.from_dict(store_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


