# CarSearchStats


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dom** | [**StatsItem**](StatsItem.md) |  | [optional] 
**dom_180** | [**StatsItem**](StatsItem.md) |  | [optional] 
**dom_active** | [**StatsItem**](StatsItem.md) |  | [optional] 
**finance_down_payment** | [**StatsItem**](StatsItem.md) |  | [optional] 
**finance_down_payment_per** | [**StatsItem**](StatsItem.md) |  | [optional] 
**finance_emp** | [**StatsItem**](StatsItem.md) |  | [optional] 
**finance_loan_apr** | [**StatsItem**](StatsItem.md) |  | [optional] 
**finance_loan_term** | [**StatsItem**](StatsItem.md) |  | [optional] 
**lease_down_payment** | [**StatsItem**](StatsItem.md) |  | [optional] 
**lease_emp** | [**StatsItem**](StatsItem.md) |  | [optional] 
**lease_term** | [**StatsItem**](StatsItem.md) |  | [optional] 
**miles** | [**StatsItem**](StatsItem.md) |  | [optional] 
**msrp** | [**StatsItem**](StatsItem.md) |  | [optional] 
**price** | [**StatsItem**](StatsItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.car_search_stats import CarSearchStats

# TODO update the JSON string below
json = "{}"
# create an instance of CarSearchStats from a JSON string
car_search_stats_instance = CarSearchStats.from_json(json)
# print the JSON string representation of the object
print(CarSearchStats.to_json())

# convert the object into a dict
car_search_stats_dict = car_search_stats_instance.to_dict()
# create an instance of CarSearchStats from a dict
car_search_stats_from_dict = CarSearchStats.from_dict(car_search_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


