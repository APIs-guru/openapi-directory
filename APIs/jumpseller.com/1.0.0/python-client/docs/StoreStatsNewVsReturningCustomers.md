# StoreStatsNewVsReturningCustomers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_global** | **int** | Global percentage of new vs returning customers. | [optional] 
**per_day** | [**List[NewVsReturning]**](NewVsReturning.md) | Numbers of new and returning customers per day. | [optional] 

## Example

```python
from openapi_client.models.store_stats_new_vs_returning_customers import StoreStatsNewVsReturningCustomers

# TODO update the JSON string below
json = "{}"
# create an instance of StoreStatsNewVsReturningCustomers from a JSON string
store_stats_new_vs_returning_customers_instance = StoreStatsNewVsReturningCustomers.from_json(json)
# print the JSON string representation of the object
print(StoreStatsNewVsReturningCustomers.to_json())

# convert the object into a dict
store_stats_new_vs_returning_customers_dict = store_stats_new_vs_returning_customers_instance.to_dict()
# create an instance of StoreStatsNewVsReturningCustomers from a dict
store_stats_new_vs_returning_customers_from_dict = StoreStatsNewVsReturningCustomers.from_dict(store_stats_new_vs_returning_customers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


