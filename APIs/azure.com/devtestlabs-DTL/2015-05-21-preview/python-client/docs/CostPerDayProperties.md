# CostPerDayProperties

The per-day properties of a cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost** | **float** | The cost of the cost item. | [optional] 
**cost_type** | **str** | The type of the cost. | [optional] 
**var_date** | **datetime** | The date of the cost item. | [optional] 

## Example

```python
from openapi_client.models.cost_per_day_properties import CostPerDayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CostPerDayProperties from a JSON string
cost_per_day_properties_instance = CostPerDayProperties.from_json(json)
# print the JSON string representation of the object
print(CostPerDayProperties.to_json())

# convert the object into a dict
cost_per_day_properties_dict = cost_per_day_properties_instance.to_dict()
# create an instance of CostPerDayProperties from a dict
cost_per_day_properties_from_dict = CostPerDayProperties.from_dict(cost_per_day_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


