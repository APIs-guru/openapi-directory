# CompetitorsSimilarCars


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_market_value** | **float** | Average market value of year make model combination | [optional] 
**avg_miles** | **float** | Average mileage of year make model combination | [optional] 
**avg_price** | **float** | Average price of year make model combination | [optional] 
**name** | **str** | ymm_comb_name | [optional] 

## Example

```python
from openapi_client.models.competitors_similar_cars import CompetitorsSimilarCars

# TODO update the JSON string below
json = "{}"
# create an instance of CompetitorsSimilarCars from a JSON string
competitors_similar_cars_instance = CompetitorsSimilarCars.from_json(json)
# print the JSON string representation of the object
print(CompetitorsSimilarCars.to_json())

# convert the object into a dict
competitors_similar_cars_dict = competitors_similar_cars_instance.to_dict()
# create an instance of CompetitorsSimilarCars from a dict
competitors_similar_cars_from_dict = CompetitorsSimilarCars.from_dict(competitors_similar_cars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


