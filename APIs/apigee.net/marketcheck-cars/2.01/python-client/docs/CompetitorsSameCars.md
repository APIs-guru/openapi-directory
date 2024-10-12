# CompetitorsSameCars


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_market_value** | **float** | Estimated market value of year make model combination | [optional] 
**avg_miles** | **float** | Mileage of year make model combination | [optional] 
**avg_price** | **float** | Price of year make model combination | [optional] 
**name** | **str** | ymm_comb_name | [optional] 

## Example

```python
from openapi_client.models.competitors_same_cars import CompetitorsSameCars

# TODO update the JSON string below
json = "{}"
# create an instance of CompetitorsSameCars from a JSON string
competitors_same_cars_instance = CompetitorsSameCars.from_json(json)
# print the JSON string representation of the object
print(CompetitorsSameCars.to_json())

# convert the object into a dict
competitors_same_cars_dict = competitors_same_cars_instance.to_dict()
# create an instance of CompetitorsSameCars from a dict
competitors_same_cars_from_dict = CompetitorsSameCars.from_dict(competitors_same_cars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


