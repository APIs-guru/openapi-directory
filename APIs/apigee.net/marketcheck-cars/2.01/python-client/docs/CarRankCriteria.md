# CarRankCriteria

Ranking query request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carfax_1_owner** | **float** | Flag to indicate whether listing is carfax_1_owner.Weight for this is ranking process between 0-1. | [optional] [default to 0.9]
**carfax_clean_title** | **float** | Flag to indicate whether listing is carfax_clean_title.Weight for this is ranking process between 0-1 | [optional] [default to 0.9]
**dom** | **float** | Days on Market value for the car based on current and historical listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1 | [optional] [default to 0.9]
**dom_180** | **float** | Days on Market value for the car based on current and last 6 month listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1 | [optional] [default to 0.9]
**dom_active** | **float** | Days on Market value for the car based on current and last 30 days listings found in the Marketcheck database for this car.Weight for this is ranking process between 0-1 | [optional] [default to 0.9]
**is_certified** | **float** | Certified car.Weight for this is ranking process between 0-1 | [optional] [default to 1]
**miles** | **float** | Odometer reading / reported miles usage for the car.Weight for this is ranking process between 0-1 | [optional] [default to 0.9]
**price** | **float** | Asking price for the vehicle. Weight for this is ranking process between 0-1. | [optional] [default to 0.9]

## Example

```python
from openapi_client.models.car_rank_criteria import CarRankCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of CarRankCriteria from a JSON string
car_rank_criteria_instance = CarRankCriteria.from_json(json)
# print the JSON string representation of the object
print(CarRankCriteria.to_json())

# convert the object into a dict
car_rank_criteria_dict = car_rank_criteria_instance.to_dict()
# create an instance of CarRankCriteria from a dict
car_rank_criteria_from_dict = CarRankCriteria.from_dict(car_rank_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


